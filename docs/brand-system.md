# Brand System — ATIV

## Objetivo

Converter o Brand Kit da ATIV em regras executáveis de interface. O site deve parecer deliberadamente projetado para a ATIV, não adaptado de um template.

## 1. Fonte de verdade

Quando os arquivos oficiais forem adicionados em `brand/`, prevalecem sobre qualquer inferência visual do site atual.

O agente deve extrair e documentar:
- logos oficiais e variações permitidas;
- área de respiro;
- tamanhos mínimos;
- paleta primária/secundária/neutra;
- tipografias e licenciamento;
- escalas tipográficas;
- proporções e grid;
- linguagem fotográfica;
- iconografia;
- aplicações incorretas;
- tom de voz.

## 2. Tokens

Criar `brand/tokens.json` e derivar CSS variables. Categorias mínimas:
- color;
- typography;
- spacing;
- size/container;
- border;
- radius;
- shadow;
- motion.duration;
- motion.easing;
- z-index;
- breakpoint.

Tokens devem ter nomes semânticos quando possível, não apenas `blue-500`.

## 3. Direção visual

Características desejadas:
- engenharia;
- precisão;
- tecnologia audiovisual real;
- sofisticação corporativa;
- densidade informacional controlada;
- alto contraste e legibilidade;
- movimentos físicos coerentes;
- detalhes inspirados em sinal, matriz, routing, pixel, waveform, rede e controle.

## 4. O que evitar

Evitar como default:
- layout “startup SaaS” genérico;
- cards iguais em todas as seções;
- glow neon sem significado;
- gradients roxo/azul padrão;
- glassmorphism generalizado;
- excesso de pills;
- mockups irreais;
- ícones aleatórios;
- fotos stock de executivos apontando para tela;
- copy vaga;
- números sem fonte;
- animações somente para impressionar.

## 5. Conteúdo visual preferencial

Prioridade:
1. projetos reais da ATIV;
2. fotos de instalações;
3. racks e infraestrutura;
4. videowalls e salas de controle;
5. auditórios e salas de colaboração;
6. diagramas/topologias reais ou estilizados com fidelidade técnica;
7. detalhes de produto quando direitos de uso permitirem;
8. visualizações abstratas próprias da marca.

## 6. Motion design

Motion deve possuir função:
- explicar fluxo de sinal;
- revelar hierarquia;
- indicar continuidade;
- reforçar interação;
- criar momento de marca no hero.

Toda animação deve:
- respeitar reduced motion;
- não alterar leitura semântica;
- não atrasar CTA;
- não produzir layout shift;
- ser removível sem destruir compreensão.

## 7. WebGL/3D

Usar somente quando houver conceito forte. Exemplos potenciais:
- matriz AV roteando fontes para destinos;
- pixel topology de um videowall;
- mapa abstrato de rede AV over IP;
- visualização técnica de sala.

Requisitos:
- lazy load;
- fallback;
- orçamento de memória/GPU;
- controle de qualidade em notebook corporativo intermediário e mobile representativo.

## 8. Conteúdo e tom

Tom:
- técnico;
- seguro;
- claro;
- consultivo;
- comercial sem exagero.

Preferir:
“Projetamos a arquitetura AV, integramos os sistemas e entregamos comissionamento e documentação.”

Evitar:
“Criamos experiências inovadoras que transformam o futuro.”

## 9. Brand QA

Toda página importante deve ser revisada pelo Brand Guardian considerando:
- logo;
- cores;
- tipografia;
- ritmo;
- fotografia;
- motion;
- consistência de componentes;
- voz;
- sensação de template/IA.

Desvio intencional deve ser documentado em PR.
