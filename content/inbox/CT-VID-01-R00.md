# NDI, SDVoE e HDBaseT: critérios de escolha por latência, banda e escala

**ID:** CT-VID-01-R00 | **Marca:** ATIV | **Pilar:** VID | **Formato:** Comparativo
**Meta description candidata (152 car.):** NDI, SDVoE e HDBaseT resolvem problemas diferentes. Como escolher o transporte de vídeo certo por latência, escala e orçamento de infraestrutura.
**Palavras-chave candidatas:** NDI vs SDVoE, HDBaseT vs AVoIP, latência vídeo IP, escala matriz vídeo, banda NDI HX

---

## 1. DOR

A escolha do transporte de vídeo em um projeto AV frequentemente segue o portfólio que o integrador já domina, não o requisito real do projeto. NDI, SDVoE e HDBaseT resolvem problemas genuinamente diferentes — latência quase nula ponto a ponto, roteamento any-to-any em escala, ou extensão simples de sinal a baixo custo — e escolher pelo hábito, em vez de pelo eixo técnico que realmente importa para aquele projeto, produz ou desperdício de orçamento em capacidade não utilizada, ou um sistema que não entrega o desempenho que a aplicação exige.

## 2. IMPACTO

- **Latência inadequada ao uso:** especificar um transporte comprimido de alta latência para uma aplicação interativa (KVM, imagem médica, ponteiro de mouse) gera experiência perceptivelmente ruim, mesmo com resolução e qualidade de imagem corretas.
- **Custo de infraestrutura desnecessário:** especificar 10GbE ponta a ponta para uma instalação pequena e fixa, onde extensão simples resolveria com custo muito menor, é desperdício de orçamento.
- **Teto de escala descoberto tarde:** uma solução dimensionada para poucos pontos que precisa crescer para dezenas de salas pode esbarrar em limite de porta ou custo de licenciamento não previsto na especificação original.

## 3. SOLUÇÃO

Escolher o transporte de vídeo por três eixos técnicos explícitos — latência exigida pela aplicação, banda/infraestrutura disponível, e escala esperada do sistema (atual e de crescimento) — em vez de por preferência de portfólio. Cada um dos três padrões tem um ponto ótimo claro nesses eixos, e nenhum deles é superior nos três simultaneamente.

## 4. METODOLOGIA

### 4.1 HDBaseT: extensão ponto a ponto sem compressão

HDBaseT resolve o problema mais simples e mais barato: levar um sinal HDMI mais longe do que o cabo nativo permite, sem introduzir latência perceptível. <cite index="35-1">HDBaseT é um padrão de conectividade que usa cabos Cat 5e para transmitir vídeo de alta definição não comprimido, áudio e outros sinais entre fontes e displays remotos a uma distância de até 100 metros — em comparação, HDMI só consegue transmitir sinal por até 12 metros de cabo</cite>. A ausência de compressão é o diferencial técnico central: <cite index="35-1">um dos benefícios do HDBaseT é evitar a necessidade de compressão, o que garante alta qualidade de imagem e velocidade de entrega</cite>, resultando em latência no patamar de microssegundos — <cite index="33-1">HDBaseT transporta vídeo sem compressão com latência na faixa de microssegundos, abaixo de um quadro a 60 Hz, sem etapa de codificação/decodificação, o que o torna a escolha certa para KVM, imagem médica ou qualquer transmissão ao vivo onde sincronismo labial e resposta de ponteiro precisam parecer locais</cite>.

O limite técnico do padrão é justamente onde ele para de ser vantajoso: <cite index="28-1">HDBaseT tradicional opera a 1 Gbps, o que não é suficiente para 4K a 60 Hz em 4:4:4 sem compressão significativa</cite> — a variante HDBaseT-IP estende esse alcance para redes IP de maior distância, mas ainda dentro de uma lógica de extensão ponto a ponto, não de roteamento any-to-any nativo em grande escala.

### 4.2 SDVoE: latência mínima com roteamento em escala, ao custo de 10GbE

SDVoE resolve um problema diferente: roteamento any-to-any com latência equivalente à de uma conexão direta, exigindo infraestrutura de rede de maior capacidade. <cite index="34-1">SDVoE é um padrão aberto que permite estender vídeo 4K não comprimido, áudio e dados de controle por redes Ethernet de 10 gigabits padrão — vídeo 4K não comprimido a 60 Hz com subamostragem de crominância 4:4:4 e HDR demanda aproximadamente 18 gigabits por segundo</cite>, com <cite index="34-1">latência sub-100 microssegundos e comutação quase instantânea</cite>. A vantagem sobre uma matriz tradicional é estrutural, não apenas de desempenho: <cite index="29-1">a tecnologia por trás de todos os produtos SDVoE é a mesma — API SDVoE, ressincronização de clock SDVoE e gerenciamento de sessão SDVoE — garantindo que dispositivos de fabricantes diferentes sejam interoperáveis por design</cite>.

