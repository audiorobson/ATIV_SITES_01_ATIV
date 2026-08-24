# Verificação de desempenho e aceitação de sistemas AV: checklist de comissionamento

**ID:** CT-DOC-02-R00 | **Marca:** ATIV | **Pilar:** DOC | **Formato:** Checklist
**Meta description candidata (150 car.):** Como estruturar a aceitação de um sistema AV em fases verificáveis, com métrica objetiva e relatório rastreável — não apenas "ligar e testar".
**Palavras-chave candidatas:** comissionamento AV, aceitação sistema audiovisual, verificação de desempenho AV, ANSI INFOCOMM 10:2013, checklist entrega AV

---

## 1. DOR

"Sistema entregue" costuma significar coisas diferentes para o integrador e para o cliente. Para o integrador, muitas vezes significa que os equipamentos estão ligados e a imagem aparece na tela. Para o cliente — especialmente um órgão público com processo de fiscalização formal — "entregue" precisa significar algo verificável: que cada requisito do projeto foi testado, que há um critério objetivo de aprovação para cada item, e que existe um relatório rastreável assinado por quem testou e por quem aceitou.

A ausência dessa estrutura é a origem mais comum de dois problemas que aparecem depois da instalação: glosas em fiscalização de contrato público, quando o fiscal não encontra evidência formal de que um requisito foi verificado; e disputas de garantia, quando não há como provar se uma falha existia na entrega ou surgiu depois.

## 2. IMPACTO

- **Financeiro:** pagamento retido ou glosado quando a fiscalização não encontra documentação de aceitação para itens específicos do termo de referência.
- **Jurídico-contratual:** em contratos públicos regidos pela Lei 14.133/2021, a ausência de critério objetivo de aceitação enfraquece a posição do contratado em qualquer disputa sobre execução do objeto.
- **Operacional:** sistemas "aceitos" sem verificação formal chegam à operação com defeitos latentes que só aparecem sob uso real — e nesse momento a atribuição de responsabilidade (defeito de origem vs. desgaste operacional) se torna difícil de provar.

## 3. SOLUÇÃO

Estruturar a aceitação como um processo em fases, com itens de verificação nomeados, critério de aprovação explícito (pass/fail, e métrica objetiva quando aplicável) e relatório formal emitido ao final de cada fase — não como um evento único no dia da entrega. Essa estrutura já existe formalizada em norma do setor e pode ser adotada como metodologia de comissionamento em qualquer projeto ATIV, adaptada ao escopo específico.

## 4. METODOLOGIA

### 4.1 As quatro fases de verificação

A norma de referência para verificação de desempenho de sistemas AV organiza todo o processo em fases sequenciais, cada uma com um propósito distinto:

<cite index="0-1">Pré-integração: itens de verificação que ocorrem antes da integração dos sistemas — geralmente verificam condições existentes ou atividades coordenadas de outras disciplinas necessárias para a instalação AV (por exemplo, invólucros de dispositivos, estruturas de backing/blocking/framing)</cite>.

<cite index="0-1">Integração de sistemas: itens de verificação que ocorrem durante a integração ou construção do sistema audiovisual, incluindo trabalho fora e dentro do local — geralmente verificam operação ou configuração adequada para que o sistema funcione (por exemplo, equipamento montado nivelado e a prumo, phantom power, estresse de terminação, desempenho térmico do rack)</cite>.

<cite index="0-1">Pós-integração: itens de verificação que ocorrem após a conclusão do sistema — geralmente verificam o desempenho do sistema em relação às métricas de verificação definidas na documentação do projeto (por exemplo, taxa de contraste de imagem projetada, gravação de áudio e vídeo, funções automatizadas do sistema de controle)</cite>. Essa fase termina no marco de <cite index="0-1">aceitação condicional do projeto, reconhecendo que o projeto — ou uma parte designada — está substancial/praticamente completo e pronto para uso pelo proprietário, ainda que alguns requisitos e entregáveis definidos na documentação do projeto possam não estar completos</cite>.

<cite index="0-1">Encerramento (closeout): itens de verificação relacionados ao fechamento do projeto — geralmente relacionados à documentação do status as-built/as-is dos sistemas e à transferência de software, entre outros itens (por exemplo, relatório de teste do sistema de controle, desenhos as-built completos, garantias)</cite>, culminando na <cite index="0-1">aceitação final — marco que reconhece que o projeto está 100% completo e que todos os entregáveis, serviços, listas de verificação, testes, verificações e assinaturas exigidos foram recebidos, com todos os requisitos da documentação do projeto satisfeitos; nenhuma atividade adicional do projeto ocorre após esse marco</cite>.

Essa estrutura em quatro fases é o que separa "verificação" de "torcida" — cada fase tem propósito e critério de saída próprios, em vez de um único teste genérico no fim da obra.

### 4.2 Como selecionar quais itens verificar em cada projeto

