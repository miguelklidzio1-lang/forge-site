import "./Hero.css";

const NUMEROS = [
  { valor: "100%", nota: "Código sob medida" },
  { valor: "3s", nota: "Meta de carregamento" },
  { valor: "1", nota: "Time direto com você" },
];

export default function Hero() {
  return (
    <section className="hero" id="topo">
      {/* Brilho de forja atrás do texto */}
      <div className="hero-brasa hero-brasa--a" aria-hidden="true" />
      <div className="hero-brasa hero-brasa--b" aria-hidden="true" />

      <div className="wrap hero-grade">
        <div className="hero-texto">
          <p className="rotulo">Estúdio de sites · sob medida</p>

          <h1 className="hero-titulo">
            Sites que
            <br />
            <span className="hero-titulo-linha2">
              <em>forjam</em> a sua
            </span>
            <br />
            autoridade
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

        {/* Peça visual: chapa de aço sendo trabalhada */}
        <div className="hero-visual" aria-hidden="true">
          <div className="placa">
            <div className="placa-listrado" />
            <div className="placa-faisca">
              <svg viewBox="0 0 120 120" className="placa-svg">
                <path
                  d="M62 8 40 62h22l-14 50 44-62H68z"
                  fill="url(#g-faisca)"
                />
                <defs>
                  <linearGradient id="g-faisca" x1="0" y1="0" x2="0.6" y2="1">
                    <stop offset="0%" stopColor="#ffd166" />
                    <stop offset="60%" stopColor="#ff7a26" />
                    <stop offset="100%" stopColor="#ff5b04" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="placa-etiqueta">FEITO NA FORGE</div>
          </div>
          <div className="placa-sombra" />
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
