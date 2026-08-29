import type { MetadataRoute } from "next";

import { implementedRouteContracts, sitemapRoutes } from "@ativ/seo";
import { loadSitePublishableContent } from "@/lib/published-content";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  await loadSitePublishableContent();

  return sitemapRoutes(implementedRouteContracts).map((route) => ({
    url: route.pathname,
  }));
}
