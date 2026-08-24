# Implementação do design system ATIV

**Status: READY para o Codex integrar a fatia de tokens** em
`feat/design-tokens-foundation` (`bee5055`). Pacote: `docs/HANDOFF_CURSOR_TO_CODEX.md`.

Esta branch (`feat/ui-chrome-foundations`) parte de `origin/main` e adiciona o
chrome visual (topo, nav, rodapé, abertura). Não continua as branches das
Waves 3–6 e não altera o handoff congelado de tokens.

Este documento descreve o contrato visual entregue nessa branch.
Ele não conclui a Fase 2 nem a TASK 002. Não há páginas finais, componentes React
ou Home comercial.

## Precedência

1. `design_guide/brand/tokens/ativ-ui.css` — fonte de verdade visual.
2. `brand/tokens.json` — representação serializável dos tokens do CSS mestre.
3. `packages/ui` (`@ativ/ui`) — CSS de produção e export do contrato.
4. `design_guide/brand/tokens/tailwind.ativ.js` e `theme.ativ.css` — derivados.
   Tailwind não é fonte de verdade e não foi promovido a dependência.

Um valor visual ausente no CSS mestre não vira token. Famílias autorizadas
(WAVE 4+) compostam tokens oficiais e ficam em `recipes`; o restante permanece
lacuna, sem padrão genérico.

## O que foi entregue

| Artefato | Papel |
| --- | --- |
| `brand/logo/` | 28 SVGs do kit, copiados sem alteração, para consumo de produção. |
| `packages/ui/src/data/tokens.json` | Cópia verificada para export do pacote. Deve permanecer idêntica ao arquivo em `brand/`. |
| `packages/ui/src/styles/tokens.css` | `:root` de produção, gerado a partir do CSS mestre. |
| `packages/ui/src/styles/foundations.css` | Superfícies, tipografia, raio aplicado, foco, salto, movimento, iconografia e mínimos de logo. |
| `packages/ui/src/styles/layout.css` | Seção, container, pilha, agrupamento, grade 12/auto-fit, lateral, quadro (vazio/foto/documento/sobrepor), figura com legenda e somente-leitura. |
| `packages/ui/src/styles/controls.css` | Cartão, botões, campos, seleção, slider, paginação, chip, status e badge extraídos do CSS mestre. |
| `packages/ui/src/styles/technical-data.css` | Ficha, pares chave/valor, métrica com unidade, estado rotulado, legenda, configuração e fluxo textual. |
| `packages/ui/src/styles/editorial.css` | Medida de leitura, hierarquia h2–h4, listas, tabela editorial, citação, figura, nota, chamada neutra e rastreio. |
| `packages/ui/src/styles/forms.css` | Agrupamento, textarea, select, fieldset, obrigatório, disabled, readonly, erro, sucesso, loading e alerta. |
| `packages/ui/src/styles/chrome.css` | Topo, navegação, menu condensado, trilha, rodapé, abertura e faixa. |
| `packages/ui/src/styles/index.css` | Bundle local (`@import` relativo, sem CDN). |
| `packages/ui/src/index.ts` | Export JS/TS do contrato e dos caminhos de CSS. |
| `packages/ui/showcase/index.html` | Preview estático interno: skip link, um H1, superfícies, controles, layout, dado técnico, artigo, formulário, topo/menu/rodapé e slots de mídia vazios. Não é página pública. |
| `packages/ui/scripts/` | Sincronização e validação independentes do workspace raiz. |

## Como importar

A conexão ao workspace (`package.json` raiz, lockfile e `apps/web`) pertence ao
Codex. Depois dessa ligação:

```ts
import "@ativ/ui/styles.css";
import { tokens } from "@ativ/ui";
```

Imports explícitos:

```ts
import "@ativ/ui/styles/tokens.css";
import "@ativ/ui/styles/foundations.css";
import "@ativ/ui/styles/layout.css";
import "@ativ/ui/styles/controls.css";
import "@ativ/ui/styles/technical-data.css";
import "@ativ/ui/styles/editorial.css";
import "@ativ/ui/styles/forms.css";
import "@ativ/ui/styles/chrome.css";
import { tokens, logos, contrast, typography } from "@ativ/ui";
```

