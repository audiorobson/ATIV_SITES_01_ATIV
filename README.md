# ATIV — Plataforma Digital Corporativa

Repositório oficial da nova plataforma digital da **ATIV** (`ativpro.com`).

Este projeto não é apenas um redesign de website. É uma plataforma comercial e técnica para posicionar a ATIV como referência em integração audiovisual corporativa e governamental, gerar oportunidades qualificadas, sustentar campanhas de mídia paga e ampliar autoridade orgânica sem perder o patrimônio SEO existente.

## Objetivos de negócio

1. Aumentar geração de leads qualificados B2B e Governo.
2. Construir autoridade orgânica em integração audiovisual corporativa, salas híbridas, videowall, centros de comando, NOC/SOC, auditórios, AV over IP e soluções para órgãos públicos.
3. Corrigir os problemas de rastreabilidade, experiência, consistência de domínio e conteúdo que possam afetar Google Ads e Microsoft Ads.
4. Preservar URLs, conteúdo e sinais de autoridade atualmente úteis no domínio.
5. Criar uma experiência visual premium, técnica e memorável, rigorosamente alinhada ao Brand Kit da ATIV e sem estética genérica de template/IA.
6. Construir uma base de código de longo prazo, documentada, testável, segura e simples de manter.

## Stack alvo

A stack definitiva é validada por ADR antes de implementação. Direção inicial:

- Next.js + React + TypeScript
- App Router, Server Components e renderização orientada a SEO
- Payload CMS + PostgreSQL
- pnpm
- Tailwind CSS + design tokens próprios da ATIV
- shadcn/ui apenas como primitive layer, nunca como identidade visual final
- Motion para motion design; Three.js/react-three-fiber somente quando houver valor real
- Playwright para E2E
- Vitest para unidades/integração
- axe para acessibilidade
- Lighthouse CI / Core Web Vitals budget
- GA4 + GTM + Google Ads conversions + Microsoft UET

Versões devem ser fixadas no bootstrap e atualizadas de forma controlada; não copiar números de versão desta documentação.

## Princípios não negociáveis

- **SEO antes de estética de URL.** Nenhuma URL indexada deve ser removida, renomeada ou redirecionada sem inventário e decisão documentada.
- **Conteúdo crítico deve existir no HTML renderizado.** Motion não pode fragmentar H1/H2, esconder conteúdo sem fallback ou prejudicar indexação.
- **Brand Kit é fonte de verdade.** Tokens, tipografia, cores, logo, espaçamento, motion e tratamento visual são codificados.
- **Sem aparência de IA/template.** Evitar componentes genéricos repetitivos, textos vazios, imagens stock sem função, gradientes decorativos arbitrários e estatísticas inventadas.
- **Claims precisam de evidência.** Projetos, números, certificações, cases, clientes e resultados devem apontar para evidência verificável no Claim Registry.
- **Performance é feature.** Efeitos visuais não podem comprometer Core Web Vitals.
- **Tracking é contrato.** Eventos, UTMs, gclid/gbraid/wbraid/msclkid e consentimento são especificados antes da implementação.
- **Acessibilidade é requisito de produto.** O projeto deve mirar WCAG 2.2 AA.
- **Segurança e privacidade por padrão.** Segredos nunca entram no repositório; LGPD e consentimento fazem parte da arquitetura.

## Estrutura planejada

```text
/
├── README.md
├── AGENTS.md
├── ROADMAP.md
├── docs/
│   ├── architecture.md
│   ├── site-audit.md
│   ├── seo-strategy.md
│   ├── seo-migration.md
│   ├── ads-tracking.md
│   ├── brand-system.md
│   ├── content-strategy.md
│   ├── quality-gates.md
│   ├── references.md
│   └── local-development.md
├── seo/
│   ├── url-inventory.csv
│   ├── keyword-map.csv
│   └── redirect-map.csv
├── brand/
├── apps/
│   └── web/
├── packages/
│   ├── ui/
│   ├── seo/
│   ├── analytics/
│   └── config/
└── .github/
```

## Fluxo obrigatório de trabalho

1. Ler `AGENTS.md` integralmente.
2. Ler `ROADMAP.md` e localizar a fase atual.
3. Não iniciar feature sem critérios de aceite claros.
4. Criar branch curta por tarefa.
5. Implementar com testes e documentação correspondente.
6. Executar quality gates locais.
7. Abrir PR com evidências de teste, screenshots e impacto SEO/performance quando aplicável.
8. Não fazer merge de alteração que quebre URLs, tracking, acessibilidade ou Brand Kit.

## Fase atual

**Fase 0 — Discovery, auditoria e fundações.**

Nesta fase o objetivo é consolidar arquitetura, inventário SEO, design system, tracking contract, política de conteúdo e ambiente de desenvolvimento antes de produzir páginas finais.

Consulte `ROADMAP.md` para sequência completa.
