import type { MetadataRoute } from "next";

import { implementedRouteContracts, sitemapRoutes } from "@ativ/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapRoutes(implementedRouteContracts).map((route) => ({
    url: route.pathname,
  }));
}
