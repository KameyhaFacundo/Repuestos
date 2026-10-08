import { useState } from "react";
import { Box, Button, Checkbox, Container, FormControlLabel, Stack, Tab, Tabs, Typography } from "@mui/material";
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
  const [tab, setTab] = useState(0);
  const tabs = [{ label: "Documentación para divorciarte" }, ...guides.map((guide) => ({ label: guide.label }))];

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

          <Box sx={{ minWidth: 0 }}>
            <Tabs
              value={tab}
              onChange={(_, value) => setTab(value)}
              variant="scrollable"
              scrollButtons="auto"
              allowScrollButtonsMobile
              TabIndicatorProps={{ style: { backgroundColor: brand.gold, height: 3 } }}
              sx={{ borderBottom: `1px solid ${brand.line}`, mb: 4 }}
            >
              {tabs.map((item) => (
                <Tab
                  key={item.label}
                  label={item.label}
                  sx={{ color: brand.muted, fontWeight: 600, "&.Mui-selected": { color: brand.heading } }}
                />
              ))}
            </Tabs>

            {tab === 0 ? <DivorceChecklist /> : <StepsGuide guide={guides[tab - 1]} />}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Guides;
