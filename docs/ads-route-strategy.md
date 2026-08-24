# Estratégia de Rotas para Google Ads, Microsoft Advertising e Busca Orgânica

**Data:** 2026-08-24

## 1. Princípio

Busca orgânica e mídia paga compartilham conteúdo, marca, provas e infraestrutura, mas não precisam compartilhar sempre o mesmo template ou objetivo de página.

A arquitetura será dividida em:

1. **páginas orgânicas indexáveis** — profundidade, autoridade, links internos e intenção completa;
2. **landing pages de campanha `/lp/.../`** — foco em message match e conversão, normalmente `noindex,follow`, fora do sitemap;
3. **conteúdo editorial** — educação/descoberta e suporte aos clusters comerciais.

Nenhuma landing page Ads deve funcionar como doorway page indexada.

---

## 2. Quando usar a página orgânica diretamente no anúncio

Preferir a página orgânica quando:
- ela corresponde exatamente à keyword/ad group;
- carrega rápido;
- possui CTA claro;
- não distrai o usuário;
- contém prova suficiente;
- a navegação não prejudica conversão;
- não há necessidade de experimento de mensagem específico.

Isto reduz duplicidade de manutenção.

---

## 3. Quando criar `/lp/.../`

Criar variante de campanha somente quando houver hipótese mensurável, por exemplo:
- CTA diferente;
- formulário mais curto;
- conteúdo adaptado ao estágio do comprador;
- mensagem específica do ad group;
- prova/case diferente;
- campanha Governo vs Corporativo;
- redução de navegação secundária;
- experimento A/B.

Não criar LP apenas para inserir uma keyword no slug.

---

## 4. Rotas P0 propostas

| Landing | Ad groups | Organic owner |
|---|---|---|
| `/lp/integracao-audiovisual-corporativa/` | integrador AV / integração AV | `/solucoes/audiovisual/` |
| `/lp/salas-reuniao-hibridas/` | sala híbrida / videoconferência | `/solucoes/sala-reuniao-hibrida-sao-paulo/` |
| `/lp/microsoft-teams-rooms/` | Teams Rooms / MTR | `/solucoes/microsoft-teams-rooms/` |
| `/lp/videowall-centro-comando/` | videowall / NOC / SOC | `/solucoes/videowall/` + NOC/SOC existente |
| `/lp/auditorios-corporativos/` | auditório / automação / sonorização | `/solucoes/auditorio-corporativo-sao-paulo/` |
| `/lp/governo-tribunais/` | governo / tribunal / plenário | `/setores/governo/` + solução Governo/Tribunais |
| `/lp/manutencao-suporte-av/` | manutenção / suporte / SLA | `/servicos/suporte-manutencao/` |

P1:
- `/lp/engenharia-audiovisual/`;
- `/lp/av-over-ip/`;
- `/lp/automacao-audiovisual/`.

A fonte operacional é `seo/route-plan.csv`.

---

## 5. Regras técnicas das LPs

Por padrão:

```text
robots meta: noindex,follow
sitemap: exclude
AdsBot: allow
Googlebot: page accessible; noindex controls organic indexing
status: 200
canonical: self or omitted by documented policy; never point blindly to an organic page with conflicting signals
```

Decisão canonical deve ser registrada em ADR/teste antes do lançamento.

### Obrigatório
- URL estável e limpa;
- HTTPS;
- mobile-first;
- sem pop-ups bloqueadores;
- conteúdo útil original;
- empresa/contato identificáveis;
- Privacy/LGPD acessível;
- CTA explícito;
- nenhum redirect cross-domain inesperado;
- nenhum bloqueio do AdsBot;
- nenhum placeholder;
- nenhuma claim não comprovada.

---

## 6. Message match

A keyword, anúncio e landing devem formar a mesma promessa.

### Exemplo correto

Keyword:
`integração audiovisual corporativa`

Headline anúncio:
`Integração Audiovisual Corporativa | Projeto, Instalação e Suporte`

Landing H1:
`Integração audiovisual para ambientes corporativos críticos`

Conteúdo:
- engenharia;
- salas;
- AV-over-IP;
- automação;
- implantação;
- suporte;
- cases/provas reais;
- CTA para diagnóstico.

### Exemplo ruim

Keyword:
`Microsoft Teams Rooms`

Landing:
Home genérica falando de videowall, segurança e eventos sem conteúdo MTR relevante.

---

## 7. Estrutura mínima de LP

