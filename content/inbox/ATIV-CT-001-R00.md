# ATIV-CT-001-R00 — BACKLOG EDITORIAL DE CONTEÚDO TÉCNICO AV

> **Documento:** ATIV-CT-001-R00
> **Data:** 24 de agosto de 2026
> **Classificação:** Documento interno — Grupo ATIV
> **Base:** Instrução Mestre v2.0, Índice RAG v1.0, contrato editorial (seções 1.1 e 1.2)
> **Status:** R00 — para revisão do Diretor Técnico antes de iniciar a produção dos artigos

---

## 1. FINALIDADE

Este documento consolida o backlog de temas técnicos a serem produzidos pelo agente especialista AV, com identificação única por tema, marca responsável, dor de mercado, fontes RAG obrigatórias, necessidade de validação online e prioridade de produção.

Cada tema, quando produzido, gera um artigo em Markdown seguindo a estrutura DOR → IMPACTO → SOLUÇÃO → METODOLOGIA → PROVA → CTA, com seção final obrigatória "Fontes e rastreabilidade".

Os arquivos `content/README.md`, `content/COPY_CONTRACT.md`, `content/VOICE_AND_TONE.md`, `docs/content-strategy.md`, `docs/seo-strategy.md`, `seo/keyword-map.csv` e `seo/route-plan.csv` não estão na base do projeto. Onde o contrato exige consultá-los, este backlog aplica a Instrução Mestre (seção 12) como substituto de voz e marca, e **não define URLs nem rotas** — a arquitetura SEO permanece sob controle do repositório.

---

## 2. CONVENÇÕES

**ID:** `CT-[PILAR]-[NN]`, onde PILAR ∈ {AUD, VID, NET, CTL, INF, DOC, PUB, VW, DIST}.

**Formato de peça:**
- **Artigo técnico** (1.800–3.000 palavras) — Insights / autoridade
- **Guia de referência** (2.500–4.000 palavras) — material de apoio, reutilizável em propostas
- **Comparativo** (1.500–2.500 palavras, com tabela obrigatória conforme Instrução Mestre 13.1)
- **Checklist** (800–1.500 palavras) — download / pré-venda técnica

**Validação online:** "Sim" quando o tema depende de firmware, versão, modelo corrente, preço ou edição normativa recente (Instrução Mestre 5.2). "Não" quando o tema é conceitual/normativo estável (5.3).

**Prioridade:** P1 (produzir primeiro — sustenta propostas em curso ou lacuna competitiva clara), P2, P3.

---

## 3. BACKLOG POR PILAR

### 3.1 Pilar AUD — Áudio profissional e áudio sobre IP

| ID | Título de trabalho | Marca | Formato | Dor | Fontes RAG | Online | Prior. |
|---|---|---|---|---|---|---|---|
| CT-AUD-01 | Dante, AES67 e SMPTE ST 2110-30: onde convergem e onde não convergem | ATIV | Artigo técnico | Integradores tratam os três como intercambiáveis; falhas de clock e multicast em campo | DOC-20, DOC-13, DOC-24 | Não | P1 |
| CT-AUD-02 | AEC em salas institucionais: por que o número de canais nativos define a arquitetura do DSP | ATIV | Artigo técnico | Subdimensionamento de AEC em auditórios e plenários; eco em videoconferência | DOC-12, DOC-24, DOC-09 | Sim (canais AEC por modelo de Core) | P1 |
| CT-AUD-03 | Mix-minus para plenários e auditórios híbridos: lógica, topologia e falhas comuns | ATIV | Guia de referência | Retorno de áudio remoto e realimentação em salas com participação remota | DOC-12, DOC-11 | Não | P2 |
| CT-AUD-04 | DSP único vs. DSPs paralelos: o problema do "split-brain" em sistemas Dante | ATIV | Artigo técnico | Projetos com dois processadores disputando roteamento e clock | DOC-24, DOC-20 | Não | P1 |
| CT-AUD-05 | STI, SPL e RT60: critérios mensuráveis de inteligibilidade para aceitação de sistemas | ATIV | Guia de referência | Editais e aceitações sem critério objetivo de inteligibilidade | DOC-02, DOC-12, DOC-09 | Não | P2 |
| CT-AUD-06 | Conferência sem fio DECT em ambientes densos: planejamento de canais e coexistência | ATIV | Artigo técnico | Interferência e limite de canais em plenários com dezenas de microfones | DOC-11, DOC-29 | Sim (limites por região/modelo) | P2 |
| CT-AUD-07 | Loudness em streaming institucional: ITU-R BS.1770 e EBU R128 aplicados a sessões públicas | ATIV | Artigo técnico | Transmissões de sessões com nível inconsistente entre oradores | DOC-13 (lacuna: R128 não está no RAG) | Sim | P3 |

