# ADR 0001 — Stack da plataforma web

- Status: aceito para o bootstrap
- Data: 2026-08-24
- Escopo: TASK 001 / Fase 1

## Contexto

A plataforma precisa servir conteúdo comercial e técnico com HTML completo, preservar patrimônio SEO,
manter Core Web Vitals, oferecer edição futura por CMS e suportar uma interface própria sem transformar
todo conteúdo estático em JavaScript cliente.

As versões foram verificadas no início da TASK 001 em fontes oficiais e no registry npm. O ambiente
local possuía Node 24.19.0, Corepack 0.35.0 e pnpm 11.19.0.

## Decisão

| Camada          | Decisão fixada                            | Motivo                                                                                                                                           |
| --------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| Runtime         | Node.js 24 LTS                            | Linha LTS suportada; Node 26 ainda estava em Current e não foi escolhido para produção.                                                          |
| Package manager | pnpm 11.19.0                              | Workspace nativo, instalação determinística e disponibilidade local via Corepack.                                                                |
| Framework       | Next.js 16.3.2                            | Linha estável/Active LTS atual, App Router e Server Components.                                                                                  |
| UI runtime      | React/React DOM 19.2.8                    | Patch estável compatível com Next.js 16.3.2.                                                                                                     |
| Linguagem       | TypeScript 6.0.3                          | Linha estável compatível com Next.js e ESLint, usando `strict`.                                                                                  |
| Lint            | ESLint 9.39.5 + eslint-config-next 16.3.2 | Flat config e regras de Core Web Vitals, React e TypeScript. ESLint 10 foi testado e rejeitado por incompatibilidade do plugin React transitivo. |
| Formatação      | Prettier 3.9.6                            | Formatação determinística e separada do lint semântico.                                                                                          |
| Teste unitário  | Vitest 4.1.11                             | Runner rápido, compatível com Node 24 e TypeScript.                                                                                              |
| CMS/banco       | Payload CMS + PostgreSQL adiados          | A TASK 001 não precisa de persistência; a consolidação exige ADR próprio, spike e decisão de hosting.                                            |

O monorepo usa `apps/web` e pacotes internos em `packages/*`. A aplicação adota Server Components por
padrão. Client Components só entram quando houver interação real.

## Compatibilidade verificada

- Next.js 16.3.2 declara Node.js `>=20.9.0` e React 19 como peer suportado.
- ESLint 9.39.5 é aceito pelo `eslint-config-next` 16.3.2 e mantém compatibilidade com o plugin React transitivo.
- Vitest 4.1.11 declara suporte a Node `>=24`.
- Node.js recomenda linhas LTS para aplicações de produção; a linha 24 estava em LTS na data do ADR.

Referências:

- https://nodejs.org/en/about/previous-releases
- https://nextjs.org/blog
- https://nextjs.org/support-policy
- https://react.dev/versions
- https://www.npmjs.com/package/next/v/16.3.2
- https://www.npmjs.com/package/pnpm/v/11.19.0

## Alternativas consideradas

### Node.js 26 Current

Rejeitado nesta fase. Embora mais novo, ainda não era LTS. A fundação prioriza suporte previsível e
compatibilidade de ecossistema.

### TypeScript 7

Não adotado no bootstrap. Apesar de disponível no registry, uma linha anterior estável reduz risco de
compatibilidade durante a fundação. A atualização pode ser avaliada isoladamente depois dos gates.

### ESLint 10

Testado e rejeitado no bootstrap. `eslint-plugin-react` 7.37.5, dependência do preset Next.js 16.3.2,
falhou ao carregar regras sob a API do ESLint 10. A linha 9.39.5 foi fixada até o preset completo ser
compatível; o warning de suporte é aceito temporariamente e deve ser revisto em atualização isolada.

### npm ou Yarn

Não adotados. pnpm já era a direção documentada e reduz duplicação de dependências em monorepo.

### Vite SPA

Rejeitado como arquitetura principal porque exigiria decisões adicionais para SSR, metadata, cache e
rotas indexáveis que Next.js já integra. Vite continua como dependência transitiva do runner de testes.

### Payload CMS e PostgreSQL na TASK 001

Adiados. Inicializá-los agora aumentaria superfície operacional sem validar requisito adicional da app
mínima. A futura decisão deve cobrir migrations, storage, backup, preview, hosting e segurança.

### Turborepo

Não adotado inicialmente. Os scripts filtrados do pnpm são suficientes para a escala atual. Um
orquestrador de tarefas só será incluído quando houver ganho medido de cache ou paralelismo.

## Consequências para SEO

- App Router e Server Components mantêm conteúdo principal no HTML.
- Metadata básica usa a API do Next.js.
- A página técnica é temporária e marcada como `noindex, nofollow`; nenhuma URL histórica é alterada.
- Canonical, sitemap, robots e schemas completos pertencem à TASK 002.

## Consequências para performance

- Nenhum JavaScript cliente é necessário na superfície inicial.
- Não há biblioteca de animação, componentes, analytics ou WebGL no bundle.
- Headers básicos são aplicados centralmente.
- Budgets e Lighthouse CI serão ampliados na TASK 002 conforme o roadmap.

## Consequências para manutenção

- Versões exatas e lockfile reduzem variação entre ambientes.
- Configuração TypeScript compartilhada evita divergência entre pacotes.
- O monorepo pode crescer por domínio sem criar serviços independentes prematuramente.
- A atualização de majors deve ocorrer em PR própria, com lint, typecheck, testes e build.

## Riscos e mitigação

- Next.js e React evoluem rapidamente: manter patches de segurança e revisar advisories.
- TypeScript 6 é anterior à linha mais nova disponível: revisar atualização após estabilizar a base.
- CSP ainda não foi definida: criar decisão específica antes de produção, quando scripts e origens
  externas forem conhecidos.
- CMS adiado: nenhuma feature editorial deve assumir persistência antes do ADR correspondente.
