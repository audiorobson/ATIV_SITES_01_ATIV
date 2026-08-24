# ATIV — Propostas de Temas para Conteúdo Técnico AV

**Objetivo:** criar uma base editorial técnica de alta autoridade para alimentar páginas comerciais, Insights, materiais de apoio e futuras campanhas da ATIV.

Este arquivo é um **backlog para o agente especialista AV**. Ele deve produzir conteúdo tecnicamente correto, verificável e útil — não textos genéricos de marketing.

---

## 1. Regras para o agente especialista AV

Antes de escrever qualquer conteúdo:

1. ler `content/README.md`;
2. ler `content/COPY_CONTRACT.md`;
3. ler `content/VOICE_AND_TONE.md`;
4. ler `docs/content-strategy.md`;
5. ler `docs/seo-strategy.md`;
6. consultar `seo/keyword-map.csv` e `seo/route-plan.csv`;
7. não criar URL nova sem necessidade;
8. não inventar números, clientes, SLA, certificações, parceiros ou resultados;
9. citar documentação técnica oficial sempre que fizer afirmação de norma, protocolo ou especificação;
10. separar claramente fato técnico, recomendação de projeto e exemplo conceitual.

A produção deve privilegiar:
- engenharia;
- arquitetura;
- interoperabilidade;
- critérios de projeto;
- troubleshooting;
- comissionamento;
- operação;
- segurança;
- documentação;
- manutenção;
- experiência real de campo.

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

Cada texto entregue pelo agente especialista deve conter:

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

---

# 13. Fontes preferenciais

Usar prioritariamente:

1. standards bodies;
2. documentação oficial de fabricantes;
3. documentação de protocolos;
4. papers técnicos;
5. guias de engenharia reconhecidos;
6. normas brasileiras/internacionais quando publicamente acessíveis e pertinentes;
7. experiência prática da ATIV, quando documentável.

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

> “Esta empresa entende como o sistema funciona, como ele falha, como se projeta e como se mantém.”

Se o texto apenas disser que a ATIV oferece tecnologia, inovação, qualidade e experiência, ele ainda não está pronto.
