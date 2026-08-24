import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";
import {
  brandTokensPath,
  groups,
  logos,
  masterCssPath,
  masterExceptionsNotExtracted,
  packageTokensPath,
  productionTokensCssPath,
  prohibited,
  recipes,
  typography,
} from "./lib/token-meta.mjs";
import { contrastRatio, ratioLabel } from "./lib/contrast.mjs";
import {
  bracesBalanced,
  extractHex,
  hasRemoteImport,
  parseRootCustomProperties,
  renderTokensCss,
} from "./lib/css-tokens.mjs";
import { buildTokenDocument, serializeTokenDocument } from "./sync-tokens.mjs";

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), "../../..");
const packageRoot = resolve(repoRoot, "packages/ui");
const spaceScale = ["0", "4px", "8px", "12px", "16px", "24px", "32px", "48px", "72px", "96px", "144px"];
const radii = ["6px", "4px", "10px", "100px"];
const durations = ["90ms", "180ms", "280ms", "460ms", "900ms"];
const easings = [
  "cubic-bezier(.4, 0, 1, 1)",
  "cubic-bezier(0, 0, .2, 1)",
  "cubic-bezier(.2, 0, 0, 1)",
  "cubic-bezier(.16, 1, .3, 1)",
];

function readRepo(relativePath) {
  return readFileSync(resolve(repoRoot, relativePath), "utf8");
}

function documentedLiterals() {
  const values = [
    ...Object.values(recipes).flatMap((recipe) => recipe.values),
    ...masterExceptionsNotExtracted.flatMap((item) => item.values),
    ".01ms",
    "0ms",
    "1fr",
    "100%",
  ];
  return new Set(values);
}

test("JSON e valido, deterministico e tem nomes unicos", () => {
  const expected = serializeTokenDocument(buildTokenDocument());
  const brand = readRepo(brandTokensPath);
  const packaged = readRepo(packageTokensPath);
  const parsed = JSON.parse(brand);

  assert.equal(brand, expected);
  assert.equal(packaged, expected);
  assert.equal(parsed.meta.precedence.includes("ativ-ui.css"), true);

  const names = Object.keys(parsed.tokens);
  assert.equal(new Set(names).size, names.length);
  assert.equal(names.length, Object.keys(groups).length);
});

test("paridade dos valores canonicos entre JSON e CSS mestre", () => {
  const masterTokens = parseRootCustomProperties(readRepo(masterCssPath));
  const jsonTokens = JSON.parse(readRepo(brandTokensPath)).tokens;

  assert.deepEqual(
    masterTokens.map((token) => token.name),
    Object.keys(jsonTokens),
  );

  for (const { name, value } of masterTokens) {
    assert.equal(jsonTokens[name].value, value, name);
    assert.equal(jsonTokens[name].cssVar, name, name);
  }
});

test("CSS de producao reproduz o :root canonico e nao importa remoto", () => {
  const masterCss = readRepo(masterCssPath);
  const masterTokens = parseRootCustomProperties(masterCss);
  const actual = readRepo(productionTokensCssPath);

  assert.equal(actual, renderTokensCss(masterTokens));
  assert.equal(hasRemoteImport(actual), false);
  assert.equal(hasRemoteImport(readRepo("packages/ui/src/styles/foundations.css")), false);
  assert.equal(hasRemoteImport(readRepo("packages/ui/src/styles/controls.css")), false);
  assert.equal(hasRemoteImport(readRepo("packages/ui/src/styles/index.css")), false);
  assert.equal(bracesBalanced(actual), true);
  assert.equal(bracesBalanced(readRepo("packages/ui/src/styles/foundations.css")), true);
  assert.equal(bracesBalanced(readRepo("packages/ui/src/styles/controls.css")), true);
  assert.deepEqual(parseRootCustomProperties(actual), masterTokens);
});

