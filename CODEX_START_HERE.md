# CODEX — START HERE

Este arquivo é a **ordem operacional de desenvolvimento local** da plataforma digital da ATIV.

Se você é Codex ou outro agente de desenvolvimento, comece aqui e não improvise arquitetura, hosting ou sequência de tasks.

---

## 1. Repositório oficial

```bash
git clone https://github.com/audiorobson/ATIV_SITES_01_ATIV.git
cd ATIV_SITES_01_ATIV
git remote -v
git status
git branch --show-current
git pull --ff-only origin main
```

A fonte de verdade remota é `main`, somada às branches/PRs explicitamente indicadas por tasks ainda não mergeadas.

---

## 2. Leitura obrigatória

Ler integralmente, nesta ordem:

1. `CODEX_START_HERE.md`
2. `AGENTS.md`
3. `ROADMAP.md`
4. `README.md`
5. `docs/hostgator-deployment-contract.md`
6. `docs/local-development.md`
7. `docs/architecture.md`
8. `docs/site-audit.md`
9. `docs/seo-inventory-2026-08-24.md`
10. `docs/seo-strategy.md`
11. `docs/seo-migration.md`
12. `docs/ads-route-strategy.md`
13. `docs/ads-tracking.md`
14. `docs/domain-authority-ecosystem.md`
15. `docs/brand-system.md`
16. `docs/content-strategy.md`
17. `docs/quality-gates.md`
18. `docs/seo-open-source-tooling.md`
19. `docs/references.md`
20. `seo/url-inventory.csv`
21. `seo/keyword-map.csv`
22. `seo/route-plan.csv`
23. `seo/redirect-map.csv`
24. `seo/cross-domain-link-plan.csv`
25. `content/TECHNICAL_CONTENT_TOPICS.md`

Depois, ler as Issues abertas aplicáveis, em ordem de dependência.

---

## 3. DECISÃO DE HOSTING NÃO NEGOCIÁVEL

A baseline atual de produção é **publicação direta no HostGator por upload dos artefatos finais**.

Enquanto não houver ADR aprovado alterando o ambiente:

- NÃO assumir Node.js em produção;
- NÃO assumir Docker;
- NÃO assumir PostgreSQL;
- NÃO assumir Payload CMS runtime;
- NÃO depender de SSR/ISR/API Routes/Server Actions em request time;
- NÃO depender de crawler, dashboard ou SaaS SEO;
- NÃO transformar GitHub Actions em requisito operacional;
- TODO SEO essencial deve existir nos arquivos finais publicados.

Next.js + TypeScript continuam permitidos para desenvolvimento/build.

O resultado deve ser static-first e compatível com `public_html`.

Referência obrigatória:

`docs/hostgator-deployment-contract.md`

---

## 4. Regra de portabilidade

Antes de adotar qualquer feature, responder:

- funciona sem processo Node permanente?
- funciona sem Docker?
- funciona sem banco para servir páginas públicas?
- funciona sem serviço SEO externo?
- conteúdo principal existe no HTML final?
- metadata/schema existem no artefato final?
- sitemap/robots são arquivos publicáveis?
- assets funcionam após upload simples?
- redirects necessários podem ser representados em Apache/`.htaccess`?

Se alguma resposta for NÃO, não implementar na baseline sem ADR.

---

## 5. Fundação esperada

Estrutura alvo:

```text
apps/
└── web/

packages/
├── config/
├── ui/
├── seo/
└── analytics/

content/
scripts/
.github/
```

Arquivos/fundações:

- `package.json` raiz;
- `pnpm-workspace.yaml`;
- lockfile;
- `.gitignore`;
- `.editorconfig`;
- `.env.example` sem segredos;
- TypeScript strict;
- lint/format;
- app Next mínima;
- metadata mínima;
- geração estática compatível;
- testes locais;
- scripts previsíveis.

Scripts alvo:

```bash
pnpm dev
pnpm lint
pnpm typecheck
pnpm test
pnpm seo:check
pnpm build
pnpm build:hostgator
```

Tudo deve funcionar em fresh clone.

---

## 6. ADR da stack

Antes de consolidar decisões:

`docs/adr/0001-web-stack.md`

Deve explicar:

- versões atuais escolhidas;
- Next.js/React/TypeScript;
- static export;
- impacto em SEO;
- impacto em performance;
- manutenção;
- limitações de hosting;
- compatibilidade HostGator;
- recursos deliberadamente não utilizados por exigirem Node runtime.

---

## 7. SEO — contrato atual

Criar/manter `packages/seo` como fonte central para:

- title/description;
- canonical;
- robots;
- Open Graph/social metadata;
- JSON-LD;
- Organization;
- WebSite;
- WebPage;
- BreadcrumbList;
- Service quando válido;
- Article/BlogPosting;
- FAQ somente quando válido;
- sitemap;
- internal linking;
- redirect validation;
- acquisition parameters.

### Dependência ADOPT

- `google/schema-dts`

### EVALUATE

- `iamvishnusankar/next-sitemap`, apenas se geração própria/nativa não for suficiente e continuar 100% estática.

### OPTIONAL LOCAL — não requisito do projeto

- Lighthouse/Lighthouse CI;
- Lychee;
- Unlighthouse;
- SiteOne Crawler;
- Playwright para QA quando útil.

Não criar dependência operacional dessas ferramentas.

---

## 8. SEO check próprio

Criar validação local, por exemplo:

```text
scripts/seo-check.ts
```

Comando:

```bash
pnpm seo:check
```

Deve detectar pelo menos:

