import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";
import {
  brandTokensPath,
  groups,
  masterCssPath,
  masterExceptionsNotExtracted,
  packageTokensPath,
  productionTokensCssPath,
  prohibited,
  recipes,
} from "./lib/token-meta.mjs";
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
  assert.equal(hasRemoteImport(readRepo("packages/ui/src/styles/index.css")), false);
  assert.equal(bracesBalanced(actual), true);
  assert.equal(bracesBalanced(readRepo("packages/ui/src/styles/foundations.css")), true);
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

  for (const hex of productionHex) {
    assert.equal(approved.has(hex), true, hex);
    assert.equal(prohibited.hex.includes(hex), false, hex);
  }

  assert.deepEqual(foundationHex, []);
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
  const rawCubics = foundationCss.match(/cubic-bezier\([^)]+\)/g) ?? [];
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
  ];

  for (const target of exportTargets) {
    readFileSync(resolve(packageRoot, target), "utf8");
  }

  assert.equal(pkg.name, "@ativ/ui");
  assert.equal(pkg.dependencies, undefined);
  assert.equal(pkg.devDependencies, undefined);
});
