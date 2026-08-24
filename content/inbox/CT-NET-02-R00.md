# IGMP snooping e querier: o par obrigatório para multicast AV estável

**ID:** CT-NET-02-R00 | **Marca:** ATIV | **Pilar:** NET | **Formato:** Artigo técnico
**Meta description candidata (149 car.):** IGMP snooping sem querier não contém multicast. Como os dois mecanismos trabalham juntos e o que verificar quando o áudio começa a falhar.
**Palavras-chave candidatas:** IGMP snooping querier, multicast AV, flood multicast Dante, IGMP eleição, RFC 3376 IGMPv3

---

## 1. DOR

Um padrão de diagnóstico recorrente: o instalador habilita "IGMP snooping" no switch — porque viu essa opção no menu, ou porque alguém disse que "resolve problema de multicast" — e considera o assunto encerrado. Semanas depois, o sistema Dante ou o vídeo sobre IP começa a apresentar comportamento instável, e ninguém revisita a configuração de rede porque "o IGMP já estava habilitado".

O erro está em tratar IGMP snooping como uma configuração única e suficiente. Na prática, snooping sem um querier ativo na VLAN não contém multicast de forma alguma — o switch fica "escutando" relatórios de associação que nunca chegam a existir sem alguém perguntando por eles, e o comportamento observado costuma regredir para exatamente o problema que o snooping deveria evitar.

## 2. IMPACTO

- **Flood de multicast:** sem querier ativo, o tráfego multicast é tratado como broadcast, inundando portas que não têm relação nenhuma com áudio ou vídeo — degradando toda a rede, não apenas o sistema AV.
- **Falha intermitente e difícil de correlacionar:** o sintoma (glitch de áudio, travamento de vídeo) aparece de forma inconsistente, porque depende de quando a tabela de associação multicast do switch expira por falta de atualização — não é um problema constante, é um problema que "vai e volta".
- **Diagnóstico perdido em falso positivo:** como o snooping está "habilitado" na configuração, o técnico descarta a rede como causa provável e investiga o equipamento AV primeiro, prolongando o tempo de resolução.

## 3. SOLUÇÃO

Tratar IGMP snooping e querier como um par indissociável — nunca configurar um sem confirmar a presença ativa do outro na mesma VLAN — e entender o mecanismo de eleição de querier quando mais de um dispositivo é candidato ao papel, para evitar tanto a ausência quanto o conflito entre queriers.

## 4. METODOLOGIA

### 4.1 Por que snooping sozinho não funciona

O mecanismo de contenção de multicast depende estruturalmente de um segundo componente que consulta a rede periodicamente. Um manual de switch AV-ready detalha essa dependência: <cite index="2-2,2-3">o IGMP snooping exige que um switch ou roteador central na VLAN consulte periodicamente todos os dispositivos terminais para anunciar suas associações multicast — esse dispositivo central é o IGMP querier, e as respostas de consulta, conhecidas como relatórios IGMP, mantêm o switch atualizado sobre a associação de grupo multicast atual por porta e por perfil de rede</cite>. Sem esse ciclo de pergunta-resposta, o switch simplesmente não tem como saber quais portas devem receber qual tráfego multicast — snooping é o mecanismo que usa essa informação, não o mecanismo que a gera.

A consequência da ausência de querier é documentada de forma direta em um white paper de protocolo de vídeo sobre IP amplamente adotado: <cite index="5-1">sem consulta e snooping de IGMP, o tráfego multicast é tratado da mesma forma que uma transmissão broadcast, resultando no encaminhamento de pacotes para todas as portas da rede — com IGMP snooping, o tráfego multicast é encaminhado apenas para os receptores que assinam o stream multicast</cite>. Essa é a razão pela qual o comportamento típico da rede que "tem snooping mas não tem querier" é indistinguível, na prática, de uma rede sem nenhum controle de multicast: o snooping fica ligado, mas sem dados para agir.

