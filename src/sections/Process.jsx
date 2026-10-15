import Reveal from "../components/ui/Reveal";
import SectionHead from "../components/ui/SectionHead";
import { steps } from "../config/site";

function Process() {
  return (
    <section id="proceso" className="section section--dark" aria-labelledby="proceso-title">
      <div className="wrap">
        <SectionHead index="03" label="Cómo trabajo" title="Cuatro pasos, sin vueltas." id="proceso-title">
          Un proceso simple para que sepas en todo momento en qué etapa estamos.
        </SectionHead>

        <ol className="steps">
          {steps.map((step, index) => (
            <Reveal as="li" key={step.title} delay={index * 110} className="step">
              <span className="step__num" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Process;
