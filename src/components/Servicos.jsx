import "./Servicos.css";

const SERVICOS = [
  {
    n: "01",
    nome: "Site institucional",
    desc: "A casa da sua empresa na internet. Estrutura clara, credível e pronta para converter visitante em cliente.",
    tags: ["Página inicial", "Sobre", "Contato", "SEO básico"],
  },
  {
    n: "02",
    nome: "Loja virtual",
    desc: "E-commerce com catálogo organizado, carrinho e checkout que não derruba o cliente no meio do caminho.",
    tags: ["Catálogo", "Pagamentos", "Frete", "Painel"],
  },
  {
    n: "03",
    nome: "Landing page",
    desc: "Uma página, um objetivo. Ideal para campanhas, lançamentos e captação de leads com formulário.",
    tags: ["Copy", "Formulário", "Métricas", "Rapidez"],
  },
  {
    n: "04",
    nome: "Reforma de site",
    desc: "Seu site existe, mas está lento, desatualizado ou com aparência de 2012. A gente reforja por dentro e por fora.",
    tags: ["Redesign", "Performance", "Mobile", "Acessibilidade"],
  },
  {
    n: "05",
    nome: "Manutenção contínua",
    desc: "Atualizações, correções, novas seções e monitoramento. Seu site acompanha o ritmo do negócio.",
    tags: ["Suporte", "Backup", "Monitoramento", "Evolutivo"],
  },
];

export default function Servicos() {
  return (
    <section id="servicos">
      <div className="wrap">
        <header className="reveal servicos-cabecalho">
          <p className="rotulo">O que a forja produz</p>
          <h2 className="titulo-sec">
            Serviços <em>sob medida</em>
          </h2>
          <p className="servicos-lead">
            Cada negócio tem uma estrutura diferente. Em vez de encaixar sua
            empresa num molde pronto, a gente desenha o molde a partir dela.
          </p>
        </header>

        <ol className="servicos-lista">
          {SERVICOS.map((s) => (
            <li key={s.n} className="servico reveal">
              <span className="servico-n">{s.n}</span>
              <div className="servico-corpo">
                <h3 className="servico-nome">{s.nome}</h3>
                <p className="servico-desc">{s.desc}</p>
                <ul className="servico-tags">
                  {s.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
