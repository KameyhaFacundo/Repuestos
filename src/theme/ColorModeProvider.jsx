import { useEffect, useMemo, useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { getTheme } from "./theme";
import { ColorModeContext, STORAGE_KEY, getInitialMode } from "./colorMode";

function ColorModeProvider({ children }) {
  const [mode, setMode] = useState(getInitialMode);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
    try {
      localStorage.setItem(STORAGE_KEY, mode);
    } catch {
      // sin acceso a localStorage: el modo solo dura la sesión
    }
  }, [mode]);

  const value = useMemo(
    () => ({ mode, toggle: () => setMode((prev) => (prev === "dark" ? "light" : "dark")) }),
    [mode]
  );
  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ColorModeContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default ColorModeProvider;
