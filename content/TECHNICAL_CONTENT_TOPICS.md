# ATIV — Propostas de Temas para Conteúdo Técnico AV

**Objetivo:** criar uma base editorial técnica de alta autoridade para alimentar páginas comerciais, Insights, materiais de apoio, campanhas, CMS e futuras bases RAG da ATIV.

Este arquivo é um **backlog e contrato de produção para o agente especialista AV**. Ele deve produzir conteúdo tecnicamente correto, verificável, reutilizável e útil — não textos genéricos de marketing.

---

# 1. CONTRATO OBRIGATÓRIO PARA O AGENTE ESPECIALISTA AV

## 1.1 — Leitura obrigatória antes de produzir qualquer texto

Antes de escrever qualquer conteúdo:

1. ler `content/README.md`;
2. ler `content/COPY_CONTRACT.md`;
3. ler `content/VOICE_AND_TONE.md`;
4. ler `docs/content-strategy.md`;
5. ler `docs/seo-strategy.md`;
6. consultar `seo/keyword-map.csv` e `seo/route-plan.csv`;
7. identificar o ID do tema neste arquivo;
8. consultar sua base RAG técnica conforme o protocolo da seção 1.2;
9. levantar as fontes oficiais necessárias para validação;
10. somente depois iniciar a redação.

O agente não deve criar URL nova sem necessidade e não deve modificar a arquitetura SEO definida no projeto por iniciativa própria.

---

## 1.2 — USO OBRIGATÓRIO DA BASE RAG

A base RAG do agente especialista AV deve ser usada como **fonte técnica primária de pesquisa e contexto** para desenvolver cada conteúdo.

O agente NÃO deve escrever o artigo apenas com conhecimento geral do modelo.

### Fluxo obrigatório de consulta RAG

Para cada tema:

1. pesquisar o título principal do tema na base RAG;
2. pesquisar separadamente cada tecnologia, protocolo, norma, conceito e subtema listado no briefing;
3. recuperar documentação relacionada a arquitetura, aplicação, limitações, interoperabilidade, instalação, configuração, operação, manutenção e troubleshooting;
4. cruzar diferentes documentos da própria base quando houver mais de uma fonte sobre o mesmo ponto;
5. identificar divergências, versões antigas ou recomendações dependentes de fabricante;
6. não transformar uma recomendação específica de fabricante em regra universal do setor;
7. separar claramente:
   - fato técnico;
   - requisito normativo;
   - recomendação de fabricante;
   - boa prática de engenharia;
   - experiência de campo;
   - exemplo conceitual;
8. validar informações sensíveis a versão ou data em documentação oficial atual quando necessário;
9. registrar as principais fontes utilizadas na seção `Fontes e rastreabilidade` do conteúdo;
10. se a RAG não possuir evidência suficiente, declarar a lacuna e pesquisar documentação oficial complementar em vez de preencher por inferência.

### Regra de confiança

A ordem preferencial de confiança é:

```text
norma / standards body
        ↓
documentação oficial do protocolo
        ↓
documentação oficial do fabricante
        ↓
paper / guia técnico reconhecido
        ↓
base RAG interna validada
        ↓
experiência documentada da ATIV
        ↓
exemplo conceitual claramente identificado
```

A RAG serve para recuperar, relacionar e sintetizar conhecimento técnico. Ela **não autoriza inventar informação ausente na documentação recuperada**.

### Quando houver conflito de fontes

O agente deve:

- privilegiar a fonte oficial mais atual e aplicável ao contexto;
- informar quando a resposta depende de versão, fabricante, topologia ou configuração;
- evitar afirmações absolutas quando a engenharia depende do cenário;
- registrar a divergência nas notas técnicas do conteúdo quando ela for relevante para projeto ou operação.

---

## 1.3 — REGRA ABSOLUTA DE NOMENCLATURA DA MARCA

A empresa deve ser mencionada **sempre como `ATIV`, em letras maiúsculas**.

### Forma correta

- ATIV
- engenharia da ATIV
- equipe técnica da ATIV
- soluções da ATIV
- projetos da ATIV
- falar com a ATIV
- especialistas da ATIV

### Formas proibidas

Não usar como nome da empresa:

- Ativ
- ativ
- ATIV Pro
- Ativ Pro
- ATIV PRO
- Ativpro
- AtivPro

