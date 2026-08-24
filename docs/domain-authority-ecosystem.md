# Estratégia de Autoridade entre Domínios — ATIV / Easywall / ExpertAV / VideowallBR

**Data:** 2026-08-24

## 1. Objetivo

Usar o ecossistema de marcas/domínios para criar uma rede real de conhecimento, produto e engenharia que ajude pessoas a navegar entre assuntos relacionados e, como consequência, produza links editoriais legítimos.

Isto **não** é uma estratégia de manipulação de PageRank.

São proibidos:
- backlinks artificiais em massa;
- troca sistemática de links com anchor exata;
- blocos sitewide criados só para SEO;
- páginas de parceiros sem conteúdo cujo único propósito seja apontar links;
- múltiplos domínios com conteúdo quase idêntico tentando dominar a mesma SERP;
- páginas cidade × serviço copiadas entre domínios;
- redirects cross-domain usados como página intermediária para anúncios.

Google Search classifica padrões excessivos de troca/cross-linking, páginas de parceiros criadas exclusivamente para links, links automatizados e doorway pages como práticas potencialmente abusivas.

---

## 2. Papel de cada domínio

### ATIV — www.ativpro.com

**Função primária:** integradora, engenharia, execução, serviços, operação e autoridade B2B/Governo.

Deve possuir as intenções:
- integração audiovisual corporativa;
- engenharia audiovisual;
- salas híbridas/UC;
- videowall como solução integrada;
- NOC/SOC/centros de comando;
- auditórios;
- Governo/Tribunais;
- AV-over-IP;
- automação;
- suporte/manutenção.

ATIV é o principal destino de leads de projeto/integração.

### Easywall — www.easywall.com.br

**Função primária:** produto/software especializado em gestão de videowall, NOC, SOC e centros de monitoramento.

O site público já possui conteúdo substancial sobre software para videowall, NOC/SOC, ONVIF, NDI, dashboards/SCADA/BI, controle e operação e identifica relação com o ecossistema ATIV.

Easywall deve ser dono de intenções de **software/produto**, não duplicar as páginas de integração da ATIV.

Exemplos:
- `software para videowall` -> Easywall;
- `controle de videowall` -> Easywall;
- `software NOC/SOC` -> Easywall;
- `projeto e instalação de videowall` -> ATIV;
- `integração de centro de comando` -> ATIV.

### ExpertAV — www.expertav.com.br

**Status atual: NÃO usar ainda como domínio doador de autoridade.**

A versão pública observada contém conteúdo demonstrativo/placeholder, incluindo nomes genéricos de clientes/cases e dados de contato não confiáveis. Antes de qualquer estratégia de interlinking, limpar completamente este estado.

Gate antes de linkar ativamente:
1. remover placeholders e cases fictícios/demonstrativos;
2. remover telefone/endereço fictícios;
3. definir claramente quem opera o domínio e sua finalidade;
4. publicar conteúdo original e verificável;
5. diferenciar intenção de ATIV/Easywall/VideowallBR;
6. validar indexação/canonical/sitemap;
7. somente então inserir links contextuais.

Função recomendada futura: base técnica/catálogo de tecnologias, especificação, interoperabilidade e pesquisa AV, se houver capacidade editorial para manter conteúdo realmente original.

### VideowallBR — www.videowallbr.com.br

**Função recomendada:** portal editorial técnico especializado em videowall.

A visibilidade de conteúdo público no crawl atual é insuficiente para tratá-lo como ativo SEO forte hoje. Deve ser desenvolvido como recurso editorial próprio, não backlink farm.

Temas com utilidade real:
- LCD vs LED vs projeção para videowall;
- bezel e geometria;
- resolução e canvas;
- processadores/controladores;
- videowall IP;
- NOC/SOC;
- disponibilidade 24x7;
- manutenção;
- dimensionamento;
- distância de visualização;
- ergonomia;
- fontes simultâneas;
- gestão de layouts;
- integração com VMS, dashboards, NDI e outras fontes;
- glossário e calculadoras técnicas.

Quando um guia mencionar **software de gestão**, Easywall pode ser um recurso contextual. Quando mencionar **projeto, instalação, engenharia ou implantação**, ATIV pode ser recurso contextual.

---

## 3. Grafo semântico desejado

```text
                     +----------------------+
                     |     VideowallBR      |
                     |  editorial técnico   |
                     +----------+-----------+
                                |
                      conteúdo contextual
                    /                           \
                   v                             v
        +----------------------+       +----------------------+
        |       Easywall       |       |        ATIV          |
        | produto / software   |<----->| engenharia / projeto |
        +----------------------+       +----------------------+
                                               |
                                               v
                                     +----------------------+
                                     |     ExpertAV         |
                                     | técnico/catalogação  |
                                     | SOMENTE após limpeza |
                                     +----------------------+
```

As setas representam links editoriais quando pertinentes; não significam link obrigatório em todas as páginas.

---

## 4. Links prioritários ATIV <-> Easywall

### ATIV -> Easywall

#### `/solucoes/videowall/`
Contexto natural:
> Em projetos que exigem gerenciamento avançado de layouts e múltiplas fontes, a arquitetura pode incluir software dedicado de gestão de videowall, como o Easywall, conforme requisitos do projeto.

Anchor preferencial: `software de gestão de videowall Easywall` ou simplesmente `Easywall`.

