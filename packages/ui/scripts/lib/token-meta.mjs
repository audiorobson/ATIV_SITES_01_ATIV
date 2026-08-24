/** Metadata overlay for canonical ATIV tokens. Values come from the master CSS. */

export const masterCssPath = "design_guide/brand/tokens/ativ-ui.css";
export const brandTokensPath = "brand/tokens.json";
export const packageTokensPath = "packages/ui/src/data/tokens.json";
export const productionTokensCssPath = "packages/ui/src/styles/tokens.css";

export const groups = {
  "--ativ-indigo-profundo": { group: "color.core", kind: "canonical" },
  "--ativ-indigo": { group: "color.core", kind: "canonical" },
  "--ativ-ambar": { group: "color.core", kind: "canonical" },
  "--ativ-ardosia": { group: "color.core", kind: "canonical" },
  "--ativ-gelo": { group: "color.core", kind: "canonical" },
  "--ativ-indigo-900": { group: "color.support", kind: "canonical" },
  "--ativ-indigo-800": { group: "color.support", kind: "canonical" },
  "--ativ-indigo-700": { group: "color.support", kind: "canonical" },
  "--ativ-indigo-600": { group: "color.support", kind: "canonical" },
  "--ativ-indigo-300": { group: "color.support", kind: "canonical" },
  "--ativ-ardosia-400": { group: "color.support", kind: "canonical" },
  "--ativ-ardosia-800": { group: "color.support", kind: "canonical" },
  "--ativ-gelo-300": { group: "color.support", kind: "canonical" },
  "--ativ-gelo-200": { group: "color.support", kind: "canonical" },
  "--ativ-ambar-400": { group: "color.support", kind: "canonical" },
  "--ativ-branco": { group: "color.support", kind: "canonical" },
  "--ativ-aprovado": { group: "color.semantic", kind: "canonical" },
  "--ativ-ativo": { group: "color.semantic", kind: "canonical" },
  "--ativ-atencao": { group: "color.semantic", kind: "canonical" },
  "--ativ-reprovado": { group: "color.semantic", kind: "canonical" },
  "--ativ-font-display": { group: "typography.family", kind: "canonical" },
  "--ativ-font-corpo": { group: "typography.family", kind: "canonical" },
  "--ativ-font-dados": { group: "typography.family", kind: "canonical" },
  "--ativ-peso-display": { group: "typography.weight", kind: "canonical" },
  "--ativ-peso-secao": { group: "typography.weight", kind: "canonical" },
  "--ativ-peso-forte": { group: "typography.weight", kind: "canonical" },
  "--ativ-raio-controle": { group: "radius", kind: "canonical" },
  "--ativ-raio-menu": { group: "radius", kind: "canonical" },
  "--ativ-raio-cartao": { group: "radius", kind: "canonical" },
  "--ativ-raio-pilula": { group: "radius", kind: "canonical" },
  "--ativ-alvo-min": { group: "metrics", kind: "canonical" },
  "--ativ-borda": { group: "metrics", kind: "canonical" },
  "--ativ-transicao": {
    group: "metrics",
    kind: "derivation",
    derivesFrom: ["--ativ-dur-rapido"],
    note: "Equivalente a 180ms com keyword CSS ease. Nao e uma quinta curva nomeada.",
  },
  "--ativ-e-0": { group: "space", kind: "canonical" },
  "--ativ-e-1": { group: "space", kind: "canonical" },
  "--ativ-e-2": { group: "space", kind: "canonical" },
  "--ativ-e-3": { group: "space", kind: "canonical" },
  "--ativ-e-4": { group: "space", kind: "canonical" },
  "--ativ-e-5": { group: "space", kind: "canonical" },
  "--ativ-e-6": { group: "space", kind: "canonical" },
  "--ativ-e-7": { group: "space", kind: "canonical" },
  "--ativ-e-8": { group: "space", kind: "canonical" },
  "--ativ-e-9": { group: "space", kind: "canonical" },
  "--ativ-e-10": { group: "space", kind: "canonical" },
  "--ativ-grade-max": { group: "grid", kind: "canonical" },
  "--ativ-grade-texto": { group: "grid", kind: "canonical" },
  "--ativ-grade-colunas": { group: "grid", kind: "canonical" },
  "--ativ-grade-calha": {
    group: "grid",
    kind: "alias",
    aliasOf: "--ativ-e-6",
  },
  "--ativ-grade-margem": { group: "grid", kind: "canonical" },
  "--ativ-dur-instante": { group: "motion.duration", kind: "canonical" },
  "--ativ-dur-rapido": { group: "motion.duration", kind: "canonical" },
  "--ativ-dur-padrao": { group: "motion.duration", kind: "canonical" },
  "--ativ-dur-amplo": { group: "motion.duration", kind: "canonical" },
  "--ativ-dur-cena": { group: "motion.duration", kind: "canonical" },
  "--ativ-ease-saida": { group: "motion.easing", kind: "canonical" },
  "--ativ-ease-entrada": { group: "motion.easing", kind: "canonical" },
  "--ativ-ease-padrao": { group: "motion.easing", kind: "canonical" },
  "--ativ-ease-firme": { group: "motion.easing", kind: "canonical" },
  "--ativ-desloca": { group: "motion.distance", kind: "canonical" },
  "--ativ-icone-grade": { group: "iconography", kind: "canonical" },
  "--ativ-icone-traco": { group: "iconography", kind: "canonical" },
  "--ativ-icone-16": { group: "iconography", kind: "canonical" },
  "--ativ-icone-20": { group: "iconography", kind: "canonical" },
  "--ativ-icone-24": { group: "iconography", kind: "canonical" },
  "--ativ-icone-32": { group: "iconography", kind: "canonical" },
  "--ativ-icone-48": { group: "iconography", kind: "canonical" },
  "--ativ-foco-cor": {
    group: "focus",
    kind: "alias",
    aliasOf: "--ativ-ambar",
    note: "Default da superficie escura. Superficie clara resolve para --ativ-indigo.",
  },
  "--ativ-foco-anel": { group: "focus", kind: "canonical" },
  "--ativ-foco-folga": { group: "focus", kind: "canonical" },
  "--ativ-fundo": {
    group: "color.role",
    kind: "alias",
    aliasOf: "--ativ-indigo-profundo",
    surface: "escuro-default",
  },
  "--ativ-fundo-fundo": {
    group: "color.role",
    kind: "alias",
    aliasOf: "--ativ-indigo-900",
    surface: "escuro-default",
  },
  "--ativ-superficie": {
    group: "color.role",
    kind: "alias",
    aliasOf: "--ativ-indigo-800",
    surface: "escuro-default",
  },
  "--ativ-borda-cor": {
    group: "color.role",
    kind: "alias",
    aliasOf: "--ativ-indigo-700",
    surface: "escuro-default",
  },
  "--ativ-borda-forte": {
    group: "color.role",
    kind: "alias",
    aliasOf: "--ativ-indigo-600",
    surface: "escuro-default",
  },
  "--ativ-texto": {
    group: "color.role",
    kind: "alias",
    aliasOf: "--ativ-gelo",
    surface: "escuro-default",
  },
  "--ativ-texto-corpo": {
    group: "color.role",
    kind: "alias",
    aliasOf: "--ativ-indigo-300",
    surface: "escuro-default",
  },
  "--ativ-texto-suave": {
    group: "color.role",
    kind: "alias",
    aliasOf: "--ativ-ardosia-400",
    surface: "escuro-default",
  },
  "--ativ-destaque": {
    group: "color.role",
    kind: "alias",
    aliasOf: "--ativ-ambar",
    surface: "escuro-default",
  },
  "--ativ-destaque-hover": {
    group: "color.role",
    kind: "alias",
    aliasOf: "--ativ-ambar-400",
    surface: "escuro-default",
  },
  "--ativ-sobre-destaque": {
    group: "color.role",
    kind: "alias",
    aliasOf: "--ativ-indigo-profundo",
    surface: "escuro-default",
  },
};