### Sobre `ativpro.com`

`ativpro.com` é **somente o endereço/domínio do site**.

Pode aparecer exclusivamente quando tecnicamente necessário como URL, por exemplo:

```text
https://www.ativpro.com/
```

Nunca transformar o domínio em nome comercial.

Exemplo incorreto:

> A ATIV Pro desenvolve projetos audiovisuais.

Exemplo correto:

> A ATIV desenvolve projetos e integra sistemas audiovisuais.

Essa regra vale para:

- títulos;
- subtítulos;
- corpo de texto;
- CTA;
- metadata;
- alt text;
- schema;
- FAQ;
- artigos;
- landing pages;
- legendas;
- documentos;
- textos de Ads;
- qualquer conteúdo entregue ao projeto.

---

## 1.4 — PRINCÍPIOS DE REDAÇÃO TÉCNICA

A produção deve privilegiar:

- engenharia;
- arquitetura;
- interoperabilidade;
- critérios de projeto;
- critérios de decisão;
- limitações;
- troubleshooting;
- comissionamento;
- operação;
- segurança;
- documentação;
- manutenção;
- lifecycle;
- experiência real de campo quando documentável.

O agente deve:

- explicar como o sistema funciona;
- explicar por que determinada decisão existe;
- explicar dependências e trade-offs;
- explicar como a solução pode falhar;
- explicar como validar a implementação;
- diferenciar solução, produto, protocolo e arquitetura;
- evitar superlativos sem evidência;
- evitar marketing abstrato;
- evitar esconder limitações relevantes.

É proibido inventar:

- números;
- quantidade de projetos;
- clientes;
- SLA;
- disponibilidade;
- certificações;
- parceiros;
- resultados;
- contratos;
- métricas;
- capacidades não comprovadas da ATIV.

Claims institucionais só podem ser usados quando aprovados no Claim Registry.

---

## 1.5 — FORMATO ÚNICO DE ENTREGA: UM ARQUIVO `.MD`

Para cada tema solicitado, o agente deve devolver **um único arquivo Markdown autocontido**.

Não entregar:

- vários arquivos separados;
- texto solto fora do Markdown;
- explicações paralelas fora do documento;
- JSON separado;
- HTML como fonte editorial;
- conteúdo dividido em mensagens sem estrutura.

A saída deve poder ser salva diretamente no repositório e servir como fonte para:

- website;
- CMS;
- SEO;
- landing pages;
- snippets;
- FAQs;
- treinamento de agentes;
- futuras bases RAG.

### Nome recomendado

```text
content/technical/<ID>-<slug-do-tema>.md
```

Exemplo:

```text
content/technical/P0.08-av-over-ip-fundamentos-projetos-corporativos.md
```

---

## 1.6 — ESTRUTURA DE INDEXAÇÃO OBRIGATÓRIA DO `.MD`

Todo arquivo técnico produzido deve começar com frontmatter YAML.

Modelo:

```yaml
---
content_id: P0.08
content_type: technical_article
status: draft
brand: ATIV
language: pt-BR
title: "AV-over-IP: fundamentos para projetos corporativos"
slug: "av-over-ip-fundamentos-projetos-corporativos"
primary_intent: "informational + commercial"
primary_keyword: "AV over IP"
secondary_keywords:
  - "AV-over-IP corporativo"
  - "rede audiovisual"
  - "encoder decoder AV"
audiences:
  - engenharia
  - TI
  - operação
related_route: "/solucoes/av-over-ip/"
funnel_stage: "consideration"
technical_reviewer: "pending"
rag_used: true
rag_topics:
  - "AV-over-IP"
  - "multicast"
  - "IGMP"
  - "PTP"
  - "QoS"
source_review_date: "YYYY-MM-DD"
last_reviewed: "YYYY-MM-DD"
---
```

Os campos devem refletir o conteúdo real. Não preencher dados fictícios para completar o frontmatter.

---

## 1.7 — ÁRVORE INTERNA OBRIGATÓRIA DO CONTEÚDO

Depois do frontmatter, usar uma árvore Markdown previsível.

