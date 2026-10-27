import { navegarPara, ROTAS } from "../router.js";
import "./Demos.css";

const DEMOS = [
  {
    id: "nexus",
    rota: ROTAS.nexus,
    nome: "Nexus",
    segmento: "SaaS · Produto digital",
    descricao:
      "Landing page completa para uma plataforma de gestão de projetos, com dashboard, recursos, planos e cadastro demonstrativo.",
    nota: "Escuro · violeta · dashboard",
  },
  {
    id: "lucas",
    rota: ROTAS.lucas,
    nome: "Lucas Martins",
    segmento: "Portfólio · Desenvolvedor",
    descricao:
      "Portfólio pessoal com sidebar, estudos de caso navegáveis, habilidades, serviços e formulário de contato.",
    nota: "Grafite · azul elétrico · sidebar",
  },
  {
    id: "ecotech",
    rota: ROTAS.ecotech,
    nome: "EcoTech",
    segmento: "Institucional · Sustentabilidade",
    descricao:
      "Site institucional para energia solar e automação residencial, com serviços, projetos, etapas e orçamento.",
    nota: "Claro · verde · editorial",
  },
];

function IconeSeta() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="14"
      height="14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function MiniNexus() {
  return (
    <div className="mini mini--nexus" aria-hidden="true">
      <div className="mini-browser">
        <div className="mini-browser-top">
          <i />
          <i />
          <i />
          <span>app.nexus.demo</span>
        </div>
        <div className="mini-nexus">
          <aside className="mini-nexus-side">
            <b>N</b>
            <span className="is-active" />
            <span />
            <span />
            <span />
          </aside>
          <div className="mini-nexus-main">
            <div className="mini-nexus-head">
              <span />
              <em />
            </div>
            <div className="mini-nexus-stats">
              <div>
                <small />
                <b />
              </div>
              <div>
                <small />
                <b />
              </div>
              <div>
                <small />
                <b />
              </div>
            </div>
            <div className="mini-nexus-chart">
              <svg viewBox="0 0 220 70" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="mini-nexus-fill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#8b5cf6" stopOpacity=".45" />
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 58 C22 52 30 40 48 44 S75 30 94 34 S122 16 140 22 S171 14 186 18 S208 8 220 12 L220 70 L0 70 Z"
                  fill="url(#mini-nexus-fill)"
                />
                <path
                  d="M0 58 C22 52 30 40 48 44 S75 30 94 34 S122 16 140 22 S171 14 186 18 S208 8 220 12"
                  fill="none"
                  stroke="#a78bfa"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <div className="mini-nexus-list">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MiniLucas() {
  return (
    <div className="mini mini--lucas" aria-hidden="true">
      <div className="mini-lucas-side">
        <b>LM</b>
        <span className="is-active" />
        <span />
        <span />
        <span />
        <em />
      </div>
      <div className="mini-lucas-main">
        <div className="mini-lucas-top">
          <span />
          <em />
        </div>
        <div className="mini-lucas-code">
          <div className="mini-code-top">
            <i />
            <i />
            <i />
            <span>lucas.tsx</span>
          </div>
          <div className="mini-code-lines">
            <span><i>1</i><b className="violeta" /></span>
            <span><i>2</i><b className="azul" /><b className="cinza" /></span>
            <span><i>3</i><b className="cinza" /></span>
            <span><i>4</i><b className="azul" /><b className="verde" /></span>
            <span><i>5</i><b className="cinza" /></span>
          </div>
        </div>
        <div className="mini-lucas-footer">
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}

function MiniEco() {
  return (
    <div className="mini mini--eco" aria-hidden="true">
      <div className="mini-eco-nav">
        <b>EcoTech</b>
        <span />
        <span />
        <em />
      </div>
      <div className="mini-eco-hero">
        <div className="mini-eco-copy">
          <i />
          <b />
          <b />
          <span />
          <span />
          <em />
        </div>
        <div className="mini-eco-art">
          <svg viewBox="0 0 180 130">
            <circle cx="140" cy="28" r="18" fill="#f2c879" />
            <path d="M0 112 Q45 88 90 104 T180 96 V130 H0Z" fill="#cfe4c8" />
            <path d="M32 104V70L75 50L118 70V104Z" fill="#f6f4eb" />
            <path d="M75 50L118 70L104 76L75 59L46 76L32 70Z" fill="#2e5d49" />
            <path d="M46 78L75 63L104 78V104H46Z" fill="#dcebe0" />
            <path d="M52 78L75 66L98 78" fill="none" stroke="#9fb9a7" strokeWidth="2" />
            <rect x="58" y="84" width="14" height="20" fill="#2e5d49" />
            <rect x="82" y="84" width="14" height="20" fill="#2e5d49" />
            <path d="M54 59L84 45L114 59" fill="none" stroke="#f2c879" strokeWidth="4" />
            <path d="M128 104V74L154 62V104Z" fill="#e8efe3" />
            <path d="M128 74L154 62L170 70V104H128Z" fill="#d8e7d7" />
            <path d="M136 78L148 73V82L136 87Z" fill="#5c8b6d" />
            <path d="M154 72L166 77V88L154 83Z" fill="#5c8b6d" />
            <path d="M14 112C18 92 30 88 38 82C44 94 42 106 30 112Z" fill="#5c8b6d" />
            <path d="M12 112C8 100 16 92 24 90C26 98 22 108 12 112Z" fill="#8dbb8a" />
            <path d="M0 112H180" stroke="#a9c4ad" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function MiniPreview({ tipo }) {
  if (tipo === "nexus") return <MiniNexus />;
  if (tipo === "lucas") return <MiniLucas />;
  return <MiniEco />;
}

export default function Demos() {
  function abrirRota(evento, rota) {
    if (
      evento.defaultPrevented ||
      evento.button !== 0 ||
      evento.metaKey ||
      evento.ctrlKey ||
      evento.shiftKey ||
      evento.altKey
    ) {
      return;
    }
    evento.preventDefault();
    navegarPara(rota);
  }

  return (
    <section id="demos" className="demos" aria-labelledby="demos-titulo">
      <div className="wrap">
        <header className="demos-cabecalho reveal">
          <div className="demos-topo">
            <p className="rotulo">Sites completos</p>
            <span className="demos-badge">
              <span className="demos-badge-dot" />
              3 rotas navegáveis
            </span>
          </div>
          <h2 id="demos-titulo" className="titulo-sec">
            Três sites. <em>Três mundos.</em>
          </h2>
          <p className="demos-lead">
            Nexus, Lucas Martins e EcoTech são demonstrações completas, com
            rotas próprias e identidades separadas. Abra, navegue, teste os
            formulários e volte para a Forge quando quiser.
          </p>
        </header>

        <div className="demos-grade">
          {DEMOS.map((demo, indice) => (
            <a
              key={demo.id}
              href={demo.rota}
              className={`demo-card reveal demo-card--${demo.id}`}
              style={{ "--d": `${indice * 110}ms` }}
              onClick={(evento) => abrirRota(evento, demo.rota)}
            >
              <div className="demo-preview">
                <MiniPreview tipo={demo.id} />
                <span className="demo-preview-tag">
                  Abrir site <IconeSeta />
                </span>
              </div>
              <div className="demo-info">
                <div className="demo-info-top">
                  <span className="demo-num">0{indice + 1}</span>
                  <span className="demo-seg">{demo.segmento}</span>
                </div>
                <h3>{demo.nome}</h3>
                <p>{demo.descricao}</p>
                <span className="demo-nota">{demo.nota}</span>
                <span className="demo-link">
                  Explorar demonstração <IconeSeta />
                </span>
              </div>
            </a>
          ))}
        </div>

        <p className="demos-aviso reveal">
          Demonstrações fictícias, criadas para o portfólio da Forge. Nenhum
          dado é enviado e nenhuma operação real é realizada.
        </p>
      </div>
    </section>
  );
}
