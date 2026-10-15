import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Rubros from "./sections/Rubros";
import Work from "./sections/Work";
import Pricing from "./sections/Pricing";
import Process from "./sections/Process";
import Differentials from "./sections/Differentials";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido">
        <Hero />
        <Rubros />
        <Work />
        <Pricing />
        <Process />
        <Differentials />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
