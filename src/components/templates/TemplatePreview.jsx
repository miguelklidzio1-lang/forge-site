import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import BrasaTemplate from "./BrasaTemplate.jsx";
import VittaTemplate from "./VittaTemplate.jsx";
import NorteTemplate from "./NorteTemplate.jsx";
import { PreviewContext } from "./previewContext.js";
import "./TemplatePreview.css";

const TEMPLATES = {
  restaurante: {
    nome: "Brasa",
    tipo: "Restaurante",
    url: "brasa.com",
    Component: BrasaTemplate,
  },
  clinica: {
    nome: "Clínica Vitta",
    tipo: "Saúde",
    url: "clinicavitta.com",
    Component: VittaTemplate,
  },
  loja: {
    nome: "Ateliê Norte",
    tipo: "Moda",
    url: "atelienorte.com",
    Component: NorteTemplate,
  },
};

const DISPOSITIVOS = {
  desktop: { w: 1280, h: 800, rotulo: "Desktop" },
  tablet: { w: 834, h: 1112, rotulo: "Tablet" },
  mobile: { w: 390, h: 844, rotulo: "Celular" },
};

function IconeDispositivo({ tipo }) {
  const base = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  if (tipo === "desktop") {
    return (
      <svg {...base}>
        <rect x="3" y="4" width="18" height="12" rx="2" />
        <path d="M9 20h6M12 16v4" />
      </svg>
    );
  }

  if (tipo === "tablet") {
    return (
      <svg {...base}>
        <rect x="5" y="3" width="14" height="18" rx="2.5" />
        <path d="M11 18h2" />
      </svg>
    );
  }

  return (
    <svg {...base}>
      <rect x="7" y="2" width="10" height="20" rx="2.5" />
      <path d="M11 19h2" />
    </svg>
  );
}

function ChromeNavegador({ url }) {
  return (
    <div className="tp-chrome">
      <span className="tp-dot" />
      <span className="tp-dot" />
      <span className="tp-dot" />
      <span className="tp-url">
        <svg
          viewBox="0 0 24 24"
          width="11"
          height="11"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <rect x="5" y="10" width="14" height="10" rx="2" />
          <path d="M8 10V7a4 4 0 0 1 8 0v3" />
        </svg>
        {url}
      </span>
    </div>
  );
}

function ChromeCelular() {
  return (
    <div className="tp-phone">
      <span className="tp-phone-hora">9:41</span>
      <span className="tp-phone-notch" />
      <span className="tp-phone-sinais" aria-hidden="true">
        <span className="tp-sinal" />
        <span className="tp-wifi" />
        <span className="tp-bateria" />
      </span>
    </div>
  );
}

function useEscala(stageW, stageH) {
  const areaRef = useRef(null);
  const [escala, setEscala] = useState(0.5);

  useLayoutEffect(() => {
    const el = areaRef.current;
    if (!el) return;

    const medir = () => {
      const r = el.getBoundingClientRect();
      const pad = 22;
      const s = Math.min(
        (r.width - pad * 2) / stageW,
        (r.height - pad * 2) / stageH,
        1
      );
      setEscala(Math.max(0.12, s));
    };

    medir();
    const ro = new ResizeObserver(medir);
    ro.observe(el);
    return () => ro.disconnect();
  }, [stageW, stageH]);

  return { areaRef, escala };
}

