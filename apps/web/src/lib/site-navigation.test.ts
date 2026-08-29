import { describe, expect, it } from "vitest";

import {
  contactCta,
  isCurrentNavHref,
  isNavBranch,
  isSolutionSurface,
  navBranchContains,
  primaryNav,
  solutionMenu,
  solutionNavOrder,
  unpublishedSolutionHrefs,
} from "./site-navigation";

describe("site navigation", () => {
  it("lists only published solution routes, in hub order", () => {
    expect(solutionNavOrder).toEqual([
      "/solucoes/",
      "/solucoes/audiovisual/",
      "/solucoes/sala-reuniao-hibrida-sao-paulo/",
      "/solucoes/centro-comando-controle-noc-soc-sao-paulo/",
      "/solucoes/auditorio-corporativo-sao-paulo/",
      "/solucoes/governo-tribunais-sao-paulo/",
    ]);
    expect(solutionMenu.map((item) => item.href)).toEqual([...solutionNavOrder]);
    expect(solutionMenu[0]).toEqual({
      href: "/solucoes/",
      label: "Todas as soluções",
    });

    const hrefs = new Set(solutionMenu.map((item) => item.href));
    for (const href of unpublishedSolutionHrefs()) {
      expect(hrefs.has(href)).toBe(false);
    }
  });

  it("keeps Soluções as a catalog branch and Contato as the header action", () => {
    const solutions = primaryNav.find(
      (item) => isNavBranch(item) && item.id === "solucoes",
    );
    expect(solutions && isNavBranch(solutions)).toBe(true);
    if (!solutions || !isNavBranch(solutions)) return;
    expect(solutions.href).toBe("/solucoes/");
    expect(solutions.featured.map((item) => item.href)).toEqual([
      "/solucoes/",
      "/solucoes/sala-reuniao-hibrida-sao-paulo/",
    ]);
    expect(solutions.featured.every((item) => item.src.startsWith("/media/diagramas/"))).toBe(
      true,
    );
    expect(solutions.groups[0]?.items.map((item) => item.href)).toEqual(
      solutionNavOrder.slice(1),
    );
    expect(navBranchContains("/solucoes/sala-reuniao-hibrida-sao-paulo/", solutions)).toBe(
      true,
    );
    expect(isCurrentNavHref("/solucoes/", "/solucoes/")).toBe(true);
    expect(isCurrentNavHref("/solucoes/audiovisual/", "/solucoes/")).toBe(
      false,
    );
    expect(primaryNav.some((item) => !isNavBranch(item) && item.href === "/")).toBe(
      false,
    );
    expect(contactCta).toEqual({ href: "/contato/", label: "Contato" });
  });

  it("marks solution surfaces for the local catalog", () => {
    expect(isSolutionSurface("solution")).toBe(true);
    expect(isSolutionSurface("solutions_index")).toBe(true);
    expect(isSolutionSurface("contact")).toBe(false);
    expect(isSolutionSurface("sector")).toBe(false);
  });
});
