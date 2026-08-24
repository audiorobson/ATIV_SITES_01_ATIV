# Desenvolvimento Local — ATIV

## Objetivo

Permitir que Codex ou qualquer desenvolvedor faça um fresh clone e reproduza o ambiente sem conhecimento implícito.

## 1. Clone

```bash
git clone https://github.com/audiorobson/ATIV_SITES_01_ATIV.git
cd ATIV_SITES_01_ATIV
```

## 2. Leitura obrigatória antes do bootstrap

Nesta ordem:
1. `README.md`;
2. `AGENTS.md`;
3. `ROADMAP.md`;
4. `docs/architecture.md`;
5. `docs/site-audit.md`;
6. `docs/seo-migration.md`;
7. `docs/quality-gates.md`.

## 3. Estado atual

O repositório inicia documentalmente na **Fase 0/Fase 1**. Caso ainda não exista `package.json`, o primeiro trabalho de engenharia é o bootstrap de fundação — não a criação da home final.

## 4. Pré-requisitos alvo

Confirmar no bootstrap:
- Git recente;
- Node.js LTS compatível com as dependências escolhidas;
- pnpm via Corepack;
- Docker Desktop ou PostgreSQL local apenas se Payload/Postgres já fizerem parte do spike;
- navegador Chromium para QA inicial.

Não fixar versões apenas porque estão descritas em documentação antiga. A versão exata deve ser escolhida no dia do bootstrap e registrada em lockfile/packageManager.

## 5. Branch inicial do Codex

```bash
git checkout -b feat/foundation-bootstrap
```

## 6. Primeira entrega de engenharia esperada

O Codex deve criar uma PR de fundação contendo, no mínimo:

```text
package.json
pnpm-lock.yaml
pnpm-workspace.yaml
.gitignore
.editorconfig
.env.example
apps/web/
packages/config/
.github/workflows/ci.yml
```

Mais arquivos podem ser adicionados se forem necessários e coerentes com o ADR.

## 7. ADR antes de lock arquitetural

Criar `docs/adr/0001-web-stack.md` documentando:
- decisão;
- contexto;
- alternativas consideradas;
- consequências;
- versões escolhidas no bootstrap;
- por que a stack atende SEO/performance/manutenção.

Se Payload/PostgreSQL forem inicializados já nesta primeira PR, criar ADR ou seção específica justificando.

## 8. Scripts mínimos pretendidos

O `package.json` raiz deve evoluir para fornecer comandos previsíveis, por exemplo:

```bash
pnpm dev
pnpm lint
pnpm typecheck
pnpm test
pnpm test:e2e
pnpm build
```

Os nomes finais podem ser ajustados, mas devem ser documentados e funcionar no fresh clone.

## 9. TypeScript

- strict mode;
- evitar `any` sem justificativa;
- schemas compartilhados tipados;
- tipos gerados do CMS devem ser versionados/gerados conforme estratégia documentada.

## 10. Environment variables

`.env.example` deve:
- listar nomes necessários;
- conter valores fake/placeholder;
- explicar quais são opcionais;
- nunca conter segredo real.

## 11. CI inicial

Na primeira fundação, configurar GitHub Actions para pelo menos:
- install com lockfile frozen;
- lint;
- typecheck;
- unit tests quando existirem;
- production build.

E2E pode entrar na mesma PR ou imediatamente depois, conforme custo de bootstrap.

## 12. Primeira página técnica

Antes da home final, criar apenas uma superfície mínima para validar:
- App Router;
- typography/font loading;
- metadata;
- server rendering;
- design tokens iniciais;
- acessibilidade básica;
- pipeline de build.

Não investir em animação premium antes de o Brand Kit estar versionado.

## 13. Banco/CMS

Se o spike confirmar Payload:
- PostgreSQL local via Docker Compose ou alternativa documentada;
- migrations versionadas;
- seed fake;
- admin fora do sitemap/indexação;
- media storage local no desenvolvimento.

## 14. Validação antes de PR

Executar e registrar resultados:

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

Se algum script ainda não existir, a PR deve explicar claramente por quê e quando entra.

## 15. O que Codex NÃO deve fazer no primeiro clone

- não copiar o site atual inteiro;
- não inventar o Brand Kit;
- não trocar URLs;
- não subir produção;
- não configurar tags reais de Ads com IDs inventados;
- não criar conteúdo fictício como definitivo;
- não instalar Three.js antes de existir caso de uso aprovado;
- não construir dezenas de páginas SEO.

## 16. Entrega esperada da primeira PR

Título sugerido:

`feat: bootstrap web platform foundation`

A PR deve fechar ou referenciar a issue de bootstrap criada no repositório e incluir:
- arquitetura escolhida;
- comandos locais;
- testes;
- screenshots da superfície mínima;
- riscos/dependências pendentes;
- próximos passos da Fase 1.
