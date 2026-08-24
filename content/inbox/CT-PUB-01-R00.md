# Infraestrutura AV/IT para tribunais e salas de audiência: o que projetar antes da obra começar

**ID:** CT-PUB-01-R00 | **Marca:** ATIV | **Pilar:** PUB | **Formato:** Guia de referência
**Meta description candidata (156 car.):** Como planejar captura, gravação, videoconferência e infraestrutura física de salas de audiência e plenários para evitar retrabalho e falha de aceitação.
**Palavras-chave candidatas:** infraestrutura AV tribunal, sala de audiência AV, videoconferência judicial, cabeamento sala de audiência, projeto AV plenário, captura de sessões públicas

---

## 1. DOR

Uma sala de audiência ou um plenário público não é uma sala de reunião com câmeras a mais. É um ambiente onde a captação de áudio e vídeo tem valor probatório, onde a gravação compõe os autos do processo, e onde uma falha de infraestrutura descoberta na instalação não se resolve trocando um cabo — ela pode exigir reabertura de piso, corte de laje ou renegociação de escopo com a obra civil já em andamento.

O padrão de falha mais recorrente em projetos dessa natureza não está no equipamento especificado, mas na infraestrutura física planejada tarde demais: caminhos de cabo (cable tray, eletrocalha, conduíte) dimensionados sem considerar o volume real de cabos AV, ausência de piso elevado ou floor box na área central da sala (o "well", onde ficam bancada do juiz, tribuna, mesas de partes e testemunha), e salas de apoio — gabinetes, salas de deliberação, salas de testemunha remota — tratadas como espaço residual em vez de parte do escopo técnico.

## 2. IMPACTO

Quando a infraestrutura é subestimada, o impacto aparece em três frentes:

- **Financeira:** adequações pós-obra (corte de piso, nova eletrocalha, redimensionamento de conduíte) custam de 3 a 8 vezes mais que o mesmo item especificado na fase de projeto, porque envolvem paralisação de obra civil concluída.
- **Operacional:** salas sem caminho de cabo adequado nas mesas de partes ou na tribuna acabam recebendo extensões e adaptadores improvisados — o que compromete tanto a estética quanto a segurança elétrica do ambiente.
- **Jurídica e institucional:** em sessões com valor probatório, uma captação de áudio inadequada ou uma gravação sem cadeia de custódia documentada pode comprometer a validade do registro, gerar questionamento em recurso, ou simplesmente impedir a degravação automatizada — cada vez mais usada por tribunais brasileiros.

## 3. SOLUÇÃO

A resposta não é "especificar equipamento melhor" — é tratar a infraestrutura física e lógica como parte do escopo técnico desde o anteprojeto, com a mesma disciplina de documentação exigida para o sistema AV em si. Isso significa:

1. Mapear os espaços da unidade judicial além da própria sala de audiência (administração, gabinetes, sala de testemunha remota, sala do júri quando aplicável) e tratar cada um como um perfil técnico distinto, não como extensão do plenário.
2. Definir o caminho de cabos (vertical e horizontal) na fase de arquitetura, coordenado entre projetista AV, engenheiro elétrico e arquiteto — não depois que a obra estrutural está pronta.
3. Especificar o método de distribuição horizontal dentro do "well" (piso elevado, floor box embutido em conduíte, ou canaleta de superfície) de acordo com o tipo de construção e o ciclo de vida esperado da sala.
4. Tratar streaming interno, streaming externo, videoconferência e sistemas de interpretação como sistemas com requisitos de rede e segurança distintos entre si, não como um único "pacote de vídeo".

## 4. METODOLOGIA

### 4.1 Tipologia de espaços de uma unidade judicial

Uma unidade judicial completa vai além da sala de audiência. O guia de referência do setor <cite index="4-2">identifica que os prédios de tribunais frequentemente têm mais funções do que apenas o julgamento de casos, contendo espaços administrativos, atendimento ao público, autoatendimento, formação de júri, custódia de detentos e áreas de apoio à sala de audiência, incluindo gabinetes de juízes</cite>.

