import { describe, expect, it } from "vitest";

import type { ContentDocument } from "@ativ/content";

import {
  assertFoundationBoundary,
  assertPublicationBoundary,
  findReservedDraftDocument,
  loadSiteFoundationContent,
  loadSitePublishableContent,
  publishedStaticParams,
  reservedTechnicalRoutes,
  resolveContentRoot,
  routeFromSlug,
  slugSegments,
} from "./published-content";

function document(route: string, sourcePath = "pages/example.md"): ContentDocument {
  return {
    sourcePath,
    frontmatter: {
      content_id: "PAGE-001",
      route,
      page_type: "solution",
      status: "approved",
      audience: [],
      funnel_stage: "consideration",
      primary_intent: "commercial",
      primary_keyword: "teste",
      secondary_keywords: [],
      primary_cta: "Contato",
      secondary_cta: "",
      claim_ids: [],
      internal_links: [],
      external_sources: [],
      technical_reviewer: "pessoa",
      seo_reviewer: "pessoa",
      commercial_reviewer: "pessoa",
      last_reviewed: "2026-08-29",
      seo_title: "Teste | ATIV",
      meta_description: "Documento de teste.",
      heading: "Teste",
    },
    body: "Corpo",
  };
}

describe("published content boundary", () => {
  it("resolves the versioned content root from the repo", () => {
    expect(resolveContentRoot()).toMatch(/content$/);
  });

  it("round-trips inventory routes to catch-all slugs", () => {
    expect(slugSegments("/solucoes/audiovisual/")).toEqual([
      "solucoes",
      "audiovisual",
    ]);
    expect(routeFromSlug(["solucoes", "audiovisual"])).toBe(
      "/solucoes/audiovisual/",
    );
    expect(publishedStaticParams([document("/solucoes/audiovisual/")])).toEqual([
      { slug: ["solucoes", "audiovisual"] },
    ]);
  });

  it("loads no publishable pages from the current editorial tree", async () => {
    await expect(loadSitePublishableContent()).resolves.toEqual([]);
  });

  it("rejects a published route that collides with a technical surface", () => {
    expect(() =>
      assertPublicationBoundary(
        [document("/contato/")],
        reservedTechnicalRoutes(),
      ),
    ).toThrow(/collides with a technical surface: \/contato\//);
    expect(() =>
      assertPublicationBoundary([document("/500/")], reservedTechnicalRoutes()),
    ).toThrow(/collides with a technical surface: \/500\//);
  });

  it("rejects a published route missing from the route plan", () => {
    expect(() =>
      assertPublicationBoundary(
        [document("/rota-inexistente/")],
        new Set(),
        new Set(["/solucoes/"]),
      ),
    ).toThrow(/missing from seo\/route-plan.csv/);
  });

  it("loads draft surfaces without publishing them", async () => {
    const documents = await loadSiteFoundationContent();
    const routes = documents
      .map((item) => item.frontmatter.route)
      .sort();

    expect(await loadSitePublishableContent()).toEqual([]);
    expect(routes).toContain("/solucoes/");
    expect(routes).toContain("/setores/");
    expect(routes).not.toContain("/contato/");
    expect(routes).toHaveLength(9);

    const contact = await findReservedDraftDocument("/contato/");
    expect(contact?.frontmatter.heading).toMatch(/engenharia/);
    expect(contact?.frontmatter.primary_cta_href).toBe(
      "mailto:contato@ativpro.com",
    );
    expect(contact?.body).not.toContain("+55 (11) 0000-0000");
    expect(contact?.body).toContain("contato@ativpro.com");
    expect(contact?.body).toContain("91111-0115");
    expect(contact?.body).toContain("Joaquim Barreto");
    expect(
      publishedStaticParams(documents).some(
        (param) => param.slug.join("/") === "solucoes/audiovisual",
      ),
    ).toBe(true);
  });

  it("skips reserved technical routes and rejects unplanned draft surfaces", () => {
    expect(
      assertFoundationBoundary(
        [document("/contato/")],
        reservedTechnicalRoutes(),
        new Set(["/contato/"]),
      ),
    ).toEqual([]);
    expect(() =>
      assertFoundationBoundary(
        [document("/rota-inexistente/")],
        new Set(),
        new Set(["/solucoes/"]),
      ),
    ).toThrow(/missing from seo\/route-plan.csv/);
  });
});
