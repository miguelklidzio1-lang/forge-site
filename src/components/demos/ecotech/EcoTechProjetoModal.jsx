import { useRef } from "react";
import useDialog from "../../../hooks/useDialog.js";
import { EcoProjectScene } from "./EcoScenes.jsx";
import { IconeCheck, IconeMapa, IconeSeta, IconeSol, IconeX } from "./EcoTechIcons.jsx";

export default function EcoTechProjetoModal({ projeto, onClose, onOrcamento }) {
  const fecharRef = useRef(null);
  const dialogRef = useDialog({ onClose, initialFocusRef: fecharRef });

  return (
    <div
      className="eco-modal-overlay"
      onMouseDown={(evento) => {
        if (evento.target === evento.currentTarget) onClose();
      }}
    >
      <div
        className="eco-modal"
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="eco-modal-titulo"
        aria-describedby="eco-modal-resumo"
        tabIndex={-1}
      >
        <button
          type="button"
          className="eco-modal-fechar"
          ref={fecharRef}
          onClick={onClose}
          aria-label="Fechar detalhes do projeto"
        >
          <IconeX size={20} />
        </button>

        <header className="eco-modal-cabecalho">
          <p className="eco-eyebrow">Projeto demonstrativo · {projeto.tipo}</p>
          <h2 id="eco-modal-titulo">{projeto.titulo}</h2>
          <p className="eco-modal-resumo" id="eco-modal-resumo">
            {projeto.resumo}
          </p>
          <div className="eco-modal-meta">
            <span><IconeMapa size={14} /> {projeto.local}</span>
            <span><IconeSol size={14} /> {projeto.potencia}</span>
            <span>{projeto.ano}</span>
          </div>
        </header>

        <div className="eco-modal-cena">
          <EcoProjectScene tipo={projeto.cena} />
          <span className="eco-cena-selo">Cena ilustrativa · dados fictícios</span>
        </div>

        <div className="eco-modal-corpo">
          <section>
            <p className="eco-modal-num">01 · Contexto</p>
            <h3>O desafio</h3>
            <p>{projeto.desafio}</p>
          </section>
          <section>
            <p className="eco-modal-num">02 · Projeto</p>
            <h3>O que fizemos</h3>
            <ul>
              {projeto.entregas.map((entrega) => (
                <li key={entrega}><IconeCheck size={14} /> {entrega}</li>
              ))}
            </ul>
          </section>
          <section>
            <p className="eco-modal-num">03 · Resultado</p>
            <h3>Impacto estimado</h3>
            <p>{projeto.resultado}</p>
            <div className="eco-modal-metricas">
              {projeto.metricas.map((metrica) => (
                <div key={metrica.rotulo}>
                  <strong>{metrica.valor}</strong>
                  <span>{metrica.rotulo}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        <footer className="eco-modal-rodape">
          <p>
            Projeto, endereço, números e depoimentos são fictícios e existem
            apenas para demonstrar o layout.
          </p>
          <div className="eco-modal-acoes">
            <button
              type="button"
              className="eco-btn eco-btn--primario"
              onClick={() => onOrcamento(projeto.servico)}
            >
              Quero um projeto assim <IconeSeta size={15} />
            </button>
            <button
              type="button"
              className="eco-btn eco-btn--secundario"
              onClick={onClose}
            >
              Fechar
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}
