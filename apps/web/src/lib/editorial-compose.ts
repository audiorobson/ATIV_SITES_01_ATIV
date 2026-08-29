import type { ContentDocument } from "@ativ/content";

import {
  plainEditorialText,
  type EditorialBlock,
  type EditorialInline,
} from "./editorial-markdown";

export const editorialRouteLabels: Readonly<Record<string, string>> = {
  "/contato/": "Contato",
  "/solucoes/": "Soluções",
  "/solucoes/audiovisual/": "Integração audiovisual ponta a ponta",
  "/solucoes/sala-reuniao-hibrida-sao-paulo/": "Sala de reunião híbrida",
  "/solucoes/centro-comando-controle-noc-soc-sao-paulo/":
    "Centro de comando e controle",
  "/solucoes/auditorio-corporativo-sao-paulo/": "Auditório corporativo",
  "/solucoes/governo-tribunais-sao-paulo/": "Governo e tribunais",
  "/setores/": "Setores",
  "/setores/corporativo/": "Corporativo",
  "/setores/governo/": "Governo",
};

const nextByRoute: Readonly<Record<string, string>> = {
  "/solucoes/": "/solucoes/sala-reuniao-hibrida-sao-paulo/",
  "/solucoes/sala-reuniao-hibrida-sao-paulo/": "/solucoes/audiovisual/",
  "/setores/corporativo/": "/solucoes/sala-reuniao-hibrida-sao-paulo/",
};

export type EditorialSectionRole =
  | "problem"
  | "architecture"
  | "scope"
  | "spec"
  | "process"
  | "integrations"
  | "faq"
  | "related"
  | "next"
  | "body";

export type EditorialSection = Readonly<{
  heading?: Extract<EditorialBlock, { type: "h2" }>;
  blocks: readonly EditorialBlock[];
  role: EditorialSectionRole;
}>;

export type EditorialLink = Readonly<{
  href: string;
  label: string;
}>;

export function routeLabel(href: string): string {
  return editorialRouteLabels[href] ?? href.replaceAll("/", " ").trim();
}

const genericLinkLabels = new Set(["abrir página", "abrir", "leia mais"]);

export function firstLink(parts: readonly EditorialInline[]): EditorialLink | undefined {
  const link = parts.find((part) => part.type === "link");
  if (!link || link.type !== "link") return undefined;
  const generic = genericLinkLabels.has(link.value.toLowerCase());
  return {
    href: link.href,
    label: generic ? routeLabel(link.href) : link.value,
  };
}

export function linksInBlocks(blocks: readonly EditorialBlock[]): EditorialLink[] {
  const links: EditorialLink[] = [];
  const seen = new Set<string>();

  const push = (link: EditorialLink | undefined) => {
    if (!link || seen.has(link.href)) return;
    seen.add(link.href);
    links.push(link);
  };

  for (const block of blocks) {
    if (block.type === "p") {
      push(firstLink(block.inlines));
      continue;
    }
    if (block.type === "ul" || block.type === "ol") {
      for (const item of block.items) push(firstLink(item));
    }
  }

  return links;
}

export function groupEditorialSections(
  blocks: readonly EditorialBlock[],
): EditorialSection[] {
  const sections: EditorialSection[] = [];
  let heading: Extract<EditorialBlock, { type: "h2" }> | undefined;
  let body: EditorialBlock[] = [];

  const flush = () => {
    if (!heading && body.length === 0) return;
    sections.push({
      heading,
      blocks: body,
      role: classifySection(heading, body),
    });
    heading = undefined;
    body = [];
  };

  for (const block of blocks) {
    if (block.type === "h2") {
      flush();
      heading = block;
      continue;
    }
    body.push(block);
  }
  flush();
  return sections;
}

function classifySection(
  heading: Extract<EditorialBlock, { type: "h2" }> | undefined,
  blocks: readonly EditorialBlock[],
): EditorialSectionRole {
  const text = heading ? plainEditorialText(heading.inlines).toLowerCase() : "";

  if (/relacionad/.test(text)) return "related";
  if (text === "soluções" || /soluções indicadas/.test(text)) {
    return "integrations";
  }
  if (/faq/.test(text)) return "faq";
  if (/escopo/.test(text)) return "scope";
  if (/arquitetura/.test(text)) return "architecture";
  if (/contexto|o que a ativ integra|o que muda/.test(text)) return "problem";
  if (/interoperabilidade/.test(text)) return "integrations";
  if (/risco|como a ativ trabalha/.test(text)) return "process";
  if (blocks.some((block) => block.type === "table")) return "spec";
  if (isNextSection(text, blocks)) return "next";
  return "body";
}

function isNextSection(
  text: string,
  blocks: readonly EditorialBlock[],
): boolean {
  if (/descreva o ambiente|quantas salas/.test(text)) return true;
  const links = linksInBlocks(blocks);
  return (
    links.length > 0 &&
    links.every((link) => link.href === "/contato/") &&
    !blocks.some((block) => block.type === "table" || block.type === "pre")
  );
}

export function editorialRelatedLinks(
  document: ContentDocument,
  sections: readonly EditorialSection[],
): EditorialLink[] {
  const current = document.frontmatter.route;
  const next = editorialNextLink(document);
  const seen = new Set<string>([current, "/contato/"]);
  if (next) seen.add(next.href);

  const links: EditorialLink[] = [];
  const push = (href: string, label?: string) => {
    if (seen.has(href)) return;
    seen.add(href);
    links.push({ href, label: label ?? routeLabel(href) });
  };

  for (const href of document.frontmatter.internal_links) {
    push(href);
  }
  for (const section of sections) {
    if (section.role !== "related" && section.role !== "next") continue;
    for (const link of linksInBlocks(section.blocks)) {
      if (link.href === "/contato/") continue;
      push(link.href, routeLabel(link.href));
    }
  }

  return links.slice(0, 4);
}

export function editorialNextLink(
  document: ContentDocument,
): EditorialLink | undefined {
  const preferred = nextByRoute[document.frontmatter.route];
  const href =
    preferred ??
    document.frontmatter.internal_links.find(
      (link) =>
        link !== document.frontmatter.route &&
        link !== "/contato/" &&
        link in editorialRouteLabels,
    );
  if (!href) return undefined;
  return { href, label: routeLabel(href) };
}

export function editorialIndexHeadings(
  sections: readonly EditorialSection[],
  extra: readonly { id: string; label: string }[] = [],
  hasRelated = false,
): readonly { id: string; label: string }[] {
  const fromSections = sections
    .filter((section) => section.heading && section.role !== "related")
    .map((section) => ({
      id: section.heading?.id ?? "",
      label: plainEditorialText(section.heading?.inlines ?? []),
    }))
    .filter((item) => item.id);

  const related = hasRelated
    ? [{ id: "leituras-relacionadas", label: "Leituras relacionadas" }]
    : [];

  return [...extra, ...fromSections, ...related];
}
