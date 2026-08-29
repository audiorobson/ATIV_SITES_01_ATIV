import { defineConfig, globalIgnores } from "eslint/config";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypeScript from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier/flat";

export default defineConfig([
  ...nextCoreWebVitals,
  ...nextTypeScript,
  prettier,
  {
    rules: { "@next/next/no-html-link-for-pages": "off" },
  },
  globalIgnores([
    "**/.next/**",
    "**/.next-mobile/**",
    "**/out/**",
    "dist/**",
    "**/coverage/**",
    "**/node_modules/**",
    "design_guide/brand/**",
  ]),
]);