export default function TemplatePreview({ tipo, onClose, onUse }) {
  const tpl = TEMPLATES[tipo];
  const [dispositivo, setDispositivo] = useState("desktop");
  const shellRef = useRef(null);
  const viewportRef = useRef(null);
  const closeRef = useRef(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  const dim = DISPOSITIVOS[dispositivo];
  const { areaRef, escala } = useEscala(dim.w, dim.h);

  const scrollTop = useCallback(() => {
    viewportRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const contexto = useMemo(
    () => ({ device: dispositivo, scrollTop }),
    [dispositivo, scrollTop]
  );

  useEffect(() => {
    viewportRef.current?.scrollTo({ top: 0, behavior: "auto" });
  }, [dispositivo]);

  useEffect(() => {
    const anterior = document.body.style.overflow;
    const focoAnterior = document.activeElement;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const aoTeclar = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onCloseRef.current();
        return;
      }

      if (e.key !== "Tab" || !shellRef.current) return;

      const focaveis = [
        ...shellRef.current.querySelectorAll(
          'button:not(:disabled), [href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])'
        ),
      ].filter((el) => el.offsetParent !== null);

      if (!focaveis.length) return;

      const primeiro = focaveis[0];
      const ultimo = focaveis[focaveis.length - 1];

      if (e.shiftKey && document.activeElement === primeiro) {
        e.preventDefault();
        ultimo.focus();
      } else if (!e.shiftKey && document.activeElement === ultimo) {
        e.preventDefault();
        primeiro.focus();
      }
    };

    document.addEventListener("keydown", aoTeclar);

    return () => {
      document.body.style.overflow = anterior;
      document.removeEventListener("keydown", aoTeclar);
      if (focoAnterior instanceof HTMLElement) focoAnterior.focus();
    };
  }, []);

  if (!tpl) return null;

  const Componente = tpl.Component;

  return createPortal(
    <div
      className="tp-overlay"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="tp-shell"
        ref={shellRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="tp-titulo"
      >
        <header className="tp-toolbar">
          <div className="tp-identidade">
            <span className="tp-ao-vivo">
              <span className="tp-ao-vivo-dot" />
              Demonstração ao vivo
            </span>
            <h2 id="tp-titulo" className="tp-titulo">
              {tpl.nome}
              <span>{tpl.tipo}</span>
            </h2>
          </div>

          <div
            className="tp-dispositivos"
            role="group"
            aria-label="Tamanho da prévia"
          >
            {Object.entries(DISPOSITIVOS).map(([chave, d]) => (
              <button
                key={chave}
                type="button"
                className={`tp-dispositivo ${
                  dispositivo === chave ? "is-ativo" : ""
                }`}
                onClick={() => setDispositivo(chave)}
                aria-pressed={dispositivo === chave}
                title={d.rotulo}
              >
                <IconeDispositivo tipo={chave} />
                <span>{d.rotulo}</span>
              </button>
            ))}
          </div>

          <div className="tp-acoes">
            <button
              type="button"
              className="tp-usar"
              onClick={() => onUse(`${tpl.nome} — ${tpl.tipo}`)}
            >
              Usar este template
            </button>
            <button
              type="button"
              className="tp-fechar"
              onClick={onClose}
              aria-label="Fechar demonstração"
              ref={closeRef}
            >
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>
        </header>

        <div className="tp-area" ref={areaRef}>
          <div
            className="tp-palco"
            style={{ width: dim.w * escala, height: dim.h * escala }}
          >
            <div
              className="tp-escala"
              style={{
                width: dim.w,
                height: dim.h,
                transform: `scale(${escala})`,
              }}
            >
              <div className={`tp-moldura tp-moldura--${dispositivo}`}>
                {dispositivo === "mobile" ? (
                  <ChromeCelular />
                ) : (
                  <ChromeNavegador url={tpl.url} />
                )}

                <div className="tp-viewport" ref={viewportRef}>
                  <PreviewContext.Provider value={contexto}>
                    <Componente />
                  </PreviewContext.Provider>
                </div>

                {dispositivo === "mobile" && (
                  <span className="tp-home" aria-hidden="true" />
                )}
              </div>
            </div>
          </div>
        </div>

        <footer className="tp-rodape">
          <span>Template conceitual · Navegue e interaja à vontade</span>
          <span>
            <kbd>Esc</kbd> para fechar
          </span>
        </footer>
      </div>
    </div>,
    document.body
  );
}
