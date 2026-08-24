# Como subir este pacote no repositório

Conteúdo de `entrega-repo/` mapeado sobre a raiz de `audiorobson/ATIV_SITES_01_ATIV`.
A estrutura já é a prevista no README do repo — nada de novo a decidir.

```
brand/            → brand/
docs/brand-system.md → docs/brand-system.md
```

## Pelo GitHub, na web

1. No repo, **Add file → Upload files**.
2. Arraste a pasta `brand` inteira. O GitHub cria o diretório a partir do caminho dos arquivos.
3. Repita com `docs`.
4. Commit em branch própria: `feat/brand-system`. Abra PR — o fluxo do repo exige PR, não commit direto em `main`.

## Por linha de comando

```bash
git clone https://github.com/audiorobson/ATIV_SITES_01_ATIV.git
cd ATIV_SITES_01_ATIV
git checkout -b feat/brand-system
cp -r /caminho/entrega-repo/brand .
cp /caminho/entrega-repo/docs/brand-system.md docs/
git add brand docs/brand-system.md
git commit -m "feat(brand): sistema visual da ATIV como fonte de verdade"
git push -u origin feat/brand-system
```

## O que dizer no PR

> Adiciona `brand/` como fonte de verdade do sistema visual, conforme o princípio
> "Brand Kit é fonte de verdade" do README. Inclui o CSS mestre com tokens de cor, tipografia,
> foco, espaço, grade e movimento; os mesmos tokens derivados para Tailwind v3 e v4; 28 SVGs de
> logo; e quatro documentos navegáveis (kit de marca, componentes, documentos oficiais, cobertura).
>
> Precedência declarada: `brand/tokens/ativ-ui.css` vence; os arquivos Tailwind são derivados.
>
> Não toca em URL, tracking ou conteúdo. Sem impacto de SEO ou performance.
