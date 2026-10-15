import Button from "../components/ui/Button";
import Reveal from "../components/ui/Reveal";
import SectionHead from "../components/ui/SectionHead";
import { ArrowUpRightIcon, WhatsAppIcon } from "../components/ui/Icons";
import { WHATSAPP_DISPLAY, location } from "../config/site";
import { whatsappUrl } from "../lib/format";

const query = encodeURIComponent(location.mapsQuery);

function Location() {
  return (
    <section id="ubicacion" className="section" aria-labelledby="ubicacion-title">
      <div className="wrap place">
        <div>
          <SectionHead index="04" label="Dónde estamos" title="Pasá por el local" id="ubicacion-title" />
          <Reveal as="dl" className="place__data">
            <div>
              <dt>Ubicación</dt>
              <dd>{location.address ? `${location.address} · ${location.city}` : location.city}</dd>
            </div>
            {location.hours && (
              <div>
                <dt>Horario</dt>
                <dd>{location.hours}</dd>
              </div>
            )}
            <div>
              <dt>WhatsApp</dt>
              <dd>{WHATSAPP_DISPLAY}</dd>
            </div>
          </Reveal>
          <Reveal className="place__cta">
            <Button
              href={whatsappUrl("Hola Impulsa Motors, quisiera hacer una consulta.")}
              external
              icon={<WhatsAppIcon />}
            >
              Escribinos
            </Button>
            <Button
              href={`https://www.google.com/maps/search/?api=1&query=${query}`}
              external
              variant="ghost"
              iconAfter={<ArrowUpRightIcon />}
            >
              Cómo llegar
            </Button>
          </Reveal>
        </div>

        <Reveal className="place__map">
          <iframe
            title="Mapa de ubicación de Impulsa Motors"
            src={`https://www.google.com/maps?q=${query}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </div>
    </section>
  );
}

export default Location;
