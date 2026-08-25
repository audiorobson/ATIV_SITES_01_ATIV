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
  assert.equal(hasRemoteImport(readRepo("packages/ui/src/styles/layout.css")), false);
  assert.equal(hasRemoteImport(readRepo("packages/ui/src/styles/controls.css")), false);
  assert.equal(hasRemoteImport(readRepo("packages/ui/src/styles/technical-data.css")), false);
  assert.equal(hasRemoteImport(readRepo("packages/ui/src/styles/editorial.css")), false);
  assert.equal(hasRemoteImport(readRepo("packages/ui/src/styles/forms.css")), false);
  assert.equal(hasRemoteImport(readRepo("packages/ui/src/styles/chrome.css")), false);
  assert.equal(hasRemoteImport(readRepo("packages/ui/src/styles/pages.css")), false);
  assert.equal(hasRemoteImport(readRepo("packages/ui/src/styles/index.css")), false);
  assert.equal(bracesBalanced(actual), true);
  assert.equal(bracesBalanced(readRepo("packages/ui/src/styles/foundations.css")), true);
  assert.equal(bracesBalanced(readRepo("packages/ui/src/styles/layout.css")), true);
  assert.equal(bracesBalanced(readRepo("packages/ui/src/styles/controls.css")), true);
  assert.equal(bracesBalanced(readRepo("packages/ui/src/styles/technical-data.css")), true);
  assert.equal(bracesBalanced(readRepo("packages/ui/src/styles/editorial.css")), true);
  assert.equal(bracesBalanced(readRepo("packages/ui/src/styles/forms.css")), true);
  assert.equal(bracesBalanced(readRepo("packages/ui/src/styles/chrome.css")), true);
  assert.equal(bracesBalanced(readRepo("packages/ui/src/styles/pages.css")), true);
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
  const layoutHex = extractHex(readRepo("packages/ui/src/styles/layout.css"));
  const controlHex = extractHex(readRepo("packages/ui/src/styles/controls.css"));
  const technicalHex = extractHex(readRepo("packages/ui/src/styles/technical-data.css"));
  const editorialHex = extractHex(readRepo("packages/ui/src/styles/editorial.css"));
  const formsHex = extractHex(readRepo("packages/ui/src/styles/forms.css"));
  const chromeHex = extractHex(readRepo("packages/ui/src/styles/chrome.css"));
  const pagesHex = extractHex(readRepo("packages/ui/src/styles/pages.css"));

  for (const hex of productionHex) {
    assert.equal(approved.has(hex), true, hex);
    assert.equal(prohibited.hex.includes(hex), false, hex);
  }

  assert.deepEqual(foundationHex, []);
  assert.deepEqual(layoutHex, []);
  assert.deepEqual(controlHex, []);
  assert.deepEqual(technicalHex, []);
  assert.deepEqual(editorialHex, []);
  assert.deepEqual(formsHex, []);
  assert.deepEqual(chromeHex, []);
  assert.deepEqual(pagesHex, []);
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
  const layoutCss = readRepo("packages/ui/src/styles/layout.css");
  const controlCss = readRepo("packages/ui/src/styles/controls.css");
  const technicalCss = readRepo("packages/ui/src/styles/technical-data.css");
  const editorialCss = readRepo("packages/ui/src/styles/editorial.css");
  const formsCss = readRepo("packages/ui/src/styles/forms.css");
  const chromeCss = readRepo("packages/ui/src/styles/chrome.css");
  const pagesCss = readRepo("packages/ui/src/styles/pages.css");
  const rawCubics = [
    ...(foundationCss.match(/cubic-bezier\([^)]+\)/g) ?? []),
    ...(layoutCss.match(/cubic-bezier\([^)]+\)/g) ?? []),
    ...(controlCss.match(/cubic-bezier\([^)]+\)/g) ?? []),
    ...(technicalCss.match(/cubic-bezier\([^)]+\)/g) ?? []),
    ...(editorialCss.match(/cubic-bezier\([^)]+\)/g) ?? []),
    ...(formsCss.match(/cubic-bezier\([^)]+\)/g) ?? []),
    ...(chromeCss.match(/cubic-bezier\([^)]+\)/g) ?? []),
    ...(pagesCss.match(/cubic-bezier\([^)]+\)/g) ?? []),
  ];
  assert.deepEqual(rawCubics, []);

  const rawDurations = [...(foundationCss.match(/\d+ms|\.\d+ms/g) ?? []), ...(layoutCss.match(/\d+ms|\.\d+ms/g) ?? [])];
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
    pkg.exports["./styles/layout.css"],
    pkg.exports["./styles/controls.css"],
    pkg.exports["./styles/technical-data.css"],
    pkg.exports["./styles/editorial.css"],
    pkg.exports["./styles/forms.css"],
    pkg.exports["./styles/chrome.css"],
    pkg.exports["./styles/pages.css"],
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

