---
content_id: PAGE-SOL-SALA-001
route: /solucoes/sala-reuniao-hibrida-sao-paulo/
page_type: solution
status: draft
audience:
  - "empresas"
  - "equipes de engenharia e tecnologia"
funnel_stage: consideration
primary_intent: commercial
primary_keyword: "sala de reunião híbrida"
secondary_keywords:
  - "Teams"
  - "Zoom"
  - "Webex"
primary_cta: "Projetar uma sala"
secondary_cta: "Ver integração ponta a ponta"
primary_cta_href: "/contato/"
secondary_cta_href: "/solucoes/audiovisual/"
claim_ids: []
internal_links:
  - "/contato/"
  - "/setores/corporativo/"
  - "/setores/governo/"
  - "/solucoes/audiovisual/"
  - "/solucoes/auditorio-corporativo-sao-paulo/"
external_sources: []
technical_reviewer: pending
seo_reviewer: pending
commercial_reviewer: pending
last_reviewed: 2026-08-25
seo_title: "Sala de reunião híbrida: projeto, áudio, câmera e controle | ATIV"
meta_description: "Salas híbridas em que quem está remoto ouve e vê tão bem quanto quem está na mesa. Captura, áudio com AEC, display dimensionado, controle simples e integração com Teams, Zoom e Webex."
heading: "Sala de reunião híbrida em que o participante remoto ouve, vê e é visto sem ajuste manual."
eyebrow: "Solução · Sala de reunião híbrida"
lede: "Captura, áudio, display, controle e plataforma de colaboração projetados juntos, para reuniões que começam com um toque."
media_src: "/media/diagramas/sala-reuniao-hibrida.jpg"
media_alt: "Diagrama ilustrativo de sala de reunião híbrida: microfones, câmera, display, DSP e colaboração."
media_caption: "Ilustração técnica — não é fotografia de obra."
---

## Contexto operacional

A reunião híbrida expõe qualquer falha do sistema. Quem está remoto não vê o quadro, ouve eco, perde a fala de quem está longe do microfone. Quem está na sala gasta os primeiros minutos escolhendo entrada, ajustando volume e reconectando o cabo.

Os problemas mais frequentes têm causa de projeto:

- microfone de mesa único em sala longa: captação desigual e ruído de mesa;
- ausência de cancelamento de eco acústico (AEC) processado adequadamente;
- display pequeno para a distância da última cadeira — conteúdo de planilha ilegível;
- câmera com enquadramento fixo que mostra a mesa vazia e corta quem fala;
- interface com dez botões para uma sala que precisa de dois: "Iniciar reunião" e "Compartilhar".

## Arquitetura: como funciona

```text
[Plataforma UC: Teams / Zoom / Webex — conta corporativa]
        │
[Sistema de sala ou PC dedicado]
   ├── Áudio: microfone(s) de teto ou mesa → DSP com AEC → caixas acústicas
   ├── Vídeo: câmera com enquadramento automático → codec
   ├── Conteúdo: compartilhamento sem fio + HDMI de mesa → display
   └── Controle: painel de toque na mesa — iniciar, compartilhar, volume, encerrar
[Rede: VLAN AV · PoE para painel, câmera e microfone · QoS para tráfego UC]
```

Critérios de projeto por porte de sala:

| Porte | Captação | Câmera | Display | Controle |
| --- | --- | --- | --- | --- |
| Pequena (até 6) | Barra de áudio ou microfone de mesa com AEC | Grande-angular fixa | Um display dimensionado pela distância | Painel de toque simples |
| Média (6–12) | Microfone de teto ou múltiplos de mesa + DSP | Enquadramento automático de quem fala | Um ou dois displays | Painel de toque |
| Grande (12+) | Array de teto + DSP com zonas | PTZ ou múltiplas câmeras | Dois displays ou projeção | Painel de toque + automação |

O tamanho do display é calculado pela distância de visualização e pelo tipo de conteúdo, seguindo o padrão ANSI/AVIXA V202.01 — planilhas e código exigem imagem maior do que apresentações.

## Escopo ATIV

- Levantamento e definição do porte
- Projeto por padrão de sala (replicável)
- Fornecimento
- Instalação e infraestrutura (elétrica, rede, fixações)
- Configuração e integração com a plataforma UC
- Testes e comissionamento por sala
- Treinamento de usuários e TI
- Documentação as-built
- Suporte e manutenção (escopo em contrato)

## Interoperabilidade

- Plataformas: Microsoft Teams, Zoom, Webex e outras compatíveis com sistema de sala ou PC dedicado;
- Compartilhamento sem fio com suporte a notebooks corporativos e convidados;
- Áudio em rede (Dante) quando há DSP central ou várias salas;
- Controle por IP com feedback de estado de cada dispositivo.

## Redução de risco: processo

1. Definir padrões de sala (pequena, média, grande) e replicá-los — menos treinamento, menos estoque de reposição.
2. Validar EDID, HDCP e resolução de cada fonte contra o display antes da entrega.
3. Medir cobertura de captação e verificar AEC com reunião de teste real.
4. Entregar a rede AV documentada para a TI (VLAN, PoE, QoS).
5. Comissionar cada sala com checklist e relatório, alinhado ao padrão ANSI/AVIXA 10:2013.

## FAQ

**Microfone de teto ou de mesa?**
Teto, quando a mesa é longa ou muda de configuração, e quando ruído de mesa (teclado, papel) incomoda. Mesa, em salas pequenas com posições fixas. A decisão vem do levantamento acústico e do uso.

**Precisa de sistema dedicado ou basta um notebook?**
Sistema dedicado para salas de uso frequente: inicia sem depender do notebook do usuário e é gerenciável pela TI. Notebook, apenas em salas pequenas de uso eventual.

**Dá para padronizar salas já existentes?**
Sim. O levantamento identifica o que fica e o que muda para chegar ao padrão definido; a implantação pode ser por etapas.

**Como fica a rede?**
Dispositivos AV em VLAN própria, com PoE dimensionado e QoS para o tráfego de colaboração. O projeto de rede é entregue à TI antes da instalação.

## Soluções e setores relacionados

- Integração ponta a ponta [Abrir página](/solucoes/audiovisual/)
- Auditório corporativo [Abrir página](/solucoes/auditorio-corporativo-sao-paulo/)
- Corporativo [Abrir página](/setores/corporativo/)
- Governo [Abrir página](/setores/governo/)

## Quantas salas, qual plataforma, qual o tamanho da maior.

Com isso a engenharia define os padrões de sala e devolve uma proposta replicável.

[Projetar uma sala](/contato/)
