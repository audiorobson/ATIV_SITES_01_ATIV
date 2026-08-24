# QoS e DSCP para Dante, AES67 e PTP: marcação, filas e o que validar no switch

**ID:** CT-NET-03-R00 | **Marca:** ATIV | **Pilar:** NET | **Formato:** Artigo técnico
**Meta description candidata (151 car.):** Áudio em rede tolera pouquíssimo jitter e latência. O que QoS precisa garantir para Dante, AES67 e PTP não competirem com o resto do tráfego da rede.
**Palavras-chave candidatas:** QoS Dante, DSCP AES67, PTP transparent clock, jitter latência AV over IP, MTU jumbo frame Dante

---

## 1. DOR

Uma rede AV sem QoS configurado costuma "funcionar" durante o teste de bancada — poucos dispositivos, pouco tráfego concorrente, latência baixa por padrão. O problema aparece quando a rede entra em produção real: tráfego de dados corporativos, backup, atualização de sistema ou simplesmente mais dispositivos AV competindo pela mesma banda começam a introduzir jitter e latência que o teste de bancada nunca revelou.

Áudio e vídeo em rede não toleram esse tipo de degradação da mesma forma que um download de arquivo tolera — um pacote de áudio Dante atrasado não é "mais lento", é um glitch audível; um pacote PTP atrasado não é "impreciso", é uma fonte de dessincronismo que se acumula ao longo do tempo. QoS existe exatamente para impedir que esse tráfego sensível a tempo compita em pé de igualdade com tráfego que tolera atraso.

## 2. IMPACTO

- **Degradação sob carga real:** sistemas que passam no teste de bancada falham em produção porque QoS nunca foi configurado para separar tráfego sensível a tempo do restante da rede.
- **Acúmulo silencioso de erro de clock:** sem PTP corretamente priorizado, o dessincronismo entre dispositivos aumenta gradualmente, sem um evento único e identificável — o que torna o diagnóstico mais difícil do que uma falha abrupta.
- **Estouro de MTU não percebido:** perfis de rede configurados com tamanho de quadro incompatível com o volume de canais de áudio/vídeo do projeto podem fragmentar pacotes de forma que introduz latência adicional, sem gerar erro explícito.

## 3. SOLUÇÃO

Tratar QoS, PTP e dimensionamento de MTU como três configurações que precisam ser verificadas juntas — não apenas ativadas — com valores de referência de latência, jitter e perda de pacote definidos antes da instalação, e verificação de que o perfil de rede escolhido no switch realmente prioriza o tráfego sensível a tempo, em vez de assumir que "QoS habilitado" resolve por padrão.

## 4. METODOLOGIA

### 4.1 Valores de referência para tráfego sensível a tempo

Antes de configurar QoS, é necessário ter um alvo objetivo — sem isso, não há como validar se a configuração está funcionando. Um white paper técnico de um protocolo de vídeo sobre IP amplamente adotado documenta diretrizes de referência para ambientes que coordenam múltiplos tipos de dado em tempo real: <cite index="7-1">perda não deve exceder 1%; latência unidirecional não deve exceder 150 ms; jitter não deve exceder 30 ms; e deve haver banda suficiente garantida por stream</cite>. O mesmo documento recomenda uma margem de segurança sobre a capacidade total do link: <cite index="7-1">o tráfego não deve ocupar mais de 75% da banda de qualquer link de rede</cite> — reserva que existe justamente para absorver picos de tráfego concorrente sem degradar o fluxo AV.

Esses números são específicos do protocolo de origem, mas servem como ponto de partida razoável para qualquer projeto de áudio/vídeo sobre IP: se a rede não consegue manter esses parâmetros mesmo sem QoS configurado, adicionar QoS não resolve um problema de capacidade insuficiente — só prioriza melhor uma banda que já está subdimensionada.

### 4.2 Class of Service como mecanismo de priorização

O conceito técnico que sustenta QoS em redes convergentes é a marcação de prioridade por classe de tráfego. Uma referência de automação predial/AV do setor define esse mecanismo de forma direta: Class of Service (CoS) é <cite index="6-1">um mecanismo para marcar tráfego de rede com um valor de prioridade, a fim de diferenciar e priorizar fluxos de dados</cite>. Na prática de switch gerenciado, essa marcação é o que permite que o equipamento de rede decida qual pacote sai primeiro de uma fila quando há congestionamento — sem marcação, todo tráfego compete igualmente, e áudio/vídeo perde exatamente quando mais precisa de prioridade.

