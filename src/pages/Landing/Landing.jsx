import { Box, Fab, Tooltip } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PracticeAreas from "./components/PracticeAreas";
import About from "./components/About";
import Process from "./components/Process";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { firm } from "./landingData";

function Landing() {
  return (
    <Box>
      <Navbar />
      <Box component="main">
        <Hero />
        <PracticeAreas />
        <About />
        <Process />
        <Faq />
        <Contact />
      </Box>
      <Footer />

      <Tooltip title="Escribime por WhatsApp" placement="left">
        <Fab
          component="a"
          href={firm.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          sx={{
            position: "fixed",
            bottom: 24,
            right: 24,
            backgroundColor: "#25D366",
            color: "#ffffff",
            "&:hover": { backgroundColor: "#1ebe5b" },
          }}
        >
          <WhatsAppIcon />
        </Fab>
      </Tooltip>
    </Box>
  );
}

export default Landing;
