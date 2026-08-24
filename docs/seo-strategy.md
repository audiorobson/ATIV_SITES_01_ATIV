# Estratégia SEO — ATIV

## 1. Princípio central

SEO não é uma camada aplicada no fim do desenvolvimento. A arquitetura de páginas, conteúdo, HTML, performance, URLs, links internos, dados estruturados e migração devem nascer juntos.

Objetivo: posicionar a ATIV como autoridade em **integração audiovisual profissional para ambientes corporativos e governamentais**, com páginas que atendam intenção real e convertam tráfego técnico/comercial em oportunidade.

Não existe garantia ética ou técnica de primeira posição no Google. O projeto deve maximizar elegibilidade, relevância, autoridade e experiência.

## 2. Modelo de intenção

Cada página deve declarar uma intenção primária:

- **commercial investigation** — usuário comparando fornecedores/soluções;
- **transactional/lead** — usuário procurando empresa/projeto/serviço;
- **informational** — pesquisa técnica;
- **navigational** — marca/produto específico;
- **government/procurement** — intenção de órgão público, especificador ou licitação.

Não criar duas URLs disputando a mesma intenção sem motivo.

## 3. Clusters prioritários

### Cluster A — Integração audiovisual corporativa
Keywords iniciais:
- integração audiovisual corporativa;
- empresa de integração audiovisual;
- integrador audiovisual;
- sistemas audiovisuais corporativos;
- projeto audiovisual corporativo;
- empresa de áudio e vídeo corporativo;
- engenharia audiovisual.

### Cluster B — Salas de reunião e colaboração
- sala de reunião inteligente;
- sala de reunião híbrida;
- solução para sala de reunião;
- videoconferência corporativa;
- automação de sala de reunião;
- Microsoft Teams Rooms;
- integração Teams Rooms;
- Unified Communications / UC corporativo.

### Cluster C — Videowall / salas de controle
- videowall corporativo;
- sistema de videowall;
- sala de controle videowall;
- centro de comando e controle;
- NOC audiovisual;
- SOC audiovisual;
- sala de situação;
- video wall para monitoramento.

### Cluster D — Auditórios e plenários
- auditório corporativo audiovisual;
- sistema audiovisual para auditório;
- automação de auditório;
- sistema audiovisual para plenário;
- gravação e transmissão de sessões;
- sonorização para plenário;
- câmera PTZ para auditório/plenário;
- painel LED para auditório.

### Cluster E — Governo
- audiovisual para governo;
- integração audiovisual para órgão público;
- sistema audiovisual para tribunal;
- audiovisual para câmara municipal;
- modernização audiovisual órgão público;
- sala de sessão audiovisual;
- sistema audiovisual de alta disponibilidade;
- projeto audiovisual para termo de referência.

### Cluster F — AV over IP / áudio em rede
- AV over IP;
- áudio sobre IP;
- Dante áudio em rede;
- distribuição de vídeo IP;
- matriz AV IP;
- infraestrutura audiovisual em rede.

### Cluster G — Serviços e ciclo de vida
- manutenção audiovisual corporativa;
- suporte audiovisual;
- contrato de manutenção AV;
- comissionamento audiovisual;
- atualização/modernização audiovisual;
- serviços gerenciados AV.

## 4. Arquitetura de informação sugerida

```text
/
/solucoes/
/solucoes/integracao-audiovisual/
/solucoes/salas-de-reuniao/
/solucoes/microsoft-teams-rooms/
/solucoes/videowall/
/solucoes/noc-soc-centro-de-comando/
/solucoes/auditorios/
/solucoes/av-over-ip/
/solucoes/manutencao-suporte/
/setores/
/setores/corporativo/
/setores/governo/
/setores/tribunais-e-justica/  # somente se houver conteúdo e intenção suficientes
/cases/
/cases/{slug}/
/insights/
/insights/{slug}/
/empresa/
/contato/
```

A lista é conceitual. URLs atuais devem ser comparadas antes de adotar novos slugs.

## 5. Template mínimo de página de solução

1. H1 orientado à intenção;
2. proposta de valor sem clichê;
3. contexto/problema;
4. arquitetura da solução;
5. componentes/tecnologias;
6. aplicações;
7. interoperabilidade;
8. diferenciais comprováveis;
9. case/prova;
10. FAQ útil;
11. soluções relacionadas;
12. CTA contextual.

## 6. Governo

Não tratar Governo apenas como uma página de setor genérica. A linguagem deve refletir requisitos reais de contratação e engenharia, quando verificáveis:
- fornecimento;
- instalação;
- configuração;
- integração;
- treinamento;
- documentação;
- comissionamento;
- suporte;
- alta disponibilidade;
- interoperabilidade;
- modernização.

Evitar linguagem que sugira contratos, habilitações ou clientes não comprovados.

## 7. Conteúdo editorial

Priorizar conteúdo que ajude comprador, TI, engenharia e especificador:
- guias de arquitetura;
- comparativos tecnológicos honestos;
- checklists de projeto;
- critérios de especificação;
- glossários técnicos;
- estudos de caso;
- troubleshooting relevante;
- conteúdo de normas e interoperabilidade com fonte.

Evitar artigos produzidos apenas para frequência editorial.

## 8. On-page

Para toda URL indexável:
- title único, conciso e orientado à consulta;
- meta description específica;
- canonical absoluto;
- H1 único;
- headings hierárquicos;
- links internos contextuais;
- imagens úteis com alt adequado;
- breadcrumbs;
- Open Graph;
- dados estruturados somente quando elegíveis;
- CTA sem impedir acesso ao conteúdo.

## 9. Structured data

Usar somente tipos aplicáveis e dados visíveis/verdadeiros. Possíveis tipos:
- Organization;
- WebSite;
- BreadcrumbList;
- Article/BlogPosting;
- VideoObject quando houver vídeo qualificável;
- FAQ somente se estiver de acordo com a documentação vigente e fizer sentido, sem expectativa de rich result garantido.

Não usar schema como forma de inserir keywords escondidas.

## 10. Internal linking

Cada página deve receber links de páginas semanticamente próximas e devolver links úteis para:
- solução mãe/filha;
- setor relacionado;
- case;
- insight;
- contato.

Não criar blocos gigantes de links somente para crawler.

## 11. Programmatic SEO

Não utilizar em escala sem dataset próprio e utilidade real. É proibida geração automática de centenas de combinações cidade × solução ou setor × produto sem conteúdo substancial.

## 12. Métricas

Acompanhar por cluster e URL:
- clicks;
- impressions;
- CTR;
- average position como indicador, não objetivo isolado;
- indexed URLs;
- Core Web Vitals;
- organic leads;
- conversion rate;
- branded vs non-branded;
- assisted conversions.

## 13. Processo de keyword research definitivo

Cruzar:
1. Search Console;
2. Google Ads Keyword Planner;
3. SERPs reais por intenção;
4. concorrentes;
5. linguagem usada em RFPs/termos de referência/documentos públicos;
6. conhecimento técnico/comercial da ATIV.

O arquivo `seo/keyword-map.csv` é a fonte operacional para evitar canibalização.
