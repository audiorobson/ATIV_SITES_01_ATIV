# ROADMAP — Nova Plataforma ATIV

Este roadmap é sequencial. Fases podem se sobrepor apenas quando não criarem dependência circular. Nenhum agente deve “pular para o visual final” antes de as fundações críticas estarem estabelecidas.

## Fase 0 — Discovery e inventário

**Objetivo:** conhecer patrimônio atual, riscos e requisitos antes da reconstrução.

### Entregáveis
- auditoria técnica do `ativpro.com`;
- crawl completo das URLs atuais;
- inventário em `seo/url-inventory.csv`;
- captura de title, H1, canonical, status, indexabilidade, links internos e tipo de página;
- exportação do Search Console quando disponível: cliques, impressões, CTR e posição por URL/query;
- exportação de landing pages e conversões do Google Ads quando disponível;
- diagnóstico do motivo exato de reprovação do Google Ads;
- inventário de ativos de marca, fotos, cases, documentos e provas;
- mapa preliminar de concorrentes e SERPs prioritários.

### Critério de saída
Nenhuma URL importante está “desconhecida”; riscos de migração estão classificados; lacunas de dados externas estão documentadas.

---

## Fase 1 — Arquitetura de produto e fundação técnica

**Objetivo:** criar a base de código sustentável.

### Entregáveis
- ADR da stack final;
- bootstrap do monorepo/workspace;
- Next.js + TypeScript em strict mode;
- package manager fixado;
- lint, format, typecheck, unit test e build;
- `.env.example`;
- CI inicial no GitHub Actions;
- estrutura de `apps/` e `packages/`;
- configuração inicial de segurança e headers;
- estratégia de ambientes local/staging/production.

### Critério de saída
Fresh clone consegue instalar, testar e fazer build com comandos documentados.

---

## Fase 2 — Brand System e UI foundations

**Objetivo:** converter o Brand Kit em sistema de interface próprio.

### Entregáveis
- `brand/tokens.json`;
- tipografia e fallback stack;
- escala de espaço, grid, container e breakpoints;
- tokens de cor e contraste;
- regras de logo;
- iconografia;
- motion tokens;
- primitives de UI ATIV;
- Storybook ou showcase interno equivalente apenas se agregar manutenção real;
- validação de WCAG 2.2 AA nos componentes fundamentais.

### Critério de saída
É possível construir novas páginas sem inventar estilos locais ou depender da aparência padrão de bibliotecas.

---

## Fase 3 — Informação, SEO e conteúdo

**Objetivo:** definir o mapa do site a partir de intenção de busca e jornada comercial.

### Entregáveis
- arquitetura final de informação;
- keyword map por página;
- clusters prioritários;
- plano de internal linking;
- templates de Solution, Sector, Case, Insight e Landing Page;
- intake editorial versionado em `content/inbox/` para receber textos-fonte em Markdown antes da revisão e modelagem no CMS;
- Claim Registry;
- schema strategy;
- canonical strategy;
- sitemap strategy;
- redirect map proposto, ainda sem ativar em produção;
- calendário editorial inicial.

### Clusters prioritários iniciais
1. integração audiovisual corporativa;
2. salas de reunião e colaboração híbrida;
3. Microsoft Teams Rooms / UC;
4. videowalls e salas de controle;
5. NOC / SOC / centro de comando e controle;
6. auditórios e plenários;
7. AV over IP e áudio sobre IP;
8. governo, tribunais, câmaras e órgãos públicos;
9. serviços, manutenção e suporte AV;
10. engenharia, projetos e especificações.

### Critério de saída
Cada página planejada possui intenção, palavra-chave principal, secundárias, CTA, links internos e evidência necessária.

---

## Fase 4 — CMS e Content Platform

**Objetivo:** permitir manutenção editorial sem sacrificar design, SEO ou integridade técnica.

### Entregáveis
- Payload CMS e PostgreSQL;
- collections: pages, solutions, sectors, cases, insights, people/experts se aprovado, media, redirects, claims;
- globals: navigation, footer, company, SEO defaults, contact config;
- drafts/versioning;
- roles e permissions;
- preview;
- image pipeline;
- migrations;
- seed de desenvolvimento.

### Critério de saída
Editor consegue publicar conteúdo dentro de componentes aprovados sem quebrar layout ou metadata.

---

## Fase 5 — Shell e páginas fundamentais

**Objetivo:** construir a primeira experiência navegável completa.

### Ordem sugerida
1. Header / navigation / mega menu;
2. Footer institucional e compliance;
3. Home;
4. Soluções hub;
5. Solução template;
6. Setores hub;
7. Governo;
8. Corporativo;
9. Cases hub + case template;
10. Insights hub + article template;
11. Sobre / empresa;
12. Contato;
13. páginas legais.

