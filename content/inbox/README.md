# Caixa de entrada de conteúdo Markdown

Coloque aqui o arquivo `.md` contendo o texto que deverá ser analisado e adaptado para o site.

## Como enviar

1. Copie `MODELO_CONTEUDO.md` para um novo arquivo.
2. Use um nome descritivo em `kebab-case`, por exemplo:
   `salas-reuniao-hibridas-texto-fonte.md`.
3. Preencha apenas os campos conhecidos. Use `PENDENTE` quando faltar informação.
4. Cole o texto original na seção indicada, sem inventar fatos para completar lacunas.
5. Adicione fontes e observações de aprovação quando existirem.

## Estado editorial

Todo arquivo novo começa como `recebido`. Os estados aceitos são:

- `recebido`: material original ainda não revisado;
- `em_triagem`: intenção, rota e evidências sendo analisadas;
- `aguardando_evidencia`: há claims que não podem ser publicados;
- `em_revisao`: texto adaptado aguardando revisão técnica/comercial;
- `aprovado_para_modelagem`: pode ser transformado em estrutura do CMS;
- `arquivado`: não será utilizado nesta versão.

`aprovado_para_modelagem` não equivale a publicado.

## Restrições

- Não armazenar credenciais, PII desnecessária ou documentos confidenciais.
- Não publicar diretamente a partir deste diretório.
- Não criar redirect ou slug automaticamente com base no nome do arquivo.
- Claims sem fonte permanecem marcados e não entram na página.
- O responsável editorial deve comparar a rota pretendida com `seo/url-inventory.csv`,
  `seo/keyword-map.csv` e `seo/route-plan.csv`.
