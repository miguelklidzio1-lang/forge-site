import { useEffect, useRef } from "react";

/**
 * Halo de calor que persegue o cursor com atraso (lerp).
 * Só ativa em dispositivos com mouse de verdade.
 */
export default function EmberCursor() {
  const ref = useRef(null);

  useEffect(() => {
    const alvo = ref.current;
    if (!alvo) return;

    const temMouse = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduz = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!temMouse || reduz) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let destX = x;
    let destY = y;
    let raf = 0;

    const mover = (ev) => {
      destX = ev.clientX;
      destY = ev.clientY;
      alvo.style.opacity = "1";
    };

    const sair = () => {
      alvo.style.opacity = "0";
    };

    const loop = () => {
      x += (destX - x) * 0.085;
      y += (destY - y) * 0.085;
      alvo.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", mover, { passive: true });
    document.addEventListener("pointerleave", sair);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("pointermove", mover);
      document.removeEventListener("pointerleave", sair);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={ref} className="ember-cursor" aria-hidden="true" />;
}