O custo de entrada é a principal contrapartida: <cite index="33-1">SDVoE exige 10GbE por porta</cite>, o que torna a solução mais cara por ponto do que HDBaseT em instalações pequenas, mas com vantagem de escala clara conforme o sistema cresce: <cite index="33-1">acima de 32 pontos terminais, em múltiplas salas, ou onde o número de salas deve crescer, o AVoIP (incluindo SDVoE) se sobressai — adicionar um ponto significa uma porta de switch e um encoder, não a substituição do chassi inteiro</cite>, enquanto <cite index="33-1">uma matriz tradicional está travada na contagem de portas original — crescer além dela significa substituir toda a unidade</cite>.

### 4.3 NDI: escala máxima sobre infraestrutura padrão, com compressão e latência variáveis por perfil

NDI resolve um terceiro problema: distribuir vídeo em escala muito maior, sobre infraestrutura de rede convencional (1 Gbps), aceitando compressão e latência maiores em troca de flexibilidade e custo de infraestrutura menor. O white paper de referência do protocolo detalha o perfil de banda: <cite index="0-1">enquanto um único stream de vídeo HD possivelmente pode ser entregue em uma rede Fast Ethernet (100 Mbps), redes Gigabit (1000 Mbps) são essenciais em fluxos de produção — um stream NDI típico de vídeo HD 1080i produz uma taxa de dados de até 100 Mbps por stream</cite>.

A banda necessária varia significativamente conforme o perfil de compressão escolhido, o que exige decisão explícita de projeto, não configuração padrão. Para o perfil de alta banda (SpeedHQ), a tabela de referência do fabricante indica <cite index="2-1">até 125,59 Mbps para 1080p50 e 249,99 Mbps para 3840×2160 a 60p</cite>. Já para o perfil HX3 com codec H.265, a mesma fonte indica banda substancialmente menor — <cite index="1-1">20 Mbps para 1080 50i e 84 Mbps para 3840×2160 a 60p</cite> — às custas de latência maior, especificada como <cite index="1-1">latência glass-to-glass inferior a 100 ms, com tempo de resposta a requisição de quadro-I inferior a 80 ms</cite>. Para o perfil High Bandwidth (não comprimido em I-frame apenas), a latência é significativamente menor: <cite index="4-1">NDI tem latência técnica de 16 linhas de varredura de vídeo, embora na prática a maioria das implementações opere com um campo de latência — implementações em hardware podem entregar latência ponta a ponta dentro de 8 linhas de varredura</cite>.

### 4.4 O requisito comum de multicast — e por que ele conecta este artigo ao de rede

Independentemente do perfil escolhido, NDI depende do mesmo mecanismo de contenção de multicast já tratado para Dante/AES67: <cite index="5-1">sem consulta e snooping de IGMP, o tráfego multicast é tratado da mesma forma que uma transmissão broadcast, resultando no encaminhamento de pacotes para todas as portas da rede</cite> — a mesma dependência de querier e snooping documentada em CT-NET-02 se aplica integralmente a projetos NDI, e deve ser verificada com o mesmo rigor.

### 4.5 Quadro comparativo

| Critério | HDBaseT | SDVoE | NDI |
|---|---|---|---|
| Latência típica | Microssegundos — sem compressão, sub-quadro | Sub-100 microssegundos — vídeo não comprimido/visualmente sem perdas | Variável por perfil: técnica de 16 linhas (~1 campo) em High Bandwidth; até <100ms glass-to-glass em HX3 |
| Infraestrutura exigida | Cabo Cat5e/6a ponto a ponto, até 100m nativo | 10GbE por porta | Rede Gigabit padrão (1GbE); HX opera até em Fast Ethernet/Wi-Fi |
| Escala/topologia | Extensão ponto a ponto; matriz tradicional trava na contagem de portas original | Any-to-any nativo; cresce por porta de switch, não por troca de chassi | Escala muito alta sobre infraestrutura IP convencional; discovery e roteamento por software |
| Custo relativo por ponto (instalação pequena) | Mais barato | Mais caro (exige 10GbE) | Baixo (infraestrutura 1GbE já comum) |
| Ponto ótimo | Instalações pequenas e fixas (<16 pontos), aplicações interativas sensíveis a latência (KVM, imagem médica) | Sistemas de médio/grande porte com crescimento esperado, exigência de latência mínima com roteamento any-to-any | Sistemas de grande escala, múltiplas salas/prédios, produção com muitas fontes simultâneas, tolerância a latência de dezenas de ms |
| Requisito de rede | Não aplicável (ponto a ponto dedicado) | Rede 10GbE dedicada, sem exigência formal de QoS pelo protocolo em si | Depende de IGMP snooping/querier configurado corretamente (ver CT-NET-02) |

### 4.6 Critério de decisão resumido

- **Menos de 16 pontos, layout fixo, latência crítica para uso interativo:** HDBaseT é a opção de menor custo com desempenho adequado.
- **Sistema de médio a grande porte com crescimento esperado, latência crítica mesmo em escala:** SDVoE, aceitando o custo de 10GbE por porta como investimento de escalabilidade.
- **Escala muito grande, múltiplas salas ou prédios, produção com muitas fontes simultâneas, tolerância a latência de algumas dezenas de milissegundos:** NDI, escolhendo o perfil de compressão (High Bandwidth, HX, HX3) conforme o equilíbrio entre banda disponível e latência aceitável para cada fonte específica.

