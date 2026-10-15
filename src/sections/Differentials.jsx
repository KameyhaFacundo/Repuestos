import Reveal from "../components/ui/Reveal";
import SectionHead from "../components/ui/SectionHead";
import { differentials } from "../config/site";

function Differentials() {
  return (
    <section id="diferenciales" className="section section--light" aria-labelledby="dif-title">
      <div className="wrap diff">
        <div className="diff__intro">
          <SectionHead index="04" label="Por qué conmigo" title="Una web bien hecha, de principio a fin." id="dif-title">
            Me enfoco en que tu sitio esté bien diseñado, bien construido y bien explicado. No
            prometo ventas garantizadas: prometo un trabajo prolijo y un alcance claro.
          </SectionHead>
        </div>

        <ul className="diff__list">
          {differentials.map((item, index) => (
            <Reveal as="li" key={item.title} delay={(index % 2) * 80} className="diff__item">
              <span className="diff__n" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Differentials;
