import { Box, Button, Container, Stack, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import PlaceIcon from "@mui/icons-material/Place";
import CarCrashIcon from "@mui/icons-material/CarCrash";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { brand } from "../../../theme/theme";
import { firm, situations } from "../landingData";
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
        backgroundColor: brand.heroA,
        backgroundImage: `radial-gradient(ellipse at 80% 35%, rgba(217,168,78,0.16), transparent 55%), linear-gradient(180deg, ${brand.heroA} 0%, ${brand.heroB} 100%)`,
        color: brand.ink,
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
            gridTemplateColumns: { xs: "minmax(0, 1fr)", md: "1.25fr 0.75fr" },
            gap: { xs: 6, md: 8 },
            alignItems: "center",
            pb: { xs: 6, md: 12 },
          }}
        >
          <Box>
            <Box
              sx={{
                display: { xs: "inline-block", md: "none" },
                backgroundColor: brand.navy,
                borderRadius: 1,
                p: 1.5,
                mb: 3,
              }}
            >
              <LogoSymbol sx={{ width: 72, animation: "symbolIn 1.2s ease-out both" }} />
            </Box>
            <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 4 }}>
              <Box sx={{ width: 40, height: "1px", backgroundColor: brand.gold }} />
              <Typography sx={{ color: brand.goldText, fontSize: "1rem", letterSpacing: "0.04em" }}>
                {firm.lawyer}, abogada
              </Typography>
            </Stack>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.8rem", sm: "4.2rem", md: "5.3rem" },
                color: brand.heading,
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
                color: brand.muted,
                lineHeight: 1.75,
                mb: 5,
                maxWidth: 540,
              }}
            >
              Familia y sucesiones, derecho laboral, daños y perjuicios, contratos de
              alquiler, constitución de sociedades y previsional, con atención
              personalizada y honorarios accesibles.
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 1, sm: 2 }}>
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
                endIcon={<ArrowDownwardIcon fontSize="small" />}
                sx={{
                  color: brand.heading,
                  borderColor: { xs: "transparent", sm: brand.line },
                  justifyContent: { xs: "center", sm: "center" },
                  "&:hover": { borderColor: brand.gold, color: brand.goldText, backgroundColor: "transparent" },
                }}
              >
                Ver áreas de trabajo
              </Button>
            </Stack>

            <Box sx={{ mt: { xs: 5, md: 6 }, pt: { xs: 4, md: 0 }, borderTop: { xs: `1px solid ${brand.line}`, md: "none" } }}>
              <Typography variant="h5" sx={{ color: brand.heading, fontSize: { xs: "1.6rem", md: "1.5rem" }, mb: 0.5 }}>
                ¿Cuál es tu situación?
              </Typography>
              <Typography sx={{ color: brand.muted, fontSize: "0.95rem", mb: 2.5 }}>
                Tocá una opción y me escribís directo por WhatsApp.
              </Typography>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "repeat(2, minmax(0, 1fr))", sm: "repeat(3, minmax(0, 1fr))" },
                  gap: 1.25,
                  maxWidth: 560,
                }}
              >
                {situations.map((item) => (
                  <Box
                    key={item.label}
                    component="a"
                    href={`${firm.whatsappLink}?text=${encodeURIComponent(`Hola María José, ${item.message}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 1,
                      minHeight: 58,
                      px: 1.75,
                      py: 1,
                      borderRadius: 1,
                      border: `1px solid ${brand.line}`,
                      backgroundColor: brand.surfaceAlt,
                      color: brand.heading,
                      fontSize: "0.95rem",
                      fontWeight: 500,
                      lineHeight: 1.25,
                      textDecoration: "none",
                      transition: "border-color .2s, transform .2s",
                      "&:hover": { borderColor: brand.gold },
                      "&:active": { transform: "scale(0.98)" },
                      "&:hover .tile-arrow": { color: brand.goldText },
                    }}
                  >
                    <span>{item.label}</span>
                    <ArrowOutwardIcon className="tile-arrow" sx={{ fontSize: 18, color: brand.gold, flexShrink: 0 }} />
                  </Box>
                ))}
              </Box>
            </Box>
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
                backgroundColor: brand.navy,
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

      <Box sx={{ borderTop: `1px solid ${brand.line}`, backgroundColor: brand.bar }}>
        <Container>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "minmax(0, 1fr)", md: "repeat(3, 1fr)" },
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
                    display: { xs: item.label === "Teléfono" ? "none" : "flex", md: "flex" },
                    py: { xs: 2.25, md: 3 },
                    px: { md: index === 0 ? 0 : 4 },
                    color: "inherit",
                    textDecoration: "none",
                    borderLeft: { md: index === 0 ? "none" : `1px solid ${brand.line}` },
                    borderTop: { xs: index === 1 ? "none" : `1px solid ${brand.line}`, md: "none" },
                    "&:hover .fact-value": item.href ? { color: brand.goldText } : {},
                  }}
                >
                  <Icon sx={{ color: brand.goldText }} />
                  <Box>
                    <Typography sx={{ fontSize: "0.82rem", color: brand.muted }}>
                      {item.label}
                    </Typography>
                    <Typography className="fact-value" sx={{ fontWeight: 500, color: brand.ink, transition: "color .2s" }}>
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