HTML mínimo esperado:

```html
<body class="ativ-escuro">
  <a class="ativ-salto" href="#conteudo">Ir para o conteúdo</a>
  <main id="conteudo" class="ativ-alvo-salto" tabindex="-1"></main>
</body>
```

Fontes Archivo 800/900, IBM Plex Sans 400–600 e IBM Plex Mono 400/500 devem ser
carregadas pela aplicação, localmente, com `font-display: swap`. `@ativ/ui` não
embute `@font-face` e não aponta para Google Fonts ou outro host remoto.

## Rastreabilidade

- Valores de `brand/tokens.json` → custom properties de
  `design_guide/brand/tokens/ativ-ui.css`.
- `packages/ui/src/styles/tokens.css` é regenerado por
  `packages/ui/scripts/sync-tokens.mjs` a partir do mesmo `:root`.
- Papéis de superfície (`.ativ-escuro` / `.ativ-claro`) são aliases, não cores
  novas.
- Receitas (tamanho de título, breakpoints, passo de cascata, mínimos de logo)
  estão em `recipes` no JSON. Não são tokens canônicos.
- Exceções do CSS mestre que **não** foram extraídas estão em
  `masterExceptionsNotExtracted`.

Para regenerar JSON e CSS de tokens:

```bash
node packages/ui/scripts/sync-tokens.mjs
```

## Norma fechada nesta rodada

- Núcleo de cor: Índigo Profundo, Índigo, Âmbar, Ardósia, Gelo.
- 11 tons de apoio, incluindo branco `#FFFFFF`. Preto puro permanece proibido.
- 4 semânticas de estado, uso funcional apenas.
- Tipografia: famílias, pesos 900/800/600 e classes de título/corpo/rótulo/dado.
- Escala de espaço `--ativ-e-0` … `--ativ-e-10`.
- Grade 12 colunas, calha `--ativ-e-6`, margem `6vw`, conteúdo `1180px`.
- Raios: controle 6px, menu 4px, cartão 10px, pílula 100px.
- Alvo mínimo 44px, borda 1px, anel de foco 3px + folga 2px.
- Cinco durações e quatro curvas nomeadas.
- `prefers-reduced-motion` centralizado, como no CSS mestre.
- Iconografia Lucide em CSS (grade, traço, tamanhos). Lucide não é dependência
  npm deste pacote.
- Logos de UI mapeados por superfície; arquivos em `brand/logo/` idênticos ao kit.
- Contraste de texto proibido: Âmbar sobre Gelo/branco; Índigo sobre Índigo Profundo.
- Tipografia: Archivo / IBM Plex Sans / IBM Plex Mono, fallbacks do CSS mestre,
  `font-display: swap`, sem `@font-face` e sem CDN neste pacote.
- Showcase HTML interno em `packages/ui/showcase/` — não indexável, sem JS de página.
- Layout: seção, container, pilha, agrupamento, grade auto-fit, lateral por
  `min-inline-size`, quadro sem razão fotográfica inventada, somente-leitura.
- Dado técnico: ficha responsiva (`.ativ-ficha`), pares chave/valor (`.ativ-pares`),
  métrica com unidade e indicador (`.ativ-metrica`, `--ativ-indicador-valor` do
  consumidor), estado com texto (`.ativ-estado`), legenda, bloco `.ativ-config` e
  fluxo textual (`.ativ-fluxo`). Sem hex, sem razão fotográfica e sem desenho de rack.
- Editorial: `.ativ-editorial` na medida `--ativ-grade-texto`, hierarquia h2–h4,
  listas, tabela que reflowa, citação, nota, chamada neutra, fonte/rastreio, links
  sublinhados, seleção de texto e `@media print`.
