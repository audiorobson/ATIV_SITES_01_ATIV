import { readFileSync } from "node:fs";
import { groups } from "./token-meta.mjs";

export function parseRootCustomProperties(css) {
  const match = css.match(/:root\s*\{([\s\S]*?)\n\}/);
  if (!match) {
    throw new Error("Bloco :root nao encontrado.");
  }

  const tokens = [];
  const seen = new Set();

  for (const item of match[1].matchAll(/--ativ-[\w-]+\s*:\s*([^;]+);/g)) {
    const name = item[0].slice(0, item[0].indexOf(":")).trim();
    const value = item[1].trim();
    if (seen.has(name)) {
      throw new Error(`Token duplicado em :root: ${name}`);
    }
    seen.add(name);
    tokens.push({ name, value });
  }

  return tokens;
}

export function readCssFile(path) {
  return readFileSync(path, "utf8");
}

export function buildContract(masterTokens) {
  const names = masterTokens.map((token) => token.name);
  const missingMeta = names.filter((name) => !groups[name]);
  const extraMeta = Object.keys(groups).filter((name) => !names.includes(name));

  if (missingMeta.length > 0 || extraMeta.length > 0) {
    throw new Error(
      `Metadata dessincronizada. Faltando: ${missingMeta.join(", ") || "—"}. Extra: ${extraMeta.join(", ") || "—"}.`,
    );
  }

  const tokens = {};
  for (const { name, value } of masterTokens) {
    tokens[name] = {
      cssVar: name,
      value,
      ...groups[name],
      source: "design_guide/brand/tokens/ativ-ui.css",
    };
  }

  return tokens;
}

export function renderTokensCss(masterTokens) {
  const lines = [
    "/*",
    " * ATIV — tokens de producao.",
    " * Fonte de verdade: design_guide/brand/tokens/ativ-ui.css",
    " * Contrato serializavel: brand/tokens.json",
    " * Nao invente valores. Tailwind e consumidor derivado.",
    " */",
    "",
    ":root {",
  ];

  for (const { name, value } of masterTokens) {
    lines.push(`  ${name}: ${value};`);
  }

  lines.push("}", "");
  return lines.join("\n");
}

export function extractHex(css) {
  return [...css.matchAll(/#(?:[0-9A-Fa-f]{3,8})\b/g)].map((match) => match[0].toUpperCase());
}

export function hasRemoteImport(css) {
  return /@import\s+(?:url\()?['"]?https?:/i.test(css);
}

export function bracesBalanced(css) {
  let count = 0;
  for (const char of css) {
    if (char === "{") count += 1;
    if (char === "}") count -= 1;
    if (count < 0) return false;
  }
  return count === 0;
}
