import { Box, Container, Stack, Typography } from "@mui/material";
import GavelIcon from "@mui/icons-material/Gavel";
import WorkIcon from "@mui/icons-material/Work";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import CarCrashIcon from "@mui/icons-material/CarCrash";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { brand } from "../../../theme/theme";
import { firm, practiceAreas } from "../landingData";
import SectionHeading from "./SectionHeading";

const icons = {
  familia: FamilyRestroomIcon,
  divorcio: HeartBrokenIcon,
  laboral: WorkIcon,
  sucesiones: AccountBalanceIcon,
  alquiler: HomeWorkIcon,
  danios: CarCrashIcon,
};

function PracticeAreas() {
  return (
    <Box
      id="areas"
      component="section"
      sx={{ py: { xs: 9, md: 14 }, backgroundColor: brand.ivory, scrollMarginTop: "88px" }}
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
            title="¿En qué puedo ayudarte?"
            subtitle="Tocá el área de tu consulta y me escribís directo por WhatsApp, con el mensaje ya armado."
            sx={{ position: { md: "sticky" }, top: { md: 120 } }}
          />

          <Box sx={{ borderTop: `1px solid ${brand.line}` }}>
            {practiceAreas.map((area) => {
              const Icon = icons[area.icon] || GavelIcon;
              const href = `${firm.whatsappLink}?text=${encodeURIComponent(
                `Hola María José, quiero consultar por: ${area.title}.`
              )}`;
              return (
                <Stack
                  key={area.title}
                  component="a"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  direction="row"
                  spacing={{ xs: 2, md: 3.5 }}
                  alignItems="flex-start"
                  sx={{
                    py: { xs: 3, md: 3.5 },
                    px: { xs: 1, md: 2 },
                    color: "inherit",
                    textDecoration: "none",
                    borderBottom: `1px solid ${brand.line}`,
                    transition: "background-color .25s ease",
                    "&:hover": { backgroundColor: brand.surfaceAlt },
                    "&:hover .area-arrow": { transform: "translate(3px,-3px)", color: brand.heading },
                    "&:hover .area-title": { color: brand.goldText },
                    "&:focus-visible": { outline: `2px solid ${brand.gold}`, outlineOffset: -2 },
                  }}
                >
                  <Icon sx={{ color: brand.gold, fontSize: 30, mt: 0.6 }} />
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      className="area-title"
                      variant="h4"
                      sx={{ color: brand.heading, fontSize: { xs: "1.6rem", md: "2rem" }, mb: 0.75, transition: "color .25s" }}
                    >
                      {area.title}
                    </Typography>
                    <Typography sx={{ color: brand.muted, lineHeight: 1.7, maxWidth: 520 }}>
                      {area.description}
                    </Typography>
                  </Box>
                  <ArrowOutwardIcon
                    className="area-arrow"
                    sx={{ color: brand.gold, mt: 1, transition: "transform .25s ease, color .25s" }}
                  />
                </Stack>
              );
            })}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default PracticeAreas;
