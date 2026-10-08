import { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Container, Stack, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { brand } from "../../theme/theme";
import { firm } from "../Landing/landingData";
import LogoImage from "../Landing/components/LogoImage";
import ThemeToggle from "../../theme/ThemeToggle";

const sections = [
  {
    title: "Quién es responsable",
    body: `El responsable del tratamiento de tus datos es ${firm.lawyer}, abogada, con domicilio profesional en ${firm.address}. Podés comunicarte por teléfono o WhatsApp al ${firm.phone}.`,
  },
  {
    title: "Qué datos se recogen",
    body: "Solo los que vos elegís compartir al consultar: nombre, teléfono y el relato de tu situación. El formulario de esta página no guarda esa información ni la envía a ningún servidor: arma un mensaje de WhatsApp en tu propio dispositivo, y sos vos quien decide enviarlo.",
  },
  {
    title: "Para qué se usan",
    body: "Para responder tu consulta y evaluar tu caso. No se usan para publicidad, no se venden ni se ceden a terceros.",
  },
  {
    title: "Secreto profesional",
    body: "Todo lo que compartas con tu abogada está protegido por el secreto profesional, incluso antes de contratar sus servicios.",
  },
  {
    title: "Cookies y herramientas de terceros",
    body: "Este sitio no utiliza cookies de seguimiento ni herramientas de estadísticas. Carga tipografías de Google Fonts y un mapa de Google Maps, que pueden recibir datos técnicos de tu conexión (como la dirección IP) según sus propias políticas. Si en el futuro se incorporan herramientas de medición, se pedirá tu consentimiento y se actualizará esta página.",
  },
  {
    title: "Conservación y seguridad",
    body: "Los datos que me envíes por WhatsApp o teléfono se conservan solo el tiempo necesario para atender tu consulta o el caso. Se aplican medidas razonables de protección, aunque ningún sistema es completamente seguro.",
  },
  {
    title: "Tus derechos",
    body: `Según la Ley N.º 25.326 de Protección de los Datos Personales, podés pedir acceso, rectificación o eliminación de tus datos escribiendo o llamando al ${firm.phone}. La Agencia de Acceso a la Información Pública (AAIP) es el órgano de control de esta ley y atiende denuncias y reclamos.`,
  },
  {
    title: "Enlaces externos y cambios",
    body: "Los sitios de terceros a los que se enlaza (por ejemplo, Instagram o WhatsApp) tienen sus propias políticas. Esta política puede actualizarse y la versión vigente es siempre la publicada en esta página.",
  },
];

function Privacy() {
  useEffect(() => {
    document.title = `Política de privacidad | ${firm.name}`;
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: brand.surface }}>
      <Box sx={{ backgroundColor: brand.navyDark, borderBottom: "1px solid rgba(217,168,78,0.35)" }}>
        <Container sx={{ py: 2 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <RouterLink to="/" aria-label="Volver al inicio">
              <LogoImage height={{ xs: 40, md: 52 }} />
            </RouterLink>
            <Stack direction="row" spacing={2} alignItems="center">
              <Stack
                component={RouterLink}
                to="/"
                direction="row"
                spacing={1}
                alignItems="center"
                sx={{ color: brand.goldLight, textDecoration: "none", "&:hover": { color: "#ffffff" } }}
              >
                <ArrowBackIcon fontSize="small" />
                <span>Volver al inicio</span>
              </Stack>
              <ThemeToggle />
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="md" sx={{ py: { xs: 7, md: 11 } }}>
        <Typography variant="h1" sx={{ color: brand.heading, fontSize: { xs: "2.8rem", md: "4rem" }, mb: 2 }}>
          Política de privacidad
        </Typography>
        <Box sx={{ width: 48, height: 2, backgroundColor: brand.gold, mb: 3 }} />
        <Typography sx={{ color: brand.muted, lineHeight: 1.8, mb: 6 }}>
          Esta página explica cómo se tratan los datos personales que compartís al
          usar el sitio de {firm.name}. Última actualización: octubre de 2026.
        </Typography>

        <Stack spacing={4.5}>
          {sections.map((section) => (
            <Box key={section.title}>
              <Typography variant="h4" sx={{ color: brand.heading, fontSize: { xs: "1.7rem", md: "2rem" }, mb: 1 }}>
                {section.title}
              </Typography>
              <Typography sx={{ color: brand.ink, lineHeight: 1.85 }}>{section.body}</Typography>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

export default Privacy;
