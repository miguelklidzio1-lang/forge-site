import { useRef } from "react";
import useDialog from "../../../hooks/useDialog.js";
import LucasProjectVisual from "./LucasProjectVisuals.jsx";
import { IconeCheck, IconeSeta, IconeX } from "./LucasIcons.jsx";

export default function LucasProjetoModal({ projeto, onClose, onContato }) {
  const fecharRef = useRef(null);
  const dialogRef = useDialog({ onClose, initialFocusRef: fecharRef });

  return (
    <div
      className="lc-modal-overlay"
      onMouseDown={(evento) => {
        if (evento.target === evento.currentTarget) onClose();
      }}
    >
      <div
        className="lc-modal"
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="lc-modal-titulo"
        aria-describedby="lc-modal-resumo"
        tabIndex={-1}
      >
        <button
          type="button"
          className="lc-modal-fechar"
          ref={fecharRef}
          onClick={onClose}
          aria-label="Fechar detalhes do projeto"
        >
          <IconeX size={20} />
        </button>

        <div className="lc-modal-cabecalho">
          <p className="lc-eyebrow">
            Estudo de caso · {projeto.tipo} · {projeto.ano}
          </p>
          <h2 id="lc-modal-titulo">{projeto.titulo}</h2>
          <p className="lc-modal-resumo" id="lc-modal-resumo">
            {projeto.resumo}
          </p>
          <div className="lc-modal-meta">
            {projeto.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>

        <div className="lc-modal-visual">
          <LucasProjectVisual tipo={projeto.visual} />
        </div>

        <div className="lc-modal-corpo">
          <section>
            <p className="lc-modal-num">01</p>
            <h3>Contexto</h3>
            <p>{projeto.contexto}</p>
          </section>
          <section>
            <p className="lc-modal-num">02</p>
            <h3>O que eu fiz</h3>
            <ul>
              {projeto.entregas.map((entrega) => (
                <li key={entrega}>
                  <IconeCheck size={14} /> {entrega}
                </li>
              ))}
            </ul>
          </section>
          <section>
            <p className="lc-modal-num">03</p>
            <h3>Resultado</h3>
            <p>{projeto.resultado}</p>
            <div className="lc-modal-stack">
              {projeto.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </section>
        </div>

        <div className="lc-modal-rodape">
          <p>
            Projeto e dados fictícios, criados apenas para esta demonstração de
            portfólio.
          </p>
          <div className="lc-modal-acoes">
            <button
              type="button"
              className="lc-btn lc-btn--primario"
              onClick={onContato}
            >
              Conversar sobre algo parecido <IconeSeta size={15} />
            </button>
            <button
              type="button"
              className="lc-btn lc-btn--secundario"
              onClick={onClose}
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
