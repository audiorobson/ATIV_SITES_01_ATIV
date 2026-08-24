import contract from "./data/tokens.json" with { type: "json" };

export const tokens = contract;
export type AtivTokens = typeof contract;

export const logos = contract.logos;
export const contrast = contract.contrast;
export const typography = contract.typography;

export const cssExports = {
  tokens: "@ativ/ui/styles/tokens.css",
  foundations: "@ativ/ui/styles/foundations.css",
  layout: "@ativ/ui/styles/layout.css",
  controls: "@ativ/ui/styles/controls.css",
  technicalData: "@ativ/ui/styles/technical-data.css",
  editorial: "@ativ/ui/styles/editorial.css",
  forms: "@ativ/ui/styles/forms.css",
  bundle: "@ativ/ui/styles.css",
  json: "@ativ/ui/tokens.json",
} as const;

export default contract;
