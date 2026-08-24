# Infraestrutura elétrica para racks AV segundo a ABNT NBR 5410: circuitos dedicados, aterramento e DPS

**ID:** CT-INF-01-R00 | **Marca:** ATIV | **Pilar:** INF | **Formato:** Guia de referência
**Meta description candidata (153 car.):** Por que rack AV em circuito compartilhado causa ruído e falha de equipamento — e o que a NBR 5410 exige para aterramento, DPS e equipotencialização.
**Palavras-chave candidatas:** NBR 5410 rack AV, circuito dedicado AV, DPS rack, aterramento equipamento tecnologia informação, equipotencialização rack

---

## 1. DOR

Um sintoma recorrente em diagnóstico de campo: ruído de 60 Hz no áudio, resets espontâneos de DSP, ou falha de equipamento após queda de energia — tudo isso enquanto o rack "está ligado à rede elétrica normalmente". Na maioria dos casos investigados, a causa não é o equipamento AV. É a infraestrutura elétrica que alimenta o rack ter sido tratada como mais um ponto de tomada da instalação predial, em vez de um circuito projetado especificamente para cargas eletrônicas sensíveis.

O padrão de falha mais comum: rack AV compartilhando circuito com iluminação ou climatização, sem DPS dedicado na origem daquele circuito, e com aterramento funcional tratado como item genérico da instalação predial em vez de equipotencialização específica para equipamento de tecnologia da informação.

## 2. IMPACTO

- **Ruído e degradação de sinal:** cargas indutivas (motores de climatização, reatores de iluminação) no mesmo circuito introduzem ruído elétrico que se manifesta como zumbido em áudio ou artefatos em vídeo — sintoma frequentemente atribuído erroneamente a cabo ou equipamento.
- **Dano por surto:** sem DPS dimensionado e posicionado corretamente na origem da instalação, um surto de tensão (descarga atmosférica induzida, manobra de rede) se propaga diretamente aos equipamentos eletrônicos do rack, que costumam ser os mais sensíveis e mais caros da instalação.
- **Risco de choque e falha de proteção:** aterramento inadequado em equipamento de tecnologia da informação, combinado com esquema de aterramento predial incompatível, pode comprometer tanto a segurança de pessoas quanto a eficácia dos dispositivos de proteção instalados.

## 3. SOLUÇÃO

Tratar o rack AV como uma carga com requisito elétrico próprio desde o projeto — não como uma extensão de tomadas da instalação predial. Isso envolve três decisões técnicas específicas, todas fundamentadas na NBR 5410: circuito dedicado e devidamente dimensionado; DPS instalado na origem, coordenado com o esquema de aterramento adotado; e equipotencialização funcional específica para equipamento de tecnologia da informação, com atenção à compatibilidade do esquema de aterramento predial com esse tipo de equipamento.

## 4. METODOLOGIA

### 4.1 Por que equipamento de tecnologia da informação tem restrição de esquema de aterramento

Um ponto normativo pouco conhecido fora do universo elétrico, mas com impacto direto em projetos AV/IT: nem todo esquema de aterramento predial é recomendado para esse tipo de carga. A norma brasileira de instalações de baixa tensão registra explicitamente: <cite index="3-1">não é aconselhável, em princípio, prever equipamentos de tecnologia da informação em instalações com esquema TT ou IT</cite>. Isso significa que, antes de especificar onde e como o rack AV será alimentado, é necessário confirmar qual esquema de aterramento (TN, TT ou IT) está implementado na instalação predial — porque a compatibilidade não é automática, e um esquema TT ou IT pode exigir tratamento especial de projeto para equipamento de rede e processamento.

### 4.2 DPS: onde instalar e como ligar conforme o esquema de aterramento

A norma trata a instalação de dispositivos de proteção contra surtos como requisito posicional, não apenas de especificação de produto: <cite index="3-1">os dispositivos de proteção contra sobretensões devem ser instalados na origem da instalação</cite>, com ligação que depende do esquema de aterramento em uso: <cite index="3-1">no esquema TN, entre cada condutor fase e o terminal de aterramento principal; no esquema TT, entre cada condutor ativo (fases e neutro) e o terminal de aterramento principal; no esquema IT, admitindo o neutro não distribuído, entre cada condutor fase e o terminal de aterramento principal</cite>.

Para os sistemas de sinal — que inclui, na prática, cabeamento de dados e de controle que chega ao rack — a norma estabelece um requisito de tipo de dispositivo: <cite index="2-1">para os sistemas de sinal, os dispositivos de proteção contra sobretensões devem ser do tipo curto-circuitante, quando externos ao equipamento</cite>. Já para o sistema de energia, a regra é praticamente oposta: <cite index="2-2">os dispositivos de proteção contra sobretensões devem ser de tipo não curto-circuitante para proteger o sistema de energia</cite>, com exceção admitida apenas quando há proteção contra sobrecorrente devidamente coordenada.