```text
# [CONTENT_ID] Título principal

## 0. Resumo editorial
## 1. Resumo executivo
## 2. Problema que este conteúdo resolve
## 3. Conceitos fundamentais
## 4. Arquitetura e funcionamento
## 5. Componentes e tecnologias envolvidas
## 6. Critérios de projeto
## 7. Interoperabilidade e dependências
## 8. Limitações e trade-offs
## 9. Erros comuns
## 10. Troubleshooting
## 11. Boas práticas
## 12. Comissionamento e validação
## 13. Operação e manutenção
## 14. Quando a solução faz sentido
## 15. Quando a solução não faz sentido
## 16. Checklist técnico
## 17. FAQ técnica
## 18. Glossário relacionado
## 19. Sugestões de links internos
## 20. CTA técnico
## 21. Fontes e rastreabilidade
## 22. Notas para o editor/CMS
```

Uma seção pode ser marcada `Não aplicável` quando realmente não fizer sentido ao tema. Não remover seções silenciosamente: a estrutura previsível melhora ingestão, indexação, revisão e recuperação por RAG.

---

## 1.8 — DELIMITADORES PARA RAG, CMS E SITE

Cada arquivo deve usar delimitadores explícitos para facilitar parsing e chunking.

No início do conteúdo:

```html
<!-- ATIV_CONTENT_START:P0.08 -->
```

No final:

```html
<!-- ATIV_CONTENT_END:P0.08 -->
```

Se houver blocos técnicos extensos, podem ser identificados com comentários semânticos:

```html
<!-- ATIV_BLOCK:ARCHITECTURE -->
<!-- ATIV_BLOCK:TROUBLESHOOTING -->
<!-- ATIV_BLOCK:FAQ -->
<!-- ATIV_BLOCK:SOURCES -->
```

Os comentários existem para indexação e automação. Não devem prejudicar a leitura humana do Markdown.

---

## 1.9 — FONTES E RASTREABILIDADE

Toda afirmação técnica relevante deve ser sustentada por fonte adequada.

A seção final deve registrar, quando aplicável:

```md
## 21. Fontes e rastreabilidade

### Standards / normas
- Organização — documento — versão/data — URL ou identificação

### Fabricantes
- Fabricante — documento técnico — versão/data — URL

### Papers / referências técnicas
- Autor/organização — título — data — referência

### Base RAG utilizada
- coleção/tópico recuperado — assunto — data da consulta

### Evidência interna ATIV
- somente quando houver material autorizado e identificável
```

Não copiar trechos longos das fontes. Sintetizar tecnicamente e preservar rastreabilidade.

---

## 1.10 — REGRA DE SAÍDA FINAL DO AGENTE

Quando o usuário solicitar um tema deste backlog, o agente deve responder **somente com o conteúdo do arquivo `.md` produzido**, completo do frontmatter ao delimitador final.

Não adicionar antes ou depois frases como:

- “Aqui está o artigo”;
- “Espero que ajude”;
- “Posso criar o próximo”;
- explicações sobre o processo interno.

A entrega deve ser diretamente persistível no repositório.

---

# 2. P0 — Conteúdo técnico prioritário

Temas diretamente ligados às soluções comerciais estratégicas da ATIV.

## P0.01 — Guia completo de integração audiovisual corporativa

**Intenção:** commercial + informational  
**Público:** decisor, TI, engenharia  
**Página relacionada:** `/solucoes/audiovisual/`

Cobrir:
- o que é integração AV de verdade;
- diferença entre compra de equipamentos e engenharia integrada;
- áudio, vídeo, controle, colaboração e rede;
- levantamento de requisitos;
- projeto executivo;
- interoperabilidade;
- instalação;
- programação;
- comissionamento;
- documentação as-built;
- treinamento;
- suporte e lifecycle.

---

## P0.02 — Como projetar uma sala de reunião híbrida profissional

**Intenção:** commercial investigation  
**Página relacionada:** `/solucoes/sala-reuniao-hibrida-sao-paulo/`

Cobrir:
- acústica e inteligibilidade;
- câmera e enquadramento;
- microfonação;
- loudspeakers;
- displays;
- DSP;
- automação;
- BYOD;
- USB;
- Teams/Zoom/Webex;
- iluminação;
- rede;
- experiência do usuário;
- critérios de comissionamento.

---

## P0.03 — Microsoft Teams Rooms: arquitetura, certificação e integração AV

