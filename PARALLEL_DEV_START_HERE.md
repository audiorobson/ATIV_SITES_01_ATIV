# Desenvolvimento paralelo — Codex + Cursor

## Objetivo

Executar a fundação técnica e a fundação do sistema visual em dois LLMs simultaneamente, sem duas
implementações concorrentes do mesmo problema e sem violar a ordem do `ROADMAP.md`.

Este protocolo não autoriza iniciar a TASK 002, páginas finais, CMS, redirects de produção ou motion
premium. A execução atual continua limitada à TASK 001 e ao subconjunto independente da Fase 2 que
consiste em transformar o Brand Kit já versionado em contratos reutilizáveis.

## Perfis ativos

| Perfil | LLM    | Branch                          | Missão                                                | Instrução                                     |
| ------ | ------ | ------------------------------- | ----------------------------------------------------- | --------------------------------------------- |
| A      | Codex  | `feat/foundation-bootstrap`     | Workspace, app mínima, ADR, qualidade e CI            | `docs/agents/CODEX_FOUNDATION_PROFILE.md`     |
| B      | Cursor | `feat/design-tokens-foundation` | Tokens, CSS de UI e contrato visual framework-neutral | `docs/agents/CURSOR_DESIGN_SYSTEM_PROFILE.md` |

Codex é o integrador da rodada. Cursor entrega um commit ou uma sequência pequena de commits para
revisão; não integra sua própria branch em `main`.

## Estado e limites da rodada

- Base comum inicial: `main` no commit registrado no início de cada branch.
- TASK 001 é o caminho crítico.
- TASK 002 permanece bloqueada até TASK 001 passar em fresh clone, lint, typecheck, test e build.
- A Home final e páginas comerciais continuam fora de escopo.
- O Brand Kit em `design_guide/` agora é material versionado e pode alimentar tokens, mas exemplos
  navegáveis não devem ser promovidos automaticamente a componentes de produção.
- `design_guide/brand/tokens/ativ-ui.css` é a fonte de verdade visual.

## Isolamento obrigatório

Use dois clones ou dois Git worktrees. Nunca abra os dois LLMs na mesma working tree.

Exemplo, executado a partir do clone principal limpo:

```bash
git fetch origin
git worktree add ../ATIV_codex -b feat/foundation-bootstrap origin/main
git worktree add ../ATIV_cursor -b feat/design-tokens-foundation origin/main
```

Se a branch já existir, omita `-b` e informe a branch existente. Antes de criar worktrees, preserve ou
commite arquivos locais não rastreados; não mova alterações silenciosamente entre perfis.

## Matriz de propriedade

| Área                                               | Codex                                   | Cursor          |
| -------------------------------------------------- | --------------------------------------- | --------------- |
| `package.json`, lockfile, workspace e configs raiz | dono                                    | não editar      |
| `.github/workflows/**`                             | dono                                    | não editar      |
| `apps/web/**`                                      | dono                                    | não editar      |
| `packages/config/**`                               | dono                                    | não editar      |
| `packages/seo/**`, `packages/analytics/**`         | fora da rodada                          | não editar      |
| `docs/adr/0001-web-stack.md`                       | dono                                    | somente leitura |
| `brand/**` de produção                             | não editar antes do handoff             | dono            |
| `packages/ui/**`                                   | não editar antes do handoff             | dono            |
| `docs/design-system-implementation.md`             | somente revisão                         | dono            |
| `design_guide/**`                                  | somente leitura, salvo tarefa explícita | somente leitura |
| SEO inventories e redirects                        | somente leitura                         | somente leitura |

Arquivos fora da matriz exigem coordenação antes da alteração. Quem detectar uma dependência do outro
perfil registra o contrato e continua no próprio escopo; não “ajuda” editando a área alheia.

## Contrato entre os perfis

Cursor deve entregar um pacote consumível pelo workspace sem editar o workspace raiz:

- pacote previsto: `@ativ/ui`;
- diretório: `packages/ui/`;
- tokens canônicos serializáveis em `brand/tokens.json`;
- CSS consumível por import explícito, sem CDN e sem dependência de runtime;
- exports e scripts locais documentados no `package.json` do pacote;
- nenhuma dependência React ou biblioteca de componentes antes da decisão do ADR 0001;
- nenhuma versão escolhida para ferramentas que pertencem ao bootstrap raiz;
- nenhum hex ou valor visual que não possa ser rastreado ao CSS mestre.

Codex deve entregar o workspace capaz de consumir pacotes internos, mas não deve simular ou recriar a
entrega do Cursor. No checkpoint de integração, Codex conecta `@ativ/ui` à superfície técnica mínima,
executa todos os gates e resolve apenas adaptações de integração.

## Sequência de integração

1. Cada perfil confirma sua base, branch e working tree limpa.
2. Codex implementa a fundação da TASK 001.
3. Cursor implementa o contrato visual framework-neutral em sua branch.
4. Cursor executa validações possíveis no pacote e entrega SHA, lista de arquivos, testes e pendências.
5. Codex revisa o diff do Cursor contra `origin/main`.
6. Codex integra por cherry-pick dos commits aprovados ou merge sem squash, conforme a política adotada.
7. Codex conecta o pacote à app mínima sem transformar a superfície técnica em Home final.
8. Codex executa install frozen, lint, typecheck, test e build no conjunto integrado.
9. Somente a branch integrada abre PR da TASK 001. A PR explica que a fundação visual é infraestrutura,
   não conclusão da Fase 2.

## Regras de Git

- Nenhum perfil trabalha diretamente em `main`.
- Nenhum perfil executa `push --force`.
- Commits devem ser pequenos e usar Conventional Commits.
- Não misturar arquivos dos dois perfis no mesmo commit.
- Cursor não faz merge da branch Codex; Codex é o integrador desta rodada.
- Conflito em arquivo de propriedade exclusiva indica violação do protocolo e deve ser resolvido
  restaurando a fronteira, não escolhendo conteúdo automaticamente.
- Alterações locais anteriores à rodada ficam fora dos commits dos perfis, salvo autorização explícita.

## Comunicação mínima de handoff

Cada entrega entre perfis inclui:

```text
Perfil:
Branch e SHA:
Objetivo concluído:
Arquivos alterados:
Contratos/exportações:
Comandos executados e resultados:
Pendências:
Riscos de integração:
Arquivos que o outro perfil deve evitar até o merge:
```

## Gate de encerramento

A rodada paralela termina somente quando:

- a fundação da TASK 001 funciona em fresh clone;
- o pacote visual não contém valores inventados;
- a app mínima demonstra importação real do pacote sem ser uma Home final;
- lint, typecheck, testes e build passam no conjunto integrado;
- CI reproduz os gates;
- documentação local explica instalação e execução;
- nenhum segredo, redirect de produção, conteúdo fictício ou regressão SEO entrou no diff.