export const surfaces = {
  escuro: {
    selectors: [".ativ-escuro", "#ativ-superficie-escura"],
    roles: {
      "--ativ-fundo": "--ativ-indigo-profundo",
      "--ativ-fundo-fundo": "--ativ-indigo-900",
      "--ativ-superficie": "--ativ-indigo-800",
      "--ativ-borda-cor": "--ativ-indigo-700",
      "--ativ-borda-forte": "--ativ-indigo-600",
      "--ativ-texto": "--ativ-gelo",
      "--ativ-texto-corpo": "--ativ-indigo-300",
      "--ativ-texto-suave": "--ativ-ardosia-400",
      "--ativ-destaque": "--ativ-ambar",
      "--ativ-destaque-hover": "--ativ-ambar-400",
      "--ativ-sobre-destaque": "--ativ-indigo-profundo",
      "--ativ-foco-cor": "--ativ-ambar",
    },
  },
  claro: {
    selectors: [".ativ-claro", "#ativ-superficie-clara"],
    roles: {
      "--ativ-fundo": "--ativ-gelo",
      "--ativ-fundo-fundo": "--ativ-gelo-200",
      "--ativ-superficie": "--ativ-branco",
      "--ativ-borda-cor": "--ativ-gelo-300",
      "--ativ-borda-forte": "--ativ-gelo-300",
      "--ativ-texto": "--ativ-indigo-profundo",
      "--ativ-texto-corpo": "--ativ-ardosia-800",
      "--ativ-texto-suave": "--ativ-ardosia-400",
      "--ativ-destaque": "--ativ-indigo",
      "--ativ-destaque-hover": "--ativ-indigo-profundo",
      "--ativ-sobre-destaque": "--ativ-branco",
      "--ativ-foco-cor": "--ativ-indigo",
    },
  },
};

