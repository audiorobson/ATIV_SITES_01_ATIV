# Estratégia de Autoridade entre Domínios — ATIV / Easywall / ExpertAV / VideowallBR

**Data:** 2026-08-24  
**Última revisão pública:** 2026-08-24

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

## 2. Status operacional dos quatro domínios

| Domínio | Papel | Status para interlink SEO | Gate |
|---|---|---|---|
| `ativpro.com` | integração/engenharia/serviços | ATIVO | novo site preservar URLs e corrigir semântica |
| `easywall.com.br` | produto/software videowall | ATIVO COM CONTEXTO | revisar claims/rotas específicas antes de cada link |
| `videowallbr.com.br` | portal editorial técnico | BLOQUEADO ATÉ SANEAMENTO DE ENTIDADE | corrigir descrição das marcas, identidade e e-mails |
| `expertav.com.br` | catálogo/base técnica futura | BLOQUEADO | remover placeholders/cases/dados fictícios e definir propósito |

---

## 3. Papel de cada domínio

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

O site público possui conteúdo substancial sobre software para videowall, NOC/SOC, ONVIF, NDI, dashboards/SCADA/BI, controle e operação.

Easywall deve ser dono de intenções de **software/produto**, não duplicar as páginas de integração da ATIV.

Exemplos de ownership:
- `software para videowall` -> Easywall;
- `controle de videowall` -> Easywall;
- `software NOC/SOC` -> Easywall;
- `projeto e instalação de videowall` -> ATIV;
- `integração de centro de comando` -> ATIV.

**Status:** pode participar de interlink contextual imediatamente, desde que destino/origem sejam relevantes e claims estejam revisadas.

### ExpertAV — www.expertav.com.br

**Status atual: NÃO usar como domínio doador de autoridade.**

A versão pública observada contém conteúdo demonstrativo/placeholder, incluindo:
- `Universidade X`;
- `Empresa Y`;
- `Loja Z`;
- métricas demonstrativas como uptime/reduções sem evidência visível;
- telefone `0800 123 4567`;
- endereço demonstrativo `Av. Paulista, 1000 - Sala 42`.

Gate antes de linkar ativamente:
1. remover placeholders e cases fictícios/demonstrativos;
2. remover telefone/endereço fictícios;
3. definir claramente quem opera o domínio e sua finalidade;
4. publicar conteúdo original e verificável;
5. diferenciar intenção de ATIV/Easywall/VideowallBR;
6. validar indexação/canonical/sitemap;
7. somente então inserir links contextuais.

Função recomendada futura: base técnica/catalogação de tecnologias AV, interoperabilidade e pesquisa, se houver capacidade editorial real.

Evitar que ExpertAV tente ranquear para `integradora audiovisual`, que pertence à ATIV.

### VideowallBR — www.videowallbr.com.br

**Função desejada:** portal editorial técnico especializado em videowall.

O portal já apresenta uma estrutura de pilares como:
- o que é videowall;
- tipos de videowall;
- software;
- processadores;
- NOC/COC/SOC;
- digital signage;
- aplicações por segmento.

Isso é um bom ponto de partida editorial. Porém a versão pública observada possui **problemas de identidade que precisam ser corrigidos antes de usarmos seus backlinks como ativo estratégico**.

### P0 — inconsistências observadas

1. O portal descreve a **ATIV Pro como `Hardware / Fabricante` e “fabricante brasileira de soluções profissionais de videowall e displays”**. Isso conflita com o posicionamento definido para a ATIV como integradora/engenharia/serviços.
2. O portal descreve **Expert AV como `Integradora AV`**, enquanto o próprio ExpertAV público hoje se apresenta como catálogo/soluções e ainda possui conteúdo demonstrativo. A relação precisa ser definida corretamente.
3. O portal alterna identidade textual `Videowall.com.br` com o domínio real `videowallbr.com.br`.
4. Foram observados e-mails diferentes, incluindo `contato@videowallbr.com.br` e `contato@videowall.com.br`.
5. Há claims como `a maior base de conhecimento em português` e afirmações de SEO/IA que devem ser tratadas como copy, não como prova de autoridade.

### Gate VideowallBR antes do link building

