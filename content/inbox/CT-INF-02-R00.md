# Setor estabilizado vs. não estabilizado: critério de alocação de cargas AV em UPS

**ID:** CT-INF-02-R00 | **Marca:** ATIV | **Pilar:** INF | **Formato:** Artigo técnico
**Meta description candidata (150 car.):** Nem toda carga AV precisa de nobreak. Como classificar o que exige alimentação sem corte e o que só precisa de energia estabilizada.
**Palavras-chave candidatas:** setor estabilizado AV, UPS nobreak sala técnica, alocação de carga crítica, NBR 5410 alimentação de segurança, dimensionamento UPS AV

---

## 1. DOR

Um erro de dimensionamento recorrente: todo equipamento do rack — DSP, matriz, gravador, iluminação de cortesia, ventilador de rack, tomada de manutenção — entra no mesmo circuito de UPS, "porque está tudo no mesmo rack". O resultado é um UPS superdimensionado por incluir cargas que nunca precisaram de bateria, ou — pior — subdimensionado, porque a capacidade real acabou consumida por cargas não críticas, deixando pouca margem para o que efetivamente precisa de continuidade durante uma falta de energia.

O problema de fundo é tratar "alimentação de qualidade" como uma única categoria, quando na verdade existem necessidades técnicas bem diferentes: alguns equipamentos só precisam de energia limpa e estável (sem picos, sem harmônicos); outros precisam de continuidade sem interrupção perceptível, porque uma queda de energia de até um segundo já compromete a sessão em andamento.

## 2. IMPACTO

- **UPS superdimensionado:** incluir cargas não críticas (iluminação, ventilação, tomadas de manutenção) no setor de bateria infla capacidade e custo sem necessidade técnica real.
- **UPS subdimensionado na prática:** mesmo com capacidade nominal aparentemente suficiente, cargas não críticas consomem parte da autonomia de bateria que deveria estar reservada para o equipamento que realmente não pode cair.
- **Interrupção de sessão em andamento:** em salas de audiência, plenários e transmissões ao vivo, uma queda momentânea de energia em equipamento mal classificado pode interromper uma gravação ou streaming com valor probatório ou institucional, sem possibilidade de refazer o momento perdido.

## 3. SOLUÇÃO

Classificar cada carga do projeto pela tolerância real a interrupção — não pela localização física no rack — usando um critério objetivo de tempo de comutação, e alocar apenas as cargas que exigem continuidade sem corte perceptível ao setor de UPS/nobreak, deixando cargas tolerantes a interrupção breve ou média em circuito estabilizado sem bateria, quando aplicável.

## 4. METODOLOGIA

### 4.1 Estabilizador e nobreak não são a mesma coisa

O erro de tratar "proteção elétrica" como categoria única começa na confusão entre dois equipamentos com funções distintas. Um material de referência técnica descreve a diferença central: <cite index="1-1">o estabilizador estabilizará a energia de forma contínua e repassará esta energia limpa aos equipamentos — os estabilizadores não possuem baterias de armazenamento de corrente, porém, em falta de energia por parte da rede pública, o sistema será comprometido</cite>. Já o nobreak resolve um problema diferente: <cite index="1-1">os nobreaks possuem bancos de baterias, para que em momentos de falta de energia, repassem para os equipamentos a energia acumulada em suas baterias de forma automática, sem que o usuário perceba</cite>.

Essa diferença é a base de toda a decisão de alocação: setor estabilizado protege contra qualidade ruim de energia (picos, ruído, variação de tensão), mas não sobrevive a uma queda total de energia; setor de UPS/nobreak protege contra ambos, ao custo de capacidade de bateria limitada e finita.

### 4.2 O critério objetivo de classificação: tempo de comutação tolerável

A norma brasileira de instalações de baixa tensão já formaliza uma classificação por tempo de interrupção tolerável para sistemas de alimentação de serviços de segurança — um critério diretamente aplicável, por analogia técnica, à classificação de cargas AV por criticidade. A norma classifica sistemas automáticos de alimentação em cinco categorias pela duração da comutação: <cite index="2-1">sem corte — alimentação automática que pode ser garantida de modo contínuo nas condições especificadas durante o período de transição; com corte muito breve — alimentação automática disponível em até 0,15 s; com corte breve — disponível em até 0,5 s; com corte médio — disponível em até 15 s; e com corte longo — alimentação automática disponível em mais de 15 s</cite>.

Aplicando essa mesma lógica de classificação a um projeto AV: equipamento de processamento de sessão ativa (DSP em uso, gravador capturando conteúdo com valor probatório, streaming ao vivo) se comporta como carga "sem corte" — qualquer interrupção, mesmo de frações de segundo, corrompe o dado ou interrompe a sessão de forma irrecuperável. Já iluminação de cortesia, ventilação de rack não crítica, ou tomada de manutenção toleram corte médio ou longo sem prejuízo funcional ao evento em andamento.

### 4.3 Critério prático de alocação por tipo de carga

| Categoria de carga | Tolerância a interrupção | Alocação recomendada |
|---|---|---|
| DSP/processador central em sessão ativa | Sem corte | UPS/nobreak dedicado, dimensionado pela autonomia real necessária |
| Gravador/streaming de sessão com valor probatório ou institucional | Sem corte | UPS/nobreak dedicado — interrupção não é recuperável |
| Matriz de vídeo, switcher, codec de videoconferência em uso | Sem corte a corte muito breve | UPS/nobreak |
| Rede (switches Q-LAN/controle) que sustenta os itens acima | Sem corte | UPS/nobreak — rede caída derruba os equipamentos "sem corte" mesmo que estes tenham energia própria |
| Displays e monitores de exibição | Corte breve a médio, conforme tolerância da sessão | Setor estabilizado; avaliar UPS apenas se a interrupção visual for inaceitável para o caso de uso |
| Iluminação de cortesia, ventilação não crítica de rack | Corte médio a longo | Setor estabilizado, sem necessidade de bateria |
| Tomadas de manutenção/serviço | Corte longo | Circuito comum, sem estabilização dedicada |

