import ForgeSparks from "./ForgeSparks.jsx";
import CenaForja from "./ilustracoes/CenaForja.jsx";
import "./Hero.css";

const NUMEROS = [
  { valor: "100%", nota: "Código sob medida" },
  { valor: "3s", nota: "Meta de carregamento" },
  { valor: "1", nota: "Time direto com você" },
];

export default function Hero() {
  return (
    <section className="hero" id="topo">
      {/* Brasas subindo atrás do conteúdo */}
      <ForgeSparks densidade={1} />

      {/* Brilho de forja atrás do texto */}
      <div className="hero-brasa hero-brasa--a" aria-hidden="true" />
      <div className="hero-brasa hero-brasa--b" aria-hidden="true" />

      <div className="wrap hero-grade">
        <div className="hero-texto">
          <p className="rotulo">Estúdio de sites · sob medida</p>

          <h1 className="hero-titulo">
            <span className="hero-linha">
              <span>Sites que</span>
            </span>
            <span className="hero-linha">
              <span>
                <em>forjam</em> a sua
              </span>
            </span>
            <span className="hero-linha">
              <span>autoridade</span>
            </span>
          </h1>

          <p className="hero-sub">
            A <strong>Forge</strong> constrói sites profissionais para empresas
            que precisam ser levadas a sério no digital. Sem template pronto, sem
            enrolação — só design autoral e código que performa.
          </p>

          <div className="hero-acoes">
            <a href="#contato" className="btn btn-brasa">
              Solicite seu orçamento
            </a>
            <a href="#servicos" className="btn btn-frio">
              O que fazemos
            </a>
          </div>

          <ul className="hero-numeros">
            {NUMEROS.map((n) => (
              <li key={n.valor}>
                <span className="hero-numero-valor">{n.valor}</span>
                <span className="hero-numero-nota">{n.nota}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Cena de forja desenhada */}
        <div className="hero-visual">
          <CenaForja />
        </div>
      </div>

      {/* Faixa rolante no pé do hero */}
      <div className="hero-faixa">
        <div className="hero-faixa-trilho">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="hero-faixa-item">
              Sites institucionais · Lojas virtuais · Landing pages ·
              Reformulação de sites · Performance e SEO · Identidade no digital ·
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
