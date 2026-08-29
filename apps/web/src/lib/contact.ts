export const contactPageContract = {
  pathname: "/contato/",
  title: "Contato | ATIV",
  description:
    "URL de contato reservada na fundação técnica da ATIV. Telefone, e-mail e envio só entram com dado verificado e endpoint aprovado.",
  eyebrow: "Contato — superfície técnica",
  heading: "Canal de contato reservado",
  headingClass: "ativ-titulo-pagina",
  skipTarget: "conteudo-principal",
  summary:
    "Esta URL já existe no inventário e fica reservada. Nenhum telefone, e-mail ou endereço é publicado até confirmação. O envio do formulário entra na fase de leads.",
  cta: "Voltar ao início",
  forbiddenPhone: "+55 (11) 0000-0000",
  limits: [
    "Não publica telefone, e-mail, endereço ou horário sem confirmação.",
    "Não reproduz o telefone placeholder do site atual.",
    "Não envia formulário: o endpoint entra na fase de leads.",
  ],
  plannedFields: [
    "Nome, organização e e-mail de retorno",
    "Telefone opcional, sem placeholder",
    "Tipo de ambiente e natureza do escopo",
    "Descrição do ambiente, plataformas em uso e o que precisa mudar",
  ],
} as const;
