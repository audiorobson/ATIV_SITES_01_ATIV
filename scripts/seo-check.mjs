import assert from "node:assert/strict";
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
const htmlFiles = files.filter(
  (file) => file.endsWith(".html") && !file.endsWith("404.html"),
);
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

const sitemap = await readFile(path.join(exportRoot, "sitemap.xml"), "utf8");
assert.doesNotMatch(
  sitemap,
  /<loc>[^<]*\/lp\//i,
  "sitemap must exclude /lp/**",
);

console.log(`SEO checks passed for ${htmlFiles.length} exported page(s).`);
