# Conteúdo editorial da ATIV

Este diretório recebe materiais textuais destinados ao futuro site antes da modelagem e publicação no
CMS.

## Fluxo

```text
arquivo recebido em content/inbox/
  -> triagem editorial e técnica
  -> validação de claims e fontes
  -> definição de rota, intenção e CTA
  -> adaptação ao template da página
  -> revisão SEO, Brand e acessibilidade
  -> migração futura para o CMS
```

Arquivos em `content/inbox/` são fontes de trabalho. A presença no Git não significa aprovação ou
publicação.

## Regras

- Aceitar somente Markdown (`.md`) e os ativos explicitamente necessários à análise.
- Não inserir senhas, dados pessoais, contratos confidenciais ou outros segredos.
- Não tratar números, clientes, certificações, cases ou resultados como verdade sem evidência.
- Não alterar rota, canonical ou URL existente a partir do nome do arquivo recebido.
- Preservar o texto original; sugestões editoriais devem ser distinguíveis do material fornecido.
- Nenhum arquivo desta área é importado automaticamente pelo build da aplicação.

Consulte `content/inbox/README.md` para preparar uma entrega.