**Intenção:** commercial  
**Página candidata:** `/solucoes/microsoft-teams-rooms/`

Cobrir:
- MTR Windows vs Android;
- periféricos certificados;
- front-of-room;
- touch console;
- câmera;
- áudio;
- DSP externo;
- BYOD;
- content ingest;
- dual screen;
- rede e políticas de TI;
- provisionamento;
- gerenciamento;
- integração com automação;
- troubleshooting.

---

## P0.04 — Videowall corporativo: arquitetura completa do sistema

**Intenção:** commercial  
**Página candidata:** `/solucoes/videowall/`

Cobrir:
- LCD, LED e projeção;
- resolução total;
- canvas;
- fontes simultâneas;
- processadores;
- controladores;
- software;
- KVM;
- AV-over-IP;
- VMS;
- dashboards;
- redundância;
- monitoramento;
- manutenção;
- ergonomia;
- critérios 24x7.

Relacionar, quando tecnicamente pertinente, com:
- Easywall para camada de software/gestão;
- VideowallBR para aprofundamento editorial.

---

## P0.05 — Centro de Comando e Controle: arquitetura AV para NOC, SOC e CCO

**Intenção:** commercial  
**Página relacionada:** `/solucoes/centro-comando-controle-noc-soc-sao-paulo/`

Cobrir:
- videowall;
- consoles;
- KVM;
- VMS;
- SCADA;
- dashboards;
- fontes IP;
- NDI;
- ONVIF;
- AV-over-IP;
- redundância;
- monitoração;
- disponibilidade;
- operação 24x7;
- ergonomia;
- iluminação;
- acústica;
- controle centralizado.

---

## P0.06 — Auditório corporativo: engenharia de áudio, vídeo, automação e transmissão

**Intenção:** commercial  
**Página relacionada:** `/solucoes/auditorio-corporativo-sao-paulo/`

Cobrir:
- cobertura sonora;
- inteligibilidade;
- DSP;
- microfones;
- matriz;
- projeção vs LED;
- câmeras PTZ;
- switching;
- gravação;
- streaming;
- interpretação;
- acessibilidade;
- automação;
- palco;
- operação técnica.

---

## P0.07 — Sistemas audiovisuais para Governo, Tribunais e Plenários

**Intenção:** government procurement  
**Página relacionada:** `/solucoes/governo-tribunais-sao-paulo/`

Cobrir:
- microfonação de plenário;
- votação quando aplicável;
- gravação;
- transmissão;
- câmeras PTZ;
- identificação de orador;
- sonorização;
- displays e painéis;
- redundância;
- documentação;
- treinamento;
- manutenção;
- operação;
- acessibilidade;
- integração com sistemas existentes.

Evitar qualquer linguagem que sugira favorecimento, homologação ou vínculo institucional inexistente.

---

## P0.08 — AV-over-IP: fundamentos para projetos corporativos

**Intenção:** informational + commercial  
**Página candidata:** `/solucoes/av-over-ip/`

Cobrir:
- encoder/decoder;
- multicast;
- unicast;
- switching;
- VLAN;
- QoS;
- PTP;
- IGMP;
- bandwidth;
- compressão;
- latência;
- sincronismo;
- redundância;
- segurança;
- troubleshooting.

---

## P0.09 — Dante e AES67 em projetos profissionais de áudio em rede

**Intenção:** informational  
**Cluster:** áudio em rede

Cobrir:
- arquitetura Dante;
- primary/secondary;
- multicast;
- clock;
- latency;
- QoS;
- VLAN;
- AES67;
- interoperabilidade;
- Dante Controller;
- Virtual Soundcard;
- Domain Manager quando aplicável;
- troubleshooting de clock e subscriptions.

---

## P0.10 — Como especificar um sistema AV de alta disponibilidade

**Intenção:** technical decision  
**Aplicação:** NOC, SOC, Governo, auditórios críticos

Cobrir:
- pontos únicos de falha;
- redundância de rede;
- fontes de alimentação;
- processadores;
- servidores;
- caminhos alternativos;
- monitoring;
- logs;
- failover;
- manutenção preventiva;
- documentação de recuperação.

---

# 3. P1 — Engenharia e autoridade técnica

## P1.01 — Como fazer levantamento técnico para projeto audiovisual

