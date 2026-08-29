export type EditorialInline =
  | { type: "text"; value: string }
  | { type: "strong"; value: string }
  | { type: "link"; href: string; value: string };

export type EditorialBlock =
  | { type: "h2"; id: string; inlines: EditorialInline[] }
  | { type: "h3"; id: string; inlines: EditorialInline[] }
  | { type: "p"; inlines: EditorialInline[] }
  | { type: "ul" | "ol"; items: EditorialInline[][] }
  | { type: "pre"; value: string }
  | {
      type: "table";
      headers: string[];
      rows: EditorialInline[][][];
    };

const headingPattern = /^(#{2,3})\s+(.+)$/;
const unorderedPattern = /^[-*]\s+(.+)$/;
const orderedPattern = /^\d+\.\s+(.+)$/;
const tableRowPattern = /^\|(.+)\|$/;

export function isSafeEditorialHref(href: string): boolean {
  return (
    href.startsWith("/") ||
    href.startsWith("#") ||
    /^mailto:[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(href) ||
    /^tel:\+[0-9]{10,15}$/.test(href)
  );
}

export function headingId(text: string): string {
  return text
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function plainEditorialText(inlines: readonly EditorialInline[]): string {
  return inlines.map((part) => part.value).join("");
}

export function editorialSource(body: string): string {
  return body
    .replace(/^## Chrome\r?\n[\s\S]*?(?:\r?\n---\r?\n+|$)/m, "")
    .replace(/^## Links internos\r?\n[\s\S]*?(?=^## |\s*$)/m, "")
    .replace(/^## Notas ao revisor[\s\S]*$/m, "")
    .trim();
}

export function parseEditorialInlines(source: string): EditorialInline[] {
  const parts: EditorialInline[] = [];
  const token =
    /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|`([^`]+)`/g;
  let cursor = 0;

  for (const match of source.matchAll(token)) {
    const index = match.index ?? 0;
    if (index > cursor) {
      parts.push({ type: "text", value: source.slice(cursor, index) });
    }

    if (match[1] !== undefined && match[2] !== undefined) {
      const href = match[2];
      if (isSafeEditorialHref(href)) {
        parts.push({ type: "link", href, value: match[1] });
      } else {
        parts.push({ type: "text", value: match[1] });
      }
    } else if (match[3] !== undefined) {
      parts.push({ type: "strong", value: match[3] });
    } else if (match[4] !== undefined) {
      parts.push({ type: "text", value: match[4] });
    }

    cursor = index + match[0].length;
  }

  if (cursor < source.length) {
    parts.push({ type: "text", value: source.slice(cursor) });
  }

  return parts.filter((part) => part.value.length > 0);
}

function isTableSeparator(line: string): boolean {
  return /^\|?(?:\s*:?-+:?\s*\|)+\s*:?-+:?\s*\|?$/.test(line);
}

function tableCells(line: string): string[] {
  const match = line.match(tableRowPattern);
  if (!match?.[1]) return [];
  return match[1].split("|").map((cell) => cell.trim());
}

export function parseEditorialMarkdown(source: string): EditorialBlock[] {
  const lines = editorialSource(source).split(/\r?\n/);
  const blocks: EditorialBlock[] = [];
  const usedIds = new Set<string>();
  let index = 0;

  const uniqueId = (text: string): string => {
    const base = headingId(plainEditorialText(parseEditorialInlines(text))) || "secao";
    let id = base;
    let suffix = 2;
    while (usedIds.has(id)) {
      id = `${base}-${suffix}`;
      suffix += 1;
    }
    usedIds.add(id);
    return id;
  };

  while (index < lines.length) {
    const line = lines[index];
    if (line === undefined || line.trim() === "") {
      index += 1;
      continue;
    }

    if (line.startsWith("```")) {
      const fence: string[] = [];
      index += 1;
      while (index < lines.length && !lines[index]?.startsWith("```")) {
        fence.push(lines[index] ?? "");
        index += 1;
      }
      if (lines[index]?.startsWith("```")) index += 1;
      blocks.push({ type: "pre", value: fence.join("\n") });
      continue;
    }

    const heading = line.match(headingPattern);
    if (heading?.[1] && heading[2]) {
      blocks.push({
        type: heading[1] === "##" ? "h2" : "h3",
        id: uniqueId(heading[2]),
        inlines: parseEditorialInlines(heading[2]),
      });
      index += 1;
      continue;
    }

    if (tableRowPattern.test(line) && isTableSeparator(lines[index + 1] ?? "")) {
      const headers = tableCells(line);
      const rows: EditorialInline[][][] = [];
      index += 2;
      while (index < lines.length && tableRowPattern.test(lines[index] ?? "")) {
        rows.push(tableCells(lines[index] ?? "").map(parseEditorialInlines));
        index += 1;
      }
      blocks.push({ type: "table", headers, rows });
      continue;
    }

    const unordered = line.match(unorderedPattern);
    if (unordered?.[1]) {
      const items: EditorialInline[][] = [];
      while (index < lines.length) {
        const item = lines[index]?.match(unorderedPattern);
        if (!item?.[1]) break;
        items.push(parseEditorialInlines(item[1]));
        index += 1;
      }
      blocks.push({ type: "ul", items });
      continue;
    }

    const ordered = line.match(orderedPattern);
    if (ordered?.[1]) {
      const items: EditorialInline[][] = [];
      while (index < lines.length) {
        const item = lines[index]?.match(orderedPattern);
        if (!item?.[1]) break;
        items.push(parseEditorialInlines(item[1]));
        index += 1;
      }
      blocks.push({ type: "ol", items });
      continue;
    }

    const paragraph: string[] = [line];
    index += 1;
    while (index < lines.length) {
      const next = lines[index];
      if (
        next === undefined ||
        next.trim() === "" ||
        headingPattern.test(next) ||
        unorderedPattern.test(next) ||
        orderedPattern.test(next) ||
        next.startsWith("```") ||
        tableRowPattern.test(next)
      ) {
        break;
      }
      paragraph.push(next);
      index += 1;
    }
    blocks.push({
      type: "p",
      inlines: parseEditorialInlines(paragraph.join(" ")),
    });
  }

  return blocks;
}
