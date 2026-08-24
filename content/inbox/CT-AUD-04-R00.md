# DSP único vs. DSPs paralelos: o problema do "split-brain" em sistemas Dante

**ID:** CT-AUD-04-R00 | **Marca:** ATIV | **Pilar:** AUD | **Formato:** Artigo técnico
**Meta description candidata (154 car.):** Por que dois DSPs disputando roteamento e clock em uma rede Dante causam glitches intermitentes, e como posicionar corretamente um processador secundário.
**Palavras-chave candidatas:** split-brain Dante, DSP paralelo Dante, clock master Dante, Q-SYS expansor Dante, arquitetura DSP AV, PTP grandmaster áudio

---

## 1. DOR

Um sintoma recorrente em sistemas de áudio Dante já instalados: glitches intermitentes, canais que somem por frações de segundo, ou um processo de resync perceptível sempre que um equipamento específico é ligado ou reiniciado. O padrão de diagnóstico costuma seguir o mesmo roteiro — verificação de cabo, verificação de switch, verificação de firmware — até que alguém finalmente audita o Dante Controller (ou a topologia de clock equivalente) e encontra dois dispositivos capazes de assumir o papel de referência de clock na mesma rede, ambos configurados como se fossem a única autoridade do sistema.

Isso normalmente acontece quando um segundo DSP é adicionado ao projeto — geralmente para resolver falta de I/O — e é configurado como se fosse um processador paralelo ao principal, roteando e processando áudio por conta própria, em vez de atuar como uma simples extensão de entradas e saídas do processador principal.

## 2. IMPACTO

Um sistema com dois DSPs disputando autoridade de processamento e clock apresenta impacto técnico específico, não apenas "instabilidade genérica":

- **Contenção de clock:** em redes de áudio sobre IP baseadas em PTP, mais de um dispositivo elegível a se tornar referência de tempo (grandmaster) gera disputas de eleição que se manifestam como glitches, artefatos de sincronismo ou resync audível toda vez que a eleição é refeita.
- **Roteamento ambíguo:** quando dois DSPs processam e roteiam áudio de forma independente, a mesma cadeia de sinal pode ser modificada em dois pontos diferentes sem que nenhum dos dois "veja" a alteração feita pelo outro — o que torna o troubleshooting extremamente lento, porque o comportamento observado depende de qual DSP processou o sinal por último.
- **Documentação inviável:** um as-built não consegue descrever com precisão uma cadeia de sinal quando ela pode ser alterada por dois pontos de controle distintos e não coordenados entre si.

## 3. SOLUÇÃO

A regra de arquitetura que a ATIV aplica é simples de enunciar e criteriosa de manter: **um único DSP é o cérebro do sistema — todo processador adicional é um expansor de I/O, nunca um segundo ponto de processamento e roteamento independente.** Isso significa que um DSP secundário pode legitimamente entregar canais Dante adicionais à rede, mas o ganho, o roteamento, o AEC, os mixes e a lógica de controle continuam centralizados no processador principal.

Essa regra decorre diretamente de como os protocolos de áudio sobre IP tratam a questão de autoridade de clock e de como plataformas de processamento como Q-SYS são desenhadas para operar com um núcleo de design único.

## 4. METODOLOGIA

### 4.1 Por que "quem manda no clock" não pode ter mais de uma resposta

Redes de áudio (e vídeo) sobre IP baseadas em PTP operam sob um princípio estrutural: <cite index="1-1">tanto AES67 quanto SMPTE ST 2110 utilizam o IEEE 1588-2008 Precision Time Protocol (PTPv2) para distribuição do clock de referência</cite>. O ponto crítico é que a eleição de quem exerce esse papel não é arbitrária, e os padrões tratam essa eleição de forma diferente entre si: <cite index="1-1">o ST 2110 exige a presença de um método ou controle que permita a um administrador forçar o dispositivo a operar em modo escravo (slave-only), configurando o parâmetro defaultDS.slaveOnly como verdadeiro, de modo que o dispositivo nunca tente se tornar Grandmaster eleito — o AES67 não tem essa exigência, e dispositivos AES67 sem essa capacidade de configuração dependem exclusivamente do Best Master Clock Algorithm (BMCA) do IEEE 1588-2008 para decidir se devem se tornar Grandmaster da rede</cite>.

Isso tem uma consequência prática direta para projetos com mais de um DSP: se nenhum dos dois dispositivos for explicitamente forçado a operar apenas como escravo, ambos podem, por padrão de fábrica, se candidatar à eleição de Grandmaster via BMCA — e o resultado da eleição passa a depender de parâmetros de prioridade que raramente são verificados em campo. A referência técnica confirma que esses parâmetros existem exatamente para isso: <cite index="1-1">um valor adequadamente alto pré-configurado nos campos defaultDS.priority1 e/ou defaultDS.clockQuality.clockClass se traduzirá em uma posição de ranking BMCA muito baixa, resultando em um papel de escravo PTP na presença de um dispositivo Grandmaster dedicado ou mais adequado</cite> — ou seja, a hierarquia de clock não é automática por natureza do equipamento, é uma configuração que precisa ser deliberadamente estabelecida e verificada.

