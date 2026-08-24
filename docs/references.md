# Referências Técnicas e Open Source — ATIV

Última revisão inicial: 2026-08-24.

Este arquivo é um índice de referências, não uma licença para copiar arquitetura ou aparência. Antes de adotar biblioteca, verificar versão atual, licença, compatibilidade, manutenção e necessidade real.

## 1. SEO — fontes oficiais

### Google Search Essentials
https://developers.google.com/search/docs/essentials

Usar como base para elegibilidade, boas práticas e políticas de spam.

### JavaScript SEO
https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics

Relevante para Next.js, renderização, conteúdo crítico, metadata e comportamento de crawler.

### Core Web Vitals
https://developers.google.com/search/docs/appearance/core-web-vitals

Metas de referência: LCP, INP e CLS segundo documentação vigente.

### Structured data
https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data

Nunca emitir schema que represente conteúdo inexistente ou não visível.

## 2. Google Ads — fontes oficiais

### Destination requirements
https://support.google.com/adspolicy/answer/6368661

Usar para diagnóstico de:
- destination not working;
- destination mismatch;
- destination not crawlable;
- destination experience;
- insufficient original content;
- unacceptable URL.

### Google Ads policies
https://support.google.com/adspolicy/

A política exibida na conta prevalece sobre hipótese externa. Registrar o motivo exato antes de corrigir.

## 3. Microsoft Advertising

### Microsoft Advertising Help
https://help.ads.microsoft.com/

Referência para UET, conversion tracking, campanhas e políticas. Confirmar documentação específica vigente durante a implementação.

## 4. Framework e plataforma

### Next.js
Repository: https://github.com/vercel/next.js
Docs: https://nextjs.org/docs

Uso pretendido:
- App Router;
- Server Components;
- rendering por rota;
- metadata;
- image/font optimization;
- route handlers quando necessários.

Não copiar patterns antigos sem verificar a documentação da versão fixada no projeto.

### Payload CMS
Repository: https://github.com/payloadcms/payload
Docs: https://payloadcms.com/docs

Uso pretendido:
- CMS TypeScript;
- backend integrado;
- collections/globals;
- drafts/versioning;
- PostgreSQL;
- controle editorial sem vendor lock-in excessivo.

A adoção final precisa de ADR após spike técnico.

## 5. UI e design system

### shadcn/ui
Repository: https://github.com/shadcn-ui/ui
Docs: https://ui.shadcn.com/docs

Uso permitido: primitives e código-base de componentes acessíveis.

Uso proibido: aceitar estética default como identidade final da ATIV.

### Motion
Repository/documentação oficial deve ser confirmada na implantação.
https://motion.dev/

Uso pretendido: animações de interface e scroll com progressive enhancement.

### Lenis
Repository: https://github.com/darkroomengineering/lenis

Uso potencial: sincronização de scroll/motion em páginas especiais. Não instalar por padrão; somente após teste de acessibilidade, performance e necessidade.

## 6. 3D / WebGL

### react-three-fiber
Repository: https://github.com/pmndrs/react-three-fiber
Docs: https://docs.pmnd.rs/react-three-fiber

Uso potencial: experiências 3D pontuais integradas ao React.

Guardrails:
- lazy load;
- fallback estático;
- reduced motion;
- budget de GPU/memória;
- não usar no shell global sem justificativa.

### Three.js
https://github.com/mrdoob/three.js
https://threejs.org/docs/

Referência de baixo nível para cenas WebGL.

## 7. Testes

### Playwright
Repository: https://github.com/microsoft/playwright
Docs: https://playwright.dev/

Uso pretendido:
- E2E;
- Chromium/Firefox/WebKit;
- mobile emulation;
- screenshots;
- smoke tests de metadata/redirects/forms;
- automação de QA.

### Vitest
Repository: https://github.com/vitest-dev/vitest
Docs: https://vitest.dev/

Uso pretendido: unit/integration tests TypeScript quando adequado.

### axe-core
Repository: https://github.com/dequelabs/axe-core

Uso pretendido: testes automatizados de acessibilidade em conjunto com revisão manual.

## 8. Performance

### Lighthouse
https://github.com/GoogleChrome/lighthouse

### Lighthouse CI
https://github.com/GoogleChrome/lighthouse-ci

Uso pretendido: budgets e regressão de laboratório em CI. Não confundir score de laboratório com Core Web Vitals de campo.

### web-vitals
https://github.com/GoogleChrome/web-vitals

Uso potencial para coleta de métricas reais quando observabilidade estiver definida.

## 9. Repositórios para estudo, não para clonagem cega

Os seguintes projetos devem ser estudados por arquitetura, APIs e patterns, mas nenhum deve ser usado como “template visual pronto” da ATIV:

- `vercel/next.js` — framework, examples e patterns;
- `payloadcms/payload` — CMS/fullstack;
- `shadcn-ui/ui` — primitives e distribuição de componentes;
- `microsoft/playwright` — QA cross-browser;
- `pmndrs/react-three-fiber` — integração React/Three.js;
- `darkroomengineering/lenis` — smooth scrolling;
- `GoogleChrome/lighthouse-ci` — performance CI;
- `dequelabs/axe-core` — acessibilidade.

## 10. Critérios para adicionar nova dependência

Antes de instalar:
1. qual problema real resolve?
2. é melhor do que solução nativa/simples?
3. tamanho e impacto de client bundle?
4. última manutenção e comunidade?
5. licença compatível?
6. segurança?
7. SSR/React/Next compatível?
8. acessibilidade?
9. existe lock-in?
10. quem manterá isso em dois anos?

Registrar bibliotecas arquiteturais relevantes em ADR.

## 11. Referências da ATIV

Fonte pública inicial:
- https://www.ativpro.com/

Na Fase 0, catalogar também documentos públicos, fabricantes, parceiros, referências institucionais e backlinks que possam comprovar atuação da ATIV. Toda evidência usada comercialmente deve ser validada e registrada no Claim Registry.
