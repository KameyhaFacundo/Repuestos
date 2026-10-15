// Interfaz de ejemplo de comercio: sirve en versión escritorio y móvil (prop mobile).
function RetailScreen({ data, mobile = false }) {
  return (
    <div className={`scr scr-retail ${mobile ? "is-mobile" : ""}`} style={data.theme}>
      <div className="rt-nav">
        <b>{data.name}</b>
        <span className="rt-search">{data.search}</span>
        <i className="rt-cart">{data.cart}</i>
      </div>
      <div className="rt-banner">
        <div>
          <h4>{data.headline}</h4>
          <p>{data.sub}</p>
        </div>
        <i className="rt-pill">{data.cta}</i>
      </div>
      <div className="rt-chips">
        {data.chips.map((chip, index) => (
          <span key={chip} className={index === 0 ? "is-on" : ""}>
            {chip}
          </span>
        ))}
      </div>
      <div className="rt-grid">
        {data.products.map((product, index) => (
          <div className="rt-card" key={product.name}>
            <div className={`rt-thumb rt-thumb--${(index % 4) + 1}`}>
              <em />
            </div>
            <span className="rt-name">{product.name}</span>
            <b className="rt-price">{product.price}</b>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RetailScreen;
