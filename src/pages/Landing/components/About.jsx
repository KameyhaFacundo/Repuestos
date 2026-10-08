import { Box, Container, Stack, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { brand } from "../../../theme/theme";
import { aboutHighlights, firm } from "../landingData";
import SectionHeading from "./SectionHeading";

function About() {
  return (
    <Box
      id="nosotros"
      component="section"
      sx={{ py: { xs: 9, md: 14 }, backgroundColor: brand.surfaceAlt, scrollMarginTop: "88px" }}
    >
      <Container>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "minmax(0, 1fr)", md: "5fr 6fr" },
            gap: { xs: 7, md: 10 },
            alignItems: "center",
          }}
        >
          <Box sx={{ position: "relative" }}>
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                transform: "translate(16px, 16px)",
                border: `1px solid ${brand.gold}`,
                borderRadius: 1,
              }}
            />
            <Box
              sx={{
                position: "relative",
                aspectRatio: "4 / 5",
                borderRadius: 1,
                overflow: "hidden",
                backgroundColor: brand.navy,
                boxShadow: "0 30px 60px -32px rgba(42,16,39,0.6)",
              }}
            >
              <Box
                component="img"
                src="/perfil-abogada.png"
                alt={`${firm.lawyer}, abogada`}
                loading="lazy"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "50% 15%",
                  display: "block",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: 0,
                  px: 3,
                  pt: 10,
                  pb: 3,
                  background: `linear-gradient(180deg, transparent 0%, ${brand.navyDark} 100%)`,
                }}
              >
                <Typography variant="h4" sx={{ color: "#ffffff" }}>
                  {firm.lawyer}
                </Typography>
                <Typography sx={{ color: brand.goldLight, mt: 0.5 }}>Abogada · San Miguel de Tucumán</Typography>
              </Box>
            </Box>
          </Box>

          <Box>
            <SectionHeading title="El derecho, al alcance de las personas" sx={{ maxWidth: 560 }} />
            <Typography sx={{ color: brand.muted, lineHeight: 1.85, mb: 4, fontSize: "1.05rem", maxWidth: 560 }}>
              Soy María José Fernández, abogada en San Miguel de Tucumán. Me dedico a
              derecho de familia y sucesiones, laboral, daños y perjuicios, previsional y constitución de sociedades.
              Te escucho, te explico cada paso con claridad y te acompaño hasta resolver
              tu caso.
            </Typography>
            <Stack spacing={2}>
              {aboutHighlights.map((item) => (
                <Stack key={item} direction="row" spacing={2} alignItems="flex-start">
                  <Box
                    sx={{
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      backgroundColor: "rgba(217,168,78,0.2)",
                      color: brand.goldText,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      mt: "2px",
                    }}
                  >
                    <CheckIcon sx={{ fontSize: 16 }} />
                  </Box>
                  <Typography sx={{ color: brand.ink, lineHeight: 1.65 }}>{item}</Typography>
                </Stack>
              ))}
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default About;
