# Landing de servicio: páginas web para profesionales y negocios

Landing en React + Vite, sin backend. Rama `servicio-web`.

## Ejecutar

```bash
npm install
cp .env.example .env     # y completá VITE_WHATSAPP_NUMBER
npm run dev              # desarrollo
npm run build            # genera dist/
npm run preview          # prueba el build
```

## Qué reemplazar antes de publicar

Todo está en [src/config/site.js](src/config/site.js):

- `WHATSAPP_NUMBER`, `EMAIL` y `person`: ya cargados con tus datos. `VITE_WHATSAPP_NUMBER` en `.env` es opcional y pisa el número.
- Planes, precios, proyectos, pasos y diferenciales.

Además, en [index.html](index.html): agregar la etiqueta `canonical` y una imagen `og:image` cuando tengas dominio.

## Estructura

```
src/
  config/site.js          contenido y configuración
  lib/format.js           precios y enlaces de WhatsApp
  hooks/useReveal.js      animación de entrada (respeta "reducir movimiento")
  components/ui/          Button, Modal, Reveal, SectionHead, Icons
  components/mockups/     marcos de navegador/celular y las interfaces de ejemplo
  sections/               Header, Hero, Rubros, Work, Pricing, Process, Differentials, Contact, Footer
  styles/                 tokens, base, ui, mockups, screens, sections
```

## Publicar (Vercel)

1. Importar el repositorio y elegir la rama `servicio-web` como Production Branch.
2. Framework: Vite (detecta `npm run build` y `dist` solo).
3. En Settings, Environment Variables: definir `VITE_WHATSAPP_NUMBER`.
4. Conectar el dominio propio.
