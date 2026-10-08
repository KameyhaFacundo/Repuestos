import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LogoImage from "./LogoImage";
import { brand } from "../../../theme/theme";
import { firm, navLinks, practiceAreas } from "../landingData";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <Box component="footer" sx={{ backgroundColor: brand.navyDark, color: "#ffffff", borderTop: "1px solid rgba(217,168,78,0.3)" }}>
      <Container sx={{ pt: { xs: 6, md: 8 }, pb: { xs: 12, md: 8 } }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "minmax(0, 1fr)", sm: "1fr 1fr", md: "2fr 1fr 1fr" },
            gap: 5,
          }}
        >
          <Box>
            <LogoImage height={{ xs: 56, md: 72 }} sx={{ mb: 2 }} />
            <Typography sx={{ color: "rgba(255,255,255,0.62)", lineHeight: 1.7, maxWidth: 360 }}>
              María José Fernández · Abogada. Asesoramiento legal integral en San Miguel de Tucumán.
            </Typography>
            <Stack direction="row" spacing={1.5} sx={{ mt: 3 }}>
              {[
                { icon: InstagramIcon, href: firm.instagram, label: "Instagram" },
                { icon: WhatsAppIcon, href: firm.whatsappLink, label: "WhatsApp" },
              ].map((item) => (
                <Box
                  key={item.label}
                  component="a"
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  sx={{
                    width: 42,
                    height: 42,
                    borderRadius: "50%",
                    border: "1px solid rgba(217,168,78,0.5)",
                    color: brand.goldLight,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "background-color .2s, color .2s",
                    "&:hover": { backgroundColor: brand.gold, color: brand.navyDark },
                  }}
                >
                  <item.icon fontSize="small" />
                </Box>
              ))}
            </Stack>
          </Box>

          <Box>
            <Typography
              sx={{
                color: brand.goldLight,
                fontSize: "1rem",
                fontWeight: 600,
                mb: 2,
              }}
            >
              Navegación
            </Typography>
            <Stack spacing={1.2}>
              {navLinks.map((link) => (
                <Typography
                  key={link.href}
                  component="a"
                  href={link.href}
                  sx={{
                    color: "rgba(255,255,255,0.7)",
                    fontSize: "0.92rem",
                    textDecoration: "none",
                    "&:hover": { color: brand.goldLight },
                  }}
                >
                  {link.label}
                </Typography>
              ))}
            </Stack>
          </Box>

          <Box>
            <Typography
              sx={{
                color: brand.goldLight,
                fontSize: "1rem",
                fontWeight: 600,
                mb: 2,
              }}
            >
              Áreas
            </Typography>
            <Stack spacing={1.2}>
              {practiceAreas.slice(0, 5).map((area) => (
                <Typography key={area.title} sx={{ color: "rgba(255,255,255,0.7)", fontSize: "0.92rem" }}>
                  {area.title}
                </Typography>
              ))}
            </Stack>
          </Box>
        </Box>

        <Divider sx={{ my: 5, borderColor: "rgba(255,255,255,0.12)" }} />

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
        >
          <Typography sx={{ color: "rgba(255,255,255,0.5)", fontSize: "0.82rem" }}>
            © {year} {firm.name} · {firm.lawyer}. Todos los derechos reservados.
          </Typography>
          <Typography
            component={RouterLink}
            to="/privacidad"
            sx={{
              color: "rgba(255,255,255,0.6)",
              fontSize: "0.82rem",
              textDecoration: "none",
              "&:hover": { color: brand.goldLight },
            }}
          >
            Política de privacidad
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;
