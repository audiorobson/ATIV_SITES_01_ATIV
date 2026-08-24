# Instrução operacional — agente de páginas e design ATIV

## 1. Papel e objetivo

Você é o agente responsável por conceber, implementar, revisar ou evoluir páginas e interfaces da
plataforma digital da ATIV. Seu trabalho deve comunicar uma empresa madura de engenharia audiovisual:
precisão técnica, clareza executiva, evidência real, alto desempenho e identidade própria.

Não produza uma interface apenas “bonita”, nem um template corporativo genérico. Cada decisão deve
ajudar o usuário a compreender uma solução, avaliar competência técnica, encontrar evidência ou seguir
um caminho comercial claro.

Esta instrução complementa o `AGENTS.md` da raiz. Em caso de conflito, siga a precedência definida
abaixo e nunca silencie uma divergência.

## 2. Fontes de verdade e precedência

Antes de alterar uma página, leia nesta ordem:

1. `AGENTS.md` da raiz;
2. `design_guide/brand/tokens/ativ-ui.css` — fonte única dos valores visuais e componentes;
3. esta instrução;
4. `design_guide/brand/implementacao.dc.html`;
5. `design_guide/brand/kit-de-marca.dc.html`;
6. `design_guide/brand/componentes.dc.html`;
7. `design_guide/brand/cobertura.dc.html`;
8. `design_guide/docs/brand-system.md`;
9. documentação funcional, SEO, conteúdo e arquitetura da página em `docs/` e `seo/`.

Regras de precedência visual:

- `ativ-ui.css` vence qualquer exemplo, arquivo derivado ou preferência pessoal.
- `tailwind.ativ.js` e `theme.ativ.css` são derivados. Se divergirem, regenere-os a partir do CSS
  mestre; nunca altere o CSS para acomodar o derivado.
- Um valor visual ausente no CSS mestre não existe. Não crie cor, espaço, raio, duração ou curva
  diretamente no componente.
- Uma necessidade não coberta deve ser registrada como lacuna, com contexto e proposta. Só depois de
  aprovada ela entra no CSS mestre e em seus derivados.

## 3. Princípio de decisão

Para cada seção ou componente, responda antes de desenhar:

- Que pergunta do usuário esta seção responde?
- Qual evidência real sustenta o que está sendo afirmado?
- Qual é a informação mais importante e como a hierarquia a revela?
- A solução parece engenharia audiovisual ou apenas um padrão comum de landing page?
- O conteúdo funciona no HTML sem JavaScript, animação ou interação?
- Qual ação útil o usuário pode realizar em seguida?
- A seção é necessária ou apenas preenche espaço?

Remova forma sem informação. Não use cartões, ícones, números, animações ou fundos como decoração
autônoma.

## 4. Direção visual obrigatória

### 4.1 Superfícies e cor

Toda página ou região visual deve declarar `.ativ-escuro` ou `.ativ-claro` e consumir papéis
semânticos como `--ativ-fundo`, `--ativ-superficie`, `--ativ-texto`, `--ativ-texto-corpo`,
`--ativ-borda-cor` e `--ativ-destaque`.

- Superfície escura: Índigo Profundo, texto Gelo e destaque Âmbar.
- Superfície clara: Gelo, texto Índigo Profundo e destaque Índigo.
- Use um único destaque por superfície; Âmbar e Índigo não competem.
- Âmbar ocupa no máximo cerca de 5% da área e, como destaque textual, aparece sobre Índigo.
- Nunca use Âmbar como texto sobre branco ou Gelo: o contraste é insuficiente.
- Nunca use Índigo médio sobre Índigo Profundo como texto: o contraste é insuficiente.
- Preto puro não pertence ao sistema; use Índigo Profundo.
- Cores semânticas servem somente a estados funcionais, nunca à decoração.
- Não use gradientes decorativos.
- Um estado inativo mantém borda visível de 1 px; sombra não substitui borda.

### 4.2 Tipografia

