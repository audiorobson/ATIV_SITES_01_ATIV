# Segmentação de VLANs para AV: um modelo por função, não um modelo por dispositivo

**ID:** CT-NET-01-R00 | **Marca:** ATIV | **Pilar:** NET | **Formato:** Guia de referência
**Meta description candidata (155 car.):** Por que redes AV precisam de VLANs por função — Dante, controle, NDI, CFTV e gestão — e como evitar flood de multicast e conflito de clock entre sistemas.
**Palavras-chave candidatas:** VLAN AV, segmentação de rede AV, IGMP snooping Dante, micro-segmentação AV/IT, rede convergente AV, QoS Dante AES67

---

## 1. DOR

"A rede já está pronta, é só plugar." Essa frase antecede boa parte dos incidentes que a ATIV é chamada para diagnosticar em sistemas AV instalados. O padrão mais comum: um switch gerenciado, uma única VLAN de dados compartilhada entre Dante, controle, câmeras IP e a rede corporativa — porque "funcionou no teste de bancada" e ninguém revisitou a topologia depois que o número de dispositivos cresceu.

O problema não aparece no dia da instalação. Aparece semanas depois, quando o volume de tráfego multicast de um sistema de áudio Dante começa a ser encaminhado para portas que não têm nada a ver com áudio — porque não há IGMP snooping e querier configurados — e a rede corporativa começa a apresentar lentidão que ninguém consegue explicar até que alguém isole o VLAN de áudio e descubra que ele nunca existiu como domínio separado.

## 2. IMPACTO

Uma rede AV sem segmentação por função produz três classes de problema, nem sempre percebidas como relacionadas entre si:

- **Instabilidade de áudio e vídeo:** jitter, glitches e perda de sincronismo em sistemas Dante/AES67 quando o tráfego multicast não é contido — sintoma clássico de ausência de IGMP snooping/querier ou de QoS mal configurado.
- **Superfície de ataque ampliada:** dispositivos AV — câmeras, processadores, controladores — frequentemente rodam firmware que não recebe atualização com a mesma cadência de um servidor corporativo, e ficar na mesma VLAN que sistemas sensíveis (financeiro, RH, dados pessoais) expõe ambos os lados.
- **Diagnóstico impossível:** sem segmentação por sistema, um problema de rede em qualquer ponto (CFTV, controle, streaming) afeta o troubleshooting de todos os outros, porque não há como isolar o domínio de broadcast/multicast onde o sintoma se origina.

## 3. SOLUÇÃO

O modelo correto não é "uma VLAN de AV" — é uma VLAN por função, cada uma com seu próprio domínio de broadcast, sua própria política de QoS e, quando aplicável, sua própria configuração de IGMP querier. A segmentação separa não apenas AV de TI corporativa, mas também separa entre si os sistemas que compõem o próprio AV: áudio em rede, vídeo em rede, controle, CFTV e gestão/monitoramento.

Esse modelo é reconhecido tanto pela referência de segurança de rede para AV do setor quanto por padrões institucionais de grande porte, e é o padrão que a ATIV aplica como arquitetura de referência em projetos com Q-SYS: Q-LAN dedicado para áudio, VLAN de controle separada, e NDI isolado em VLAN própria quando presente no projeto.

## 4. METODOLOGIA

### 4.1 Por que a VLAN de AV precisa ser sua própria VLAN — não uma extensão da rede de dados

A referência de segurança de rede para AV do setor é direta neste ponto: <cite index="0-1">instalações AV devem ter suas próprias VLANs configuradas para manter o tráfego separado de outras aplicações da rede corporativa — essa configuração facilita a administração, reduz o volume de tráfego na rede e melhora a aplicação de políticas de segurança</cite>. <cite index="0-1">dispositivos conectados a uma VLAN de AV devem residir em uma sub-rede IP comum, e a comunicação entre a VLAN de AV e a rede corporativa deve ocorrer através de um roteador, o que melhora a postura de segurança da rede porque o roteador é capaz de bloquear tráfego proibido por uma Access Control List (ACL)</cite>.

