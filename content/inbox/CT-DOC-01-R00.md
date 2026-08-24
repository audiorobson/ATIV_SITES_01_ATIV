# Documentação AV por nível de complexidade (ANSI/AVIXA D401.01:2023): o que entregar e quando

**ID:** CT-DOC-01-R00 | **Marca:** ATIV | **Pilar:** DOC | **Formato:** Guia de referência
**Meta description candidata (153 car.):** Nem todo projeto AV precisa do mesmo pacote de documentação. Como classificar a complexidade de um projeto e definir os entregáveis mínimos corretos.
**Palavras-chave candidatas:** documentação AV, ANSI AVIXA D401.01, as-built AV, complexidade de projeto AV, matriz de responsabilidade AV

---

## 1. DOR

Dois erros opostos, igualmente comuns, na documentação de projetos AV: entregar de menos — um projeto complexo fechado com apenas uma lista de equipamentos e um desenho informal, sem as-built, sem diagrama de interconexão, sem verificação de desempenho documentada; ou entregar de mais — aplicar o mesmo pacote burocrático de um projeto de missão crítica a uma sala de reunião simples, consumindo tempo e orçamento em documentação que ninguém vai consultar.

Os dois erros têm a mesma raiz: ausência de um critério objetivo para decidir quanta documentação um projeto específico realmente precisa. "Documentar bem" não é sinônimo de "documentar tudo que existe" — é entregar exatamente o conjunto de documentos que reduz o risco daquele projeto específico, nem mais, nem menos.

## 2. IMPACTO

- **Retrabalho e disputa de manutenção:** sem as-built correto, qualquer intervenção futura começa com o técnico redescobrindo a instalação, ao custo do cliente e com risco de erro na primeira intervenção.
- **Fragilidade em fiscalização de contrato público:** ausência de documentação exigível por nível de complexidade enfraquece a posição do contratado em qualquer questionamento de execução do objeto.
- **Ineficiência em projetos simples:** aplicar exigência documental de projeto complexo a uma instalação simples atrasa entrega e infla custo sem benefício correspondente de redução de risco.

## 3. SOLUÇÃO

Classificar formalmente cada projeto por nível de complexidade — simples, moderado ou complexo — usando um método de pontuação objetivo, e então aplicar exatamente o pacote de documentação mínima correspondente a esse nível, nem mais nem menos. Esse é o método formalizado pela norma de documentação do setor, adotável como padrão interno da ATIV para toda proposta e execução.

## 4. METODOLOGIA

### 4.1 Classificar antes de documentar

A norma trata a classificação de complexidade como pré-requisito para definir documentação, não como formalidade posterior. Ela orienta: <cite index="6-1">classificar o projeto com base em seu nível de complexidade — simples, moderado ou complexo — considerando fatores como número de tarefas, elementos de coordenação, contingências, requisitos regulatórios, número de participantes e/ou incógnitas técnicas</cite>, partindo do princípio de que <cite index="6-1">conforme a complexidade do projeto aumenta, a quantidade de documentação necessária para controlar o risco também aumenta</cite>.

### 4.2 O método de pontuação

A classificação não é subjetiva — é calculada por soma de pontos em critérios específicos, cada um avaliado de 1 a 3 pontos: <cite index="2-1">espalhamento geográfico (1 área / 2-3 áreas / mais de 3 áreas ou internacional); número de sites (1 / 2-3 / mais de 3); orçamento do projeto (menos de US$ 50 mil / US$ 50-100 mil / mais de US$ 100 mil); complexidade técnica (escala de 1 a 3); número de salas ou tipos de sala (1-6 / 7-20 / mais de 20); número de outras disciplinas envolvidas (0-1 / 2-3 / mais de 3); mão de obra subcontratada ou sindicalizada (0 / 1-2 / mais de 2); número de partes interessadas-chave (1-3 / 4-6 / mais de 6); fatores de risco (escala de 1 a 3); recursos necessários (1-4 / 5-10 / mais de 10); e urgência do cronograma (baixa / moderada / alta)</cite>.

A soma desses pontos define a classificação final: <cite index="0-1">simples (11 a 15 pontos), moderado (16 a 21 pontos) ou complexo (22 pontos ou mais)</cite>.

Alguns critérios merecem atenção especial na avaliação, porque não são intuitivos. Complexidade técnica, por exemplo, não se resume ao produto especificado: <cite index="2-1">três elementos-chave trabalham juntos para determinar a complexidade técnica de um projeto — o design do sistema (tipo de sistema e seleção de produto); as habilidades e experiência da equipe do projeto em relação a esse design; e os métodos de construção e instalação necessários para alcançar o resultado esperado</cite>. Um sistema tecnicamente simples, mas instalado por equipe sem experiência prévia com aquela tecnologia específica, pontua mais alto do que a mesma tecnologia instalada por equipe experiente. Da mesma forma, prazo de execução não equivale automaticamente a complexidade: <cite index="1-1">a duração do projeto não necessariamente equivale ao nível de sua complexidade — um projeto de curto prazo não significa automaticamente menor complexidade, nem um projeto de longo prazo significa maior complexidade</cite>.

