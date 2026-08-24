# Dante, AES67 e SMPTE ST 2110-30: onde convergem e onde não convergem

**ID:** CT-AUD-01-R00 | **Marca:** ATIV | **Pilar:** AUD | **Formato:** Artigo técnico
**Meta description candidata (152 car.):** "É tudo AES67 no fundo" é uma simplificação perigosa. Os pontos exatos onde Dante, AES67 e ST 2110-30 convergem — e onde exigem tratamento específico.
**Palavras-chave candidatas:** Dante AES67 diferença, SMPTE ST 2110-30, interoperabilidade áudio IP, conformance level AES67, PTP zero offset ST 2110

---

## 1. DOR

"É tudo a mesma coisa, é áudio sobre IP" é a simplificação que mais gera retrabalho em projetos que combinam equipamento Dante com broadcast profissional em SMPTE ST 2110. Os três ecossistemas — Dante, AES67 e ST 2110-30 — compartilham fundamentos reais (RTP, PTP, multicast), o que cria a falsa impressão de interoperabilidade automática. Na prática, cada um impõe restrições específicas que o outro não exige, e a falha de interoperabilidade não aparece como erro explícito — aparece como dessincronismo progressivo, dispositivo que "não aparece" na rede, ou stream que outros equipamentos simplesmente recusam.

## 2. IMPACTO

- **Falha de interoperabilidade silenciosa:** um dispositivo AES67 tecnicamente compatível pode não interoperar com um transmissor ST 2110 se não atender a constraints específicos do ST 2110 — sem gerar mensagem de erro clara, apenas ausência de sinal.
- **Presunção incorreta de redundância:** assumir que um sistema Dante ou AES67 tem redundância nativa equivalente ao broadcast profissional é um erro de projeto — nenhum dos dois padrões exige suporte a redundância por definição.
- **Retrabalho em integração mista:** projetos que combinam equipamento de diferentes ecossistemas sem mapear os pontos de divergência descobrem a incompatibilidade apenas na integração final, quando o custo de correção é maior.

## 3. SOLUÇÃO

Tratar os três como ecossistemas relacionados, não idênticos — com AES67 funcionando como camada de interoperabilidade comum, ST 2110-30 como um subconjunto de AES67 com restrições adicionais específicas de broadcast, e Dante como ecossistema proprietário que oferece um modo de compatibilidade AES67 para servir de ponte com os outros dois. Mapear os pontos exatos de divergência antes de especificar um projeto que combine mais de um desses padrões.

## 4. METODOLOGIA

### 4.1 O que cada padrão realmente é

AES67 não é uma tecnologia de transporte proprietária — é uma camada de interoperabilidade: <cite index="5-1">AES67 é um padrão definido pela Audio Engineering Society para viabilizar interoperabilidade de streaming de áudio sobre IP de alto desempenho entre diversos produtos de rede de áudio baseados em IP atualmente disponíveis — não é uma tecnologia nova, é um modo de interoperabilidade que permite a ponte entre diferentes tecnologias de rede de áudio baseadas em IP</cite>, publicado originalmente em 2013, com revisões em 2015 e 2018, cobrindo <cite index="5-1">sincronização, identificação de clock de mídia, transporte de rede, codificação e streaming, descrição de sessão e gerenciamento de conexão</cite>.

SMPTE ST 2110 tem escopo mais amplo e origem posterior: <cite index="5-1">anunciado em setembro de 2017, é um conjunto de normas que especifica o transporte, sincronização e descrição de fluxos de essência elementares separados sobre redes IP profissionais em tempo real, para produção ao vivo, playout e outras aplicações de mídia profissional</cite>, permitindo que <cite index="5-1">áudio, vídeo e dados auxiliares sejam roteados separadamente e reunidos novamente no ponto final</cite>. A parte específica de áudio PCM, ST 2110-30, <cite index="5-1">refere-se ao padrão AES67 já consolidado — porém a norma SMPTE impõe algumas restrições adicionais em relação ao AES67 que desenvolvedores e usuários finais precisam considerar</cite>.

### 4.2 A relação exata: subconjunto com quatro constraints adicionais