### 3.2 Pilar VID — Vídeo profissional e vídeo sobre IP

| ID | Título de trabalho | Marca | Formato | Dor | Fontes RAG | Online | Prior. |
|---|---|---|---|---|---|---|---|
| CT-VID-01 | NDI, SDVoE e HDBaseT: critérios de escolha por latência, banda e escala | ATIV | Comparativo | Escolha de transporte de vídeo por hábito, não por requisito | DOC-21, DOC-22, DOC-09, DOC-13 | Sim (versões NDI, banda por perfil) | P1 |
| CT-VID-02 | EDID e HDCP em matrizes institucionais: gestão preventiva para evitar tela preta | ATIV | Guia de referência | Falhas intermitentes de imagem atribuídas a "cabo ruim" | DOC-12, DOC-09 | Não | P1 |
| CT-VID-03 | Dimensionamento de displays por distância e tipo de conteúdo (ANSI/AVIXA V202.01) | ATIV | Guia de referência | Displays subdimensionados em plenários e salas de controle | DOC-07, DOC-09, DOC-12 | Não | P1 |
| CT-VID-04 | Captura PTZ para plenários e salas de audiência: cobertura, presets e integração com automação | ATIV | Artigo técnico | Câmeras posicionadas sem plano de cobertura; operação manual em sessões | DOC-11, DOC-09 | Sim (modelos e protocolos de controle correntes) | P2 |
| CT-VID-05 | Matriz HDMI: por que 4×4 costuma ser insuficiente e como validar o fluxo de sinal antes de especificar | ATIV | Artigo técnico | Matrizes subdimensionadas descobertas na instalação | DOC-12, DOC-29 | Não | P2 |
| CT-VID-06 | Gravação e streaming de sessões públicas: cadeia SDI/HDMI → captura → publicação | ATIV | Guia de referência | Órgãos públicos com obrigação de transparência e cadeia de gravação improvisada | DOC-11, DOC-12 | Sim (placas de captura correntes) | P2 |

### 3.3 Pilar NET — Redes convergentes para AV

| ID | Título de trabalho | Marca | Formato | Dor | Fontes RAG | Online | Prior. |
|---|---|---|---|---|---|---|---|
| CT-NET-01 | Segmentação de VLANs para AV: um modelo por função (Dante, controle, NDI, CFTV, gestão) | ATIV | Guia de referência | Redes AV flat compartilhando broadcast com TI corporativa | DOC-14, DOC-13, DOC-09, DOC-06 | Não | P1 |
| CT-NET-02 | IGMP snooping e querier: o par obrigatório para multicast AV estável | ATIV | Artigo técnico | Flood de multicast e quedas de áudio Dante em switches mal configurados | DOC-14, DOC-13 (RFC 3376) | Não | P1 |
| CT-NET-03 | QoS e DSCP para Dante, AES67 e PTP: marcação, filas e o que validar no switch | ATIV | Artigo técnico | Jitter e perda de clock em redes com QoS ausente ou marcado errado | DOC-14, DOC-20, DOC-13 | Não | P1 |
| CT-NET-04 | Orçamento PoE em switches AV: cálculo por classe, margem e falhas silenciosas | ATIV | Checklist | Dispositivos reiniciando por PoE budget esgotado | DOC-14, DOC-13 (802.3bt) | Sim (classes/potência por modelo) | P2 |
| CT-NET-05 | Segurança de rede para dispositivos AV: 802.1X, ACLs e superfície de ataque | ATIV | Artigo técnico | Dispositivos AV com credenciais padrão em redes corporativas | DOC-06, DOC-09, DOC-13 | Não | P2 |
| CT-NET-06 | Uplinks e oversubscription em redes AV over IP: quando 1G não basta | ATIV | Artigo técnico | Gargalo no uplink em salas com múltiplos encoders 4K | DOC-14, DOC-21, DOC-13 | Não | P2 |

### 3.4 Pilar CTL — Automação e controle

