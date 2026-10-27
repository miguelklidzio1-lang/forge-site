import "./Diferenciais.css";

const PONTOS = [
  {
    titulo: "Nada de template pronto",
    desc: "Não compramos um tema e trocamos o logo. Cada projeto é desenhado do zero para o seu negócio.",
  },
  {
    titulo: "Fala com quem faz",
    desc: "Você conversa direto com quem constrói o site. Sem intermediário, sem atendimento robótico.",
  },
  {
    titulo: "Velocidade é padrão",
    desc: "Páginas leves, otimizadas para carregar rápido no celular — inclusive naquele sinal ruim.",
  },
  {
    titulo: "Você tem o controle",
    desc: "Ao final, o site é seu: código, domínio e acesso. Sem amarras — a taxa mensal é só para manter tudo no ar e cuidando do site.",
  },
];

const DIFERENCIAIS = [
  { valor: "Mobile-first", nota: "Pensado primeiro para o celular" },
  { valor: "SEO técnico", nota: "Estrutura pronta para o Google" },
  { valor: "Sem enrolação", nota: "Prazo combinado antes de começar" },
];

export default function Diferenciais() {
  return (
    <section id="diferenciais">
      <div className="wrap diferenciais-grade">
        <div className="reveal">
          <p className="rotulo">Por que a Forge</p>
          <h2 className="titulo-sec">
            Feito com <em>martelo</em>, não com molde
          </h2>
          <p className="diferenciais-lead">
            A diferença entre um site genérico e um site bem feito é a mesma
            diferença entre uma peça de fábrica e uma peça forjada à mão.
          </p>

          <ul className="diferenciais-chips">
            {DIFERENCIAIS.map((d) => (
              <li key={d.valor}>
                <strong>{d.valor}</strong>
                <span>{d.nota}</span>
              </li>
            ))}
          </ul>
        </div>

        <ul className="diferenciais-lista">
          {PONTOS.map((p, i) => (
            <li key={p.titulo} className="diferencial reveal">
              <span className="diferencial-n">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="diferencial-titulo">{p.titulo}</h3>
                <p className="diferencial-desc">{p.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
