import { useEffect, useState } from "react";

/**
 * Barra de "temperatura" no topo: enche conforme o scroll avança.
 */
export default function ScrollProgress() {
  const [progresso, setProgresso] = useState(0);

  useEffect(() => {
    let raf = 0;

    const calcular = () => {
      raf = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      setProgresso(max > 0 ? Math.min(1, doc.scrollTop / max) : 0);
    };

    const agendar = () => {
      if (!raf) raf = requestAnimationFrame(calcular);
    };

    calcular();
    window.addEventListener("scroll", agendar, { passive: true });
    window.addEventListener("resize", agendar);

    return () => {
      window.removeEventListener("scroll", agendar);
      window.removeEventListener("resize", agendar);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      className="scroll-progresso"
      style={{ transform: `scaleX(${progresso})` }}
      aria-hidden="true"
    />
  );
}
