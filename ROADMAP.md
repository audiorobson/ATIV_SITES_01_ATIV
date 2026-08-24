# ROADMAP — Nova Plataforma ATIV

Este roadmap é sequencial. Nenhum agente deve pular fundações críticas, patrimônio SEO, contrato de marca ou portabilidade de deploy para acelerar a camada visual.

## Decisão transversal de hosting

A baseline atual de produção é **HostGator com publicação direta dos artefatos finais do site**.

Ler obrigatoriamente:

`docs/hostgator-deployment-contract.md`

Enquanto não houver ADR alterando a hospedagem:

- desenvolver com Next.js + TypeScript é permitido;
- produção deve ser static-first;
- não assumir Node.js em runtime;
- não assumir Docker;
- não assumir banco para servir páginas públicas;
- SEO essencial deve estar incorporado ao build;
- conteúdo versionado deve continuar disponível em `content/`;
- recursos incompatíveis com upload para `public_html` exigem ADR antes de implementação.

---

## Fase 0 — Discovery e inventário

**Objetivo:** conhecer patrimônio atual, riscos e requisitos antes da reconstrução.

### Entregáveis

- auditoria técnica do `ativpro.com`;
- inventário em `seo/url-inventory.csv`;
- title, H1, canonical, status, indexabilidade e tipo de página;
- dados de Search Console/Ads quando disponíveis;
- diagnóstico de destinos de Ads;
- inventário de ativos de marca, fotos, cases, documentos e provas;
- mapa preliminar de concorrentes e SERPs.

### Critério de saída

URLs prioritárias e riscos de migração estão classificados; lacunas externas estão documentadas.

---

## Fase 1 — Arquitetura e fundação técnica

**Objetivo:** criar base sustentável e portável.

### Entregáveis

- ADR da stack;
- bootstrap workspace/monorepo;
- Next.js + TypeScript strict;
- pnpm/lockfile;
- lint, format, typecheck, test e build;
- `.env.example`;
- estrutura `apps/`, `packages/`, `content/`, `scripts/`;
- `packages/seo` inicial;
- estratégia static-first;
- documentação HostGator;
- primeiro build exportável sem runtime Node em produção.

### Critério de saída

Fresh clone instala, testa, gera build e existe caminho claro para artefato estático publicável.

---

## Fase 2 — Brand System e UI foundations

**Objetivo:** converter o Brand System aprovado em interface própria.

### Entregáveis

- tokens oficiais conforme fonte de verdade do Brand System;
- tipografia;
- escala de espaço/grid;
- cores/contraste;
- regras de logo;
- iconografia;
- motion tokens;
- primitives/componentes ATIV;
- WCAG 2.2 AA nos componentes fundamentais.

### Critério de saída

É possível construir páginas sem inventar estilos locais ou adotar aparência genérica de biblioteca.

---

## Fase 3 — Informação, SEO e conteúdo

**Objetivo:** definir mapa do site a partir de intenção de busca e jornada comercial.

### Entregáveis

- arquitetura de informação;
- keyword map;
- clusters prioritários;
- internal linking;
- templates de Solution, Sector, Case, Insight e Landing Page;
- `content/` como fonte editorial versionada;
- Claim Registry;
- schema strategy;
- canonical strategy;
- sitemap/robots strategy;
- redirect map proposto;
- calendário editorial;
- contrato de conteúdo técnico/RAG.

### Clusters prioritários

1. integração audiovisual corporativa;
2. salas de reunião e colaboração híbrida;
3. Microsoft Teams Rooms / UC;
4. videowalls e salas de controle;
5. NOC / SOC / CCO;
6. auditórios e plenários;
7. AV-over-IP e áudio sobre IP;
8. Governo, Tribunais e órgãos públicos;
9. manutenção e suporte AV;
10. engenharia, projetos e especificações.

### Critério de saída

Cada página planejada possui intenção, keywords, CTA, links internos e evidências necessárias.

---

## Fase 4 — Content Platform portável

**Objetivo:** permitir produção editorial estruturada sem criar dependência prematura de backend.

### Baseline

- Markdown versionado em `content/`;
- frontmatter tipado/indexável;
- loaders de conteúdo em build time;
- templates previsíveis;
- drafts controlados por Git/branch;
- media catalogada;
- geração estática de páginas;
- conteúdo técnico reaproveitável por RAG/site.

### CMS

Payload CMS + PostgreSQL ficam **DEFER** enquanto a baseline for HostGator compartilhado/static-first.

Somente adotar CMS runtime após ADR de mudança/compatibilidade de hosting.

### Critério de saída

Conteúdo pode ser criado, revisado e publicado no site sem banco/runtime server-side.

---

## Fase 5 — Shell e páginas fundamentais

**Objetivo:** primeira experiência navegável completa.

### Ordem sugerida

1. Header/navigation;
2. Footer;
3. Home;
4. Soluções hub;
5. Solution template;
6. Setores hub;
7. Governo;
8. Corporativo;
9. Cases;
10. Insights;
11. Sobre;
12. Contato;
13. páginas legais.

### Critério de saída