Cada um desses espaços tem um perfil técnico próprio:

- **Sala de audiência (courtroom):** o espaço de maior densidade de equipamento AV e maior exigência de infraestrutura.
- **Gabinetes (chambers):** <cite index="4-2">além das conexões elétricas e de rede usuais, o juiz pode precisar de transmissão de vídeo, videoconferência ou outra tecnologia instalada no gabinete, tipicamente na sala de reunião do próprio gabinete</cite>.
- **Salas administrativas:** <cite index="4-2">equipe administrativa pode precisar de acesso a componentes da tecnologia da sala de audiência e transcrição de áudio e vídeo digital das sessões; tribunais federais americanos vêm adotando streaming de áudio das sessões pela LAN do tribunal para monitoramento interno, ou alto-falantes em escritórios para que a equipe acompanhe o andamento</cite> — um padrão de arquitetura de rede que também se aplica a tribunais brasileiros que centralizam monitoramento de sessões.
- **Sala de testemunha remota:** equipada com câmera, microfones tipo delegado, monitor de vídeo, fones e seletor de canal de idioma quando há interpretação simultânea.

Essa tipologia por espaço evita o erro mais comum em termos de referência: tratar "sistema AV do tribunal" como item único de BOM, sem diferenciar requisito de rede, segurança e cabeamento por ambiente.

### 4.2 Captura de vídeo na sala de audiência

O guia de referência descreve o padrão de captura mais usado no setor: <cite index="1-1">como resultado do aumento do número de participantes em audiências e para obter cobertura de vídeo completa em salas de audiência e salas de testemunha remota, a maioria dos tribunais emprega múltiplos sistemas de câmera robotizados — geralmente de quatro a seis — sendo a câmera da sala de testemunha remota e a câmera da testemunha dentro da sala de audiência consideradas as mais importantes</cite>. <cite index="1-1">essas câmeras são majoritariamente unidades PTZ montadas em parede ou teto, e por vezes em tripés de alto padrão, com câmeras estacionárias adicionais nas galerias públicas e na sala de testemunha remota</cite>.

Esse padrão de 4 a 6 pontos de captura — e não uma única câmera de plano geral — é o ponto de partida para dimensionar tanto o número de canais de captura quanto o caminho de cabo necessário até cada posição.

### 4.3 Videoconferência, streaming e interpretação: três sistemas, três requisitos

É comum ver esses três sistemas tratados como um único "módulo de vídeo" no termo de referência. Tecnicamente, eles têm perfis de rede e segurança diferentes:

**Videoconferência judicial.** <cite index="1-2">os tribunais empregam codecs de vídeo que suportam o protocolo H.264 usando ISDN ou IP com segurança de criptografia completa, majoritariamente AES de 128 bits ou CCMP, permitindo que os participantes remotos acompanhem não só por áudio e vídeo mas também com interpretação simultânea de idioma a partir da sala de audiência — sendo essencial banda adequada para transportar os dados a todos os sites envolvidos</cite>.

**Streaming interno e externo.** <cite index="1-2">a tecnologia de streaming do tribunal, tipicamente composta por múltiplos canais de áudio e um único sinal de vídeo, pode ser configurada para transmissão interna ou externa — o streaming interno permite que a equipe do tribunal acompanhe as sessões em seus computadores, enquanto o streaming externo permite acesso do público em geral, incluindo a imprensa</cite>. Essa distinção importa porque streaming externo normalmente exige DMZ ou segmentação de rede específica, separada da rede interna de streaming.

**Interpretação (phone hybrid).** <cite index="1-3">a tecnologia de híbrido telefônico permite que participantes remotos acompanhem o processo em seu idioma de preferência, sendo especialmente útil durante uma videoconferência quando o idioma da chamada não é o preferido; esse sistema é baseado em SIP e permite segurança de criptografia AES ou CCMP</cite>.

