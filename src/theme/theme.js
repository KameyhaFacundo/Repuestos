import { createTheme } from "@mui/material/styles";

const navy = "#4E2249";
const navyLight = "#683A62";
const navyDark = "#2A1027";
const gold = "#D9A84E";
const goldLight = "#EBC77E";
const goldDark = "#B88A32";

// Colores fijos: las secciones moradas se ven igual en modo claro y oscuro.
// Los tokens semánticos (surface, heading, ink...) cambian con el modo vía variables CSS.
export const brand = {
  navy,
  navyLight,
  navyDark,
  gold,
  goldLight,
  goldDark,
  surface: "var(--c-surface)",
  surfaceAlt: "var(--c-surface-alt)",
  heading: "var(--c-heading)",
  ink: "var(--c-ink)",
  muted: "var(--c-muted)",
  line: "var(--c-line)",
  goldText: "var(--c-gold-text)",
  heroA: "var(--c-hero-a)",
  heroB: "var(--c-hero-b)",
  bar: "var(--c-bar)",
  ivory: "var(--c-surface)",
};

const tokens = {
  light: {
    "--c-surface": "#F7F2EA",
    "--c-surface-alt": "#FFFFFF",
    "--c-heading": navy,
    "--c-ink": "#2A1B2C",
    "--c-muted": "#5E5663",
    "--c-line": "rgba(78,34,73,0.18)",
    "--c-gold-text": "#A56E36",
    "--c-hero-a": "#FFFFFF",
    "--c-hero-b": "#F3ECE2",
    "--c-bar": "rgba(78,34,73,0.05)",
  },
  dark: {
    "--c-surface": "#2E1330",
    "--c-surface-alt": "#3A1A3C",
    "--c-heading": "#F4E6C8",
    "--c-ink": "#F1E8F1",
    "--c-muted": "#C9BBCB",
    "--c-line": "rgba(217,168,78,0.28)",
    "--c-gold-text": "#E3B75F",
    "--c-hero-a": "#4E2249",
    "--c-hero-b": "#2E1330",
    "--c-bar": "rgba(0,0,0,0.18)",
  },
};

const headingFont = '"Cormorant Garamond", Georgia, serif';

export function getTheme(mode = "light") {
  const dark = mode === "dark";
  return createTheme({
    palette: {
      mode,
      primary: {
        main: dark ? goldLight : navy,
        light: navyLight,
        dark: navyDark,
        contrastText: dark ? navyDark : "#ffffff",
      },
      secondary: {
        main: gold,
        light: goldLight,
        dark: goldDark,
        contrastText: navyDark,
      },
      background: {
        default: dark ? "#2E1330" : "#ffffff",
        paper: dark ? "#3A1A3C" : "#ffffff",
      },
      text: {
        primary: dark ? "#F1E8F1" : "#2A1B2C",
        secondary: dark ? "#C9BBCB" : "#5E5663",
      },
      divider: dark ? "rgba(217,168,78,0.28)" : "rgba(78, 34, 73, 0.12)",
    },
    typography: {
      fontFamily: '"Figtree", "Helvetica Neue", Arial, sans-serif',
      h1: { fontFamily: headingFont, fontWeight: 600, lineHeight: 1.05, letterSpacing: "-0.015em" },
      h2: { fontFamily: headingFont, fontWeight: 600, lineHeight: 1.18, letterSpacing: "-0.01em" },
      h3: { fontFamily: headingFont, fontWeight: 600, lineHeight: 1.22 },
      h4: { fontFamily: headingFont, fontWeight: 600 },
      h5: { fontFamily: headingFont, fontWeight: 600 },
      h6: { fontFamily: headingFont, fontWeight: 600 },
      button: { textTransform: "none", fontWeight: 600, letterSpacing: "0.01em" },
      overline: { fontWeight: 600, letterSpacing: "0.22em" },
    },
    shape: { borderRadius: 4 },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          ":root": tokens.light,
          ':root[data-theme="dark"]': tokens.dark,
          body: { scrollBehavior: "smooth", overflowX: "clip" },
          html: { scrollBehavior: "smooth", overflowX: "clip" },
          "#root": { minHeight: "100vh" },
        },
      },
      MuiButton: {
        defaultProps: { disableElevation: true },
        styleOverrides: {
          root: { paddingInline: 24, paddingBlock: 10, borderRadius: 2 },
          containedSecondary: { color: navyDark },
        },
      },
      MuiContainer: { defaultProps: { maxWidth: "lg" } },
      MuiPaper: { styleOverrides: { root: { backgroundImage: "none" } } },
    },
  });
}

const theme = getTheme("light");

export default theme;