### 4.2 O que acontece quando o switch não recebe resposta a tempo

O mecanismo tem um comportamento de expiração que explica por que o sintoma costuma ser intermitente, não constante: <cite index="2-2,2-3">se o switch não receber informação de associação atualizada em tempo hábil, ele para de encaminhar multicasts para a porta onde o dispositivo terminal está localizado</cite>. Isso significa que uma falha temporária no querier — reinicialização, perda momentânea de conectividade, mudança de topologia — não derruba o sistema imediatamente, mas gera degradação progressiva conforme as entradas da tabela de associação expiram, uma por uma, sem renovação.

### 4.3 Eleição de querier: o que acontece com mais de um candidato

Quando mais de um dispositivo na mesma VLAN é capaz de atuar como querier — cenário comum quando vários switches gerenciados compõem a topologia — a rede precisa de um mecanismo de eleição, não de dois queriers operando simultaneamente. O manual de switch documenta esse mecanismo: <cite index="2-1">cada perfil de rede pode funcionar como querier na VLAN em que opera</cite>, com controle de participação em eleição — <cite index="2-1">quando habilitado, o querier do perfil de rede participa da eleição, na qual o endereço IP de menor numeração opera como querier na VLAN, e qualquer outro querier passa para o estado de não-querier; quando desabilitado, se o querier do perfil de rede detectar outro querier da mesma versão na VLAN, o snooping querier passa para o estado de não-querier</cite>.

Esse mecanismo evita a situação de dois queriers ativos disputando a mesma VLAN — o que geraria informação de associação conflitante — mas depende de configuração correta: <cite index="2-1">o querier IGMP para o perfil de rede padrão com VLAN 1 é habilitado por padrão, e é possível configurar um querier IGMP para uso com um perfil de rede em outra VLAN além da VLAN 1</cite>. Um erro comum de topologia é deixar múltiplos switches com querier habilitado por padrão de fábrica na mesma VLAN sem verificar qual efetivamente venceu a eleição — o sistema pode estar funcionando por sorte de numeração de IP, não por projeto.

### 4.4 A complicação extra em redes mistas: versão de IGMP

Quando a rede combina Dante/AES67 com equipamento de outro padrão de mídia sobre IP (como broadcast profissional), a versão de IGMP suportada por cada dispositivo passa a importar tanto quanto a presença do querier. Um white paper de interoperabilidade documenta: <cite index="1-1">um padrão de broadcast profissional (SMPTE ST 2110) exige suporte a IGMPv3 (RFC 3376), enquanto o AES67 exige suporte a IGMPv2 (RFC 2236) — como o IGMPv3 foi projetado para ser interoperável com a versão 2, e a RFC 3376 formalmente torna obsoleta a RFC 2236, dispositivos AES67 que suportam apenas IGMPv2 podem, do ponto de vista normativo, operar em um ambiente ST 2110</cite>. O risco prático, porém, é de regressão silenciosa: <cite index="1-1">dependendo da topologia da rede e da implementação de compatibilidade retroativa dos switches e roteadores envolvidos, partes da rede — ou a rede inteira — podem regredir para operação em IGMPv2 quando um dispositivo que só suporta essa versão é conectado</cite>, o que pode comprometer funcionalidades específicas de multicast de origem única (SSM) em parte ou toda a rede.

### 4.5 Roteiro de diagnóstico quando o sintoma aparece

Diante de glitch intermitente de áudio/vídeo em rede com múltiplas fontes multicast, a sequência de verificação deveria ser:

1. Confirmar que existe pelo menos um querier ativo na VLAN — não apenas snooping habilitado.
2. Se houver mais de um switch capaz de ser querier, identificar qual venceu a eleição (menor IP) e confirmar que essa configuração é intencional, não acidental.
3. Verificar a versão de IGMP suportada por cada switch da cadeia quando a rede combinar padrões diferentes (Dante/AES67 com broadcast IP).
4. Checar se a topologia mudou recentemente (novo switch, nova VLAN, religamento de equipamento) — mudanças de topologia são o gatilho mais comum de perda ou duplicação de querier.

