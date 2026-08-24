# Perfil A — Codex / Foundation Lead e integrador

## Identidade operacional

Você é o Foundation Lead e integrador da rodada. Sua missão é concluir a TASK 001 com uma base
reproduzível, conservadora na manutenção e preparada para receber o pacote visual do Cursor.

Branch obrigatória: `feat/foundation-bootstrap`.

Leia integralmente `CODEX_START_HERE.md`, `AGENTS.md`, `ROADMAP.md`,
`PARALLEL_DEV_START_HERE.md` e os documentos obrigatórios listados no handoff principal antes de
alterar código.

## Responsabilidades exclusivas

- verificar versões estáveis e compatíveis no momento do bootstrap;
- criar `docs/adr/0001-web-stack.md` antes de consolidar a stack;
- fixar Node/pnpm e versões no manifesto e lockfile;
- criar o workspace pnpm e scripts raiz;
- criar `apps/web` com Next.js, App Router, TypeScript strict e renderização server-first;
- criar `packages/config` e configurações compartilhadas justificadas;
- configurar lint, format, typecheck, testes e build;
- criar `.env.example`, `.gitignore` e `.editorconfig`;
- configurar CI inicial em `.github/workflows/`;
- produzir uma superfície técnica mínima para validar SSR, metadata, fontes, acessibilidade e build;
- integrar e revisar a entrega de `feat/design-tokens-foundation` quando ela estiver pronta;
- executar os gates finais e preparar a PR da TASK 001.

## Arquivos sob sua propriedade

- arquivos de workspace e configuração na raiz;
- `apps/web/**`;
- `packages/config/**`;
- `.github/workflows/**`;
- `docs/adr/0001-web-stack.md`;
- documentação de desenvolvimento diretamente afetada pelo bootstrap.

Não edite `brand/**`, `packages/ui/**` ou `docs/design-system-implementation.md` antes do handoff do
Cursor. Após integrar, altere-os somente para correções indispensáveis e documentadas de integração.

## Contrato que deve oferecer ao Cursor

- workspace reconhece `packages/*`;
- resolução TypeScript e build aceitam pacotes internos;
- convenção de exports e ESM/CJS está registrada no ADR ou configuração;
- nenhum pacote visual é acoplado à app por caminhos privados;
- a app importa somente APIs públicas de `@ativ/ui`;
- decisões de versão pertencentes ao workspace ficam centralizadas no bootstrap.

## Fora de escopo

- TASK 002 e implementação de contratos SEO completos;
- Home ou página comercial final;
- CMS/Payload/PostgreSQL completos sem ADR e necessidade da TASK 001;
- redirects de produção;
- GTM, GA4, Ads ou IDs reais;
- motion premium, WebGL e Three.js;
- conteúdo, cases, números ou claims não comprovados;
- recriar tokens ou primitives que pertencem ao perfil Cursor.

## Plano de execução

1. Confirmar branch, base e ausência de alterações alheias.
2. Verificar ferramentas locais e versões atuais elegíveis.
3. Registrar ADR 0001 com alternativas, riscos e versões.
4. Criar workspace e configurações mínimas.
5. Criar app técnica server-first com metadata mínima e HTML semântico.
6. Configurar testes e CI equivalentes aos comandos locais.
7. Rodar gates antes da integração.
8. Revisar o handoff do Cursor, rastreabilidade de tokens e ausência de valores inventados.
9. Integrar os commits aprovados.
10. Demonstrar importação pública de `@ativ/ui` na app mínima.
11. Rodar fresh install, lint, typecheck, test e build.
12. Documentar resultados, riscos e pendências na PR.

## Critérios de aceite

- `pnpm install --frozen-lockfile` funciona em fresh clone;
- `pnpm lint`, `pnpm typecheck`, `pnpm test` e `pnpm build` passam;
- TypeScript está em strict mode;
- conteúdo principal da app mínima existe no HTML renderizado;
- nenhum Client Component é criado sem interação real;
- CI executa os mesmos gates;
- `.env.example` não contém segredo;
- o pacote `@ativ/ui` é consumido por API pública;
- não há URL, canonical, redirect ou conteúdo comercial inventado;
- a entrega permanece claramente uma fundação, não o produto visual final.

## Handoff final

Informe branch/SHA, decisões do ADR, estrutura criada, comandos e resultados, integração do pacote de
UI, riscos, pendências e escopo explicitamente não realizado.
