import { describe, expect, it } from "vitest";

import {
  definePaidLandingRoute,
  sitemapRoutes,
  validateRouteContracts,
  type RouteContract,
} from "./routes";

describe("route contracts", () => {
  it("keeps paid routes noindex and outside the sitemap", () => {
    const paidRoute = definePaidLandingRoute("/lp/engenharia-audiovisual/");

    expect(paidRoute).toMatchObject({
      kind: "paid-landing",
      indexable: false,
      includeInSitemap: false,
    });
    expect(sitemapRoutes([paidRoute])).toEqual([]);
  });

  it("rejects noindex routes included in the sitemap", () => {
    const invalidRoute: RouteContract = {
      pathname: "/privado/",
      kind: "technical",
      indexable: false,
      includeInSitemap: true,
    };

    expect(validateRouteContracts([invalidRoute])).toContain(
      "Non-indexable route cannot be in sitemap: /privado/",
    );
  });
});
