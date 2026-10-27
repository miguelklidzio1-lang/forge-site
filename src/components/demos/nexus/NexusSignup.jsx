import { useEffect, useRef, useState } from "react";
import { IconeCheck, IconeSeta } from "./NexusIcons.jsx";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function NexusSignup({ plano, setPlano, planos }) {
  const [dados, setDados] = useState({ nome: "", email: "", senha: "" });
  const [erros, setErros] = useState({});
  const [sucesso, setSucesso] = useState(false);
  const nomeRef = useRef(null);
  const emailRef = useRef(null);
  const senhaRef = useRef(null);
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
      novos.nome = "Informe um nome com pelo menos 2 caracteres.";
    }
    if (!EMAIL.test(dados.email.trim())) {
      novos.email = "Informe um e-mail válido, como nome@empresa.com.";
    }
    if (dados.senha.length < 8) {
      novos.senha = "A senha de teste precisa ter pelo menos 8 caracteres.";
    }

    return novos;
  }

  function enviar(evento) {
    evento.preventDefault();
    const novos = validar();
    setErros(novos);

    if (Object.keys(novos).length > 0) {
      const primeiro = Object.keys(novos)[0];
      const referencias = { nome: nomeRef, email: emailRef, senha: senhaRef };
      referencias[primeiro]?.current?.focus();
      return;
    }

    setSucesso(true);
  }

  function reiniciar() {
    setDados({ nome: "", email: "", senha: "" });
    setErros({});
    setSucesso(false);
    window.setTimeout(() => nomeRef.current?.focus(), 50);
  }

  if (sucesso) {
    return (
      <div
        className="nx-cadastro-sucesso"
        ref={sucessoRef}
        tabIndex={-1}
        role="status"
      >
        <span className="nx-cadastro-check" aria-hidden="true">
          <IconeCheck size={24} />
        </span>
        <p className="nx-eyebrow">Validação concluída</p>
        <h3>Cadastro demonstrativo concluído.</h3>
        <p>
          O plano <strong>{plano}</strong> foi selecionado. Nenhuma conta foi
          criada, nenhum pagamento foi processado e nenhum dado saiu deste
          navegador.
        </p>
        <button type="button" className="nx-btn nx-btn--secundario" onClick={reiniciar}>
          Fazer novo teste <IconeSeta size={16} />
        </button>
      </div>
    );
  }

  return (
    <form className="nx-form" onSubmit={enviar} noValidate>
      <div className="nx-form-topo">
        <p className="nx-eyebrow">Cadastro de demonstração</p>
        <span className="nx-form-pill">Sem cartão</span>
      </div>

      <div className="nx-form-linha">
        <label htmlFor="nx-nome">Nome</label>
        <input
          ref={nomeRef}
          id="nx-nome"
          name="nome"
          type="text"
          autoComplete="name"
          placeholder="Como podemos chamar você?"
          value={dados.nome}
          onChange={(evento) => alterar("nome", evento.target.value)}
          aria-invalid={Boolean(erros.nome)}
          aria-describedby={erros.nome ? "nx-erro-nome" : undefined}
        />
        {erros.nome && (
          <span className="nx-erro" id="nx-erro-nome">
            {erros.nome}
          </span>
        )}
      </div>

      <div className="nx-form-linha">
        <label htmlFor="nx-email">E-mail de trabalho</label>
        <input
          ref={emailRef}
          id="nx-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="voce@empresa.com"
          value={dados.email}
          onChange={(evento) => alterar("email", evento.target.value)}
          aria-invalid={Boolean(erros.email)}
          aria-describedby={erros.email ? "nx-erro-email" : undefined}
        />
        {erros.email && (
          <span className="nx-erro" id="nx-erro-email">
            {erros.email}
          </span>
        )}
      </div>

      <div className="nx-form-linha">
        <label htmlFor="nx-senha">Senha de teste</label>
        <input
          ref={senhaRef}
          id="nx-senha"
          name="senha"
          type="password"
          autoComplete="new-password"
          placeholder="Mínimo de 8 caracteres"
          value={dados.senha}
          onChange={(evento) => alterar("senha", evento.target.value)}
          aria-invalid={Boolean(erros.senha)}
          aria-describedby={erros.senha ? "nx-erro-senha" : "nx-dica-senha"}
        />
        {erros.senha ? (
          <span className="nx-erro" id="nx-erro-senha">
            {erros.senha}
          </span>
        ) : (
          <span className="nx-dica" id="nx-dica-senha">
            Apenas para testar a validação. Nada é armazenado.
          </span>
        )}
      </div>

      <div className="nx-form-linha">
        <label htmlFor="nx-plano">Plano</label>
        <select
          id="nx-plano"
          name="plano"
          value={plano}
          onChange={(evento) => setPlano(evento.target.value)}
        >
          {planos.map((item) => (
            <option key={item.nome} value={item.nome}>
              {item.nome} — {item.preco}/mês
            </option>
          ))}
        </select>
      </div>

      <button type="submit" className="nx-btn nx-btn--primario nx-form-enviar">
        Criar conta demonstrativa <IconeSeta size={17} />
      </button>

      <p className="nx-form-aviso">
        Demonstração: nenhuma conta, cobrança ou autenticação real. Os dados
        ficam apenas neste navegador e não são enviados.
      </p>
    </form>
  );
}