A forma mais precisa de descrever a relação entre os dois é: <cite index="4-1">SMPTE ST 2110-30 pode ser visto como um subconjunto do AES67 — os princípios operacionais gerais e requisitos obrigatórios para transporte de stream, configuração de pacote e sinalização definidos pelo SMPTE ST 2110 são idênticos aos do AES67. No entanto, o SMPTE ST 2110 define restrições adicionais às quais implementações AES67 devem aderir para garantir compatibilidade total</cite>, especificamente: <cite index="4-1">suporte ao perfil PTP definido na SMPTE ST 2059-2; valor de offset zero entre o clock de mídia e o clock do stream RTP; opção obrigatória de forçar o dispositivo a operar em modo PTP somente-escravo; e suporte a IGMPv3</cite>.

Esses quatro pontos são exatamente onde um dispositivo "compatível com AES67" pode falhar ao tentar interoperar com um ambiente ST 2110 — porque nenhum deles é exigido pelo AES67 isoladamente.

### 4.3 Offset zero: por que essa restrição existe

Entre as quatro restrições, a de offset zero é a mais sutil, porque afeta o comportamento de reinicialização de stream, não apenas a configuração inicial. A norma de origem explica: <cite index="3-1">o AES67 declara que "clocks RTP operam com um offset constante em relação ao clock de mídia", seguindo a RFC 3550, que recomenda que "o valor inicial do timestamp deveria ser aleatório"</cite> — geralmente por razões de segurança em cenários de RTP criptografado. Já o <cite index="3-1">ST 2110-10 exige que "streams RTP em conformidade com esta norma devem utilizar um offset de clock RTP de zero em relação ao Clock de Mídia"</cite>, com justificativa explícita: <cite index="3-1">"a exigência de um valor de offset zero nesta norma permite restauração rápida de sinais após reinícios do transmissor — eliminar a provisão de offset aleatório da RFC 3550 permite que o receptor use o sinal assim que o fluxo de pacotes for restaurado, sem esperar a propagação sistêmica de um objeto SDP revisado"</cite>.

Na prática, isso significa que um transmissor AES67 genuíno, mas configurado com offset aleatório (comportamento padrão permitido pela norma AES67), não vai interoperar corretamente com receptores ST 2110 até que seja reconfigurado para offset zero — mesmo sendo, sob todos os outros aspectos, um dispositivo AES67 plenamente compatível.

### 4.4 Níveis de conformidade: nem todo "compatível com ST 2110" é igual

O ST 2110-30 não é monolítico — ele define seis níveis de conformidade, e apenas um é obrigatório: <cite index="0-1">o ST 2110-30 especifica seis níveis de conformidade, sendo o nível A o único obrigatório — o nível A é uma reafirmação dos requisitos obrigatórios do AES67: um receptor deve conseguir receber e processar streams com codificação PCM linear de 24 bits, frequência de amostragem de 48 kHz (clock de mídia), de 1 a 8 canais por stream, e tempo de pacote de 1 ms (48 amostras de áudio por canal em cada pacote)</cite>. Transmissores têm liberdade dentro desse limite: <cite index="0-1,0-2">transmissores devem conseguir gerar os streams correspondentes, cabendo ao fabricante escolher quantos canais por stream são suportados, desde que o número esteja dentro dos requisitos do receptor — os níveis B e C especificam tempos de pacote mais curtos e maior contagem de canais, incluindo o nível A como requisito mínimo</cite>. Para taxas de amostragem de 96 kHz, existem os níveis equivalentes AX, BX e CX.

Isso importa em especificação de projeto porque "suporta ST 2110" sem especificar o nível de conformidade é uma informação incompleta — um dispositivo pode suportar apenas o nível A obrigatório e não interoperar com um projeto que assume nível B ou C para latência reduzida.

### 4.5 Guia prático de interoperabilidade nos dois sentidos

Para quem parte de um dispositivo AES67 e precisa interoperar com ST 2110: <cite index="1-1">usuários de uma implementação AES67 que desejam interoperar com uma implementação ST 2110 devem estar preparados para sincronizar usando o Perfil de Mídia AES67 ajustado para ser compatível com o ST 2059, conforme descrito na AES R16 — nenhuma outra adaptação especial é exigida para receptores que vão receber de transmissores ST 2110 operando no nível de conformidade obrigatório A. Transmissores AES67 devem usar offset zero entre o clock de mídia e o clock RTP para interoperar com receptores ST 2110</cite>.

