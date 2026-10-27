import "./Processo.css";

const ETAPAS = [
  {
    fase: "Aquecimento",
    titulo: "Conversa e diagnóstico",
    desc: "Entendemos o negócio, o público e o objetivo do site. Você fala, a gente anota tudo.",
    tempo: "Dia 1–2",
  },
  {
    fase: "Forjamento",
    titulo: "Design sob medida",
    desc: "Montamos o visual do zero: paleta, tipografia e layout desenhados para a sua marca.",
    tempo: "Dia 3–8",
  },
  {
    fase: "Martelada",
    titulo: "Desenvolvimento",
    desc: "O design vira código limpo, responsivo e leve. Testado em celular, tablet e desktop.",
    tempo: "Dia 9–15",
  },
  {
    fase: "Tempera",
    titulo: "Ajustes com você",
    desc: "Você revisa, pede mudanças e a gente afina até ficar redondo. Sem limite de rodadas.",
    tempo: "Dia 16–19",
  },
  {
    fase: "Recozimento",
    titulo: "Entrega e publicação",
    desc: "Colocamos no ar, conectamos domínio e ensinamos você a mexer no essencial.",
    tempo: "Dia 20",
  },
];

export default function Processo() {
  return (
    <section id="processo" className="processo">
      <div className="wrap">
        <header className="reveal processo-cabecalho">
          <p className="rotulo">Como funciona</p>
          <h2 className="titulo-sec">
            Do projeto ao <em>fogo</em>
          </h2>
          <p className="processo-lead">
            Um processo direto, com prazo combinado antes de começar. Você sabe
            o que está acontecendo em cada etapa.
          </p>
        </header>

        <ol className="processo-trilho">
          {ETAPAS.map((e, i) => (
            <li
              key={e.fase}
              className="etapa reveal"
              style={{ "--d": `${i * 90}ms` }}
            >
              <div className="etapa-marca">
                <span className="etapa-bola" />
                {i < ETAPAS.length - 1 && <span className="etapa-linha" />}
              </div>
              <div className="etapa-corpo">
                <div className="etapa-topo">
                  <span className="etapa-fase">{e.fase}</span>
                  <span className="etapa-tempo">{e.tempo}</span>
                </div>
                <h3 className="etapa-titulo">{e.titulo}</h3>
                <p className="etapa-desc">{e.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
