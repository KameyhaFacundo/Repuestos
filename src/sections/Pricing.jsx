import Button from "../components/ui/Button";
import Reveal from "../components/ui/Reveal";
import SectionHead from "../components/ui/SectionHead";
import { CheckIcon, WhatsAppIcon } from "../components/ui/Icons";
import { plans } from "../config/site";
import { formatPrice, planMessage, whatsappUrl } from "../lib/format";

function PlanCard({ plan, delay }) {
  return (
    <Reveal
      as="article"
      delay={delay}
      className={`plan ${plan.featured ? "plan--featured" : ""}`}
      aria-labelledby={`plan-${plan.id}`}
    >
      {plan.badge && <p className="plan__badge">{plan.badge}</p>}
      <h3 id={`plan-${plan.id}`}>{plan.name}</h3>
      <p className="plan__blurb">{plan.blurb}</p>

      <p className="plan__price">
        <span className="plan__from">Desde</span>
        <strong>{formatPrice(plan.price)}</strong>
        <span className="plan__cur">ARS</span>
      </p>

      <ul className="plan__list">
        {plan.features.map((feature) => (
          <li key={feature}>
            <CheckIcon />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        href={whatsappUrl(planMessage(plan))}
        external
        variant={plan.featured ? "primary" : "dark"}
        icon={<WhatsAppIcon />}
        className="plan__cta"
      >
        Consultar por WhatsApp
      </Button>
    </Reveal>
  );
}

function Pricing() {
  return (
    <section id="precios" className="section section--light" aria-labelledby="precios-title">
      <div className="wrap">
        <SectionHead index="02" label="Servicios y precios" title="Tres planes, precios claros desde el inicio." id="precios-title">
          Elegí el punto de partida. Cada proyecto se ajusta a lo que tu negocio necesita.
        </SectionHead>

        <div className="plans">
          {plans.map((plan, index) => (
            <PlanCard key={plan.id} plan={plan} delay={index * 90} />
          ))}
        </div>

        <Reveal as="p" className="fineprint">
          Los precios son orientativos y se muestran como valores iniciales, sujetos al alcance del
          proyecto. Dominio, hosting de pago, funcionalidades avanzadas y trabajos adicionales pueden
          cotizarse por separado.
        </Reveal>
      </div>
    </section>
  );
}

export default Pricing;
