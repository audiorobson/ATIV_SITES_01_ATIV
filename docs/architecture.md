# Arquitetura Técnica — ATIV

Status: **direção atual aprovada; decisões de stack específicas continuam registradas por ADR**.

## 1. Objetivos arquiteturais

A plataforma deve equilibrar:

- SEO de alto nível;
- desempenho e Core Web Vitals;
- experiência visual sofisticada;
- manutenção por anos;
- conteúdo versionado e editável;
- integrações de marketing e CRM quando necessárias;
- segurança;
- baixo acoplamento com fornecedores;
- **deploy portável para HostGator por upload dos artefatos finais**.

A referência obrigatória de hosting é:

`docs/hostgator-deployment-contract.md`

## 2. Baseline de produção

Enquanto não existir ADR posterior alterando a hospedagem, a aplicação pública deve ser compatível com o ambiente mais restritivo planejado: **HostGator compartilhado + Apache + `public_html`**.

Isso implica:

- não assumir processo Node.js em produção;
- não assumir Docker em produção;
- não exigir banco de dados para servir páginas públicas;
- não exigir crawler/dashboard/serviço SEO externo;
- não depender de SSR/ISR/API Routes/Server Actions em runtime;
- gerar HTML, CSS, JS, metadata, schema, sitemap e robots como artefatos publicáveis.

## 3. Web

Direção:

- Next.js + React + TypeScript;
- App Router quando compatível com o build definido;
- TypeScript strict;
- conteúdo principal pré-renderizado;
- Client Components somente para ilhas interativas;
- metadata centralizada;
- canonical/OG/schema gerados por código próprio;
- static-first;
- progressive enhancement.

Next.js é ferramenta de desenvolvimento/build. Não é autorização automática para usar recursos que exijam servidor Node em produção.

Qualquer feature que exija runtime Node deve:

1. ser identificada antes da implementação;
2. ser comparada com alternativa estática/browser/PHP coimplantável;
3. ser rejeitada para a baseline se não houver alternativa;
4. somente entrar após ADR de mudança de hosting.

## 4. Pipeline de publicação

Baseline conceitual:

```text
source
  ↓
Next.js + TypeScript + conteúdo Markdown
  ↓
build/export
  ↓
artefatos estáticos
  ↓
validação local
  ↓
pasta de deploy HostGator
  ↓
public_html/
```

Criar comando previsível, por exemplo:

```bash
pnpm build:hostgator
```

O diretório final deve ser autocontido e documentado.

## 5. Renderização por classe de página

### Institucional / solução / setor / case / insight

Preferência obrigatória: geração estática/prerender com HTML completo.

O conteúdo canônico deve existir no HTML final.

### Busca interna / filtros

Podem usar JavaScript no cliente como enhancement. Conteúdo indexável não pode depender dessa camada.

### Landing pages de campanha

Geradas estaticamente, extremamente rápidas, com conteúdo original, sem cloaking e sem redirect cross-domain intermediário.

### CMS/admin

Não faz parte da baseline imediata de produção.

## 6. Conteúdo

`content/` é uma fonte editorial versionada e portável.

O site deve conseguir consumir conteúdo Markdown durante o build.

Benefícios:

- histórico Git;
- revisão técnica;
- integração com a base RAG;
- independência de banco/runtime;
- possibilidade de migração futura para CMS sem perder a fonte editorial.

## 7. CMS/backend

Payload CMS + PostgreSQL deixam de ser requisito imediato.

Podem ser reavaliados futuramente, porém somente por ADR que cubra:

- necessidade real;
- disponibilidade de Node no hosting;
- banco e migrations;
- backups/restore;
- segurança;
- preview;
- deploy;
- migração/sincronização do conteúdo versionado;
- impacto SEO;
- custo operacional.

Até esse ADR, Codex não deve iniciar Payload/PostgreSQL como dependência da aplicação pública.

## 8. Monorepo

```text
apps/
  web/
packages/
  ui/
  seo/
  analytics/
  config/
content/
scripts/
```

Evitar separar serviços ou criar backend sem necessidade demonstrada.

## 9. SEO package

`packages/seo` deve concentrar:

- metadata builders;
- canonical builder;
- robots rules;
- social metadata;
- schema builders tipados;
- breadcrumb helpers;
- sitemap generation;
- internal-link helpers;
- redirect validation utilities;
- acquisition parameter helpers quando apropriado.

