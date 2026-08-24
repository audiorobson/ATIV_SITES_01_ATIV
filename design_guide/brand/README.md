# brand/ — Sistema visual da ATIV

Referência gráfica da plataforma digital da ATIV. Este diretório é a **fonte de verdade** citada
nos princípios não negociáveis do README raiz: cor, tipografia, logo, espaçamento, foco, grade e
movimento estão codificados aqui, não descritos em prosa.

Produzido antes da Fase 1 para que a implementação não invente valores.

## O que está aqui

| Caminho | O que é |
| --- | --- |
| `tokens/ativ-ui.css` | CSS mestre — **a fonte de verdade**. Tokens, componentes, foco, espaço, grade e movimento em um arquivo. |
| `tokens/tailwind.ativ.js` | Os mesmos tokens como `theme.extend` para Tailwind v3. Gerado a partir do CSS. |
| `tokens/theme.ativ.css` | Os mesmos tokens como `@theme` para Tailwind v4. Gerado a partir do CSS. |
| `logo/` | 28 SVGs vetoriais: lockup, wordmark e símbolo, em cada cor aprovada. |
| `implementacao.dc.html` | **Comece aqui.** Guia de implementação: precedência, bibliotecas a instalar, bootstrap em 6 passos, tokens em código, regras que reprovam em revisão. |
| `kit-de-marca.dc.html` | Norma visual navegável: logo, paleta, contraste, proporção, tipografia, aplicações. |
| `componentes.dc.html` | Biblioteca de UI com os ids e classes reais do CSS mestre. |
| `documentos.dc.html` | Manual de documentos oficiais — técnico, comercial e jurídico, medidas em mm e pt. |
| `cobertura.dc.html` | Estado do vocabulário: o que está pronto, o que falta, em que ordem. |

Os `.html` abrem direto no navegador, sem build. Precisam do `support.js` ao lado — ele já está
no diretório.

## Regra de precedência

1. `tokens/ativ-ui.css` vence sempre.
2. Os arquivos Tailwind são **derivados**. Se um valor divergir, regenere o derivado — nunca o CSS.
3. Valor que não está no CSS não existe. Nova cor, novo espaçamento ou nova duração entram
   primeiro no CSS mestre, com justificativa, e só então no código.

## Núcleo da paleta

| Cor | HEX | Papel |
| --- | --- | --- |
| Índigo Profundo | `#1B1F3B` | Base e texto. Substitui o preto. |
| Índigo | `#4B4FA6` | Destaque em fundo claro. |
| Âmbar | `#F5A623` | Acento. No máximo ~5% da área, sempre sobre índigo. |
| Ardósia | `#6E7686` | Texto secundário. |
| Gelo | `#F1F2F6` | Superfície clara. |

Mais 11 tons de apoio e 4 semânticas. Qualquer cor usada na plataforma pertence a um destes três
grupos. **Um destaque por superfície:** âmbar no escuro, índigo no claro — nunca os dois competindo.

## Tipografia

- **Archivo** 800/900 — títulos e números em destaque.
- **IBM Plex Sans** 400–600 — corpo.
- **IBM Plex Mono** 400–500 — dados, códigos, unidades e rótulos.

Nunca Arial, Calibri, Helvetica, Times ou Inter.

## Iconografia

**Lucide** (`lucide.dev`), licença ISC. Grade 24×24, traço 2, arredondada, sem preenchimento,
cor herdada do texto. Cinco tamanhos canônicos: 16 · 20 · 24 · 32 · 48, com o traço afinando acima
de 24 para manter o peso ótico. Regras e classes em `tokens/ativ-ui.css`, seção ICONOGRAFIA.

Nenhuma outra biblioteca, nenhum emoji, nenhum ícone preenchido. O símbolo *power* da marca não é
ícone e não entra em grade de ícones.

## Acessibilidade

Meta WCAG 2.2 AA, conforme o README raiz. O CSS mestre já entrega:

- Anel de foco único de 3 px com folga de 2 px, cor resolvida por superfície e invertida sobre âmbar.
- Atalho de salto para o conteúdo (`.ativ-salto`), primeiro elemento tabulável da página.
- Alvo mínimo de toque de 44 px em todo controle.
- `prefers-reduced-motion` respeitado uma vez, centralmente.
- Contraste medido e documentado em `kit-de-marca.dc.html` — âmbar reprova sobre branco (2.0:1) e
  por isso nunca aparece em texto sobre fundo claro.

## Movimento

Cinco durações, escolhidas pela distância percorrida, não pela importância do elemento:
90 · 180 · 280 · 460 · 900 ms. Quatro curvas nomeadas por função: entrada, saída, padrão, firme.
Deslocamento de entrada de 12 px. Nada fora disso.

## O que ainda falta

Documentado em `cobertura.dc.html`. A lacuna que mais afeta a identidade:

- **Dado técnico** — tabela de especificação, bloco de spec, medidor, diagrama de sinal. É o
  vocabulário que faz a diferença entre parecer engenharia e parecer template.
Depende de material real da ATIV: um memorial ou datasheet entregue, um diagrama de sinal
existente e fotografia de obra própria. Sem isso, o slot vazio vira imagem de banco genérica — o
que o README raiz proíbe.
