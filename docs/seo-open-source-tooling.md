# Open Source Tooling para SEO, Performance e Integridade

**Data da avaliação:** 2026-08-24  
**Status:** atualizado pela decisão de deploy portável em HostGator.

## 1. Objetivo

Selecionar apenas ferramentas e bibliotecas que sejam compatíveis com a regra operacional da ATIV:

> O SEO essencial deve ser código do próprio projeto e o resultado deve subir junto com o site para o HostGator.

Nenhuma ferramenta externa de auditoria, crawler, dashboard, container ou CI remoto pode ser requisito para o site funcionar, ser indexado ou publicar metadata correta.

A referência arquitetural obrigatória é:

`docs/hostgator-deployment-contract.md`

---

## 2. ADOPT — `google/schema-dts`

Repository: `https://github.com/google/schema-dts`

Descrição: tipos TypeScript para o vocabulário Schema.org/JSON-LD.

### Uso na ATIV

Criar builders tipados em `packages/seo` para, quando aplicável:

- Organization;
- WebSite;
- WebPage;
- BreadcrumbList;
- Service;
- Article/BlogPosting;
- FAQPage somente quando sustentado pelo conteúdo visível e elegível;
- VideoObject quando existir vídeo real e metadata suficiente.

### Por que é compatível com HostGator

`schema-dts` é usado no desenvolvimento/build. O resultado publicado é JSON-LD comum incorporado ao HTML final.

Não exige Node.js, daemon, serviço externo ou banco em produção.

### Política

Tipagem reduz erro estrutural, mas não garante rich result nem substitui regras atuais dos mecanismos de busca.

**Status:** ADOPT.

---

## 3. ADOPT — Next.js Metadata API e geração nativa

Usar quando compatível com a estratégia de exportação estática definida no projeto.

Responsabilidades:

- title;
- description;
- canonical;
- robots;
- Open Graph;
- social metadata;
- icons;
- sitemap;
- robots.txt.

### Regra

O resultado precisa existir como artefato estático/publicável.

Se uma API nativa exigir runtime incompatível com o target final, implementar alternativa de build própria.

**Status:** ADOPT como primeira opção.

---

## 4. ADOPT — testes SEO próprios do repositório

Criar validação local sem depender de serviço externo.

Implementação sugerida:

```text
scripts/seo-check.ts
```

Comando alvo:

```bash
pnpm seo:check
```

A suíte deve verificar, no mínimo:

- title ausente;
- description obrigatória ausente;
- title duplicado em rotas P0;
- canonical ausente ou inválido;
- H1 semântico ausente;
- H1 destruído por split-text;
- `noindex` acidental em página orgânica;
- index acidental em `/lp/**`;
- sitemap contendo 404, redirect ou noindex;
- robots incoerente;
- JSON-LD malformado ou fora do contrato;
- links internos para rotas inexistentes;
- URLs protegidas alteradas sem aprovação;
- inconsistência `www` / non-`www` / `/index.html`;
- imagem crítica sem alt quando aplicável.

Esses testes devem ser executáveis localmente e podem rodar também em qualquer CI futuro, mas **não dependem do CI para existir**.

**Status:** ADOPT / obrigatório.

---

## 5. ADOPT — gerador de deploy HostGator

O projeto deve oferecer um comando previsível para gerar artefatos finais publicáveis.

Exemplo:

```bash
pnpm build:hostgator
```

A saída deve conter o site pronto para upload ao `public_html`, incluindo quando aplicável:

- HTML;
- CSS;
- JavaScript;
- imagens/fontes/assets;
- `robots.txt`;
- `sitemap.xml`;
- `.htaccess`;
- páginas 404;
- JSON-LD incorporado;
- metadata final.

**Status:** ADOPT / obrigatório.

---

## 6. EVALUATE — `iamvishnusankar/next-sitemap`

Repository: `https://github.com/iamvishnusankar/next-sitemap`

Pode ser utilizado somente se:

1. a geração nativa/própria não cobrir o requisito;
2. gerar arquivos estáticos publicáveis;
3. não introduzir dependência de runtime em produção;
4. a adoção for justificada no PR/ADR.

Não adicionar antecipadamente.

**Status:** EVALUATE.

---

## 7. OPTIONAL LOCAL — Playwright