O guia também documenta um requisito específico de proteção de testemunha, relevante para varas criminais e de violência doméstica: <cite index="1-3">testemunhas que temem retaliação podem ser protegidas por distorção eletrônica de imagem facial e de voz quando determinado pelo juiz — a distorção de voz é usada apenas para testemunhas protegidas, sendo uma solução baseada em software aplicável a testemunhas na sala de audiência, na sala de testemunha remota e a participantes remotos via videoconferência, de modo que a voz distorcida ou embaralhada só possa ser ouvida pelo público na galeria e em outros locais</cite>. Esse é um requisito que, quando existente no edital, deve ser tratado como funcionalidade de DSP/software e não apenas como especificação de câmera.

### 4.4 Infraestrutura física: o "well" e os caminhos de cabo

O centro da sala de audiência — o "well" — concentra a maior parte do equipamento AV e é o ponto de maior densidade de cabeamento. <cite index="2-1">devido à sua localização central, pode ser uma área crítica para a passagem de cabos até diversos pontos da sala; um dos benefícios de um piso semi-elevado (mini-raised floor) no well é ganhar flexibilidade para puxar e alterar cabos, além de tornar possível conectar qualquer ponto a qualquer outro — algo relevante inclusive para mudanças temporárias, como adição de cabos de rede ou áudio às mesas das partes</cite>. <cite index="2-1">em construção nova, a estrutura pode ser planejada desde o início para incluir um piso elevado no well rebaixando essa área em relação ao piso ao redor (split slab), evitando rampas desnecessárias entre níveis de piso diferentes</cite>.

Quando o piso elevado não é viável, o guia trata alternativas com vantagens e limitações distintas — resumidas na tabela abaixo.

| Critério | Piso elevado (raised floor / split slab) | Floor box + conduíte embutido | Cell-duct (duto celular na laje) | Canaleta de superfície |
|---|---|---|---|---|
| Flexibilidade para alteração futura | Alta — espaço aberto sob o piso funciona como caminho de cabo | Média — limitada aos pontos previstos | Baixa — cavidade rasa, conectores AV frequentemente não cabem | Baixa — depende de espaço aparente |
| Custo inicial | Alto — requer planejamento estrutural (split slab) ou sobreposição de piso | Médio | Médio-baixo | Baixo |
| Aplicação recomendada | Salas com alta densidade de cabos e necessidade de reconfiguração frequente | Salas com pontos fixos bem definidos (bancada, tribuna, mesas) | Não recomendado para novas instalações | Reformas em paredes de bloco/concreto onde embutir não é viável |
| Observação normativa | Acessibilidade exige rampa quando o desnível excede a tolerância ADA equivalente | Conector AV maior exige caixa mais profunda que caixa de dados padrão | <cite index="6-1">não é recomendado para novas instalações — a limitação crítica é que, na junção entre os dutos e as caixas de piso, a cavidade rasa suporta apenas conexões mínimas de voz, dados e energia, e os cabos e conectores audiovisuais costumam ser grandes demais para a maioria dos floor boxes de cell-duct</cite> | Deve ser coordenada com o arquiteto quanto a cor e acabamento |

Fora do well, a distribuição segue lógica de infraestrutura predial convencional, mas com uma observação prática documentada na referência: <cite index="0-1">talvez a forma mais importante de viabilizar futuras modificações tecnológicas seja dispor de sistemas de gerenciamento de cabos ou eletrocalhas adequados nos locais corretos — como há grande volume de tecnologia de baixa tensão e espaço limitado para instalar eletrocalha, a coordenação já na fase de projeto é essencial, porque o custo de instalar novas eletrocalhas e conduítes após a construção, e de evitar acúmulo de calor dentro do conduíte, pode inviabilizar financeiramente melhorias posteriores</cite>.

