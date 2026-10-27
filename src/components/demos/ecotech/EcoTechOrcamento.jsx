import { useEffect, useRef, useState } from "react";
import { IconeCheck, IconeSeta } from "./EcoTechIcons.jsx";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const SERVICOS_ORCAMENTO = [
  "Energia solar residencial",
  "Solar para condomínios",
  "Solar para empresas",
  "Automação e eficiência",
  "Ainda não sei",
];

export default function EcoTechOrcamento({ servico, onServicoChange }) {
  const [dados, setDados] = useState({
    nome: "",
    email: "",
    cidade: "",
    mensagem: "",
  });
  const [erros, setErros] = useState({});
  const [sucesso, setSucesso] = useState(false);
  const nomeRef = useRef(null);
  const emailRef = useRef(null);
  const cidadeRef = useRef(null);
  const servicoRef = useRef(null);
  const mensagemRef = useRef(null);
  const sucessoRef = useRef(null);

  useEffect(() => {
    if (servico) setSucesso(false);
  }, [servico]);

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
    if (dados.cidade.trim().length < 2) {
      novos.cidade = "Informe a cidade do projeto.";
    }
    if (!servico) {
      novos.servico = "Selecione um serviço para continuar.";
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
      const referencias = {
        nome: nomeRef,
        email: emailRef,
        cidade: cidadeRef,
        servico: servicoRef,
        mensagem: mensagemRef,
      };
      referencias[Object.keys(novos)[0]]?.current?.focus();
      return;
    }

    setSucesso(true);
  }

  function reiniciar() {
    setDados({ nome: "", email: "", cidade: "", mensagem: "" });
    setErros({});
    setSucesso(false);
    onServicoChange("");
    window.setTimeout(() => nomeRef.current?.focus(), 50);
  }

  if (sucesso) {
    return (
      <div
        className="eco-orcamento-sucesso"
        ref={sucessoRef}
        tabIndex={-1}
        role="status"
      >
        <span className="eco-sucesso-icone" aria-hidden="true">
          <IconeCheck size={24} />
        </span>
        <p className="eco-eyebrow">Validação concluída</p>
        <h3>Solicitação demonstrativa pronta.</h3>
        <p>
          Os campos foram validados, mas <strong>nada foi enviado</strong>. A
          EcoTech é uma empresa fictícia e esta página não possui backend,
          armazenamento ou contato real.
        </p>
        <button
          type="button"
          className="eco-btn eco-btn--secundario"
          onClick={reiniciar}
        >
          Fazer outra simulação <IconeSeta size={15} />
        </button>
      </div>
    );
  }

  return (
    <form className="eco-orcamento-form" onSubmit={enviar} noValidate>
      <div className="eco-form-cabecalho">
        <div>
          <p className="eco-eyebrow">Orçamento demonstrativo</p>
          <h3>Conte sobre o seu projeto</h3>
        </div>
        <span className="eco-form-pill">Sem envio real</span>
      </div>

      <div className="eco-form-dupla">
        <div className="eco-form-linha">
          <label htmlFor="eco-nome">Nome</label>
          <input
            ref={nomeRef}
            id="eco-nome"
            name="nome"
            type="text"
            autoComplete="name"
            placeholder="Como podemos chamar você?"
            value={dados.nome}
            onChange={(evento) => alterar("nome", evento.target.value)}
            aria-invalid={Boolean(erros.nome)}
            aria-describedby={erros.nome ? "eco-erro-nome" : undefined}
          />
          {erros.nome && (
            <span className="eco-erro" id="eco-erro-nome">{erros.nome}</span>
          )}
        </div>

        <div className="eco-form-linha">
          <label htmlFor="eco-email">E-mail</label>
          <input
            ref={emailRef}
            id="eco-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="voce@exemplo.com"
            value={dados.email}
            onChange={(evento) => alterar("email", evento.target.value)}
            aria-invalid={Boolean(erros.email)}
            aria-describedby={erros.email ? "eco-erro-email" : undefined}
          />
          {erros.email && (
            <span className="eco-erro" id="eco-erro-email">{erros.email}</span>
          )}
        </div>
      </div>

      <div className="eco-form-dupla">
        <div className="eco-form-linha">
          <label htmlFor="eco-cidade">Cidade</label>
          <input
            ref={cidadeRef}
            id="eco-cidade"
            name="cidade"
            type="text"
            autoComplete="address-level2"
            placeholder="Cidade e estado"
            value={dados.cidade}
            onChange={(evento) => alterar("cidade", evento.target.value)}
            aria-invalid={Boolean(erros.cidade)}
            aria-describedby={erros.cidade ? "eco-erro-cidade" : undefined}
          />
          {erros.cidade && (
            <span className="eco-erro" id="eco-erro-cidade">{erros.cidade}</span>
          )}
        </div>

        <div className="eco-form-linha">
          <label htmlFor="eco-servico">Serviço de interesse</label>
          <select
            ref={servicoRef}
            id="eco-servico"
            name="servico"
            value={servico}
            onChange={(evento) => onServicoChange(evento.target.value)}
            aria-invalid={Boolean(erros.servico)}
            aria-describedby={erros.servico ? "eco-erro-servico" : undefined}
          >
            <option value="">Selecione uma opção</option>
            {SERVICOS_ORCAMENTO.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
          {erros.servico && (
            <span className="eco-erro" id="eco-erro-servico">{erros.servico}</span>
          )}
        </div>
      </div>

      <div className="eco-form-linha">
        <label htmlFor="eco-mensagem">Mensagem</label>
        <textarea
          ref={mensagemRef}
          id="eco-mensagem"
          name="mensagem"
          rows={4}
          placeholder="Conte sobre o imóvel, o consumo aproximado ou o que você gostaria de resolver."
          value={dados.mensagem}
          onChange={(evento) => alterar("mensagem", evento.target.value)}
          aria-invalid={Boolean(erros.mensagem)}
          aria-describedby={
            erros.mensagem ? "eco-erro-mensagem" : "eco-dica-mensagem"
          }
        />
        {erros.mensagem ? (
          <span className="eco-erro" id="eco-erro-mensagem">
            {erros.mensagem}
          </span>
        ) : (
          <span className="eco-dica" id="eco-dica-mensagem">
            Este formulário valida os campos no navegador. Nenhum dado é enviado
            ou armazenado.
          </span>
        )}
      </div>

      <button type="submit" className="eco-btn eco-btn--primario eco-form-enviar">
        Enviar solicitação de teste <IconeSeta size={16} />
      </button>
      <p className="eco-form-aviso">
        Demonstração de portfólio: sem backend, sem orçamento real e sem
        armazenamento de dados.
      </p>
    </form>
  );
}
