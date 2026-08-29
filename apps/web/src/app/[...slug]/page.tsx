import { buildMetadata } from "@ativ/seo";
import { notFound } from "next/navigation";

import { EditorialPage } from "@/components/editorial-page";
import {
  findFoundationDocument,
  loadSiteFoundationContent,
  publishedStaticParams,
  routeFromSlug,
} from "@/lib/published-content";

export const dynamic = "force-static";
export const dynamicParams = false;

type SlugPageProps = Readonly<{
  params: Promise<{ slug: string[] }>;
}>;

export async function generateStaticParams() {
  return [...publishedStaticParams(await loadSiteFoundationContent())];
}

export async function generateMetadata({ params }: SlugPageProps) {
  const document = await findFoundationDocument(
    routeFromSlug((await params).slug),
  );
  if (!document) return {};

  return buildMetadata({
    title: document.frontmatter.seo_title ?? document.frontmatter.heading ?? "",
    description: document.frontmatter.meta_description ?? "",
    pathname: document.frontmatter.route,
    index: false,
  });
}

export default async function FoundationContentPage({ params }: SlugPageProps) {
  const document = await findFoundationDocument(
    routeFromSlug((await params).slug),
  );
  if (!document) notFound();
  return <EditorialPage document={document} />;
}
