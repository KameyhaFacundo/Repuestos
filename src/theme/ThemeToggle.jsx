import { IconButton, Tooltip } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeIcon from "@mui/icons-material/LightModeOutlined";
import { useColorMode } from "./colorMode";
import { brand } from "./theme";

function ThemeToggle({ sx }) {
  const { mode, toggle } = useColorMode();
  const label = mode === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro";

  return (
    <Tooltip title={label}>
      <IconButton
        onClick={toggle}
        aria-label={label}
        sx={{ color: brand.goldLight, "&:hover": { color: "#ffffff" }, ...sx }}
      >
        {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
    </Tooltip>
  );
}

export default ThemeToggle;