### 4.3 O que cada nível exige, no mínimo

A norma define uma tabela de entregáveis obrigatórios por nível, cumulativa — cada nível inclui tudo do nível anterior, mais itens adicionais. Para todo projeto, independentemente do nível, dois itens são sempre obrigatórios: <cite index="7-1">registro de arquivo do projeto e matriz de atribuição de responsabilidade</cite> — o primeiro documento formal que registra a aceitação de cada elemento de documentação pela parte responsável, o segundo definindo formalmente "quem faz o quê" no projeto.

**Nível simples** exige, no mínimo: escopo de trabalho/especificações, lista de materiais (BOM), informação de localização arquitetônica, informação de referência arquitetônica, informação de interconexão do sistema, informação de montagem de equipamento, verificação de desempenho do sistema, documentação as-built, e lista de requisitos de encerramento.

**Nível moderado** inclui tudo do simples, mais: <cite index="4-1">informação detalhada do projeto (capa, índice de desenhos, cronograma de responsáveis, chave de símbolos, notas gerais ou específicas do projeto)</cite>, <cite index="3-1">detalhes individuais de dispositivo (informações específicas de instalação, configurações de pinos customizadas, detalhes de placa ou painel)</cite>, e <cite index="8-1">informação de caminho de cabos, mostrando os trajetos e cabos entre cada componente do sistema audiovisual e seus pontos finais</cite>.

**Nível complexo** inclui tudo do moderado, mais quatro itens adicionais que merecem atenção especial em projetos institucionais de maior porte:

- <cite index="8-1">cronograma formal do projeto, com marcos e prazos, podendo incluir relações de precedência entre tarefas</cite>;
- <cite index="8-1">informação de seção arquitetônica — tipicamente um conjunto de desenhos em escala que representa uma sala ou espaço a partir de múltiplas orientações, com as alturas relativas dos dispositivos</cite>;
- <cite index="8-1">informação de display — documentação formal de distância de visualização sobreposta à planta arquitetônica ou ao layout de mobiliário, incluindo arcos e ângulos de visualização conforme a ANSI/AVIXA V202.01:2016, baseados no tipo de visualização (básica ou analítica)</cite>;
- <cite index="8-1">informação de cobertura de áudio — quando formalizado, deve incluir desenhos de cobertura de alto-falantes conforme a AVIXA A102.01:2022, além de informação de captação ou posicionamento de microfones</cite>.

A própria norma reconhece que esse pacote não é fixo em todos os detalhes — cabe ao time de projeto adaptar: <cite index="9-1">um projeto complexo pode não incluir sistema de áudio; nesse caso, o requisito de cobertura de áudio é dispensado por não ser relevante ao projeto</cite>, e da mesma forma, <cite index="9-1">um projeto simples não exige detalhes individuais de dispositivo como estipulado para um projeto moderado, mas as partes interessadas podem, a seu critério, incluir tais detalhes se relevantes e construtivos ao esforço do projeto simples</cite>.

### 4.4 O que entra no as-built e o que não entra

Um ponto de confusão comum: as-built não é sinônimo de verificação de desempenho. A norma trata os dois como itens distintos e explicitamente separados: <cite index="5-1">requisitos de encerramento não são o mesmo que verificação de desempenho do sistema</cite>, remetendo à ANSI/INFOCOMM 10:2013 para o segundo. O as-built é definido como <cite index="5-1">a correção ou modificação de qualquer documentação de projeto ou software criado ao longo do projeto para refletir a condição final, instalada e aceita do sistema AV — considerado essencial pelos proprietários para todo serviço e manutenção futuros, de modo a estabelecer uma linha de base correta para todos os elementos do sistema na conclusão e aceitação</cite>.

### 4.5 Gestão de mudança da documentação

Documentação de projeto não é estática — a norma exige processo formal de atualização, não apenas entrega final: <cite index="10-1">um registro formal de toda a documentação do projeto e suas mudanças deve ser mantido para manter todas as partes interessadas informadas, com um processo de modificação de elementos de documentação acordado e todas as partes envolvidas informadas da mudança</cite>. Em projetos ATIV com revisões numeradas (R00, R01, R02...), esse processo já está embutido na convenção de nomenclatura — mas o registro formal de quem aprovou cada mudança precisa acompanhar cada revisão, não apenas o número da versão.

### 4.6 Quadro-resumo por nível

