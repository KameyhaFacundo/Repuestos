import { useState } from "react";
import Button from "../components/ui/Button";
import Modal from "../components/ui/Modal";
import Reveal from "../components/ui/Reveal";
import SectionHead from "../components/ui/SectionHead";
import { ArrowUpRightIcon, WhatsAppIcon } from "../components/ui/Icons";
import { BrowserFrame } from "../components/mockups/Frames";
import ProjectScreen from "../components/mockups/ProjectScreen";
import { projects } from "../config/site";
import { whatsappUrl } from "../lib/format";

const hostOf = (url) => new URL(url).host;

function ProjectCard({ project, delay, onOpenDemo }) {
  const isReal = project.kind === "real";
  return (
    <Reveal
      as="article"
      delay={delay}
      className={`work-card ${project.featured ? "work-card--featured" : ""}`}
    >
      <div className="work-card__media">
        <BrowserFrame url={isReal ? hostOf(project.url) : "demo-conceptual"}>
          <ProjectScreen id={project.id} />
        </BrowserFrame>
      </div>
      <div className="work-card__body">
        <p className={`badge ${isReal ? "badge--real" : "badge--demo"}`}>
          {isReal ? "Proyecto real" : "Demo conceptual"}
        </p>
        <h3>{project.title}</h3>
        <p className="work-card__cat">{project.category}</p>
        <p className="work-card__desc">{project.description}</p>
        {isReal ? (
          <Button
            href={project.url}
            external
            variant="ghost"
            iconAfter={<ArrowUpRightIcon />}
            aria-label={`${project.cta}: ${project.title} (se abre en una pestaña nueva)`}
          >
            {project.cta}
          </Button>
        ) : (
          <Button
            variant="ghost"
            iconAfter={<ArrowUpRightIcon />}
            onClick={() => onOpenDemo(project)}
            aria-label={`${project.cta}: ${project.title}`}
          >
            {project.cta}
          </Button>
        )}
      </div>
    </Reveal>
  );
}

function Work() {
  const [demo, setDemo] = useState(null);

  return (
    <section id="trabajos" className="section section--dark" aria-labelledby="trabajos-title">
      <div className="wrap">
        <SectionHead index="01" label="Trabajos" title="Webs que se ven y funcionan como un producto." id="trabajos-title">
          Un proyecto real online y dos demos conceptuales que muestran hasta dónde puede llegar tu
          sitio. Las demos no son clientes reales.
        </SectionHead>

        <div className="work-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} delay={index * 90} onOpenDemo={setDemo} />
          ))}
        </div>
      </div>

      <Modal open={!!demo} onClose={() => setDemo(null)} title={demo ? `Demo: ${demo.title}` : ""}>
        {demo && (
          <>
            <BrowserFrame url="demo-conceptual">
              <ProjectScreen id={demo.id} />
            </BrowserFrame>
            <div className="modal__info">
              <div>
                <p className="badge badge--demo">Demo conceptual</p>
                <h3>{demo.title}</h3>
                <p>
                  Es un diseño de ejemplo para mostrar el estilo y la estructura posibles. No
                  corresponde a un cliente real.
                </p>
              </div>
              <Button
                href={whatsappUrl(`Hola, vi la demo conceptual "${demo.title}" y quiero una web parecida para mi negocio.`)}
                external
                icon={<WhatsAppIcon />}
              >
                Quiero algo así
              </Button>
            </div>
          </>
        )}
      </Modal>
    </section>
  );
}

export default Work;
