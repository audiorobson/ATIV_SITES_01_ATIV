# AEC em salas institucionais: por que o número de canais nativos define a arquitetura do DSP

**ID:** CT-AUD-02-R00 | **Marca:** ATIV | **Pilar:** AUD | **Formato:** Artigo técnico
**Meta description candidata (154 car.):** Por que um auditório com "AEC habilitado" ainda produz eco em videoconferência — o canal de AEC é um recurso limitado e licenciado, não uma função binária.
**Palavras-chave candidatas:** AEC canais Q-SYS, eco videoconferência auditório, cancelamento de eco DSP, dimensionamento AEC, Core Flex AEC license

---

## 1. DOR

"O processador tem AEC" é uma frase que esconde uma armadilha comum em salas institucionais com múltiplas zonas de microfone — plenários, auditórios, salas de audiência com bancada, tribuna e mesas de partes operando simultaneamente. A pergunta que realmente importa não é se o DSP tem AEC — é quantos canais de AEC simultâneos ele suporta, porque AEC não é uma função liga/desliga do equipamento: é um recurso de processamento com capacidade finita, frequentemente licenciada por canal.

O sintoma típico aparece só na operação real, não no teste de bancada com um microfone: com duas ou três zonas de microfone abertas ao mesmo tempo — algo absolutamente normal em audiência com múltiplas partes falando — o participante remoto começa a ouvir eco ou reverberação, porque uma das zonas está sendo processada sem cancelamento de eco ativo, simplesmente por falta de canal de AEC disponível.

## 2. IMPACTO

- **Falha perceptível para quem mais importa:** o participante remoto (advogado, testemunha, autoridade em sessão híbrida) é exatamente quem sofre o efeito do eco — o público presencial na sala frequentemente nem percebe o problema.
- **Retrabalho caro:** descobrir a limitação de canais de AEC depois da instalação normalmente significa comprar licença de expansão de capacidade ou, em casos mais graves, substituir o processador por um modelo com mais canais nativos — ambos custos evitáveis com dimensionamento correto na fase de projeto.
- **Falha em teste de aceitação formal:** a verificação de desempenho de sistemas de conferência tem item específico para isso — um sistema que "passa" no teste de áudio simples pode falhar exatamente no teste de supressão de eco em modo full duplex.

## 3. SOLUÇÃO

Dimensionar o DSP pelo número de zonas de microfone que precisam operar simultaneamente com AEC ativo — não pelo número total de microfones da sala, nem pela potência geral do processador. Isso exige tratar AEC como recurso licenciado e escalável (no caso da plataforma Q-SYS, expansível por licença de capacidade), e manter o princípio de que apenas um processador na cadeia de áudio deve ter AEC habilitado para uma mesma fonte — evitando o problema de coordenação já tratado na arquitetura de DSP único da ATIV.

## 4. METODOLOGIA

### 4.1 AEC não é "recurso do produto" — é capacidade por canal

A regra de ouro documentada em uma especificação técnica de projeto real trata o AEC como algo que precisa ser coordenado explicitamente entre todos os dispositivos de processamento do sistema, não apenas ativado: <cite index="0-1">coordenar o AEC entre todos os dispositivos e softwares de processamento do sistema, de forma que apenas um processador na cadeia de áudio — seja físico, como um DSP de hardware, seja virtual, como um processador de software em uma plataforma de colaboração — tenha o AEC habilitado</cite>. Essa mesma especificação trata o ajuste fino do AEC como item de comissionamento formal, não como configuração padrão de fábrica: <cite index="0-1">ajustar as configurações de AEC de forma que nenhum eco seja ouvido pelos participantes remotos</cite>.

O ponto central para dimensionamento de projeto é que essa coordenação só é possível quando há canais de AEC suficientes disponíveis para todas as zonas de microfone que precisam operar ao mesmo tempo — uma sala com quatro zonas de microfone simultâneas e apenas dois canais de AEC disponíveis vai, estruturalmente, deixar duas zonas sem cancelamento de eco, independentemente de quão bem configurado esteja o restante do sistema.

