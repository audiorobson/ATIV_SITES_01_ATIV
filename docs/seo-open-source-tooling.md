# Open Source Tooling para SEO, Performance e Integridade

**Data da avaliação:** 2026-08-24

Objetivo: selecionar ferramentas maduras que tornem requisitos SEO verificáveis no pipeline. Nenhuma biblioteca deve ser adicionada apenas porque contém `seo` no nome.

## 1. ADOPT — Lighthouse CI

Repository: https://github.com/GoogleChrome/lighthouse-ci

Descrição do projeto: automatiza Lighthouse por commit e permite detectar/prevenir regressões de performance/qualidade.

### Uso na ATIV
- PR quality gate;
- performance budget;
- detectar regressão em páginas P0;
- guardar histórico no CI quando fizer sentido.

### Política
Não usar score 100 como objetivo cosmético. Usar budgets e auditorias que afetam experiência, SEO e conversão.

**Status:** ADOPT.

---

## 2. ADOPT — schema-dts

Repository: https://github.com/google/schema-dts

Descrição: tipos TypeScript para vocabulário Schema.org/JSON-LD.

### Uso na ATIV
Criar `packages/seo` com builders tipados para:
- Organization;
- WebSite;
- BreadcrumbList;
- Article/BlogPosting;
- VideoObject quando aplicável.

Benefício: reduz JSON-LD inválido e cria contrato de código revisável.

Schema ainda precisa respeitar elegibilidade/documentação atual do Google; tipagem não garante rich result.

**Status:** ADOPT.

---

## 3. ADOPT — Lychee

Repository: https://github.com/lycheeverse/lychee

Descrição: link checker assíncrono capaz de verificar URLs em Markdown, HTML e websites.

### Uso na ATIV
- CI para documentação;
- crawl de links internos;
- detectar links externos quebrados;
- validar links ATIV/Easywall/VideowallBR;
- validar redirects depois da migração.

### Política
Configurar allowlist apenas quando necessária e documentada. Não silenciar domínio quebrado apenas para deixar CI verde.

**Status:** ADOPT.

---

## 4. EVALUATE — Unlighthouse

Repository: https://github.com/harlan-zw/unlighthouse

Descrição do projeto: executar Google Lighthouse no site inteiro.

### Uso possível
- auditoria completa de staging;
- comparar clusters inteiros;
- detectar páginas fora do padrão;
- relatório pré-release;
- auditoria recorrente não bloqueante.

### Decisão
Usar inicialmente como ferramenta de auditoria/staging. Lighthouse CI continua sendo o gate por PR.

**Status:** EVALUATE / provável adoção para site-wide audit.

---

## 5. EVALUATE — next-sitemap

Repository: https://github.com/iamvishnusankar/next-sitemap

Descrição: geração de sitemap(s) e robots.txt para páginas estáticas, dinâmicas e server-side em Next.js.

### Decisão arquitetural
Next.js moderno possui Metadata Routes nativas para sitemap/robots. Prioridade:

1. tentar recurso nativo;
2. medir complexidade do CMS/volume;
3. adotar `next-sitemap` somente se resolver requisito real melhor do que a implementação nativa.

Não adicionar dependência antecipadamente.

**Status:** EVALUATE / DEFER até arquitetura de conteúdo dinâmica estar definida.

---

## 6. DEFER — Partytown

Repository: https://github.com/QwikDev/partytown

Descrição: move scripts terceiros pesados da main thread para Web Worker.

### Potencial
Pode reduzir impacto de scripts third-party e ajudar performance/Core Web Vitals.

### Risco no nosso caso
Google Tag Manager, Google Ads, GA4, consentimento e Microsoft UET precisam ter comportamento e atribuição absolutamente confiáveis. Mover tags para Web Worker adiciona uma camada de compatibilidade/depuração.

### Decisão
Não usar no bootstrap. Primeiro:
- implementar tracking padrão;
- validar Ads/GA4/UET/consent;
- medir custo real dos third-party scripts;
- testar Partytown em branch/experimento;
- adotar somente se eventos, consent state e atribuição permanecerem corretos.

**Status:** DEFER.

---

## 7. Ferramentas nativas / sem dependência preferidas

Antes de instalar biblioteca, usar quando suficiente:
- Next.js Metadata API;
- Next.js `sitemap.ts` / `robots.ts`;
- Next.js server rendering/static generation;
- native redirects/headers;
- Playwright para testes de rotas/metadata/forms;
- `fetch`/HTTP tests para status e redirects;
- GitHub Actions para gates.

---

## 8. Test suite SEO proposta

Criar uma suíte que falha se uma URL P0 tiver:
- status inesperado;
- title ausente/duplicado em amostra crítica;
- H1 zero ou múltiplos sem justificativa;
- canonical inválido;
- `noindex` acidental em página orgânica;
- index acidental em `/lp/`;
- link interno quebrado;
- redirect chain;
- sitemap contendo URL noindex/redirect/404;
- robots bloqueando recurso/página crítica;
- JSON-LD inválido no contrato;
- imagem hero sem dimensões/otimização suficiente;
- página Ads bloqueada a user agents definidos no smoke test.

---

## 9. Prioridade de implementação

### Foundation PR
- sem dependência SEO excessiva;
- metadata nativa;
- sitemap/robots simples;
- teste estrutural.

### SEO Foundation PR
1. `schema-dts`;
2. Lychee;
3. Lighthouse CI;
4. tests de metadata/robots/routes;
5. Unlighthouse para staging.

### Depois
- avaliar `next-sitemap`;
- medir scripts terceiros;
- avaliar Partytown.

---

## 10. Critério de adoção de qualquer projeto externo

Antes de adicionar:
- atividade recente;
- licença compatível;
- comunidade/manutenção;
- superfície de segurança;
- benefício mensurável;
- compatibilidade Next/Node atual;
- necessidade real no projeto;
- capacidade de remover/substituir futuramente.

Toda adoção relevante deve aparecer em ADR ou PR com justificativa.
