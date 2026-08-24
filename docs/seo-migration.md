# Migração SEO — ATIV

## Objetivo

Substituir a plataforma atual preservando ao máximo sinais orgânicos, backlinks, histórico de URL e desempenho existente.

## Regra de ouro

**A URL atual é preservada por padrão.**

Mudar URL exige justificativa baseada em dados e um redirect 301 direto para a alternativa semanticamente equivalente.

## 1. Inventário

A fonte operacional é `seo/url-inventory.csv`.

Para cada URL registrar:
- current_url;
- normalized_url;
- status;
- canonical;
- indexability;
- template/type;
- title;
- H1;
- clicks;
- impressions;
- CTR;
- average_position;
- backlinks/referring domains quando houver;
- leads/conversions quando houver;
- target keyword/intention;
- decision;
- proposed_url;
- redirect_required;
- owner;
- notes.

## 2. Decisões permitidas

### KEEP
Mesma URL, conteúdo pode ser redesenhado/melhorado.

### IMPROVE
Mesma URL, conteúdo precisa ser aprofundado/reestruturado.

### MERGE
Conteúdo canibalizado é incorporado a outra URL forte; origem recebe 301.

### REDIRECT
URL obsoleta mas com sinais deve redirecionar para equivalente real.

### REMOVE/410
Somente quando não há substituto, valor, tráfego ou backlinks relevantes e a remoção é intencional.

### NOINDEX
Somente para páginas que precisam existir mas não devem competir/indexar, com justificativa.

## 3. Canonicalização

Definir antes do lançamento:
- host canônico (`www` ou non-www);
- HTTPS obrigatório;
- política de trailing slash;
- comportamento de `/index.html`;
- parâmetros de campanha;
- parâmetros funcionais;
- pagination/facets quando existirem.

Todas as variantes não canônicas devem convergir de maneira previsível.

## 4. Redirects

Regras:
- 301 para migração permanente;
- single-hop;
- não redirecionar massa de URLs diferentes para home;
- destino precisa representar a intenção/conteúdo da origem;
- manter query params necessários apenas quando apropriado;
- testar case, slash, URL encoded e host variants;
- manter redirects antigos relevantes por longo prazo.

`seo/redirect-map.csv` é a fonte de verdade.

## 5. Sitemap

Sitemap de produção deve conter somente:
- URLs canônicas;
- status 200;
- indexáveis;
- páginas que realmente queremos na busca.

Não incluir redirects, 404, noindex ou parâmetros.

## 6. robots.txt

Deve:
- permitir assets necessários ao render;
- apontar sitemap;
- não bloquear acidentalmente páginas canônicas;
- ser validado no build/deploy.

Staging deve ser protegido por controle de acesso e/ou estratégia própria; nunca depender de uma alteração perigosa de robots que possa chegar à produção.

## 7. Pré-lançamento

Obrigatório:
1. crawl da produção antiga;
2. freeze do inventory;
3. crawl do staging;
4. comparação 1:1 de URLs;
5. validar status/canonical/title/H1/indexability;
6. testar redirect map automaticamente;
7. validar schema;
8. validar links internos;
9. checar 404 orphan pages;
10. registrar baseline de Search Console e analytics.

## 8. Lançamento

Na janela de release:
- backup;
- deploy;
- smoke test;
- crawl rápido das URLs prioritárias;
- testar redirects;
- testar robots/sitemap;
- testar canonical;
- testar formulários;
- testar analytics/Ads;
- confirmar ausência de noindex acidental.

## 9. Pós-lançamento

### D+1
- 404/5xx;
- redirects;
- sitemap;
- forms;
- tags;
- erros JS/server.

### D+7
- indexação;
- clicks/impressions;
- páginas excluídas;
- CWV;
- Ads landing pages.

### D+30
- perdas/ganhos por URL e cluster;
- queries novas/perdidas;
- CTR;
- leads orgânicos;
- oportunidades de melhoria.

## 10. Testes automatizados recomendados

Criar testes que leiam `redirect-map.csv` e validem:
- origem não retorna 200 velha;
- origem retorna 301/308 conforme política aprovada;
- location termina no destino esperado;
- destino retorna 200;
- não há chain.

Criar lista de URLs prioritárias e validar no CI/staging:
- canonical;
- title;
- H1;
- robots meta;
- status.

## 11. Proibições

- trocar todos os slugs no redesign;
- remover conteúdo antigo sem análise;
- redirect chain;
- redirect para home por conveniência;
- publicar sitemap com URLs quebradas;
- alterar simultaneamente domínio + estrutura de URL + conteúdo sem necessidade extrema;
- usar canonical como substituto de redirects em migração permanente.
