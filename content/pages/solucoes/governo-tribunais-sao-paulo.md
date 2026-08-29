---
content_id: PAGE-SOL-TRIB-001
route: /solucoes/governo-tribunais-sao-paulo/
page_type: solution
status: draft
audience:
  - "órgãos públicos"
  - "equipes de engenharia e tecnologia"
funnel_stage: consideration
primary_intent: government_procurement
primary_keyword: "sistema audiovisual para tribunal"
secondary_keywords:
  - "plenário"
  - "sala de sessão"
primary_cta: "Solicitar avaliação técnica"
secondary_cta: "Ver setor Governo"
primary_cta_href: "/contato/"
secondary_cta_href: "/setores/governo/"
claim_ids: []
internal_links:
  - "/contato/"
  - "/setores/governo/"
  - "/solucoes/audiovisual/"
  - "/solucoes/auditorio-corporativo-sao-paulo/"
  - "/solucoes/centro-comando-controle-noc-soc-sao-paulo/"
external_sources: []
technical_reviewer: pending
seo_reviewer: pending
commercial_reviewer: pending
last_reviewed: 2026-08-25
seo_title: "Sistema audiovisual para tribunal, plenário e sala de sessão | ATIV"
meta_description: "Registro de áudio multicanal, câmeras por participante, evidência em tela, transmissão e acessibilidade. A ATIV projeta e integra sistemas audiovisuais para tribunais e plenários com documentação para contratação pública."
heading: "Sistema audiovisual para tribunais e plenários: registro fiel, evidência em tela e operação que não interrompe a sessão."
eyebrow: "Solução · Governo e tribunais"
lede: "Microfonia por participante, gravação multicanal, câmeras com enquadramento por orador, apresentação de documentos, transmissão e acessibilidade — projetados para o rito e documentados para a contratação pública."
media_src: "/media/diagramas/plenario-tribunal.jpg"
media_alt: "Diagrama ilustrativo de plenário: microfonia por assento, câmeras, DSP e caminhos de registro."
media_caption: "Ilustração técnica — não é fotografia de obra."
---

## Contexto operacional

Em uma sala de sessão, o áudio é o registro oficial. Uma frase perdida, um microfone aberto fora de hora ou uma gravação sem identificação de quem falou têm consequência processual, não só técnica.

Requisitos que só este ambiente impõe:

- **Registro** — gravação de áudio multicanal, com canal por microfone ou grupo, para identificar oradores na transcrição;
- **Microfonia por participante** — mesa, bancada e púlpito com controle de quem fala, evitando microfones abertos simultâneos além do que a inteligibilidade suporta;
- **Câmeras por orador** — PTZ com presets por assento ou seguimento automático pelo microfone ativo, para gravação, transmissão e videoconferência;
- **Evidência em tela** — documentos, mídias e sistema processual exibidos para magistrado, partes e público em monitores individuais e tela principal;
- **Videoconferência** — depoimentos e audiências remotas com áudio e vídeo integrados ao sistema da sala;
- **Transmissão** — sessão pública transmitida interna ou externamente, com controle do que é exibido;
- **Acessibilidade** — escuta assistida e legendagem quando exigidas;
- **Discrição** — câmeras e equipamentos posicionados sem intimidar depoentes.

## Arquitetura: como funciona

```text
[Microfones por assento: mesa, bancada, púlpito, testemunha]
        │
[DSP: mixagem automática · limite de microfones abertos · zonas · AEC para remoto]
        ├──► [Sonorização da sala e do público — cobertura verificada]
        ├──► [Gravador multicanal — registro oficial com timestamp]
        ├──► [Videoconferência / plataforma de audiência remota]
        └──► [Transmissão interna e externa]

[Câmeras PTZ com presets por assento ← seguimento pelo microfone ativo]
[Fontes de evidência: PC do magistrado, das partes, câmera de documentos]
        │
[Matriz / AV-over-IP → tela principal · monitores individuais · sala de imprensa · gravação]

[Controle: painel de toque para o assessor — modos Sessão, Audiência remota, Transmissão pública, Privado]
[Rede AV segregada: VLAN · Dante para áudio · PoE · QoS]
[Infraestrutura: elétrica ABNT NBR 5410 · cabeamento ABNT NBR 14565 · rack em sala técnica]
```

Critérios de projeto:

- limite de microfones abertos definido no DSP, com prioridade para a presidência;
- caminho de gravação independente da sonorização — se a sala silencia, o registro continua;
- modo "privado" que corta transmissão e sala de imprensa sem interromper o registro;
- monitores individuais e tela principal dimensionados por distância e conteúdo (ANSI/AVIXA V202.01);
- documentação alinhada aos requisitos da norma ANSI/AVIXA D401.01 e ao termo de referência.

## Escopo ATIV

- Levantamento com a secretaria da sessão e a TI do órgão
- Projeto (memorial, diagramas, topologia, lista de materiais)
- Fornecimento conforme especificação
- Instalação e infraestrutura
- Configuração (DSP, câmeras, matriz, gravação, controle, integração com plataforma de audiência)
- Testes e comissionamento com relatório
- Treinamento de assessores, operadores e TI
- Documentação as-built e manual operacional
- Suporte e manutenção (escopo em contrato)

## Interoperabilidade

- Áudio em rede Dante/AES67 entre microfonia, DSP, gravação e videoconferência;
- Câmeras PTZ por IP, SDI ou NDI, controladas pelo sistema da sala;
- Plataformas de audiência remota e videoconferência de uso institucional;
- Distribuição de vídeo por matriz, HDBaseT ou AV-over-IP;
- Sistemas de votação e painel eletrônico em plenários, quando existentes.

## Redução de risco: processo

1. Levantar o rito real: quem fala, em que ordem, o que é exibido, o que é transmitido, o que é sigiloso.
2. Projetar caminho de registro independente e testá-lo em falha simulada.
3. Entregar projeto de rede e infraestrutura à TI e à engenharia do órgão antes da obra.
4. Comissionar contra o termo de referência, com medição e relatório assinado pelo responsável técnico.
5. Treinar quem opera a sessão para usar os modos sem depender de suporte.
6. Entregar as-built completo para o acervo técnico do órgão.

## FAQ

**Como a gravação identifica quem falou?**
Por gravação multicanal com canal por microfone ou grupo, sincronizada com a câmera que segue o orador. A transcrição usa os dois.

**A sessão pode continuar se a transmissão cair?**
Sim. Transmissão, sonorização e registro são caminhos independentes; a queda de um não interrompe os outros.

**Audiência remota usa o sistema da sala?**
Sim. A plataforma de audiência recebe o mix da sala e a câmera do orador, e o participante remoto é exibido e sonorizado na sala pelo mesmo sistema.

**Como o sistema atende a contratação pública?**
Escopo descrito item a item, conformidade normativa declarada, comissionamento com relatório e documentação as-built — o que o fiscal técnico precisa para aceitar.

**E a acessibilidade?**
Escuta assistida (laço de indução ou sistema equivalente) e integração com legendagem quando exigidas no termo de referência.

## Soluções e setores relacionados

- Governo [Abrir página](/setores/governo/)
- Auditório corporativo [Abrir página](/solucoes/auditorio-corporativo-sao-paulo/)
- Centro de comando e controle [Abrir página](/solucoes/centro-comando-controle-noc-soc-sao-paulo/)
- Integração ponta a ponta [Abrir página](/solucoes/audiovisual/)

## Descreva a sala de sessão e a fase da contratação.

A equipe técnica responde com o que pode ser esclarecido nessa etapa: critérios, normas, arquitetura e escopo.

[Solicitar avaliação técnica](/contato/)