O mesmo documento detalha os critérios que devem orientar como o tráfego é segmentado, não apenas se deve ser segmentado: <cite index="0-1,0-2">o tráfego pode ser segmentado com base em diferentes fatores dependendo da necessidade da organização — padrões de tráfego (dispositivos AV cada vez mais exigem acesso à internet com ampla faixa de portas de entrada/saída, e uma VLAN de AV dedicada conecta esses dispositivos sem que o tráfego percorra outras redes, o que melhora a performance e protege dispositivos que não precisam de acesso à internet); segurança (agrupar dispositivos por necessidade de segurança remove tráfego desnecessário que pode representar risco — equipamentos AV ficam apartados de sistemas com dados financeiros ou pessoais, e sistemas fora do AV não têm acesso ao equipamento usado em reuniões sensíveis); e tipos de tráfego (agrupar dispositivos pelo tipo de tráfego que manipulam simplifica a administração, já que a comunicação entre dispositivos AV é conduzida majoritariamente por protocolos de controle)</cite>.

Isso significa que a pergunta certa não é "AV entra na VLAN de dados ou fica separado?" — é "quantos domínios funcionais distintos existem dentro do próprio sistema AV, e cada um deles precisa da própria VLAN?".

### 4.2 Controle de acesso por dispositivo: 802.1X e o fallback necessário

Quando a política de segurança exige autenticação por dispositivo, a referência aponta o padrão aplicável e sua limitação prática no universo AV: <cite index="0-1">o IEEE 802.1X, padrão para controle de acesso à rede baseado em porta, permite que administradores concedam acesso a dispositivos via credenciais baseadas no próprio dispositivo — o dispositivo permanece desconectado da rede até que suas credenciais sejam verificadas, e uma vez permitido o acesso, o padrão pode configurar a porta para que o dispositivo se conecte ao local correto da rede independentemente da porta física usada</cite>. Na prática de campo, porém, <cite index="0-1">nem todos os dispositivos terminais de audiovisual suportam 802.1X — quando esse é o caso, um esquema de segurança alternativo deve estar em vigor, como MAC Authentication Bypass (MAB)</cite>.

Esse é um ponto de verificação obrigatório antes de assumir 802.1X como requisito universal em termo de referência: é necessário confirmar, dispositivo a dispositivo, quais dos equipamentos AV especificados suportam o padrão e quais dependerão de MAB como alternativa.

### 4.3 Micro-segmentação: um passo além da separação AV/TI

Padrões institucionais de maior porte vão além da separação binária entre AV e rede corporativa e exigem que cada subsistema tenha seu próprio domínio lógico. Um padrão de design institucional de referência estabelece: <cite index="1-1">a rede deve ser provisionada de forma que cada subsistema esteja em uma rede lógica isolada (micro-segmentação) — segmentos dedicados e isolados devem ser configurados para cada tipo de sistema conectado, com todo o tráfego isolado a essa rede lógica</cite>. O mesmo padrão exige que <cite index="1-1">conexões entre sistemas, quando necessárias, sejam restritas ao tráfego mínimo requerido e documentadas com origem, destino, tipo de tráfego e porta específicos</cite>, e que <cite index="1-1">acesso administrativo elevado seja proibido exceto por método seguro através de um bastion host</cite>, com autenticação, autorização e auditoria centralizadas (AAA).

Aplicado a um projeto AV institucional típico, isso se traduz em VLANs distintas — no mínimo — para: áudio em rede (Dante/AES67/Q-LAN), vídeo em rede (NDI/AV-over-IP), controle (Q-SYS, matrizes, automação), CFTV/segurança eletrônica, e gestão/monitoramento dos próprios switches e dispositivos de rede. Cada uma dessas redes lógicas tem requisito de QoS, multicast e latência diferente — tratá-las como uma única "VLAN de AV" apaga justamente a informação que permite otimizar cada uma.

