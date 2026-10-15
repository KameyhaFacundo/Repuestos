import { useEffect, useRef, useState } from "react";

// Sin IntersectionObserver o con "reducir movimiento", el contenido se muestra directo.
const showImmediately = () =>
  typeof IntersectionObserver === "undefined" ||
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function useReveal() {
  const ref = useRef(null);
  const [shown, setShown] = useState(showImmediately);

  useEffect(() => {
    if (shown || !ref.current) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [shown]);

  return [ref, shown];
}