### 4.2 Como a plataforma Q-SYS trata AEC como recurso escalável

Na linha de processadores Q-SYS, AEC é tratado explicitamente como especificação de capacidade por modelo, não como recurso presente ou ausente. Os processadores de entrada da linha — Core Nano e Core 8 Flex — <cite index="19-1">oferecem oito canais de cancelamento de eco acústico (AEC) nativamente</cite>, e essa capacidade pode ser ampliada por licenciamento: <cite index="23-1">cada Core tem uma "Capacidade Máxima de NM-T1" recomendada, junto com uma especificação total de "Canal de AEC"</cite>, e <cite index="23-1">os Cores Q-SYS possuem recursos dedicados de AEC para microfones da série NM, além de reservar recursos de AEC para microfones de terceiros ou microfones NM adicionais</cite>.

A licença de expansão de capacidade da própria fabricante confirma que AEC é um dos recursos diretamente ampliados por licenciamento, não por hardware adicional: <cite index="21-1">a licença permite escalar os processadores Core Nano ou Core 8 Flex para áreas que exigem maior poder de processamento, capacidade total de canais de rede e contagem de periféricos, incluindo canal de AEC, capacidade de microfones série NM, softphones e capacidade de streaming de mídia/WAN</cite>. Isso confirma, na prática, que "ter AEC" e "ter AEC suficiente para o projeto" são perguntas diferentes — e a segunda só se responde contando zonas de microfone simultâneas contra a especificação de canal do modelo escolhido.

A própria linha reforça esse ponto no processador de porte intermediário, ao descrever o conjunto de tecnologias de conferência como um pacote de software evolutivo, não uma característica fixa: <cite index="22-1">a suíte de tecnologia de conferência baseada em software inclui cancelamento de eco acústico de nova geração, softphones SIP multi-instância, gain sharing, gating automixers e controles de acesso baseados em função</cite>.

### 4.3 O critério de dimensionamento: zonas simultâneas, não total de microfones

O erro de dimensionamento mais comum é contar "quantos microfones a sala tem" em vez de "quantas zonas de microfone podem estar ativas ao mesmo tempo, exigindo AEC simultâneo". Uma sala de audiência com bancada, tribuna, mesa de defesa e mesa de acusação pode ter oito ou dez microfones fisicamente instalados, mas o número de zonas com fala simultânea real — o que efetivamente consome canal de AEC ao mesmo tempo — costuma ser bem menor, e é esse segundo número que dimensiona o processador corretamente. Superdimensionar por contagem total de microfones gera custo desnecessário; subdimensionar por essa mesma contagem equivocada gera o problema de eco descrito na Seção 1.

Em projetos ATIV, essa lógica já orienta a escolha de processador: em salas de plenário com múltiplas zonas de fala simultânea previstas — como no caso do auditório da EMATER-MG, onde o processador especificado foi um Q-SYS Core 24F com 16 canais nativos de AEC — a decisão de capacidade de AEC precede a escolha de qualquer outro atributo do DSP, precisamente porque é o canal de AEC, não a potência geral de processamento, que costuma ser o fator limitante em salas com múltiplas zonas de fala.

### 4.4 Como isso vira critério de aceitação formal

A verificação de desempenho de sistemas AV trata a performance de supressão de eco como item nomeado, com requisito de operação em modo full duplex — não apenas ausência de eco perceptível em teste informal: <cite index="3-1">verificar que um sistema com capacidade de conferência opera em níveis nominais em modo full duplex, com desempenho de eco e latência conforme definido na documentação do projeto</cite> (item AP-123, Conferencing Echo Suppression Performance). Esse item deve ser testado com todas as zonas de microfone do projeto ativas simultaneamente — testar uma zona de cada vez não revela o problema de subdimensionamento de canais de AEC descrito neste artigo.

## 5. PROVA

