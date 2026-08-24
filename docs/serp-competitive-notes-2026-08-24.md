# SERP & Competitive Intent Notes — ATIV

**Data:** 2026-08-24  
**Método:** amostra pública de resultados de busca para clusters comerciais. Não equivale a relatório oficial de posição do Google/Search Console.

## 1. Sinal positivo da ATIV

Na amostra para consulta ampla relacionada a `integração audiovisual corporativa` em São Paulo, a ATIV foi recuperada como resultado relevante.

Problema associado: o resultado observado expõe `https://ativpro.com/index.html` em vez da origem preferida documentada `https://www.ativpro.com/`.

Decisão:
- preservar a autoridade existente;
- confirmar preferred origin em Search Console/HTML/canonical;
- consolidar `index.html -> /` com 301 direto quando aprovado;
- consolidar host www/non-www em uma única origem;
- nunca fazer cadeia de redirect.

Candidatos estão em `seo/redirect-map.csv`.

---

## 2. Padrões competitivos observados

### Arcatto

Pontos fortes de arquitetura:
- solução e mercado claramente separados;
- páginas por mercado como Corporativo;
- lista explícita de soluções relacionadas;
- endereço, telefone e contato reais visíveis;
- navegação textual rastreável.

Implicação ATIV:
`/setores/corporativo/` precisa funcionar como hub real de decisão e apontar para as soluções relevantes.

### MegaMax

Pontos de SERP/conversão observados:
- title extremamente alinhado a `soluções audiovisuais corporativas em São Paulo`;
- H1 humano e direto;
- cards/links dedicados para sala de reunião, videoconferência, painel LED, videowall, CCO, sonorização e automação;
- FAQs comerciais;
- endereço/telefone/e-mail visíveis;
- prova social/números colocados cedo.

Não copiar números/estrutura visual. A lição é que **relevância, contato e prova estão semanticamente claros para crawler e usuário**.

### ConnectFone

Padrão observado:
- páginas altamente específicas para intenção, por exemplo instalação de painel LED/videowall;
- conteúdo longo cobrindo dimensionamento, instalação, calibração, software, manutenção e infraestrutura;
- linguagem de serviço completa;
- homepage com Microsoft Teams Rooms e grande abrangência temática.

Risco a evitar:
Não responder criando páginas artificiais enormes ou claims sem prova. A ATIV deve competir com profundidade técnica verificável e melhor arquitetura semântica.

### Sauce

Pontos fortes de conversão:
- CTA direto;
- WhatsApp e formulário bem visíveis;
- expectativa de resposta;
- unidades/localização expostas;
- proposta de valor simples.

Implicação ATIV:
Landing pages Ads precisam reduzir fricção e explicar próximo passo do lead.

### QX2Box

Ponto forte editorial:
- forte concentração temática em videowall/gerenciamento gráfico;
- artigos recentes e específicos sobre infraestrutura crítica, dimensionamento, integração CFTV/SCADA/KPIs e erros de projeto.

Implicação:
Videowall é um cluster que merece conteúdo contínuo, mas dividido corretamente:
- ATIV = engenharia/integração;
- Easywall = software/produto;
- VideowallBR = editorial técnico;
- cada domínio com conteúdo original.

---

## 3. Gaps prioritários de intenção da ATIV

### Gap A — Videowall dedicado

Hoje o tema está disperso entre Home, audiovisual, NOC/SOC e Insights.

Criar owner comercial candidato:
`/solucoes/videowall/`

Ele deve responder:
- tipos de tecnologia;
- arquitetura;
- aplicações;
- processadores/software;
- fontes;
- redundância;
- infraestrutura;
- instalação;
- operação;
- manutenção;
- integração NOC/SOC;
- CTA de engenharia.

### Gap B — Microsoft Teams Rooms

Criar página dedicada somente com conhecimento/prova reais:
`/solucoes/microsoft-teams-rooms/`

Conteúdo:
- MTR Android vs Windows quando vigente;
- room sizing;
- BYOD/interoperabilidade;
- áudio/câmera/display;
- rede/contas/licenciamento em nível apropriado;
- gestão/monitoramento;
- implantação padronizada;
- critérios de especificação;
- CTA.

Evitar sugerir certificação/parceria ATIV-Microsoft sem evidência.

### Gap C — AV-over-IP comercial

Insights já cobrem informação. Falta separar claramente intenção de contratação:
`/solucoes/av-over-ip/`

Conteúdo deve mostrar como a ATIV projeta/integra rede AV, não apenas explicar o conceito.

### Gap D — Corporate sector hub

`/setores/corporativo/` precisa deixar de ser página curta e virar hub para:
- salas híbridas;
- MTR;
- auditórios;
- videowall;
- digital signage quando estratégico;
- AV-over-IP;
- automação;
- suporte.

### Gap E — Government hub

`/setores/governo/` deve diferenciar intenção institucional ampla da página específica Governo/Tribunais.

Deve falar a linguagem de contratação real:
- fornecimento;
- instalação;
- configuração;
- integração;
- documentação;
- treinamento;
- comissionamento;
- suporte;
- interoperabilidade;
- continuidade operacional.

---

## 4. Vantagem competitiva que a ATIV deve explorar

A ATIV possui espaço para competir não pela quantidade de palavras, mas por **engenharia demonstrável**.

Cada página comercial P0 deve incluir artefatos difíceis de imitar com conteúdo genérico:
- diagramas de arquitetura próprios;
- signal flow;
- exemplos de topologia;
- decisões de projeto;
- checklists técnicos;
- requisitos de infraestrutura;
- tabelas de trade-offs;
- fotos reais;
- cases verificáveis;
- processo de comissionamento;
- documentação entregue;
- referências normativas/fabricantes quando aplicável.

Isto também reduz aparência de conteúdo gerado em massa.

---

## 5. Titles/H1 — estratégia

A ATIV precisa parar de reutilizar title institucional genérico em páginas diferentes.

### Modelo

`{intenção principal} | {diferencial/escopo} | ATIV`

Exemplos de trabalho, não copy final de Brand Kit:
- `Integração Audiovisual Corporativa | Projeto e Implantação | ATIV`
- `Salas de Reunião Híbridas | Projeto AV e UC | ATIV`
- `Videowall Corporativo | NOC, SOC e Centros de Controle | ATIV`
- `Audiovisual para Auditórios | Projeto, Áudio e Automação | ATIV`
- `Soluções AV para Governo e Tribunais | Engenharia | ATIV`

H1 deve ser uma frase humana, íntegra no DOM. Efeitos de split-text são apenas apresentação.

---

## 6. Conteúdo que não devemos copiar dos concorrentes

- contagem de clientes sem prova;
- número de projetos sem fonte;
- logos de clientes sem autorização/evidência;
- SLA sem contrato/capacidade;
- certificações não existentes;
- superlativos como `maior`, `melhor`, `mais buscada` sem sustentação;
- textos longos repetindo keyword;
- páginas geográficas quase idênticas.

O benchmark é de **arquitetura e intenção**, não de claims.

---

## 7. Próxima validação proprietária

Quando Search Console estiver disponível, cruzar para cada cluster:

```text
query
page
clicks
impressions
CTR
average position
device
country
```

Responder:
1. qual URL o Google já escolhe para a consulta?;
2. existe canibalização?;
3. qual página possui impressões sem CTR?;
4. qual página está posições 4-20 e merece otimização prioritária?;
5. qual URL antiga recebe links e precisa ser preservada?;
6. quais novos gaps realmente possuem demanda?

Só então usar a palavra `ranking` com dados quantitativos da propriedade.
