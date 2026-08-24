# TASK 003 — Exportação estática HostGator

## Resultado

A aplicação usa Next.js apenas no desenvolvimento e build. O artefato final é estático e pode ser
enviado diretamente ao `public_html`.

```bash
pnpm seo:check
pnpm build:hostgator
```

O segundo comando gera `dist/hostgator/` com HTML, CSS, JavaScript, assets, `robots.txt`,
`sitemap.xml` e `.htaccess`.

## Decisões

- `output: export`, `trailingSlash: true` e imagens sem otimizador de runtime;
- headers de segurança movidos do runtime Next para `public/.htaccess`;
- robots e sitemap marcados como `force-static`;
- SEO validado contra o HTML exportado, sem crawler ou serviço residente;
- Lighthouse e Lychee deixam de bloquear CI/deploy;
- nenhuma API Route, Server Action, banco ou processo Node é exigido em produção.

## Publicação

Enviar o conteúdo interno de `dist/hostgator/` para o `public_html`. Não enviar a pasta do
repositório, `node_modules`, `.next`, `out` ou segredos de ambiente.