Playwright pode ser usado localmente para testes de renderização e rotas, especialmente para:

- metadata final;
- H1;
- navegação;
- formulários;
- comportamento de query strings;
- smoke tests.

Ele não faz parte do runtime de produção e não é requisito para o HostGator.

**Status:** OPTIONAL LOCAL / pode ser ADOPT de desenvolvimento quando útil.

---

## 8. OPTIONAL LOCAL — Lighthouse

Google Lighthouse/Lighthouse CI pode ser executado manualmente ou no ambiente de desenvolvimento para diagnóstico de performance, acessibilidade e SEO.

Não é mais gate obrigatório da arquitetura oficial e não deve criar dependência de serviço externo.

Se usado, preferir execução local e relatórios descartáveis/versionados apenas quando houver valor.

**Status:** OPTIONAL LOCAL.

---

## 9. OPTIONAL LOCAL — Lychee

Repository: `https://github.com/lycheeverse/lychee`

Pode ser usado localmente para localizar links quebrados em Markdown/HTML.

O projeto não deve depender dele para build ou deploy.

A integridade de rotas internas críticas deve também ser coberta por testes próprios do repositório.

**Status:** OPTIONAL LOCAL.

---

## 10. OPTIONAL LOCAL — Unlighthouse

Repository: `https://github.com/harlan-zw/unlighthouse`

Pode ser utilizado manualmente para auditoria site-wide durante QA.

Não faz parte do pipeline obrigatório e não deve ser requisito operacional.

**Status:** OPTIONAL LOCAL.

---

## 11. OPTIONAL LOCAL — SiteOne Crawler

Repository: `https://github.com/janreges/siteone-crawler`

Pode ser útil manualmente para:

- crawl técnico;
- redirects;
- headings;
- 404;
- auditoria de SEO/performance;
- export de páginas para Markdown.

Apesar de ser open source e útil, não será dependência oficial de produção nem gate obrigatório.

**Status:** OPTIONAL LOCAL.

---

## 12. NÃO ADOTAR COMO DEPENDÊNCIA DE PRODUÇÃO

Não incluir como requisito operacional do site:

- SEOnaut;
- crawler residente;
- dashboard SEO self-hosted;
- Docker para servir o site;
- Lighthouse server;
- banco exclusivo para auditoria SEO;
- SaaS SEO obrigatório;
- worker permanente de auditoria;
- serviço externo necessário para gerar metadata em request time.

---

## 13. Partytown

`QwikDev/partytown` permanece DEFER.

Não mover Google Ads, GA4, GTM ou Microsoft UET para Web Worker antes de:

- tracking padrão existir;
- consentimento estar definido;
- eventos terem sido validados;
- benefício de performance ser medido;
- compatibilidade estar comprovada.

Além disso, qualquer adoção deve continuar compatível com o build estático.

**Status:** DEFER.

---

## 14. Prioridade de implementação SEO

### Foundation

- metadata centralizada;
- canonical centralizado;
- estrutura inicial `packages/seo`;
- geração estática compatível;
- `robots.txt`;
- sitemap;
- script de build portável;
- testes estruturais locais.

### SEO Foundation

1. `schema-dts`;
2. builders de metadata/schema;
3. `scripts/seo-check.ts` ou equivalente;
4. testes de rotas/indexação;
5. contrato `/lp/**`;
6. geração/validação de `.htaccess` quando necessária;
7. `pnpm build:hostgator`.

### QA opcional

Usar Lighthouse, Lychee, Unlighthouse ou SiteOne manualmente quando trouxerem valor, sem transformar essas ferramentas em requisito do deploy.

---

## 15. Critério de adoção de qualquer projeto externo

Antes de adicionar uma dependência:

- ela é necessária para o artefato final?
- roda apenas no desenvolvimento/build?
- o site continua funcionando sem ela em produção?
- é possível removê-la futuramente?
- licença é compatível?
- atividade/manutenção são aceitáveis?
- não obriga serviço externo?
- não obriga Node.js em produção?
- não impede export estático?
- há benefício mensurável?

Se qualquer dependência alterar o contrato de hosting, abrir ADR antes de implementar.

---

## 16. Regra final

> Preferir código próprio, metadata nativa e artefatos estáticos. Ferramentas externas servem para ajudar o desenvolvimento; nunca para sustentar o SEO em produção.