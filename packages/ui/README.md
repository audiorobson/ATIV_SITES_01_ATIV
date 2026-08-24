# `@ativ/ui`

Contrato visual framework-neutral da ATIV. Esta rodada entrega tokens canônicos e
foundations CSS. Não contém componentes React, Radix, shadcn ou Motion.

## Fonte de verdade

`design_guide/brand/tokens/ativ-ui.css` vence sempre. `brand/tokens.json` é a
representação serializável. O CSS deste pacote é derivado rastreável. Tailwind,
quando existir, é consumidor derivado — nunca fonte.

## Exports públicos

| Export | Caminho |
| --- | --- |
| `@ativ/ui` | contrato JSON tipado (`src/index.ts`) |
| `@ativ/ui/tokens.json` | o mesmo contrato em JSON |
| `@ativ/ui/styles/tokens.css` | custom properties canônicas |
| `@ativ/ui/styles/foundations.css` | superfícies, tipo, espaço, grade, foco, movimento, ícone e logo |
| `@ativ/ui/styles/controls.css` | cartão, botões, campos, seleção, slider, paginação, chip, status e badge |
| `@ativ/ui/styles.css` | bundle local (`tokens` + `foundations` + `controls`) |

## Como importar

A app deve carregar as fontes Archivo, IBM Plex Sans e IBM Plex Mono localmente
antes do CSS. Este pacote não importa fontes remotas.

```css
@import "@ativ/ui/styles.css";
```

Ou, de forma explícita:

```css
@import "@ativ/ui/styles/tokens.css";
@import "@ativ/ui/styles/foundations.css";
@import "@ativ/ui/styles/controls.css";
```

```ts
import { tokens, cssExports, logos, contrast } from "@ativ/ui";
```

Logos de UI: `logos.ui.escuro.lockup` → `brand/logo/logo-2t-claro.svg`. Não recolorir.

Aplique `.ativ-escuro` ou `.ativ-claro` no contêiner. Componentes leem papéis
(`--ativ-fundo`, `--ativ-texto`, `--ativ-destaque`), nunca hex.

## Validação local

Não depende do workspace raiz:

```bash
node --test packages/ui/scripts/validate-tokens.test.mjs
```

Ou, depois que o Codex conectar o pacote ao workspace:

```bash
pnpm --filter @ativ/ui test
```

Para regenerar JSON e `tokens.css` a partir do CSS mestre:

```bash
node packages/ui/scripts/sync-tokens.mjs
```

## Fora desta fatia

Navegação global, formulário completo com estados, dado técnico, React/Radix/shadcn
e SVGs de logo não entram neste pacote. A sombra do dropdown e `.ativ-pulso` continuam
omitidas de propósito. Ver `docs/design-system-implementation.md`.