## 5. PROVA

- Dependência estrutural entre IGMP snooping e querier, com querier como origem da informação de associação usada pelo snooping — fato técnico documentado em manual de switch AV-ready (Netgear M4250 AV Line).
- Comportamento de expiração de associação multicast sem atualização a tempo — fato técnico documentado na mesma fonte.
- Mecanismo de eleição de querier por menor endereço IP e comportamento de não-querier quando outro querier da mesma versão é detectado — fato técnico documentado na mesma fonte.
- Tratamento de multicast como broadcast na ausência de IGMP snooping/querier — fato técnico documentado em white paper de protocolo de vídeo sobre IP (NDI White Paper, 2023).
- Divergência de versão de IGMP entre AES67 (v2) e ST 2110 (v3), com risco de regressão de rede mista — fato técnico documentado em white paper de interoperabilidade AES67/SMPTE ST 2110.

## 6. CTA

Antes de considerar "IGMP snooping habilitado" como configuração de rede completa, a ATIV recomenda confirmar a presença de um querier ativo na mesma VLAN, identificar formalmente qual dispositivo venceu qualquer eleição entre múltiplos candidatos, e validar a versão de IGMP suportada em toda a cadeia quando a rede combinar padrões de mídia sobre IP diferentes.

---

## Boas práticas

- Nunca habilitar IGMP snooping sem confirmar a presença de um querier ativo na mesma VLAN.
- Em topologias com múltiplos switches capazes de atuar como querier, identificar e documentar qual dispositivo deve vencer a eleição, em vez de deixar isso ao acaso da numeração de IP.
- Verificar a versão de IGMP suportada por switch — não apenas por protocolo — antes de assumir interoperabilidade entre Dante/AES67 e equipamento de outro padrão de mídia sobre IP.
- Investigar mudanças recentes de topologia como primeira hipótese quando um sintoma de multicast aparece após período de estabilidade.
- Testar o comportamento de expiração de associação multicast em bancada, simulando perda temporária de querier, antes de considerar a rede validada para produção.

## Normas aplicáveis

- IETF RFC 3376 (IGMPv3) e RFC 2236 (IGMPv2) — protocolos de gerenciamento de grupo multicast.

## Verificações antes da implementação

- Confirmar em cada VLAN com tráfego multicast que existe exatamente um querier ativo, identificado e documentado.
- Testar a eleição de querier em bancada quando houver mais de um switch candidato na mesma VLAN.
- Validar a versão de IGMP suportada por todos os switches da cadeia em redes que combinem Dante/AES67 com outros padrões de mídia sobre IP.
- Simular perda temporária de querier (desligamento controlado) para observar o comportamento de degradação da rede antes da entrega do sistema.

---

## Fontes e rastreabilidade

**Fato técnico (DOC-14 — Netgear M4250 AV Line, manual do usuário):**
- Dependência estrutural entre querier e snooping.
- Comportamento de expiração de associação multicast sem atualização a tempo.
- Mecanismo de eleição de querier por menor endereço IP e regra de não-querier.

**Fato técnico (DOC-21 — NDI White Paper, 2023):**
- Tratamento de multicast como broadcast na ausência de IGMP snooping/querier.

**Fato técnico (DOC-20 — AES67/SMPTE ST 2110 Commonalities and Constraints, 2019):**
- Divergência de versão de IGMP entre AES67 e ST 2110, com risco de regressão em rede mista.

**Norma consolidada (DOC-13 — BICSI ICT Handbook, catálogo de normas):**
- RFC 3376 (IGMPv3), citada por referência cruzada.

---

*© 2026 Grupo ATIV — Documento interno. CT-NET-02-R00.*