Quando há mais de um estágio de proteção (por exemplo, DPS na entrada de energia do prédio e DPS adicional na origem do circuito do rack), a norma exige coordenação explícita entre eles: <cite index="2-2">quando utilizada a proteção em cascata, deve ser efetuada a coordenação adequada, entre os vários estágios, da tensão nominal e da corrente de descarga dos dispositivos de proteção contra sobretensões em geral, desde a origem da instalação até aos equipamentos a serem protegidos</cite>. Um DPS mal coordenado com o estágio anterior não aumenta a proteção — pode simplesmente falhar sem que o estágio seguinte perceba a falha.

### 4.3 Equipotencialização funcional: o rack não usa o mesmo critério de uma tomada comum

Para equipamento de tecnologia da informação, a equipotencialização tem exigências específicas de baixa impedância, distintas da equipotencialização de proteção contra choques. A norma detalha: <cite index="0-2">a ligação equipotencial pode incluir condutores, capas metálicas de cabos e partes metálicas da edificação, como tubulações de água e eletrodutos, ou uma malha instalada em cada pavimento — sendo conveniente incluir as armaduras do concreto da edificação na ligação equipotencial</cite>. Para frequências usuais de rede, a norma orienta um critério prático de custo-benefício: <cite index="0-1">para frequências de 50 Hz ou 60 Hz, caso mais comum, um condutor de cobre de 50 mm² de seção nominal constitui um bom compromisso entre custo e impedância</cite>.

Os condutores de aterramento funcional que conectam os DPS ao barramento de equipotencialização têm um requisito geométrico direto, não apenas de seção: <cite index="0-3">os condutores de aterramento funcional que ligam os dispositivos de proteção contra surtos ao barramento de equipotencialização funcional devem seguir o percurso mais reto e mais curto possível, a fim de reduzir ao mínimo a impedância</cite>. Um DPS tecnicamente correto, mas conectado por um condutor longo e com curvas desnecessárias, perde parte da sua eficácia justamente por aumentar a impedância do caminho de descarga.

A norma também trata da seção desses condutores em função da corrente de falta esperada: <cite index="0-3">a determinação da seção dos condutores de aterramento funcional deve considerar as possíveis correntes de falta que possam circular e, quando o condutor de aterramento funcional for também usado como condutor de retorno, a corrente de funcionamento normal e a queda de tensão — quando os dados necessários não estiverem disponíveis, deve-se consultar o fabricante do equipamento</cite>.

### 4.4 Dispositivos DR: proteção complementar, não solução isolada

Embora o foco de um rack AV normalmente não recaia sobre as áreas de instalação de alta sensibilidade descritas pela norma (banheiros, áreas externas, cozinhas), o princípio de proteção complementar por DR se aplica a qualquer circuito da instalação onde haja risco de contato: <cite index="1-2">a utilização de dispositivos DR não é reconhecida como constituindo, em si, uma medida de proteção completa, e não dispensa de forma alguma o emprego de uma das medidas de proteção enunciadas para seccionamento automático da alimentação</cite>. Ou seja: instalar um DR no circuito do rack não substitui aterramento correto e coordenação de disjuntores — é uma camada adicional, não a solução única.

### 4.5 Circuito dedicado: dimensionamento passo a passo

Para o circuito terminal do rack, o processo de dimensionamento segue a lógica geral de circuitos independentes definida pela norma, com atenção a três variáveis que costumam ser subestimadas em racks AV:

1. **Fator de agrupamento:** quando o circuito do rack compartilha eletroduto com outros circuitos, a capacidade de condução de corrente reduz conforme o número de circuitos agrupados — um material de referência prático ilustra a lógica com uma tabela de fatores por agrupamento (1 circuito = fator 1; 2 = 0,80; 3 = 0,70, e assim sucessivamente), a partir da qual se calcula a corrente de projeto corrigida (Ib) dividindo a corrente de projeto calculada (Ic) pelo fator de agrupamento.
2. **Seção mínima por critério de utilização:** a norma prioriza seção mínima por tipo de uso sobre o cálculo isolado de capacidade de condução — circuitos independentes (como o do rack) partem de um piso mínimo de seção que não deve ser reduzido mesmo que o cálculo de corrente indique valor menor.
3. **Dimensionamento do disjuntor e do DR:** a corrente nominal do disjuntor deve ser maior que a corrente de projeto corrigida (Ib) e igual ou menor que a capacidade de condução do condutor (Iz); a corrente nominal do dispositivo DR, quando presente, deve ser maior ou igual à corrente nominal do disjuntor.

Esse processo — embora ilustrado aqui a partir de material didático de referência, não do texto integral da norma — reproduz a lógica de dimensionamento que a NBR 5410 estabelece e deve ser sempre conferido contra a versão vigente da norma e a corrente real do equipamento a ser instalado, não apenas contra uma tabela de exemplo residencial.

