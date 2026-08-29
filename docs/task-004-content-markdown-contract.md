# TASK 004 — Contrato Markdown em build time

`@ativ/content` valida frontmatter editorial sem exigir banco ou runtime em produção.

- somente `content/pages/**` e `content/ads/**` entram no loader;
- `content/inbox/**` nunca é publicado diretamente;
- apenas status `approved` e `published` são retornados para modelagem;
- rotas publicáveis duplicadas falham o build;
- landing pages pagas exigem `robots: noindex,follow`;
- status `approved` ou `published` exige `seo_title`, `meta_description` e `heading`;
- o app Next consome o loader em build time e recusa colisão com `/`, `/contato/`, `/sobre/` e `/500/`;
- a rota dinâmica `[...slug]` só entra com `generateStaticParams` não vazio (export estático recusa lista vazia);
- superfícies `draft` de soluções e setores podem ser renderizadas como `noindex` fora do sitemap, sem promover o status editorial;
- o renderer Markdown é conservador (`h2`/`h3`, parágrafos, listas, tabelas, `pre` e links internos) e omite Chrome, links duplicados e notas ao revisor.

O pacote usa YAML apenas durante desenvolvimento/build e preserva a baseline HostGator estática.
