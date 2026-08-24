# Quality Gates — ATIV

## Objetivo

Definir critérios automáticos e manuais mínimos para impedir que velocidade de desenvolvimento degrade SEO, acessibilidade, marca, segurança ou conversão.

## 1. Gate de código

Obrigatório em PR:
- install reproduzível com lockfile;
- lint sem erro;
- TypeScript sem erro;
- testes relevantes passando;
- build de produção passando;
- nenhuma credencial/segredo no diff;
- dependências novas justificadas.

## 2. Gate de SEO

Para página indexável alterada:
- status 200;
- title válido e específico;
- meta description quando aplicável;
- canonical correto;
- H1 único;
- conteúdo principal presente no HTML renderizado;
- robots correto;
- OG metadata;
- breadcrumbs quando aplicável;
- schema válido quando emitido;
- links internos sem quebra.

Para mudança de URL:
- registro no inventory;
- redirect map atualizado;
- teste automatizado;
- destino semanticamente equivalente;
- sem chain.

## 3. Gate de performance

Verificar:
- LCP;
- INP/indicadores de responsividade em laboratório e campo quando disponível;
- CLS;
- bundle por rota;
- peso de imagens;
- third-party scripts;
- lazy-loading adequado.

Meta de produto:
- LCP ≤ 2.5 s;
- INP < 200 ms;
- CLS < 0.1
em condições de campo consideradas boas pelo padrão vigente.

Mudança visual pesada deve anexar comparação before/after no PR quando possível.

## 4. Gate de acessibilidade

Automático:
- axe sem violações críticas/sérias não justificadas;
- HTML lint/semântica onde configurado.

Manual para fluxos críticos:
- teclado completo;
- foco visível;
- modal/menu fecha corretamente;
- formulários com label/erro;
- zoom 200%;
- reduced motion;
- contraste.

## 5. Gate de responsividade

Smoke obrigatório:
- mobile pequeno;
- mobile moderno;
- tablet;
- laptop;
- desktop largo.

Checar:
- overflow horizontal;
- texto truncado;
- hero acima da dobra;
- CTA;
- navegação;
- formulário;
- imagens/diagramas.

## 6. Gate de Brand

Revisar:
- tokens usados em vez de valores arbitrários recorrentes;
- logo íntegro;
- tipografia correta;
- paleta correta;
- fotografia aprovada;
- componentes coerentes;
- motion alinhado;
- copy sem clichês/claims não comprovados;
- ausência de estética genérica de template/IA.

## 7. Gate de Ads/Analytics

Quando afetado:
- eventos disparam uma vez;
- payload respeita contrato;
- PII não enviada indevidamente;
- consentimento respeitado;
- acquisition params preservados;
- destination URL funciona;
- redirect não troca domínio inesperadamente;
- conversion success depende de sucesso real.

## 8. Gate de formulários

Testar:
- campos obrigatórios;
- validação server-side;
- sucesso;
- erro de integração;
- timeout;
- spam/rate limit;
- mobile;
- teclado;
- analytics de início/sucesso/erro;
- não perder lead por falha secundária.

## 9. Gate de segurança

Antes de release:
- headers revisados;
- dependências sem vulnerabilidade crítica conhecida não mitigada;
- secrets scan;
- endpoints públicos com validação;
- rate limit em superfície de abuso;
- admin/CMS protegido;
- logs não expõem dados sensíveis.

## 10. Gate editorial

Conteúdo novo indexável precisa de:
- owner/revisor;
- intenção definida;
- fonte de claims;
- CTA;
- links internos;
- revisão técnica quando assunto exigir;
- data de revisão futura em conteúdos voláteis.

## 11. Release blockers

Não liberar se existir:
- 404 em URL prioritária sem decisão;
- noindex/robots incorreto;
- canonical em massa para página errada;
- form principal indisponível;
- vazamento de secret;
- erro de build;
- navegação inacessível por teclado;
- tracking de conversão duplicado;
- regressão severa de performance;
- claim falso/não comprovado relevante;
- desvio grave do Brand Kit.

## 12. Evidência no PR

O PR template deve registrar:
- comandos executados;
- screenshots;
- rotas afetadas;
- impacto SEO;
- impacto analytics;
- impacto performance;
- risco e rollback.