## 5. PROVA

- Restrição de compatibilidade entre equipamento de tecnologia da informação e esquemas de aterramento TT/IT — fato normativo documentado na NBR 5410.
- Posicionamento do DPS na origem da instalação e regra de ligação por esquema de aterramento (TN/TT/IT) — fato normativo documentado na NBR 5410.
- Exigência de coordenação entre estágios de DPS em proteção cascata — fato normativo documentado na NBR 5410.
- Critério de seção de condutor equipotencial (50 mm² como compromisso custo/impedância em 50/60 Hz) e exigência de percurso curto e reto para condutores de aterramento funcional ligados a DPS — fato normativo documentado na NBR 5410.
- Dispositivo DR como proteção complementar, não substituta de outras medidas de proteção — fato normativo documentado na NBR 5410.
- Processo de dimensionamento de circuito (fator de agrupamento, seção mínima por uso, disjuntor e DR) — ilustrado a partir de material didático (SENAI), não substitui consulta direta à norma vigente para dimensionamento formal de projeto.

## 6. CTA

Antes de considerar a alimentação de um rack AV como "mais um circuito da instalação", a ATIV recomenda verificar o esquema de aterramento predial vigente, confirmar a compatibilidade com equipamento de tecnologia da informação, e especificar DPS e equipotencialização funcional como itens de projeto específicos — documentados e coordenados, não herdados da instalação elétrica geral.

---

## Boas práticas

- Verificar o esquema de aterramento predial (TN, TT ou IT) antes de especificar a alimentação de qualquer rack AV, e sinalizar incompatibilidade quando o esquema for TT ou IT.
- Especificar DPS na origem do circuito do rack, com tipo (curto-circuitante ou não) adequado a energia versus sinal, e coordenação de estágios quando houver DPS predial anterior.
- Manter o condutor de aterramento funcional entre DPS e barramento de equipotencialização o mais curto e reto possível.
- Nunca depender de dispositivo DR como única medida de proteção contra contatos indiretos no circuito do rack.
- Dimensionar o circuito do rack como circuito independente, sem agrupamento desnecessário com outras cargas no mesmo eletroduto.

## Normas aplicáveis

- ABNT NBR 5410 — instalações elétricas de baixa tensão (dispositivos de proteção contra sobretensões, aterramento funcional, equipotencialização, esquemas de aterramento).
- ABNT NBR 5419 — proteção contra descargas atmosféricas (SPDA), complementar quando há exposição direta da estrutura — não presente na base de referência consultada; validar em fonte oficial antes de citar formalmente.

## Verificações antes da implementação

- Confirmar em campo qual esquema de aterramento (TN/TT/IT) está efetivamente implementado na instalação predial antes de aceitar o ponto de alimentação previsto para o rack.
- Medir a corrente de curto-circuito mínima presumida no ponto de instalação do disjuntor do circuito do rack, conforme critério de coordenação da norma.
- Verificar se o DPS especificado é do tipo correto (curto-circuitante para sinal, não curto-circuitante para energia, salvo coordenação específica).
- Validar a seção e o percurso do condutor de aterramento funcional entre DPS e barramento de equipotencialização antes de fechar a instalação do rack.
- Confirmar dimensionamento de disjuntor e DR contra a corrente real dos equipamentos especificados para o rack, não contra uma tabela de exemplo genérica.

---

## Fontes e rastreabilidade

**Requisito normativo (DOC-16 — ABNT NBR 5410, Instalações Elétricas de Baixa Tensão):**
- Incompatibilidade recomendada entre equipamento de tecnologia da informação e esquemas de aterramento TT/IT.
- Posicionamento e regra de ligação de DPS por esquema de aterramento (TN/TT/IT).
- Tipo de DPS por aplicação (curto-circuitante para sinal, não curto-circuitante para energia) e coordenação de estágios em cascata.
- Critério de seção de condutor equipotencial (50 mm² em 50/60 Hz) e exigência de percurso curto/reto para condutores de aterramento funcional.
- Papel do dispositivo DR como proteção complementar, não substituta.

**Material didático complementar (DOC-18 — Eletricista Instalador Predial de Baixa Tensão, SENAI — não substitui a norma para fins normativos):**
- Ilustração do processo de dimensionamento de circuito (fator de agrupamento, corrente de projeto corrigida, seção mínima por critério de uso, dimensionamento de disjuntor e DR).
- Referência descritiva a SPDA e NBR 5419-3:2015 — citada no material didático, não extraída do texto integral da NBR 5419, que não está na base de referência consultada.

**Lacuna identificada:** a ABNT NBR 5419 (SPDA) não está na base de referência consultada — qualquer especificação de proteção contra descargas atmosféricas deve ser validada diretamente na norma vigente antes de uso formal em projeto ou parecer.

---

*© 2026 Grupo ATIV — Documento interno. CT-INF-01-R00.*
