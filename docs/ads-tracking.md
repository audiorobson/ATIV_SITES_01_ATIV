# Ads, Analytics e Atribuição — ATIV

## Objetivo

Criar uma base de medição confiável e destinos tecnicamente aderentes às plataformas de anúncios, sem sacrificar privacidade, performance ou SEO.

## 1. Diagnóstico de reprovação Google Ads

A causa real deve ser lida na conta antes de qualquer conclusão. Registrar:
- política exata;
- anúncio/campanha afetado;
- final URL;
- display URL;
- mobile URL quando houver;
- tracking template;
- redirects;
- data/histórico da reprovação.

### Checklist técnico do destino

Testar com user agents e condições relevantes:
- HTTP 200 para usuário comum;
- HTTP 200 para AdsBot quando destino final é página;
- sem bloqueio por firewall/CDN/geografia indevida;
- domínio final consistente;
- redirects previsíveis;
- conteúdo original e útil;
- navegação funcional;
- sem popups abusivos;
- sem download automático;
- sem interstitial que impeça saída;
- canonical coerente;
- TLS válido;
- mobile funcional.

Não implementar cloaking ou tratamento de conteúdo diferente para aprovação.

## 2. Taxonomia de aquisição

Persistir no contexto da sessão/lead, quando permitido:
- source;
- medium;
- campaign;
- term;
- content;
- landing page;
- referrer;
- `gclid`;
- `gbraid`;
- `wbraid`;
- `msclkid`;
- timestamp;
- consent state aplicável.

## 3. Eventos

Nomes devem ser estáveis, snake_case e tipados.

### Navegação/interesse
- `cta_click`;
- `solution_view`;
- `case_view`;
- `insight_view`;
- `document_download`;
- `video_start` somente para vídeo relevante.

### Lead
- `contact_start`;
- `contact_submit`;
- `contact_success`;
- `contact_error`;
- `whatsapp_start`;
- `meeting_request`;
- `proposal_request` se existir;
- `lead_qualified` somente após definição operacional real.

### Governo
- `government_solution_view`;
- `government_document_download`;
- `government_contact_start`.

Evitar eventos cosméticos sem valor analítico.

## 4. Contrato de dataLayer

Exemplo conceitual:

```ts
{
  event: 'contact_success',
  event_id: 'uuid',
  page: {
    path: '/contato/',
    type: 'contact',
    solution: 'noc-soc'
  },
  acquisition: {
    source: 'google',
    medium: 'cpc',
    campaign: '...'
  },
  lead: {
    segment: 'corporate'
  }
}
```

Nunca colocar e-mail, telefone, nome ou outra PII no dataLayer por padrão.

## 5. Google stack

Planejar:
- Google Tag Manager;
- GA4;
- Google Ads conversion tags;
- linker/identificadores permitidos;
- Enhanced Conversions quando juridicamente e tecnicamente apropriado;
- Consent Mode conforme implementação de consentimento.

Conversões principais devem corresponder a resultados de negócio, não somente cliques.

## 6. Microsoft Advertising

Planejar:
- UET sitewide;
- conversion goals;
- remarketing quando autorizado;
- persistência de `msclkid` quando necessária;
- eventual integração server-side/Conversions API se aplicável à conta e arquitetura.

## 7. Deduplicação

Eventos de conversão devem possuir `event_id` quando houver integração browser + server para prevenir duplicação.

Nunca considerar `form_submit` como sucesso se o backend falhou.

## 8. Consentimento e LGPD

Separar categorias:
- necessários;
- analytics;
- advertising/marketing;
- outras somente se realmente existirem.

O estado de consentimento deve ser determinístico e testável.

O site não deve bloquear conteúdo institucional essencial atrás de consentimento de marketing.

## 9. Landing pages

Landing page de anúncio deve:
- corresponder ao anúncio e keyword;
- usar o mesmo domínio final aprovado;
- ter conteúdo real/original;
- apresentar claramente a ATIV;
- fornecer contato e navegação adequados;
- ser mobile-first;
- carregar rapidamente;
- evitar experiências agressivas;
- ter metadata/canonical coerentes.

Landing pages não devem virar doorway pages produzidas em escala.

## 10. QA obrigatório

Antes de ativar campanhas:
- Tag Assistant/preview equivalente;
- network requests;
- consent granted/denied;
- conversion firing once;
- cross-page attribution;
- redirect/UTM preservation;
- Safari/Chrome/Edge mobile/desktop smoke tests;
- AdsBot accessibility;
- final URL consistency.

## 11. Métricas de negócio

Dashboard mínimo:
- sessões por canal;
- leads por canal;
- qualified leads;
- conversion rate;
- CPL;
- campanha/keyword quando disponível;
- landing page conversion;
- organic vs paid;
- government vs corporate;
- assistências relevantes.

## 12. Política de mudanças

Qualquer alteração em:
- nome de evento;
- payload;
- conversion action;
- URL final;
- tracking template;
- consent behavior

deve ser documentada em PR porque pode quebrar séries históricas e otimização de campanhas.
