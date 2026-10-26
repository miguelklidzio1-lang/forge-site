import "./Planos.css";

const PLANOS = [
  {
    nome: "Básico",
    preco: "350 – 500",
    unidade: "projeto",
    para: "Para quem precisa de um site simples, credível e no ar rápido.",
    itens: [
      "Site de até 4 seções",
      "Design sob medida",
      "Versão mobile",
      "Formulário de contato",
      "1 rodada de ajustes",
    ],
    destaque: false,
  },
  {
    nome: "Profissional",
    preco: "800",
    unidade: "projeto",
    para: "Para empresas que querem o site como principal vitrine.",
    itens: [
      "Site de até 8 seções",
      "Design sob medida",
      "Otimização de performance",
      "SEO técnico inicial",
      "Integração com redes e WhatsApp",
      "Rodadas de ajustes ilimitadas",
    ],
    destaque: true,
  },
  {
    nome: "Com IA",
    preco: "1.200",
    unidade: "projeto",
    para: "Para quem quer o site trabalhando por você 24 horas.",
    itens: [
      "Tudo do plano Profissional",
      "Bots de atendimento",
      "Agentes de IA no site",
      "Respostas automáticas para clientes",
      "Integração com WhatsApp",
      "Suporte contínuo disponível",
    ],
    destaque: false,
  },
];

export default function Planos() {
  return (
    <section id="planos" className="planos">
      <div className="wrap">
        <header className="reveal planos-cabecalho">
          <p className="rotulo">Investimento</p>
          <h2 className="titulo-sec">
            Planos que <em>crescem</em> com você
          </h2>
          <p className="planos-lead">
            Preço fechado, sem pegadinha. O valor final sai no orçamento
            depois da conversa — depende do escopo de cada projeto.
          </p>
        </header>

        <div className="planos-grade">
          {PLANOS.map((p) => (
            <article
              key={p.nome}
              className={`plano reveal ${p.destaque ? "plano--destaque" : ""}`}
            >
              {p.destaque && <span className="plano-selo">Mais pedido</span>}
              <h3 className="plano-nome">{p.nome}</h3>
              <p className="plano-para">{p.para}</p>

              <div className="plano-preco">
                <span className="plano-moeda">R$</span>
                <span className="plano-valor">{p.preco}</span>
                <span className="plano-unidade">/ {p.unidade}</span>
              </div>

              <ul className="plano-itens">
                {p.itens.map((item) => (
                  <li key={item}>
                    <svg viewBox="0 0 16 16" width="13" height="13" aria-hidden="true">
                      <path
                        d="M2 8.5 6 12l8-9"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="#contato"
                className={`btn ${p.destaque ? "btn-brasa" : "btn-frio"} plano-btn`}
              >
                Pedir orçamento
              </a>
            </article>
          ))}
        </div>

        <p className="planos-obs reveal">
          Valores em reais. Pagamento combinado direto com a gente, sem
          mensalidade obrigatória — o site é seu.
        </p>
      </div>
    </section>
  );
}
