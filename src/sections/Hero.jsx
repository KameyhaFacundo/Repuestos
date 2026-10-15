import Button from "../components/ui/Button";
import { ArrowIcon, WhatsAppIcon } from "../components/ui/Icons";
import { brand, location } from "../config/site";
import { whatsappUrl } from "../lib/format";

const facts = ["Asesoramiento real", "Consultá por WhatsApp", "Motos y ferretería"];

function Hero() {
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <div className="wrap hero__in">
        <div className="hero__copy">
          <p className="eyebrow">
            <span>{location.city}</span>
          </p>
          <h1 id="hero-title">
            Repuestos para tu moto. <em>Ferretería</em> para todo lo demás.
          </h1>
          <p className="hero__lead">
            En {brand.name} sabemos qué pieza va en tu modelo. Decinos marca, modelo y qué necesitás, y te
            respondemos con disponibilidad por WhatsApp.
          </p>
          <div className="hero__cta">
            <Button
              href={whatsappUrl("Hola Impulsa Motors, quisiera hacer una consulta.")}
              external
              size="lg"
              icon={<WhatsAppIcon />}
            >
              Consultar por WhatsApp
            </Button>
            <Button href="#buscador" variant="ghost" size="lg" iconAfter={<ArrowIcon />}>
              Buscar mi repuesto
            </Button>
          </div>
          <ul className="hero__facts">
            {facts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
        </div>

        <div className="hero__logo">
          <img src={brand.logo} alt={`${brand.name}, ${brand.tagline}`} width="459" height="312" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
