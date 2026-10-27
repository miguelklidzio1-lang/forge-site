import { useEffect, useRef } from "react";

/**
 * Brasas subindo atrás do conteúdo do hero.
 * Canvas leve, DPR limitado, pausa em prefers-reduced-motion.
 */
export default function ForgeSparks({ densidade = 1 }) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    const reduz = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduz) return;

    const ctx = canvas.getContext("2d");
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let largura = 0;
    let altura = 0;
    let raf = 0;
    let brasas = [];

    const criar = (inicial) => ({
      x: Math.random() * largura,
      y: inicial ? Math.random() * altura : altura + 8 + Math.random() * 50,
      raio: 0.5 + Math.random() * 1.6,
      vy: 0.18 + Math.random() * 0.5,
      vx: (Math.random() - 0.5) * 0.22,
      fase: Math.random() * Math.PI * 2,
      balanco: 0.15 + Math.random() * 0.45,
      vida: 0,
      maxVida: 220 + Math.random() * 260,
    });

    const ajustar = () => {
      const pai = canvas.parentElement;
      if (!pai) return;
      const r = pai.getBoundingClientRect();
      largura = r.width;
      altura = r.height;
      canvas.width = Math.floor(largura * dpr);
      canvas.height = Math.floor(altura * dpr);
      canvas.style.width = `${largura}px`;
      canvas.style.height = `${altura}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const alvo = Math.round(
        Math.min(70, (largura * altura) / 17000) * densidade
      );
      brasas = Array.from({ length: alvo }, () => criar(true));
    };

    const desenhar = () => {
      ctx.clearRect(0, 0, largura, altura);
      ctx.globalCompositeOperation = "lighter";

      for (let i = 0; i < brasas.length; i++) {
        const b = brasas[i];
        b.vida++;
        b.y -= b.vy;
        b.x += b.vx + Math.sin(b.vida * 0.012 + b.fase) * b.balanco * 0.12;

        const progresso = b.vida / b.maxVida;
        if (b.y < -30 || progresso >= 1) {
          brasas[i] = criar(false);
          continue;
        }

        // fade suave: acende e apaga
        const alpha = Math.sin(progresso * Math.PI) * 0.85;

        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 120, 26, ${alpha * 0.18})`;
        ctx.arc(b.x, b.y, b.raio * 4, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 196, 110, ${alpha})`;
        ctx.arc(b.x, b.y, b.raio, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalCompositeOperation = "source-over";
      raf = requestAnimationFrame(desenhar);
    };

    ajustar();
    raf = requestAnimationFrame(desenhar);

    const ro = new ResizeObserver(ajustar);
    if (canvas.parentElement) ro.observe(canvas.parentElement);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [densidade]);

  return <canvas ref={ref} className="forge-sparks" aria-hidden="true" />;
}
