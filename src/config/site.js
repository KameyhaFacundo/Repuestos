// ─────────────────────────────────────────────────────────────
//  CONFIGURACIÓN DEL SITIO · Impulsa Motors
//  Todo lo que el cliente puede querer cambiar está acá.
// ─────────────────────────────────────────────────────────────

// WhatsApp en formato internacional, solo dígitos (Argentina móvil: 549 + código de área + número).
// Se puede pisar con la variable VITE_WHATSAPP_NUMBER (ver .env.example).
export const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || "5493815683910";
export const WHATSAPP_DISPLAY = "+54 9 3815 68-3910";

export const brand = {
  name: "Impulsa Motors",
  tagline: "Expertos en motos",
  logo: "/logo.jpeg",
};

export const location = {
  city: "El Naranjo, Tucumán",
  // Completar cuando el cliente pase la dirección exacta y el horario (se muestran solo si tienen texto).
  address: "",
  hours: "",
  mapsQuery: "El Naranjo, Tucumán, Argentina",
};

export const navLinks = [
  { label: "Buscá tu repuesto", href: "#buscador" },
  { label: "Productos", href: "#productos" },
  { label: "Por qué elegirnos", href: "#nosotros" },
  { label: "Dónde estamos", href: "#ubicacion" },
];

export const motoBrands = [
  "Honda",
  "Yamaha",
  "Zanella",
  "Motomel",
  "Corven",
  "Gilera",
  "Keller",
  "Bajaj",
  "Suzuki",
  "Otra marca",
];

export const partTypes = [
  "Kit de transmisión",
  "Frenos (pastillas / discos)",
  "Aceite y lubricantes",
  "Bujías y encendido",
  "Batería",
  "Cubiertas y cámaras",
  "Filtros",
  "Casco o accesorios",
  "Otro repuesto",
];

// art: nombre de la ilustración en ProductArt.jsx
export const products = {
  motos: [
    { id: "transmision", art: "chain", name: "Kits de transmisión", text: "Cadena, piñón y corona para tu modelo." },
    { id: "frenos", art: "brake", name: "Frenos", text: "Pastillas, zapatas y discos." },
    { id: "aceites", art: "oil", name: "Aceites y lubricantes", text: "Para 2 y 4 tiempos, y grasas." },
    { id: "bujias", art: "plug", name: "Bujías y encendido", text: "Arranque firme en cualquier clima." },
    { id: "baterias", art: "battery", name: "Baterías", text: "Selladas y de gel, con carga." },
    { id: "cubiertas", art: "tire", name: "Cubiertas y cámaras", text: "Ciudad, ruta y mixtas." },
    { id: "filtros", art: "filter", name: "Filtros", text: "Aire, aceite y combustible." },
    { id: "cascos", art: "helmet", name: "Cascos y accesorios", text: "Protección y lo que le falta a tu moto." },
  ],
  ferreteria: [
    { id: "herramientas", art: "wrench", name: "Herramientas", text: "Llaves, pinzas, destornilladores y más." },
    { id: "buloneria", art: "bolts", name: "Bulonería", text: "Tornillos, tuercas y arandelas." },
    { id: "electricidad", art: "outlet", name: "Electricidad", text: "Cables, fichas y tomas." },
    { id: "pinturas", art: "paint", name: "Pinturas y adhesivos", text: "Pinturas, aerosoles y selladores." },
  ],
};

export const reasons = [
  { title: "Expertos en motos", text: "Sabemos qué pieza va en cada modelo. Te asesoramos antes de que compres." },
  { title: "Stock para llevar hoy", text: "Repuestos de las marcas más vendidas, listos para retirar." },
  { title: "Consultá sin moverte", text: "Mandanos tu moto y el repuesto por WhatsApp y te respondemos con disponibilidad." },
  { title: "Ferretería en el mismo lugar", text: "Resolvés el repuesto y la herramienta en una sola visita." },
];