test("ausencia de hex nao aprovado e de preto puro", () => {
  const jsonTokens = JSON.parse(readRepo(brandTokensPath)).tokens;
  const approved = new Set(
    Object.values(jsonTokens)
      .map((token) => token.value.toUpperCase())
      .filter((value) => value.startsWith("#")),
  );
  const productionHex = extractHex(readRepo(productionTokensCssPath));
  const foundationHex = extractHex(readRepo("packages/ui/src/styles/foundations.css"));
  const controlHex = extractHex(readRepo("packages/ui/src/styles/controls.css"));

  for (const hex of productionHex) {
    assert.equal(approved.has(hex), true, hex);
    assert.equal(prohibited.hex.includes(hex), false, hex);
  }

  assert.deepEqual(foundationHex, []);
  assert.deepEqual(controlHex, []);
  assert.equal(approved.has("#000000"), false);
  assert.equal(approved.has("#000"), false);
});

test("tokens de espaco, raio, duracao e curva ficam no sistema", () => {
  const jsonTokens = JSON.parse(readRepo(brandTokensPath)).tokens;

  for (const [name, token] of Object.entries(jsonTokens)) {
    if (token.group === "space") {
      assert.equal(spaceScale.includes(token.value), true, name);
    }
    if (token.group === "radius") {
      assert.equal(radii.includes(token.value), true, name);
    }
    if (token.group === "motion.duration") {
      assert.equal(durations.includes(token.value), true, name);
    }
    if (token.group === "motion.easing") {
      assert.equal(easings.includes(token.value), true, name);
    }
  }

  const foundationCss = readRepo("packages/ui/src/styles/foundations.css");
  const controlCss = readRepo("packages/ui/src/styles/controls.css");
  const rawCubics = [...(foundationCss.match(/cubic-bezier\([^)]+\)/g) ?? []), ...(controlCss.match(/cubic-bezier\([^)]+\)/g) ?? [])];
  assert.deepEqual(rawCubics, []);

  const rawDurations = foundationCss.match(/\d+ms|\.\d+ms/g) ?? [];
  const allowedDurations = new Set([...durations, ...documentedLiterals()]);
  for (const value of rawDurations) {
    assert.equal(allowedDurations.has(value), true, value);
  }
});

test("exports do pacote apontam somente para arquivos existentes", () => {
  const pkg = JSON.parse(readRepo("packages/ui/package.json"));
  const exportTargets = [
    pkg.exports["."],
    pkg.exports["./tokens.json"],
    pkg.exports["./styles.css"],
    pkg.exports["./styles/tokens.css"],
    pkg.exports["./styles/foundations.css"],
    pkg.exports["./styles/controls.css"],
  ];

  for (const target of exportTargets) {
    readFileSync(resolve(packageRoot, target), "utf8");
  }

  assert.equal(pkg.name, "@ativ/ui");
  assert.equal(pkg.dependencies, undefined);
  assert.equal(pkg.devDependencies, undefined);
});