Checklist:
- ambiente;
- dimensões;
- iluminação;
- acústica;
- elétrica;
- rede;
- infraestrutura;
- operação;
- usuários;
- integrações;
- restrições;
- manutenção.

---

## P1.02 — Projeto conceitual, básico, executivo e as-built em AV

Explicar diferenças, entregáveis e quando cada etapa é necessária.

---

## P1.03 — Comissionamento audiovisual: o que deve ser testado antes da entrega

Cobrir:
- áudio;
- vídeo;
- rede;
- controle;
- automação;
- UC;
- failover;
- presets;
- documentação;
- treinamento;
- critérios de aceite.

---

## P1.04 — Matriz AV tradicional vs AV-over-IP

Comparar:
- escalabilidade;
- latência;
- infraestrutura;
- redundância;
- custo total;
- operação;
- manutenção;
- flexibilidade.

---

## P1.05 — HDMI, HDBaseT, SDI, DisplayPort e USB: quando usar cada transporte

Conteúdo de referência técnica.

---

## P1.06 — EDID e HDCP: principais causas de falha em sistemas de vídeo

Conteúdo altamente útil para autoridade técnica e troubleshooting.

---

## P1.07 — Sincronismo, Genlock, PTP e clock em sistemas AV

Comparar cenários de vídeo, áudio e broadcast/produção.

---

## P1.08 — NDI em ambientes corporativos e centros de comando

Cobrir:
- NDI High Bandwidth;
- NDI HX;
- descoberta;
- bandwidth;
- rede;
- latência;
- multicast quando pertinente;
- segurança;
- aplicações.

---

## P1.09 — ONVIF, RTSP e integração de câmeras IP em sistemas AV

Aplicações em CFTV, NOC/SOC e visualização integrada.

---

## P1.10 — Q-SYS em sistemas audiovisuais integrados

Cobrir arquitetura, DSP, controle, vídeo, rede e aplicações, sempre baseado em documentação oficial atual.

---

## P1.11 — Crestron, Extron, Q-SYS e outras plataformas de automação: como escolher

Não produzir ranking superficial. Comparar critérios de arquitetura e aplicação.

---

## P1.12 — DSP de áudio: por que ele é central em salas corporativas

Cobrir:
- AEC;
- automixer;
- EQ;
- dynamics;
- routing;
- delay;
- gain structure;
- integração USB e UC.

---

## P1.13 — AEC: como funciona o cancelamento de eco acústico

Conteúdo técnico profundo, mas acessível.

---

## P1.14 — Beamforming microphones: critérios de projeto e limitações

Comparar teto, mesa e arrays.

---

## P1.15 — Câmeras PTZ: critérios de especificação para auditórios, salas e plenários

Cobrir:
- sensor;
- zoom;
- FOV;
- tracking;
- protocolo;
- NDI/SDI/HDMI/USB;
- presets;
- baixa luz;
- integração.

---

# 4. P1 — Videowall e visualização

## P1.16 — LCD vs Direct View LED em videowall

Critérios:
- bezel;
- brilho;
- contraste;
- pixel pitch;
- viewing distance;
- manutenção;
- vida útil;
- custo total.

---

## P1.17 — Como calcular resolução total de um videowall

Incluir exemplos matemáticos simples e aplicações reais.

---

## P1.18 — Pixel pitch e distância de visualização em painéis LED

Evitar fórmulas dogmáticas sem contexto; explicar critérios e limitações.

---

## P1.19 — Processador de videowall vs software de gestão de videowall

Tema ideal para conexão contextual com Easywall.

---

## P1.20 — Como integrar VMS, dashboards, SCADA e fontes AV em um videowall

Alta relevância para NOC/SOC.

---

## P1.21 — Redundância em videowalls de operação 24x7

Cobrir hardware, rede, fontes, controladores e procedimentos operacionais.

---

## P1.22 — KVM em centros de comando: arquitetura e casos de uso

Cobrir KVM tradicional, KVM-over-IP e segurança.

---

# 5. P1 — Salas de reunião e colaboração

## P1.23 — BYOD vs sala nativa de Teams/Zoom/Webex

Comparação por cenário de uso.

---

## P1.24 — USB em salas profissionais: extensores, hubs, switching e limitações

Conteúdo técnico valioso e pouco explorado por concorrentes.