### Critério de saída
Jornadas principais funcionam ponta a ponta em desktop e mobile, com conteúdo real ou explicitamente marcado como placeholder editorial não indexável em staging.

---

## Fase 6 — Motion e experiências premium

**Objetivo:** adicionar diferenciação visual sem comprometer usabilidade ou performance.

### Possibilidades
- hero audiovisual baseado em topologia de sinal;
- transições de conteúdo guiadas por scroll;
- diagrama técnico interativo;
- visualização de videowall/controle;
- microinterações em cards e CTAs;
- WebGL/Three.js somente em experiências justificadas.

### Guardrails
- progressive enhancement;
- lazy load;
- fallback estático;
- `prefers-reduced-motion`;
- medir LCP/INP/CLS e memória/GPU em dispositivos medianos.

### Critério de saída
Nenhum efeito reduz conversão, legibilidade, indexabilidade ou Core Web Vitals além dos budgets aceitos.

---

## Fase 7 — Leads, CRM e automação

**Objetivo:** transformar tráfego em oportunidade rastreável.

### Entregáveis
- formulários server-side;
- anti-spam/rate limit;
- qualificação progressiva;
- persistência de attribution context;
- integração com CRM/plataforma de automação escolhida;
- WhatsApp contextual;
- e-mail transactional;
- estados de sucesso/erro robustos;
- lead routing.

### Eventos mínimos
- `cta_click`;
- `contact_start`;
- `contact_submit`;
- `lead_qualified` quando houver backend adequado;
- `whatsapp_start`;
- `meeting_request`;
- `case_view`;
- `document_download`;
- `government_intent`.

### Critério de saída
Lead de teste pode ser rastreado da origem até o destino comercial sem perda dos identificadores permitidos.

---

## Fase 8 — Ads, analytics e consentimento

**Objetivo:** produzir medição confiável e destinos aderentes.

### Entregáveis
- dataLayer contract;
- GTM;
- GA4;
- Google Ads conversion actions;
- Enhanced Conversions quando aplicável;
- Microsoft UET;
- Consent Mode/configuração equivalente conforme decisão jurídica/técnica;
- auditoria de redirects e AdsBot;
- landing pages específicas quando justificadas;
- dashboard básico de aquisição e conversão.

### Critério de saída
Tags disparam apenas quando previsto; destinos são rastreáveis e consistentes; eventos são reproduzíveis em staging/preview apropriado.

---

## Fase 9 — QA, segurança e performance hardening

**Objetivo:** preparar release sem regressões invisíveis.

### Entregáveis
- Playwright E2E das jornadas críticas;
- axe automatizado;
- metadata/canonical tests;
- redirect tests;
- schema validation;
- Lighthouse CI budgets;
- security headers;
- dependency audit;
- backup/restore test do CMS;
- logging e error monitoring;
- cross-browser smoke test.

### Critério de saída
Todos os release blockers de `docs/quality-gates.md` passam.

---

## Fase 10 — Migração SEO e lançamento controlado

**Objetivo:** substituir a plataforma sem destruir patrimônio orgânico ou campanhas.

### Entregáveis
- freeze final do URL inventory;
- redirect map aprovado;
- canonical/robots/sitemap finais;
- validação de todas as URLs antigas;
- comparação staging x produção;
- backup completo;
- plano de rollback;
- deploy;
- submissão/monitoramento Search Console;
- validação AdsBot;
- smoke tests de analytics e leads.

### Critério de saída
Nenhuma URL prioritária retorna 404 inesperado; redirects são single-hop; sitemap contém somente URLs canônicas 200; leads e tags funcionam.

---

## Fase 11 — Pós-lançamento e crescimento

**Objetivo:** tratar o site como produto contínuo.

### Janelas de monitoramento
- D+1: indexação, 404, redirects, forms, tags, erros;
- D+7: Search Console, CWV, Ads, queries e leads;
- D+30: perda/ganho por cluster, conversão e conteúdo;
- trimestral: arquitetura, conteúdos, cases, performance, dependências.

### Backlog contínuo
- publicar cases verificáveis;
- aprofundar clusters com evidência de demanda;
- melhorar páginas com alto impression/baixo CTR;
- melhorar páginas com bom tráfego/baixa conversão;
- atualizar conteúdos técnicos;
- reduzir JS e dívida técnica;
- experimentos CRO controlados.

## Release blockers globais

Bloquear release quando houver:
- URL prioritária perdida sem redirect aprovado;
- canonical incorreto em escala;
- robots/noindex acidental;
- formulário principal quebrado;
- segredo commitado;
- erro de build/typecheck;
- falha grave de acessibilidade em navegação/contato;
- tracking de conversão duplicado ou ausente;
- regressão grave de Core Web Vitals;
- claim comercial relevante sem evidência;
- desvio significativo do Brand Kit.
