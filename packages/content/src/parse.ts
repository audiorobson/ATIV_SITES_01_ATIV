import { parse } from "yaml";

import {
  contentStatuses,
  type ContentDocument,
  type ContentFrontmatter,
} from "./types";

const requiredTextFields = [
  "content_id",
  "route",
  "page_type",
  "funnel_stage",
  "primary_intent",
  "primary_keyword",
  "primary_cta",
  "secondary_cta",
  "technical_reviewer",
  "seo_reviewer",
  "commercial_reviewer",
  "last_reviewed",
] as const;

const requiredListFields = [
  "audience",
  "secondary_keywords",
  "claim_ids",
  "internal_links",
  "external_sources",
] as const;

function requireRecord(value: unknown): Record<string, unknown> {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    throw new Error("Frontmatter must be a YAML object.");
  }
  return value as Record<string, unknown>;
}

export function parseContentDocument(
  source: string,
  sourcePath: string,
): ContentDocument {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match)
    throw new Error(`${sourcePath}: valid YAML frontmatter is required.`);

  const [, rawFrontmatter, rawBody] = match;

  if (rawFrontmatter === undefined || rawBody === undefined) {
    throw new Error(`${sourcePath}: invalid frontmatter structure.`);
  }

  const data = requireRecord(parse(rawFrontmatter));
  for (const field of requiredTextFields) {
    if (typeof data[field] !== "string")
      throw new Error(`${sourcePath}: ${field} must be text.`);
  }
  for (const field of requiredListFields) {
    if (
      !Array.isArray(data[field]) ||
      !data[field].every((item) => typeof item === "string")
    ) {
      throw new Error(`${sourcePath}: ${field} must be a text list.`);
    }
  }
  if (
    typeof data.status !== "string" ||
    !contentStatuses.includes(data.status as never)
  ) {
    throw new Error(`${sourcePath}: unsupported editorial status.`);
  }
  if (!(data.route as string).startsWith("/"))
    throw new Error(`${sourcePath}: route must be absolute.`);
  if (data.page_type === "ads_landing" && data.robots !== "noindex,follow") {
    throw new Error(
      `${sourcePath}: paid landing pages require noindex,follow.`,
    );
  }

  return {
    sourcePath,
    frontmatter: data as ContentFrontmatter,
    body: rawBody.trim(),
  };
}

export function isPublishable(document: ContentDocument): boolean {
  return (
    document.frontmatter.status === "approved" ||
    document.frontmatter.status === "published"
  );
}
