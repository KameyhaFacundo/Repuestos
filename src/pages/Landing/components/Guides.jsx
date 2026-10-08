import { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Stack,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { brand } from "../../../theme/theme";
import { divorceChecklist, firm, guides } from "../landingData";
import SectionHeading from "./SectionHeading";

const whatsappLink = (text) => `${firm.whatsappLink}?text=${encodeURIComponent(text)}`;

function DivorceChecklist() {
  const [checked, setChecked] = useState({});
  const have = divorceChecklist.filter((item) => checked[item]);
  const missing = divorceChecklist.filter((item) => !checked[item]);

  const message = [
    "Hola María José, quiero consultar por un divorcio.",
    have.length ? `Ya tengo: ${have.join("; ")}.` : "Todavía no reuní documentación.",
    missing.length ? `Me falta: ${missing.join("; ")}.` : "",
  ]
    .filter(Boolean)
    .join("\n");

  return (
    <Box>
      <Typography sx={{ color: brand.muted, lineHeight: 1.75, mb: 2, maxWidth: 560 }}>
        Marcá lo que ya tenés. Si algo te falta, te ayudo a conseguirlo.
      </Typography>
      <Stack spacing={0.5}>
        {divorceChecklist.map((item) => (
          <FormControlLabel
            key={item}
            label={item}
            control={
              <Checkbox
                checked={!!checked[item]}
                onChange={(event) => setChecked((prev) => ({ ...prev, [item]: event.target.checked }))}
                sx={{ color: brand.gold, "&.Mui-checked": { color: brand.goldText } }}
              />
            }
            sx={{ "& .MuiFormControlLabel-label": { color: brand.ink, fontSize: "1.02rem" } }}
          />
        ))}
      </Stack>
      <Typography sx={{ color: brand.goldText, fontWeight: 600, mt: 2, mb: 3 }}>
        Tenés {have.length} de {divorceChecklist.length}
      </Typography>
      <Button
        href={whatsappLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        variant="contained"
        size="large"
        startIcon={<WhatsAppIcon />}
      >
        Enviarle esto a María José
      </Button>
    </Box>
  );
}

function StepsGuide({ guide }) {
  return (
    <Box>
      <Typography sx={{ color: brand.muted, lineHeight: 1.75, mb: 3, maxWidth: 560 }}>{guide.intro}</Typography>
      <Stack spacing={2.5} component="ol" sx={{ listStyle: "none", p: 0, m: 0, mb: 3.5 }}>
        {guide.steps.map((step, index) => (
          <Stack key={step} component="li" direction="row" spacing={2} alignItems="flex-start">
            <Typography
              sx={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontSize: "2rem",
                lineHeight: 1,
                color: brand.gold,
                minWidth: 28,
              }}
            >
              {index + 1}
            </Typography>
            <Typography sx={{ color: brand.ink, lineHeight: 1.65, pt: 0.3 }}>{step}</Typography>
          </Stack>
        ))}
      </Stack>
      <Button
        href={whatsappLink(guide.message)}
        target="_blank"
        rel="noopener noreferrer"
        variant="contained"
        size="large"
        startIcon={<WhatsAppIcon />}
      >
        Consultar mi caso
      </Button>
    </Box>
  );
}

function Guides() {
  const [open, setOpen] = useState(0);
  const items = [
    { title: "Documentación para divorciarte", content: <DivorceChecklist /> },
    ...guides.map((guide) => ({ title: guide.label, content: <StepsGuide guide={guide} /> })),
  ];

  return (
    <Box
      id="guias"
      component="section"
      sx={{ py: { xs: 9, md: 14 }, backgroundColor: brand.surfaceAlt, scrollMarginTop: "88px" }}
    >
      <Container>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "minmax(0, 1fr)", md: "4fr 7fr" },
            gap: { xs: 5, md: 10 },
            alignItems: "start",
          }}
        >
          <SectionHeading
            title="Antes de consultar, ya podés avanzar"
            subtitle="Guías cortas y una lista de documentos para que llegues preparado. Son orientativas: cada caso es distinto."
            sx={{ position: { md: "sticky" }, top: { md: 120 } }}
          />

          <Box sx={{ borderTop: `1px solid ${brand.line}` }}>
            {items.map((item, index) => (
              <Accordion
                key={item.title}
                elevation={0}
                disableGutters
                expanded={open === index}
                onChange={(_, isOpen) => setOpen(isOpen ? index : -1)}
                sx={{
                  borderBottom: `1px solid ${brand.line}`,
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
                    sx={{ color: brand.heading, fontSize: { xs: "1.3rem", md: "1.5rem" }, pr: 2 }}
                  >
                    {item.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ px: 0, pt: 0, pb: 4 }}>{item.content}</AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Guides;