O item de rede merece atenção redobrada: é comum dimensionar UPS para o DSP e esquecer que o switch que conecta esse DSP à rede Q-LAN também precisa estar no mesmo setor sem corte — um DSP alimentado por nobreak conectado a um switch sem proteção equivalente perde comunicação com o restante do sistema no mesmo instante em que a rede cai, mesmo com o processador continuando ligado.

### 4.4 Por que isso não é apenas questão de orçamento, é questão de dimensionamento de autonomia

Definir com precisão quais cargas entram no setor sem corte também determina o cálculo de autonomia de bateria do UPS — a mesma capacidade nominal (kVA) sustenta uma autonomia maior quando aplicada a menos cargas, ou uma autonomia menor quando cargas não críticas são incluídas desnecessariamente. Esse é o motivo técnico, não apenas o motivo de custo, para não simplificar a decisão como "tudo no mesmo rack entra no nobreak" — a inclusão de cargas não críticas reduz diretamente o tempo que o equipamento realmente crítico permanece operacional durante uma falta de energia prolongada.

## 5. PROVA

- Diferença funcional entre estabilizador (sem bateria, comprometido em falta total de energia) e nobreak (com banco de baterias, continuidade automática) — fato técnico documentado em material de referência técnica (Cabeamento Estruturado, SENAI).
- Classificação formal de sistemas de alimentação por tempo de comutação (sem corte, corte muito breve ≤0,15s, corte breve ≤0,5s, corte médio ≤15s, corte longo >15s) — norma consolidada (ABNT NBR 5410), originalmente aplicada a sistemas de alimentação para serviços de segurança, adotada aqui por analogia técnica para classificação de cargas AV.

## 6. CTA

Antes de dimensionar o UPS de uma sala AV, a ATIV recomenda classificar formalmente cada carga do projeto pela tolerância real a interrupção — usando o critério de tempo de comutação da NBR 5410 como referência — e alocar ao setor sem corte apenas o que efetivamente não tolera interrupção, incluindo explicitamente a rede que sustenta os equipamentos críticos.

---

## Boas práticas

- Classificar cada carga do projeto por tolerância a interrupção antes de definir o setor de alimentação, não por localização física no rack.
- Incluir o switch de rede que sustenta os equipamentos críticos no mesmo setor sem corte desses equipamentos — energia isolada sem rede íntegra não sustenta a sessão.
- Reservar o setor estabilizado sem bateria para cargas que toleram corte médio ou longo, evitando inflar a capacidade de UPS com itens não críticos.
- Documentar formalmente, no memorial descritivo, qual critério de tempo de comutação justificou a alocação de cada carga — não deixar essa decisão implícita.
- Recalcular a autonomia real do UPS considerando apenas as cargas efetivamente alocadas ao setor sem corte, não a capacidade nominal teórica do equipamento.

## Normas aplicáveis

- ABNT NBR 5410 — instalações elétricas de baixa tensão, classificação de sistemas de alimentação elétrica por tempo de comutação (item 4.6, aplicado por analogia técnica).

## Verificações antes da implementação

- Levantar, para cada equipamento do projeto, se uma interrupção de até 0,15s, 0,5s, 15s ou mais de 15s é aceitável para a função exercida durante uma sessão em andamento.
- Confirmar que toda a cadeia de rede que sustenta um equipamento "sem corte" está no mesmo setor de alimentação — não apenas o equipamento final.
- Recalcular a autonomia de bateria do UPS considerando exclusivamente as cargas classificadas como sem corte, documentando a memória de cálculo.
- Verificar se cargas atualmente alocadas ao setor de UPS realmente exigem essa classificação, ou se podem migrar para setor estabilizado sem bateria.

---

## Fontes e rastreabilidade

**Fato técnico (DOC-19 — Cabeamento Estruturado, material de referência SENAI/NBR 14565):**
- Diferença funcional entre estabilizador e nobreak.

**Requisito normativo (DOC-16 — ABNT NBR 5410, Instalações Elétricas de Baixa Tensão):**
- Classificação de sistemas de alimentação elétrica por tempo de comutação (sem corte, corte muito breve, breve, médio, longo) — aplicada originalmente a sistemas de alimentação para serviços de segurança, adotada neste artigo por analogia técnica para classificação de cargas AV por criticidade de continuidade.

**Recomendação da ATIV (boa prática de engenharia aplicada, não normativa):**
- Critério prático de alocação por tipo de carga (seção 4.3) e ênfase na inclusão da cadeia de rede no setor sem corte (seção 4.3–4.4) — consolidação própria a partir da norma citada, coerente com a prática já adotada em projetos ATIV de definição formal de setor estabilizado vs. não estabilizado em memorial descritivo.

**Observação de aplicabilidade:** a classificação por tempo de comutação da NBR 5410 é definida na norma para sistemas de alimentação de serviços de segurança — sua aplicação a cargas AV neste artigo é uma extensão técnica por analogia, não uma citação direta de requisito normativo específico para audiovisual; validar com engenheiro eletricista responsável antes de uso formal em projeto executivo.

---

*© 2026 Grupo ATIV — Documento interno. CT-INF-02-R00.*