test("dado tecnico compoe tokens oficiais e nao depende so de cor", () => {
  const css = readRepo("packages/ui/src/styles/technical-data.css");
  assert.match(css, /\.ativ-ficha\b/);
  assert.match(css, /\.ativ-pares\b/);
  assert.match(css, /\.ativ-par\b/);
  assert.match(css, /\.ativ-metrica\b/);
  assert.match(css, /\.ativ-indicador\b/);
  assert.match(css, /\.ativ-estado\b/);
  assert.match(css, /\.ativ-legenda\b/);
  assert.match(css, /\.ativ-config\b/);
  assert.match(css, /\.ativ-fluxo\b/);
  assert.match(css, /attr\(data-rotulo\)/);
  assert.match(css, /var\(--ativ-indicador-valor, 0%\)/);
  assert.equal(/16\s*\/\s*9/.test(css), false);
  assert.equal(/box-shadow/i.test(css), false);
  assert.equal(/linear-gradient|radial-gradient|conic-gradient/i.test(css), false);
  assert.equal(hasRemoteImport(css), false);
  assert.match(css, /font-family:\s*var\(--ativ-font-dados\)/);
  assert.match(css, /border-block-end:\s*var\(--ativ-borda\) dotted var\(--ativ-borda-cor\)/);
});

test("editorial usa medida oficial, print e nao inventa cor", () => {
  const css = readRepo("packages/ui/src/styles/editorial.css");
  assert.match(css, /\.ativ-editorial\b/);
  assert.match(css, /\.ativ-citacao\b/);
  assert.match(css, /\.ativ-nota\b/);
  assert.match(css, /\.ativ-chamada\b/);
  assert.match(css, /\.ativ-fonte\b/);
  assert.match(css, /max-inline-size:\s*var\(--ativ-grade-texto\)/);
  assert.match(css, /user-select:\s*text/);
  assert.match(css, /@media print/);
  assert.match(css, /text-decoration:\s*underline/);
  assert.equal(/box-shadow/i.test(css), false);
  assert.equal(/linear-gradient|radial-gradient|conic-gradient/i.test(css), false);
  assert.equal(hasRemoteImport(css), false);
  assert.equal(extractHex(css).length, 0);
});

test("formularios associam mensagem e nao dependem so de cor", () => {
  const css = readRepo("packages/ui/src/styles/forms.css");
  assert.match(css, /\.ativ-formulario\b/);
  assert.match(css, /\.ativ-campo-grupo\b/);
  assert.match(css, /\.ativ-textarea\b/);
  assert.match(css, /\.ativ-select\b/);
  assert.match(css, /\.ativ-conjunto\b/);
  assert.match(css, /\.ativ-escolha\b/);
  assert.match(css, /\.ativ-campo-erro\b/);
  assert.match(css, /\.ativ-alerta\b/);
  assert.match(css, /aria-invalid/);
  assert.match(css, /:user-invalid/);
  assert.match(css, /min-height:\s*var\(--ativ-alvo-min\)/);
  assert.match(css, /accent-color:\s*var\(--ativ-destaque\)/);
  assert.equal(/box-shadow/i.test(css), false);
  assert.equal(/1\.6s/.test(css), false);
  assert.equal(hasRemoteImport(css), false);
  assert.equal(extractHex(css).length, 0);
});

