# TASK 002 — Contratos técnicos de SEO e rotas pagas

## Escopo

Esta etapa cria infraestrutura testável. Ela não publica páginas comerciais, não altera slugs e não
ativa redirects de produção.

## Contratos implementados

- metadata server-side com title, description, canonical, robots, Open Graph e Twitter;
- helper obrigatório `noindex,follow` para futuras rotas `/lp/**`;
- origem/canonical validados e sem credenciais, query ou fragmento;
- manifesto de rotas com validação de indexação e inclusão no sitemap;
- H1 único, significativo e sem fragmentação caractere a caractere;
- JSON-LD tipado para Organization, WebSite, BreadcrumbList e Article;
- allowlist de parâmetros de aquisição sem aceitar PII arbitrária;
- `robots.txt` acessível a crawlers e sitemap nativo do Next.js;
- sitemap vazio enquanto a única superfície implementada continuar técnica e `noindex`;
- Lighthouse CI com budgets iniciais;
- Lychee em modo offline para integridade de links locais Markdown no CI.

## Regra de origem

`NEXT_PUBLIC_SITE_URL` deve ser apenas a origem aprovada, por exemplo
`https://www.ativpro.com`, sem path, query ou credenciais. Localmente o fallback é
`http://localhost:3000`.

## Rotas pagas

O helper `definePaidLandingRoute()` aceita apenas paths sob `/lp/` e fixa:

- `indexable: false`;
- `includeInSitemap: false`;
- `kind: paid-landing`.

O helper `buildPaidLandingMetadata()` fixa `noindex,follow`. AdsBot continua autorizado pelo
`robots.txt`; noindex não deve ser implementado por bloqueio de crawl.

## Decisões de dependências

- `schema-dts`: adotado para JSON-LD tipado.
- `@lhci/cli`: adotado como gate inicial de Lighthouse.
- `lycheeverse/lychee-action`: adotado no CI para links locais.
- `next-sitemap`: não adotado; as APIs nativas atendem o escopo atual.
- Unlighthouse: preparado como opção futura de auditoria staging/site-wide, não blocking.
- Partytown: adiado conforme decisão existente.