export const recipes = {
  "typography.titulo-pagina": {
    selectors: [".ativ-titulo-pagina", "#ativ-titulo-pagina"],
    values: ["clamp(38px, 6.4vw, 96px)", ".96", "-.03em"],
    note: "Receita do CSS mestre. Tamanho ainda nao tokenizado.",
  },
  "typography.titulo-secao": {
    selectors: [".ativ-titulo-secao", "#ativ-titulo-secao"],
    values: ["clamp(28px, 4vw, 44px)", "1.05", "-.02em"],
    note: "Receita do CSS mestre. Tamanho ainda nao tokenizado.",
  },
  "typography.texto": {
    selectors: [".ativ-texto", "#ativ-texto"],
    values: ["17px", "1.6"],
    note: "Receita do CSS mestre. Tamanho ainda nao tokenizado.",
  },
  "typography.rotulo": {
    selectors: [".ativ-rotulo", "#ativ-rotulo"],
    values: ["11px", "500", ".18em"],
    note: "Peso 500 nao possui token de peso nomeado. Extraido do CSS mestre, nao promovido a token.",
  },
  "typography.dado": {
    selectors: [".ativ-dado", "#ativ-dado"],
    values: ["13px"],
    note: "Receita do CSS mestre. Tamanho ainda nao tokenizado.",
  },
  "typography.medida-curta": {
    selectors: [".ativ-medida--curta"],
    values: ["46ch"],
    note: "Derivacao documentada da medida de leitura. Nao existe como custom property em :root.",
  },
  "typography.medida-titulo": {
    selectors: [".ativ-medida--titulo"],
    values: ["22ch"],
    note: "Derivacao documentada da medida de titulo. Nao existe como custom property em :root.",
  },
  "layout.secao-desktop": {
    selectors: [".ativ-secao", "#ativ-secao"],
    values: ["900px"],
    note: "Breakpoint do padding de secao no CSS mestre. Nao e token de espaco.",
  },
  "layout.grade-coluna-unica": {
    selectors: [".ativ-grade--2", ".ativ-grade--3", ".ativ-grade--4", "[class*='ativ-col--']"],
    values: ["860px"],
    note: "Breakpoint de colapso da grade no CSS mestre. Nao e token de espaco.",
  },
  "layout.grade-auto-min": {
    selectors: [".ativ-grade--auto"],
    values: ["280px"],
    note: "Minimo de coluna auto-fit no CSS mestre. Fora da escala e-1..e-10; nao promovido a token.",
  },
  "motion.cascata": {
    selectors: [".ativ-cascata"],
    values: ["60ms", "120ms", "240ms", "300ms"],
    note: "Passo de cascata de 60ms, no maximo seis itens. Nao e um sexto token de duracao.",
  },
  "iconography.traco-compensado": {
    selectors: [".ativ-icone--32", ".ativ-icone--48"],
    values: ["1.75", "1.5"],
    note: "Compensacao otica de traco acima de 24px, ja no CSS mestre.",
  },
  "logo.minimos": {
    selectors: [".ativ-logo--completo", ".ativ-logo--wordmark", ".ativ-logo--simbolo"],
    values: ["120px", "60px", "18px"],
    note: "Minimos de lockup, wordmark e simbolo no CSS mestre.",
  },
  "focus.salto": {
    selectors: [".ativ-salto", "#ativ-salto"],
    values: ["12px", "18px", "999"],
    note: "Padding 18px do atalho de salto esta no CSS mestre e fora da escala; nao foi promovido a token.",
  },
};

