import { Box, Button } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { brand } from "../../../theme/theme";
import { firm } from "../landingData";

// Barra fija inferior solo en celulares: llamar o escribir con un toque.
function MobileBar() {
  return (
    <Box
      sx={{
        display: { xs: "grid", md: "none" },
        gridTemplateColumns: "1fr 1fr",
        gap: 1,
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1200,
        p: 1.25,
        backgroundColor: brand.navyDark,
        borderTop: "1px solid rgba(217,168,78,0.4)",
      }}
    >
      <Button
        href={`tel:${firm.phoneRaw}`}
        variant="outlined"
        startIcon={<PhoneIcon />}
        sx={{ color: "#ffffff", borderColor: "rgba(255,255,255,0.4)" }}
      >
        Llamar
      </Button>
      <Button
        href={firm.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        variant="contained"
        startIcon={<WhatsAppIcon />}
        sx={{ backgroundColor: "#25D366", color: "#08210f", "&:hover": { backgroundColor: "#1ebe5b" } }}
      >
        WhatsApp
      </Button>
    </Box>
  );
}

export default MobileBar;
