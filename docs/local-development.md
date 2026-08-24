# Desenvolvimento Local — ATIV

## Objetivo

Permitir que Codex ou qualquer desenvolvedor faça um fresh clone, desenvolva com stack moderna e produza um artefato final publicável diretamente no HostGator.

A referência obrigatória de deploy é:

`docs/hostgator-deployment-contract.md`

## 1. Clone

```bash
git clone https://github.com/audiorobson/ATIV_SITES_01_ATIV.git
cd ATIV_SITES_01_ATIV
```

Antes de trabalhar:

```bash
git pull --ff-only origin main
```

## 2. Leitura obrigatória antes do bootstrap

Nesta ordem:

1. `CODEX_START_HERE.md`;
2. `AGENTS.md`;
3. `ROADMAP.md`;
4. `docs/hostgator-deployment-contract.md`;
5. `docs/architecture.md`;
6. `docs/site-audit.md`;
7. `docs/seo-strategy.md`;
8. `docs/seo-migration.md`;
9. `docs/seo-open-source-tooling.md`;
10. `docs/quality-gates.md`.

## 3. Regra de ambiente

Node.js, pnpm, TypeScript, Playwright e outras ferramentas são permitidos no computador de desenvolvimento.

A aplicação publicada **não pode assumir que Node.js estará rodando no HostGator** enquanto o contrato de hosting atual estiver vigente.

Logo:

> desenvolvimento pode ser dinâmico; deploy deve ser portável e static-first.

## 4. Pré-requisitos locais

Confirmar no bootstrap:

- Git recente;
- Node.js LTS compatível;
- pnpm via Corepack;
- navegador Chromium para QA;
- nenhum Docker/PostgreSQL obrigatório para a aplicação pública;
- ferramentas opcionais apenas quando agregarem valor local.

Não fixar versões a partir de memória. Registrar versões escolhidas em lockfile/packageManager/ADR.

## 5. Branch inicial do Codex

Para TASK 001, seguir a branch definida na issue/contrato correspondente.

Para mudanças posteriores, sempre criar branch temática e não trabalhar diretamente em `main`.

## 6. Primeira entrega de engenharia esperada

Estrutura mínima:

```text
package.json
pnpm-lock.yaml
pnpm-workspace.yaml
.gitignore
.editorconfig
.env.example
apps/web/
packages/config/
packages/seo/
packages/ui/
content/
scripts/
.github/workflows/
```

A existência de `.github/workflows/` não cria dependência operacional de CI para o site funcionar.

## 7. ADR antes de lock arquitetural

`docs/adr/0001-web-stack.md` deve registrar:

- versões escolhidas;
- estratégia de Next.js;
- compatibilidade com static export;
- impacto em SEO/performance/manutenção;
- limitações conhecidas;
- por que a solução é publicável no HostGator.

Não inicializar Payload/PostgreSQL como requisito de produção sem ADR posterior específico.

## 8. Scripts mínimos

O `package.json` raiz deve evoluir para fornecer comandos previsíveis:

```bash
pnpm dev
pnpm lint
pnpm typecheck
pnpm test
pnpm seo:check
pnpm build
pnpm build:hostgator
```

`pnpm test:e2e` pode existir quando Playwright for adotado localmente.

Todos devem ser documentados e funcionar em fresh clone.

## 9. `build:hostgator`

Esse script é obrigatório antes da primeira publicação real.

Ele deve:

1. executar/depender do build de produção;
2. gerar somente recursos compatíveis com a baseline de hosting;
3. produzir diretório final claramente documentado;
4. incluir metadata, schema, sitemap, robots e assets;
5. incluir `.htaccess` quando houver regras Apache aprovadas;
6. não exigir servidor Node para servir o resultado.

Exemplo de destino:

```text
dist/hostgator/
```

O nome real pode mudar, desde que exista um único diretório final identificável para upload ao `public_html`.

## 10. SEO local

Criar validação própria no repositório.

Comando alvo:

```bash
pnpm seo:check
```

Verificações mínimas:

- metadata obrigatória;
- canonical;
- H1 semântico;
- index/noindex;
- sitemap;
- robots;
- JSON-LD;
- links internos;
- slugs protegidos;
- regras `www`/non-`www`/`index.html`;
- contratos `/lp/**`.

Ferramentas como Lighthouse, Lychee, Unlighthouse e SiteOne podem ser utilizadas manualmente, mas não devem virar requisito do build/deploy.

## 11. TypeScript

- strict mode;
- evitar `any` sem justificativa;
- schemas compartilhados tipados;
- `schema-dts` permitido para JSON-LD;
- separar tipos de conteúdo, SEO e tracking.

## 12. Environment variables

`.env.example` deve:

- listar nomes necessários apenas para desenvolvimento/build;
- conter valores fake/placeholder;
- explicar quais são opcionais;
- nunca conter segredo real.

Nenhum segredo pode ser embutido no bundle client.

Se um recurso exigir segredo em produção, ele precisa de backend compatível e ADR específico.

## 13. CI

GitHub Actions pode ser usado para conveniência de engenharia, mas não é pré-requisito operacional do site.

Se houver CI, manter pelo menos:

- install com lockfile frozen;
- lint;
- typecheck;
- testes;
- `seo:check`;
- production build;
- build HostGator quando estiver implementado.

Tudo isso também deve ser executável localmente.

## 14. Primeira página técnica

Antes da Home final, validar:

- App Router/arquitetura escolhida;
- font loading;
- metadata;
- geração estática;
- design tokens;
- acessibilidade básica;
- pipeline de build;
- publicação em diretório estático.

## 15. Conteúdo

Usar `content/` como fonte editorial versionada.

O site deve conseguir ingerir Markdown durante o build, sem banco de dados em produção.

Não duplicar copy dentro de componentes quando existir conteúdo editorial correspondente.

## 16. CMS/banco

Na baseline atual:

- não iniciar Payload como dependência obrigatória;
- não iniciar PostgreSQL como dependência obrigatória;
- não exigir Docker para rodar o site público;
- não criar admin/CMS que bloqueie a evolução do site estático.

CMS pode ser reavaliado futuramente via ADR.

## 17. Recursos dinâmicos

Não usar API Routes/Server Actions como requisito do site publicado sem hosting compatível.

Para formulários futuros em HostGator compartilhado, avaliar endpoint PHP coimplantado em task própria.

Não resolver isso antecipadamente na fundação SEO.

## 18. Validação antes de PR

Executar e registrar:

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm seo:check
pnpm build
```

Quando disponível:

```bash
pnpm build:hostgator
```

Validar o diretório final como arquivos estáticos, sem processo Node.

## 19. O que Codex NÃO deve fazer

- não assumir VPS/Node em produção;
- não iniciar CMS/runtime server-side sem ADR;
- não copiar o site atual inteiro;
- não trocar URLs sem processo SEO;
- não subir produção sem artefato validado;
- não inserir IDs reais/inventados de Ads;
- não criar conteúdo fictício definitivo;
- não instalar serviços SEO residentes;
- não transformar crawler externo em dependência;
- não construir páginas SEO em massa.

## 20. Entrega esperada

Toda PR que altera arquitetura/deploy deve informar:

- impacto no build estático;
- impacto no HostGator;
- comandos locais;
- testes;
- artefato gerado;
- dependências novas;
- riscos;
- necessidade ou não de ADR.

## 21. Regra final

> O desenvolvedor pode usar ferramentas avançadas localmente, mas o resultado da aplicação deve continuar publicável por upload simples no HostGator, sem dependência operacional externa.