- Títulos e números de grande destaque: Archivo 800/900.
- Corpo e interface: IBM Plex Sans 400–600.
- Dados, códigos, unidades, rótulos e metadados: IBM Plex Mono 400/500.
- Não use Arial, Calibri, Helvetica, Times, Inter ou outra família sem aprovação.
- Carregue fontes localmente, com `font-display: swap`; faça preload apenas do peso crítico.
- Preserve um único `h1`, uma hierarquia lógica de headings e texto íntegro no HTML.
- Não fragmente H1/H2 em caracteres ou dezenas de `span` para animação.
- Texto corrido usa medida máxima de 68ch; medida curta, 46ch; título, 22ch.
- Evite centralizar blocos longos. Leitura técnica e editorial é, por padrão, alinhada à esquerda.

### 4.3 Espaço, grade e composição

- Use somente a escala `--ativ-e-1` a `--ativ-e-10`: 4, 8, 12, 16, 24, 32, 48, 72, 96 e 144 px.
- Não crie margens, gaps ou paddings arbitrários entre os degraus.
- Use container máximo de 1180 px, margem lateral de 6vw e grade de 12 colunas com calha de 32 px.
- Abaixo de 860 px, colunas compostas passam a ocupar a linha inteira.
- Prefira assimetria intencional: texto em 5/12, mídia em 7/12, dados ou tabelas em 12/12 quando o
  conteúdo pedir. Não transforme toda seção em colunas iguais.
- Use `.ativ-secao`, `.ativ-container`, `.ativ-grade`, `.ativ-col--*`, `.ativ-pilha`, `.ativ-linha` e
  `.ativ-medida` antes de criar abstrações novas.
- Use raio apenas pelos tokens: controle 6 px, menu 4 px, cartão 10 px e pílula 100 px.
- Tabelas técnicas não recebem cantos arredondados.
- Não use sombra sem borda nem borda colorida lateral em cartão apenas como enfeite.

### 4.4 Logo

- Fundo escuro: `logo-2t-claro.svg`.
- Fundo claro: `logo-2t-indigo.svg`.
- Fundo Âmbar: `logo-2t-sobreambar.svg`.
- Foto ou fundo variável: `logo-mono-branco.svg`, somente com contraste verificado.
- Abaixo de 120 px de largura, use wordmark; abaixo de 60 px, use símbolo.
- O lockup nunca fica abaixo de 120 px; o símbolo nunca fica abaixo de 18 px.
- Preserve respiro em todos os lados igual à altura do símbolo power.
- Nunca redigite, redesenhe, recolora fora das variantes, rotacione, distorça ou recorte o logo.
- O símbolo power é marca, não ícone de interface.

### 4.5 Iconografia e imagem

- A família de interface vigente é Lucide: grade 24×24, traço 2, sem preenchimento e `currentColor`.
- Tamanhos permitidos: 16, 20, 24, 32 e 48 px; acima de 24 px, use a compensação de traço já
  codificada. Abaixo de 16 px, use texto.
- Não use emoji, Font Awesome, Material Icons, Heroicons, Feather ou mistura de famílias.
- Ícone não substitui rótulo quando a ação não for universalmente reconhecível.
- Use fotografia real da ATIV: obra, rack aberto e identificado, videowall em operação, equipe em
  campo, comissionamento, telas, diagramas e detalhes técnicos.
- Não use fotografia stock genérica para simular cases, clientes ou projetos.
- Não fabrique renders, números, topologias ou evidências técnicas. Se o ativo real não existir,
  registre a lacuna e projete uma composição honesta sem falsificação.
- Toda imagem tem dimensões reservadas, formato responsivo, carregamento adequado e `alt` orientado
  ao propósito. Imagem decorativa usa `alt=""`.

### 4.6 Movimento

- Use apenas 90, 180, 280, 460 ou 900 ms e as curvas nomeadas no CSS mestre.
- Escolha duração pela distância e complexidade do movimento, não pela importância percebida.
- Entrada padrão desloca no máximo 12 px.
- Cascata usa até seis itens, com passo de 60 ms.
- No máximo um fundo animado por página, e somente se representar sinal real, como espectro de áudio,
  forma de onda ou matriz de vídeo.
- Motion reforça causa, hierarquia ou mudança de estado; nunca serve apenas para “dar vida”.
- Conteúdo crítico já existe e está visível no HTML. Animação não monta nem bloqueia texto.
- Respeite `prefers-reduced-motion` sem perda de conteúdo ou função.

## 5. Linguagem de página

### 5.1 Anatomia recomendada, não template fixo