A norma não prescreve uma lista fixa igual para todo projeto — ela fornece um banco de referência e um processo de seleção. <cite index="2-1">a norma fornece uma lista de referência de 160 itens de verificação potenciais, organizados por categorias funcionais e por fases de verificação</cite>, e o processo de seleção segue uma sequência definida: <cite index="2-1">revisar requisitos regulatórios relacionados ao sistema audiovisual e incluir os itens de referência aplicáveis; revisar a documentação do projeto para determinar requisitos específicos de desempenho e incluir os itens aplicáveis; revisar informações fornecidas pelo fabricante do equipamento do projeto e incluir os itens aplicáveis; revisar os itens de referência remanescentes e identificar itens adicionais necessários para garantir que o sistema tenha o desempenho especificado, mesmo que não estejam na documentação do projeto; e identificar quaisquer testes específicos exigidos pelo cliente/proprietário ainda não cobertos</cite>. <cite index="2-1">esse processo deve ser aplicado a cada sistema do projeto, com uma lista de verificação separada para cada um, e todos os itens de referência da norma devem constar no relatório de verificação — os itens não aplicáveis devem ser listados como N/A</cite>.

Esse método evita dois erros opostos: usar uma lista genérica de checklist que ignora requisitos regulatórios específicos do projeto, ou criar uma lista ad hoc que varia de instalador para instalador sem rastreabilidade.

### 4.3 Nem todo item é apenas "passou/falhou" — quando a métrica é obrigatória

Um detalhe frequentemente perdido em comissionamentos informais: a norma distingue itens que exigem apenas aprovação binária de itens que exigem uma métrica objetiva. <cite index="1-1">uma vez identificados os itens de verificação, cada um exige uma verificação de aprovação/reprovação — há 16 (de 160) itens de verificação específicos identificados na norma que exigem uma medição além de aprovação/reprovação para validar o desempenho, e 11 (de 160) itens para os quais é recomendado incluir uma medição adicional</cite>. <cite index="1-1">a norma não define o método ou a medida além de aprovação/reprovação — isso deve ser identificado e definido por quem aplica a norma</cite>.

Isso significa que "o áudio está bom" não é um critério de verificação válido para os itens que exigem métrica — é necessário definir, previamente, o valor-alvo (relação sinal-ruído mínima, taxa de contraste de imagem, SPL no ouvinte menos favorecido) e comparar a medição contra esse valor.

### 4.4 Como definir a métrica-alvo quando ela não vem pronta

Para os itens que exigem métrica, a norma define um processo de definição de meta, não um valor universal: <cite index="1-2">revisar as prioridades-chave do cliente/proprietário — em termos de custo, qualidade, prazo, funcionalidade e desempenho; partir das métricas de melhor caso para o tipo de instalação (por exemplo, sala de reunião geral, sala de diretoria, videoconferência, estádio); revisar as métricas com o proprietário, projetistas do edifício e/ou fabricantes de equipamento para confirmar que as métricas de melhor caso são alcançáveis; e então ajustar as métricas ao projeto, definindo as métricas-alvo específicas do projeto</cite>. Quando as métricas de melhor caso não são alcançáveis por limitação do ambiente construído, <cite index="1-3">deve haver uma discussão entre quem verifica o sistema e o proprietário para determinar uma métrica aceitável</cite> — ou seja, divergência entre meta ideal e realidade de campo é esperada e deve ser negociada e documentada, não escondida.

### 4.5 O relatório de verificação: o que precisa constar

A rastreabilidade da aceitação depende do formato do relatório, não apenas da execução do teste. A norma especifica o conteúdo mínimo: <cite index="3-1">o verificador do sistema deve fornecer relatórios ao cliente/proprietário ao longo de todas as fases de verificação do projeto — no mínimo, deve emitir relatórios ao final das fases de pré-integração, integração, pós-integração e encerramento</cite>. Cada emissão de relatório deve conter, no cabeçalho, <cite index="3-1">nome do projeto, nome do verificador do sistema, data de emissão, fase de verificação coberta e a quem o relatório está sendo emitido</cite>, e para cada item verificado: <cite index="3-1">número do item, nome do item, métrica definida para o item (por exemplo, inspeção visual, taxa de contraste de imagem de 7:1, SPL de pelo menos 80 dBSPL no ouvinte menos favorecido), resultado da medição quando exigido, resultado de aprovação/reprovação, nome de quem completou a verificação, data da verificação e notas quando necessário</cite>.

Ao final do projeto, <cite index="3-2">o verificador deve emitir um relatório de verificação para o marco de aceitação final — cumulativo, contendo todos os elementos exigidos e os resultados de todos os itens verificados em todas as fases; após a emissão desse relatório, nenhum relatório adicional deve ser emitido</cite>.

### 4.6 Modelo de checklist por fase (adaptável a projetos ATIV)

