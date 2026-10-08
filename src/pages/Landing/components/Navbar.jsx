import { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Button,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LogoImage from "./LogoImage";
import { brand } from "../../../theme/theme";
import { navLinks } from "../landingData";

function Logo() {
  return <LogoImage height={72} />;
}

function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || isMobile;

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: solid ? brand.navyDark : "transparent",
                boxShadow: solid ? "0 1px 0 rgba(217,168,78,0.35)" : "none",
        transition: "background-color 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      <Container>
        <Toolbar disableGutters sx={{ minHeight: 76, justifyContent: "space-between" }}>
          <Logo />

          {!isMobile && (
            <Stack direction="row" spacing={0.5} alignItems="center">
              {navLinks.map((link) => (
                <Button
                  key={link.href}
                  href={link.href}
                  sx={{
                    color: "#ffffff",
                    fontWeight: 500,
                    px: 1.5,
                    "&:hover": { color: brand.gold, backgroundColor: "transparent" },
                  }}
                >
                  {link.label}
                </Button>
              ))}
              <Button
                href="#contacto"
                variant="contained"
                color="secondary"
                sx={{ ml: 2 }}
              >
                Consultar
              </Button>
            </Stack>
          )}

          {isMobile && (
            <IconButton onClick={() => setOpen(true)} sx={{ color: "#ffffff" }}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </Container>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        slotProps={{ paper: { sx: { backgroundColor: brand.navyDark } } }}
      >
        <Box sx={{ width: 280, p: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
            <Logo />
            <IconButton onClick={() => setOpen(false)} sx={{ color: "#ffffff" }}>
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {navLinks.map((link) => (
              <ListItem key={link.href} disablePadding>
                <ListItemButton
                  component="a"
                  href={link.href}
                  onClick={() => setOpen(false)}
                >
                  <ListItemText
                    primary={link.label}
                    slotProps={{ primary: { sx: { color: "#ffffff", fontWeight: 500 } } }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}

export default Navbar;
