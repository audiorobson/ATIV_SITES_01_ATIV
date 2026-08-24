export const contentStatuses = [
  "brief",
  "draft",
  "technical_review",
  "seo_review",
  "commercial_review",
  "approved",
  "published",
  "needs_update",
  "retired",
] as const;

export type ContentStatus = (typeof contentStatuses)[number];

export type ContentFrontmatter = Readonly<{
  content_id: string;
  route: string;
  page_type: string;
  status: ContentStatus;
  audience: string[];
  funnel_stage: string;
  primary_intent: string;
  primary_keyword: string;
  secondary_keywords: string[];
  primary_cta: string;
  secondary_cta: string;
  claim_ids: string[];
  internal_links: string[];
  external_sources: string[];
  technical_reviewer: string;
  seo_reviewer: string;
  commercial_reviewer: string;
  last_reviewed: string;
  robots?: "noindex,follow";
}>;

export type ContentDocument = Readonly<{
  sourcePath: string;
  frontmatter: ContentFrontmatter;
  body: string;
}>;
