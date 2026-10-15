import { useReveal } from "../../hooks/useReveal";

// Aparece suavemente al entrar en pantalla (se desactiva con "reducir movimiento").
function Reveal({ as = "div", delay = 0, className = "", children, ...rest }) {
  const Tag = as;
  const [ref, shown] = useReveal();
  return (
    <Tag
      ref={ref}
      className={`reveal ${shown ? "is-in" : ""} ${className}`.trim()}
      style={{ "--delay": `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
