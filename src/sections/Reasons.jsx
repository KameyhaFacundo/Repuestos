import Reveal from "../components/ui/Reveal";
import SectionHead from "../components/ui/SectionHead";
import { CheckIcon } from "../components/ui/Icons";
import { reasons } from "../config/site";

function Reasons() {
  return (
    <section id="nosotros" className="section section--alt" aria-labelledby="nosotros-title">
      <div className="wrap">
        <SectionHead index="03" label="Nosotros" title="Por qué elegir Impulsa Motors" id="nosotros-title" />
        <ul className="reasons">
          {reasons.map((reason, index) => (
            <Reveal as="li" key={reason.title} delay={index * 70} className="reason">
              <span className="reason__icon">
                <CheckIcon />
              </span>
              <h3>{reason.title}</h3>
              <p>{reason.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Reasons;
