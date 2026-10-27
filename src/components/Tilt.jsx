import { useRef } from "react";

/**
 * Inclinação 3D com brilho seguindo o mouse.
 * Desativa em touch e em prefers-reduced-motion.
 */
export default function Tilt({ children, max = 6 }) {
  const ref = useRef(null);

  const ativo = () =>
    window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const mover = (ev) => {
    if (!ativo()) return;
    const el = ref.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    const px = (ev.clientX - r.left) / r.width;
    const py = (ev.clientY - r.top) / r.height;

    el.style.transform = `perspective(900px) rotateX(${(0.5 - py) * max}deg) rotateY(${
      (px - 0.5) * max
    }deg) translateY(-4px)`;
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
  };

  const sair = () => {
    const el = ref.current;
    if (el) el.style.transform = "";
  };

  return (
    <div
      className="tilt"
      onMouseMove={mover}
      onMouseLeave={sair}
    >
      <div className="tilt-inner" ref={ref}>
        {children}
      </div>
    </div>
  );
}
