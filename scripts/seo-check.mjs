import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";

const exportRoot = path.resolve(process.cwd(), "apps/web/out");

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(absolute)));
    else files.push(absolute);
  }
  return files;
}

assert.equal(
  (await stat(exportRoot)).isDirectory(),
  true,
  "Static export is required",
);
const files = await walk(exportRoot);
const htmlFiles = files.filter((file) => {
  if (!file.endsWith(".html")) return false;
  const relative = path.relative(exportRoot, file).replaceAll("\\", "/");
  return (
    relative !== "404.html" &&
    !relative.startsWith("404/") &&
    relative !== "_not-found.html" &&
    !relative.startsWith("_not-found/") &&
    relative !== "500.html" &&
    !relative.startsWith("500/")
  );
});
assert.ok(htmlFiles.length > 0, "At least one exported HTML page is required");

const exportedPaths = new Set(
  htmlFiles.map((file) => {
    const relative = path.relative(exportRoot, file).replaceAll("\\", "/");
    return relative === "index.html"
      ? "/"
      : `/${relative.replace(/index\.html$/, "")}`;
  }),
);

for (const file of htmlFiles) {
  const html = await readFile(file, "utf8");
  const label = path.relative(exportRoot, file);
  assert.match(html, /<title>[^<]+<\/title>/i, `${label}: title missing`);
  assert.match(
    html,
    /<meta name="description" content="[^"]+"/i,
    `${label}: description missing`,
  );
  assert.match(
    html,
    /<link rel="canonical" href="https?:\/\/[^"]+"/i,
    `${label}: canonical missing`,
  );
  assert.equal(
    (html.match(/<h1(?:\s[^>]*)?>/gi) ?? []).length,
    1,
    `${label}: exactly one H1 required`,
  );

  assert.doesNotMatch(
    html,
    /fonts\.googleapis|fonts\.gstatic|typekit|use\.typekit|fonts\.adobe/i,
    `${label}: remote font host is forbidden`,
  );
  assert.match(
    html,
    /rel="preload"[^>]+as="font"/i,
    `${label}: local font preload missing`,
  );

  for (const href of html.matchAll(/href="(\/[^"]*)"/g)) {
    const target = href[1].split(/[?#]/, 1)[0];
    if (target.startsWith("/_next/") || target.includes(".")) continue;
    const normalized = target.endsWith("/") ? target : `${target}/`;
    assert.ok(
      exportedPaths.has(normalized),
      `${label}: unresolved internal link ${target}`,
    );
  }
}

const robots = await readFile(path.join(exportRoot, "robots.txt"), "utf8");
assert.match(
  robots,
  /^Allow: \/$/m,
  "robots.txt must keep paid routes crawlable",
);
assert.doesNotMatch(
  robots,
  /^Disallow: \/lp\//m,
  "robots.txt must not block /lp/**",
);

const localFontFiles = [
  "archivo-latin-800-normal.woff2",
  "archivo-latin-900-normal.woff2",
  "ibm-plex-sans-latin-400-normal.woff2",
  "ibm-plex-sans-latin-500-normal.woff2",
  "ibm-plex-sans-latin-600-normal.woff2",
  "ibm-plex-mono-latin-400-normal.woff2",
  "ibm-plex-mono-latin-500-normal.woff2",
];

for (const fileName of localFontFiles) {
  assert.equal(
    (await stat(path.join(exportRoot, "fonts", fileName))).isFile(),
    true,
    `missing local font ${fileName}`,
  );
}

const cssBundle = (
  await Promise.all(
    files
      .filter((file) => file.endsWith(".css"))
      .map((file) => readFile(file, "utf8")),
  )
).join("\n");

assert.match(cssBundle, /@font-face/, "exported CSS must declare local fonts");
assert.match(
  cssBundle,
  /font-display:\s*swap/,
  "exported CSS must use font-display: swap",
);
assert.doesNotMatch(
  cssBundle,
  /fonts\.googleapis|fonts\.gstatic|typekit/i,
  "exported CSS must not call a remote font host",
);

const sitemap = await readFile(path.join(exportRoot, "sitemap.xml"), "utf8");
assert.doesNotMatch(
  sitemap,
  /<loc>[^<]*\/lp\//i,
  "sitemap must exclude /lp/**",
);
assert.doesNotMatch(
  sitemap,
  /<loc>[^<]*\/404/i,
  "sitemap must exclude the 404 surface",
);
assert.doesNotMatch(
  sitemap,
  /<loc>[^<]*\/500/i,
  "sitemap must exclude the 500 surface",
);

const notFoundFile = [
  path.join(exportRoot, "404.html"),
  path.join(exportRoot, "404", "index.html"),
].find((file) => existsSync(file));

assert.ok(notFoundFile, "static 404 export is required");
const notFoundHtml = await readFile(notFoundFile, "utf8");
assert.equal(
  (notFoundHtml.match(/<h1(?:\s[^>]*)?>/gi) ?? []).length,
  1,
  "404: exactly one H1 required",
);
assert.match(notFoundHtml, /noindex/i, "404: must stay noindex");
assert.match(
  notFoundHtml,
  /ativ-titulo-pagina/,
  "404: must use the display heading role",
);
assert.doesNotMatch(
  notFoundHtml,
  /This page could not be found/i,
  "404: must not keep the default Next.js copy",
);
assert.doesNotMatch(
  notFoundHtml,
  /fonts\.googleapis|fonts\.gstatic|typekit/i,
  "404: remote font host is forbidden",
);

const serverErrorFile = [
  path.join(exportRoot, "500.html"),
  path.join(exportRoot, "500", "index.html"),
].find((file) => existsSync(file));

assert.ok(serverErrorFile, "static 500 export is required");
const serverErrorHtml = await readFile(serverErrorFile, "utf8");
assert.equal(
  (serverErrorHtml.match(/<h1(?:\s[^>]*)?>/gi) ?? []).length,
  1,
  "500: exactly one H1 required",
);
assert.match(serverErrorHtml, /noindex/i, "500: must stay noindex");
assert.match(
  serverErrorHtml,
  /ativ-titulo-pagina/,
  "500: must use the display heading role",
);
assert.match(
  serverErrorHtml,
  /href="\/"/,
  "500: must offer a path back to the foundation",
);
assert.doesNotMatch(
  serverErrorHtml,
  /Internal Server Error|Application error/i,
  "500: must not keep the default Next.js copy",
);
assert.doesNotMatch(
  serverErrorHtml,
  /fonts\.googleapis|fonts\.gstatic|typekit/i,
  "500: remote font host is forbidden",
);

const htaccess = await readFile(path.join(exportRoot, ".htaccess"), "utf8");
assert.match(
  htaccess,
  /ErrorDocument\s+404\s+\/404\.html/,
  ".htaccess must map Apache 404 to the static ATIV surface",
);
assert.match(
  htaccess,
  /ErrorDocument\s+500\s+\/500\.html/,
  ".htaccess must map Apache 500 to the static ATIV surface",
);

console.log(`SEO checks passed for ${htmlFiles.length} exported page(s).`);
