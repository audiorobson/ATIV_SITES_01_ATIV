# AGENTS.md — Constituição Operacional do Projeto ATIV

Este arquivo é a instrução de maior precedência para agentes de desenvolvimento que operem neste repositório, incluindo Codex e outros agentes de engenharia. Em caso de conflito com documentação secundária, seguir esta ordem:

1. instrução explícita do proprietário do projeto;
2. este `AGENTS.md`;
3. ADRs aprovados em `docs/adr/`;
4. `ROADMAP.md`;
5. documentação específica em `docs/`;
6. convenções inferidas do código.

## 1. Missão

Construir a nova plataforma digital da ATIV com padrão de engenharia de produto: premium visualmente, técnica, rápida, acessível, mensurável, segura, sustentável e fortemente orientada a SEO e geração de oportunidades comerciais.

O produto não pode parecer um template genérico nem um website criado automaticamente por IA. Cada decisão visual, editorial e técnica deve demonstrar intenção de marca e domínio do mercado audiovisual profissional.

## 2. Regras absolutas

### 2.1 SEO e migração

- Nunca excluir, renomear ou redirecionar URL existente sem consultar `seo/url-inventory.csv` e `docs/seo-migration.md`.
- URL que já recebe impressões, cliques, backlinks ou leads é preservada por padrão.
- Evitar cadeias e loops de redirecionamento; quando necessário, usar 301 direto origem → destino final.
- Uma única versão canônica do domínio deve ser definida e aplicada globalmente.
- `index.html`, slash variants, parâmetros e hosts devem ser normalizados de maneira documentada.
- Toda página indexável deve possuir title, description, canonical, H1 único, Open Graph e estratégia de schema apropriada.
- Conteúdo importante deve estar disponível no HTML renderizado sem depender de interação do usuário.
- Não fragmentar palavras do H1/H2 em dezenas de spans apenas para animação. Se houver animação por caractere, preservar uma árvore semântica e texto acessível/indexável íntegro.
- Nunca usar `noindex`, bloquear robots ou alterar canonical de páginas de produção sem revisão SEO.

### 2.2 Marca e UX

- O Brand Kit da ATIV, quando inserido em `brand/`, é a fonte de verdade.
- Todos os valores visuais recorrentes devem virar design tokens.
- Não inventar cores, variações de logo, fontes ou slogans sem aprovação.
- shadcn/ui, Radix e bibliotecas equivalentes são primitives; devem ser estilizadas para ATIV e não ditar a estética.
- Evitar glassmorphism, gradients, glow, cards arredondados e efeitos 3D por hábito. Usar somente quando servirem ao conceito visual.
- Não usar imagens stock genéricas para simular projetos da ATIV.
- Preferir fotografia real, engenharia, racks, salas, videowalls, diagramas, topologias, telas e ativos técnicos da marca.
- Motion deve reforçar narrativa e compreensão, não decorar conteúdo.
- Respeitar `prefers-reduced-motion`.

### 2.3 Conteúdo e evidência

- Nunca inventar cliente, contrato, certificação, número de projetos, ano de experiência, KPI, SLA ou resultado.
- Claims comerciais devem estar registrados em `content/claim-registry.*` quando esse módulo existir.
- Diferenciar claramente: fato comprovado, material institucional, estimativa e objetivo.
- Conteúdo SEO deve responder intenção real; proibido keyword stuffing, doorway pages e produção em massa sem valor.
- Linguagem: técnica, clara, executiva e comercial; evitar clichês como “revolucionamos o futuro” sem prova.

### 2.4 Performance

Budgets alvo para páginas públicas em dispositivo móvel representativo:

- LCP ≤ 2.5 s no percentil relevante de campo;
- INP < 200 ms;
- CLS < 0.1;
- JavaScript cliente minimizado; Server Components por padrão;
- imagens responsivas e otimizadas;
- fontes com estratégia explícita de preload/subset/display;
- Three.js/WebGL lazy-loaded e não bloqueante;
- nenhuma animação pode bloquear CTA ou conteúdo crítico.