| ID | Título de trabalho | Marca | Formato | Dor | Fontes RAG | Online | Prior. |
|---|---|---|---|---|---|---|---|
| CT-CTL-01 | Q-SYS como plataforma unificada de áudio, vídeo e controle: arquitetura e limites | ATIV | Artigo técnico | Sistemas com controlador, DSP e switcher de fabricantes distintos e integração frágil | DOC-24, DOC-27 | Sim (famílias de Core e licenças correntes) | P1 |
| CT-CTL-02 | Controle de matriz por RS-232 e TCP/IP: fallback, watchdog e resiliência | ATIV | Guia de referência | Automação que "perde" o equipamento após queda de rede | DOC-24, DOC-12 | Não | P2 |
| CT-CTL-03 | Gestão de energia em sistemas AV (ANSI/INFOCOMM 4:2012): estados, ocupação e integração com BMS | ATIV | Artigo técnico | Salas ligadas 24h sem uso; ausência de plano energético | DOC-03, DOC-23 | Não | P3 |
| CT-CTL-04 | AV e automação predial unificados: BACnet, Modbus, REST e segmentação de sistemas críticos | ATIV | Artigo técnico | Integrações ad hoc entre AV, iluminação e BMS sem governança | DOC-23, DOC-06 | Não | P3 |
| CT-CTL-05 | Interfaces de usuário para operação não técnica: princípios de UCI para plenários e auditórios | ATIV | Artigo técnico | Painéis com centenas de botões; dependência de técnico em toda sessão | DOC-12, DOC-09, DOC-10 | Não | P2 |

### 3.5 Pilar INF — Infraestrutura elétrica, física e cabeamento

| ID | Título de trabalho | Marca | Formato | Dor | Fontes RAG | Online | Prior. |
|---|---|---|---|---|---|---|---|
| CT-INF-01 | Infraestrutura elétrica para racks AV segundo a ABNT NBR 5410: circuitos dedicados, aterramento e DPS | ATIV | Guia de referência | Racks em circuito compartilhado; ruído e danos por surto | DOC-16, DOC-18, DOC-10 | Não | P1 |
| CT-INF-02 | Setor estabilizado vs. não estabilizado: critério de alocação de cargas AV em UPS | ATIV | Artigo técnico | UPS subdimensionado por incluir cargas não críticas | DOC-16, DOC-05 | Não | P1 |
| CT-INF-03 | Projeto de rack AV (AVIXA F502.02): separação de sinais, térmica e manutenção | ATIV | Guia de referência | Racks sem ventilação, sem folga e sem organização por tipo de sinal | DOC-05, DOC-10, DOC-12 | Não | P2 |
| CT-INF-04 | Cabeamento estruturado para AV (NBR 14565 / TIA-568): Cat6A, fibra OS2/OM4 e HDBaseT | ATIV | Guia de referência | Cabeamento de dados usado para HDBaseT sem certificação | DOC-19, DOC-13, DOC-09 | Não | P2 |
| CT-INF-05 | Identificação de cabos AV (F501.01): padrão ATIV de etiquetagem e as-built | ATIV | Checklist | Manutenção impossível por ausência de identificação | DOC-04, DOC-12, DOC-09 | Não | P2 |
| CT-INF-06 | Coordenação AV, elétrica e dados em obra (J-STD-710): o que falha quando as disciplinas não conversam | ATIV | Artigo técnico | Infraestrutura entregue sem pontos, eletrocalhas ou circuitos previstos | DOC-08, DOC-29, DOC-28 | Não | P3 |

### 3.6 Pilar DOC — Documentação, comissionamento e aceitação

| ID | Título de trabalho | Marca | Formato | Dor | Fontes RAG | Online | Prior. |
|---|---|---|---|---|---|---|---|
| CT-DOC-01 | Documentação AV por nível de complexidade (ANSI/AVIXA D401.01:2023): o que entregar e quando | ATIV | Guia de referência | Entregas sem as-built, sem diagramas, sem rastreabilidade | DOC-01, DOC-29 | Não | P1 |
| CT-DOC-02 | Verificação de desempenho e aceitação (ANSI/INFOCOMM 10:2013): checklist de comissionamento | ATIV | Checklist | Sistemas "entregues" sem teste documentado | DOC-02, DOC-12, DOC-09 | Não | P1 |
| CT-DOC-03 | Da lista de equipamentos ao projeto executivo: escopo, diagrama lógico, endereçamento e homologação | ATIV | Artigo técnico | Propostas vencidas por preço que fracassam na execução | DOC-01, DOC-29, DOC-12 | Não | P2 |
| CT-DOC-04 | Manutenção preventiva e evolutiva em AV crítico: modelo de contrato, SLAs e passivos técnicos | ATIV | Artigo técnico | Sistemas sem manutenção até a falha; sem inventário de passivos | DOC-29, DOC-02 | Não | P2 |

