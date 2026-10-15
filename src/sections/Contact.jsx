import { useState } from "react";
import Button from "../components/ui/Button";
import Reveal from "../components/ui/Reveal";
import { WhatsAppIcon } from "../components/ui/Icons";
import { formOptions } from "../config/site";
import { whatsappUrl } from "../lib/format";

const EMPTY = { name: "", rubro: "", tipo: "", presupuesto: "" };

function validate(values) {
  const errors = {};
  if (values.name.trim().length < 2) errors.name = "Ingresá tu nombre.";
  if (!values.rubro) errors.rubro = "Elegí tu rubro.";
  if (!values.tipo) errors.tipo = "Elegí el tipo de página.";
  if (!values.presupuesto) errors.presupuesto = "Elegí un presupuesto aproximado.";
  return errors;
}

const buildMessage = (v) =>
  [
    `Hola, soy ${v.name.trim()}.`,
    `Mi rubro: ${v.rubro}.`,
    `Estoy buscando: ${v.tipo}.`,
    `Presupuesto aproximado: ${v.presupuesto}.`,
    "Me gustaría recibir una propuesta.",
  ].join("\n");

function Field({ id, label, error, children }) {
  return (
    <div className={`field ${error ? "has-error" : ""}`}>
      <label htmlFor={id}>{label}</label>
      {children}
      {error && (
        <p className="field__error" id={`${id}-error`}>
          {error}
        </p>
      )}
    </div>
  );
}

function Select({ id, name, value, onChange, error, placeholder, options }) {
  return (
    <select
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      aria-invalid={!!error}
      aria-describedby={error ? `${id}-error` : undefined}
    >
      <option value="">{placeholder}</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

function Contact() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [link, setLink] = useState("");

  const onChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) {
      const first = Object.keys(found)[0];
      document.getElementById(`f-${first}`)?.focus();
      return;
    }
    const url = whatsappUrl(buildMessage(values));
    setLink(url);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contacto" className="section section--dark contact" aria-labelledby="contacto-title">
      <div className="wrap contact__grid">
        <Reveal className="contact__copy">
          <p className="eyebrow">
            <span>06</span> Contacto
          </p>
          <h2 id="contacto-title">Tu próxima web puede empezar hoy.</h2>
          <p className="contact__lead">
            Contame qué necesitás y te preparo una propuesta adaptada a tu negocio y a tu presupuesto.
          </p>
          <Button
            href={whatsappUrl("Hola, quiero consultar por una página web para mi negocio.")}
            external
            icon={<WhatsAppIcon />}
            size="lg"
          >
            Escribime por WhatsApp
          </Button>
          <p className="contact__note">
            El formulario no envía datos a ningún servidor: arma el mensaje y lo abre en WhatsApp para
            que lo mandes vos.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <form className="form" onSubmit={onSubmit} noValidate aria-label="Pedir una propuesta">
            <Field id="f-name" label="Nombre" error={errors.name}>
              <input
                id="f-name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Tu nombre"
                value={values.name}
                onChange={onChange}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "f-name-error" : undefined}
              />
            </Field>

            <Field id="f-rubro" label="Rubro" error={errors.rubro}>
              <Select
                id="f-rubro"
                name="rubro"
                value={values.rubro}
                onChange={onChange}
                error={errors.rubro}
                placeholder="Elegí tu rubro"
                options={formOptions.rubros}
              />
            </Field>

            <Field id="f-tipo" label="Tipo de página" error={errors.tipo}>
              <Select
                id="f-tipo"
                name="tipo"
                value={values.tipo}
                onChange={onChange}
                error={errors.tipo}
                placeholder="¿Qué necesitás?"
                options={formOptions.tipos}
              />
            </Field>

            <Field id="f-presupuesto" label="Presupuesto aproximado (ARS)" error={errors.presupuesto}>
              <Select
                id="f-presupuesto"
                name="presupuesto"
                value={values.presupuesto}
                onChange={onChange}
                error={errors.presupuesto}
                placeholder="Elegí un rango"
                options={formOptions.presupuestos}
              />
            </Field>

            <Button type="submit" icon={<WhatsAppIcon />} className="form__submit">
              Preparar mensaje en WhatsApp
            </Button>

            <p className="form__status" role="status" aria-live="polite">
              {link && (
                <>
                  Listo, abrimos WhatsApp con tu mensaje. ¿No se abrió?{" "}
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    Tocá acá
                  </a>
                  .
                </>
              )}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

export default Contact;
