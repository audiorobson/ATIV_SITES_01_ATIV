import { describe, expect, it } from "vitest";

import type { ContentDocument } from "@ativ/content";

import {
  assertPublicationBoundary,
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
});
