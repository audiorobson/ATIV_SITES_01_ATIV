# ATIV — Base Editorial e Copywriting

Este diretório é a fonte versionada de textos, briefings, claims, mensagens comerciais e conteúdo editorial da nova plataforma ATIV.

**Regra principal:** componentes não inventam copy. O front-end consome conteúdo aprovado daqui ou do CMS derivado desta base.

## Objetivos

- manter copy separado de layout e código;
- permitir revisão comercial, técnica, SEO e jurídica;
- impedir claims não comprovados;
- manter histórico de versões;
- criar consistência entre orgânico, Ads, propostas e demais canais;
- preparar migração futura para o CMS sem perder rastreabilidade.

## Estrutura

```text
content/
├── README.md
├── COPY_CONTRACT.md
├── VOICE_AND_TONE.md
├── CONTENT_INDEX.csv
├── glossary/
│   └── av-vocabulary.md
├── evidence/
│   └── claim-registry.csv
├── templates/
│   ├── page-copy-template.md
│   └── ads-landing-template.md
├── pages/
│   ├── home.md
│   ├── solutions/
│   ├── sectors/
│   ├── services/
│   └── government/
├── ads/
│   └── README.md
└── approvals/
    └── README.md
```

## Status editoriais

- `brief` — briefing e intenção definidos, sem copy completa;
- `draft` — texto em construção;
- `technical_review` — aguardando validação técnica;
- `seo_review` — aguardando revisão SEO;
- `commercial_review` — aguardando revisão comercial;
- `approved` — aprovado para implementação;
- `published` — publicado;
- `needs_update` — precisa revisão;
- `retired` — não usar em novas superfícies.

## Contrato mínimo de cada página

Todo arquivo de página deve declarar no frontmatter:

```yaml
content_id:
route:
page_type:
status:
audience:
funnel_stage:
primary_intent:
primary_keyword:
secondary_keywords: []
primary_cta:
secondary_cta:
claim_ids: []
internal_links: []
external_sources: []
technical_reviewer:
seo_reviewer:
commercial_reviewer:
last_reviewed:
seo_title: # obrigatório em approved/published
meta_description: # obrigatório em approved/published
heading: # obrigatório em approved/published
```

## Princípio editorial

A ATIV vende capacidade de engenharia, integração, execução e operação. O texto deve provar competência por meio de arquitetura, processo, evidência e resultado — nunca por adjetivos vazios.

Preferir:

> Projetamos a arquitetura AV, integramos áudio, vídeo, controle, colaboração e rede e entregamos o sistema com comissionamento e documentação.

Evitar:

> Transformamos o futuro com experiências inovadoras e soluções revolucionárias.

## Claims

Nenhum número, certificação, cliente, contrato, fabricante, SLA, uptime, prazo, resultado ou vínculo institucional pode ser publicado sem `claim_id` válido em `evidence/claim-registry.csv`.

## SEO

A rota é definida por `seo/route-plan.csv`. Conteúdo não cria nova URL por iniciativa própria. Alterações de slug dependem do processo descrito em `docs/seo-migration.md`.

## Ads

Landing pages pagas usam o mesmo conhecimento e evidências, mas podem ter copy mais direta e específica. Devem seguir `docs/ads-route-strategy.md` e o template em `templates/ads-landing-template.md`.

## Aprovação

`approved` não significa apenas copy bonita. Para páginas comerciais P0, aprovação exige:

1. coerência com Brand/Voice;
2. revisão técnica;
3. SEO alinhado à intenção da rota;
4. claims comprovados;
5. CTA e próxima ação claros;
6. links internos definidos;
7. nenhum placeholder restante.
