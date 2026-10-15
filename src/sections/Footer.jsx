import { EMAIL, brand } from "../config/site";
import { whatsappUrl } from "../lib/format";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="wrap footer__in">
        <p className="footer__brand">
          <span className="brand__mark" aria-hidden="true" /> {brand.name}
          <small>{brand.role} · Argentina</small>
        </p>
        <nav aria-label="Pie de página" className="footer__nav">
          <a href="#trabajos">Portfolio</a>
          <a href="#precios">Precios</a>
          <a href="#contacto">Contacto</a>
          <a href={`mailto:${EMAIL}`}>Email</a>
          <a
            href={whatsappUrl("Hola, quiero consultar por una página web.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </nav>
        <p className="footer__copy">
          © {year} {brand.name}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
