import { useEffect, useRef } from "react";

/**
 * Faíscas de martelada: cada clique/toque gera uma explosão curta.
 * O loop só roda enquanto existem partículas.
 */
export default function ClickSparks() {
  const ref = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let largura = 0;
    let altura = 0;
    let raf = 0;
    const faiscas = [];

    const ajustar = () => {
      largura = window.innerWidth;
      altura = window.innerHeight;
      canvas.width = Math.floor(largura * dpr);
      canvas.height = Math.floor(altura * dpr);
      canvas.style.width = `${largura}px`;
      canvas.style.height = `${altura}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const desenhar = () => {
      ctx.clearRect(0, 0, largura, altura);
      ctx.globalCompositeOperation = "lighter";

      for (let i = faiscas.length - 1; i >= 0; i--) {
        const p = faiscas[i];
        p.vy += 0.17;
        p.vx *= 0.982;
        p.vy *= 0.982;
        p.x += p.vx;
        p.y += p.vy;
        p.vida++;

        const t = 1 - p.vida / p.max;
        if (t <= 0) {
          faiscas.splice(i, 1);
          continue;
        }

        const raio = p.r * (0.5 + t * 0.9);
        const halo = raio * 5;

        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, halo);
        g.addColorStop(0, `rgba(255, 226, 160, ${t})`);
        g.addColorStop(0.3, `rgba(255, 140, 40, ${t * 0.6})`);
        g.addColorStop(1, "rgba(255, 91, 4, 0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, halo, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalCompositeOperation = "source-over";

      if (faiscas.length) {
        raf = requestAnimationFrame(desenhar);
      } else {
        raf = 0;
        ctx.clearRect(0, 0, largura, altura);
      }
    };

    const explodir = (ev) => {
      const qtd = window.innerWidth < 640 ? 9 : 16;
      const forca = window.innerWidth < 640 ? 0.8 : 1;

      for (let i = 0; i < qtd; i++) {
        const ang = (Math.PI * 2 * i) / qtd + Math.random() * 0.7;
        const vel = (1.2 + Math.random() * 4.2) * forca;

        faiscas.push({
          x: ev.clientX,
          y: ev.clientY,
          vx: Math.cos(ang) * vel,
          vy: Math.sin(ang) * vel - 1.1,
          r: 0.5 + Math.random() * 1.3,
          vida: 0,
          max: 28 + Math.random() * 30,
        });
      }

      if (!raf) raf = requestAnimationFrame(desenhar);
    };

    ajustar();
    window.addEventListener("resize", ajustar);
    window.addEventListener("pointerdown", explodir);

    return () => {
      window.removeEventListener("resize", ajustar);
      window.removeEventListener("pointerdown", explodir);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={ref} className="faiscas-clique" aria-hidden="true" />;
}
