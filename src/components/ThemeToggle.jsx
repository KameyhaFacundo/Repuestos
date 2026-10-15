import { useState } from "react";
import { MoonIcon, SunIcon } from "./ui/Icons";
import { getTheme, setTheme } from "../lib/theme";

function ThemeToggle() {
  const [theme, setCurrent] = useState(getTheme);
  const next = theme === "dark" ? "light" : "dark";

  const toggle = () => {
    setTheme(next);
    setCurrent(next);
  };

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={`Cambiar a modo ${next === "dark" ? "oscuro" : "claro"}`}
      title={`Modo ${next === "dark" ? "oscuro" : "claro"}`}
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}

export default ThemeToggle;