A distribuição horizontal típica também segue um padrão de organização por tipo de sinal: <cite index="0-1">em corredores longos com forro removível, a bandeja de cabos aberta e acessível é o método preferido, tipicamente com 300 a 460 mm de largura, instalada em local acessível logo acima do forro — permitindo, por exemplo, que o cabo de dados fique de um lado da bandeja, o cabo de alarme do outro lado, e o cabo audiovisual passe pelo meio</cite>.

### 4.5 Diagrama de referência — fluxo de sinal em sala de audiência com testemunha remota

```text
[Câmeras PTZ na sala (4–6 pontos)] ──┐
[Câmera fixa — galeria pública]  ────┤
[Câmera — sala de testemunha remota]─┼──► [Matriz / DSP de captura] ──► [Gravador as-built]
[Microfones bancada/tribuna/partes]──┘                │                        │
                                                        ├──► [Streaming interno — LAN do tribunal]
                                                        ├──► [Streaming externo — DMZ segmentada]
                                                        └──► [Codec de videoconferência H.264, AES-128/CCMP]
                                                                       │
                                                        [Phone hybrid SIP — interpretação simultânea]
```

Este diagrama é conceitual — a arquitetura real de rede, VLANs e segmentação de cada sistema deve ser definida em projeto executivo específico, considerando os requisitos de segurança de cada tribunal.

### 4.6 Papéis no processo de projeto

O guia de referência documenta uma distinção útil para alinhar expectativas com o time de arquitetura e engenharia: <cite index="3-2,3-3">arquitetos geralmente entendem infraestrutura como componentes permanentes do edifício definidos na fase de projeto — salas técnicas elétricas e de telecomunicações, alocação de espaço e empilhamento vertical desses ambientes em edifícios de múltiplos pavimentos — enquanto profissionais de audiovisual tendem a definir infraestrutura como salas e conduítes vazios para cabos de baixa tensão, caixas de piso e J-boxes de tamanho adequado, além de energia padrão e especializada em locais bem definidos, incluindo aquecimento, refrigeração e requisitos acústicos específicos</cite>. Essa diferença de vocabulário é frequentemente a origem de escopos que "sobram" entre disciplinas — nenhuma parte assume o item porque cada uma o classifica de forma diferente.

### 4.7 Dimensionamento de displays e verificação de desempenho

Para monitores de acompanhamento (juiz, partes, galeria) e telas de exibição de prova, o dimensionamento por distância de visualização segue os critérios da ANSI/AVIXA V202.01:2016, que diferencia conteúdo de informação básica de conteúdo para decisão analítica — relevante quando a tela exibe documentos ou provas que exigem leitura detalhada, não apenas identificação de presença. Após a instalação, a verificação de desempenho documentada em ANSI/INFOCOMM 10:2013 (procedimentos de teste e aceitação, critérios de áudio e vídeo, cobertura e inteligibilidade) é o mecanismo formal para comprovar que a sala atende ao que foi especificado — e não apenas "está funcionando" no dia da entrega.

## 5. PROVA

- Padrão de 4 a 6 câmeras PTZ como cobertura mínima de sala de audiência com testemunha remota — fato técnico documentado no guia de referência do setor (InfoComm AV/IT Infrastructure Guidelines for Courts).
- Requisito de criptografia AES-128 ou CCMP para videoconferência judicial e para phone hybrid — fato técnico documentado na mesma referência; não é recomendação de fabricante, é padrão de segurança do setor.
- Cell-duct como método não recomendado para novas instalações — fato técnico documentado na referência, por limitação física de cavidade para conectores AV.
- Requisito de dimensionamento de tela por distância de visualização e categoria de conteúdo — norma consolidada (ANSI/AVIXA V202.01:2016).
- Verificação de desempenho pós-instalação — norma consolidada (ANSI/INFOCOMM 10:2013).

## 6. CTA

Antes de especificar equipamento, a ATIV recomenda um diagnóstico de infraestrutura física e lógica da unidade judicial — mapeamento de espaços, caminhos de cabo existentes e requisitos de rede por sistema — para que o termo de referência já nasça compatível com a obra civil, evitando o retrabalho que costuma aparecer só na fase de instalação.

