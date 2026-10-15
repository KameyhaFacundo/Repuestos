// ─────────────────────────────────────────────────────────────
//  CONFIGURACIÓN DEL SITIO  ·  todo lo que tenés que completar está acá
// ─────────────────────────────────────────────────────────────

// 1) NÚMERO DE WHATSAPP
//    Formato internacional, solo dígitos (Argentina móvil: 549 + código de área + número).
//    Se puede cambiar sin tocar el código con la variable VITE_WHATSAPP_NUMBER (ver .env.example).
export const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || "5493815069332";
export const WHATSAPP_DISPLAY = "+54 381 506-9332";

// Contacto directo
export const EMAIL = "kameyhafacundo@gmail.com";

// 2) MARCA
export const brand = {
  name: "Kamex",
  role: "Desarrollo web",
};

// Quién está detrás (foto en /public/perfil.png)
export const person = {
  name: "Facundo Kameyha",
  role: "Diseño y desarrollo web",
  photo: "/perfil-kamex.jpg",
};

// 3) Proyecto real de referencia (se abre en una pestaña nueva).
export const REAL_PROJECT_URL = "https://abogadamariajosefernandez.vercel.app/";

// ─────────────────────────────────────────────────────────────
//  CONTENIDO
// ─────────────────────────────────────────────────────────────

export const navLinks = [
  { label: "Trabajos", href: "#trabajos" },
  { label: "Precios", href: "#precios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Por qué yo", href: "#diferenciales" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Contacto", href: "#contacto" },
];

export const rubros = [
  "Abogados",
  "Contadores",
  "Talleres mecánicos",
  "Ferreterías",
  "Comercios",
  "Emprendedores",
  "Profesionales independientes",
  "Negocios de servicios",
];

export const projects = [
  {
    id: "law",
    kind: "real",
    featured: true,
    title: "Estudio jurídico Justa Causa",
    category: "Abogada · San Miguel de Tucumán",
    description:
      "Landing con áreas de práctica, guías para el cliente, formulario que arma el mensaje de WhatsApp y modo claro y oscuro.",
    url: REAL_PROJECT_URL,
    cta: "Ver proyecto online",
  },
  {
    id: "hardware",
    kind: "demo",
    title: "Ferretería moderna",
    category: "Comercio · catálogo y presupuesto",
    description:
      "Catálogo por categorías y pedido de presupuesto por WhatsApp, pensado para que el cliente encuentre rápido lo que busca.",
    cta: "Ver demo",
  },
  {
    id: "garage",
    kind: "demo",
    title: "Taller mecánico",
    category: "Servicios · turnos",
    description:
      "Servicios claros, horarios y un pedido de turno directo, para que consultar sea un solo toque.",
    cta: "Ver demo",
  },
];

export const plans = [
  {
    id: "inicial",
    name: "Plan Inicial",
    price: 119000,
    blurb: "Para presentarte online de forma simple y profesional.",
    features: [
      "Landing page de hasta cinco secciones",
      "Diseño adaptable a celulares y computadoras",
      "Botón de WhatsApp",
      "Información del negocio y servicios",
      "Publicación y SEO básico",
    ],
  },
  {
    id: "profesional",
    name: "Plan Profesional",
    price: 199000,
    featured: true,
    badge: "Recomendado",
    blurb: "El equilibrio ideal entre presencia, contenido y contacto.",
    features: [
      "Sitio web de hasta cinco páginas",
      "Diseño personalizado",
      "Formulario de contacto",
      "Galería o presentación de servicios",
      "Configuración básica para buscadores",
    ],
  },
  {
    id: "negocio-plus",
    name: "Plan Negocio Plus",
    price: 299000,
    blurb: "Para negocios con más contenido y más para mostrar.",
    features: [
      "Sitio con mayor cantidad de contenido",
      "Catálogo informativo de productos o servicios",
      "Formularios y llamadas a la acción",
      "Analítica básica y configuración técnica",
    ],
  },
];

export const steps = [
  {
    title: "Me contás qué necesitás",
    text: "Una charla por WhatsApp: tu rubro, qué querés mostrar y a quién querés llegar.",
  },
  {
    title: "Definimos diseño y presupuesto",
    text: "Armo una propuesta con alcance, plazos y precio cerrado antes de empezar.",
  },
  {
    title: "Desarrollo tu página",
    text: "La diseño y la programo a medida. Vas viendo avances y pedís ajustes.",
  },
  {
    title: "Publicamos y te la entrego",
    text: "La dejamos online, funcionando en celular y compu, y te entrego el proyecto.",
  },
];

export const differentials = [
  {
    title: "Diseño personalizado",
    text: "No es una plantilla sin adaptar: cada web se piensa para tu negocio y tu forma de trabajar.",
  },
  {
    title: "Pensada para el celular",
    text: "La mayoría de tus clientes te va a ver desde el teléfono. Se diseña primero para esa pantalla.",
  },
  {
    title: "Trato directo conmigo",
    text: "Hablás con quien diseña y programa tu sitio. Sin intermediarios ni vueltas.",
  },
  {
    title: "Presupuesto claro desde el inicio",
    text: "Sabés qué incluye y cuánto cuesta antes de arrancar. Lo que no esté en el alcance se cotiza aparte.",
  },
  {
    title: "Código moderno y buenas prácticas",
    text: "Sitios rápidos, ordenados y fáciles de mantener o de seguir ampliando.",
  },
  {
    title: "Entrega acordada y alcance definido",
    text: "Fechas y entregables por escrito, para que ambos sepamos qué esperar.",
  },
];

export const formOptions = {
  rubros: [
    "Abogado/a o estudio jurídico",
    "Contador/a o estudio contable",
    "Taller mecánico",
    "Ferretería",
    "Comercio o tienda",
    "Profesional independiente",
    "Emprendimiento",
    "Otro",
  ],
  tipos: [
    "Landing page (Plan Inicial)",
    "Sitio de hasta 5 páginas (Plan Profesional)",
    "Sitio con catálogo (Plan Negocio Plus)",
    "No estoy seguro/a",
  ],
  presupuestos: [
    "Hasta $119.000",
    "Entre $119.000 y $199.000",
    "Entre $199.000 y $299.000",
    "Más de $299.000",
    "Prefiero que me orientes",
  ],
};
