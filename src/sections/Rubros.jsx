import { rubros } from "../config/site";

// Cinta de rubros: se desplaza lento y se detiene con hover o con "reducir movimiento".
function Rubros() {
  return (
    <section className="rubros" aria-label="Rubros con los que trabajo">
      <div className="rubros__track">
        {[0, 1].map((copy) => (
          <ul key={copy} className="rubros__list" aria-hidden={copy === 1 ? "true" : undefined}>
            {rubros.map((rubro) => (
              <li key={rubro}>{rubro}</li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}

export default Rubros;