test("layout primitives usam tokens oficiais e nao inventam razao fotografica", () => {
  const css = readRepo("packages/ui/src/styles/layout.css");
  assert.match(css, /\.ativ-container\b/);
  assert.match(css, /\.ativ-secao\b/);
  assert.match(css, /\.ativ-pilha\b/);
  assert.match(css, /\.ativ-agrupamento\b/);
  assert.match(css, /\.ativ-grade--auto\b/);
  assert.match(css, /\.ativ-com-lateral\b/);
  assert.match(css, /\.ativ-quadro\b/);
  assert.match(css, /\.ativ-somente-leitura\b/);
  assert.match(css, /\.ativ-alvo-salto\b/);
  assert.equal(/16\s*\/\s*9/.test(css), false);
  assert.equal(/box-shadow/i.test(css), false);
  assert.equal(hasRemoteImport(css), false);
  assert.match(css, /scroll-margin-block:\s*var\(--ativ-alvo-min\)/);
  assert.match(css, /min-inline-size:\s*var\(--ativ-grade-texto\)/);
  assert.match(css, /\.ativ-quadro--vazio\b/);
  assert.match(css, /\.ativ-quadro--foto\b/);
  assert.match(css, /\.ativ-quadro--documento\b/);
  assert.match(css, /\.ativ-figura\b/);
  assert.match(css, /aspect-ratio:\s*210\s*\/\s*297/);
});

test("chrome de navegacao usa details, alvo 44px e nao inventa 16/9", () => {
  const css = readRepo("packages/ui/src/styles/chrome.css");
  assert.match(css, /\.ativ-topo\b/);
  assert.match(css, /\.ativ-nav\b/);
  assert.match(css, /\.ativ-menu\b/);
  assert.match(css, /\.ativ-rodape\b/);
  assert.match(css, /\.ativ-abertura\b/);
  assert.match(css, /\.ativ-faixa\b/);
  assert.match(css, /\.ativ-trilha\b/);
  assert.match(css, /min-height:\s*var\(--ativ-alvo-min\)/);
  assert.match(css, /max-width:\s*860px/);
  assert.match(css, /position:\s*absolute/);
  assert.equal(/16\s*\/\s*9/.test(css), false);
  assert.equal(/box-shadow/i.test(css), false);
  assert.equal(/linear-gradient|backdrop-filter|glass/i.test(css), false);
  assert.equal(hasRemoteImport(css), false);
  assert.equal(extractHex(css).length, 0);
});

