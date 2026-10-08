import { Box, Button, Container, Stack, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import PlaceIcon from "@mui/icons-material/Place";
import CarCrashIcon from "@mui/icons-material/CarCrash";
import { brand } from "../../../theme/theme";
import { firm } from "../landingData";
import { LogoSymbol } from "./LogoImage";

const facts = [
  { icon: PhoneIcon, label: "Teléfono", value: firm.phone, href: `tel:${firm.phoneRaw}` },
  { icon: PlaceIcon, label: "Estudio", value: firm.address },
  { icon: CarCrashIcon, label: "Accidentes de tránsito", value: "Atención las 24 hs", href: firm.whatsappLink },
];

function Hero() {
  return (
    <Box
      id="inicio"
      component="section"
      sx={{
        position: "relative",
        backgroundColor: brand.navy,
        backgroundImage: `radial-gradient(ellipse at 80% 35%, rgba(217,168,78,0.16), transparent 55%), linear-gradient(180deg, ${brand.navy} 0%, ${brand.navyDark} 100%)`,
        color: "#ffffff",
        pt: { xs: 15, md: 19 },
        overflow: "hidden",
        scrollMarginTop: "88px",
        "@keyframes symbolIn": {
          from: { opacity: 0, transform: "translateY(18px)", clipPath: "inset(0 0 100% 0)" },
          to: { opacity: 1, transform: "none", clipPath: "inset(0 0 0 0)" },
        },
        "@media (prefers-reduced-motion: reduce)": { "& *": { animation: "none !important" } },
      }}
    >
      <Container sx={{ position: "relative", zIndex: 1 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.25fr 0.75fr" },
            gap: { xs: 6, md: 8 },
            alignItems: "center",
            pb: { xs: 8, md: 12 },
          }}
        >
          <Box>
            <LogoSymbol
              sx={{
                display: { xs: "block", md: "none" },
                width: 96,
                mb: 3,
                animation: "symbolIn 1.2s ease-out both",
              }}
            />
            <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 4 }}>
              <Box sx={{ width: 40, height: "1px", backgroundColor: brand.gold }} />
              <Typography sx={{ color: brand.goldLight, fontSize: "1rem", letterSpacing: "0.04em" }}>
                {firm.lawyer}, abogada
              </Typography>
            </Stack>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.8rem", sm: "4.2rem", md: "5.3rem" },
                color: "#ffffff",
                mb: 4,
              }}
            >
              Tu derecho,
              <br />
              bien defendido.
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "1.05rem", md: "1.18rem" },
                color: "rgba(255,255,255,0.8)",
                lineHeight: 1.75,
                mb: 5,
                maxWidth: 540,
              }}
            >
              Familia y sucesiones, derecho laboral, daños y perjuicios, contratos de
              alquiler y previsional, con atención personalizada y honorarios accesibles.
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Button
                href={firm.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                color="secondary"
                size="large"
                startIcon={<WhatsAppIcon />}
              >
                Escribime por WhatsApp
              </Button>
              <Button
                href="#areas"
                variant="outlined"
                size="large"
                sx={{
                  color: "#ffffff",
                  borderColor: "rgba(255,255,255,0.35)",
                  "&:hover": { borderColor: brand.gold, color: brand.goldLight },
                }}
              >
                Ver áreas de trabajo
              </Button>
            </Stack>
          </Box>

          <Box sx={{ display: { xs: "none", md: "block" }, position: "relative" }}>
            <Box
              sx={{
                position: "absolute",
                inset: -28,
                border: "1px solid rgba(217,168,78,0.3)",
                borderRadius: "200px 200px 4px 4px",
              }}
            />
            <Box
              sx={{
                position: "relative",
                borderRadius: "170px 170px 4px 4px",
                backgroundColor: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(217,168,78,0.18)",
                px: 6,
                pt: 12,
                pb: 8,
              }}
            >
              <LogoSymbol
                sx={{
                  width: "100%",
                  filter: "drop-shadow(0 12px 40px rgba(217,168,78,0.25))",
                  animation: "symbolIn 1.4s ease-out both",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Container>

      <Box sx={{ borderTop: "1px solid rgba(217,168,78,0.28)", backgroundColor: "rgba(0,0,0,0.18)" }}>
        <Container>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            }}
          >
            {facts.map((item, index) => {
              const Icon = item.icon;
              return (
                <Stack
                  key={item.label}
                  component={item.href ? "a" : "div"}
                  href={item.href}
                  direction="row"
                  spacing={2}
                  alignItems="center"
                  sx={{
                    py: 3,
                    px: { md: index === 0 ? 0 : 4 },
                    color: "inherit",
                    textDecoration: "none",
                    borderLeft: { md: index === 0 ? "none" : "1px solid rgba(217,168,78,0.2)" },
                    borderTop: { xs: index === 0 ? "none" : "1px solid rgba(217,168,78,0.2)", md: "none" },
                    "&:hover .fact-value": item.href ? { color: brand.goldLight } : {},
                  }}
                >
                  <Icon sx={{ color: brand.gold }} />
                  <Box>
                    <Typography sx={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.55)" }}>
                      {item.label}
                    </Typography>
                    <Typography className="fact-value" sx={{ fontWeight: 500, transition: "color .2s" }}>
                      {item.value}
                    </Typography>
                  </Box>
                </Stack>
              );
            })}
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Hero;
