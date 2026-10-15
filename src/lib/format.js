import { WHATSAPP_NUMBER } from "../config/site";

const peso = new Intl.NumberFormat("es-AR", { maximumFractionDigits: 0 });

export const formatPrice = (value) => `$${peso.format(value)}`;

// Arma el enlace a WhatsApp con el mensaje precargado.
export function whatsappUrl(message) {
  const digits = WHATSAPP_NUMBER.replace(/\D/g, "");
  const base = digits ? `https://wa.me/${digits}` : "https://wa.me/";
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const planMessage = (plan) =>
  `Hola, me interesa el ${plan.name} (desde ${formatPrice(plan.price)} ARS). Quisiera consultar por mi página web.`;