| Nível | Pontuação | Entregáveis adicionais em relação ao nível anterior |
|---|---|---|
| Simples | 11–15 pontos | Escopo, BOM, localização arquitetônica, referência arquitetônica, interconexão, montagem de equipamento, verificação de desempenho, as-built, lista de encerramento |
| Moderado | 16–21 pontos | + informação detalhada do projeto, detalhes individuais de dispositivo, informação de caminho de cabos |
| Complexo | 22+ pontos | + cronograma formal, seção arquitetônica, informação de display (V202.01), informação de cobertura de áudio (A102.01) |
| Todos os níveis | — | Registro de arquivo do projeto e matriz de atribuição de responsabilidade (obrigatórios independentemente da classificação) |

## 5. PROVA

- Método de pontuação por critérios objetivos (espalhamento geográfico, orçamento, complexidade técnica, número de salas, disciplinas envolvidas, mão de obra, stakeholders, risco, recursos, cronograma) — norma consolidada (ANSI/AVIXA D401.01:2023).
- Três faixas de classificação (simples 11-15, moderado 16-21, complexo 22+) — norma consolidada.
- Tabela cumulativa de entregáveis mínimos por nível, incluindo os quatro itens adicionais do nível complexo (cronograma, seção arquitetônica, display, cobertura de áudio) — norma consolidada.
- Distinção formal entre as-built e verificação de desempenho — norma consolidada, com remissão à ANSI/INFOCOMM 10:2013.
- Exigência de registro de mudança formal na documentação ao longo do projeto — norma consolidada.

## 6. CTA

Antes de definir o pacote de documentação de um novo projeto, a ATIV recomenda aplicar a pontuação de complexidade da ANSI/AVIXA D401.01:2023 como primeira etapa formal — documentando o resultado da classificação junto ao registro de arquivo do projeto — e então entregar exatamente o conjunto de documentos correspondente, evitando tanto a subdocumentação de projetos complexos quanto o excesso burocrático em projetos simples.

---

## Boas práticas

- Classificar formalmente cada projeto por pontuação de complexidade antes de definir o pacote de documentação, não depois.
- Manter registro de arquivo do projeto e matriz de atribuição de responsabilidade em todo projeto, independentemente do nível de complexidade.
- Tratar as-built e verificação de desempenho como entregáveis distintos, cada um com seu próprio critério de aceitação.
- Para projetos complexos com sistema de display ou áudio relevante, formalizar a documentação de distância de visualização (V202.01) e cobertura de áudio (A102.01) como desenhos específicos, não apenas menção textual.
- Registrar formalmente toda mudança na documentação, com identificação de quem aprovou, ao longo de todo o ciclo do projeto — não apenas incrementar o número de revisão.

## Normas aplicáveis

- ANSI/AVIXA D401.01:2023 — Documentation Requirements for Audiovisual Systems.
- ANSI/INFOCOMM 10:2013 — verificação de desempenho (referenciada para distinguir de as-built).
- ANSI/AVIXA V202.01:2016 — dimensionamento de imagem por distância e tipo de conteúdo (referenciada para informação de display em projetos complexos).
- AVIXA A102.01:2022 — medição e classificação de uniformidade de cobertura de áudio em áreas de escuta (referenciada para informação de cobertura de áudio em projetos complexos; não presente na base de referência consultada — validar em fonte oficial antes de citação formal).

## Verificações antes da implementação

- Aplicar a pontuação de complexidade no início do projeto e documentar o resultado, não deixar a classificação implícita.
- Confirmar, para cada projeto complexo, se sistema de display e sistema de áudio estão presentes — se sim, incluir a documentação formal de V202.01 e A102.01 correspondente; se não, dispensar formalmente o item, documentando a dispensa.
- Verificar se o registro de arquivo do projeto e a matriz de atribuição de responsabilidade estão sendo mantidos ativamente, não apenas criados no início e esquecidos.
- Confirmar que o as-built entregue reflete a condição final instalada e aceita, distinto do relatório de verificação de desempenho.

---

## Fontes e rastreabilidade

**Requisito normativo (DOC-01 — ANSI/AVIXA D401.01:2023, Documentation Requirements for Audiovisual Systems):**
- Método de pontuação de complexidade e critérios de avaliação.
- Três faixas de classificação (simples, moderado, complexo).
- Tabela cumulativa de entregáveis mínimos por nível.
- Definição formal de as-built, distinta de verificação de desempenho.
- Exigência de registro de mudança formal na documentação.

**Lacuna identificada:** a AVIXA A102.01:2022 (cobertura de áudio), referenciada pela D401.01 para documentação de projetos complexos com sistema de áudio, não está na base de referência consultada — validar em fonte oficial antes de uso formal em memorial descritivo ou termo de referência.

---

*© 2026 Grupo ATIV — Documento interno. CT-DOC-01-R00.*
