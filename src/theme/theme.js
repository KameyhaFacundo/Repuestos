import { createTheme } from "@mui/material/styles";

const navy = "#4E2249";
const navyLight = "#683A62";
const navyDark = "#2A1027";
const gold = "#D9A84E";
const goldLight = "#EBC77E";
const goldDark = "#B88A32";
const ink = "#2A1B2C";
const muted = "#5E5663";
const ivory = "#F7F2EA";

export const brand = {
  navy,
  navyLight,
  navyDark,
  gold,
  goldLight,
  goldDark,
  ink,
  muted,
  ivory,
};

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: navy,
      light: navyLight,
      dark: navyDark,
      contrastText: "#ffffff",
    },
    secondary: {
      main: gold,
      light: goldLight,
      dark: goldDark,
      contrastText: navyDark,
    },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
    text: {
      primary: ink,
      secondary: muted,
    },
    divider: "rgba(78,34,73, 0.12)",
  },
  typography: {
    fontFamily: '"Figtree", "Helvetica Neue", Arial, sans-serif',
    h1: {
      fontFamily: '"Cormorant Garamond", Georgia, serif',
      fontWeight: 600,
      lineHeight: 1.05,
      letterSpacing: "-0.015em",
    },
    h2: {
      fontFamily: '"Cormorant Garamond", Georgia, serif',
      fontWeight: 600,
      lineHeight: 1.18,
      letterSpacing: "-0.01em",
    },
    h3: {
      fontFamily: '"Cormorant Garamond", Georgia, serif',
      fontWeight: 600,
      lineHeight: 1.22,
    },
    h4: {
      fontFamily: '"Cormorant Garamond", Georgia, serif',
      fontWeight: 600,
    },
    h5: {
      fontFamily: '"Cormorant Garamond", Georgia, serif',
      fontWeight: 600,
    },
    h6: {
      fontFamily: '"Cormorant Garamond", Georgia, serif',
      fontWeight: 600,
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
      letterSpacing: "0.01em",
    },
    overline: {
      fontWeight: 600,
      letterSpacing: "0.22em",
    },
  },
  shape: {
    borderRadius: 4,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#ffffff",
          scrollBehavior: "smooth",
        },
        html: {
          scrollBehavior: "smooth",
        },
        "#root": {
          minHeight: "100vh",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          paddingInline: 24,
          paddingBlock: 10,
          borderRadius: 2,
        },
        containedSecondary: {
          color: navyDark,
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "lg",
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
  },
});

export default theme;
