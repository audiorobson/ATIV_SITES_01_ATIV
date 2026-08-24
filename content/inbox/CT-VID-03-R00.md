# Dimensionamento de displays por distância e tipo de conteúdo (ANSI/AVIXA V202.01)

**ID:** CT-VID-03-R00 | **Marca:** ATIV | **Pilar:** VID | **Formato:** Guia de referência
**Meta description candidata (150 car.):** "55 polegadas serve" não é critério técnico. Como calcular o tamanho de display certo pela distância do espectador e pelo tipo de conteúdo exibido.
**Palavras-chave candidatas:** dimensionamento display AVIXA, ANSI INFOCOMM V202.01, tamanho tela auditório, distância visualização projeção, BDM ADM display

---

## 1. DOR

A escolha do tamanho de display em projetos institucionais costuma seguir um critério informal: "a sala é grande, então bota uma tela de 85 polegadas" ou "o orçamento permite até X polegadas, então especifica isso". Nenhum dos dois é critério técnico — e o resultado mais comum é sub ou superdimensionamento silencioso: participantes das últimas fileiras de um plenário não conseguem ler texto de uma pauta projetada, ou um perito não consegue examinar detalhe de uma imagem pericial em um monitor tecnicamente "grande o suficiente" para a sala, mas pequeno demais para o tipo de conteúdo que precisa exibir.

O problema de fundo é tratar "tamanho de display" como uma única variável, quando na verdade é o resultado de duas variáveis específicas: a distância do espectador mais distante e mais próximo, e o tipo de decisão que aquele espectador precisa tomar a partir do conteúdo exibido.

## 2. IMPACTO

- **Ilegibilidade em pontos previstos de uso:** conteúdo que precisa ser lido — pauta, ata, documento, imagem pericial — torna-se ilegível exatamente nas posições onde a sala foi projetada para acomodar pessoas, gerando reclamação recorrente e descrédito do projeto.
- **Superdimensionamento desnecessário:** o oposto também é custo real — especificar resolução ou tamanho maior do que qualquer espectador da sala consegue efetivamente aproveitar é orçamento mal alocado.
- **Falha de critério em disputa técnica:** sem um método de cálculo documentado, uma reclamação de "a tela é pequena" não tem contraponto técnico objetivo — vira debate de opinião entre integrador e cliente.

## 3. SOLUÇÃO

Aplicar a metodologia formal de dimensionamento de imagem por distância e tipo de conteúdo, que separa dois cenários de uso — decisão básica e decisão analítica — cada um com fórmula própria de distância mínima e máxima de visualização. Essa metodologia converte "a tela parece do tamanho certo" em um cálculo verificável, documentável e defensável.

## 4. METODOLOGIA

### 4.1 As duas categorias de visualização

A norma de referência do setor para dimensionamento de imagem define dois perfis de espectador com necessidades de detalhe completamente diferentes. Para o primeiro perfil: <cite index="0-2">o espectador consegue tomar decisões básicas a partir da imagem exibida — as decisões não dependem de detalhes críticos dentro da imagem, mas o espectador consegue assimilar e reter informação, estando ativamente engajado com o conteúdo (por exemplo, displays informativos, apresentações com imagens detalhadas, salas de aula, salas de diretoria, salas multiuso, ilustrações de produto)</cite>, com decisões tomadas <cite index="0-2">pela compreensão do conteúdo informacional em si, não dependentes da resolução de cada elemento de detalhe</cite>.

Para o segundo perfil, o requisito é substancialmente mais exigente: <cite index="0-2">o espectador está totalmente engajado com o detalhe mínimo presente no conteúdo e precisa conseguir resolver cada elemento da imagem exibida — ambientes de decisão analítica sustentam avaliações críticas, incluindo, mas não se limitando a, exame de imagem médica, belas artes, desenhos de engenharia ou arquitetura, esquemas elétricos, inspeção de imagem fotográfica, evidência forense ou análise de falha</cite>.

A diferença de exigência entre as duas categorias também aparece no critério de contraste mínimo: <cite index="2-1">Decisão Básica exige contraste mínimo de 15:1, enquanto Decisão Analítica exige contraste mínimo de 50:1</cite> — uma diferença que por si só já orienta a escolha de tecnologia de exibição, não apenas o tamanho da tela.

### 4.2 O que muda na prática entre as duas categorias

