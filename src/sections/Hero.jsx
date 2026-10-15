import Button from "../components/ui/Button";
import { ArrowIcon, WhatsAppIcon } from "../components/ui/Icons";
import { BrowserFrame, PhoneFrame } from "../components/mockups/Frames";
import LawScreen from "../components/mockups/screens/LawScreen";
import RetailScreen from "../components/mockups/screens/RetailScreen";
import ServiceScreen from "../components/mockups/screens/ServiceScreen";
import { climaData, shopData } from "../components/mockups/screenData";
import { plans } from "../config/site";
import { formatPrice, whatsappUrl } from "../lib/format";

const startPrice = formatPrice(plans[0].price);

function Hero() {
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <div className="wrap hero__grid">
        <div className="hero__copy">
          <p className="tag hero__in" style={{ "--i": 0 }}>
            <span className="tag__dot" aria-hidden="true" />
            Desarrollo web para profesionales y negocios
          </p>

          <h1 id="hero-title" className="hero__in" style={{ "--i": 1 }}>
            Tu negocio merece una web que esté <em>a la altura.</em>
          </h1>

          <p className="hero__lead hero__in" style={{ "--i": 2 }}>
            Diseño y desarrollo páginas web modernas, rápidas y adaptadas a celulares para
            profesionales y negocios que quieren crecer sin gastar de más.
          </p>

          <div className="hero__actions hero__in" style={{ "--i": 3 }}>
            <Button
              href={whatsappUrl("Hola, quiero mi página web. ¿Me pasás más información?")}
              external
              icon={<WhatsAppIcon />}
            >
              Quiero mi página web
            </Button>
            <Button href="#trabajos" variant="ghost" iconAfter={<ArrowIcon />}>
              Ver trabajos
            </Button>
          </div>

          <div className="price-chip hero__in" style={{ "--i": 4 }}>
            <span className="price-chip__label">Desde</span>
            <strong>{startPrice}</strong>
            <span className="price-chip__cur">ARS</span>
            <p>Precio promocional de lanzamiento, sujeto al alcance del proyecto.</p>
          </div>
        </div>

        <div
          className="stage hero__in"
          style={{ "--i": 2 }}
          role="img"
          aria-label="Ejemplos de páginas web: un estudio jurídico, un comercio en el celular y un negocio de servicios"
        >
          <BrowserFrame url="estudiojuridico.com.ar" className="stage__main">
            <LawScreen />
          </BrowserFrame>
          <BrowserFrame url="climasur.com.ar" className="stage__service">
            <ServiceScreen data={climaData} />
          </BrowserFrame>
          <PhoneFrame className="stage__phone">
            <RetailScreen data={shopData} mobile />
          </PhoneFrame>
        </div>
      </div>
    </section>
  );
}

export default Hero;
