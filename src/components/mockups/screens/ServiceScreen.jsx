// Interfaz de ejemplo de negocio de servicios (taller, climatización, etc.).
function ServiceScreen({ data }) {
  return (
    <div className="scr scr-service" style={data.theme}>
      <div className="sv-nav">
        <b>{data.name}</b>
        {data.links.map((link) => (
          <span key={link}>{link}</span>
        ))}
        <i className="sv-nav__cta">{data.navCta}</i>
      </div>
      <div className="sv-body">
        <div className="sv-copy">
          <small>{data.kicker}</small>
          <h4>{data.headline}</h4>
          <p>{data.sub}</p>
          <i className="sv-btn">{data.cta}</i>
        </div>
        <div className="sv-card">
          <strong>{data.formTitle}</strong>
          {data.fields.map((field) => (
            <div className="sv-field" key={field}>
              {field}
            </div>
          ))}
          <i className="sv-btn sv-btn--full">{data.formCta}</i>
        </div>
      </div>
      <div className="sv-services">
        {data.services.map((service, index) => (
          <div key={service}>
            <small>{String(index + 1).padStart(2, "0")}</small>
            <span>{service}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceScreen;