Não é apenas uma questão de "mais detalhe é melhor" — as duas categorias pressupõem ambientes de uso diferentes. A norma detalha: <cite index="2-1">ambiente de decisão básica é tipicamente um ambiente de escritório comum, salas de reunião, salas de aula, com luz ambiente imprevisível e possível iluminação de tarefa</cite>, enquanto <cite index="2-1">ambiente de decisão analítica exige ambiente altamente controlado, luz ambiente controlada, iluminação de tarefa focada, sem luz ambiente afetando diretamente a tela, com tratamento de blackout nas janelas</cite>. Especificar um display de altíssima resolução para decisão analítica em uma sala com luz ambiente não controlada não resolve o requisito — o ambiente físico faz parte do critério de dimensionamento, não só a tela.

### 4.3 Conceitos-chave do cálculo: espectador mais próximo e mais distante

O método formal de cálculo trabalha com dois limites de posição do espectador, não apenas a distância máxima. A norma define <cite index="4-1">Distância do Espectador Mais Próximo como a distância horizontal entre a imagem exibida e o espectador</cite>, e <cite index="4-1">Distância do Espectador Mais Distante como o espectador posicionado na distância mais distante da tela, conforme definida pela área de visualização</cite>, sendo a <cite index="4-1">Área de Visualização Conforme a área delimitada pelos cálculos de espectador mais próximo e mais distante, em conformidade para visualização do conteúdo especificado</cite>.

Para decisão analítica especificamente, há uma restrição adicional de ângulo horizontal que a decisão básica não tem: <cite index="1-1">a Distância do Espectador Mais Próximo para Decisão Analítica é determinada por uma restrição de ângulo de visualização tal que nenhuma posição de visualização no plano horizontal exceda 60 graus em qualquer parte da imagem exibida, garantindo que espectadores nas posições mais amplas consigam visualizar adequadamente a imagem inteira</cite>.

### 4.4 Regra prática de referência — múltiplo da altura da tela

Para dimensionamento rápido em campo, antes do cálculo formal completo, um guia de referência aplicado especificamente a ambientes institucionais (salas de audiência e tribunais) traduz a lógica das duas categorias em uma regra prática de múltiplo da altura da tela: <cite index="3-1">para decisão básica, a fórmula é altura da tela multiplicada por um fator de 6 — se a altura da tela é 0,5 m, o espectador não deve estar muito além de 3,5 m de distância</cite>; <cite index="3-1">para decisão analítica, a fórmula é altura da tela multiplicada por um fator de 4 — se a altura da tela é 2 m, o espectador não deve estar muito além de 7 m de distância</cite>.

O mesmo guia observa uma limitação prática recorrente em salas com múltiplos tipos de espectador nas mesmas posições — como uma sala de audiência, onde juiz, testemunha e júri têm papéis de decisão diferentes: <cite index="3-1">tentar posicionar um display considerando todas as distâncias possíveis rapidamente se torna impraticável; o resultado é usar o "pior cenário" e projetar as distâncias de visualização para 4 vezes a altura da tela</cite> — ou seja, quando não é possível diferenciar zonas por tipo de decisão, dimensionar pelo critério mais exigente (decisão analítica) é a prática mais segura.

### 4.5 Quando o projeto precisa das duas categorias ao mesmo tempo

Uma sala pode ter requisito misto — parte do público faz decisão básica, outra parte precisa de decisão analítica sobre o mesmo conteúdo. A norma trata esse caso com uma regra de precedência clara: <cite index="5-1">quando os requisitos de visualização exigem tanto Decisão Básica quanto Decisão Analítica, o tamanho da imagem e as distâncias de visualização devem ser determinados pelas fórmulas de Decisão Analítica</cite> — a categoria mais exigente domina o dimensionamento — e, depois desse cálculo, <cite index="5-1">o usuário deve calcular os limites de %Altura de Elemento e Espectador Mais Próximo</cite> para confirmar que o tamanho de tela escolhido também atende à decisão básica sem exagero desnecessário de resolução.

### 4.6 Quadro-resumo de aplicação por tipo de ambiente

| Categoria | Contraste mínimo | Ambiente típico | Regra prática de distância (múltiplo da altura da tela) |
|---|---|---|---|
| Decisão Básica (BDM) | 15:1 | Sala de reunião, sala de aula, plenário informativo, sala multiuso | ~6× altura da tela (distância máxima) |
| Decisão Analítica (ADM) | 50:1 | Perícia, imagem médica, desenho técnico, evidência forense, sala de audiência com exame de prova | ~4× altura da tela (distância máxima), com restrição adicional de 60° no plano horizontal |
| Ambas simultâneas | Segue ADM | Sala de audiência com juiz, testemunha e júri em papéis distintos | Dimensionar pela fórmula ADM; validar %Altura de Elemento para conteúdo de decisão básica |

