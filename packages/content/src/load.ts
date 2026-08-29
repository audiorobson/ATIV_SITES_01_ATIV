import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

import {
  isFoundationRenderable,
  isPublishable,
  parseContentDocument,
} from "./parse";
import type { ContentDocument } from "./types";

async function markdownFiles(directory: string): Promise<string[]> {
  const entries = await readdir(directory, { withFileTypes: true }).catch(
    () => [],
  );
  const files: string[] = [];
  for (const entry of entries) {
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await markdownFiles(absolute)));
    else if (entry.name.endsWith(".md") && entry.name !== "README.md")
      files.push(absolute);
  }
  return files;
}

async function loadVersionedDocuments(
  contentRoot: string,
): Promise<ContentDocument[]> {
  const approvedRoots = [
    path.join(contentRoot, "pages"),
    path.join(contentRoot, "ads"),
  ];
  const files = (await Promise.all(approvedRoots.map(markdownFiles)))
    .flat()
    .sort();

  return Promise.all(
    files.map(async (file) =>
      parseContentDocument(
        await readFile(file, "utf8"),
        path.relative(contentRoot, file),
      ),
    ),
  );
}

function assertUniqueRoutes(
  documents: readonly ContentDocument[],
  label: string,
): void {
  const routes = new Set<string>();
  for (const document of documents) {
    if (routes.has(document.frontmatter.route)) {
      throw new Error(`${label}: ${document.frontmatter.route}`);
    }
    routes.add(document.frontmatter.route);
  }
}

export async function loadPublishableContent(
  contentRoot: string,
): Promise<ContentDocument[]> {
  const publishable = (await loadVersionedDocuments(contentRoot)).filter(
    isPublishable,
  );
  assertUniqueRoutes(publishable, "Duplicate published route");
  return publishable;
}

export async function loadFoundationContent(
  contentRoot: string,
): Promise<ContentDocument[]> {
  const renderable = (await loadVersionedDocuments(contentRoot)).filter(
    isFoundationRenderable,
  );
  assertUniqueRoutes(renderable, "Duplicate foundation route");
  return renderable;
}
