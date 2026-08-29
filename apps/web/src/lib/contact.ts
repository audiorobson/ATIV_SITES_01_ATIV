export const verifiedContact = {
  email: "contato@ativpro.com",
  emailHref: "mailto:contato@ativpro.com",
  phoneDisplay: "(11) 91111-0115",
  phoneHref: "tel:+5511911110115",
  street: "Av. Prof. Joaquim Barreto, 1165",
  complement: "2° andar, Sala 1",
  locality: "Centro, Cotia - SP",
  postalCode: "06700-170",
  address:
    "Av. Prof. Joaquim Barreto, 1165 - 2° andar, Sala 1 - Centro, Cotia - SP, 06700-170",
} as const;

export const contactPageContract = {
  pathname: "/contato/",
  title: "Contato técnico para projetos audiovisuais | ATIV",
  description:
    "Fale com a engenharia da ATIV por e-mail, telefone ou no escritório em Cotia. O envio eletrônico do escopo entra quando o endpoint de leads estiver ativo.",
  eyebrow: "Contato",
  heading: "Fale com a engenharia sobre o seu ambiente audiovisual.",
  headingClass: "ativ-titulo-pagina",
  skipTarget: "conteudo-principal",
  summary:
    "E-mail, telefone e endereço já estão confirmados. O formulário desta página descreve o que será pedido; o envio ainda não está ativo.",
  cta: "Voltar ao início",
  forbiddenPhone: "+55 (11) 0000-0000",
  limits: [
    "Não reproduz o telefone placeholder do site atual.",
    "Não envia formulário: o endpoint entra na fase de leads.",
    "Não publica horário de atendimento sem confirmação.",
    "O texto em revisão descreve o canal e os campos; não finge envio.",
  ],
  plannedFields: [
    "Nome, organização e e-mail de retorno",
    "Telefone opcional, sem placeholder",
    "Tipo de ambiente e natureza do escopo",
    "Descrição do ambiente, plataformas em uso e o que precisa mudar",
  ],
} as const;
