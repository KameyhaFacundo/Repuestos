import Reveal from "./Reveal";

function SectionHead({ index, label, title, children, id, className = "" }) {
  return (
    <Reveal className={`section-head ${className}`.trim()}>
      <p className="eyebrow">
        <span>{index}</span> {label}
      </p>
      <h2 id={id}>{title}</h2>
      {children && <p className="section-head__lead">{children}</p>}
    </Reveal>
  );
}

export default SectionHead;