### 3.7 Pilar PUB — Setor público, tribunais e licitações

| ID | Título de trabalho | Marca | Formato | Dor | Fontes RAG | Online | Prior. |
|---|---|---|---|---|---|---|---|
| CT-PUB-01 | Infraestrutura AV/IT para tribunais e salas de audiência: captura, gravação, interpretação e sigilo | ATIV | Guia de referência | Salas de audiência com áudio inaudível e gravação sem cadeia de custódia | DOC-11, DOC-09, DOC-12 | Não | P1 |
| CT-PUB-02 | Como escrever um termo de referência AV que não gere impugnação: critérios objetivos e equivalência técnica | ATIV | Artigo técnico | Editais com marca fechada ou requisito contraditório | Lei 14.133/2021 (base do projeto), Análise de Mercado 2024–2026 | Sim (jurisprudência recente TCU/TCE) | P1 |
| CT-PUB-03 | Ciclo de vida e menor dispêndio (Lei 14.133, art. 34 §1º): como o TCO entra no julgamento | ATIV | Artigo técnico | Julgamento por menor preço ignorando custo de manutenção e reposição | Lei 14.133/2021, DOC-26 | Não | P2 |
| CT-PUB-04 | Tendências de aquisição AV na administração pública brasileira (2024–2026) | ATIV | Artigo técnico | Gestores sem referência de mercado para especificar | Análise de Mercado (base do projeto), DOC-26 | Sim | P2 |
| CT-PUB-05 | Acessibilidade em auditórios e plenários públicos: loop de indução, legendas e alturas de montagem | ATIV | Guia de referência | Ambientes públicos sem recurso assistivo; exigência normativa não atendida | DOC-09, DOC-10, DOC-12 | Sim (NBR 9050 e resoluções aplicáveis) | P2 |

### 3.8 Pilar VW — Videowall e ambientes de comando e controle (Easywall)

| ID | Título de trabalho | Marca | Formato | Dor | Fontes RAG | Online | Prior. |
|---|---|---|---|---|---|---|---|
| CT-VW-01 | Videowall em NOC, SOC e centros de comando: latência, operação offline e continuidade | Easywall | Artigo técnico | Videowalls dependentes de nuvem que param quando a rede cai | DOC-06, DOC-21, DOC-07 | Não | P1 |
| CT-VW-02 | Licença perpétua vs. assinatura em software de videowall: TCO em 5 anos | Easywall | Comparativo | Custo recorrente imprevisível em contratos públicos plurianuais | DOC-26, Lei 14.133 (art. 34) | Sim (modelos de licenciamento de concorrentes) | P1 |
| CT-VW-03 | Integração de videowall por API REST com automação e sistemas de monitoramento | Easywall | Guia de referência | Operador alternando telas manualmente em vez de acionamento por evento | DOC-23, DOC-06 | Não | P2 |
| CT-VW-04 | Fontes para videowall: NDI, captura, IP e RTSP — o que entra e a que custo de latência | Easywall | Artigo técnico | Fontes heterogêneas com latência dessincronizada na mesma parede | DOC-21, DOC-22 | Sim | P2 |

### 3.9 Pilar DIST — Distribuição e curadoria de equipamentos (Expert AV)

| ID | Título de trabalho | Marca | Formato | Dor | Fontes RAG | Online | Prior. |
|---|---|---|---|---|---|---|---|
| CT-DIST-01 | Como ler um datasheet de câmera PTZ: o que importa além da resolução | Expert AV | Guia de referência | Compra por "4K" sem avaliar sensor, zoom óptico, protocolos e saídas | DOC-11, DOC-21 | Sim | P2 |
| CT-DIST-02 | Expansores Dante I/O em sistemas Q-SYS: papel, limites e configuração | Expert AV | Artigo técnico | I/O adicionado como mixer paralelo em vez de expansor | DOC-24, DOC-20 | Sim | P2 |
| CT-DIST-03 | Switches para AV over IP: o que diferencia um switch "AV-ready" de um switch corporativo | Expert AV | Comparativo | Switches de TI sem IGMP/QoS adequados vendidos para AV | DOC-14, DOC-13 | Sim | P1 |
| CT-DIST-04 | Estoque local e suporte em português: impacto real no prazo de execução de contratos públicos | Expert AV | Artigo técnico | Contratos com prazo de 90 dias e importação de 120 | DOC-26, Análise de Mercado | Não | P3 |