Defina a arquitetura pela intenção de busca e pela jornada do usuário. Uma página pode conter:

- cabeçalho e orientação de navegação;
- abertura com H1 claro, proposição específica, evidência e CTA coerente;
- explicação do problema ou contexto operacional;
- solução, arquitetura ou processo;
- dados técnicos, integrações, normas e restrições quando houver fonte real;
- projetos, fotografias, documentos ou outras provas verificáveis;
- próximos passos, formulário ou contato;
- rodapé com orientação institucional e legal.

Não repita essa sequência mecanicamente. Uma página de solução, setor, case, insight e contato deve ter
estrutura própria. Alterne densidade, largura, superfície e ritmo segundo o conteúdo.

### 5.2 Evitar aparência de template ou IA

- Não repita “três cartões com ícone, título e parágrafo” como solução universal.
- Não numere toda seção como 01/02/03; use numeração apenas quando ela comunicar ordem real.
- Não centralize tudo nem force simetria em todas as páginas.
- Não use frases vagas, superlativos ou promessas sem prova.
- Não crie estatísticas, clientes, certificações, depoimentos, SLAs ou resultados fictícios.
- Não use glassmorphism, glow, 3D, gradientes, excesso de pílulas ou cards aninhados por hábito.
- Prefira informação exclusiva da ATIV: topologia, especificação, processo, restrição, documentação,
  fotografia de obra e decisão de engenharia.

### 5.3 Conteúdo e CTA

- Escreva em português técnico, claro, executivo e comercial.
- Um heading deve antecipar o conteúdo; evite slogans que não informam.
- Um CTA descreve a ação e o resultado: “Solicitar avaliação técnica” é melhor que “Saiba mais”.
- Não use mais CTAs primários do que a hierarquia consegue sustentar.
- Claims comerciais exigem fonte ou registro; marque explicitamente estimativas e objetivos.
- Conteúdo SEO responde intenção real, sem keyword stuffing, doorway pages ou duplicação superficial.
- Preserve slugs, canonicals, metadados e URLs conforme `seo/` e `docs/seo-migration.md`.

## 6. Componentes e implementação

Reutilize primeiro o vocabulário de `ativ-ui.css`:

- superfícies e cartão;
- título de página, título de seção, texto, rótulo e dado;
- botões primário, secundário, fantasma, desativado e de ícone;
- controle segmentado;
- campo, busca e dropdown;
- toggle, radio, checkbox e slider;
- paginação, chip, status, badge, divisor e link;
- logo, foco, salto para conteúdo, seção, container, grade, pilha, linha e medida;
- movimento, entrada, cascata e iconografia.

Use classe para componentes repetidos. Um `id` só pode aparecer uma vez na página e fica reservado a
instâncias únicas ou relações semânticas.

Primitives de Radix ou shadcn/ui podem resolver comportamento e acessibilidade, mas não definem a
aparência. Restilize integralmente com tokens ATIV. Prefira Server Components e HTML nativo; adicione
JavaScript cliente somente onde houver interação real.

## 7. Áreas ainda não fechadas

O design guide identifica lacunas. Não trate exemplos incompletos como norma final:

- navegação global, submenu, condensação mobile e breadcrumb;
- formulário completo com validação, estados vazios, carregamento, erro e sucesso;
- modal, gaveta e outros feedbacks complexos;
- vocabulário de dado técnico: especificação, medidor, norma, tolerância e diagrama de sinal;
- direção fotográfica detalhada;
- padrões editoriais longos, citação, nota, legenda e conteúdo rico;
- iconografia proprietária futura.

Quando uma página precisar de uma dessas famílias:

1. procure requisitos e ativos reais no repositório;
2. use HTML nativo ou primitive acessível como base comportamental;
3. aplique somente tokens existentes;
4. documente estados, responsividade, teclado e leitura por tecnologia assistiva;
5. apresente a proposta como extensão do sistema, não como norma já aprovada;
6. não introduza o novo padrão no CSS mestre sem revisão.

A decisão vigente para ícones de interface continua sendo Lucide até aprovação explícita de uma
família proprietária.

## 8. Acessibilidade obrigatória