test("controles extraidos do mestre sem sombra decorativa nem pulso", () => {
  const css = readRepo("packages/ui/src/styles/controls.css");
  assert.match(css, /\.ativ-btn\b/);
  assert.match(css, /\.ativ-cartao\b/);
  assert.match(css, /\.ativ-campo\b/);
  assert.equal(/box-shadow/i.test(css), false);
  assert.equal(/rgba\(/i.test(css), false);
  assert.equal(/1\.6s/.test(css), false);
  assert.equal(/\.ativ-pulso/.test(css), false);
});

test("logos de producao copiam o kit e mapeiam superficies de UI", () => {
  const parsed = JSON.parse(readRepo(brandTokensPath));
  const sourceDir = resolve(repoRoot, logos.source);
  const productionDir = resolve(repoRoot, logos.production);
  const sourceFiles = readdirSync(sourceDir).filter((name) => name.endsWith(".svg")).sort();
  const productionFiles = readdirSync(productionDir).filter((name) => name.endsWith(".svg")).sort();

  assert.deepEqual(sourceFiles, [...logos.files].sort());
  assert.deepEqual(productionFiles, [...logos.files].sort());
  assert.deepEqual(parsed.logos, logos);

  for (const file of logos.files) {
    assert.equal(readRepo(`${logos.source}/${file}`), readRepo(`${logos.production}/${file}`), file);
  }

  const uiFiles = Object.values(logos.ui).flatMap((entry) =>
    [entry.lockup, entry.wordmark, entry.icon].filter(Boolean),
  );
  for (const file of uiFiles) {
    assert.equal(logos.documentOnly.includes(file), false, file);
    assert.equal(logos.notUi.includes(file), false, file);
  }
});

test("contrato de tipografia usa familias do mestre e nao aponta CDN", () => {
  const parsed = JSON.parse(readRepo(brandTokensPath));
  const tokens = parsed.tokens;

  assert.deepEqual(parsed.typography, typography);
  assert.equal(parsed.typography.loading.remoteImport, false);
  assert.equal(parsed.typography.loading.fontDisplay, "swap");
  assert.equal(parsed.typography.loading.strategy, "local");
  assert.equal(tokens["--ativ-font-display"].value, "'Archivo', sans-serif");
  assert.equal(tokens["--ativ-font-corpo"].value, "'IBM Plex Sans', sans-serif");
  assert.equal(tokens["--ativ-font-dados"].value, "'IBM Plex Mono', monospace");
  assert.equal(tokens["--ativ-peso-display"].value, "900");
  assert.equal(tokens["--ativ-peso-secao"].value, "800");
  assert.equal(tokens["--ativ-peso-forte"].value, "600");

  const cssBundle = [
    readRepo("packages/ui/src/styles/tokens.css"),
    readRepo("packages/ui/src/styles/foundations.css"),
    readRepo("packages/ui/src/styles/controls.css"),
    readRepo("packages/ui/src/styles/index.css"),
  ].join("\n");

  assert.equal(hasRemoteImport(cssBundle), false);
  assert.equal(/@font-face/i.test(cssBundle), false);
  assert.equal(/fonts\.google|gstatic\.com/i.test(cssBundle), false);

  for (const family of parsed.typography.forbiddenFamilies) {
    const pattern = new RegExp(`font-family:[^;]*${family}\\b`, "i");
    assert.equal(pattern.test(cssBundle), false, family);
  }
});

test("showcase interno e estatico, semantico e sem host remoto", () => {
  const html = readRepo("packages/ui/showcase/index.html");

  assert.match(html, /class="ativ-salto"/);
  assert.match(html, /href="#conteudo"/);
  assert.match(html, /id="conteudo"/);
  assert.equal((html.match(/<h1[\s>]/g) ?? []).length, 1);
  assert.match(html, /ativ-escuro/);
  assert.match(html, /ativ-claro/);
  assert.match(html, /href="\.\.\/src\/styles\/index\.css"/);
  assert.match(html, /brand\/logo\/logo-2t-claro\.svg/);
  assert.match(html, /brand\/logo\/logo-2t-indigo\.svg/);
  assert.match(html, /noindex/);
  assert.equal(/<script[\s>]/i.test(html), false);
  assert.equal(/googleapis|gstatic|fonts\.google|cdn\.|unpkg|jsdelivr|typekit/i.test(html), false);
  assert.match(html, /ativ-dropdown/);
  assert.match(html, /ativ-dropdown__painel is-aberto/);
  assert.match(html, /ativ-toggle/);
  assert.match(html, /ativ-radio/);
  assert.match(html, /ativ-checkbox/);
  assert.match(html, /ativ-slider/);
  assert.match(html, /ativ-busca/);
  assert.equal(/box-shadow/i.test(html), false);
});

test("pares de contraste do kit batem com os HEX canonicos", () => {
  const parsed = JSON.parse(readRepo(brandTokensPath));
  const hexByToken = Object.fromEntries(
    Object.entries(parsed.tokens)
      .filter(([, token]) => token.value.startsWith("#"))
      .map(([name, token]) => [name, token.value]),
  );

  for (const pair of parsed.contrast.pairs) {
    const actual = ratioLabel(contrastRatio(hexByToken[pair.fg], hexByToken[pair.bg]));
    assert.equal(actual, pair.ratio, `${pair.fg} on ${pair.bg}`);
  }

  for (const rule of parsed.contrast.forbiddenText) {
    for (const background of rule.bg) {
      const ratio = contrastRatio(hexByToken[rule.fg], hexByToken[background]);
      assert.equal(ratio < 4.5, true, `${rule.fg} on ${background}`);
    }
  }
});