### 4.2 O que acontece quando um dispositivo opera fora do domínio de clock comum

A mesma referência documenta o cenário de falha mais silencioso: um dispositivo operando em clock local/interno em vez do clock de referência distribuído. <cite index="1-1">nesse estado, o dispositivo sinaliza essa condição usando o token "localmac" no SDP do stream de saída, identificado pelo endereço MAC do dispositivo — como esse é um token privado não definido na RFC de referência (RFC 7273), um dispositivo AES67 pode não conseguir interpretar essa informação; receptores AES67 tendem a reagir não reconhecendo a referência de clock e simplesmente não tentando se conectar a esse stream</cite>.

Traduzido para diagnóstico de campo: um DSP secundário mal configurado que "decide" operar em clock local, em vez de seguir a referência do DSP principal, não necessariamente gera um erro visível — pode simplesmente resultar em um stream que outros dispositivos da rede se recusam a reconhecer, um sintoma que se apresenta como "canal que não aparece" e não como falha de clock propriamente dita.

### 4.3 Como cada dispositivo gera seu próprio clock de mídia — e por que isso exige uma única referência

O mecanismo de sincronismo em si reforça por que a autoridade de clock precisa ser única: <cite index="4-1">dispositivos (emissores e receptores) mantêm uma cópia do clock de referência em seus clocks locais; a partir daí, geram de forma independente os clocks de mídia necessários — os clocks de mídia devem estar alinhados ao clock de referência para compartilhar a mesma época e avançar a uma taxa exata em relação a ele; um dispositivo pode gerar qualquer clock de mídia que precisar (48 kHz, 96 kHz etc.), mas todos devem estar alinhados dessa forma</cite>.

Esse detalhe explica por que "os dois DSPs estão tocando áudio normalmente" não é evidência de que a arquitetura está correta — cada dispositivo gera seu próprio clock de mídia localmente; o problema só se manifesta quando as referências de tempo dos dois DSPs divergem, o que pode levar semanas para acontecer de forma perceptível, dependendo da estabilidade dos dois osciladores locais e de eventos de rede (reinicialização, falha de link, mudança de topologia).

### 4.4 Redundância de clock é diferente de dois centros de processamento

É importante não confundir o problema descrito aqui com redundância de clock legítima, que é um padrão de projeto desejável, não um erro. Um switch AV-ready documenta esse padrão corretamente implementado: em um perfil com redundância de clock configurado, <cite index="2-1">por padrão, o switch em modo A é o grandmaster clock e o switch em modo B é o backup do grandmaster clock</cite> — ou seja, existe uma hierarquia explícita e documentada entre os dois papéis, não uma disputa aberta. A diferença entre essa configuração e o "split-brain" descrito neste artigo é justamente a hierarquia declarada: um dispositivo é primário, o outro é backup, e essa relação está definida na configuração, não decidida por eleição implícita entre pares supostamente equivalentes.

### 4.5 Como uma plataforma de DSP único sinaliza a saúde de um sistema com hardware distribuído

Plataformas de processamento centralizado — nas quais um núcleo de design único gerencia hardware distribuído em rede — fornecem visibilidade justamente para o cenário que este artigo descreve: hardware adicional que faz parte do mesmo sistema, não de um sistema paralelo. O guia de hardware de um processador de referência documenta os estados de status do design justamente para essa finalidade: <cite index="3-1,3-2">"Compromised" indica que o áudio está bom, mas um mecanismo de redundância está ativo (uma rede caiu, a outra segue ativa) ou existe um problema de hardware não fatal; "Fault" indica que o áudio não está passando ou que o hardware está com mau funcionamento ou mal configurado; "Missing" indica que uma peça de hardware definida no design não foi descoberta, e o áudio não está passando por essa peça de hardware</cite>.

Esses três estados só fazem sentido em uma arquitetura onde existe um único design governando todo o hardware — incluindo o hardware "expansor". Quando um segundo DSP roda seu próprio design independente, esse tipo de visibilidade centralizada deixa de existir: uma falha no processador secundário não aparece como "Fault" ou "Missing" no sistema principal, porque, do ponto de vista do design principal, aquele hardware nunca fez parte do mesmo sistema.

### 4.6 Onde entra o DSP secundário, corretamente posicionado

A conclusão prática não é "nunca usar um segundo processador" — é usá-lo com o papel certo. Um DSP secundário corretamente posicionado:

- entrega canais Dante adicionais à rede (expansão de I/O analógico/digital);
- não processa ganho, EQ, AEC ou mix de forma independente do DSP principal;
- não é candidato a Grandmaster PTP, ou está explicitamente configurado como slave-only quando o padrão em uso permite essa configuração;
- aparece no as-built e no design do processador principal como hardware gerenciado, não como sistema paralelo documentado à parte.