### 4.3 PTP: transparent clock como parte da configuração de QoS, não item separado

Em redes que dependem de PTP para sincronismo (Dante, AES67, ST 2110), a forma como cada switch da cadeia trata pacotes PTP é parte da estratégia de QoS, não uma configuração isolada. Um switch AV-ready documenta esse comportamento por perfil de rede pré-configurado: perfis específicos para áudio Dante e AES67 <cite index="3-1">habilitam PTP TC (transparent clock) por padrão</cite>, enquanto outros perfis — como vídeo genérico sem áudio Dante/AES67/Q-SYS especificado — <cite index="3-2">não suportam PTP TC</cite>. Escolher o perfil errado no switch, mesmo com os dispositivos finais corretamente configurados, pode deixar pacotes PTP sem o tratamento de timestamp residual que reduz o erro de sincronismo introduzido pelo próprio switch.

O requisito de perfil PTP também varia por padrão de mídia sobre IP, não é universal: <cite index="1-1">tanto AES67 quanto SMPTE ST 2110 utilizam o IEEE 1588-2008 Precision Time Protocol (PTPv2) para distribuição do clock de referência — porém, enquanto o AES67 exige suporte ao perfil PTP Default e recomenda suporte ao perfil de mídia AES67 definido no Anexo A do padrão, o ST 2110 exige suporte ao perfil PTP definido na SMPTE ST 2059-2</cite>. Um switch configurado para um perfil PTP incompatível com o padrão realmente em uso na rede pode não sinalizar erro — apenas produzir sincronismo pior do que o esperado.

### 4.4 MTU e jumbo frames: a armadilha do perfil "genérico"

Um detalhe de configuração frequentemente esquecido até aparecer como problema de banda: nem todo perfil de rede pré-configurado assume o mesmo tamanho de quadro. O mesmo switch AV-ready documenta essa diferença explicitamente para um perfil combinando vídeo com áudio Q-SYS: <cite index="2-1">o MTU para o pacote é de 1.500 bytes — para jumbo frames, deve-se usar outro template, como vídeo com áudio AES67 ou Dante</cite>. Em projetos com alto volume de canais simultâneos, manter um perfil limitado a 1.500 bytes quando o sistema foi dimensionado assumindo jumbo frames gera fragmentação de pacote — carga adicional de processamento na rede que não aparece como erro explícito, apenas como latência maior do que o esperado.

### 4.5 Normas de base para QoS em redes convergentes

A família de emendas ao IEEE 802.1Q inclui múltiplos mecanismos formais de controle de tráfego sensível a tempo, relevantes como referência normativa em pareceres técnicos: <cite index="4-1">IEEE 802.1Qcc (melhorias no Stream Reservation Protocol), IEEE 802.1Qcr (Asynchronous Traffic Shaping), e IEEE P802.1Qdq (ajuste de parâmetros de shaper para tráfego em rajada que exige latência limitada)</cite> fazem parte do mesmo corpo normativo que define VLANs e priorização de tráfego em redes locais. Não é necessário implementar cada mecanismo individualmente em todo projeto — mas conhecer a existência dessa família de emendas ajuda a identificar, no datasheet de um switch, se ele suporta os mecanismos de QoS mais recentes ou apenas priorização básica por CoS/DSCP.

### 4.6 Checklist de verificação por perfil de rede

| Item | O que verificar | Risco se ignorado |
|---|---|---|
| Perfil de rede correto por protocolo | Perfil específico (Dante, AES67, Q-SYS, NDI) escolhido, não genérico | PTP TC pode não estar habilitado por padrão |
| PTP TC habilitado | Confirmar estado do perfil escolhido, não assumir | Erro de sincronismo introduzido pelo próprio switch |
| Perfil PTP compatível com o padrão | AES67 (Default/Media profile) vs. ST 2110 (ST 2059-2) | Sincronismo degradado sem erro explícito |
| MTU/jumbo frames | Confirmar se o perfil suporta o tamanho de quadro que o projeto exige | Fragmentação de pacote, latência adicional não diagnosticada |
| Margem de banda | Tráfego AV não deve ocupar mais que ~75% do link | Sem margem para absorver picos de tráfego concorrente |
| Valores-alvo de latência/jitter/perda | Definidos antes da instalação (referência: <150ms, <30ms, <1%) | Sem critério objetivo para validar QoS configurado |

