# Inventário SEO ATIV — Public Crawl Audit

**Data:** 2026-08-24  
**Escopo:** www.ativpro.com + ecossistema público relacionado  
**Status:** baseline público; dados proprietários de Search Console/Google Ads ainda pendentes

## 1. Como ler este diagnóstico

Este documento separa fatos observáveis publicamente de métricas que somente podem ser obtidas nas propriedades da ATIV.

Já observados:
- URLs públicas;
- respostas HTTP em amostra;
- titles/H1/conteúdo renderizado em amostra;
- arquitetura atual de soluções, serviços, setores e Insights;
- problemas semânticos/copy/trust visíveis.

Ainda não afirmar sem Search Console/Ads:
- cliques;
- impressões;
- posição média;
- CTR orgânico;
- query exata que já posiciona uma URL;
- backlinks/referring domains completos;
- conversões por URL;
- causa exata de eventual reprovação de campanha.

Fonte operacional URL a URL: `seo/url-inventory.csv`.

---

## 2. Sumário executivo

A ATIV não parte do zero. O domínio já possui boa quantidade de conteúdo comercial e técnico e tem estrutura de soluções, serviços, setores, projetos e Insights que pode ser preservada e fortalecida.

O principal problema observado não é ausência total de conteúdo; é **inconsistência entre qualidade do conteúdo e qualidade da camada semântica/técnica**.

### P0 — corrigir antes do novo site entrar em produção

1. **H1 da Home não está semanticamente exposto de forma adequada no crawl.** O heading principal observado é `|`, embora o texto visual/comercial esteja presente abaixo. Animação nunca pode destruir o heading no DOM.
2. **Diversas páginas comerciais usam title genérico** `ATIV | Integração Audiovisual, Automação e Colaboração` em vez de title específico para a consulta.
3. **H1s de páginas importantes aparecem fragmentados caractere a caractere** por efeito visual, por exemplo salas híbridas, auditórios, NOC/SOC, Governo, audiovisual e automação.
4. **`/solucoes/colaboracao-uc/` respondeu HTTP 406 em crawl público.** Investigar WAF, regras por User-Agent, origem, middleware e acesso do AdsBot/Googlebot.
5. **`/contato/` exibe telefone placeholder `+55 (11) 0000-0000`.** Isto é um problema grave de confiança e deve ser removido/substituído por dado real verificado.
6. **`/setores/corporativo/` e `/setores/governo/` são muito mais rasas que a importância comercial desses clusters.** Devem funcionar como hubs de decisão, não como páginas genéricas.
7. **Os projetos exibem contadores que aparecem como zero no conteúdo rastreado.** Provas e resultados importantes devem ser server-rendered e sustentados por evidência.
8. **Há potencial canibalização entre dois conteúdos AV-over-IP.** Não consolidar ou redirecionar antes de comparar Search Console e backlinks.
9. **Claims técnicos/comerciais precisam do Claim Registry.** SLA, disponibilidade, failover, percentuais, preços, estoque, clientes, contratos, certificações e números operacionais só podem entrar no novo site quando verificáveis.

---

## 3. Arquitetura pública observada

### Home
- `/`

### Soluções
- `/solucoes/`
- `/solucoes/audiovisual/`
- `/solucoes/colaboracao-uc/`
- `/solucoes/automacao-controle/`
- `/solucoes/seguranca-cftv/`
- `/solucoes/infraestrutura-ti/`
- `/solucoes/integracao-sistemas/`
- `/solucoes/sala-reuniao-hibrida-sao-paulo/`
- `/solucoes/auditorio-corporativo-sao-paulo/`
- `/solucoes/centro-comando-controle-noc-soc-sao-paulo/`
- `/solucoes/governo-tribunais-sao-paulo/`

### Serviços
- `/servicos/`
- `/servicos/consultoria-engenharia/`
- `/servicos/gestao-execucao/`
- `/servicos/suporte-manutencao/`
- `/servicos/servicos-gerenciados/`
- `/servicos/operacao-onsite/`
- `/servicos/eventos/`
- `/servicos/cftv-monitoramento/`
- `/servicos/seguranca-eletronica/`
- `/servicos/infraestrutura-ti-redes/`

### Setores
- `/setores/`
- `/setores/corporativo/`
- `/setores/governo/`
- `/setores/educacao/`
- `/setores/saude/`
- `/setores/industria/`
- `/setores/hospitality-eventos/`

### Autoridade / conteúdo
- `/projetos/`
- `/insights/`
- `/insights/roteiro-tecnologico-2026-2027/`
- `/insights/av-over-ip-fundamentos/`
- `/insights/q-sys-automacao-avancada/`
- `/insights/videoconferencia-hibrida/`
- `/insights/dante-audio-networking/`
- `/insights/video-wall-gestao/`
- `/insights/seguranca-av-sistemas/`
- `/insights/av-over-ip-guia-completo-infraestrutura-rede/`
- `/sobre/`
- `/contato/`

O CSV contém prioridade e decisão preliminar para cada uma.

---

## 4. Decisões de preservação

Até que Search Console e dados de links sejam incorporados:

- URL existente relevante = **KEEP por padrão**;
- nenhuma URL comercial atual será trocada apenas para deixar o slug mais bonito;
- nenhum artigo será mesclado apenas porque parece parecido;
- nenhum redirect será criado sem origem/destino semântica e análise de tráfego/links;
- mudança de arquitetura visual não implica mudança de URL;
- links atuais que possuam autoridade devem continuar resolvendo com 200 ou 301 direto para equivalente real.

