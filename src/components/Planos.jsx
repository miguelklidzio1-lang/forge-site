import "./Planos.css";

const PLANOS = [
  {
    nome: "Essencial",
    para: "Para quem está começando a se posicionar no digital",
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
    para: "Para empresas que querem o site como principal vitrine",
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
    nome: "Sob medida",
    para: "Para lojas, plataformas e projetos com regras próprias",
    itens: [
      "Escopo desenhado junto com você",
      "Loja virtual ou sistema",
      "Painel de gestão",
      "Integrações externas",
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
            O valor final depende do escopo. As faixas abaixo servem como
            referência — o orçamento exato sai depois da conversa inicial.
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
      </div>
    </section>
  );
}