---

## P1.25 — Como escolher tamanho e quantidade de displays em sala de reunião

Considerar distância, resolução, conteúdo e layout da sala.

---

## P1.26 — Câmera única, dual camera e multi-camera em salas híbridas

---

## P1.27 — Speaker tracking e presenter tracking: quando funciona e quando não funciona

---

## P1.28 — Interoperabilidade entre Teams, Zoom, Webex e SIP

Sempre revisar documentação atual das plataformas.

---

# 6. P1 — Auditórios, plenários e transmissão

## P1.29 — Sistema de câmeras para auditório: PTZ, switching e presets

---

## P1.30 — Streaming e gravação em auditórios corporativos

---

## P1.31 — Áudio para plenários: microfones, automix e inteligibilidade

---

## P1.32 — Interpretação simultânea e distribuição de idiomas

---

## P1.33 — Acessibilidade audiovisual em auditórios

Cobrir:
- legendagem;
- interpretação em Libras;
- hearing assistance;
- visualização;
- sinalização;
- interfaces acessíveis.

---

## P1.34 — Como preparar um auditório para eventos híbridos

---

# 7. P2 — Operação, manutenção e lifecycle

## P2.01 — Manutenção preventiva em sistemas audiovisuais

---

## P2.02 — Principais causas de falhas intermitentes em sistemas AV

---

## P2.03 — Monitoramento remoto de salas e sistemas AV

---

## P2.04 — Logs, telemetria e observabilidade em AV corporativo

---

## P2.05 — Como documentar um sistema audiovisual para manutenção futura

---

## P2.06 — Lifecycle de equipamentos AV: quando substituir e quando manter

---

## P2.07 — Gestão de firmware em ambientes AV corporativos

---

## P2.08 — Troubleshooting de HDMI em sistemas profissionais

---

## P2.09 — Troubleshooting de Dante

---

## P2.10 — Troubleshooting de AV-over-IP

---

# 8. P2 — Redes para AV

## P2.11 — VLAN para AV: quando separar áudio, vídeo e controle

---

## P2.12 — QoS para Dante e tráfego audiovisual

---

## P2.13 — IGMP Snooping e Querier em redes AV

---

## P2.14 — Jumbo Frames: quando ajudam e quando não ajudam

---

## P2.15 — 1 GbE, 2.5 GbE, 10 GbE e 25 GbE em AV

---

## P2.16 — Fibra óptica em sistemas AV profissionais

---

## P2.17 — Segurança cibernética em AV-over-IP

Cobrir:
- segmentação;
- credenciais;
- firmware;
- serviços desnecessários;
- acesso remoto;
- logging;
- políticas de TI.

---

# 9. P2 — Conteúdo para Governo e especificação

## P2.18 — Como estruturar requisitos técnicos de um sistema audiovisual em Termo de Referência

Não oferecer orientação jurídica. Foco em clareza de requisito técnico, desempenho, interoperabilidade e aceite.

---

## P2.19 — Critérios técnicos para contratação de solução audiovisual integrada

---

## P2.20 — Como evitar especificações restritivas sem perder qualidade técnica

Abordagem neutra, baseada em requisitos funcionais e desempenho.

---

## P2.21 — Documentação técnica exigida na entrega de sistemas AV

---

## P2.22 — Treinamento operacional e transferência de conhecimento em contratos AV

---

## P2.23 — Critérios de aceite e comissionamento em contratos audiovisuais

---

# 10. Conteúdo técnico que diferencia a ATIV de sites genéricos

Estes temas devem receber tratamento visual especial com tabelas, diagramas, specs e dados.

## T10.01 — Anatomia de um rack audiovisual profissional

Mostrar:
- energia;
- patching;
- network;
- DSP;
- matrix/encoders;
- control processor;
- cooling;
- identificação;
- organização.

## T10.02 — Diagrama de sinal de uma sala híbrida

## T10.03 — Diagrama de sinal de um auditório

## T10.04 — Topologia de rede de um sistema Dante

## T10.05 — Topologia AV-over-IP redundante

## T10.06 — Arquitetura de um NOC/SOC com videowall

## T10.07 — Fluxo de câmera, switching, gravação e streaming de um plenário

## T10.08 — Checklist de comissionamento AV

