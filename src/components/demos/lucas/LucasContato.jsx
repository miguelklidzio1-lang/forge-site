import { useEffect, useRef, useState } from "react";
import { IconeCheck, IconeSeta } from "./LucasIcons.jsx";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const TIPOS = [
  "Site institucional",
  "Landing page",
  "Aplicação web",
  "Design system",
  "Outro",
];

export default function LucasContato() {
  const [dados, setDados] = useState({
    nome: "",
    email: "",
    tipo: "",
    mensagem: "",
  });
  const [erros, setErros] = useState({});
  const [sucesso, setSucesso] = useState(false);
  const nomeRef = useRef(null);
  const emailRef = useRef(null);
  const tipoRef = useRef(null);
  const mensagemRef = useRef(null);
  const sucessoRef = useRef(null);

  useEffect(() => {
    if (sucesso) sucessoRef.current?.focus();
  }, [sucesso]);

  function alterar(campo, valor) {
    setDados((atual) => ({ ...atual, [campo]: valor }));
    if (erros[campo]) {
      setErros((atual) => {
        const proximo = { ...atual };
        delete proximo[campo];
        return proximo;
      });
    }
  }

  function validar() {
    const novos = {};
    if (dados.nome.trim().length < 2) {
      novos.nome = "Informe seu nome.";
    }
    if (!EMAIL.test(dados.email.trim())) {
      novos.email = "Informe um e-mail válido para contato.";
    }
    if (!dados.tipo) {
      novos.tipo = "Selecione o tipo de projeto.";
    }
    if (dados.mensagem.trim().length < 10) {
      novos.mensagem = "Conte um pouco mais: pelo menos 10 caracteres.";
    }
    return novos;
  }

  function enviar(evento) {
    evento.preventDefault();
    const novos = validar();
    setErros(novos);

    if (Object.keys(novos).length > 0) {
      const primeiro = Object.keys(novos)[0];
      const referencias = {
        nome: nomeRef,
        email: emailRef,
        tipo: tipoRef,
        mensagem: mensagemRef,
      };
      referencias[primeiro]?.current?.focus();
      return;
    }

    setSucesso(true);
  }

  function reiniciar() {
    setDados({ nome: "", email: "", tipo: "", mensagem: "" });
    setErros({});
    setSucesso(false);
    window.setTimeout(() => nomeRef.current?.focus(), 50);
  }

  if (sucesso) {
    return (
      <div
        className="lc-contato-sucesso"
        ref={sucessoRef}
        tabIndex={-1}
        role="status"
      >
        <span className="lc-contato-check" aria-hidden="true">
          <IconeCheck size={22} />
        </span>
        <p className="lc-eyebrow">Validação concluída</p>
        <h3>Mensagem demonstrativa pronta.</h3>
        <p>
          Os campos foram validados, mas <strong>nada foi enviado</strong>. Este
          portfólio é uma demonstração e não possui um serviço de mensagens.
        </p>
        <button type="button" className="lc-btn lc-btn--secundario" onClick={reiniciar}>
          Escrever outra mensagem <IconeSeta size={15} />
        </button>
      </div>
    );
  }

  return (
    <form className="lc-contato-form" onSubmit={enviar} noValidate>
      <div className="lc-form-topo">
        <div>
          <p className="lc-eyebrow">Formulário demonstrativo</p>
          <h3>Vamos conversar?</h3>
        </div>
        <span className="lc-form-pill">Sem envio real</span>
      </div>

      <div className="lc-form-dupla">
        <div className="lc-form-linha">
          <label htmlFor="lc-nome">Nome</label>
          <input
            ref={nomeRef}
            id="lc-nome"
            name="nome"
            type="text"
            autoComplete="name"
            placeholder="Seu nome"
            value={dados.nome}
            onChange={(evento) => alterar("nome", evento.target.value)}
            aria-invalid={Boolean(erros.nome)}
            aria-describedby={erros.nome ? "lc-erro-nome" : undefined}
          />
          {erros.nome && (
            <span className="lc-erro" id="lc-erro-nome">
              {erros.nome}
            </span>
          )}
        </div>

        <div className="lc-form-linha">
          <label htmlFor="lc-email">E-mail</label>
          <input
            ref={emailRef}
            id="lc-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="voce@exemplo.com"
            value={dados.email}
            onChange={(evento) => alterar("email", evento.target.value)}
            aria-invalid={Boolean(erros.email)}
            aria-describedby={erros.email ? "lc-erro-email" : undefined}
          />
          {erros.email && (
            <span className="lc-erro" id="lc-erro-email">
              {erros.email}
            </span>
          )}
        </div>
      </div>

      <div className="lc-form-linha">
        <label htmlFor="lc-tipo">Tipo de projeto</label>
        <select
          ref={tipoRef}
          id="lc-tipo"
          name="tipo"
          value={dados.tipo}
          onChange={(evento) => alterar("tipo", evento.target.value)}
          aria-invalid={Boolean(erros.tipo)}
          aria-describedby={erros.tipo ? "lc-erro-tipo" : undefined}
        >
          <option value="">Selecione uma opção</option>
          {TIPOS.map((tipo) => (
            <option key={tipo} value={tipo}>
              {tipo}
            </option>
          ))}
        </select>
        {erros.tipo && (
          <span className="lc-erro" id="lc-erro-tipo">
            {erros.tipo}
          </span>
        )}
      </div>

      <div className="lc-form-linha">
        <label htmlFor="lc-mensagem">Mensagem</label>
        <textarea
          ref={mensagemRef}
          id="lc-mensagem"
          name="mensagem"
          rows={4}
          placeholder="Conte brevemente sobre o projeto, o contexto e o que você precisa."
          value={dados.mensagem}
          onChange={(evento) => alterar("mensagem", evento.target.value)}
          aria-invalid={Boolean(erros.mensagem)}
          aria-describedby={
            erros.mensagem ? "lc-erro-mensagem" : "lc-dica-mensagem"
          }
        />
        {erros.mensagem ? (
          <span className="lc-erro" id="lc-erro-mensagem">
            {erros.mensagem}
          </span>
        ) : (
          <span className="lc-dica" id="lc-dica-mensagem">
            A mensagem não será enviada. O botão apenas valida os campos.
          </span>
        )}
      </div>

      <button type="submit" className="lc-btn lc-btn--primario lc-form-enviar">
        Enviar mensagem de teste <IconeSeta size={16} />
      </button>
      <p className="lc-form-aviso">
        Demonstração de portfólio: sem backend, sem envio de e-mail e sem
        armazenamento de dados.
      </p>
    </form>
  );
}
