import Button from "../components/ui/Button";
import Reveal from "../components/ui/Reveal";
import { WhatsAppIcon } from "../components/ui/Icons";
import { EMAIL, WHATSAPP_DISPLAY, WHATSAPP_NUMBER, brand, person } from "../config/site";
import { whatsappUrl } from "../lib/format";

function About() {
  return (
    <section id="sobre-mi" className="section section--dark about" aria-labelledby="about-title">
      <div className="wrap about__grid">
        <Reveal className="about__photo">
          <img
            src={person.photo}
            alt={`${person.name}, fundador de ${brand.name}`}
            width="640"
            height="640"
            loading="lazy"
          />
          <p className="about__badge">{brand.name} · {person.role}</p>
        </Reveal>

        <Reveal delay={100} className="about__copy">
          <p className="eyebrow">
            <span>05</span> Quién está detrás
          </p>
          <h2 id="about-title">Hablás directo con quien hace tu web.</h2>
          <p className="about__lead">
            Soy {person.name}, y con {brand.name} diseño y desarrollo páginas web a medida para
            profesionales y negocios de Argentina. Cada proyecto se piensa para el celular, se
            construye con código moderno y arranca con un alcance y un precio claros.
          </p>
          <p className="about__lead">
            Si me escribís, te respondo yo: sin intermediarios y sin vueltas.
          </p>

          <dl className="about__contact">
            <div>
              <dt>WhatsApp</dt>
              <dd>
                <a href={`tel:+${WHATSAPP_NUMBER}`}>{WHATSAPP_DISPLAY}</a>
              </dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </dd>
            </div>
          </dl>

          <Button
            href={whatsappUrl("Hola Facundo, vi tu página y quiero consultar por una web para mi negocio.")}
            external
            icon={<WhatsAppIcon />}
          >
            Escribime por WhatsApp
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

export default About;