| Fase | Propósito | Exemplos de item | Critério de saída |
|---|---|---|---|
| Pré-integração | Validar condições existentes e trabalho de outras disciplinas | Backing/blocking para montagem, invólucros previstos, infraestrutura elétrica pronta | Todos os itens aprovados antes do início da integração AV |
| Integração de sistemas | Validar operação/configuração durante a instalação | Equipamento nivelado, phantom power correto, estresse de terminação de cabo, térmica do rack | Aprovação item a item durante a obra, não apenas no final |
| Pós-integração | Validar desempenho contra métricas do projeto | Contraste de imagem, gravação de áudio/vídeo, funções automatizadas de controle, EDID/HDCP (VP-100/VP-101) | Aceitação condicional (substancial/prática) |
| Encerramento | Validar documentação e transferência | As-built completo, relatório de teste do sistema de controle, garantias, treinamento de operação | Aceitação final — nenhum item pendente |

## 5. PROVA

- Estrutura de quatro fases de verificação (pré-integração, integração, pós-integração, encerramento) com marcos de aceitação condicional e aceitação final — norma consolidada (ANSI/INFOCOMM 10:2013).
- Processo de seleção de itens de verificação a partir de banco de 160 itens de referência, priorizando requisitos regulatórios e de projeto — norma consolidada.
- Distinção entre itens de aprovação binária e itens que exigem métrica objetiva (16 obrigatórios, 11 recomendados de 160) — norma consolidada.
- Processo de definição de métrica-alvo quando não há valor padrão aplicável — norma consolidada.
- Conteúdo mínimo obrigatório de relatório de verificação, por item e por fase — norma consolidada.

## 6. CTA

A ATIV recomenda adotar a estrutura de quatro fases e o processo de seleção de itens da ANSI/INFOCOMM 10:2013 como metodologia-base de comissionamento em todo projeto — adaptando o banco de itens ao escopo específico e mantendo o relatório por fase como entregável formal, não apenas como registro interno do instalador.

---

## Boas práticas

- Emitir relatório de verificação ao final de cada uma das quatro fases, não apenas um relatório único na entrega.
- Definir, antes da execução, quais dos itens do projeto exigem métrica objetiva e qual é o valor-alvo de cada um.
- Negociar e documentar formalmente qualquer métrica-alvo que precise ser ajustada por limitação do ambiente construído.
- Listar como N/A, e não simplesmente omitir, os itens de referência que não se aplicam ao projeto.
- Reemitir o relatório de verificação sempre que um evento (ordem de mudança, retrabalho, alteração de projeto) exigir nova verificação de um item já testado.

## Normas aplicáveis

- ANSI/INFOCOMM 10:2013 — verificação de desempenho de sistemas audiovisuais.
- Lei 14.133/2021 — regime de contratações públicas, quando aplicável ao contexto de fiscalização e aceitação contratual.

## Verificações antes da implementação

- Confirmar, antes do início da obra, se o termo de referência exige metodologia de verificação específica — e se a estrutura de 4 fases pode ser adotada como complementar sem conflito contratual.
- Levantar, junto ao cliente/fiscal, quais itens têm prioridade de custo, qualidade, prazo, funcionalidade e desempenho — insumo para a definição de métricas-alvo.
- Definir com antecedência quem assina cada relatório de fase (verificador, fiscal técnico, preposto) para evitar disputa de responsabilidade na aceitação.
- Verificar se a documentação as-built está sendo produzida em paralelo à integração, não apenas reconstruída no encerramento.

---

## Fontes e rastreabilidade

**Requisito normativo (DOC-02 — ANSI/INFOCOMM 10:2013, AV Systems Performance Verification):**
- Estrutura de quatro fases de verificação (pré-integração, integração de sistemas, pós-integração, encerramento) e seus marcos (aceitação condicional/substancial, aceitação final).
- Processo de seleção de itens de verificação a partir do banco de 160 itens de referência.
- Distinção entre itens de aprovação binária e itens que exigem métrica objetiva (16 obrigatórios, 11 recomendados).
- Processo de definição de métrica-alvo e negociação quando a métrica de melhor caso não é alcançável.
- Conteúdo mínimo de relatório de verificação, por cabeçalho e por item.
- Regra de relatório cumulativo de aceitação final, encerrando o processo de verificação.

**Recomendação da ATIV (boa prática de engenharia aplicada, não normativa):**
- Modelo de checklist por fase adaptado a projetos ATIV (seção 4.6) — consolidação própria a partir da norma, para uso direto em comissionamento.

**Observação de aplicabilidade:** a norma de origem é referência do setor (InfoComm/AVIXA), sem correspondência formal na legislação brasileira — sua adoção em contratos públicos regidos pela Lei 14.133/2021 deve ser tratada como metodologia complementar de boas práticas, não como exigência normativa nacional.

---

*© 2026 Grupo ATIV — Documento interno. CT-DOC-02-R00.*