- Formulário: `.ativ-formulario` / `.ativ-campo-grupo`, textarea e select nativos,
  fieldset, obrigatório em texto, disabled/readonly, erro (`aria-invalid` +
  `:user-invalid`), sucesso, loading (`aria-busy` + borda tracejada) e alerta
  global com título visível. Sem captura de lead.
- Chrome: `.ativ-topo` com nav de 44px, submenu em `details`, condensação a 860px
  (símbolo + `.ativ-menu`), trilha, `.ativ-rodape`, `.ativ-abertura` / `.ativ-faixa`.
  Quadro vazio, foto (`object-fit: cover`), documento A4, sobreposição do logo
  branco e `.ativ-figura` + `.ativ-legenda` para mídia candidata. Sem 16/9 inventado.
- Viewports do chrome: desktop (`min-width: 861px` ou `.ativ-topo--largo`) mantém
  lockup/wordmark e nav inline; tablet/mobile (`max-width: 860px` ou
  `.ativ-topo--estreito`) troca para símbolo e `details.ativ-menu`. O painel aberto
  ocupa a largura da barra, não os 44px do summary. Padding de faixa sobe de
  `--ativ-e-8` para `--ativ-e-9` a partir de 900px, como a seção do mestre.
  Teclado: `summary` nativo, anel de foco das foundations em `a` e `summary`,
  `prefers-reduced-motion` herdado (chrome não anima). Overlay modal continua lacuna.

## Lacunas preservadas

Registradas a partir de `cobertura.dc.html` e da instrução de páginas. Não foram
inventadas famílias visuais para fechá-las.

| Lacuna | Estado |
| --- | --- |
| Dado técnico (tabela de spec, medidor, unidade, diagrama de sinal) | Ficha, par, métrica, estado rotulado, config e fluxo textual entregues. Diagrama de rack, planta com cotas e elevação permanecem lacuna — exigiriam desenho, não CSS. |
| Iconografia proprietária e repertório por setor | Lucide permanece a família vigente; conjunto próprio não aprovado. |
| Navegação global, submenu, condensação mobile, breadcrumb | Topo, submenu `details`, menu condensado (painel na largura da barra) e trilha entregues. Overlay modal e abas com ARIA continuam lacuna (precisam de JS). |
| Formulário completo, validação, vazio, loading, erro, sucesso | Contrato visual entregue. Sem backend, sem vazio de página, sem modal/gaveta/404. Campo do mestre permanece 15px (zoom iOS é lacuna). |
| Modal, gaveta, abas de produto, 404/500 | Não extraído. |
| Direção fotográfica e o que entra nos slots de mídia | Quadro (vazio, cover, A4, logo branco) e `.ativ-figura` + `.ativ-legenda` para candidata entregues. O que fotografar e 16/9 continuam lacuna; `--ativ-quadro-proporcao` segue do consumidor. |
| Tipografia editorial longa (citação, nota, legenda, artigo) | Entregue como CSS de artigo. Sem loader Markdown, sem conteúdo real e sem depoimento de cliente. |
| Abertura de página interna | `.ativ-abertura` cobre abertura de topo. Abertura de página interna de setor continua lacuna. |
| Norma de quando usar movimento/fundo | Tokens existem; política de uso ainda é lacuna. |
| Arquivos SVG de logo | Versionados em `brand/logo/`, idênticos ao kit. Variantes `*-preto.svg` são só documento; UI usa Índigo Profundo. Não há wordmark sobre âmbar. |
| Padding do cartão `26px 28px` | Extraído como receita do mestre, sem virar token. |
| Medidas soltas de botão, campo, dropdown, toggle | Extraídas como receitas. Não promovidas a tokens. |
| Sombra do dropdown | Continua omitida; sombra decorativa fica fora do contrato. |
| `.ativ-pulso` com `1.6s` | Fora das cinco durações; não extraído. |
| Paginação `38px` | Extraída como no mestre, abaixo do alvo de 44px; lacuna de acessibilidade preservada. |
| Padding `18px` do `.ativ-salto` | Extraído como receita do mestre, não como degrau de espaço. |

## Validações desta branch

Executáveis sem editar a raiz:

