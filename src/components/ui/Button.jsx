// Botón/enlace con tres variantes: primary (acento), ghost (contorno) y dark.
function Button({
  href,
  variant = "primary",
  size = "md",
  external = false,
  icon,
  iconAfter,
  className = "",
  children,
  ...rest
}) {
  const classes = `btn btn--${variant} btn--${size} ${className}`.trim();
  const content = (
    <>
      {icon}
      <span>{children}</span>
      {iconAfter}
    </>
  );

  if (href) {
    const extra = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
    return (
      <a className={classes} href={href} {...extra} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {content}
    </button>
  );
}

export default Button;