### 4.4 Perfis de rede por protocolo: o que os fabricantes já assumem como padrão

Um switch AV-ready ilustra na prática como cada protocolo de AV over IP é tratado como perfil de rede distinto, não como tráfego genérico. O manual de um switch da linha AV documenta modelos pré-configurados de perfil por protocolo — <cite index="2-4">perfis específicos para Dante, incluindo suporte a produtos de fabricantes como Audinate, Biamp, Bose, Harman, Sennheiser, Shure e Trinnov, com PTP transparent clock habilitado por padrão</cite>; <cite index="2-1">perfis para AES67, Q-SYS, e vídeo NDI4/NDI5/NDI6 com áudio Dante, Q-SYS ou AES67 simultâneo na mesma VLAN</cite>; e a orientação explícita de que <cite index="2-4">templates com MTU de 1.500 bytes (como o perfil de vídeo com áudio Q-SYS) não devem ser usados quando há necessidade de jumbo frames — nesse caso deve-se usar outro template, como Vídeo com áudio AES67 ou Dante</cite>.

O mesmo manual documenta o mecanismo de contenção de multicast que sustenta essa segmentação: <cite index="2-2,2-3">o IGMP snooping exige que um switch ou roteador central na VLAN consulte periodicamente todos os dispositivos terminais para anunciar suas associações multicast — esse dispositivo central é o IGMP querier, e as respostas de consulta, conhecidas como relatórios IGMP, mantêm o switch atualizado sobre a associação de grupo multicast atual por porta e por perfil de rede; se o switch não recebe informação de associação atualizada em tempo hábil, ele para de encaminhar multicast para a porta onde o dispositivo terminal está localizado</cite>. Cada perfil de rede pode funcionar como querier na VLAN em que opera, com eleição pelo menor endereço IP quando há mais de um querier candidato na mesma VLAN.

### 4.5 IGMP não é opcional em vídeo sobre IP — mesmo fora de Dante/AES67

A mesma lógica de contenção de multicast se aplica a protocolos de vídeo. Um white paper de referência sobre um protocolo de vídeo sobre IP amplamente usado é direto: <cite index="5-1">sem consulta e snooping de IGMP, o tráfego multicast é tratado da mesma forma que uma transmissão broadcast, resultando no encaminhamento de pacotes para todas as portas da rede — com IGMP snooping, o tráfego multicast é encaminhado apenas para os receptores que assinam o stream</cite>. É por isso que, por padrão de fábrica, <cite index="5-1">o envio multicast vem desabilitado — usar multicast em uma rede mal configurada pode produzir resultados indesejados e degradar a performance da rede</cite>.

### 4.6 A diferença de versão de IGMP entre AES67 e outros padrões de mídia sobre IP

Um detalhe técnico frequentemente ignorado em projetos que combinam Dante/AES67 com broadcast profissional: as versões de IGMP exigidas não são idênticas entre padrões. Um white paper técnico sobre interoperabilidade entre padrões de áudio/vídeo sobre IP documenta que <cite index="4-1">um padrão de broadcast profissional (SMPTE ST 2110) exige suporte a IGMPv3 (RFC 3376), enquanto o AES67 exige suporte a IGMPv2 (RFC 2236) — como o IGMPv3 foi projetado para ser interoperável com a versão 2, e a RFC 3376 formalmente torna obsoleta a RFC 2236, dispositivos AES67 que suportam apenas IGMPv2 podem, do ponto de vista normativo, operar em um ambiente ST 2110</cite>. Na prática, porém, <cite index="4-1">dependendo da topologia da rede e da implementação de compatibilidade retroativa dos switches e roteadores envolvidos, partes da rede — ou a rede inteira — podem regredir para operação em IGMPv2 quando um dispositivo que só suporta essa versão é conectado, o que pode afetar negativamente a possibilidade de rodar multicast específico de origem (SSM) em partes da rede</cite>.

