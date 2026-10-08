import { Box, Button, Container, Stack, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { brand } from "../../../theme/theme";
import { firm } from "../landingData";

function Urgency() {
  const whatsapp = `${firm.whatsappLink}?text=${encodeURIComponent(
    "Hola María José, tuve un accidente de tránsito y necesito asesoramiento."
  )}`;

  return (
    <Box
      component="section"
      aria-label="Accidentes de tránsito"
      sx={{
        backgroundColor: brand.gold,
        backgroundImage: `linear-gradient(100deg, ${brand.goldDark} 0%, ${brand.gold} 45%, ${brand.goldLight} 100%)`,
        color: brand.navyDark,
        py: { xs: 6, md: 7 },
      }}
    >
      <Container>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 3, md: 6 }}
          alignItems={{ xs: "flex-start", md: "center" }}
          justifyContent="space-between"
        >
          <Box sx={{ maxWidth: 640 }}>
            <Typography
              variant="h3"
              sx={{ fontSize: { xs: "2.2rem", md: "3rem" }, color: brand.navyDark, mb: 1 }}
            >
              ¿Tuviste un accidente de tránsito?
            </Typography>
            <Typography sx={{ fontSize: "1.1rem", lineHeight: 1.6, color: "rgba(42,16,39,0.85)" }}>
              Atención las 24 horas. No firmes nada ni aceptes ofrecimientos sin
              asesorarte primero: escribime o llamame ahora.
            </Typography>
          </Box>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ width: { xs: "100%", md: "auto" }, flexShrink: 0 }}>
            <Button
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              size="large"
              startIcon={<WhatsAppIcon />}
              sx={{
                backgroundColor: brand.navyDark,
                color: "#ffffff",
                "&:hover": { backgroundColor: brand.navy },
              }}
            >
              WhatsApp 24 hs
            </Button>
            <Button
              href={`tel:${firm.phoneRaw}`}
              variant="outlined"
              size="large"
              startIcon={<PhoneIcon />}
              sx={{
                color: brand.navyDark,
                borderColor: brand.navyDark,
                "&:hover": { borderColor: brand.navyDark, backgroundColor: "rgba(42,16,39,0.08)" },
              }}
            >
              {firm.phone}
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default Urgency;
