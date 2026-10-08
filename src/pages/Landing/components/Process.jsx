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
        backgroundColor: brand.surface,
        scrollMarginTop: "88px",
      }}
    >
      <Container>
        <SectionHeading
          title="Cómo trabajamos juntos"
          subtitle="Un camino claro, sin sorpresas, desde el primer mensaje."
          sx={{ mb: { xs: 6, md: 8 } }}
        />
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "minmax(0, 1fr)", md: "repeat(3, 1fr)" },
            gap: { xs: 5, md: 6 },
          }}
        >
          {processSteps.map((step, index) => (
            <Box key={step.title} sx={{ borderTop: `1px solid ${brand.line}`, pt: 3 }}>
              <Typography
                sx={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontSize: "3.6rem",
                  lineHeight: 1,
                  color: brand.goldText,
                  mb: 2,
                }}
              >
                {index + 1}
              </Typography>
              <Typography variant="h5" sx={{ color: brand.heading, fontSize: "1.7rem", mb: 1.25 }}>
                {step.title}
              </Typography>
              <Typography sx={{ color: brand.muted, lineHeight: 1.75, maxWidth: 360 }}>
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
