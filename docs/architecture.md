# Arquitetura Técnica — ATIV

Status: **direção inicial; confirmar por ADR na Fase 1**.

## 1. Objetivos arquiteturais

A plataforma deve equilibrar:

- SEO de alto nível;
- desempenho e Core Web Vitals;
- experiência visual sofisticada;
- manutenção por anos;
- conteúdo editável;
- integrações de marketing e CRM;
- segurança;
- baixo acoplamento com fornecedores.

## 2. Arquitetura proposta

### Web
- Next.js + React + TypeScript;
- App Router;
- Server Components por padrão;
- Client Components apenas em ilhas interativas;
- SSR/SSG/ISR escolhidos por tipo de conteúdo, não globalmente;
- metadata API + geração centralizada de canonical/OG/schema.

### CMS/backend
- Payload CMS;
- PostgreSQL;
- migrations versionadas;
- media storage abstrato;
- collections tipadas;
- server actions/routes apenas quando apropriado;
- validação de schema no servidor.

### Monorepo

```text
apps/
  web/
packages/
  ui/
  seo/
  analytics/
  config/
```

Evitar separar backend em serviço independente sem necessidade demonstrada. A complexidade operacional deve crescer somente quando houver requisito real.

## 3. Renderização por classe de página

### Institucional / solução / setor / case / insight
Preferência: prerender/ISR ou SSR com HTML completo e cache apropriado.

### Busca interna / filtros
Podem usar client-side enhancement, mas o conteúdo canônico e páginas indexáveis não devem depender da busca em JavaScript.

### Landing pages de campanha
SSR/SSG, extremamente rápidas, com conteúdo original e sem cloaking. Mesmo destino deve fazer sentido para usuário e AdsBot.

### CMS/admin
Não indexável; protegido conforme ambiente.

## 4. Client JavaScript budget

Princípios:
- nenhuma biblioteca de animação no root se somente uma seção usar;
- WebGL carregado sob demanda;
- não hidratar conteúdo estático;
- preferir CSS para transições simples;
- evitar carrosséis automáticos pesados;
- medir bundle por rota.

## 5. Design system

`packages/ui` deve conter componentes próprios da ATIV construídos sobre primitives acessíveis.

Camadas:
1. design tokens;
2. primitives;
3. components;
4. sections;
5. page compositions.

Não permitir estilos globais ad-hoc proliferarem por páginas.

## 6. SEO package

`packages/seo` deve concentrar:
- metadata builders;
- canonical builder;
- robots rules;
- schema builders tipados;
- breadcrumb helpers;
- sitemap generation;
- redirect validation utilities.

Schemas só devem ser emitidos quando os dados necessários existirem. Não marcar conteúdo invisível ou claims falsos.

## 7. Analytics package

`packages/analytics` deve conter:
- nomes e tipos de eventos;
- payload schemas;
- dataLayer adapter;
- acquisition context parser;
- helpers para consent-aware tracking.

O componente de UI dispara intenção sem conhecer GTM/GA4 internamente.

## 8. Formulários

Pipeline recomendado:

`UI -> schema validation -> server endpoint/action -> anti-spam/rate limit -> persistence/integration -> analytics outcome`

Requisitos:
- mensagens de erro úteis;
- idempotência quando aplicável;
- timeout de integração externa não pode destruir lead já validado;
- logs sem expor PII desnecessária.

## 9. Observabilidade

No mínimo:
- erros de aplicação;
- erros de formulário;
- status de integrações;
- deploy/version identifier;
- métricas Web Vitals no cliente quando infraestrutura estiver definida.

## 10. Ambientes

### local
Dados fake/seed; nenhuma credencial de produção.

### staging
Conteúdo próximo de produção; protegido contra indexação por mecanismos adequados ao ambiente e nunca por alterações que possam vazar para produção sem teste.

### production
Domínio canônico, analytics e integrações reais.

## 11. Segurança

Planejar:
- CSP;
- HSTS em produção;
- Referrer-Policy;
- Permissions-Policy;
- X-Content-Type-Options;
- proteção CSRF conforme fluxo;
- validação e sanitização contextual;
- rate limit;
- dependabot/atualização equivalente.

## 12. Decisões que exigem ADR

Criar ADR antes de consolidar:
- stack final CMS;
- hosting/deploy;
- storage de mídia;
- CRM/marketing automation;
- consent platform;
- error monitoring;
- uso de Three.js em produção;
- estratégia de busca interna;
- internacionalização, se necessária.

## 13. Critério de simplicidade

A arquitetura deve ser avançada no resultado e conservadora na manutenção. Complexidade visual não justifica complexidade sistêmica desnecessária.
