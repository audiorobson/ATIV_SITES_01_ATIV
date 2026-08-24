# Contrato de Deploy Portável — HostGator

**Status:** decisão do owner, 2026-08-24  
**Aplica-se a:** arquitetura web, SEO, conteúdo, tracking, build e publicação.

## 1. Decisão

A baseline de produção da ATIV deve ser compatível com publicação direta em hospedagem HostGator por upload dos artefatos finais do site.

O projeto pode usar Next.js, TypeScript e ferramentas modernas durante o desenvolvimento, mas a produção **não pode depender de um runtime externo, crawler residente, Docker, servidor de auditoria, serviço SEO ou processo Node.js permanente** para servir conteúdo público e executar o SEO básico.

Enquanto não houver ADR posterior aprovado alterando o ambiente de hospedagem, considerar como alvo mais restritivo e seguro a **hospedagem compartilhada HostGator com Apache e `public_html`**.

## 2. Princípio central

> Tudo o que for necessário para indexação, metadata, schema, sitemap, robots, links internos, páginas comerciais e landing pages deve ser compilado ou publicado junto com o próprio site.

Ferramentas de desenvolvimento podem existir, desde que:

1. sejam executadas apenas no ambiente local/build;
2. não sejam necessárias em produção;
3. produzam artefatos incorporados ao site ou apenas validem o código;
4. não exijam assinatura ou infraestrutura permanente para o site funcionar.

## 3. Contrato de runtime de produção

A publicação deve funcionar com:

- HTML estático;
- CSS;
- JavaScript executado no navegador;
- imagens, fontes e demais assets estáticos;
- `robots.txt`;
- `sitemap.xml` ou sitemap index;
- `.htaccess` quando necessário para redirects, canonicalização e regras Apache;
- endpoints PHP coimplantados somente quando uma funcionalidade dinâmica realmente exigir processamento server-side e isso for documentado em ADR/contrato próprio.

Não assumir Node.js em produção.

## 4. Next.js

Next.js continua permitido como framework de desenvolvimento.

A implementação deve privilegiar recursos compatíveis com geração estática e build exportável.

Baseline esperada:

```text
Next.js + TypeScript
        ↓
pnpm build / export compatível
        ↓
artefatos estáticos
        ↓
public_html/
        ↓
HostGator
```

Qualquer recurso que exija runtime Node.js em produção deve ser considerado **incompatível com a baseline** até existir ADR aprovado alterando o target de hospedagem.

Antes de adotar recurso de Next.js, Codex deve verificar se ele é compatível com a estratégia de exportação estática utilizada no projeto.

## 5. SEO deve ser código do próprio projeto

Criar e manter `packages/seo` como camada central de SEO.

Responsabilidades previstas:

```text
packages/seo/
├── metadata/
│   ├── create-metadata.ts
│   ├── canonical.ts
│   ├── robots.ts
│   └── social.ts
├── schema/
│   ├── organization.ts
│   ├── website.ts
│   ├── webpage.ts
│   ├── service.ts
│   ├── article.ts
│   ├── breadcrumb.ts
│   ├── faq.ts
│   └── video.ts
├── content/
│   ├── internal-links.ts
│   └── related-content.ts
├── tracking/
│   ├── attribution.ts
│   └── utm.ts
└── index.ts
```

A árvore final pode mudar, mas as responsabilidades devem permanecer centralizadas.

## 6. Recursos SEO obrigatórios incorporados ao build

O site deve publicar, sem depender de ferramenta externa:

- title;
- meta description;
- canonical;
- robots por página;
- Open Graph;
- Twitter/X metadata quando aplicável;
- JSON-LD;
- Organization;
- WebSite;
- WebPage;
- BreadcrumbList;
- Service quando sustentado por conteúdo;
- Article/BlogPosting para conteúdo editorial;
- FAQ somente quando sustentado por FAQ visível e elegível;
- sitemap;
- robots.txt;
- breadcrumbs visíveis;
- links internos;
- alt text;
- páginas 404;
- regras de index/noindex;
- preservação de parâmetros de aquisição quando aplicável.

## 7. `schema-dts`

`google/schema-dts` permanece **ADOPT**.

É dependência de desenvolvimento/tipagem e não cria requisito operacional no HostGator.

Usar para builders JSON-LD em TypeScript e emitir JSON-LD final no HTML gerado.

Tipagem não substitui validação semântica nem garante rich result.

## 8. Ferramentas externas de auditoria

As seguintes ferramentas deixam de ser dependências ou gates obrigatórios do plano oficial de produção:

- Lighthouse CI;
- Unlighthouse;
- SiteOne Crawler;
- SEOnaut;
- Lychee como serviço/gate remoto;
- qualquer dashboard SEO residente;
- qualquer crawler ou container permanente.

Elas podem ser usadas manualmente e localmente para diagnóstico, desde que o projeto não dependa delas para build, deploy ou funcionamento em produção.

