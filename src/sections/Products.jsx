import { useState } from "react";
import ProductArt from "../components/ProductArt";
import Reveal from "../components/ui/Reveal";
import SectionHead from "../components/ui/SectionHead";
import { ArrowUpRightIcon } from "../components/ui/Icons";
import { products } from "../config/site";
import { productMessage, whatsappUrl } from "../lib/format";

const tabs = [
  { id: "motos", label: "Repuestos de moto" },
  { id: "ferreteria", label: "Ferretería" },
];

function Products() {
  const [tab, setTab] = useState("motos");

  return (
    <section id="productos" className="section" aria-labelledby="productos-title">
      <div className="wrap">
        <SectionHead index="02" label="Productos" title="Todo lo que tu moto necesita" id="productos-title">
          Tocá un producto para consultarlo por WhatsApp. Si no lo ves acá, preguntá igual: hay más en el local.
        </SectionHead>

        <div className="tabs" role="tablist" aria-label="Rubro">
          {tabs.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              id={`tab-${item.id}`}
              aria-selected={tab === item.id}
              aria-controls="productos-panel"
              className={`tabs__btn ${tab === item.id ? "is-active" : ""}`}
              onClick={() => setTab(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <ul id="productos-panel" role="tabpanel" aria-labelledby={`tab-${tab}`} className="grid">
          {products[tab].map((product, index) => (
            <Reveal as="li" key={`${tab}-${product.id}`} delay={index * 60}>
              <a
                className="card"
                href={whatsappUrl(productMessage(product))}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="card__art">
                  <ProductArt name={product.art} id={`${tab}-${product.id}`} />
                </div>
                <div className="card__body">
                  <h3>{product.name}</h3>
                  <p>{product.text}</p>
                  <span className="card__cta">
                    Consultar <ArrowUpRightIcon />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Products;
