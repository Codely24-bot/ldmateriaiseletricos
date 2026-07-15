import { companyInfo } from "../data/siteContent";

type QuotePayload = {
  name: string;
  phone: string;
  email: string;
  city: string;
  customerType: string;
  projectType: string;
  materialsList: string;
  notes: string;
  fileName: string;
};

const cleanNumber = companyInfo.whatsappNumber.replace(/\D/g, "");

export const buildWhatsAppUrl = (message: string) =>
  `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;

export const buildProductMessage = (productName: string) =>
  buildWhatsAppUrl(
    `Olá! Gostaria de consultar o preço e a disponibilidade do produto ${productName}.`,
  );

export const buildConsultantMessage = () =>
  buildWhatsAppUrl(
    "Olá! Gostaria de falar com um consultor sobre compras recorrentes ou condições especiais.",
  );

export const buildGenericMessage = (message: string) => buildWhatsAppUrl(message);

export const buildQuoteMessage = ({
  name,
  phone,
  email,
  city,
  customerType,
  projectType,
  materialsList,
  notes,
  fileName,
}: QuotePayload) =>
  buildWhatsAppUrl(
    [
      "Olá! Gostaria de solicitar um orçamento personalizado.",
      "",
      `Nome: ${name}`,
      `Telefone: ${phone}`,
      `E-mail: ${email}`,
      `Cidade: ${city}`,
      `Tipo de cliente: ${customerType}`,
      `Tipo de projeto: ${projectType}`,
      `Lista de materiais: ${materialsList}`,
      `Observações: ${notes || "Sem observações adicionais."}`,
      `Arquivo anexado: ${fileName || "Nenhum arquivo informado."}`,
    ].join("\n"),
  );