- Exigência de coordenação de AEC entre todos os processadores da cadeia, com apenas um processador ativo por fonte — fato técnico documentado em especificação técnica de projeto real (Laney Library & LRC, Seção 274116).
- AEC como especificação de capacidade por canal, expansível por licenciamento de capacidade — fato técnico documentado em especificações atuais da linha Q-SYS Core (QSC, 2026).
- Recursos de AEC dedicados por tipo de microfone (série NM vs. terceiros) e ampliação de canal de AEC via licença — fato técnico documentado na mesma fonte.
- Item formal de verificação de desempenho de supressão de eco em modo full duplex (AP-123) — norma consolidada (ANSI/INFOCOMM 10:2013).

## 6. CTA

Antes de especificar o processador de uma sala com múltiplas zonas de microfone, a ATIV recomenda mapear o número real de zonas com fala simultânea esperada — não o total de microfones instalados — e confirmar essa contagem contra a especificação de canais de AEC do modelo de DSP escolhido, incluindo o custo de eventual licença de expansão de capacidade no orçamento inicial do projeto.

---

## Boas práticas

- Dimensionar AEC pelo número de zonas de microfone com fala simultânea esperada, não pelo total de microfones fisicamente instalados.
- Confirmar a especificação de canais de AEC do modelo de processador escolhido antes de fechar a especificação — não assumir "tem AEC" como suficiente.
- Manter apenas um processador com AEC habilitado por fonte de áudio, coordenando essa configuração entre hardware e qualquer software de colaboração envolvido.
- Testar a supressão de eco com todas as zonas de microfone do projeto ativas simultaneamente, não uma de cada vez.
- Incluir o custo de eventual licença de expansão de capacidade de AEC no orçamento inicial, quando o projeto já prevê crescimento de zonas de microfone.

## Normas aplicáveis

- ANSI/INFOCOMM 10:2013 — item AP-123, Conferencing Echo Suppression Performance.

## Verificações antes da implementação

- Levantar o número real de zonas de microfone com fala simultânea esperada antes de escolher o modelo de processador.
- Confirmar a especificação de canal de AEC (nativo e máximo com licença) do modelo de DSP especificado, diretamente na documentação atual do fabricante.
- Testar em bancada, com todas as zonas de microfone do projeto simultaneamente ativas, antes de aceitar a instalação como completa.
- Verificar se algum software de colaboração (plataforma de videoconferência) também processa AEC, e desabilitá-lo nesse ponto se o DSP de hardware já estiver processando a mesma fonte.

---

## Fontes e rastreabilidade

**Fato técnico (DOC-12 — Laney Library & LRC, Integrated Audiovisual Systems, Seção 274116):**
- Exigência de coordenação de AEC entre todos os processadores, com apenas um habilitado por fonte.
- Ajuste de AEC como item formal de comissionamento, com critério de ausência total de eco para participantes remotos.

**Requisito normativo (DOC-02 — ANSI/INFOCOMM 10:2013, AV Systems Performance Verification):**
- Item AP-123 (Conferencing Echo Suppression Performance) como verificação formal de supressão de eco em modo full duplex.

**Documentação de fabricante (pesquisa web, 2026 — páginas de produto e licenciamento QSC Q-SYS):**
- Especificação de 8 canais nativos de AEC nos processadores Core Nano e Core 8 Flex.
- AEC como recurso ampliável por Q-SYS Capacity Scaling License, com reserva dedicada por tipo de microfone (série NM vs. terceiros).
- Conjunto de tecnologias de conferência (AEC de nova geração, softphones, gating automixer) como suíte de software evolutiva no Core 110f.

**Recomendação da ATIV (boa prática de engenharia aplicada e referência de projeto interno, não normativa):**
- Critério de dimensionamento por zonas de fala simultânea, não por total de microfones (seção 4.3).
- Referência ao dimensionamento do Q-SYS Core 24F (16 canais nativos de AEC) aplicado no projeto EMATER-MG — citado como exemplo de aplicação do critério, não como especificação genérica válida para todo projeto.

**Observação de aplicabilidade:** as especificações de canal de AEC por modelo de processador mudam conforme a linha de produto e a versão de firmware/licenciamento vigente — sempre confirmar o dado atual na documentação oficial do fabricante antes de uso formal em termo de referência ou memorial descritivo.

---

*© 2026 Grupo ATIV — Documento interno. CT-AUD-02-R00.*