export const masterExceptionsNotExtracted = [
  {
    id: "cartao-padding-fora-da-escala",
    selectors: [".ativ-cartao", "#ativ-cartao"],
    values: ["26px", "28px"],
    reason:
      "Padding do cartao no CSS mestre nao pertence a escala e-1..e-10. Nao extraido para foundations de producao e nao virou token.",
  },
  {
    id: "controles-medidas-soltas",
    selectors: [".ativ-btn", ".ativ-campo", ".ativ-segmentado", ".ativ-dropdown", ".ativ-toggle"],
    values: ["10px", "14px", "22px", "3px", "9px", "40px", "52px", "28px", "19px"],
    reason:
      "Componentes de controle permanecem no CSS mestre. Medidas soltas nao foram promovidas a tokens nem copiadas para foundations.",
  },
  {
    id: "dropdown-sombra-decorativa",
    selectors: [".ativ-dropdown__painel"],
    values: ["box-shadow: 0 16px 40px rgba(18, 21, 44, .4)"],
    reason:
      "Sombra decorativa do CSS mestre nao entra no contrato de producao desta rodada.",
  },
  {
    id: "pulso-duracao-fora-do-sistema",
    selectors: [".ativ-pulso"],
    values: ["1.6s"],
    reason:
      "Duracao 1.6s nao pertence aos cinco tempos canonicos. A classe nao foi extraida para foundations.",
  },
];

export const prohibited = {
  hex: ["#000", "#000000", "#00000000"],
  keywords: ["black"],
  notes: [
    "Preto puro nao pertence ao sistema; usar Indigo Profundo.",
    "Nao criar tokens de gradiente, glow, sombra decorativa ou espaco arbitrario.",
    "Ambar nunca e texto sobre Gelo ou branco.",
    "Indigo medio nunca e texto sobre Indigo Profundo.",
  ],
};

export const cssExports = {
  tokens: "@ativ/ui/styles/tokens.css",
  foundations: "@ativ/ui/styles/foundations.css",
  bundle: "@ativ/ui/styles.css",
  json: "@ativ/ui/tokens.json",
};
