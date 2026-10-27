import { useEffect, useState } from "react";

export const ROTAS = {
  nexus: "/templates/nexus",
  lucas: "/templates/portfolio",
  ecotech: "/templates/ecotech",
};

const ROTAS_CONHECIDAS = new Set(Object.values(ROTAS));

function normalizar(caminho) {
  if (!caminho) return "/";
  const limpo = caminho.replace(/\/+$/, "");
  return limpo || "/";
}

export function navegarPara(destino) {
  const hash = destino.includes("#") ? destino.split("#")[1] : "";
  window.history.pushState({}, "", destino);
  window.dispatchEvent(new PopStateEvent("popstate"));

  if (hash) {
    window.setTimeout(() => {
      document
        .getElementById(hash)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 140);
  } else {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }
}

export function useRota() {
  const [rota, setRota] = useState(() => normalizar(window.location.pathname));

  useEffect(() => {
    const aoMudar = () => setRota(normalizar(window.location.pathname));
    window.addEventListener("popstate", aoMudar);
    return () => window.removeEventListener("popstate", aoMudar);
  }, []);

  return rota;
}

export function rotaDeTemplate(rota) {
  return ROTAS_CONHECIDAS.has(rota);
}
