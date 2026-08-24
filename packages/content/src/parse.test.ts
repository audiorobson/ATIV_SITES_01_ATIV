import { readFile } from "node:fs/promises";

import { describe, expect, it } from "vitest";

import { loadPublishableContent } from "./load";
import { isPublishable, parseContentDocument } from "./parse";

const valid = `---
content_id: PAGE-001
route: /solucao/
page_type: solution
status: approved
audience: [engenharia]
funnel_stage: consideration
primary_intent: commercial
primary_keyword: integracao audiovisual
secondary_keywords: []
primary_cta: Falar com engenharia
secondary_cta: ""
claim_ids: []
internal_links: []
external_sources: []
technical_reviewer: pessoa
seo_reviewer: pessoa
commercial_reviewer: pessoa
last_reviewed: 2026-08-24
---
# Conteúdo aprovado`;

describe("content contract", () => {
  it("parses approved content", () => {
    const document = parseContentDocument(valid, "pages/solution.md");
    expect(document.frontmatter.content_id).toBe("PAGE-001");
    expect(isPublishable(document)).toBe(true);
  });

  it("rejects paid pages without noindex,follow", () => {
    expect(() =>
      parseContentDocument(
        valid.replace("page_type: solution", "page_type: ads_landing"),
        "ads/lp.md",
      ),
    ).toThrow(/noindex,follow/);
  });

  it("keeps drafts out of publication", () => {
    const document = parseContentDocument(
      valid.replace("status: approved", "status: draft"),
      "pages/draft.md",
    );
    expect(isPublishable(document)).toBe(false);
  });

  it("accepts the Home brief without publishing inbox drafts", async () => {
    const source = await readFile("content/pages/home.md", "utf8");
    const home = parseContentDocument(source, "pages/home.md");

    expect(home.frontmatter.route).toBe("/");
    expect(home.frontmatter.status).toBe("brief");
    await expect(loadPublishableContent("content")).resolves.toEqual([]);
  });
});
