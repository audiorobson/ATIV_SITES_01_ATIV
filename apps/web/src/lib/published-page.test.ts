import { describe, expect, it } from "vitest";

import { foundationHeadingClass } from "./foundation";
import { publishedPageContract, publishedPageEyebrow } from "./published-page";

describe("published page contract", () => {
  it("keeps the display heading and skip target", () => {
    expect(publishedPageContract.headingClass).toBe(foundationHeadingClass);
    expect(publishedPageContract.skipTarget).toBe("conteudo-principal");
  });

  it("labels the publication eyebrow from the page type", () => {
    expect(
      publishedPageEyebrow({
        sourcePath: "pages/x.md",
        frontmatter: {
          content_id: "PAGE-001",
          route: "/solucoes/",
          page_type: "solutions_index",
          status: "approved",
          audience: [],
          funnel_stage: "consideration",
          primary_intent: "commercial",
          primary_keyword: "soluções",
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
        },
        body: "",
      }),
    ).toBe("Publicação — solutions_index");
  });
});
