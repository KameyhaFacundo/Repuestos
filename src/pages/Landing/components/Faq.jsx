import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { brand } from "../../../theme/theme";
import { faqs } from "../landingData";
import SectionHeading from "./SectionHeading";

function Faq() {
  return (
    <Box
      id="faq"
      component="section"
      sx={{ py: { xs: 9, md: 14 }, backgroundColor: brand.ivory, scrollMarginTop: "88px" }}
    >
      <Container>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "4fr 7fr" },
            gap: { xs: 5, md: 10 },
            alignItems: "start",
          }}
        >
          <Box sx={{ position: { md: "sticky" }, top: { md: 120 } }}>
            <SectionHeading
              title="Preguntas frecuentes"
              subtitle="Lo que más me consultan antes de empezar. Si tu duda no está acá, escribime."
            />
            <Button href="#contacto" variant="contained" size="large">
              Hacer una consulta
            </Button>
          </Box>

          <Box sx={{ borderTop: "1px solid rgba(78,34,73,0.18)" }}>
            {faqs.map((item, index) => (
              <Accordion
                key={item.question}
                elevation={0}
                disableGutters
                defaultExpanded={index === 0}
                sx={{
                  borderBottom: "1px solid rgba(78,34,73,0.18)",
                  "&:before": { display: "none" },
                  backgroundColor: "transparent",
                  "& .MuiAccordionSummary-expandIconWrapper": { transition: "transform .25s" },
                  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": { transform: "rotate(45deg)" },
                }}
              >
                <AccordionSummary
                  expandIcon={<AddIcon sx={{ color: brand.gold }} />}
                  sx={{ px: 0, "& .MuiAccordionSummary-content": { my: 2.5 } }}
                >
                  <Typography
                    variant="h6"
                    sx={{ color: brand.navy, fontSize: { xs: "1.3rem", md: "1.45rem" }, pr: 2 }}
                  >
                    {item.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ px: 0, pt: 0, pb: 3 }}>
                  <Typography sx={{ color: brand.muted, lineHeight: 1.8, maxWidth: 560 }}>
                    {item.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Faq;