test("paginas internas usam ancoras, alvo 44px e nao inventam 16/9", () => {
  const css = readRepo("packages/ui/src/styles/pages.css");
  assert.match(css, /\.ativ-pagina\b/);
  assert.match(css, /\.ativ-abertura-pagina\b/);
  assert.match(css, /\.ativ-pagina--solucao\b/);
  assert.match(css, /\.ativ-pagina--setor\b/);
  assert.match(css, /\.ativ-indice\b/);
  assert.match(css, /\.ativ-especificacao\b/);
  assert.match(css, /\.ativ-integracoes\b/);
  assert.match(css, /\.ativ-relacionados\b/);
  assert.match(css, /\.ativ-proxima\b/);
  assert.match(css, /:target/);
  assert.match(css, /position:\s*sticky/);
  assert.match(css, /max-width:\s*860px/);
  assert.match(css, /min-height:\s*var\(--ativ-alvo-min\)/);
  assert.match(css, /box-sizing:\s*border-box/);
  assert.match(
    css,
    /\.ativ-pagina:not\(\.ativ-pagina--largo\) \.ativ-com-lateral\s*\{[^}]*flex-direction:\s*column/,
  );
  assert.match(
    css,
    /\.ativ-pagina--estreito \.ativ-com-lateral\s*\{[^}]*flex-direction:\s*column/,
  );
  assert.equal(/16\s*\/\s*9/.test(css), false);
  assert.equal(/box-shadow/i.test(css), false);
  assert.equal(/linear-gradient|backdrop-filter|glass/i.test(css), false);
  assert.equal(hasRemoteImport(css), false);
  assert.equal(extractHex(css).length, 0);

  const solucao = readRepo("packages/ui/showcase/pagina-solucao.html");
  const setor = readRepo("packages/ui/showcase/pagina-setor.html");

  for (const html of [solucao, setor]) {
    assert.match(html, /class="ativ-salto"/);
    assert.match(html, /href="#conteudo"/);
    assert.match(html, /id="conteudo"/);
    assert.equal((html.match(/<h1[\s>]/g) ?? []).length, 1);
    assert.match(html, /noindex/);
    assert.equal(/<script[\s>]/i.test(html), false);
    assert.equal(/googleapis|gstatic|fonts\.google|cdn\.|unpkg|jsdelivr|typekit/i.test(html), false);
    assert.equal(/box-shadow/i.test(html), false);
    assert.match(html, /ativ-trilha/);
    assert.match(html, /ativ-abertura-pagina/);
    assert.match(html, /ativ-indice/);
    assert.match(html, /ativ-relacionados/);
    assert.match(html, /ativ-proxima/);
  }

  assert.match(solucao, /ativ-pagina--solucao/);
  assert.match(solucao, /href="#problema"/);
  assert.match(solucao, /href="#arquitetura"/);
  assert.match(solucao, /href="#escopo"/);
  assert.match(solucao, /href="#evidencia"/);
  assert.match(solucao, /ativ-ficha/);
  assert.match(solucao, /ativ-integracoes/);
  assert.match(setor, /ativ-pagina--setor/);
  assert.match(setor, /href="#contexto"/);
  assert.match(setor, /href="#operacao"/);
  assert.equal(/ativ-ficha/.test(setor), false);
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
    readRepo("packages/ui/src/styles/layout.css"),
    readRepo("packages/ui/src/styles/controls.css"),
    readRepo("packages/ui/src/styles/technical-data.css"),
    readRepo("packages/ui/src/styles/editorial.css"),
    readRepo("packages/ui/src/styles/forms.css"),
    readRepo("packages/ui/src/styles/chrome.css"),
    readRepo("packages/ui/src/styles/pages.css"),
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
  assert.match(html, /ativ-agrupamento/);
  assert.match(html, /ativ-com-lateral/);
  assert.match(html, /ativ-quadro/);
  assert.match(html, /ativ-somente-leitura/);
  assert.match(html, /ativ-grade--auto/);
  assert.match(html, /tabindex="-1"/);
  assert.match(html, /ativ-ficha/);
  assert.match(html, /ativ-pares/);
  assert.match(html, /ativ-metrica/);
  assert.match(html, /ativ-estado/);
  assert.match(html, /ativ-config/);
  assert.match(html, /ativ-fluxo/);
  assert.match(html, /Espécime/);
  assert.match(html, /ativ-editorial/);
  assert.match(html, /ativ-citacao/);
  assert.match(html, /ativ-nota/);
  assert.match(html, /ativ-chamada/);
  assert.match(html, /ativ-fonte/);
  assert.match(html, /Texto fictício/);
  assert.match(html, /ativ-formulario/);
  assert.match(html, /ativ-campo-grupo/);
  assert.match(html, /aria-describedby/);
  assert.match(html, /ativ-alerta/);
  assert.match(html, /ativ-conjunto/);
  assert.match(html, /ativ-topo/);
  assert.match(html, /ativ-menu/);
  assert.match(html, /ativ-rodape/);
  assert.match(html, /ativ-abertura/);
  assert.match(html, /ativ-trilha/);
  assert.match(html, /ativ-quadro--vazio/);
  assert.match(html, /ativ-figura/);
  assert.match(html, /ativ-legenda/);
  assert.match(html, /<details/);
  assert.match(html, /pagina-solucao\.html/);
  assert.match(html, /pagina-setor\.html/);
  assert.match(html, /ativ-pagina--estreito/);
  assert.match(html, /ativ-pagina--largo/);
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