Jornadas principais funcionam em desktop/mobile e o HTML final contém conteúdo/metadata indexáveis.

---

## Fase 6 — Motion e experiências premium

**Objetivo:** diferenciação visual sem comprometer portabilidade, SEO ou performance.

### Possibilidades

- hero baseado em topologia/sinal;
- transições guiadas por scroll;
- diagramas técnicos interativos;
- visualização de videowall;
- microinterações;
- WebGL/Three.js somente quando justificado.

### Guardrails

- progressive enhancement;
- lazy load;
- fallback estático;
- `prefers-reduced-motion`;
- conteúdo semântico preservado;
- nenhuma dependência de servidor adicional.

### Critério de saída

Efeitos não reduzem indexabilidade, conversão ou Core Web Vitals além do aceitável.

---

## Fase 7 — Leads e recursos dinâmicos

**Objetivo:** capturar oportunidade sem quebrar o contrato de hosting.

### Baseline

- formulários acessíveis no frontend;
- preservação de attribution context no browser;
- validação client-side apenas como UX, nunca como única proteção;
- decisão server-side via task/ADR própria.

### Se HostGator compartilhado continuar como produção

Avaliar endpoint PHP coimplantado para:

- validação server-side;
- anti-spam;
- envio/persistência;
- integração externa;
- segurança de segredos.

Não usar API Route/Server Action Node como requisito sem mudança de hosting.

### Critério de saída

Lead de teste percorre fluxo aprovado no ambiente real sem expor segredo e sem depender de serviço SEO externo.

---

## Fase 8 — Ads, analytics e consentimento

**Objetivo:** medição confiável e destinos aderentes.

### Entregáveis

- dataLayer contract;
- GTM/GA4 quando IDs reais forem aprovados;
- Google Ads conversions;
- Microsoft UET;
- consentimento conforme decisão técnica/jurídica;
- landing pages `/lp/**` estáticas;
- preservação de UTM, `gclid`, `gbraid`, `wbraid`, `msclkid`;
- auditoria de redirects e destino.

### Critério de saída

Tags e parâmetros funcionam sem interferir no conteúdo indexável e sem exigir runtime Node.

---

## Fase 9 — QA, segurança e performance hardening

**Objetivo:** preparar release sem regressões invisíveis.

### Entregáveis obrigatórios no repositório

- `pnpm lint`;
- `pnpm typecheck`;
- `pnpm test`;
- `pnpm seo:check`;
- `pnpm build`;
- `pnpm build:hostgator`;
- metadata/canonical tests;
- route/indexability tests;
- schema structural validation;
- security/config review;
- cross-browser smoke tests.

### Ferramentas externas

Lighthouse, Lychee, Unlighthouse e SiteOne podem ser usados manualmente, mas não são requisito de produção ou deploy.

### Critério de saída

Todos os blockers internos passam e o diretório final pode ser servido estaticamente.

---

## Fase 10 — Migração SEO e lançamento HostGator

**Objetivo:** substituir a plataforma preservando patrimônio orgânico e campanhas.

### Entregáveis

- freeze final do URL inventory;
- redirect map aprovado;
- `.htaccess`/regras Apache aprovadas;
- canonical/robots/sitemap finais;
- validação de URLs antigas;
- backup completo do site atual;
- diretório final de deploy;
- checklist de upload `public_html`;
- plano de rollback;
- deploy;
- Search Console;
- validação AdsBot;
- smoke test de analytics/leads.

### Critério de saída

- nenhuma URL P0 retorna 404 inesperado;
- redirects são single-hop;
- sitemap contém somente URLs canônicas válidas;
- HTML/metadata/schema estão presentes no servidor;
- site funciona sem processo Node permanente.

---

## Fase 11 — Pós-lançamento e crescimento

**Objetivo:** tratar o site como produto contínuo.

### Janelas

- D+1: indexação, 404, redirects, forms, tags;
- D+7: Search Console, CWV, Ads, queries e leads;
- D+30: clusters, conversão e conteúdo;
- trimestral: arquitetura, conteúdo, performance e dependências.

### Backlog contínuo

- publicar cases verificáveis;
- aprofundar clusters;
- melhorar CTR e conversão;
- atualizar conteúdo técnico;
- reduzir JS/dívida técnica;
- CRO controlado;
- reavaliar hosting somente quando requisito real justificar.

---

## Release blockers globais

Bloquear release quando houver:

- URL prioritária perdida sem redirect aprovado;
- canonical incorreto;
- robots/noindex acidental;
- formulário principal quebrado;
- segredo commitado/exposto no client;
- erro de build/typecheck/test/seo-check;
- falha grave de acessibilidade;
- tracking duplicado/incorreto quando habilitado;
- regressão grave de performance;
- claim relevante sem evidência;
- desvio do Brand System;
- feature que exige Node/Docker/backend não aprovado;
- artefato que não pode ser publicado diretamente no target HostGator.

## Regra final do roadmap

> O caminho crítico é: conteúdo e SEO sólidos → build portável → experiência premium. Nenhuma feature visual ou de backend pode invalidar o contrato de publicação direta no HostGator sem ADR explícito.