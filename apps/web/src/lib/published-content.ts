import { existsSync } from "node:fs";
import { readFile } from "node:fs/promises";
import path from "node:path";

import {
  loadFoundationContent,
  loadPublishableContent,
  type ContentDocument,
} from "@ativ/content";
import { implementedRouteContracts, routePlanPathnames } from "@ativ/seo";

import { requireDraftSurfaceFields } from "./editorial-page";

export function resolveContentRoot(cwd = process.cwd()): string {
  const candidates = [
    path.join(cwd, "content"),
    path.join(cwd, "..", "..", "content"),
  ];

  for (const candidate of candidates) {
    if (existsSync(path.join(candidate, "pages"))) return candidate;
  }

  throw new Error("Unable to resolve the versioned content root.");
}

export function resolveRepoRoot(cwd = process.cwd()): string {
  return path.dirname(resolveContentRoot(cwd));
}

export function slugSegments(route: string): string[] {
  return route.replace(/^\/|\/$/g, "").split("/").filter(Boolean);
}

export function routeFromSlug(slug: readonly string[]): string {
  if (slug.length === 0) return "/";
  return `/${slug.join("/")}/`;
}

export function publishedStaticParams(
  documents: readonly ContentDocument[],
): ReadonlyArray<{ slug: string[] }> {
  return documents.map((document) => ({
    slug: slugSegments(document.frontmatter.route),
  }));
}

export function reservedTechnicalRoutes(
  routes = implementedRouteContracts,
): ReadonlySet<string> {
  return new Set(routes.map((route) => route.pathname));
}

export function assertPublicationBoundary(
  documents: readonly ContentDocument[],
  reserved = reservedTechnicalRoutes(),
  planned?: ReadonlySet<string>,
): void {
  for (const document of documents) {
    const route = document.frontmatter.route;
    if (reserved.has(route)) {
      throw new Error(
        `${document.sourcePath}: published route collides with a technical surface: ${route}`,
      );
    }
    if (planned && !planned.has(route)) {
      throw new Error(
        `${document.sourcePath}: published route is missing from seo/route-plan.csv: ${route}`,
      );
    }
  }
}

let publicationCache: Promise<ContentDocument[]> | undefined;

export async function loadSitePublishableContent(
  cwd = process.cwd(),
): Promise<ContentDocument[]> {
  publicationCache ??= (async () => {
    const documents = await loadPublishableContent(resolveContentRoot(cwd));
    const planned = routePlanPathnames(
      await readFile(path.join(resolveRepoRoot(cwd), "seo", "route-plan.csv"), "utf8"),
    );
    assertPublicationBoundary(documents, reservedTechnicalRoutes(), new Set(planned));
    return documents;
  })();

  return publicationCache;
}

export async function findPublishableDocument(
  route: string,
): Promise<ContentDocument | undefined> {
  const documents = await loadSitePublishableContent();
  return documents.find((document) => document.frontmatter.route === route);
}

let foundationCache: Promise<ContentDocument[]> | undefined;

export function assertFoundationBoundary(
  documents: readonly ContentDocument[],
  reserved = reservedTechnicalRoutes(),
  planned?: ReadonlySet<string>,
): ContentDocument[] {
  const renderable: ContentDocument[] = [];

  for (const document of documents) {
    const route = document.frontmatter.route;
    if (reserved.has(route)) continue;
    if (planned && !planned.has(route)) {
      throw new Error(
        `${document.sourcePath}: draft surface is missing from seo/route-plan.csv: ${route}`,
      );
    }
    requireDraftSurfaceFields(document);
    renderable.push(document);
  }

  return renderable;
}

export async function loadSiteFoundationContent(
  cwd = process.cwd(),
): Promise<ContentDocument[]> {
  foundationCache ??= (async () => {
    const documents = await loadFoundationContent(resolveContentRoot(cwd));
    const planned = routePlanPathnames(
      await readFile(
        path.join(resolveRepoRoot(cwd), "seo", "route-plan.csv"),
        "utf8",
      ),
    );
    return assertFoundationBoundary(
      documents,
      reservedTechnicalRoutes(),
      new Set(planned),
    );
  })();

  return foundationCache;
}

export async function findFoundationDocument(
  route: string,
): Promise<ContentDocument | undefined> {
  const documents = await loadSiteFoundationContent();
  return documents.find((document) => document.frontmatter.route === route);
}

let versionedCache: Promise<ContentDocument[]> | undefined;

export async function loadSiteVersionedContent(
  cwd = process.cwd(),
): Promise<ContentDocument[]> {
  versionedCache ??= loadFoundationContent(resolveContentRoot(cwd));
  return versionedCache;
}

export async function findReservedDraftDocument(
  route: string,
): Promise<ContentDocument | undefined> {
  const document = (await loadSiteVersionedContent()).find(
    (item) => item.frontmatter.route === route,
  );
  if (!document) return undefined;
  requireDraftSurfaceFields(document);
  return document;
}
