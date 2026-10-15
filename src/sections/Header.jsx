import { useEffect, useState } from "react";
import Button from "../components/ui/Button";
import { brand, navLinks } from "../config/site";

function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="wrap site-header__in">
        <a className="brand" href="#inicio" onClick={close} aria-label={`${brand.name}, ir al inicio`}>
          <span className="brand__mark" aria-hidden="true" />
          <span className="brand__name">{brand.name}</span>
        </a>

        <nav id="menu" className={`nav ${open ? "is-open" : ""}`} aria-label="Principal">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={close}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="site-header__actions">
          <Button href="#contacto" size="sm" className="site-header__cta">
            Quiero mi web
          </Button>
          <button
            type="button"
            className={`burger ${open ? "is-open" : ""}`}
            aria-expanded={open}
            aria-controls="menu"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
