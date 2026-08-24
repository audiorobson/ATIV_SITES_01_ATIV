# TASK 001 — Fundação local da plataforma

## Estado

A fundação executável foi criada na branch `feat/foundation-bootstrap`.

Versões fixadas:

- Node.js 24 LTS (`.nvmrc` e `engines`);
- pnpm 11.19.0 (`packageManager`);
- Next.js 16.3.2;
- React 19.2.8;
- TypeScript 6.0.3.

As decisões e alternativas estão em `docs/adr/0001-web-stack.md`.

## Primeira execução

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

A aplicação fica disponível em `http://localhost:3000`.

## Quality gates

```bash
pnpm format:check
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

O CI executa install congelado, lint, typecheck, testes e build.

## Escopo da superfície inicial

A rota `/` é uma superfície técnica temporária, não a Home final. Ela valida:

- App Router e React Server Components;
- HTML principal renderizado no servidor;
- metadata básica e `noindex` temporário;
- H1 único e hierarquia semântica;
- atalho de teclado para o conteúdo;
- headers de segurança iniciais;
- tipagem, teste e build.

Não há analytics, redirects, CMS, páginas comerciais, conteúdo SEO em escala, motion ou WebGL.

## Trabalho paralelo de UI

`packages/ui` e `brand/tokens.json` pertencem ao perfil Cursor definido em
`docs/agents/CURSOR_DESIGN_SYSTEM_PROFILE.md`. O workspace já reconhece `packages/*`; a integração do
pacote deve ocorrer por export público depois do handoff, sem copiar valores visuais para `apps/web`.

Até essa integração, a superfície técnica usa apenas estilos de sistema neutros e não se apresenta
como design aprovado da ATIV.