## 5. PROVA

- Valores de referência de perda, latência unidirecional, jitter e margem de banda para tráfego sensível a tempo — fato técnico documentado em white paper de protocolo de vídeo sobre IP (NDI White Paper, 2023).
- Definição técnica de Class of Service como mecanismo de priorização por marcação — norma de referência do setor (AVIXA TR111.01:2019).
- PTP transparent clock habilitado por padrão em perfis específicos de Dante/AES67 e não habilitado em perfil de vídeo genérico — fato técnico documentado em manual de switch AV-ready (Netgear M4250 AV Line).
- Divergência de perfil PTP exigido entre AES67 (Default/Media) e ST 2110 (ST 2059-2) — fato técnico documentado em white paper de interoperabilidade AES67/SMPTE ST 2110.
- MTU de 1.500 bytes em perfil de vídeo com áudio Q-SYS, com necessidade de perfil alternativo para jumbo frames — fato técnico documentado em manual de switch AV-ready.
- Família de emendas IEEE 802.1Q para controle de tráfego sensível a tempo — norma consolidada, catalogada em manual de referência ICT do setor.

## 6. CTA

Antes de considerar uma rede AV pronta para produção, a ATIV recomenda validar QoS, PTP e MTU como um conjunto único de configuração — com valores-alvo de latência, jitter e perda definidos previamente — em vez de assumir que o perfil de rede padrão do switch já resolve os três aspectos automaticamente.

---

## Boas práticas

- Definir valores-alvo de latência, jitter e perda de pacote antes da instalação, não depois que um sintoma aparecer.
- Escolher o perfil de rede específico do protocolo em uso (Dante, AES67, Q-SYS, NDI) em vez de um perfil genérico de vídeo/dados.
- Confirmar explicitamente se PTP transparent clock está habilitado no perfil escolhido — não assumir que QoS habilitado já cobre isso.
- Validar o perfil PTP correto (Default/Media para AES67, ST 2059-2 para ST 2110) quando a rede combinar padrões diferentes.
- Verificar o MTU configurado por perfil de rede contra o volume real de canais do projeto, trocando de perfil quando jumbo frames forem necessários.
- Manter margem de banda não utilizada (referência: até 75% de ocupação) para absorver picos de tráfego concorrente.

## Normas aplicáveis

- IEEE 802.1Q e emendas relacionadas a tráfego sensível a tempo (802.1Qcc, 802.1Qcr, 802.1Qdq, entre outras).
- IEEE 1588-2008 (PTPv2) — protocolo de sincronização de clock de precisão.
- AES67 (perfil PTP Default/Media) e SMPTE ST 2059-2 (perfil PTP exigido pelo ST 2110).

## Verificações antes da implementação

- Testar em bancada os valores reais de latência, jitter e perda com o volume completo de dispositivos do projeto, não com uma amostra reduzida.
- Confirmar, perfil por perfil no switch, se PTP TC está habilitado conforme o protocolo em uso.
- Verificar o MTU de cada perfil de rede contra a necessidade real de banda do projeto antes de aceitar a configuração padrão.
- Simular tráfego concorrente (dados corporativos, backup) na mesma rede para validar se a margem de banda reservada é suficiente sob carga real.

---

## Fontes e rastreabilidade

**Fato técnico (DOC-21 — NDI White Paper, 2023):**
- Valores de referência de perda, latência unidirecional, jitter e margem de banda para tráfego sensível a tempo.

**Norma de referência do setor (DOC-23 — AVIXA TR111.01:2019, Unified Automation for Buildings):**
- Definição técnica de Class of Service (CoS).

**Fato técnico (DOC-14 — Netgear M4250 AV Line, manual do usuário):**
- PTP TC habilitado por padrão em perfis específicos de Dante/AES67, não habilitado em perfil de vídeo genérico.
- MTU de 1.500 bytes em perfil de vídeo com áudio Q-SYS e necessidade de perfil alternativo para jumbo frames.

**Fato técnico (DOC-20 — AES67/SMPTE ST 2110 Commonalities and Constraints, 2019):**
- Divergência de perfil PTP exigido entre AES67 e ST 2110.

**Norma consolidada (DOC-13 — BICSI ICT Handbook, catálogo de normas):**
- Família de emendas IEEE 802.1Q relacionadas a controle de tráfego sensível a tempo, citada por referência cruzada.

---

*© 2026 Grupo ATIV — Documento interno. CT-NET-03-R00.*