- corrigir ATIV para algo como `Integração e Engenharia Audiovisual`;
- descrever Easywall como software/produto quando verdadeiro;
- remover ExpertAV de “parceiros/referências” até saneamento ou corrigir função comprovável;
- escolher nome/domínio canônico único;
- padronizar e-mail de contato;
- revisar `Organization/WebSite` schema;
- revisar title/H1/canonical/OG;
- garantir que parceiros não sejam repetidos de forma artificial em todas as páginas;
- revisar conteúdo por autoria/fonte/originalidade;
- só depois liberar links contextuais para ATIV/Easywall.

---

## 4. Grafo semântico desejado após saneamento

```text
                     +----------------------+
                     |     VideowallBR      |
                     |  editorial técnico   |
                     +----------+-----------+
                                |
                    links editoriais úteis
                    /                           \
                   v                             v
        +----------------------+       +----------------------+
        |       Easywall       |       |        ATIV          |
        | produto / software   |       | engenharia / projeto |
        +----------------------+       +----------------------+
                                               |
                                               v
                                     +----------------------+
                                     |     ExpertAV         |
                                     | técnico/catalogação  |
                                     | SOMENTE após limpeza |
                                     +----------------------+
```

Não há obrigação de link recíproco. Cada seta só existe quando melhora o conteúdo para o usuário.

---

## 5. Links prioritários ATIV <-> Easywall

### ATIV -> Easywall

#### `/solucoes/videowall/`
Contexto natural:
> Em projetos que exigem gerenciamento avançado de layouts e múltiplas fontes, a arquitetura pode incluir software dedicado de gestão de videowall, como o Easywall, conforme requisitos do projeto.

Anchor preferencial:
- `Easywall`;
- `software de gestão de videowall Easywall`.

#### `/solucoes/centro-comando-controle-noc-soc-sao-paulo/`
Contextos válidos:
- camada de operação;
- visualização multi-source;
- layouts;
- NDI/ONVIF/dashboards quando aplicável.

#### `/insights/video-wall-gestao/`
Pode citar Easywall como exemplo/produto do ecossistema, mantendo o artigo editorialmente independente.

### Easywall -> ATIV

Links contextuais recomendados quando o conteúdo falar de:
- implantação física de videowall;
- desenho de sala de controle;
- infraestrutura elétrica/rede;
- engenharia AV;
- integração de displays, LED, áudio e automação;
- NOC/SOC turnkey.

Destinos prioritários:
- `https://www.ativpro.com/solucoes/videowall/` — após criação;
- `https://www.ativpro.com/solucoes/centro-comando-controle-noc-soc-sao-paulo/`;
- `https://www.ativpro.com/servicos/consultoria-engenharia/`.

Anchors naturais:
- `projeto e integração de videowall pela ATIV`;
- `engenharia para centro de comando`;
- `consultoria e engenharia audiovisual da ATIV`.

---

## 6. VideowallBR depois do saneamento

O portal deve conquistar consultas informacionais que a página comercial da ATIV não deveria absorver.

### Pillar sugerido
`Guia completo de videowall profissional`

### Supporting content
- cálculo de resolução total;
- pixel pitch e distância de visualização;
- processador vs software de videowall;
- videowall para NOC;
- videowall para SOC;
- LCD vs LED;
- quantidade de telas;
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
- links para ATIV/Easywall apenas quando acrescentarem próxima etapa lógica.

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
- `guia técnico do VideowallBR`.

Evitar repetição em escala:
- `melhor empresa de videowall São Paulo`;
- `empresa de videowall` em todos os links;
- listas escondidas de keywords.

---

## 8. Sitewide links

É aceitável haver identificação institucional legítima no rodapé/About quando a relação é verdadeira.

Mas o ganho deve vir de **links contextuais dentro de conteúdo real**, não de centenas de links idênticos em rodapés.

Não usar `nofollow` em links editoriais naturais apenas para esconder uma relação verdadeira. Para links pagos/patrocinados, aplicar qualificação apropriada conforme documentação vigente.

---

## 9. Google Ads e domínios

Campanhas da ATIV com final URL `ativpro.com` devem terminar em `ativpro.com`.

Não criar:

```text
Google Ads -> ativpro.com/lp/easywall -> redirect -> easywall.com.br
```

Para campanha especificamente do Easywall, o anúncio deve apontar diretamente ao domínio Easywall.

Cross-domain links podem existir como recurso secundário, mas a landing precisa permanecer relevante ao anúncio.

---

## 10. Métricas

Acompanhar por domínio:
- branded/non-branded clicks;
- top queries;
- landing pages;
- referral traffic real;
- assisted conversions;
- links editoriais úteis;
- overlap de queries;
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
