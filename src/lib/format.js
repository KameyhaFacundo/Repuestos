import { WHATSAPP_NUMBER } from "../config/site";

// Arma el enlace a WhatsApp con el mensaje precargado.
export function whatsappUrl(message) {
  const digits = WHATSAPP_NUMBER.replace(/\D/g, "");
  const base = digits ? `https://wa.me/${digits}` : "https://wa.me/";
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const productMessage = (product) =>
  `Hola Impulsa Motors, quisiera consultar por: ${product.name}.`;