```bash
node --test packages/ui/scripts/validate-tokens.test.mjs
```

Cobertura:

- JSON válido e determinístico;
- nomes `--ativ-*` únicos e alinhados ao CSS mestre;
- paridade de valores entre JSON, CSS mestre e `tokens.css`;
- ausência de hex não aprovado e de preto puro;
- foundations sem hex e sem curvas cruas;
- CSS parseável, sem `@import` remoto;
- exports do `package.json` apontando para arquivos existentes;
- Contraste medido do kit (Âmbar 2.0:1 sobre branco; Índigo 2.3:1 sobre Índigo
  Profundo) validado contra os HEX canônicos.
- Contrato de tipografia alinhado às famílias do CSS mestre, sem `@font-face` e
  sem import remoto;
- Showcase interno sem CDN, com skip link, um H1 e ambas as superfícies.
- Primitives de layout sem hex, sem 16/9 e sem import remoto.
- Dado técnico sem hex, sem razão fotográfica, sem sombra e com estado rotulado (texto + ponto).
- Editorial sem hex, com medida `--ativ-grade-texto`, print e `user-select: text`.
- Formulários sem hex, com `aria-invalid`, texto de erro/sucesso e alvo 44px.
- Chrome sem hex, sem 16/9, com `details` e alvo 44px.

## Gates que dependem do Codex

O workspace em `origin/main` já contém o bootstrap. Esta branch não edita a raiz
nem `apps/web`. Depois de integrar o chrome, o Codex precisa:

1. reconhecer `@ativ/ui` no workspace `packages/*` (já previsto no ADR 0001);
2. conectar o pacote à app mínima sem transformar a rota `/` em Home final;
3. carregar fontes locais (Archivo, IBM Plex Sans, IBM Plex Mono) com
   `font-display: swap`, conforme `typography` no JSON;
4. incluir `packages/ui` nos scripts de format/lint/typecheck se for o padrão do
   monorepo;
5. executar `pnpm --filter @ativ/ui test` junto dos gates da TASK 001;
6. habilitar `resolveJsonModule` / import de JSON se o TypeScript da app exigir.

Versões de Next.js, React, TypeScript, ESLint, Vitest e pnpm não foram escolhidas
aqui. O pacote usa `node:test` para permanecer independente.

## Regras de consumo

- Um destaque por superfície: Âmbar no escuro, Índigo no claro.
- Âmbar não é texto sobre Gelo ou branco.
- Índigo médio não é texto sobre Índigo Profundo.
- Estado inativo usa borda de 1px; sombra não substitui borda.
- Sem gradiente decorativo, glow ou glassmorphism.
- Não fragmentar H1/H2 para animação.
- Conteúdo crítico permanece no HTML; motion não monta texto.
- Alvo interativo mínimo de 44px; foco visível obrigatório.

## Riscos de integração

- Importar o CSS mestre e o CSS de `@ativ/ui` ao mesmo tempo duplica regras.
  Produção deve consumir `@ativ/ui`; o arquivo em `design_guide/` permanece
  referência.
- `foundations.css` cobre o contrato de superfície. `layout.css` cobre disposição.
  `controls.css` cobre os controles do mestre, sem sombra de dropdown e sem
  `.ativ-pulso`. `technical-data.css` cobre ficha, par, métrica, estado, config e
  fluxo textual; não substitui diagrama de rack nem formulário.
- `editorial.css` cobre artigo longo. Não carrega Markdown nem copy comercial.
- `forms.css` cobre estados de formulário. Não captura leads nem fala com backend.
- `chrome.css` cobre topo, menu, trilha, rodapé e abertura. Não é Header/Footer da
  app nem Home comercial; o Codex liga o HTML sem inventar URLs.
- O export `./tokens.json` é cópia verificada. Editar só um dos JSONs quebra o
  teste; usar o script de sync.
- Sem os SVGs de logo no caminho `brand/logo`, a app não consegue cumprir as
  variantes por fundo. Os arquivos já estão nessa pasta; o Codex só precisa
  publicá-los/servi-los, sem recolorir.