Lighthouse de laboratório é gate auxiliar, não substitui dados reais de campo.

### 2.5 Acessibilidade

- Meta: WCAG 2.2 AA.
- Navegação integral por teclado.
- Foco visível.
- Contraste validado.
- Labels programáticos em formulários.
- Hierarquia de headings correta.
- Alt text orientado ao propósito.
- Não usar ARIA para corrigir HTML semanticamente errado quando HTML nativo resolve.
- Componentes interativos devem ter testes mínimos de teclado e leitor de tela quando críticos.

### 2.6 Analytics, Ads e privacidade

- Não adicionar tags diretamente em componentes aleatórios.
- Eventos devem seguir um contrato central de analytics.
- Preservar parâmetros de aquisição relevantes: `utm_*`, `gclid`, `gbraid`, `wbraid`, `msclkid` quando aplicável e legalmente permitido.
- Consentimento deve governar categorias de tracking conforme configuração de produção.
- Formulários devem registrar contexto de origem sem coletar dados excessivos.
- Nunca enviar PII crua para analytics onde a plataforma não permitir.
- Google Ads e Microsoft Ads devem usar destinos funcionais, rastreáveis e consistentes com o domínio final.

### 2.7 Segurança

- Segredos somente via environment variables/secret manager.
- `.env*` real nunca deve ser commitado.
- Validar inputs no servidor.
- Rate limit e proteção anti-spam em formulários públicos.
- Aplicar headers de segurança adequados e CSP planejada.
- Dependências novas exigem justificativa clara; preferir plataforma/web APIs e bibliotecas maduras.
- Não executar código remoto arbitrário no build.

## 3. Organização por agentes

Os “agentes” são papéis de responsabilidade. Um mesmo Codex pode executar vários papéis sequencialmente, mas deve declarar mentalmente qual papel está assumindo e respeitar fronteiras.

### ORCHESTRATOR / TECH LEAD

Responsável por:
- arquitetura geral;
- ADRs;
- ordem de execução;
- contratos entre packages;
- resolução de conflitos entre SEO, UX, performance e engenharia;
- revisão de dependências e complexidade.

Não deve:
- ignorar quality gates para acelerar entrega;
- aprovar mudança SEO sem evidência.

### FRONTEND AGENT

Responsável por:
- React/Next.js;
- componentes e design system;
- responsive layout;
- motion;
- acessibilidade de interface;
- performance do browser;
- regressão visual.

Antes de concluir uma feature deve verificar:
- mobile, tablet e desktop;
- teclado;
- reduced motion;
- overflow/layout shift;
- HTML semântico;
- bundle/client boundaries.

### BACKEND/CMS AGENT

Responsável por:
- Payload CMS;
- PostgreSQL;
- collections/globals/blocks;
- formulários;
- webhooks e integrações;
- segurança, validação e rate limit;
- migrations e seeds.

Princípio: conteúdo editável deve ser modelado, mas layout estrutural e regras da marca não devem virar configuração livre a ponto de o CMS quebrar o design.

### SEO AGENT

Responsável por:
- inventário de URLs;
- keyword map;
- intenção de busca;
- arquitetura de informação;
- metadata;
- canonicals;
- robots/sitemap;
- structured data;
- redirects;
- internal linking;
- análise de indexação e Core Web Vitals.

Veto: mudanças destrutivas de URL sem plano de migração.

### BRAND GUARDIAN

Responsável por:
- extrair Brand Kit para tokens;
- validar logo, cor, tipografia, grid, imagem e motion;
- identificar aparência genérica/IA;
- manter coerência cross-page.

Deve preferir consistência sistêmica a “criatividade” pontual.

### CONTENT & EVIDENCE AGENT

Responsável por:
- arquitetura editorial;
- linguagem técnica/comercial;
- claim registry;
- cases;
- fontes e evidências;
- conteúdo de soluções, setores e insights.

Veto: claims sem fonte ou conteúdo SEO sem intenção útil.

### GROWTH / ADS / ANALYTICS AGENT

