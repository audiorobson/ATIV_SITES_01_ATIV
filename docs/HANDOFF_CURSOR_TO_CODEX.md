# Handoff Cursor → Codex

**Status: READY** — esta branch está congelada para integração. Não esperar mais commits em `feat/design-tokens-foundation`.

```text
Perfil: B — Cursor / Design System Engineer
Branch e SHA: feat/design-tokens-foundation
  base:  32eca436999c84df7baaa54ff6ac22d154ff9b84
  final: 1def7cf609f75efcb86744b137152df11d416c38
  remote: origin/feat/design-tokens-foundation
Objetivo concluído: contrato visual framework-neutral (@ativ/ui + brand/tokens.json)
Arquivos alterados:
  brand/tokens.json
  packages/ui/**
  docs/design-system-implementation.md
  docs/HANDOFF_CURSOR_TO_CODEX.md
Contratos/exportações:
  @ativ/ui
  @ativ/ui/tokens.json
  @ativ/ui/styles/tokens.css
  @ativ/ui/styles/foundations.css
  @ativ/ui/styles.css
Comandos executados e resultados:
  node --test packages/ui/scripts/validate-tokens.test.mjs
  → 6/6 passing
Pendências (Codex):
  1. cherry-pick ou merge sem squash dos commits abaixo
  2. conectar @ativ/ui ao workspace e à app mínima (sem Home final)
  3. carregar fontes locais (Archivo, IBM Plex Sans, IBM Plex Mono)
  4. pnpm --filter @ativ/ui test nos gates
  5. resolveJsonModule / import JSON se o TypeScript da app exigir
Riscos de integração:
  main avançou após a base 32eca43 (PR #3). Rebase/cherry-pick necessário.
  Não importar design_guide/.../ativ-ui.css junto com @ativ/ui.
Arquivos que o outro perfil deve evitar até o merge:
  brand/**
  packages/ui/**
  docs/design-system-implementation.md
  docs/HANDOFF_CURSOR_TO_CODEX.md
```

## Commits para integrar, nesta ordem

1. `177be1d` feat(ui): add canonical brand token contract
2. `cb56d5d` feat(ui): add framework-neutral visual foundations
3. `4605e70` test(ui): validate token parity and approved values
4. `1def7cf` docs: document design system consumption and gaps
5. este commit de handoff (`docs:`)

Política: merge sem squash ou cherry-pick integral. Cursor não abre PR desta branch.

## Como importar depois de ligar o pacote

```ts
import "@ativ/ui/styles.css";
import { tokens } from "@ativ/ui";
```

Aplicar `.ativ-escuro` ou `.ativ-claro` no contêiner.

## O que o Cursor não fará nesta branch

Nenhum commit adicional de produto em `feat/design-tokens-foundation`. A fatia seguinte da Fase 2 (controles CSS extraídos do mestre) segue em `feat/ui-control-foundations`, depois desta marcação.

Detalhe de consumo e lacunas: `docs/design-system-implementation.md`.
