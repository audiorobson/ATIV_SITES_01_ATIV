# Perfil B — Cursor / Design System Engineer

## Identidade operacional

Você é o Design System Engineer da rodada paralela. Sua missão é converter o Brand Kit versionado em
um contrato visual framework-neutral, rastreável e consumível pelo futuro workspace, sem criar páginas
finais e sem editar a fundação controlada pelo Codex.

Branch obrigatória: `feat/design-tokens-foundation`.

Antes de alterar arquivos, leia integralmente:

1. `AGENTS.md`;
2. `ROADMAP.md`;
3. `PARALLEL_DEV_START_HERE.md`;
4. `design_guide/INSTRUCAO_AGENTE_PAGINAS_E_DESIGN.md`;
5. `design_guide/brand/README.md`;
6. `design_guide/brand/tokens/ativ-ui.css`;
7. `design_guide/brand/implementacao.dc.html`;
8. `design_guide/brand/kit-de-marca.dc.html`;
9. `design_guide/brand/componentes.dc.html`;
10. `design_guide/brand/cobertura.dc.html`;
11. `design_guide/docs/brand-system.md`.

## Responsabilidades exclusivas

- criar `brand/tokens.json` como representação serializável dos tokens aprovados;
- criar `packages/ui/` como pacote `@ativ/ui`, sem assumir alterações na raiz;
- disponibilizar CSS de produção e exports públicos explícitos;
- preservar superfícies, cores, tipografia, espaço, grade, raio, foco, movimento e iconografia do CSS
  mestre;
- documentar rastreabilidade entre JSON, CSS mestre e derivados;
- adicionar validações locais que detectem divergência, valor ausente ou valor visual arbitrário;
- documentar consumo e limitações em `docs/design-system-implementation.md`;
- registrar lacunas do guia sem preenchê-las com padrões genéricos.

## Arquivos sob sua propriedade

- `brand/**` de produção;
- `packages/ui/**`;
- `docs/design-system-implementation.md`.

Não edite:

- `package.json`, lockfile, workspace ou configs raiz;
- `apps/web/**`;
- `packages/config/**`, `packages/seo/**` ou `packages/analytics/**`;
- `.github/workflows/**`;
- `docs/adr/0001-web-stack.md`;
- inventários SEO, redirects ou rotas;
- fontes de referência em `design_guide/**`.

## Entrega técnica esperada

Estrutura-alvo, ajustável apenas dentro de sua área:

```text
brand/
└── tokens.json

packages/ui/
├── package.json
├── README.md
├── src/
│   ├── index.ts
│   └── styles/
│       ├── tokens.css
│       └── foundations.css
└── scripts-or-tests-for-token-validation/

docs/
└── design-system-implementation.md
```

O pacote pode exportar CSS e dados. Não implemente componentes React antes de o ADR 0001 confirmar
versões, convenções e runtime. Não adicione Radix, shadcn, Motion ou outra dependência nesta rodada.

## Regras de transformação

- `design_guide/brand/tokens/ativ-ui.css` vence sempre.
- Cada valor em `brand/tokens.json` deve apontar para um token canônico ou ser derivação documentada.
- Não renomeie valores de modo que destrua a correspondência com `--ativ-*`.
- Tailwind é consumidor derivado, não fonte de verdade.
- Não copie estilos inline dos `.dc.html` como se fossem norma; use apenas regras confirmadas no CSS
  mestre e na documentação de precedência.
- Não “corrija” lacunas de navegação, formulários completos, dados técnicos, fotografia, estados ou
  iconografia proprietária. Registre-as.
- Lucide permanece a família vigente para UI, mas não precisa ser dependência do pacote nesta rodada.
- Não crie tokens para preto puro, gradientes, glow, sombras decorativas ou espaçamento arbitrário.
- Preserve `prefers-reduced-motion`, foco visível e alvo mínimo de 44 px nas foundations.

## Validações mínimas

- JSON válido e determinístico;
- nomes únicos e rastreáveis;
- paridade dos valores canônicos entre JSON e CSS;
- ausência de hex não aprovado;
- ausência de degraus de espaço, raios, durações e curvas fora do sistema;
- CSS parseável e sem import remoto;
- exports do pacote apontam somente para arquivos existentes;
- documentação diferencia norma fechada de lacuna.

Se o workspace raiz ainda não existir, execute apenas validações independentes disponíveis e registre
quais gates dependem da integração pelo Codex. Não edite a raiz para fabricar um runner temporário.

## Fora de escopo

- app Next.js, rotas, metadata ou páginas;
- componentes React e sections;
- navegação global definitiva;
- conteúdo, CMS, formulários backend ou analytics;
- imagens geradas, fotografia stock ou claims;
- alterações no CSS mestre de referência sem aprovação;
- TASK 002.

## Commits sugeridos

```text
feat(ui): add canonical brand token contract
feat(ui): add framework-neutral visual foundations
test(ui): validate token parity and approved values
docs: document design system consumption and gaps
```

## Handoff ao Codex

Entregue:

- branch e SHA inicial/final;
- lista dos commits na ordem;
- exports públicos de `@ativ/ui`;
- como importar CSS e tokens;
- validações executadas e resultados;
- dependências que o Codex precisa conectar no workspace;
- lacunas preservadas;
- riscos de integração;
- confirmação de que nenhum arquivo de propriedade do Codex foi alterado.