## 5. PROVA

- Distância nativa de 100m e ausência de compressão do HDBaseT — fato técnico documentado em fonte especializada do setor (Aristaproav).
- Latência de HDBaseT na faixa de microssegundos e limite de banda de 1 Gbps do padrão original — fato técnico documentado em fontes especializadas (Modulit, CE Pro).
- Requisito de 10GbE por porta e banda de ~18 Gbps para 4K60 4:4:4 não comprimido do SDVoE, com latência sub-100 microssegundos — fato técnico documentado em fontes especializadas (AV Today Magazine, SDVoE Alliance).
- Vantagem de escala de soluções AVoIP/SDVoE acima de 32 pontos terminais — fato técnico documentado em fonte especializada (Modulit).
- Tabela de banda por perfil de compressão NDI (High Bandwidth, HX, HX3) e latência glass-to-glass do HX3 — fato técnico documentado em white paper oficial do protocolo (NDI White Paper, 2023).
- Latência técnica de 16 linhas de varredura do NDI High Bandwidth, com implementações de hardware chegando a 8 linhas — fato técnico documentado na mesma fonte.
- Dependência de IGMP snooping/querier para NDI multicast — fato técnico documentado na mesma fonte.

## 6. CTA

Antes de especificar o transporte de vídeo de um projeto, a ATIV recomenda definir explicitamente os três parâmetros de decisão — latência máxima aceitável pela aplicação, infraestrutura de rede disponível ou orçada, e escala esperada em 3-5 anos — e escolher entre HDBaseT, SDVoE e NDI (ou combinações entre eles) a partir desses parâmetros, não da familiaridade do integrador com um portfólio específico.

---

## Boas práticas

- Definir latência máxima aceitável pela aplicação antes de escolher o padrão de transporte, não depois.
- Tratar HDBaseT como opção padrão apenas para instalações pequenas e fixas com requisito de baixíssima latência — não como escolha automática por familiaridade.
- Orçar SDVoE considerando o custo de 10GbE por porta desde a especificação inicial, não como surpresa na fase de execução.
- Escolher o perfil de compressão NDI (High Bandwidth, HX, HX3) por fonte individual, conforme o equilíbrio entre banda disponível e latência aceitável para aquele uso específico — não aplicar um único perfil a todo o sistema por padrão.
- Configurar IGMP snooping e querier como pré-requisito de qualquer projeto NDI multicast, não como item opcional.

## Normas aplicáveis

- IEEE P1911.3 — padrão de referência para transmissão de sinais 5Play (base técnica do HDBaseT).
- Especificações da SDVoE Alliance — API, ressincronização de clock e gerenciamento de sessão SDVoE.
- Especificações técnicas NDI (NewTek/Vizrt) — perfis de compressão High Bandwidth, HX e HX3.

## Verificações antes da implementação

- Confirmar a latência real exigida pela aplicação (interativa vs. tolerante a atraso) antes de escolher entre os três padrões.
- Validar orçamento de infraestrutura de rede contra o requisito de 10GbE quando SDVoE for escolhido.
- Testar o perfil de compressão NDI escolhido em bancada com a banda real disponível no projeto, não apenas com os valores de referência da tabela do fabricante.
- Confirmar IGMP snooping e querier configurados corretamente antes de considerar um projeto NDI multicast pronto para produção.
- Reavaliar a escala esperada em 3-5 anos antes de fechar a escolha entre matriz HDBaseT (portas fixas) e AVoIP/SDVoE (escalável por porta de switch).

---

## Fontes e rastreabilidade

**Fato técnico (DOC-21 — NDI White Paper, 2023):**
- Tabela de banda por perfil de compressão (High Bandwidth SpeedHQ, HX h.265, HX3 h.264/h.265).
- Latência técnica (16 linhas de varredura) e latência glass-to-glass do HX3 (<100ms).
- Dependência de IGMP snooping/querier para multicast NDI.

**Pesquisa web, 2025–2026 (fontes especializadas do setor AV):**
- Características técnicas do HDBaseT (distância, ausência de compressão, limite de banda de 1 Gbps) — Aristaproav, Modulit, CE Pro.
- Características técnicas do SDVoE (requisito de 10GbE, banda de vídeo 4K não comprimido, latência sub-100 microssegundos) — AV Today Magazine, SDVoE Alliance.
- Critério de escala (limiar de 16 e 32 pontos terminais) para comparação de custo entre HDBaseT e AVoIP/SDVoE — Modulit.

**Observação de aplicabilidade:** os limiares de escala (16/32 pontos) e as comparações de custo citadas são estimativas de mercado publicadas por fontes do setor em 2025-2026, não valores normativos fixos — cada projeto deve validar o ponto de equilíbrio real com cotação atualizada de equipamento e infraestrutura.

---

*© 2026 Grupo ATIV — Documento interno. CT-VID-01-R00.*