Esse é um item de verificação de campo, não apenas de datasheet: validar a versão de IGMP suportada por switch, não apenas por protocolo, antes de assumir interoperabilidade em projetos que combinam Dante/AES67 com equipamento de broadcast IP.

### 4.7 Modelo de referência ATIV — VLAN por função

| VLAN | Função | Protocolo típico | Requisito de QoS/multicast | Observação |
|---|---|---|---|---|
| VLAN Áudio (Q-LAN) | Áudio em rede | Dante / AES67 / Q-LAN | PTP, IGMP snooping + querier, prioridade máxima de latência | Isolar de qualquer tráfego não determinístico |
| VLAN Vídeo/NDI | Vídeo sobre IP | NDI / AV-over-IP | IGMP snooping + querier, banda dimensionada por fluxo simultâneo | Multicast desabilitado por padrão — habilitar e conter deliberadamente |
| VLAN Controle | Automação e controle | Q-SYS, RS-232/TCP encapsulado, matrizes | QoS moderado, latência tolerável maior que áudio | Separar de dados para evitar broadcast storm afetando comandos |
| VLAN CFTV | Segurança eletrônica | ONVIF / RTSP | IGMP quando multicast, PoE budget dedicado | Isolamento reforçado por superfície de ataque tipicamente maior |
| VLAN Gestão | Administração de rede | SNMP, HTTPS de gerência | ACL restritiva, acesso via bastion host quando exigido | Acesso administrativo nunca direto pela VLAN de produção |
| VLAN Dados corporativa | Rede de TI existente | — | Roteamento controlado por ACL até as demais VLANs | Comunicação com as VLANs AV sempre via roteador, nunca em L2 direto |

### 4.8 Diagrama de referência

```text
[Rede corporativa / TI] ──(roteador + ACL)──┐
                                              │
                          ┌───────────────────┴────────────────────┐
                          │              CORE L3 / FIREWALL          │
                          └──┬────────┬────────┬────────┬───────────┘
                             │        │        │        │
                    VLAN Áudio   VLAN Vídeo  VLAN     VLAN CFTV
                    (Q-LAN)      (NDI)       Controle  (ONVIF)
                    IGMP q.      IGMP q.     (Q-SYS)   IGMP q.
                    PTP          Multicast   RS232/IP  PoE dedicado
                                 contido
```

## 5. PROVA

- Exigência de VLAN dedicada para AV, com comunicação à rede corporativa via roteador e ACL — fato técnico documentado em referência de segurança de rede para AV do setor (AVIXA RP-C303.01:2018).
- Micro-segmentação por subsistema, com documentação de tráfego permitido entre sistemas e acesso administrativo via bastion host — requisito documentado em padrão institucional de referência (LACCD AV Standards).
- Mecanismo de IGMP snooping/querier como pré-condição para contenção de multicast — fato técnico documentado tanto em manual de switch AV-ready quanto em white paper de protocolo de vídeo sobre IP amplamente adotado.
- Divergência de versão de IGMP entre AES67 (v2) e ST 2110 (v3), com risco de fallback silencioso da rede — fato técnico documentado em white paper de interoperabilidade AES67/ST 2110.
- IEEE 802.1Q como norma de referência para VLANs e IEEE 802.1X para controle de acesso por porta — normas consolidadas, catalogadas em manual de referência ICT do setor.

## 6. CTA

Antes de aceitar "a rede já está pronta" como premissa de projeto, a ATIV recomenda um levantamento de topologia que identifique quantos domínios funcionais o sistema AV realmente precisa — e valide, switch a switch, se IGMP querier, QoS e versão de IGMP estão configurados de forma coerente entre todos os protocolos envolvidos.

---

## Boas práticas

