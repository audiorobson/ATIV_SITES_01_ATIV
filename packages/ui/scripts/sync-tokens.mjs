import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import {
  brandTokensPath,
  contrast,
  cssExports,
  logos,
  masterCssPath,
  masterExceptionsNotExtracted,
  packageTokensPath,
  productionTokensCssPath,
  prohibited,
  recipes,
  surfaces,
  typography,
} from "./lib/token-meta.mjs";
import { buildContract, parseRootCustomProperties, readCssFile, renderTokensCss } from "./lib/css-tokens.mjs";

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), "../../..");

export function buildTokenDocument() {
  const masterCss = readCssFile(resolve(repoRoot, masterCssPath));
  const masterTokens = parseRootCustomProperties(masterCss);
  const tokens = buildContract(masterTokens);

  return {
    meta: {
      name: "ATIV",
      version: "0.1.0",
      precedence: "design_guide/brand/tokens/ativ-ui.css always wins",
      source: {
        css: masterCssPath,
        docs: [
          "design_guide/docs/brand-system.md",
          "design_guide/INSTRUCAO_AGENTE_PAGINAS_E_DESIGN.md",
          "design_guide/brand/README.md",
        ],
      },
      consumers: {
        json: "brand/tokens.json",
        css: [
          "packages/ui/src/styles/tokens.css",
          "packages/ui/src/styles/foundations.css",
          "packages/ui/src/styles/layout.css",
          "packages/ui/src/styles/controls.css",
          "packages/ui/src/styles/technical-data.css",
          "packages/ui/src/styles/editorial.css",
          "packages/ui/src/styles/forms.css",
        ],
        package: "@ativ/ui",
        tailwind: "derived-only",
      },
      cssExports,
    },
    tokens,
    surfaces,
    recipes,
    logos,
    contrast,
    typography,
    masterExceptionsNotExtracted,
    prohibited,
  };
}

export function serializeTokenDocument(document) {
  return `${JSON.stringify(document, null, 2)}\n`;
}

export function writeTokenArtifacts() {
  const document = buildTokenDocument();
  const json = serializeTokenDocument(document);
  const masterCss = readCssFile(resolve(repoRoot, masterCssPath));
  const css = renderTokensCss(parseRootCustomProperties(masterCss));

  for (const relativePath of [brandTokensPath, packageTokensPath, productionTokensCssPath]) {
    const absolutePath = resolve(repoRoot, relativePath);
    mkdirSync(dirname(absolutePath), { recursive: true });
    writeFileSync(absolutePath, relativePath.endsWith(".css") ? css : json);
  }

  return { document, json, css };
}

const invokedDirectly =
  Boolean(process.argv[1]) && import.meta.url === pathToFileURL(resolve(process.argv[1])).href;

if (invokedDirectly) {
  writeTokenArtifacts();
  process.stdout.write("Token artifacts written.\n");
}
