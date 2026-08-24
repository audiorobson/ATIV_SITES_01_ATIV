# Sistema de marca — ATIV

Este documento resume o sistema visual para leitura rápida. A implementação lê
`brand/tokens/ativ-ui.css`, que é a fonte de verdade; aqui só existe o que ajuda a decidir.

## Superfícies

O sistema tem duas superfícies, e elas resolvem os papéis de cor automaticamente:

| Classe | Fundo | Texto | Destaque | Foco |
| --- | --- | --- | --- | --- |
| `.ativ-escuro` | `#1B1F3B` | `#F1F2F6` | Âmbar | Âmbar |
| `.ativ-claro` | `#F1F2F6` | `#1B1F3B` | Índigo | Índigo |

Um componente não declara cor: lê `--ativ-destaque`, `--ativ-texto`, `--ativ-borda-cor`. Trocar a
classe da superfície troca o componente inteiro. Nenhum hex aparece dentro de componente.

## Escala de espaço

Base 4 px, passo não-linear. Dez degraus fecham o sistema.

| Token | Valor | Uso |
| --- | --- | --- |
| `--ativ-e-1` | 4px | Ícone e rótulo colados |
| `--ativ-e-2` | 8px | Interno de controle |
| `--ativ-e-3` | 12px | Itens de uma lista |
| `--ativ-e-4` | 16px | Cartão compacto |
| `--ativ-e-5` | 24px | Cartão padrão |
| `--ativ-e-6` | 32px | Entre cartões · calha da grade |
| `--ativ-e-7` | 48px | Blocos de uma seção |
| `--ativ-e-8` | 72px | Entre seções · mobile |
| `--ativ-e-9` | 96px | Entre seções · desktop |
| `--ativ-e-10` | 144px | Abertura de página |

Nenhuma margem arbitrária, nenhum valor entre degraus.

## Grade

12 colunas, calha de 32 px, margem de 6vw, conteúdo em 1180 px, texto corrido em 68ch.
Abaixo de 860 px toda coluna passa a ocupar a linha inteira.

## Movimento

| Token | Duração | Uso |
| --- | --- | --- |
| `--ativ-dur-instante` | 90ms | Realce de estado, hover |
| `--ativ-dur-rapido` | 180ms | Controle, foco, chip |
| `--ativ-dur-padrao` | 280ms | Cartão, painel, aba |
| `--ativ-dur-amplo` | 460ms | Entrada de seção, hero |
| `--ativ-dur-cena` | 900ms | Sequência de marca |

Curvas: `--ativ-ease-entrada` (entra em cena), `--ativ-ease-saida` (sai),
`--ativ-ease-padrao` (move-se na tela), `--ativ-ease-firme` (assentamento técnico).

Restrição do README raiz que vale repetir: motion não pode fragmentar H1/H2 nem esconder conteúdo
sem fallback. As animações do sistema (`.ativ-entra`, `.ativ-cascata`) animam opacidade e
transform de elementos já presentes no HTML renderizado — nunca montam texto em pedaços.

## Logo

| Situação | Arquivo | Medida |
| --- | --- | --- |
| Fundo escuro | `logo-2t-claro.svg` | — |
| Fundo claro | `logo-2t-indigo.svg` | — |
| Fundo âmbar | `logo-2t-sobreambar.svg` | — |
| Foto ou fundo variável | `logo-mono-branco.svg` | — |
| Espaço estreito | `wordmark-2t-*.svg` | abaixo de 120px de largura |
| Ícone, favicon, app | `icon-*.svg` | abaixo de 60px |

Respiro livre em todos os lados igual à altura do símbolo *power*. Mínimos: 120 px para o lockup,
18 px para o símbolo. O símbolo no lugar do "i" é o elemento mais reconhecível da marca e existe
como arquivo independente — é ele que carrega o âmbar.

## Proibido

- Âmbar em texto sobre fundo claro (2.0:1, reprova).
- Índigo médio sobre índigo profundo (2.3:1, reprova).
- Preto puro em qualquer lugar — Índigo Profundo o substitui.
- Cor fora dos três grupos declarados no CSS.
- Gradiente decorativo, sombra sem borda, cantos arredondados em tabela.
- Redesenhar, redigitar ou distorcer o logo.
