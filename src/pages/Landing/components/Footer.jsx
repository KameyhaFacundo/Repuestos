import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import PlaceIcon from "@mui/icons-material/Place";
import LogoImage from "./LogoImage";
import { brand } from "../../../theme/theme";
import { firm, navLinks, practiceAreas } from "../landingData";

const socials = [
  { icon: InstagramIcon, href: firm.instagram, label: "Instagram" },
  { icon: WhatsAppIcon, href: firm.whatsappLink, label: "WhatsApp" },
];

const columnTitle = { color: brand.goldLight, fontSize: "1rem", fontWeight: 600, mb: 2 };
const linkStyle = {
  color: "rgba(255,255,255,0.72)",
  fontSize: "0.95rem",
  textDecoration: "none",
  "&:hover": { color: brand.goldLight },
};

function Footer() {
  const year = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{ backgroundColor: brand.navyDark, color: "#ffffff", borderTop: "1px solid rgba(217,168,78,0.3)" }}
    >
      <Container sx={{ pt: { xs: 6, md: 8 }, pb: { xs: 13, md: 6 } }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "repeat(2, minmax(0, 1fr))", md: "2fr 1fr 1fr" },
            columnGap: 3,
            rowGap: { xs: 5, md: 5 },
          }}
        >
          <Stack
            sx={{
              gridColumn: { xs: "1 / -1", md: "auto" },
              alignItems: { xs: "center", md: "flex-start" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <LogoImage height={{ xs: 60, md: 72 }} sx={{ mb: 2 }} />
            <Typography sx={{ color: "rgba(255,255,255,0.68)", lineHeight: 1.7, maxWidth: 340 }}>
              {firm.lawyer} · Abogada. Asesoramiento legal en San Miguel de Tucumán.
            </Typography>

            <Stack spacing={1.25} sx={{ mt: 3, alignItems: { xs: "center", md: "flex-start" } }}>
              <Stack
                component="a"
                href={`tel:${firm.phoneRaw}`}
                direction="row"
                spacing={1}
                alignItems="center"
                sx={{ ...linkStyle, color: "#ffffff" }}
              >
                <PhoneIcon sx={{ fontSize: 18, color: brand.gold }} />
                <span>{firm.phone}</span>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="flex-start" sx={{ color: "rgba(255,255,255,0.72)", fontSize: "0.95rem" }}>
                <PlaceIcon sx={{ fontSize: 18, color: brand.gold, mt: "2px" }} />
                <span>{firm.address}</span>
              </Stack>
            </Stack>

            <Stack direction="row" spacing={1.5} sx={{ mt: 3 }}>
              {socials.map((item) => (
                <Box
                  key={item.label}
                  component="a"
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  sx={{
                    width: 44,
                    height: 44,
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
          </Stack>

          <Box>
            <Typography sx={columnTitle}>Navegación</Typography>
            <Stack spacing={1.5}>
              {navLinks.map((link) => (
                <Typography key={link.href} component="a" href={link.href} sx={linkStyle}>
                  {link.label}
                </Typography>
              ))}
            </Stack>
          </Box>

          <Box>
            <Typography sx={columnTitle}>Áreas</Typography>
            <Stack spacing={1.5}>
              {practiceAreas.slice(0, 5).map((area) => (
                <Typography key={area.title} component="a" href="#areas" sx={linkStyle}>
                  {area.title}
                </Typography>
              ))}
            </Stack>
          </Box>
        </Box>

        <Divider sx={{ my: { xs: 4, md: 5 }, borderColor: "rgba(255,255,255,0.12)" }} />

        <Stack
          direction={{ xs: "column-reverse", sm: "row" }}
          spacing={{ xs: 1.5, sm: 2 }}
          justifyContent="space-between"
          alignItems="center"
          textAlign={{ xs: "center", sm: "left" }}
        >
          <Typography sx={{ color: "rgba(255,255,255,0.5)", fontSize: "0.82rem" }}>
            © {year} {firm.name} · {firm.lawyer}. Todos los derechos reservados.
          </Typography>
          <Typography component={RouterLink} to="/privacidad" sx={{ ...linkStyle, fontSize: "0.85rem" }}>
            Política de privacidad
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;