No sentido inverso: <cite index="1-2">usuários de uma implementação ST 2110 que desejam interoperar com qualquer implementação AES67 devem estar preparados para operar usando o perfil padrão do IEEE 1588-2008 — receptores devem conseguir receber streams com um offset entre os timestamps de clock de mídia e RTP, e transmissores só precisam operar no modo de nível de conformidade A do ST 2110</cite>. Ainda assim, <cite index="1-2">o AES67 define requisitos obrigatórios adicionais que precisariam ser incorporados a implementações SMPTE ST 2110 para plena conformidade com AES67</cite> — a interoperabilidade não é automaticamente bidirecional e completa em todos os aspectos, mesmo seguindo essas orientações.

### 4.6 Redundância: nenhum dos dois exige, mas as implicações divergem

Um ponto de atenção para projetos de missão crítica: <cite index="2-1">nem AES67 nem ST 2110 exigem suporte a qualquer funcionalidade de redundância, mas o ST 2110 menciona que, caso a redundância seja oferecida, ela deve estar em conformidade com o SMPTE ST 2022-7, que descreve "comutação de proteção contínua de datagramas RTP"</cite>, impondo uma restrição adicional relevante para arquitetura de rede: <cite index="2-1">"streams redundantes não devem usar simultaneamente endereços de origem idênticos e endereços de destino idênticos" — porque, embora o ST 2022-7 permita streams RTP com endereços de origem e destino duplicados em redes físicas separadas, esse mecanismo não pode ser representado em SDP</cite>. Ou seja: redundância em ambiente ST 2110 exige projeto de rede específico (endereçamento distinto por caminho redundante), não apenas "duplicar o cabo".

### 4.7 Onde o Dante se encaixa nessa relação

Dante, como ecossistema da Audinate, não é definido pelas mesmas normas abertas que regem AES67 e ST 2110 — é uma implementação proprietária que oferece um modo de compatibilidade AES67 como ponte de interoperabilidade com os outros ecossistemas. Na prática de projeto, isso significa que um dispositivo "Dante com modo AES67" segue as mesmas regras de interoperabilidade com ST 2110 descritas acima (nível de conformidade, offset de clock, perfil PTP) — a compatibilidade não é automática só por o dispositivo ser Dante; depende de qual conjunto de constraints do AES67/ST 2110 esse modo de compatibilidade específico implementa.

### 4.8 Quadro-resumo de divergências

| Aspecto | AES67 | ST 2110-30 | Implicação prática |
|---|---|---|---|
| Perfil PTP | Default + Media Profile (recomendado) | ST 2059-2 (obrigatório) | Verificar perfil suportado antes de assumir compatibilidade |
| Offset de clock RTP/mídia | Pode ser aleatório (RFC 3550) | Deve ser zero (obrigatório) | Transmissor AES67 pode precisar reconfiguração explícita |
| Modo slave-only forçável | Não exigido (depende de BMCA) | Exigido | Ausência dessa opção limita adequação do dispositivo ao papel de expansor |
| Versão de IGMP | v2 (RFC 2236) | v3 (RFC 3376), obrigatório | Risco de regressão de rede mista (ver CT-NET-02) |
| Nível de conformidade | Nível único obrigatório | 6 níveis (A/B/C, AX/BX/CX), A obrigatório | "Suporta ST 2110" sem nível especificado é informação incompleta |
| Redundância | Não exigida | Não exigida; se oferecida, deve seguir ST 2022-7 com endereçamento distinto | Redundância em ST 2110 exige projeto de rede específico |

## 5. PROVA

- Definição e escopo histórico de AES67 e SMPTE ST 2110 — fato técnico documentado em white paper de interoperabilidade (Alliance for IP Media Solutions, 2019).
- ST 2110-30 como subconjunto de AES67 com quatro constraints adicionais (perfil PTP, offset zero, slave-only, IGMPv3) — fato técnico documentado na mesma fonte.
- Justificativa técnica da exigência de offset zero no ST 2110 — fato técnico documentado na mesma fonte.
- Seis níveis de conformidade do ST 2110-30 (A/B/C, AX/BX/CX), com nível A como único obrigatório — fato técnico documentado na mesma fonte.
- Orientação prática de interoperabilidade nos dois sentidos (AES67→ST 2110 e ST 2110→AES67) — fato técnico documentado na mesma fonte.
- Ausência de exigência de redundância em ambos os padrões, com constraint de endereçamento quando ST 2022-7 é adotado — fato técnico documentado na mesma fonte.

