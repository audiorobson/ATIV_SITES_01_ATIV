import { routeLabel } from "./editorial-compose";
import {
  foundationDiagram,
  roomDiagram,
  tribunalDiagram,
} from "./editorial-page";

export type SiteNavLink = Readonly<{
  href: string;
  label: string;
}>;

export type SiteNavFeatured = Readonly<{
  href: string;
  rotulo: string;
  title: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}>;

export type SiteNavGroup = Readonly<{
  rotulo: string;
  items: readonly SiteNavLink[];
}>;

export type SiteNavBranch = Readonly<{
  id: string;
  label: string;
  href: string;
  featured: readonly SiteNavFeatured[];
  groups: readonly SiteNavGroup[];
}>;

export type SiteNavItem = SiteNavLink | SiteNavBranch;

const unpublishedSolutionRoutes = [
  "/solucoes/microsoft-teams-rooms/",
  "/solucoes/videowall/",
  "/solucoes/av-over-ip/",
  "/solucoes/automacao-controle/",
] as const;

export const solutionNavOrder = [
  "/solucoes/",
  "/solucoes/audiovisual/",
  "/solucoes/sala-reuniao-hibrida-sao-paulo/",
  "/solucoes/centro-comando-controle-noc-soc-sao-paulo/",
  "/solucoes/auditorio-corporativo-sao-paulo/",
  "/solucoes/governo-tribunais-sao-paulo/",
] as const;

const sectorNavOrder = [
  "/setores/",
  "/setores/corporativo/",
  "/setores/governo/",
] as const;

function overviewLabel(href: string, fallback: string): string {
  return href.endsWith("/") && href.split("/").filter(Boolean).length === 1
    ? fallback
    : routeLabel(href);
}

export const solutionMenu: readonly SiteNavLink[] = solutionNavOrder.map(
  (href) => ({
    href,
    label: overviewLabel(href, "Todas as soluções"),
  }),
);

export const sectorMenu: readonly SiteNavLink[] = sectorNavOrder.map((href) => ({
  href,
  label: overviewLabel(href, "Todos os setores"),
}));

const solutionEntries = solutionMenu.slice(1);
const sectorEntries = sectorMenu.slice(1);

export const contactCta: SiteNavLink = {
  href: "/contato/",
  label: "Contato",
};

export const primaryNav: readonly SiteNavItem[] = [
  {
    id: "solucoes",
    label: "Soluções",
    href: "/solucoes/",
    featured: [
      {
        href: "/solucoes/",
        rotulo: "Soluções",
        title: "Todas as soluções",
        src: foundationDiagram.src,
        alt: foundationDiagram.alt,
        width: foundationDiagram.width,
        height: foundationDiagram.height,
      },
      {
        href: "/solucoes/sala-reuniao-hibrida-sao-paulo/",
        rotulo: "Ambiente",
        title: "Sala de reunião híbrida",
        src: roomDiagram.src,
        alt: roomDiagram.alt,
        width: roomDiagram.width,
        height: roomDiagram.height,
      },
    ],
    groups: [
      { rotulo: "Ambientes", items: solutionEntries },
      { rotulo: "Setores", items: sectorEntries },
    ],
  },
  {
    id: "setores",
    label: "Setores",
    href: "/setores/",
    featured: [
      {
        href: "/setores/corporativo/",
        rotulo: "Setor",
        title: "Corporativo",
        src: roomDiagram.src,
        alt: roomDiagram.alt,
        width: roomDiagram.width,
        height: roomDiagram.height,
      },
      {
        href: "/setores/governo/",
        rotulo: "Setor",
        title: "Governo",
        src: tribunalDiagram.src,
        alt: tribunalDiagram.alt,
        width: tribunalDiagram.width,
        height: tribunalDiagram.height,
      },
    ],
    groups: [{ rotulo: "Setores", items: sectorMenu }],
  },
  { href: "/sobre/", label: "Sobre" },
];

export function isNavBranch(item: SiteNavItem): item is SiteNavBranch {
  return "groups" in item;
}

export function isSolutionSurface(pageType: string): boolean {
  return pageType === "solution" || pageType === "solutions_index";
}

export function isCurrentNavHref(current: string, href: string): boolean {
  return current === href;
}

export function navBranchContains(
  current: string,
  branch: SiteNavBranch,
): boolean {
  if (
    branch.href === current ||
    branch.featured.some((item) => item.href === current)
  ) {
    return true;
  }
  return branch.groups.some((group) =>
    group.items.some((item) => item.href === current),
  );
}

export function unpublishedSolutionHrefs(): readonly string[] {
  return unpublishedSolutionRoutes;
}
