import { useEffect } from "react";

/**
 * Observa elementos .reveal e adiciona .visivel quando entram na tela.
 * Roda uma única vez por elemento.
 */
export default function useReveal() {
  useEffect(() => {
    const alvos = document.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window)) {
      alvos.forEach((el) => el.classList.add("visivel"));
      return;
    }

    const obs = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            entrada.target.classList.add("visivel");
            obs.unobserve(entrada.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );

    alvos.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}
