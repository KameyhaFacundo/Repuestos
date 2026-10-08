import { createContext, useContext } from "react";

export const ColorModeContext = createContext({ mode: "light", toggle: () => {} });

export const useColorMode = () => useContext(ColorModeContext);

export const STORAGE_KEY = "color-mode";

export function getInitialMode() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "light" || saved === "dark") return saved;
  } catch {
    // sin acceso a localStorage: se usa la preferencia del sistema
  }
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
