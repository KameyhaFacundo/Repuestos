import { WhatsAppIcon } from "../components/ui/Icons";
import { brand, location } from "../config/site";
import { whatsappUrl } from "../lib/format";

const KAMEX_URL = "https://kamexsolutions.vercel.app/";

function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="wrap site-footer__in">
          <p>
            © {new Date().getFullYear()} {brand.name} · {location.city}
          </p>
          <p className="site-footer__credit">
              Sitio desarrollado por{" "}
              <a href={KAMEX_URL} target="_blank" rel="noopener noreferrer">
                Kamex
              </a>
            </p>
        </div>
      </footer>
      <a
        className="wa-float"
        href={whatsappUrl("Hola Impulsa Motors, quisiera hacer una consulta.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribinos por WhatsApp"
      >
        <WhatsAppIcon />
      </a>
    </>
  );
}

export default Footer;
