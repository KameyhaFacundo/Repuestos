import { Box } from "@mui/material";
import { firm } from "../landingData";

function LogoImage({ height = 64, sx }) {
  return (
    <Box
      component="img"
      src="/logo-transparente.png"
      alt={firm.name}
      sx={{ height, width: "auto", display: "block", ...sx }}
    />
  );
}

// Solo el capitel del logo (recorte de la imagen, sin el nombre).
export function LogoSymbol({ sx }) {
  return (
    <Box
      aria-hidden
      sx={{ aspectRatio: "425 / 327", overflow: "hidden", position: "relative", ...sx }}
    >
      <Box
        component="img"
        src="/logo-transparente.png"
        alt=""
        sx={{ display: "block", width: "249.4%", maxWidth: "none", ml: "-73.4%", mt: "-5.9%" }}
      />
    </Box>
  );
}

export default LogoImage;
