import { useState } from "react";
import "./Contato.css";

const INSTAGRAM = "https://www.instagram.com/forge_sitee/";

export default function Contato() {
  const [dados, setDados] = useState({
    nome: "",
    empresa: "",
    tipo: "Site institucional",
    mensagem: "",
  });

  const [status, setStatus] = useState("");

  const mudar = (campo) => (ev) =>
    setDados((d) => ({ ...d, [campo]: ev.target.value }));

  const enviar = async (ev) => {
    ev.preventDefault();
    const mensagem = `Olá, Forge! Meu nome é ${dados.nome || "___"}.${
      dados.empresa ? ` Tenho uma empresa: ${dados.empresa}.` : ""
    }\n\nTenho interesse em: ${dados.tipo}\n\n${dados.mensagem || ""}`;

    try {
      await navigator.clipboard.writeText(mensagem);
      setStatus("Mensagem copiada. Cole no chat do Instagram!");
    } catch {
      setStatus("Não deu para copiar. Chame a gente no Instagram e conte!");
    }
    window.open(INSTAGRAM, "_blank", "noopener");
  };

  return (
    <section id="contato" className="contato">
      <div className="wrap contato-grade">
        <div className="reveal">
          <p className="rotulo">Solicite seu orçamento</p>
          <h2 className="titulo-sec">
            Bora <em>forjar</em> o seu?
          </h2>
          <p className="contato-lead">
            Conte em poucas linhas o que sua empresa precisa. Respondemos pelo
            Instagram com uma proposta clara, sem compromisso.
          </p>

          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="contato-ig"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              />
              <circle
                cx="12"
                cy="12"
                r="4.2"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              />
              <circle cx="17.4" cy="6.6" r="1.2" fill="currentColor" />
            </svg>
            @forge_sitee
          </a>
        </div>

        <form className="contato-form reveal" onSubmit={enviar}>
          <label className="campo">
            <span>Seu nome</span>
            <input
              type="text"
              value={dados.nome}
              onChange={mudar("nome")}
              placeholder="Como podemos te chamar?"
              required
            />
          </label>

          <label className="campo">
            <span>Empresa <i>(opcional)</i></span>
            <input
              type="text"
              value={dados.empresa}
              onChange={mudar("empresa")}
              placeholder="Nome do seu negócio"
            />
          </label>

          <label className="campo">
            <span>O que você precisa</span>
            <select value={dados.tipo} onChange={mudar("tipo")}>
              <option>Site institucional</option>
              <option>Loja virtual</option>
              <option>Landing page</option>
              <option>Reforma de site existente</option>
              <option>Manutenção contínua</option>
              <option>Ainda não sei / outro</option>
            </select>
          </label>

          <label className="campo">
            <span>Conte um pouco mais</span>
            <textarea
              rows="4"
              value={dados.mensagem}
              onChange={mudar("mensagem")}
              placeholder="O que sua empresa faz e o que você quer alcançar com o site?"
            />
          </label>

          <button type="submit" className="btn btn-brasa contato-enviar">
            Preparar mensagem
          </button>

          <p className="contato-nota" role="status">
            {status ||
              "Copiamos sua mensagem e abrimos o Instagram — é só colar no chat."}
          </p>
        </form>
      </div>
    </section>
  );
}
