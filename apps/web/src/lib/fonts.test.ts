import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { typography } from "@ativ/ui";
import { describe, expect, it } from "vitest";

import { foundationHeadingClass } from "./foundation";
import {
  localFontFaces,
  localFontPreloads,
  matchesTypographyContract,
} from "./fonts";

const fontsDirectory = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../../public/fonts",
);

describe("local font contract", () => {
  it("covers every typography role and weight from @ativ/ui", () => {
    expect(matchesTypographyContract(localFontFaces)).toBe(true);
    expect(typography.loading.strategy).toBe("local");
    expect(typography.loading.fontDisplay).toBe("swap");
    expect(typography.loading.remoteImport).toBe(false);
  });

  it("preloads Archivo 900 only because the H1 uses the display role", () => {
    expect(foundationHeadingClass).toBe("ativ-titulo-pagina");
    expect(localFontPreloads).toEqual([
      "/fonts/archivo-latin-900-normal.woff2",
      "/fonts/ibm-plex-sans-latin-400-normal.woff2",
    ]);
  });

  it("keeps every contracted file in public/fonts", () => {
    for (const face of localFontFaces) {
      const fileName = face.href.replace("/fonts/", "");
      expect(existsSync(path.join(fontsDirectory, fileName))).toBe(true);
    }
  });
});
