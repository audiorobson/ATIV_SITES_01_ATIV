import type { ContentDocument } from "@ativ/content";

import { foundationHeadingClass } from "./foundation";

export const editorialPageContract = {
  headingClass: foundationHeadingClass,
  skipTarget: "conteudo-principal",
  reviewLabel: "Texto em revisão — não é publicação comercial.",
  mediaCaptionFallback: "Ilustração técnica — não é fotografia de obra.",
} as const;

export const editorialDiagramSize = {
  width: 2048,
  height: 1152,
} as const;

export const foundationDiagram = {
  src: "/media/diagramas/integracao-audiovisual.jpg",
  alt: "Diagrama ilustrativo de integração audiovisual: fontes, processamento, displays e rede AV.",
  caption: editorialPageContract.mediaCaptionFallback,
  ...editorialDiagramSize,
} as const;

export const roomDiagram = {
  src: "/media/diagramas/sala-reuniao-hibrida.jpg",
  alt: "Diagrama ilustrativo de sala de reunião híbrida: microfones, câmera, display, DSP e colaboração.",
  caption: editorialPageContract.mediaCaptionFallback,
  ...editorialDiagramSize,
} as const;

export const tribunalDiagram = {
  src: "/media/diagramas/plenario-tribunal.jpg",
  alt: "Diagrama ilustrativo de plenário: microfonia por assento, câmeras, DSP e caminhos de registro.",
  caption: editorialPageContract.mediaCaptionFallback,
  ...editorialDiagramSize,
} as const;

export function editorialMedia(document: ContentDocument):
  | {
      src: string;
      alt: string;
      caption: string;
      width: number;
      height: number;
    }
  | undefined {
  const src = document.frontmatter.media_src?.trim();
  const alt = document.frontmatter.media_alt?.trim();
  if (!src || !alt) return undefined;

  return {
    src,
    alt,
    caption:
      document.frontmatter.media_caption?.trim() ||
      editorialPageContract.mediaCaptionFallback,
    ...editorialDiagramSize,
  };
}

export type EditorialCrumb = Readonly<{
  href?: string;
  label: string;
}>;

const sectorRoutes = new Set([
  "sectors_index",
  "sector",
]);

export function editorialPageClass(pageType: string): string {
  return sectorRoutes.has(pageType)
    ? "ativ-pagina ativ-pagina--setor"
    : "ativ-pagina ativ-pagina--solucao";
}

export function editorialCrumbs(document: ContentDocument): EditorialCrumb[] {
  const route = document.frontmatter.route;
  const crumbs: EditorialCrumb[] = [{ href: "/", label: "Início" }];

  if (route === "/solucoes/") {
    crumbs.push({ label: "Soluções" });
    return crumbs;
  }

  if (route.startsWith("/solucoes/")) {
    crumbs.push({ href: "/solucoes/", label: "Soluções" });
    crumbs.push({ label: document.frontmatter.eyebrow ?? "Solução" });
    return crumbs;
  }

  if (route === "/setores/") {
    crumbs.push({ label: "Setores" });
    return crumbs;
  }

  if (route.startsWith("/setores/")) {
    crumbs.push({ href: "/setores/", label: "Setores" });
    crumbs.push({ label: document.frontmatter.eyebrow ?? "Setor" });
    return crumbs;
  }

  crumbs.push({ label: document.frontmatter.eyebrow ?? "Página" });
  return crumbs;
}

export function requireDraftSurfaceFields(document: ContentDocument): void {
  const required = [
    "seo_title",
    "meta_description",
    "heading",
    "eyebrow",
    "lede",
    "primary_cta_href",
    "secondary_cta_href",
  ] as const;

  for (const field of required) {
    const value = document.frontmatter[field];
    if (typeof value !== "string" || !value.trim()) {
      throw new Error(
        `${document.sourcePath}: ${field} is required for a draft surface.`,
      );
    }
  }
}