- Nunca tratar "VLAN de AV" como singular — segmentar por função (áudio, vídeo, controle, CFTV, gestão), não apenas separar AV de TI corporativa.
- Configurar IGMP querier em toda VLAN com tráfego multicast, e confirmar qual dispositivo assume o papel de querier quando há mais de um candidato.
- Validar a versão de IGMP suportada pelo switch (não apenas pelo protocolo) antes de assumir interoperabilidade entre Dante/AES67 e equipamento de broadcast IP.
- Usar 802.1X como padrão de controle de acesso, com MAC Authentication Bypass documentado como fallback para os dispositivos que não suportam o padrão.
- Documentar toda exceção de tráfego entre VLANs (origem, destino, protocolo, porta) — nunca liberar comunicação entre sistemas "just in case".
- Restringir acesso administrativo a switches e controladores de rede a um caminho seguro único, nunca direto pela VLAN de produção.

## Normas aplicáveis

- IEEE 802.1Q — VLANs e redes em ponte.
- IEEE 802.1X — controle de acesso à rede baseado em porta.
- IETF RFC 3376 (IGMPv3) e RFC 2236 (IGMPv2) — protocolos de gerenciamento de grupo multicast.
- AVIXA RP-C303.01:2018 — segurança de rede para audiovisual.

## Verificações antes da implementação

- Confirmar, para cada equipamento AV especificado, se há suporte nativo a 802.1X ou se será necessário MAB.
- Testar IGMP querier e snooping em bancada antes da instalação, com o volume de dispositivos multicast previsto para o projeto — não apenas com um ou dois emissores.
- Validar versão de IGMP suportada por todos os switches da cadeia quando o projeto combinar Dante/AES67 com equipamento de vídeo sobre IP de outro padrão.
- Checar se o firewall/core L3 aplica ACL entre todas as VLANs AV e a rede corporativa, e não apenas entre "AV" e "dados" como blocos únicos.
- Verificar orçamento de PoE por VLAN/switch quando CFTV e outros dispositivos alimentados por PoE compartilham o mesmo equipamento de rede que áudio/vídeo.

---

## Fontes e rastreabilidade

**Fato técnico / recomendação de prática de segurança (DOC-06 — AVIXA Network Security for AV, RP-C303.01:2018):**
- VLAN dedicada para AV, comunicação com rede corporativa via roteador/ACL.
- Critérios de segmentação (padrões de tráfego, segurança, tipos de tráfego).
- IEEE 802.1X e MAC Authentication Bypass como fallback.

**Requisito normativo institucional (DOC-09 — LACCD AV Standards, padrão de design institucional):**
- Micro-segmentação por subsistema.
- Documentação obrigatória de tráfego entre sistemas.
- Acesso administrativo via bastion host e AAA centralizado.

**Documentação de fabricante (DOC-14 — Netgear M4250 AV Line, manual do usuário):**
- Perfis de rede pré-configurados por protocolo (Dante, AES67, Q-SYS, NDI).
- Mecanismo de IGMP querier por perfil de rede e eleição por menor IP.
- Observação de MTU/jumbo frames por perfil — específica deste fabricante, não generalizável sem verificação.

**Fato técnico (DOC-21 — NDI White Paper 2023):**
- Necessidade de IGMP snooping/querier para conter multicast; comportamento padrão de fábrica com multicast desabilitado.

**Fato técnico (DOC-20 — AES67/SMPTE ST 2110 Commonalities and Constraints, 2019):**
- Divergência entre IGMPv2 (AES67) e IGMPv3 (ST 2110), obsolescência formal da RFC 2236 pela RFC 3376, e risco de fallback de rede em ambientes mistos.

**Norma consolidada (DOC-13 — BICSI ICT Handbook, catálogo de normas):**
- IEEE 802.1Q, IEEE 802.1X, IEEE 802.3bt — citadas por referência cruzada, não extraídas de texto normativo completo.

**Recomendação da ATIV (boa prática de engenharia aplicada, não normativa):**
- Modelo de VLAN por função aplicado em projetos com Q-SYS (Q-LAN, controle, NDI separados) — seção 4.7 deste artigo.

---

*© 2026 Grupo ATIV — Documento interno. CT-NET-01-R00.*