## 5. PROVA

- Definição formal das categorias Decisão Básica e Decisão Analítica, com critérios de engajamento e ambiente — norma consolidada (ANSI/INFOCOMM V202.01:2016).
- Contraste mínimo de 15:1 (BDM) e 50:1 (ADM) como diferenciador de exigência entre categorias — norma consolidada.
- Conceitos de Distância do Espectador Mais Próximo/Mais Distante e restrição de ângulo de 60° para ADM — norma consolidada.
- Regra de precedência da fórmula ADM quando ambas as categorias se aplicam ao mesmo espaço — norma consolidada.
- Regra prática de múltiplo da altura da tela (6× para BDM, 4× para ADM) — fato técnico documentado em guia de referência para ambientes judiciais (InfoComm, 2013), útil como verificação rápida antes do cálculo formal completo.

## 6. CTA

Antes de especificar o tamanho de um display institucional, a ATIV recomenda classificar formalmente o uso pretendido — decisão básica, decisão analítica, ou ambas — e aplicar o cálculo de distância correspondente, documentando o resultado como critério técnico defensável, não como escolha de "tamanho que parece adequado para a sala".

---

## Boas práticas

- Classificar o uso do display por categoria de decisão (básica, analítica, ou ambas) antes de escolher o tamanho — não depois.
- Quando ambas as categorias coexistirem no mesmo espaço, dimensionar pela fórmula mais exigente (Decisão Analítica) e validar a legibilidade de conteúdo básico como verificação adicional.
- Usar a regra prática de múltiplo da altura da tela (6× BDM, 4× ADM) como checagem rápida em campo, mas confirmar com o cálculo formal completo em projetos com requisito crítico.
- Tratar o ambiente físico (controle de luz, blackout) como parte do requisito de decisão analítica, não como item independente do dimensionamento de display.
- Documentar a área de visualização conforme (posições de espectador mais próximo e mais distante) em desenho de planta, não apenas em memória de cálculo.

## Normas aplicáveis

- ANSI/INFOCOMM V202.01:2016 — Display Image Size for 2D Content in Audiovisual Systems.
- ANSI/INFOCOMM 3M-2011 — Projected Image System Contrast Ratio (categorias de visualização de origem, referenciadas pela V202.01).

## Verificações antes da implementação

- Confirmar, para cada posição de espectador prevista na sala, qual categoria de decisão (básica ou analítica) se aplica antes de fechar o dimensionamento.
- Validar o ângulo horizontal de visualização (limite de 60°) nas posições mais extremas da sala quando houver requisito de decisão analítica.
- Verificar se o ambiente físico atende ao controle de luz exigido pela categoria de decisão analítica antes de assumir que o display resolverá sozinho o requisito de legibilidade.
- Documentar a área de visualização conforme (planta com posições de espectador mais próximo/mais distante) como parte do memorial descritivo.

---

## Fontes e rastreabilidade

**Requisito normativo (DOC-07 — ANSI/INFOCOMM V202.01:2016, Display Image Size for 2D Content in Audiovisual Systems):**
- Definições das categorias Decisão Básica e Decisão Analítica.
- Critérios de contraste mínimo por categoria (15:1 / 50:1).
- Conceitos de Distância do Espectador Mais Próximo/Mais Distante e Área de Visualização Conforme.
- Restrição de ângulo horizontal de 60° para Decisão Analítica.
- Regra de precedência da fórmula ADM quando ambas as categorias se aplicam.

**Fato técnico (DOC-11 — AV/IT Infrastructure Guidelines for Courts, InfoComm 2013):**
- Regra prática de múltiplo da altura da tela (6× BDM, 4× ADM) como verificação rápida de campo.
- Recomendação de dimensionar pelo "pior cenário" (múltiplo mais exigente) quando não é possível diferenciar zonas de espectador por categoria.

**Observação de aplicabilidade:** a norma de origem é referência voluntária do setor (InfoComm/AVIXA), sem correspondência formal obrigatória na legislação brasileira — sua adoção deve ser tratada como metodologia de boas práticas de engenharia, citável em memorial descritivo como fundamentação técnica, não como exigência normativa nacional.

---

*© 2026 Grupo ATIV — Documento interno. CT-VID-03-R00.*
