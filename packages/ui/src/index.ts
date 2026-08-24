import contract from "./data/tokens.json" with { type: "json" };

export const tokens = contract;
export type AtivTokens = typeof contract;

export const cssExports = {
  tokens: "@ativ/ui/styles/tokens.css",
  foundations: "@ativ/ui/styles/foundations.css",
  controls: "@ativ/ui/styles/controls.css",
  bundle: "@ativ/ui/styles.css",
  json: "@ativ/ui/tokens.json",
} as const;

export default contract;
