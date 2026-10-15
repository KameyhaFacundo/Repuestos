// Interfaz de ejemplo: estudio jurídico (basada en el proyecto real).
function LawScreen() {
  return (
    <div className="scr scr-law">
      <div className="law-nav">
        <b>Justa Causa</b>
        <span>Áreas</span>
        <span>Sobre mí</span>
        <span>Guías</span>
        <span>Contacto</span>
        <i className="law-nav__cta">Consultar</i>
      </div>
      <div className="law-body">
        <div className="law-copy">
          <small>Abogada · Tucumán</small>
          <h4>
            Tu derecho,
            <br />
            bien defendido.
          </h4>
          <p>
            Familia y sucesiones, derecho laboral, daños y perjuicios y alquileres, con
            atención personalizada.
          </p>
          <div className="law-btns">
            <i>Escribime por WhatsApp</i>
            <u>Ver áreas</u>
          </div>
        </div>
        <div className="law-arch">
          <b>JC</b>
        </div>
      </div>
      <div className="law-areas">
        <span>Cuota alimentaria</span>
        <span>Divorcio</span>
        <span>Laboral</span>
        <span>Sucesiones</span>
      </div>
    </div>
  );
}

export default LawScreen;