## T10.09 — Checklist de levantamento técnico

## T10.10 — Checklist de entrega e documentação as-built

---

# 11. Glossário técnico a construir

Criar entradas próprias e interligadas para:

- AEC;
- AES67;
- AV-over-IP;
- Dante;
- DSP;
- EDID;
- HDCP;
- HDMI;
- HDBaseT;
- NDI;
- ONVIF;
- PTP;
- QoS;
- IGMP;
- multicast;
- unicast;
- VLAN;
- KVM;
- VMS;
- NOC;
- SOC;
- CCO;
- PTZ;
- pixel pitch;
- bezel;
- BYOD;
- MTR;
- USB extension;
- matrix switcher;
- encoder;
- decoder;
- failover;
- commissioning;
- as-built.

---

# 12. Estrutura obrigatória para cada artigo técnico

Cada texto entregue pelo agente especialista deve seguir a estrutura completa definida nas seções 1.5 a 1.9 deste arquivo.

Como mínimo editorial, o conteúdo precisa conter:

```text
1. Título técnico claro
2. Resumo executivo
3. Problema que o conteúdo resolve
4. Conceitos fundamentais
5. Arquitetura / funcionamento
6. Critérios de projeto
7. Erros comuns
8. Boas práticas
9. Quando a solução faz sentido
10. Quando não faz sentido
11. Checklist ou resumo técnico
12. Fontes oficiais
13. Data da revisão técnica
14. Links internos sugeridos
15. CTA técnico discreto
```

A estrutura completa de 22 seções prevalece quando houver material técnico suficiente.

---

# 13. Fontes preferenciais

Usar prioritariamente:

1. standards bodies;
2. documentação oficial de fabricantes;
3. documentação de protocolos;
4. papers técnicos;
5. guias de engenharia reconhecidos;
6. normas brasileiras/internacionais quando publicamente acessíveis e pertinentes;
7. base RAG técnica validada;
8. experiência prática da ATIV, quando documentável.

Não usar como fonte principal:
- blog SEO sem autoria técnica;
- textos copiados de integradores concorrentes;
- material gerado por IA sem fonte;
- fórum como única evidência para afirmação técnica.

---

# 14. Prioridade inicial recomendada

Primeiro lote para produção:

1. P0.01 — Integração audiovisual corporativa;
2. P0.02 — Sala híbrida profissional;
3. P0.03 — Microsoft Teams Rooms;
4. P0.04 — Videowall corporativo;
5. P0.05 — Centro de comando / NOC / SOC;
6. P0.06 — Auditório corporativo;
7. P0.07 — Governo / tribunais / plenários;
8. P0.08 — AV-over-IP;
9. P0.09 — Dante e AES67;
10. P0.10 — Alta disponibilidade AV.

Depois atacar os temas P1 com maior ligação aos projetos em andamento e às consultas identificadas no Search Console.

---

# 15. Regra editorial final

O conteúdo técnico deve fazer um engenheiro, gerente de TI ou responsável por operação pensar:

> “A ATIV entende como o sistema funciona, como ele falha, como se projeta e como se mantém.”

Se o texto apenas disser que a ATIV oferece tecnologia, inovação, qualidade e experiência, ele ainda não está pronto.

## Checklist final antes da entrega

O agente deve confirmar:

- [ ] consultou a base RAG para o tema e subtemas;
- [ ] validou informações sensíveis a versão/data;
- [ ] identificou claramente as fontes;
- [ ] não inventou claims institucionais;
- [ ] utilizou `ATIV` em caixa alta em todas as referências à empresa;
- [ ] não utilizou `ATIV Pro` como nome da empresa;
- [ ] tratou `ativpro.com` apenas como endereço de domínio quando necessário;
- [ ] entregou um único arquivo `.md`;
- [ ] incluiu frontmatter indexável;
- [ ] preservou `content_id` estável;
- [ ] utilizou os delimitadores `ATIV_CONTENT_START` e `ATIV_CONTENT_END`;
- [ ] manteve hierarquia H1/H2/H3 coerente;
- [ ] incluiu fontes e rastreabilidade;
- [ ] incluiu links internos sugeridos;
- [ ] incluiu CTA técnico discreto;
- [ ] o conteúdo pode ser ingerido pelo site/CMS/RAG sem reestruturação manual.
