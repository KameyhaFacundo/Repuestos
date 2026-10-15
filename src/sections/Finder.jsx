import { useState } from "react";
import Button from "../components/ui/Button";
import Reveal from "../components/ui/Reveal";
import SectionHead from "../components/ui/SectionHead";
import { WhatsAppIcon } from "../components/ui/Icons";
import { motoBrands, partTypes } from "../config/site";
import { whatsappUrl } from "../lib/format";

// Arma el mensaje de WhatsApp con marca, modelo y repuesto. No necesita backend.
function Finder() {
  const [form, setForm] = useState({ marca: "", modelo: "", repuesto: "" });
  const [error, setError] = useState("");

  const update = (key) => (event) => {
    setForm((prev) => ({ ...prev, [key]: event.target.value }));
    setError("");
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (!form.repuesto) {
      setError("Elegí qué repuesto necesitás.");
      return;
    }
    const moto = [form.marca, form.modelo.trim()].filter(Boolean).join(" ");
    const message = moto
      ? `Hola Impulsa Motors, busco ${form.repuesto.toLowerCase()} para mi ${moto}. ¿Tienen disponible?`
      : `Hola Impulsa Motors, busco ${form.repuesto.toLowerCase()}. ¿Tienen disponible?`;
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="buscador" className="section section--alt" aria-labelledby="buscador-title">
      <div className="wrap finder">
        <SectionHead index="01" label="Buscador" title="Buscá el repuesto para tu moto" id="buscador-title">
          Completá los datos y te abrimos WhatsApp con el mensaje listo. Respondemos con stock y precio.
        </SectionHead>

        <Reveal as="form" className="finder__form" onSubmit={onSubmit} noValidate>
          <div className="field">
            <label htmlFor="f-marca">Marca de la moto</label>
            <select id="f-marca" value={form.marca} onChange={update("marca")}>
              <option value="">Elegí una marca</option>
              {motoBrands.map((brand) => (
                <option key={brand}>{brand}</option>
              ))}
            </select>
          </div>
          <div className="field">
            <label htmlFor="f-modelo">Modelo y año</label>
            <input
              id="f-modelo"
              type="text"
              placeholder="Ej: Wave 110 2019"
              value={form.modelo}
              onChange={update("modelo")}
              autoComplete="off"
            />
          </div>
          <div className={`field ${error ? "has-error" : ""}`}>
            <label htmlFor="f-repuesto">¿Qué necesitás?</label>
            <select
              id="f-repuesto"
              value={form.repuesto}
              onChange={update("repuesto")}
              aria-invalid={Boolean(error)}
              aria-describedby={error ? "f-error" : undefined}
            >
              <option value="">Elegí un repuesto</option>
              {partTypes.map((part) => (
                <option key={part}>{part}</option>
              ))}
            </select>
            {error && (
              <p id="f-error" className="field__error" role="alert">
                {error}
              </p>
            )}
          </div>
          <Button type="submit" size="lg" icon={<WhatsAppIcon />} className="finder__submit">
            Consultar disponibilidad
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

export default Finder;