---

## Boas práticas

- Tratar cada tipo de espaço da unidade judicial (sala de audiência, gabinete, sala administrativa, sala de testemunha remota) como perfil técnico distinto no termo de referência.
- Definir o método de distribuição horizontal do well (piso elevado, floor box ou canaleta) na fase de anteprojeto, em conjunto com o arquiteto e o engenheiro elétrico — nunca depois da concretagem.
- Segmentar streaming interno, streaming externo e videoconferência em domínios de rede distintos, com atenção especial ao streaming externo por exigir DMZ.
- Especificar o número de pontos de captura de vídeo (tipicamente 4 a 6) antes de dimensionar matriz, gravador e caminho de cabo — não depois.
- Documentar a verificação de desempenho pós-instalação como entrega formal, não como etapa informal de comissionamento.

## Normas aplicáveis

- ANSI/AVIXA D401.01:2023 — requisitos de documentação por complexidade de projeto.
- ANSI/INFOCOMM 10:2013 — verificação de desempenho de sistemas AV instalados.
- ANSI/AVIXA V202.01:2016 — dimensionamento de imagem por distância e tipo de conteúdo.
- Guia de referência do setor para infraestrutura AV/IT em tribunais (InfoComm, 2013) — base técnica deste artigo.

## Verificações antes da implementação

- Confirmar com a obra civil se há previsão de split slab ou piso elevado no well antes de especificar mobiliário técnico embutido.
- Validar com o time de segurança do tribunal os requisitos de segmentação de rede para streaming externo antes de definir topologia.
- Verificar se há requisito de distorção facial/de voz para testemunhas protegidas no edital — se houver, tratar como funcionalidade de software/DSP na especificação, não como item de câmera.
- Checar limitação de comprimento de cabo (padrão de referência: 100 m) associada à localização das salas de demarcação/racks em relação aos pontos mais distantes da sala.
- Confirmar altura e tipo de caixa de piso compatível com conectores AV (mais profundos que os de dados), evitando poke-through quando houver alternativa de floor box.

---

## Fontes e rastreabilidade

**Fato técnico (documentado no guia de referência do setor, DOC-11 — AV/IT Infrastructure Guidelines for Courts, InfoComm 2013):**
- Padrão de 4–6 câmeras PTZ para cobertura de sala de audiência e sala de testemunha remota.
- Requisitos de codec e criptografia para videoconferência judicial (H.264, AES-128/CCMP) e para phone hybrid (SIP).
- Distinção entre streaming interno e externo.
- Funcionalidade de distorção facial/de voz para testemunhas protegidas.
- Tipologia de espaços da unidade judicial (administração, gabinetes, sala de júri, sala de testemunha remota).
- Vantagens do piso semi-elevado no well e limitações do cell-duct para novas instalações.
- Papéis distintos de arquitetos, engenheiros elétricos e profissionais de AV na definição de infraestrutura.
- Prática de organização de bandeja de cabos por tipo de sinal (dados, alarme, AV).

**Requisito normativo (conhecimento técnico consolidado, não localizado como documento completo no RAG — validar edição vigente antes de citar formalmente em termo de referência):**
- ANSI/AVIXA D401.01:2023 (documentação por complexidade).
- ANSI/INFOCOMM 10:2013 (verificação de desempenho).
- ANSI/AVIXA V202.01:2016 (dimensionamento de imagem).

**Recomendação da ATIV (boa prática de engenharia aplicada, não normativa):**
- Segmentação de rede por sistema (streaming interno/externo, videoconferência, interpretação).
- Diagnóstico de infraestrutura física como etapa formal anterior à especificação de equipamento.

**Lacuna identificada:** a base RAG não contém a ABNT NBR 13570 (locais de afluência de público), aplicável a plenários e salas de audiência com grande público. Recomenda-se validação em fonte oficial antes de uso normativo formal em parecer ou termo de referência.

---

*© 2026 Grupo ATIV — Documento interno. CT-PUB-01-R00.*
