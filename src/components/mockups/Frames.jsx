// Marcos decorativos (aria-hidden): el contenido que muestran se describe en el texto de cada sección.

export function BrowserFrame({ url, className = "", children }) {
  return (
    <div className={`browser ${className}`.trim()} aria-hidden="true">
      <div className="browser__bar">
        <span className="browser__dots">
          <i />
          <i />
          <i />
        </span>
        <span className="browser__url">{url}</span>
      </div>
      <div className="screen screen--desktop">{children}</div>
    </div>
  );
}

export function PhoneFrame({ className = "", children }) {
  return (
    <div className={`phone ${className}`.trim()} aria-hidden="true">
      <div className="phone__notch" />
      <div className="screen screen--mobile">{children}</div>
    </div>
  );
}