## 6. CTA

Antes de especificar um projeto que combine Dante, AES67 e/ou ST 2110, a ATIV recomenda mapear explicitamente os quatro pontos de divergência entre AES67 e ST 2110 (perfil PTP, offset de clock, modo slave-only, versão de IGMP) contra a especificação real de cada equipamento envolvido — "suporta AES67" ou "suporta ST 2110" sem esse detalhamento não é informação suficiente para garantir interoperabilidade.

---

## Boas práticas

- Nunca tratar "suporta AES67" e "suporta ST 2110" como sinônimos de interoperabilidade automática — verificar os quatro pontos de divergência específicos.
- Confirmar o nível de conformidade ST 2110-30 (A, B, C, AX, BX ou CX) de cada dispositivo antes de assumir compatibilidade de latência ou contagem de canais.
- Verificar se transmissores AES67 do projeto operam com offset zero quando houver interoperação com ambiente ST 2110.
- Não presumir redundância em sistemas Dante/AES67/ST 2110 — nenhum dos padrões exige por definição; projetar explicitamente quando necessário, seguindo ST 2022-7 com endereçamento distinto por caminho.
- Tratar "Dante com modo AES67" como sujeito às mesmas regras de interoperabilidade do AES67 puro, não como compatibilidade automática garantida pela marca.

## Normas aplicáveis

- AES67-2018 — Audio Engineering Society standard on high-performance streaming audio-over-IP interoperability.
- SMPTE ST 2110 (-10, -20, -30, -21, -31, -40) — Professional Media over Managed IP Networks.
- SMPTE ST 2059-2 — perfil PTP para sincronização em ambiente de broadcast profissional.
- SMPTE ST 2022-7 — Seamless Protection Switching of RTP Datagrams (redundância).
- IEEE 1588-2008 (PTPv2) — protocolo de sincronização de clock de precisão.
- IETF RFC 3376 (IGMPv3) e RFC 2236 (IGMPv2).

## Verificações antes da implementação

- Levantar o nível de conformidade ST 2110-30 de cada dispositivo do projeto antes de assumir interoperabilidade de latência/canais.
- Confirmar o offset de clock RTP/mídia configurado em transmissores AES67 que precisem interoperar com ambiente ST 2110.
- Verificar se cada dispositivo suporta modo slave-only forçado quando a arquitetura de projeto exigir essa garantia (ver também CT-AUD-04, split-brain de DSP).
- Validar a versão de IGMP suportada por switches e dispositivos terminais em redes mistas AES67/ST 2110.
- Quando redundância for exigida, projetar endereçamento de rede distinto por caminho, conforme constraint do ST 2110 sobre o ST 2022-7.

---

## Fontes e rastreabilidade

**Fato técnico (DOC-20 — AES67/SMPTE ST 2110 Commonalities and Constraints, Alliance for IP Media Solutions, 2019):**
- Definição e histórico de AES67 e SMPTE ST 2110.
- ST 2110-30 como subconjunto de AES67 com quatro constraints adicionais.
- Justificativa técnica da exigência de offset zero.
- Seis níveis de conformidade do ST 2110-30.
- Orientação de interoperabilidade prática nos dois sentidos.
- Ausência de exigência de redundância e constraint de endereçamento via ST 2022-7.

**Conhecimento técnico consolidado (não específico de documento da base RAG):**
- Posicionamento do Dante como ecossistema proprietário com modo de compatibilidade AES67 — tratamento conceitual estável, não sujeito a mudança normativa recente, consistente com a arquitetura de referência já adotada pela ATIV (Q-SYS como DSP único, unidades adicionais como expansores Dante — ver CT-AUD-04).

---

*© 2026 Grupo ATIV — Documento interno. CT-AUD-01-R00.*