### Casos prioritários

`/solucoes/sala-reuniao-hibrida-sao-paulo/`, `/solucoes/auditorio-corporativo-sao-paulo/`, `/solucoes/centro-comando-controle-noc-soc-sao-paulo/` e `/solucoes/governo-tribunais-sao-paulo/` possuem conteúdo de intenção comercial forte. A prioridade é **consertar metadata, H1, prova e conversão sem trocar os slugs antes do GSC**.

---

## 5. Canibalização e ownership de intenção

### Integração AV
Dono proposto: `/solucoes/audiovisual/`.

Não criar outra página genérica `/solucoes/integracao-audiovisual/` sem evidência de que represente uma intenção separada. A página existente deve ser fortalecida.

### Governo
- `/setores/governo/` = intenção ampla `integração audiovisual para governo`;
- `/solucoes/governo-tribunais-sao-paulo/` = intenção específica de tribunal/plenário/sessões.

As duas páginas devem se complementar e se linkar, não repetir o mesmo texto.

### AV-over-IP
- página comercial candidata: `/solucoes/av-over-ip/`;
- conteúdo educacional: Insights;
- os dois artigos atuais precisam de comparação por query antes de qualquer consolidação.

### Videowall
Hoje há conteúdo distribuído por NOC/SOC, audiovisual e Insights. Há justificativa para um owner comercial dedicado:
- candidato: `/solucoes/videowall/`;
- suporte editorial: `/insights/video-wall-gestao/`;
- produto/software: Easywall, quando tecnicamente pertinente.

### Microsoft Teams Rooms
A intenção é específica o suficiente para uma página própria, desde que a ATIV possa demonstrar experiência real e escrever conteúdo técnico substancial.

---

## 6. Internal linking desejado

Toda página P0 deve receber links rastreáveis `<a href>` de pelo menos uma página relevante e, idealmente, de um hub lógico.

Exemplo de cadeia:

```text
Home
  -> Soluções
      -> Videowall
          -> Centro de Comando / NOC / SOC
          -> Insight Gestão de Videowall
          -> Easywall (contextual, produto/software)
      -> Salas Híbridas
          -> Microsoft Teams Rooms
          -> Insight Videoconferência Híbrida
      -> Auditórios
      -> AV-over-IP
          -> Guia AV-over-IP
          -> Dante
  -> Setores
      -> Corporativo
      -> Governo
          -> Governo e Tribunais
  -> Projetos/Cases
  -> Contato
```

Não usar blocos artificiais gigantes de links nem repetição mecânica de anchor text.

---

## 7. Dados estruturados

Implementar apenas quando verdadeiros e visíveis:

- `Organization`;
- `WebSite`;
- `BreadcrumbList`;
- `Article`/`BlogPosting`;
- `VideoObject` quando o vídeo realmente for elegível;
- outros tipos apenas após validação na documentação vigente do Google/Schema.org.

Toda geração JSON-LD deve ser tipada e testável. Não inserir keyword stuffing em schema.

---

## 8. Performance e JavaScript

Regras:
- conteúdo crítico server-rendered;
- H1/title/links não podem depender de animação para existir;
- animação pode segmentar visualmente texto, mas o DOM acessível/semântico deve permanecer íntegro;
- evitar hydration e client components onde não agregam interação;
- scripts de Ads/Analytics entram com budget e teste de impacto;
- manter Core Web Vitals como quality gate.

---

## 9. Dados faltantes para fechar o inventário definitivo

Importar quando disponível:

### Search Console
Para cada URL e query:
- clicks;
- impressions;
- CTR;
- average position;
- country/device;
- index coverage;
- Core Web Vitals;
- page/query pairs de 16 meses ou máximo disponível.

### Google Ads / Microsoft Advertising
- final URL;
- campaign/ad group;
- keyword/search term;
- policy status;
- impressions/clicks/CPC;
- conversions;
- conversion value quando aplicável;
- landing page report;
- tracking template/final URL suffix;
- reprovação e texto exato da política.

### Backlinks
- referring domain;
- target URL;
- anchor;
- follow/nofollow/sponsored;
- status atual;
- autoridade/relevância como sinal auxiliar, não KPI isolado.

---

## 10. Fontes públicas utilizadas

ATIV:
- https://www.ativpro.com/
- https://www.ativpro.com/solucoes/
- https://www.ativpro.com/servicos/
- https://www.ativpro.com/setores/
- https://www.ativpro.com/projetos/
- https://www.ativpro.com/insights/

Google Search Central:
- https://developers.google.com/search/docs/essentials
- https://developers.google.com/search/docs/crawling-indexing/links-crawlable
- https://developers.google.com/search/docs/appearance/sitelinks
- https://developers.google.com/search/docs/essentials/spam-policies
- https://developers.google.com/search/docs/fundamentals/creating-helpful-content

Google Ads:
- https://support.google.com/adspolicy/answer/6368661

Microsoft Advertising:
- landing-page and URL reporting/policy references documented in `docs/ads-tracking.md` and `docs/ads-route-strategy.md`.

---

## 11. Definition of Done do inventário

O baseline só poderá ser marcado como `complete` quando:
- crawl automatizado completo tiver sido executado;
- sitemap/robots/canonicals forem auditados;
- Search Console for importado;
- URLs Ads forem importadas;
- backlinks relevantes forem cruzados;
- redirects forem classificados;
- keyword ownership estiver validado;
- toda URL P0 possuir decisão KEEP/UPDATE/MERGE/REDIRECT/REMOVE baseada em evidência.
