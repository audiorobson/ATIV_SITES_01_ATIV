import { typography } from "@ativ/ui";

export const localFontFaces = [
  {
    family: "Archivo",
    weight: 800,
    href: "/fonts/archivo-latin-800-normal.woff2",
    preload: false,
  },
  {
    family: "Archivo",
    weight: 900,
    href: "/fonts/archivo-latin-900-normal.woff2",
    preload: true,
  },
  {
    family: "IBM Plex Sans",
    weight: 400,
    href: "/fonts/ibm-plex-sans-latin-400-normal.woff2",
    preload: true,
  },
  {
    family: "IBM Plex Sans",
    weight: 500,
    href: "/fonts/ibm-plex-sans-latin-500-normal.woff2",
    preload: false,
  },
  {
    family: "IBM Plex Sans",
    weight: 600,
    href: "/fonts/ibm-plex-sans-latin-600-normal.woff2",
    preload: false,
  },
  {
    family: "IBM Plex Mono",
    weight: 400,
    href: "/fonts/ibm-plex-mono-latin-400-normal.woff2",
    preload: false,
  },
  {
    family: "IBM Plex Mono",
    weight: 500,
    href: "/fonts/ibm-plex-mono-latin-500-normal.woff2",
    preload: false,
  },
] as const;

export const localFontPreloads = localFontFaces
  .filter((face) => face.preload)
  .map((face) => face.href);

export function matchesTypographyContract(
  faces: readonly { family: string; weight: number }[],
): boolean {
  const expected = Object.values(typography.roles).flatMap((role) =>
    role.weights.map((weight) => `${role.family}:${weight}`),
  );
  const actual = faces.map((face) => `${face.family}:${face.weight}`);

  return (
    expected.length === actual.length &&
    expected.every((entry) => actual.includes(entry))
  );
}
