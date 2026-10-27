import { useState } from "react";
import MockupSite from "./ilustracoes/MockupSite.jsx";
import TemplatePreview from "./templates/TemplatePreview.jsx";
import "./Portfolio.css";

const ESTUDOS = [
  {
    tipo: "restaurante",
    nome: "Restaurante",
    nota: "Escuro, editorial, reserva em destaque",
  },
  {
    tipo: "clinica",
    nome: "Clínica",
    nota: "Claro, confiável, agenda online",
  },
  {
    tipo: "loja",
    nome: "Loja de moda",
    nota: "Editorial, catálogo visual",
  },
];

function IconePlay() {
  return (
    <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" aria-hidden="true">
      <path d="M8 5v14l11-7L8 5Z" />
    </svg>
  );
}

function IconeSeta() {
  return (
    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function Portfolio() {
  const [aberto, setAberto] = useState(null);

  function usarTemplate(nome) {
    setAberto(null);
    window.dispatchEvent(new CustomEvent("forge:template", { detail: nome }));
    window.setTimeout(() => {
      document
        .getElementById("contato")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  }

  return (
    <section id="portfolio" className="portfolio">
      <div className="wrap">
        <header className="reveal portfolio-cabecalho">
          <div className="portfolio-cabecalho-topo">
            <p className="rotulo">Templates interativos</p>
            <span className="portfolio-badge">
              <span className="portfolio-badge-dot" />
              3 demonstrações ao vivo
            </span>
          </div>
          <h2 className="titulo-sec">
            Explore por <em>dentro</em>
          </h2>
          <p className="portfolio-lead">
            Três direções completas para sentir o site funcionando antes de
            começar. Navegue, preencha, adicione à sacola — tudo é interativo.
            Nenhuma é engessada: o seu nasce daqui, com a sua marca.
          </p>
        </header>

        <div className="portfolio-grade">
          {ESTUDOS.map((estudo, i) => (
            <article
              key={estudo.tipo}
              className="portfolio-item reveal"
              style={{ "--d": `${i * 110}ms` }}
            >
              <div className="portfolio-visual">
                <MockupSite tipo={estudo.tipo} />
                <button
                  type="button"
                  className="portfolio-hit"
                  onClick={() => setAberto(estudo.tipo)}
                  aria-label={`Abrir demonstração interativa do template ${estudo.nome}`}
                  aria-haspopup="dialog"
                >
                  <span className="portfolio-play">
                    <IconePlay /> Abrir demo
                  </span>
                </button>
              </div>

              <div className="portfolio-legenda">
                <div className="portfolio-ident">
                  <span className="portfolio-num">
                    Template {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="portfolio-nome">{estudo.nome}</span>
                </div>
                <div className="portfolio-meta">
                  <span className="portfolio-nota">{estudo.nota}</span>
                  <button
                    type="button"
                    className="portfolio-abrir-link"
                    onClick={() => setAberto(estudo.tipo)}
                  >
                    Ver ao vivo <IconeSeta />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="portfolio-aviso reveal">
          Demonstrações conceituais. O seu projeto começa do zero — estes
          templates são pontos de partida, não fórmulas prontas.
        </p>
      </div>

      {aberto && (
        <TemplatePreview
          tipo={aberto}
          onClose={() => setAberto(null)}
          onUse={usarTemplate}
        />
      )}
    </section>
  );
}