## 9. Testes SEO próprios

O projeto deve preferir testes escritos no próprio repositório.

Criar um script equivalente a:

```text
scripts/seo-check.ts
```

ou suíte integrada ao test runner adotado.

Deve verificar, no mínimo:

- title presente;
- description presente quando requerida;
- canonical válido;
- H1 semântico presente;
- H1 não fragmentado de forma destrutiva;
- rotas orgânicas sem `noindex` acidental;
- `/lp/**` com contrato de indexação correto;
- sitemap sem 404/redirect/noindex;
- robots coerente;
- JSON-LD estruturalmente válido;
- links internos resolvíveis contra o inventário de rotas;
- ausência de URLs duplicadas não intencionais;
- preservação de slugs protegidos;
- metadata exclusiva nas rotas P0;
- presença de alt text quando exigido;
- regras de domínio canônico e `/index.html`.

Script sugerido:

```bash
pnpm seo:check
```

Ele deve poder rodar localmente sem serviço externo.

## 10. Sitemap e robots

Prioridade:

1. APIs nativas do Next.js quando compatíveis com exportação estática;
2. geração própria durante build;
3. dependência adicional somente se resolver um requisito real e continuar gerando arquivo estático publicável.

`next-sitemap` permanece **EVALUATE**, não ADOPT automático.

## 11. Redirects

Redirects de migração aprovados devem ser produzidos em formato compatível com o ambiente final.

Para HostGator/Apache, preferir quando aplicável:

```text
.htaccess
```

Regras:

- single-hop;
- sem cadeia desnecessária;
- preservar query string quando necessário;
- normalizar `www`/non-`www` conforme domínio canônico aprovado;
- normalizar `/index.html` apenas após validação do redirect map;
- nenhuma alteração de URL fora de `seo/redirect-map.csv` e processo aprovado.

## 12. Landing pages de Ads

`/lp/**` deve ser artefato do próprio site e funcionar sem backend Node.js.

Contrato inicial:

- HTTP 200;
- conteúdo original;
- mobile-first;
- `noindex,follow` por padrão;
- fora do sitemap;
- AdsBot não bloqueado;
- sem redirect cross-domain intermediário;
- UTM, `gclid`, `gbraid`, `wbraid` e `msclkid` preserváveis no browser;
- formulário/CTA não pode depender de serviço SEO externo.

## 13. Conteúdo e CMS

A plataforma editorial deve preservar Markdown versionado em `content/` como fonte confiável e portável.

Payload CMS + PostgreSQL deixam de ser requisito de produção imediato enquanto a baseline for hospedagem compartilhada estática.

Podem continuar como alternativa futura, mas somente após ADR que trate:

- necessidade real;
- ambiente Node disponível;
- deploy;
- backups;
- banco;
- segurança;
- migração do conteúdo Markdown;
- impacto em SEO e operação.

Enquanto isso, o site deve conseguir consumir conteúdo versionado no repositório durante o build.

## 14. Formulários e recursos dinâmicos

Não introduzir API Route/Server Action como requisito de produção sem confirmar runtime compatível.

Quando houver necessidade real de backend no HostGator compartilhado, avaliar endpoint PHP coimplantado e isolado, com:

- validação server-side;
- anti-spam;
- rate limiting possível no ambiente;
- proteção de segredos fora do bundle client;
- resposta previsível;
- documentação e ADR.

Essa decisão deve ser tomada na fase de leads, não antecipada no bootstrap SEO.

## 15. Artefato de deploy

Criar script documentado, por exemplo:

```bash
pnpm build:hostgator
```

A saída deve gerar uma pasta claramente identificada, por exemplo:

```text
dist/hostgator/
```

ou o diretório de exportação definido pelo framework.

Essa pasta deve conter tudo que precisa ser enviado ao `public_html`, exceto segredos/configurações server-side específicas que sejam documentadas separadamente.

## 16. Gate de portabilidade

Uma feature só é considerada pronta para produção quando responder SIM a todas as perguntas:

- funciona sem processo Node.js permanente?
- funciona sem Docker?
- funciona sem crawler residente?
- funciona sem SaaS SEO?
- metadata está presente no HTML final?
- schema está presente no HTML final?
- sitemap e robots são arquivos publicáveis?
- URLs e assets funcionam após upload simples?
- redirects necessários têm representação Apache compatível?
- o conteúdo principal continua acessível e indexável sem execução de JavaScript crítica?

Se alguma resposta for NÃO, abrir ADR antes de aceitar a feature na baseline.

## 17. Mudança futura de hosting

Se a ATIV migrar para VPS/Dedicado com Node.js, este contrato pode ser revisado por ADR.

Até lá, nenhum agente deve assumir capacidade de servidor além da baseline documentada aqui.

## 18. Regra final

> Desenvolvimento moderno é permitido; dependência operacional desnecessária não. O build final deve ser portável, auditável e publicável diretamente no HostGator.