# Auditoria Inicial do Site Atual — ativpro.com

Data da primeira consolidação: 2026-08-24.

> Este documento é uma auditoria pública preliminar. Ele deve ser ampliado na Fase 0 com crawl completo, Google Search Console, Google Ads, GA4 e logs/infraestrutura quando disponíveis.

## 1. Diagnóstico executivo

A ATIV não parte do zero. O domínio possui conteúdo técnico, páginas por solução/setor e sinais de indexação que devem ser tratados como patrimônio. O risco principal de uma reconstrução é perder URLs, relevância temática, backlinks ou consultas já adquiridas.

A reconstrução deve seguir uma estratégia de **migração conservadora e orientada por dados**.

## 2. Pontos positivos observáveis

- domínio consolidado `ativpro.com`;
- páginas de soluções específicas;
- conteúdo dedicado a governo/tribunais;
- conteúdo relacionado a salas híbridas, videowalls, NOC/SOC, auditórios e colaboração;
- material técnico mais específico do que o de muitos integradores genéricos;
- presença pública externa da empresa em documentos e processos que pode apoiar prova institucional, mediante validação antes de uso editorial.

## 3. Problemas/riscos preliminares

### 3.1 Semântica de títulos animados

Em resultados/crawls públicos foram observados títulos de páginas apresentados com caracteres visualmente separados, sugerindo que efeitos de animação podem estar fragmentando texto em muitos elementos no DOM.

Risco:
- semântica degradada;
- acessibilidade pior;
- snippets inconsistentes;
- manutenção difícil.

Regra para o novo projeto: texto semântico de headings deve permanecer íntegro. Animações devem ser progressive enhancement.

### 3.2 Canonicalização e variantes de URL

Foram observadas referências públicas tanto a host com `www` quanto sem `www`, além de `/index.html`.

A Fase 0 deve confirmar:
- host canônico atual;
- comportamento HTTP de todas as variantes;
- canonical tags;
- redirects;
- sitemap;
- URLs efetivamente indexadas.

Não normalizar em produção antes de conhecer as URLs que geram tráfego.

### 3.3 Profundidade desigual de conteúdo

Algumas páginas são tecnicamente densas e outras aparentemente mais superficiais. Isso pode prejudicar topical authority e conversão quando uma página recebe tráfego para uma intenção específica.

A solução não é simplesmente aumentar word count. Cada página deve ter:
- intenção clara;
- problema do cliente;
- arquitetura/solução;
- aplicações;
- diferenciais verificáveis;
- provas/cases;
- integração com tecnologias relacionadas;
- FAQ útil;
- CTA contextual.

### 3.4 Confiança comercial e institucional

O novo site deve tornar imediatamente verificáveis:
- identidade da empresa;
- formas de contato;
- atuação técnica;
- política de privacidade/LGPD;
- uso de cookies/tracking;
- localização/atendimento quando aplicável;
- cases, contratos, certificações e números apenas quando comprováveis.

### 3.5 Diagnóstico Google Ads ainda inconclusivo

Não é tecnicamente correto atribuir a reprovação a uma única causa sem ler a política/motivo exato na conta.

Hipóteses que precisam ser testadas:
- destination mismatch entre URL exibida/final/redirecionada;
- histórico de domínio anterior ou tracking template apontando para host diferente;
- resposta HTTP distinta para AdsBot;
- destino não rastreável;
- conteúdo insuficiente/originalidade;
- experiência de destino;
- política de representação/misrepresentation;
- telefone ou elementos do anúncio;
- scripts/consentimento bloqueando navegação/rastreamento.

## 4. Dados necessários para concluir a auditoria

### Search Console
Exportar no mínimo 16 meses quando possível:
- páginas: clicks, impressions, CTR, position;
- queries;
- pages x queries;
- países/dispositivos;
- cobertura/indexação;
- sitemaps;
- Core Web Vitals.

### Google Ads
- motivo exato de política;
- campanhas e anúncios afetados;
- final URLs;
- tracking templates;
- conversion actions;
- landing page report;
- histórico de reprovações.

### Analytics
- landing pages;
- leads/conversões;
- source/medium/campaign;
- engagement por página;
- device split.

### Infraestrutura
- redirects atuais;
- DNS/CDN;
- robots.txt;
- sitemap(s);
- headers;
- status codes;
- logs de bot quando disponíveis.

## 5. Crawl obrigatório

O crawler da Fase 0 deve registrar por URL:
- URL final;
- status HTTP;
- redirect chain;
- indexability;
- title;
- meta description;
- canonical;
- H1/H2;
- word/content class;
- internal inlinks/outlinks;
- images/alt;
- structured data;
- OG tags;
- response time;
- render differences quando houver JS.

## 6. Patrimônio externo

Pesquisar e catalogar:
- documentos públicos governamentais;
- contratos/adjudicações/publicações permitidas;
- fabricantes/parceiros que citem a ATIV;
- notícias;
- backlinks relevantes;
- associações/certificações;
- cases publicáveis.

Nada deve ser publicado como claim sem validação jurídica/comercial e fonte no Claim Registry.

## 7. Ações de prioridade alta

1. congelar qualquer decisão de mudança de slug até concluir inventário;
2. obter Search Console;
3. obter motivo exato da reprovação do Google Ads;
4. crawl completo;
5. mapear host/canonical/redirects;
6. inventariar Brand Kit e ativos reais;
7. definir arquitetura nova somente depois desses dados.

## 8. Resultado esperado da Fase 0

Ao final, cada URL atual terá uma decisão explícita:
- KEEP;
- IMPROVE;
- MERGE;
- REDIRECT;
- REMOVE/410 (excepcional e justificado);
- NOINDEX (somente quando tecnicamente correto).

Nenhuma decisão deve permanecer implícita.