`google/schema-dts` é permitido como dependência de desenvolvimento/tipagem.

Schemas só devem ser emitidos quando os dados necessários existirem.

## 10. SEO validation

Preferir validação própria do repositório:

```bash
pnpm seo:check
```

A implementação pode viver em `scripts/seo-check.ts` ou suíte equivalente.

Ferramentas como Lighthouse, Lychee, Unlighthouse e SiteOne podem ser usadas manualmente no desenvolvimento, mas não são requisito do runtime ou deploy.

## 11. Client JavaScript budget

Princípios:

- nenhuma biblioteca de animação no root se somente uma seção usar;
- WebGL carregado sob demanda;
- não hidratar conteúdo estático sem necessidade;
- preferir CSS para transições simples;
- evitar carrosséis automáticos pesados;
- medir bundle por rota;
- conteúdo principal deve continuar legível/indexável sem JS crítico.

## 12. Design system

`packages/ui` deve conter componentes próprios da ATIV construídos sobre primitives acessíveis.

Camadas:

1. design tokens;
2. primitives;
3. components;
4. sections;
5. page compositions.

Não permitir estilos globais ad-hoc proliferarem por páginas.

## 13. Analytics package

`packages/analytics` pode conter:

- nomes e tipos de eventos;
- payload schemas;
- dataLayer adapter;
- acquisition context parser;
- helpers para consent-aware tracking.

Tracking client-side deve ser carregado de forma controlada e não pode impedir renderização/indexação.

## 14. Formulários

Não criar API Route ou Server Action como requisito de produção na baseline.

Na fase de leads, avaliar a solução compatível com o hosting real.

Se continuar em HostGator compartilhado, endpoint PHP coimplantado pode ser considerado via ADR/contrato específico.

Requisitos mínimos para qualquer backend de formulário:

- validação server-side;
- anti-spam;
- segredo fora do bundle;
- mensagens de erro úteis;
- idempotência quando aplicável;
- proteção adequada ao ambiente;
- logs sem PII desnecessária.

## 15. Redirects e Apache

Redirects aprovados devem possuir representação compatível com o ambiente final.

Na baseline HostGator/Apache, usar `.htaccess` quando apropriado.

Nunca:

- gerar redirect por preferência estética;
- criar redirect chain;
- mudar slug fora do inventário/processo de migração;
- usar cross-domain intermediary redirect em landing page de Ads.

## 16. Ambientes

### local

Node/pnpm e ferramentas de desenvolvimento são permitidos.

### preview/staging local ou temporário

Pode existir para QA, mas não é requisito para a produção funcionar.

### production

HostGator recebe artefatos finais e não deve depender das ferramentas de desenvolvimento.

## 17. Segurança

Planejar de forma compatível com Apache/static hosting:

- HTTPS;
- HSTS quando seguro para o domínio;
- Referrer-Policy;
- Permissions-Policy;
- X-Content-Type-Options;
- CSP compatível com assets e tracking aprovados;
- nenhuma credencial no bundle client;
- `.htaccess` versionado/gerado quando fizer parte da configuração;
- dependency audit no desenvolvimento.

## 18. Decisões que exigem ADR

Criar ADR antes de consolidar:

- mudança do target HostGator compartilhado para VPS/Dedicado/Node;
- CMS com runtime;
- banco de dados em produção;
- backend de formulários;
- storage de mídia externo;
- CRM/marketing automation;
- consent platform;
- error monitoring;
- uso de Three.js em produção;
- internacionalização;
- qualquer feature incompatível com static export.

## 19. Gate de portabilidade

Antes de considerar uma feature pronta, confirmar:

- [ ] funciona sem processo Node permanente;
- [ ] funciona sem Docker;
- [ ] funciona sem serviço SEO externo;
- [ ] conteúdo principal está no HTML final;
- [ ] metadata/schema estão no artefato final;
- [ ] sitemap/robots são publicáveis;
- [ ] assets resolvem corretamente após upload;
- [ ] redirects têm solução Apache compatível quando necessários.

## 20. Critério de simplicidade

A arquitetura deve ser avançada no resultado e conservadora na operação.

> Complexidade visual não justifica complexidade de hosting. Desenvolvimento moderno é permitido; dependência operacional desnecessária não.