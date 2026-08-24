# CODEX — START HERE

Este arquivo é a **ordem operacional de início do desenvolvimento local** da nova plataforma digital da ATIV.

Se você é o Codex ou outro agente de desenvolvimento, **comece por este arquivo e não improvise a sequência**.

---

## 1. Repositório oficial

```bash
git clone https://github.com/audiorobson/ATIV_SITES_01_ATIV.git
cd ATIV_SITES_01_ATIV
```

Confirme:

```bash
git remote -v
git status
git branch --show-current
```

A fonte de verdade inicial é `main`.

Antes de criar qualquer código:

```bash
git pull --ff-only origin main
```

---

## 2. Leitura obrigatória antes de qualquer implementação

Ler integralmente, nesta ordem:

1. `CODEX_START_HERE.md`
2. `AGENTS.md`
3. `ROADMAP.md`
4. `README.md`
5. `docs/local-development.md`
6. `docs/architecture.md`
7. `docs/site-audit.md`
8. `docs/seo-inventory-2026-08-24.md`
9. `docs/seo-strategy.md`
10. `docs/seo-migration.md`
11. `docs/ads-route-strategy.md`
12. `docs/ads-tracking.md`
13. `docs/domain-authority-ecosystem.md`
14. `docs/brand-system.md`
15. `docs/content-strategy.md`
16. `docs/quality-gates.md`
17. `docs/seo-open-source-tooling.md`
18. `docs/references.md`
19. `seo/url-inventory.csv`
20. `seo/keyword-map.csv`
21. `seo/route-plan.csv`
22. `seo/redirect-map.csv`
23. `seo/cross-domain-link-plan.csv`

Também ler integralmente as Issues, nesta sequência:

- Issue #1 — `TASK 001 — Codex: bootstrap local da plataforma web`
- Issue #2 — `TASK 002 — SEO foundation, route contracts e crawl gates`

Issue #2 depende da fundação entregue na Issue #1.

---

## 3. Missão imediata

A missão inicial é executar a **TASK 001**.

NÃO iniciar ainda:

- Home final;
- design visual definitivo;
- aplicação do Brand Kit incompleto;
- páginas comerciais finais;
- landing pages finais de Ads;
- redirects de produção;
- migração de URLs;
- CMS editorial completo;
- Three.js ou efeitos visuais pesados;
- conteúdo SEO em escala.

Primeiro deve existir uma fundação reproduzível, testável e documentada.

---

## 4. Branch inicial

Criar:

```bash
git checkout -b feat/foundation-bootstrap
```

Não desenvolver diretamente em `main`.

---

## 5. Verificar versões atuais antes do scaffold

Não assumir versões presentes em memória ou exemplos antigos.

Antes de instalar dependências:

1. verificar versões estáveis e compatíveis de Node.js LTS;
2. verificar Next.js, React e TypeScript estáveis compatíveis;
3. confirmar `pnpm` apropriado;
4. avaliar Payload CMS/PostgreSQL conforme `docs/architecture.md`;
5. registrar a decisão em:

```text
docs/adr/0001-web-stack.md
```

O ADR deve explicar:

- decisão;
- versões escolhidas;
- alternativas consideradas;
- impacto em SEO;
- impacto em performance;
- impacto em manutenção;
- compatibilidade com CMS;
- riscos conhecidos.

---

## 6. Fundação esperada na TASK 001

Criar uma estrutura coerente aproximadamente assim:

```text
apps/
└── web/

packages/
├── config/
├── ui/
└── seo/

.github/
└── workflows/
```

Arquivos/fundações esperados:

- `package.json` na raiz;
- `pnpm-workspace.yaml`;
- lockfile versionado;
- `.gitignore`;
- `.editorconfig`;
- `.env.example` sem segredos;
- TypeScript `strict`;
- lint;
- format;
- app Next.js mínima;
- renderização server-first adequada a SEO;
- metadata mínima;
- CI;
- scripts previsíveis.

Scripts obrigatórios ao final:

```bash
pnpm dev
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

Todos devem estar documentados e funcionar em fresh clone.

---

## 7. Regras arquiteturais não negociáveis

### SEO

- conteúdo principal precisa existir no HTML renderizado;
- H1/H2 semânticos não podem ser destruídos por animação;
- não mudar slugs existentes sem aprovação baseada em inventário/GSC;
- não gerar redirects por preferência estética;
- não criar páginas cidade × serviço em massa;
- não criar conteúdo programático raso;
- páginas orgânicas e landing pages de Ads têm contratos diferentes.

### Brand

O Brand Kit ainda está em desenvolvimento.

Portanto:

- criar apenas infraestrutura de tokens;
- não inventar cores oficiais;
- não inventar fonte oficial;
- não redesenhar logo;
- não definir estética final por conta própria;
- não gerar UI genérica como se fosse design aprovado.

### Conteúdo

É proibido inventar:

- clientes;
- cases;
- certificações;
- métricas;
- quantidade de projetos;
- SLA;
- uptime;
- fabricantes/parcerias;
- contratos públicos;
- depoimentos.

Claims futuros devem respeitar o Claim Registry definido na documentação.

### Ads / Tracking

- não inserir IDs inventados ou reais sem configuração aprovada;
- não criar redirects cross-domain como destino intermediário de anúncio;
- preparar arquitetura para `gclid`, `gbraid`, `wbraid`, `msclkid` e UTM;
- preservar consentimento e atribuição conforme documentação.

### Segurança

- nenhum segredo no Git;
- `.env.example` contém apenas nomes/descrições de variáveis;
- validar inputs;
- não expor tokens client-side;
- seguir princípio de menor privilégio.

---

## 8. Rotas e patrimônio SEO

O inventário atual está em:

```text
seo/url-inventory.csv
seo/keyword-map.csv
seo/route-plan.csv
seo/redirect-map.csv
```

Regra:

> URL existente com histórico potencial é preservada por padrão até haver dado suficiente para justificar mudança.

P0 conhecido do legado que o novo código não pode repetir:

- Home com H1 semântico equivalente a `|`;
- headings animados fragmentados caractere por caractere para crawler/acessibilidade;
- titles genéricos em múltiplas páginas comerciais;
- `/solucoes/colaboracao-uc/` com HTTP 406 observado;
- telefone placeholder em `/contato/`;
- contadores de prova que podem renderizar `0`;
- inconsistência `www` / non-`www` / `/index.html`;
- claims sem evidência.

Nenhum redirect de produção deve ser ativado na TASK 001.

---

## 9. Ecossistema de domínios

Domínios relacionados:

- `www.ativpro.com` — integração, engenharia e serviços;
- `www.easywall.com.br` — software/produto de gestão de videowall;
- `www.videowallbr.com.br` — portal editorial técnico, atualmente requer saneamento de identidade antes de interlink SEO ativo;
- `www.expertav.com.br` — atualmente bloqueado para autoridade até remover placeholders e definir função editorial/técnica real.

Não criar rede artificial de backlinks.

Usar links cross-domain somente quando forem editorialmente úteis e conforme:

```text
docs/domain-authority-ecosystem.md
seo/cross-domain-link-plan.csv
```

---

## 10. Depois de concluir a TASK 001

Somente após a fundação estar estável e a PR da TASK 001 estar pronta/aprovada, executar a **TASK 002**.

A TASK 002 deve implementar os contratos técnicos de SEO e mídia paga:

- metadata contract;
- canonical;
- robots;
- sitemap;
- H1 semantic contract;
- JSON-LD tipado;
- Lighthouse CI;
- link checker;
- testes de rotas/indexação;
- infraestrutura `/lp/**` sem conteúdo final.

Dependências já classificadas:

### ADOPT

- `GoogleChrome/lighthouse-ci`
- `google/schema-dts`
- `lycheeverse/lychee`

### EVALUATE

- `harlan-zw/unlighthouse`
- `iamvishnusankar/next-sitemap`

### DEFER

- `QwikDev/partytown`

Não adicionar dependência apenas porque está listada; respeitar a classificação e registrar decisão técnica.

---

## 11. Quality gates antes de abrir PR

Executar no mínimo:

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

Também verificar:

- nenhum segredo versionado;
- nenhum placeholder apresentado como dado real;
- nenhuma alteração indevida de URL;
- nenhuma dependência desnecessária;
- documentação correspondente atualizada;
- fresh clone reproduzível.

Se algum gate falhar, corrigir antes da PR. Não mascarar erro desabilitando regra sem justificativa documentada.

---

## 12. Commits

Usar commits pequenos e semânticos, por exemplo:

```text
chore: initialize pnpm workspace
feat: bootstrap Next.js web app
chore: add strict TypeScript configuration
ci: add foundation quality gates
docs: record web stack ADR
```

Não misturar implementação visual futura na PR de foundation.

---

## 13. PR da TASK 001

Título esperado:

```text
feat: bootstrap web platform foundation
```

A PR deve:

- referenciar Issue #1;
- preencher `.github/pull_request_template.md`;
- informar comandos executados;
- informar resultados dos gates;
- listar decisões arquiteturais;
- listar riscos/pendências;
- não declarar como concluído o que não foi implementado.

---

## 14. Definition of Done da sessão inicial

A primeira sessão de desenvolvimento só é considerada concluída quando:

- repositório foi clonado localmente;
- branch `feat/foundation-bootstrap` criada;
- ADR 0001 criado;
- workspace configurado;
- app mínima funciona;
- lint funciona e passa;
- typecheck funciona e passa;
- testes estão configurados e passam;
- production build passa;
- CI equivalente existe;
- `.env.example` não contém segredo;
- documentação local está coerente;
- PR `feat: bootstrap web platform foundation` foi aberta referenciando Issue #1.

---

## 15. Prompt operacional curto para Codex

Caso este repositório seja aberto em uma nova sessão do Codex, interpretar o texto abaixo como ordem de execução:

> Trabalhe no repositório `audiorobson/ATIV_SITES_01_ATIV`. Clone-o localmente se ainda não existir. Leia `CODEX_START_HERE.md` e `AGENTS.md` integralmente antes de alterar qualquer arquivo. Execute primeiro a Issue #1 (`TASK 001 — Codex: bootstrap local da plataforma web`) na branch `feat/foundation-bootstrap`. Respeite todos os guardrails de SEO, Brand, Ads, conteúdo, segurança e migração. Não desenvolva a Home final nem aplique Brand Kit ainda em desenvolvimento. Confirme versões atuais da stack, registre o ADR, crie a fundação reproduzível, execute lint/typecheck/test/build e abra a PR definida. Somente depois da TASK 001 aprovada avance para a Issue #2.

---

## 16. Regra final

Quando existir conflito entre improvisação e documentação do repositório, **a documentação versionada vence**.

Quando existir conflito entre velocidade e preservação de SEO/Brand/segurança, **preservação e qualidade vencem**.

Quando uma informação empresarial não estiver comprovada, **não inventar — registrar como pendência**.