- title/description ausentes;
- title duplicado em P0;
- canonical inválido;
- H1 semântico ausente/destruído;
- `noindex` acidental;
- `/lp/**` indexável indevidamente;
- sitemap com rota proibida;
- robots incoerente;
- JSON-LD inválido estruturalmente;
- links internos para rota inexistente;
- alteração indevida de URL protegida;
- inconsistência `www` / non-`www` / `/index.html`.

---

## 9. Build HostGator

Implementar comando previsível:

```bash
pnpm build:hostgator
```

A saída deve gerar um único diretório final para upload ao `public_html`.

Ele deve conter quando aplicável:

- HTML;
- CSS;
- JS;
- assets;
- `robots.txt`;
- `sitemap.xml`;
- `.htaccess`;
- 404;
- metadata/schema incorporados.

O diretório final deve funcionar sem `next start` ou processo Node.

---

## 10. Conteúdo

`content/` é fonte editorial versionada e portável.

Não duplicar copy dentro dos componentes se já existir documento editorial.

Para conteúdo técnico, respeitar integralmente:

`content/TECHNICAL_CONTENT_TOPICS.md`

Regras centrais:

- empresa sempre `ATIV` em caixa alta;
- nunca usar “ATIV Pro” como nome da empresa;
- `ativpro.com` é domínio/endereço;
- utilizar base RAG conforme contrato do conteúdo técnico;
- claims exigem evidência;
- conteúdo deve ser estruturado para site/CMS/RAG.

---

## 11. CMS e backend

Payload CMS + PostgreSQL estão **DEFER** na baseline atual.

Não inicializar como requisito da aplicação pública.

Somente reconsiderar via ADR se houver hosting com runtime apropriado e necessidade comercial/editorial real.

Conteúdo deve funcionar em build time a partir do repositório.

---

## 12. Formulários

Não criar API Routes/Server Actions como solução de produção por padrão.

Na fase de leads:

- confirmar hosting real;
- se continuar compartilhado, avaliar endpoint PHP coimplantado;
- manter segredos fora do bundle;
- validar server-side;
- documentar em ADR/task específica.

---

## 13. Ads / tracking

- não inserir IDs inventados;
- não criar redirects cross-domain intermediários;
- preparar `gclid`, `gbraid`, `wbraid`, `msclkid` e UTM;
- `/lp/**` deve ser estático/publicável;
- `noindex,follow` por padrão;
- fora do sitemap;
- AdsBot acessível;
- tracking não pode impedir conteúdo/SEO.

---

## 14. Segurança

- nenhum segredo no Git;
- nenhum segredo no bundle client;
- `.env.example` apenas nomes/placeholders;
- headers/regras Apache quando aplicáveis;
- dependências atualizadas;
- qualquer endpoint PHP futuro deve ter validação e proteção próprias.

---

## 15. Patrimônio SEO

Inventários:

```text
seo/url-inventory.csv
seo/keyword-map.csv
seo/route-plan.csv
seo/redirect-map.csv
```

URL existente com histórico potencial é preservada por padrão.

P0 legado que não pode voltar:

- Home com H1 `|`;
- headings caractere-a-caractere sem semântica íntegra;
- titles genéricos;
- `/solucoes/colaboracao-uc/` com 406;
- telefone placeholder;
- contadores renderizando `0` como prova;
- inconsistência `www`/non-`www`/`index.html`;
- claims sem evidência.

---

## 16. Redirects

Nenhum redirect de produção fora do processo de migração aprovado.

Quando aprovado para HostGator/Apache:

- gerar `.htaccess` ou regra compatível;
- single-hop;
- preservar query string quando necessário;
- sem doorway/cross-domain intermediary.

---

## 17. Quality gates locais

Antes de PR:

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm seo:check
pnpm build
```

Quando implementado:

```bash
pnpm build:hostgator
```

Também verificar:

- nenhum segredo;
- nenhum placeholder como fato;
- nenhuma mudança de URL indevida;
- nenhuma dependência de runtime incompatível;
- documentação atualizada;
- fresh clone reproduzível.

---

## 18. PRs

Usar Conventional Commits e branches temáticas.

Toda PR arquitetural deve declarar:

- impacto em SEO;
- impacto em HostGator/static export;
- dependências novas;
- testes executados;
- riscos/rollback;
- se exige ADR.

---

## 19. Ordem de execução das tasks

- concluir/sincronizar TASK 001 quando ainda pendente;
- executar TASK 002 usando **a versão atualizada da Issue #2**;
- qualquer instrução antiga da TASK 002 que torne Lighthouse CI/Lychee/Unlighthouse requisito obrigatório está revogada pela decisão de hosting atual;
- priorizar `schema-dts`, SEO próprio, `seo:check`, build estático e `build:hostgator`.

---

## 20. Prompt operacional curto para Codex

> Trabalhe no repositório `audiorobson/ATIV_SITES_01_ATIV`. Antes de alterar código, sincronize o remoto e leia `CODEX_START_HERE.md`, `AGENTS.md`, `ROADMAP.md` e `docs/hostgator-deployment-contract.md`. A produção deve ser static-first e publicável diretamente no HostGator sem processo Node, Docker, banco ou serviço SEO obrigatório. Next.js/TypeScript são ferramentas de desenvolvimento/build. Atualize a implementação local e os contratos para essa baseline, mantenha `packages/seo`, adote `schema-dts`, crie `pnpm seo:check` e prepare `pnpm build:hostgator`. Não iniciar Payload/PostgreSQL/runtime Node sem ADR. Execute lint/typecheck/test/seo-check/build e documente a portabilidade na PR.

---

## 21. Regra final

Quando houver conflito entre feature e portabilidade, **portabilidade vence até ADR explícito**.

Quando houver conflito entre velocidade e SEO/Brand/segurança, **qualidade vence**.

Quando uma informação empresarial não estiver comprovada, **não inventar**.