---

## 4. RESUMO QUANTITATIVO

| Pilar | Temas | P1 | P2 | P3 |
|---|---|---|---|---|
| AUD | 7 | 3 | 3 | 1 |
| VID | 6 | 3 | 3 | 0 |
| NET | 6 | 3 | 3 | 0 |
| CTL | 5 | 1 | 2 | 2 |
| INF | 6 | 2 | 3 | 1 |
| DOC | 4 | 2 | 2 | 0 |
| PUB | 5 | 2 | 3 | 0 |
| VW | 4 | 2 | 2 | 0 |
| DIST | 4 | 1 | 2 | 1 |
| **Total** | **47** | **19** | **23** | **5** |

---

## 5. ORDEM DE PRODUÇÃO SUGERIDA (PRIMEIRA ONDA — P1)

Sequência proposta para maximizar reuso em propostas em curso (TCE-MG, EMATER-MG, TCE Plenário, CGE-SP, FM-USP):

1. CT-PUB-01 — Tribunais e salas de audiência
2. CT-NET-01 — Modelo de VLANs por função
3. CT-AUD-04 — DSP único vs. split-brain
4. CT-VID-02 — EDID/HDCP
5. CT-DOC-02 — Checklist de comissionamento
6. CT-INF-01 — Elétrica para racks (NBR 5410)
7. CT-VW-02 — Licença perpétua vs. assinatura
8. CT-PUB-02 — Termo de referência sem impugnação
9. CT-AUD-02 — AEC e arquitetura de DSP
10. CT-VID-03 — Dimensionamento de displays
11. CT-DOC-01 — Documentação por complexidade
12. CT-NET-02 — IGMP snooping e querier
13. CT-NET-03 — QoS/DSCP/PTP
14. CT-AUD-01 — Dante / AES67 / ST 2110
15. CT-VID-01 — NDI / SDVoE / HDBaseT
16. CT-CTL-01 — Q-SYS como plataforma unificada
17. CT-INF-02 — Setor estabilizado vs. não estabilizado
18. CT-VW-01 — Videowall em NOC/SOC
19. CT-DIST-03 — Switch AV-ready vs. corporativo

---

## 6. TEMPLATE DE ARTIGO (aplicado a todo ID)

```text
# [Título]
Meta: 150–160 caracteres | ID: CT-XXX-NN | Marca: [ATIV | Expert AV | Easywall]

1. DOR — o problema como o gestor/engenheiro o vive (sem jargão de marketing)
2. IMPACTO — consequência operacional, financeira ou normativa
3. SOLUÇÃO — abordagem técnica recomendada e por quê
4. METODOLOGIA — como a ATIV projeta, valida e documenta (tabelas, diagramas textuais, critérios)
5. PROVA — normas, medições, referências e limites declarados
6. CTA — próximo passo objetivo (diagnóstico, prova de conceito, especificação)

Boas práticas
Normas aplicáveis
Verificações antes da implementação
Fontes e rastreabilidade — DOC-xx do índice RAG + documentação oficial consultada, com separação
  entre fato técnico / requisito normativo / recomendação de fabricante / boa prática / exemplo conceitual
```

---

## 7. LACUNAS QUE AFETAM A PRODUÇÃO

| Lacuna | Temas afetados | Ação |
|---|---|---|
| Arquivos `content/*` e `docs/*-strategy.md` ausentes | Todos (voz, rotas, keywords) | Anexar ao projeto ou confirmar que a Instrução Mestre seção 12 substitui |
| EBU R128 / ITU-R BS.1770 não estão no RAG | CT-AUD-07 | Validar em fonte oficial ou adicionar ao RAG |
| ABNT NBR 9050 e NBR 13570 ausentes | CT-PUB-05, CT-PUB-01 | Adicionar antes de produzir |
| AVIXA A102.01 ausente | CT-AUD-05 | Adicionar antes de produzir |
| HDBaseT Alliance specs ausentes | CT-INF-04, CT-VID-01 | Validar limites de distância em fonte oficial |

---

*© 2026 Grupo ATIV — Documento interno. ATIV-CT-001-R00.*
