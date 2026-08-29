import { describe, expect, it } from "vitest";

import type { ContentDocument } from "@ativ/content";

import { foundationHeadingClass } from "./foundation";
import { readFile } from "node:fs/promises";

import { parseContentDocument } from "@ativ/content";

import {
  editorialNextLink,
  editorialRelatedLinks,
  groupEditorialSections,
} from "./editorial-compose";
import { parseEditorialMarkdown } from "./editorial-markdown";
import {
  editorialCrumbs,
  editorialMedia,
  editorialPageClass,
  editorialPageContract,
  foundationDiagram,
  requireDraftSurfaceFields,
} from "./editorial-page";
import { isSolutionSurface, solutionMenu } from "./site-navigation";

function document(
  route: string,
  extras: Partial<ContentDocument["frontmatter"]> = {},
): ContentDocument {
  return {
    sourcePath: "pages/example.md",
    frontmatter: {
      content_id: "PAGE-001",
      route,
      page_type: extras.page_type ?? "solution",
      status: "draft",
      audience: [],
      funnel_stage: "consideration",
      primary_intent: "commercial",
      primary_keyword: "teste",
      secondary_keywords: [],
      primary_cta: "Contato",
      secondary_cta: "Soluções",
      claim_ids: [],
      internal_links: [],
      external_sources: [],
      technical_reviewer: "pending",
      seo_reviewer: "pending",
      commercial_reviewer: "pending",
      last_reviewed: "2026-08-29",
      seo_title: "Título | ATIV",
      meta_description: "Descrição.",
      heading: "Título",
      eyebrow: extras.eyebrow ?? "Solução · Teste",
      lede: "Resumo.",
      primary_cta_href: "/contato/",
      secondary_cta_href: "/solucoes/",
      ...extras,
    },
    body: "",
  };
}

describe("editorial page contract", () => {
  it("keeps the display heading and skip target", () => {
    expect(editorialPageContract.headingClass).toBe(foundationHeadingClass);
    expect(editorialPageContract.skipTarget).toBe("conteudo-principal");
  });

  it("uses the sector recipe for sector surfaces", () => {
    expect(editorialPageClass("solutions_index")).toBe(
      "ativ-pagina ativ-pagina--solucao",
    );
    expect(editorialPageClass("sectors_index")).toBe(
      "ativ-pagina ativ-pagina--setor",
    );
    expect(isSolutionSurface("solutions_index")).toBe(true);
    expect(solutionMenu.some((item) => item.href === "/solucoes/")).toBe(true);
  });

  it("builds crumbs from inventory routes", () => {
    expect(editorialCrumbs(document("/solucoes/"))).toEqual([
      { href: "/", label: "Início" },
      { label: "Soluções" },
    ]);
    expect(
      editorialCrumbs(
        document("/solucoes/audiovisual/", {
          eyebrow: "Solução · Integração audiovisual",
        }),
      ),
    ).toEqual([
      { href: "/", label: "Início" },
      { href: "/solucoes/", label: "Soluções" },
      { label: "Solução · Integração audiovisual" },
    ]);
    expect(editorialCrumbs(document("/setores/", { page_type: "sectors_index" }))).toEqual([
      { href: "/", label: "Início" },
      { label: "Setores" },
    ]);
  });

  it("resolves illustrative media without treating it as a case", () => {
    expect(editorialMedia(document("/solucoes/"))).toBeUndefined();
    expect(
      editorialMedia(
        document("/solucoes/", {
          media_src: foundationDiagram.src,
          media_alt: foundationDiagram.alt,
        }),
      ),
    ).toEqual({
      src: foundationDiagram.src,
      alt: foundationDiagram.alt,
      caption: editorialPageContract.mediaCaptionFallback,
      width: 2048,
      height: 1152,
    });
  });

  it("composes the first visual-validation pages without inventing routes", async () => {
    const sala = parseContentDocument(
      await readFile(
        "content/pages/solucoes/sala-reuniao-hibrida-sao-paulo.md",
        "utf8",
      ),
      "pages/solucoes/sala-reuniao-hibrida-sao-paulo.md",
    );
    const sections = groupEditorialSections(
      parseEditorialMarkdown(sala.body),
    );

    expect(sections.map((section) => section.role)).toContain("problem");
    expect(sections.map((section) => section.role)).toContain("architecture");
    expect(editorialNextLink(sala)).toEqual({
      href: "/solucoes/audiovisual/",
      label: "Integração audiovisual ponta a ponta",
    });
    expect(
      editorialRelatedLinks(sala, sections).map((link) => link.href),
    ).not.toContain("/contato/");
  });

  it("rejects a draft surface without chrome fields", () => {
    expect(() =>
      requireDraftSurfaceFields(
        document("/solucoes/", { heading: "" }),
      ),
    ).toThrow(/heading is required for a draft surface/);
  });
});
