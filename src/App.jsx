import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Finder from "./sections/Finder";
import Products from "./sections/Products";
import Reasons from "./sections/Reasons";
import Location from "./sections/Location";
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
        <Finder />
        <Products />
        <Reasons />
        <Location />
      </main>
      <Footer />
    </>
  );
}

export default App;
