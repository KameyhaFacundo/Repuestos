import { Box, Container, Typography } from "@mui/material";
import { brand } from "../../../theme/theme";
import { processSteps } from "../landingData";
import SectionHeading from "./SectionHeading";

function Process() {
  return (
    <Box
      id="proceso"
      component="section"
      sx={{
        py: { xs: 9, md: 14 },
        backgroundColor: brand.navy,
        backgroundImage: `linear-gradient(180deg, ${brand.navy} 0%, ${brand.navyDark} 100%)`,
        scrollMarginTop: "88px",
      }}
    >
      <Container>
        <SectionHeading
          light
          title="Cómo trabajamos juntos"
          subtitle="Un camino claro, sin sorpresas, desde el primer mensaje."
          sx={{ mb: { xs: 6, md: 8 } }}
        />
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: { xs: 5, md: 6 },
          }}
        >
          {processSteps.map((step, index) => (
            <Box key={step.title} sx={{ borderTop: "1px solid rgba(217,168,78,0.4)", pt: 3 }}>
              <Typography
                sx={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontSize: "3.6rem",
                  lineHeight: 1,
                  color: brand.gold,
                  mb: 2,
                }}
              >
                {index + 1}
              </Typography>
              <Typography variant="h5" sx={{ color: "#ffffff", fontSize: "1.7rem", mb: 1.25 }}>
                {step.title}
              </Typography>
              <Typography sx={{ color: "rgba(255,255,255,0.74)", lineHeight: 1.75, maxWidth: 360 }}>
                {step.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Process;
