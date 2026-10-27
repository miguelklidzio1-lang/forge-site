import { useEffect, useState } from "react";

export default function useActiveSection(ids) {
  const [ativo, setAtivo] = useState(ids[0] || "");

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return undefined;

    const observador = new IntersectionObserver(
      (entradas) => {
        const visiveis = entradas
          .filter((entrada) => entrada.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visiveis[0]) setAtivo(visiveis[0].target.id);
      },
      { rootMargin: "-18% 0px -64% 0px", threshold: [0, 0.15, 0.35, 0.6] }
    );

    const elementos = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    elementos.forEach((el) => observador.observe(el));
    return () => observador.disconnect();
  }, [ids]);

  return ativo;
}