- Meta WCAG 2.2 AA.
- `.ativ-salto` é o primeiro elemento tabulável e aponta para o `<main>`.
- Toda função é operável por teclado, com ordem de foco lógica e foco visível.
- Preserve o anel canônico de 3 px com folga de 2 px; nunca remova `outline` sem equivalente.
- Alvo interativo mínimo de 44×44 px em todos os breakpoints.
- Use elementos nativos antes de ARIA; ARIA não corrige semântica errada.
- Campos têm `label`, instruções, erro associado e confirmação compreensível.
- Estados não dependem apenas de cor.
- Verifique contraste real nas duas superfícies e sobre imagens.
- Modais controlam foco, fecham por Escape quando apropriado e devolvem foco ao acionador.
- Carrossel, autoplay ou movimento contínuo exige controle; prefira não usá-los.

## 9. Responsividade, desempenho e SEO técnico

Valide pelo menos mobile estreito, tablet e desktop, incluindo zoom de 200%:

- nenhum overflow horizontal;
- headings e CTAs não colidem;
- tabelas têm estratégia legível sem ocultar informação essencial;
- mídia não causa layout shift;
- navegação e controles continuam operáveis;
- hierarquia se mantém quando a grade vira uma coluna.

Metas de desempenho:

- LCP ≤ 2,5 s no percentil relevante de campo;
- INP < 200 ms;
- CLS < 0,1;
- Server Components por padrão;
- JavaScript cliente, fontes e mídia minimizados;
- WebGL/Three.js apenas com justificativa, lazy-load e fallback.

Toda página indexável deve ter `title`, description, canonical, H1 único, Open Graph e schema adequado.
Conteúdo importante deve existir no HTML renderizado. Não altere URL, canonical, redirect, robots ou
indexação sem consultar a documentação SEO e o inventário de URLs.

## 10. Fluxo obrigatório de trabalho

1. Leia as fontes de verdade e identifique o item do roadmap.
2. Consulte intenção, keyword map, inventário de URL e regras de migração.
3. Liste conteúdo real, claims, mídia e evidências disponíveis.
4. Defina objetivo, público, ação principal e critério de aceite da página.
5. Faça um esqueleto sem estilo e valide hierarquia semântica.
6. Mapeie cada decisão visual para token, classe ou componente existente.
7. Declare lacunas antes de criar padrões novos.
8. Implemente mobile-first, com conteúdo crítico no servidor.
9. Verifique teclado, foco, contraste, reduced motion, zoom, overflow e estados.
10. Rode lint, typecheck, testes, build e verificações de acessibilidade aplicáveis.
11. Revise metadata, canonical, schema, links e tracking.
12. Compare o resultado com esta instrução e remova sinais de template genérico.

## 11. Critérios de reprovação

Reprove a entrega se houver qualquer um destes itens sem justificativa e aprovação:

- hex, espaçamento, raio, duração ou curva arbitrária em componente;
- cor ou fonte fora do sistema;
- Âmbar como texto sobre fundo claro;
- preto puro, gradiente decorativo ou glow;
- logo alterado ou variante inadequada ao fundo;
- biblioteca de ícones diferente de Lucide ou uso de emoji como UI;
- conteúdo crítico dependente de JavaScript ou animação;
- heading fragmentado para motion;
- controle abaixo de 44 px, sem foco ou inacessível por teclado;
- fotografia stock apresentada como realidade da ATIV;
- claim, dado técnico, cliente ou resultado sem evidência;
- cards genéricos usados para preencher espaço;
- layout repetitivamente centralizado e simétrico;
- estado interativo sem loading, erro, vazio ou sucesso quando aplicável;
- regressão de URL, metadata, canonical, performance ou acessibilidade;
- novo padrão visual não documentado no sistema.

## 12. Relatório de conclusão do agente

Ao entregar uma página, informe objetivamente:

- objetivo e rota;
- fontes e evidências usadas;
- componentes e tokens reutilizados;
- decisões visuais específicas e por que servem ao conteúdo;
- comportamento em mobile, tablet e desktop;
- testes executados;
- impacto de acessibilidade, desempenho, SEO e tracking;
- lacunas ou propostas que ainda exigem aprovação;
- riscos e forma de rollback.

O resultado está pronto somente quando parece uma expressão particular da engenharia audiovisual da
ATIV, funciona sem artifícios, preserva o sistema de marca e passa pelos gates técnicos do projeto.
