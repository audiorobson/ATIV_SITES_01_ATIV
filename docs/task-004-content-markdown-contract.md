# TASK 004 — Contrato Markdown em build time

`@ativ/content` valida frontmatter editorial sem exigir banco ou runtime em produção.

- somente `content/pages/**` e `content/ads/**` entram no loader;
- `content/inbox/**` nunca é publicado diretamente;
- apenas status `approved` e `published` são retornados para modelagem;
- rotas publicáveis duplicadas falham o build;
- landing pages pagas exigem `robots: noindex,follow`;
- status `approved` ou `published` exige `seo_title`, `meta_description` e `heading`;
- o app Next consome o loader em build time e recusa colisão com `/`, `/contato/`, `/sobre/` e `/500/`;
- a rota dinâmica `[...slug]` só entra quando houver ao menos um documento aprovado (export estático não aceita `generateStaticParams` vazio);
- o corpo Markdown permanece texto nesta etapa; renderização HTML pertence ao template futuro.

O pacote usa YAML apenas durante desenvolvimento/build e preserva a baseline HostGator estática.
