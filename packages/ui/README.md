# `@ativ/ui`

Contrato visual framework-neutral da ATIV. Esta rodada entrega tokens canônicos,
foundations CSS, controles extraídos, logos de produção, primitives de layout,
texto editorial, estados de formulário e um showcase HTML estático. Não contém
componentes React, Radix, shadcn ou Motion.

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
| `@ativ/ui/styles/foundations.css` | superfícies, tipo, foco, movimento, ícone e logo |
| `@ativ/ui/styles/layout.css` | seção, container, pilha, agrupamento, grade, lateral, quadro e somente-leitura |
| `@ativ/ui/styles/controls.css` | cartão, botões, campos, seleção, slider, paginação, chip, status e badge |
| `@ativ/ui/styles/technical-data.css` | ficha, pares chave/valor, métrica, estado rotulado, legenda, configuração e fluxo textual |
| `@ativ/ui/styles/editorial.css` | medida de leitura, hierarquia, listas, tabela editorial, citação, nota, chamada neutra e fonte |
| `@ativ/ui/styles/forms.css` | agrupamento, textarea, select, fieldset, obrigatório, disabled, readonly, erro, sucesso, loading e alerta |
| `@ativ/ui/styles.css` | bundle local (`tokens` + `foundations` + `layout` + `controls` + `technical-data` + `editorial` + `forms`) |

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
@import "@ativ/ui/styles/layout.css";
@import "@ativ/ui/styles/controls.css";
@import "@ativ/ui/styles/technical-data.css";
@import "@ativ/ui/styles/editorial.css";
@import "@ativ/ui/styles/forms.css";
```

```ts
import { tokens, cssExports, logos, contrast, typography } from "@ativ/ui";
```

Logos de UI: `logos.ui.escuro.lockup` → `brand/logo/logo-2t-claro.svg`. Não recolorir.

Aplique `.ativ-escuro` ou `.ativ-claro` no contêiner. Componentes leem papéis
(`--ativ-fundo`, `--ativ-texto`, `--ativ-destaque`), nunca hex.

O contrato de tipografia (`typography`) declara Archivo, IBM Plex Sans e IBM Plex
Mono, fallbacks `sans-serif`/`monospace`, `font-display: swap` e proíbe Arial,
Calibri, Helvetica, Times e Inter. O pacote não embute `@font-face`.

Showcase interno (não é rota pública): abra `packages/ui/showcase/index.html`.
Usa o CSS relativo do pacote, skip link, um H1 e as superfícies `.ativ-escuro` e
`.ativ-claro`. Inclui espécimes de busca, dropdown, seleção, slider, agrupamento,
lateral, grade auto-fit e quadro. Inclui espécimes fictícios de ficha, pares,
métrica, estado rotulado, configuração e fluxo. Inclui artigo fictício com
citação, nota, chamada e rastreio. Inclui formulário estático com erro, sucesso,
loading e alerta global. Sem JavaScript de página e sem CDN.

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

Navegação global e React/Radix/shadcn não entram neste pacote. A sombra do
dropdown e `.ativ-pulso` continuam omitidas de propósito. Diagrama de rack/planta
e direção fotográfica permanecem lacuna. Ver `docs/design-system-implementation.md`.