#### `/solucoes/centro-comando-controle-noc-soc-sao-paulo/`
Contexto:
- camada de operação;
- visualização multi-source;
- layouts;
- NDI/ONVIF/dashboards quando tecnicamente aplicável.

Anchor: natural/descritiva, sem repetir sempre a mesma keyword.

#### `/insights/video-wall-gestao/`
Pode citar Easywall como exemplo/produto do ecossistema, desde que o artigo mantenha valor editorial independente.

### Easywall -> ATIV

Links contextuais recomendados em páginas que falem sobre:
- implantação física de videowall;
- desenho de sala de controle;
- infraestrutura elétrica/rede;
- engenharia AV;
- integração com processadores, displays, LED, áudio, automação;
- NOC/SOC turnkey.

Destinos prioritários:
- `https://www.ativpro.com/solucoes/videowall/`
- `https://www.ativpro.com/solucoes/centro-comando-controle-noc-soc-sao-paulo/`
- `https://www.ativpro.com/servicos/consultoria-engenharia/`

Anchor deve explicar a função: `projeto e integração de videowall pela ATIV`, `engenharia para centro de comando`, etc.

---

## 5. VideowallBR como ativo editorial

O melhor papel de VideowallBR é conquistar consultas informacionais que uma página comercial da ATIV não deveria tentar absorver.

### Exemplo de cluster

Pillar:
- `Guia completo de videowall profissional`

Supporting content:
- como calcular resolução total;
- pixel pitch e distância de visualização;
- processador vs software de videowall;
- videowall para NOC;
- videowall para SOC;
- LCD vs LED;
- como escolher quantidade de telas;
- VMS + videowall;
- NDI em salas de controle;
- redundância em centros 24x7;
- checklist de especificação.

Cada artigo deve ter:
- autor/revisor identificável quando pertinente;
- fontes técnicas;
- diagramas próprios;
- exemplos próprios;
- data de revisão;
- nenhum texto replicado da ATIV/Easywall;
- links externos de referência quando úteis;
- links para ATIV/Easywall apenas quando eles acrescentarem uma próxima etapa lógica.

---

## 6. ExpertAV — plano de recuperação

Antes de indexar/fortalecer o domínio:

### P0
- remover conteúdo fictício;
- revisar robots/noindex temporário de páginas demonstrativas;
- inserir identidade e contato reais;
- remover métricas não comprovadas;
- definir proposta de valor.

### Depois
Se ExpertAV se tornar uma biblioteca técnica/catalogação, pode produzir páginas como:
- compatibilidade de codecs/protocolos;
- categorias de dispositivos AV;
- glossário;
- guias de seleção;
- documentação normalizada de interfaces;
- comparativos técnicos com metodologia clara.

Evitar que ExpertAV tente ranquear para `integradora audiovisual`, que pertence à ATIV.

---

## 7. Regras de anchor text

Preferir:
- marca;
- descrição natural do recurso;
- frase contextual.

Exemplos bons:
- `Easywall`;
- `software de gestão de videowall Easywall`;
- `engenharia de centros de comando da ATIV`;
- `guia técnico de videowall do VideowallBR`.

Evitar padrão repetitivo em dezenas de páginas:
- `melhor empresa de videowall São Paulo`;
- `empresa de videowall` em todos os links;
- listas escondidas de keywords.

---

## 8. Sitewide links

É aceitável haver identificação institucional legítima no rodapé/About, por exemplo “Produto/ecossistema ATIV”, quando a relação é verdadeira.

Mas o ganho SEO deve vir dos **links contextuais dentro de conteúdo real**, não de 500 links idênticos em rodapés.

Não usar `nofollow` em links editoriais naturais entre propriedades próprias apenas para esconder relação. Também não assumir que todo link de domínio próprio merece follow: se for anúncio/patrocínio, usar qualificação apropriada; se for link demonstrativo não confiável, não publicar.

---

## 9. Google Ads e domínios

Campanhas da ATIV com display/final URL `ativpro.com` devem terminar em `ativpro.com`.

Não criar fluxo:

```text
Google Ads -> ativpro.com/lp/easywall -> redirect -> easywall.com.br
```

Para campanha especificamente do produto Easywall, o anúncio deve apontar diretamente ao domínio Easywall.

Cross-domain links podem existir na landing page como recurso secundário, mas o destino principal do anúncio precisa corresponder ao que foi anunciado e permanecer funcional/relevante.

---

## 10. Métricas

Acompanhar separadamente por domínio:
- branded/non-branded clicks;
- top queries;
- páginas de entrada;
- referral traffic real entre os domínios;
- assisted conversions;
- links editoriais criados;
- páginas com overlap de queries;
- leads por intenção;
- index coverage.

Não usar quantidade bruta de backlinks entre as próprias marcas como KPI.

---

## 11. Referências

Google Search Central — links:
https://developers.google.com/search/docs/crawling-indexing/links-crawlable

Google Search Essentials:
https://developers.google.com/search/docs/essentials

Spam policies:
https://developers.google.com/search/docs/essentials/spam-policies

Helpful content:
https://developers.google.com/search/docs/fundamentals/creating-helpful-content

Domínios avaliados:
- https://www.ativpro.com/
- https://www.easywall.com.br/
- https://www.expertav.com.br/
- https://www.videowallbr.com.br/
