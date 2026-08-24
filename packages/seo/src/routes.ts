export type RouteKind = "organic" | "paid-landing" | "technical";

export type RouteContract = Readonly<{
  pathname: string;
  kind: RouteKind;
  indexable: boolean;
  includeInSitemap: boolean;
}>;

export const implementedRouteContracts = [
  {
    pathname: "/",
    kind: "technical",
    indexable: false,
    includeInSitemap: false,
  },
] as const satisfies readonly RouteContract[];

export function definePaidLandingRoute(
  pathname: `/lp/${string}/`,
): RouteContract {
  return {
    pathname,
    kind: "paid-landing",
    indexable: false,
    includeInSitemap: false,
  };
}

export function sitemapRoutes(
  routes: readonly RouteContract[],
): RouteContract[] {
  return routes.filter((route) => route.indexable && route.includeInSitemap);
}

export function validateRouteContracts(
  routes: readonly RouteContract[],
): string[] {
  const errors: string[] = [];
  const paths = new Set<string>();

  for (const route of routes) {
    if (!route.pathname.startsWith("/") || route.pathname.startsWith("//")) {
      errors.push(`Invalid route pathname: ${route.pathname}`);
    }

    if (paths.has(route.pathname)) {
      errors.push(`Duplicate route pathname: ${route.pathname}`);
    }
    paths.add(route.pathname);

    if (!route.indexable && route.includeInSitemap) {
      errors.push(
        `Non-indexable route cannot be in sitemap: ${route.pathname}`,
      );
    }

    if (route.kind === "paid-landing" && route.indexable) {
      errors.push(`Paid landing route must be noindex: ${route.pathname}`);
    }

    if (route.kind === "paid-landing" && !route.pathname.startsWith("/lp/")) {
      errors.push(`Paid landing route must live under /lp/: ${route.pathname}`);
    }
  }

  return errors;
}