1. H1 orientado à intenção;
2. subhead com diferenciação real;
3. CTA primário acima da dobra sem impedir conteúdo;
4. identificação ATIV / confiança;
5. problema que a solução resolve;
6. arquitetura/capacidade técnica;
7. aplicações;
8. interoperabilidade;
9. processo de projeto/implantação;
10. evidência/case verificável;
11. FAQ real;
12. formulário qualificador;
13. contato alternativo;
14. políticas/identidade no footer.

Não usar página vazia com hero + formulário.

---

## 8. Formulários e roteamento de lead

Campos visíveis mínimos devem variar por campanha.

Base:
- nome;
- empresa/órgão;
- e-mail corporativo;
- telefone opcional conforme estratégia;
- necessidade/projeto;
- consentimento.

Campos hidden/servidor:
- `utm_source`;
- `utm_medium`;
- `utm_campaign`;
- `utm_content`;
- `utm_term`;
- `gclid`;
- `gbraid`/`wbraid` quando aplicável;
- `msclkid`;
- landing URL;
- referrer;
- first-touch timestamp;
- last-touch timestamp;
- campaign/ad group IDs quando disponibilizados pelo tracking;
- consent state.

Não coletar dados desnecessários apenas porque são tecnicamente possíveis.

---

## 9. Eventos

Taxonomia inicial:

```text
cta_primary_click
form_start
form_step_complete
form_submit
lead_qualified
whatsapp_click
phone_click
email_click
case_view
technical_document_view
meeting_request
proposal_request
```

Conversões de plataforma devem derivar de eventos com significado comercial, não apenas page views.

---

## 10. Google Ads — requisitos de destino

Implementar testes automáticos para garantir:
- 200 para landing ativa;
- sem redirect para domínio diferente;
- final URL coerente com display URL;
- página rastreável pelo AdsBot;
- conteúdo disponível em browsers/dispositivos comuns;
- conteúdo relevante à campanha;
- navegação funcional;
- nenhum erro de destino;
- nenhum domínio estacionado/placeholder.

Fonte oficial:
https://support.google.com/adspolicy/answer/6368661

---

## 11. Microsoft Advertising

As mesmas landing pages podem servir Microsoft Advertising quando a intenção for equivalente, mantendo parâmetros de atribuição próprios.

Requisitos operacionais:
- UET implementado e validado;
- `msclkid` persistido quando aplicável;
- landing relevante ao anúncio/query;
- URL exibida/destino coerentes;
- site funcional, com conteúdo real e navegação previsível;
- relatório por landing URL.

A Microsoft disponibiliza relatórios de landing page/URL para avaliar performance por destino; isto deve entrar no ciclo de otimização.

---

## 12. Rotas geográficas

Não criar automaticamente:

```text
/solucoes/videowall-sao-paulo/
/solucoes/videowall-cotia/
/solucoes/videowall-barueri/
/solucoes/videowall-osasco/
...
```

quando o corpo for essencialmente o mesmo.

Para Ads, localização pode ser tratada por:
- targeting da campanha;
- copy do anúncio;
- parâmetros;
- conteúdo condicional não enganoso;
- páginas regionais apenas quando existe operação, conteúdo, prova e necessidade realmente distintas.

Para orgânico, páginas geográficas só devem existir com valor local substancial.

---

## 13. Easywall e campanhas

Se a campanha anunciar **Easywall como software/produto**, final URL deve ser no domínio Easywall.

Se a campanha anunciar **projeto/integração de videowall**, final URL deve ser ATIV.

Não usar ATIV como ponte de redirect para Easywall nem Easywall como ponte para ATIV.

Cross-links contextuais dentro das páginas podem existir normalmente quando úteis.

---

## 14. Experimentos

Experimentos precisam declarar:
- hipótese;
- primary metric;
- guardrail metrics;
- amostra/janela mínima;
- variante;
- evento de conversão;
- resultado;
- decisão.

Evitar manter dezenas de LPs órfãs após campanhas encerradas.

### Lifecycle
Campanha encerrada:
- se a LP não possui uso futuro: retirar campanha e retornar 404/410 conforme política documentada;
- se será reutilizada: manter funcional/noindex;
- nunca indexar automaticamente porque a campanha acabou.

---

## 15. Quality gates para release

Cada LP deve passar:
- Lighthouse/performance budget;
- accessibility test;
- metadata/robots test;
- response/redirect test;
- broken-link test;
- form integration test;
- tracking event test;
- consent test;
- mobile viewport test;
- AdsBot accessibility smoke test;
- Claim Registry review;
- brand review.
