// Modo claro/oscuro: el tema vive en <html data-theme> y se recuerda en localStorage.
const KEY = "theme";

export const getTheme = () => (document.documentElement.dataset.theme === "dark" ? "dark" : "light");

export function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) {
    const bg = getComputedStyle(document.documentElement).getPropertyValue("--c-bg").trim();
    if (bg) meta.setAttribute("content", bg);
  }
  try {
    localStorage.setItem(KEY, theme);
  } catch {
    /* sin almacenamiento: el cambio vale solo para esta visita */
  }
}