Esse é o motivo pelo qual a ATIV trata unidades de processamento adicionais como expansores de I/O Dante — nunca como mixers paralelos — em qualquer projeto onde exista um processador central definido: a arquitetura de clock e de roteamento só permanece auditável, redundante de forma intencional e sustentável em manutenção quando há uma única autoridade de processamento.

## 5. PROVA

- Exigência de modo slave-only forçável no ST 2110 e ausência dessa exigência no AES67 (dependência do BMCA) — fato técnico documentado em white paper de interoperabilidade AES67/SMPTE ST 2110 (Alliance for IP Media Solutions, 2019).
- Parâmetros priority1/clockClass como mecanismo de controle de ranking BMCA — fato técnico documentado na mesma referência.
- Sinalização de clock local via token "localmac" no SDP e comportamento de não reconhecimento por receptores AES67 — fato técnico documentado na mesma referência.
- Geração independente de clock de mídia por dispositivo, exigindo alinhamento a uma única referência — fato técnico documentado na mesma referência (Apêndice B).
- Redundância de clock com hierarquia explícita (grandmaster/backup) como padrão de projeto documentado por fabricante — fato técnico documentado em manual de switch AV-ready.
- Estados de status "Compromised/Fault/Missing" como mecanismo de visibilidade de hardware distribuído sob um único design — fato técnico documentado no guia de hardware do processador de referência.

## 6. CTA

Antes de adicionar um segundo processador a um sistema Dante ou AES67 existente — seja por falta de I/O, seja por expansão de projeto — a ATIV recomenda uma auditoria de topologia de clock (Dante Controller ou equivalente) para confirmar qual dispositivo é a única autoridade de Grandmaster e garantir que qualquer hardware adicional entre como expansor gerenciado, não como processador independente.

---

## Boas práticas

- Definir, em projeto, qual dispositivo é a autoridade única de Grandmaster PTP antes de instalar qualquer DSP adicional.
- Forçar explicitamente o modo slave-only em processadores secundários sempre que o padrão em uso permitir essa configuração.
- Verificar priority1/clockClass em todos os dispositivos PTP-capazes da rede, não apenas no processador principal.
- Tratar qualquer DSP adicional como expansor de I/O gerenciado pelo design principal — nunca como sistema de processamento paralelo com lógica própria.
- Auditar a topologia de clock (Dante Controller ou ferramenta equivalente) após qualquer adição de hardware à rede de áudio, não apenas na comissionamento inicial.

## Normas aplicáveis

- IEEE 1588-2008 (PTPv2) — protocolo de sincronização de clock de precisão.
- AES67 — perfil PTP Default e perfil de mídia AES67 (Anexo A).
- SMPTE ST 2059-2 — perfil PTP exigido pelo ST 2110.
- RFC 7273 — sinalização de referência de clock em SDP.

## Verificações antes da implementação

- Confirmar em bancada, antes da instalação, qual dispositivo assume o papel de Grandmaster quando dois ou mais processadores PTP-capazes são conectados à mesma rede.
- Validar se o processador secundário suporta configuração de slave-only forçado — se não suportar, avaliar se o modelo é adequado ao papel de expansor em uma arquitetura de DSP único.
- Verificar se algum dispositivo da rede está sinalizando clock local (token localmac) antes de dar a instalação como estável.
- Documentar no as-built qual processador é o "cérebro" do sistema e listar todo hardware adicional como expansor gerenciado por ele, não como sistema paralelo.

---

## Fontes e rastreabilidade

**Fato técnico (DOC-20 — AES67/SMPTE ST 2110 Commonalities and Constraints, Alliance for IP Media Solutions, 2019):**
- Exigência de modo slave-only forçável no ST 2110; dependência do BMCA no AES67 na ausência dessa exigência.
- Parâmetros priority1/clockClass como mecanismo de ranking BMCA.
- Sinalização de clock local via token localmac e comportamento de não reconhecimento por receptores AES67.
- Geração independente de clock de mídia por dispositivo e exigência de alinhamento ao clock de referência comum.

**Documentação de fabricante (DOC-24 — Q-SYS Core 110 Series Hardware User Guide, QSC):**
- Estados de status do design (Compromised/Fault/Missing) como mecanismo de visibilidade de hardware distribuído sob um único design centralizado.
- LAN A como conexão Q-LAN primária obrigatória; LAN B como redundância opcional.

**Documentação de fabricante (DOC-14 — Netgear M4250 AV Line, manual do usuário):**
- Padrão de redundância de clock com hierarquia explícita (grandmaster modo A / backup modo B) em perfil AVB.

**Recomendação da ATIV (boa prática de engenharia aplicada, não normativa — key learning interno):**
- Posicionamento de qualquer DSP secundário como expansor de I/O Dante, nunca como processador paralelo — princípio de arquitetura aplicado pela ATIV em todos os projetos com processador central definido (seção 4.6).

---

*© 2026 Grupo ATIV — Documento interno. CT-AUD-04-R00.*
