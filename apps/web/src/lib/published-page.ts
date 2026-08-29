import type { ContentDocument } from "@ativ/content";

export const publishedPageContract = {
  headingClass: "ativ-titulo-pagina",
  skipTarget: "conteudo-principal",
  cta: "Voltar ao início",
  limits: [
    "O corpo Markdown permanece texto nesta etapa.",
    "A rota ainda não entra no sitemap.",
    "Indexação comercial só abre depois do template HTML editorial.",
  ],
} as const;

export function publishedPageEyebrow(document: ContentDocument): string {
  return `Publicação — ${document.frontmatter.page_type}`;
}