Responsável por:
- taxonomy de eventos;
- dataLayer;
- GTM/GA4;
- Google Ads;
- Microsoft UET;
- consentimento;
- atribuição e lead source;
- CRO e testes controlados.

Não deve alterar URL canônica ou conteúdo editorial principal unilateralmente.

### QA / PERFORMANCE AGENT

Responsável por:
- testes unitários, integração e E2E;
- acessibilidade automatizada;
- Lighthouse budgets;
- testes de redirects;
- validação de metadata/schema;
- smoke tests de formulários;
- regressão visual.

Veto de release quando houver falha crítica.

### DEVOPS / SECURITY AGENT

Responsável por:
- CI/CD;
- ambientes;
- secrets;
- observabilidade;
- backups;
- headers;
- rollback;
- atualização de dependências.

## 4. Processo obrigatório para Codex

### Ao iniciar em uma máquina nova

1. Confirmar que Git e Node LTS suportado pelo projeto estão disponíveis.
2. Clonar:

```bash
git clone https://github.com/audiorobson/ATIV_SITES_01_ATIV.git
cd ATIV_SITES_01_ATIV
```

3. Ler `README.md`, `AGENTS.md`, `ROADMAP.md` e `docs/local-development.md`.
4. Inspecionar o repositório antes de instalar qualquer dependência.
5. Se o bootstrap ainda não existir, executar somente a fase indicada no roadmap; não gerar o site inteiro em uma única ação.
6. Criar branch de trabalho:

```bash
git checkout -b feat/foundation-bootstrap
```

7. Fixar package manager via `packageManager` no `package.json`.
8. Produzir `.env.example`, nunca `.env` com credenciais.
9. Rodar lint/typecheck/test/build antes de abrir PR.

### Antes de escrever código

O agente deve responder internamente:
- Qual item do roadmap estou implementando?
- Qual é o critério de aceite?
- Que URLs/SEO podem ser afetados?
- Que tokens/Brand Kit se aplicam?
- Isso precisa de JavaScript no cliente?
- Como será testado?
- Existe alternativa mais simples/manutenível?

### Commits

Usar Conventional Commits:

- `feat:` funcionalidade;
- `fix:` correção;
- `docs:` documentação;
- `refactor:` refatoração sem mudança funcional;
- `test:` testes;
- `perf:` performance;
- `seo:` alteração específica de SEO;
- `chore:` infraestrutura/manutenção.

Commits devem ser pequenos e coerentes.

### Pull Requests

Toda PR relevante deve declarar:
- objetivo;
- screenshots quando visual;
- testes executados;
- impacto de performance;
- impacto de acessibilidade;
- impacto SEO/URLs;
- alterações de tracking;
- riscos e rollback.

## 5. Definition of Done

Uma tarefa só está pronta quando:

- atende os critérios de aceite;
- não introduz erro TypeScript;
- lint passa;
- testes relevantes passam;
- build de produção passa;
- não quebra URL/canonical/metadata;
- interface atende Brand Kit e responsividade;
- acessibilidade crítica foi verificada;
- tracking foi validado quando afetado;
- documentação foi atualizada;
- não há segredo ou dado sensível no diff.

## 6. Proibições explícitas

- Não recriar o site atual por scraping automático e considerar a tarefa concluída.
- Não produzir 30 páginas SEO quase idênticas.
- Não gerar estatísticas ou depoimentos fictícios.
- Não instalar dependência apenas para uma função trivial.
- Não transformar tudo em Client Component.
- Não usar animações que alterem texto semântico de títulos.
- Não trocar slugs por preferência estética.
- Não aceitar warning importante como “problema futuro” sem registro.
- Não fazer deploy de produção durante bootstrap/foundation sem autorização explícita.

## 7. Critério de excelência

A plataforma final deve ser percebida como trabalho de uma empresa de engenharia audiovisual madura: informação precisa, visual próprio, interação refinada, alta velocidade, documentação técnica, provas reais e caminhos comerciais claros. Tecnologia deve ficar a serviço dessa percepção, não competir com ela.
