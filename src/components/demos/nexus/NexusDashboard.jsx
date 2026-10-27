import { useId } from "react";
import {
  IconeBusca,
  IconeCalendario,
  IconeCheck,
  IconeEquipe,
  IconeGrid,
  IconeMais,
  IconePasta,
  IconeSino,
  IconeTarefas,
} from "./NexusIcons.jsx";

const NAV_DASH = [
  { id: "geral", rotulo: "Visão geral", Icone: IconeGrid },
  { id: "tarefas", rotulo: "Tarefas", Icone: IconeTarefas, badge: "8" },
  { id: "projetos", rotulo: "Projetos", Icone: IconePasta },
  { id: "equipe", rotulo: "Equipe", Icone: IconeEquipe },
];

const PROJETOS = [
  {
    nome: "Lançamento do app",
    area: "Produto",
    progresso: 72,
    status: "Em andamento",
    cor: "violeta",
    prazo: "31 out",
    pessoas: ["ML", "RT", "AC"],
  },
  {
    nome: "Redesign do site",
    area: "Marketing",
    progresso: 48,
    status: "Em revisão",
    cor: "azul",
    prazo: "07 nov",
    pessoas: ["BS", "JP", "ML"],
  },
  {
    nome: "Onboarding de clientes",
    area: "CX",
    progresso: 91,
    status: "Quase lá",
    cor: "verde",
    prazo: "29 out",
    pessoas: ["RT", "BS", "AC"],
  },
];

const TAREFAS = [
  {
    titulo: "Revisar fluxo de cadastro",
    projeto: "Lançamento do app",
    status: "Em andamento",
    prazo: "Hoje",
    cor: "violeta",
    pessoa: "ML",
    concluida: false,
  },
  {
    titulo: "Aprovar copy da nova home",
    projeto: "Redesign do site",
    status: "Em revisão",
    prazo: "Hoje",
    cor: "azul",
    pessoa: "BS",
    concluida: false,
  },
  {
    titulo: "Mapear dúvidas do onboarding",
    projeto: "Onboarding de clientes",
    status: "Quase lá",
    prazo: "Amanhã",
    cor: "verde",
    pessoa: "RT",
    concluida: false,
  },
  {
    titulo: "Fechar escopo do sprint 13",
    projeto: "Lançamento do app",
    status: "Concluído",
    prazo: "Ontem",
    cor: "violeta",
    pessoa: "AC",
    concluida: true,
  },
  {
    titulo: "Configurar métricas do funil",
    projeto: "Redesign do site",
    status: "Em andamento",
    prazo: "30 out",
    cor: "azul",
    pessoa: "JP",
    concluida: false,
  },
];

const PESSOAS = [
  { iniciais: "ML", nome: "Marina Lima", papel: "Product Lead", cor: "violeta" },
  { iniciais: "RT", nome: "Rafael Tavares", papel: "Tech Lead", cor: "azul" },
  { iniciais: "BS", nome: "Bianca Souza", papel: "Design", cor: "verde" },
  { iniciais: "AC", nome: "André Costa", papel: "Produto", cor: "rosa" },
  { iniciais: "JP", nome: "Júlia Prado", papel: "Growth", cor: "ambar" },
];

function Avatar({ iniciais, cor = "violeta", pequeno = false }) {
  return (
    <span
      className={`nx-avatar nx-avatar--${cor}${pequeno ? " nx-avatar--pequeno" : ""}`}
    >
      {iniciais}
    </span>
  );
}

function Status({ children }) {
  const chave = children
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-");
  return <span className={`nx-dash-status nx-dash-status--${chave}`}>{children}</span>;
}

function Barra({ valor, cor = "violeta" }) {
  return (
    <span className={`nx-dash-barra nx-dash-barra--${cor}`} aria-hidden="true">
      <i style={{ width: `${valor}%` }} />
    </span>
  );
}

function VisaoGeral({ uid }) {
  return (
    <div className="nx-dash-conteudo">
      <div className="nx-dash-stats">
        <div className="nx-dash-stat">
          <span className="nx-dash-stat-label">Projetos ativos</span>
          <strong>12</strong>
          <span className="nx-dash-tendencia">+3 este mês</span>
        </div>
        <div className="nx-dash-stat">
          <span className="nx-dash-stat-label">Tarefas no prazo</span>
          <strong>84%</strong>
          <span className="nx-dash-tendencia">+6% na semana</span>
        </div>
        <div className="nx-dash-stat">
          <span className="nx-dash-stat-label">Horas economizadas</span>
          <strong>32h</strong>
          <span className="nx-dash-tendencia">em outubro</span>
        </div>
      </div>

      <div className="nx-dash-grade">
        <section className="nx-dash-card nx-dash-grafico">
          <header className="nx-dash-card-topo">
            <div>
              <h4>Ritmo de entrega</h4>
              <small>Tarefas concluídas por dia</small>
            </div>
            <span className="nx-dash-alta">+18%</span>
          </header>
          <div className="nx-dash-grafico-area">
            <svg
              viewBox="0 0 420 140"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id={`${uid}-fill`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.38" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                </linearGradient>
              </defs>
              <g stroke="rgba(255,255,255,.07)" strokeWidth="1">
                <line x1="0" y1="35" x2="420" y2="35" />
                <line x1="0" y1="70" x2="420" y2="70" />
                <line x1="0" y1="105" x2="420" y2="105" />
              </g>
              <path
                d="M0 108 C30 100 42 82 68 88 S104 62 128 68 S166 44 190 50 S226 28 252 38 S290 22 316 28 S352 14 380 20 S406 10 420 14 L420 140 L0 140Z"
                fill={`url(#${uid}-fill)`}
              />
              <path
                d="M0 108 C30 100 42 82 68 88 S104 62 128 68 S166 44 190 50 S226 28 252 38 S290 22 316 28 S352 14 380 20 S406 10 420 14"
                fill="none"
                stroke="#a78bfa"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
              />
              <circle cx="316" cy="28" r="4" fill="#0d0d1b" stroke="#c4b5fd" strokeWidth="2" />
            </svg>
            <div className="nx-dash-eixo" aria-hidden="true">
              <span>Seg</span>
              <span>Ter</span>
              <span>Qua</span>
              <span>Qui</span>
              <span>Sex</span>
            </div>
          </div>
        </section>

        <section className="nx-dash-card nx-dash-foco">
          <header className="nx-dash-card-topo">
            <h4>Projetos em foco</h4>
            <span>3 ativos</span>
          </header>
          <div className="nx-dash-projetos">
            {PROJETOS.map((projeto) => (
              <div className="nx-dash-projeto" key={projeto.nome}>
                <div className="nx-dash-projeto-topo">
                  <span className={`nx-dash-ponto nx-dash-ponto--${projeto.cor}`} />
                  <strong>{projeto.nome}</strong>
                  <span className="nx-dash-projeto-area">{projeto.area}</span>
                </div>
                <div className="nx-dash-projeto-baixo">
                  <Barra valor={projeto.progresso} cor={projeto.cor} />
                  <span>{projeto.progresso}%</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="nx-dash-grade nx-dash-grade--2">
        <section className="nx-dash-card nx-dash-tarefas-mini">
          <header className="nx-dash-card-topo">
            <h4>Próximas tarefas</h4>
            <span>Hoje</span>
          </header>
          <div className="nx-dash-mini-lista">
            {TAREFAS.slice(0, 3).map((tarefa) => (
              <div className="nx-dash-mini-tarefa" key={tarefa.titulo}>
                <span className={`nx-dash-check${tarefa.concluida ? " is-feita" : ""}`}>
                  {tarefa.concluida && <IconeCheck size={10} />}
                </span>
                <div>
                  <strong>{tarefa.titulo}</strong>
                  <small>{tarefa.projeto}</small>
                </div>
                <Status>{tarefa.status}</Status>
              </div>
            ))}
          </div>
        </section>

        <section className="nx-dash-card nx-dash-equipe">
          <header className="nx-dash-card-topo">
            <h4>Time em movimento</h4>
            <span>5 pessoas</span>
          </header>
          <div className="nx-dash-pessoas">
            {PESSOAS.map((pessoa) => (
              <div className="nx-dash-pessoa" key={pessoa.iniciais}>
                <Avatar iniciais={pessoa.iniciais} cor={pessoa.cor} pequeno />
                <div>
                  <strong>{pessoa.nome}</strong>
                  <small>{pessoa.papel}</small>
                </div>
                <span className="nx-dash-online" />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function VisaoTarefas() {
  return (
    <div className="nx-dash-conteudo">
      <div className="nx-dash-filtros">
        <span className="is-active">Hoje</span>
        <span>Esta semana</span>
        <span>Concluídas</span>
      </div>
      <section className="nx-dash-card nx-dash-tabela">
        <header className="nx-dash-card-topo">
          <div>
            <h4>Minhas tarefas</h4>
            <small>Organize o dia sem perder o contexto</small>
          </div>
          <span>8 abertas</span>
        </header>
        <div className="nx-dash-tabela-linhas">
          <div className="nx-dash-tabela-linha nx-dash-tabela-linha--topo">
            <span>Tarefa</span>
            <span>Projeto</span>
            <span>Status</span>
            <span>Prazo</span>
          </div>
          {TAREFAS.map((tarefa) => (
            <div
              className={`nx-dash-tabela-linha${tarefa.concluida ? " is-concluida" : ""}`}
              key={tarefa.titulo}
            >
              <span className="nx-dash-tarefa-nome">
                <span className={`nx-dash-check${tarefa.concluida ? " is-feita" : ""}`}>
                  {tarefa.concluida && <IconeCheck size={10} />}
                </span>
                <strong>{tarefa.titulo}</strong>
              </span>
              <span className="nx-dash-tarefa-projeto">
                <i className={`nx-dash-ponto nx-dash-ponto--${tarefa.cor}`} />
                {tarefa.projeto}
              </span>
              <Status>{tarefa.status}</Status>
              <span className="nx-dash-tarefa-prazo">
                <IconeCalendario size={12} />
                {tarefa.prazo}
              </span>
            </div>
          ))}
        </div>
      </section>
      <div className="nx-dash-nota">
        <IconeCheck size={14} />
        Dados ilustrativos. Nada aqui altera um projeto real.
      </div>
    </div>
  );
}

function VisaoProjetos() {
  return (
    <div className="nx-dash-conteudo">
      <div className="nx-dash-stats nx-dash-stats--projetos">
        <div className="nx-dash-stat">
          <span className="nx-dash-stat-label">No prazo</span>
          <strong>9</strong>
          <span className="nx-dash-tendencia">de 12 projetos</span>
        </div>
        <div className="nx-dash-stat">
          <span className="nx-dash-stat-label">Em revisão</span>
          <strong>2</strong>
          <span className="nx-dash-tendencia">aguardando aprovação</span>
        </div>
        <div className="nx-dash-stat">
          <span className="nx-dash-stat-label">Concluídos</span>
          <strong>28</strong>
          <span className="nx-dash-tendencia">neste trimestre</span>
        </div>
      </div>
      <div className="nx-dash-projetos-cards">
        {PROJETOS.map((projeto) => (
          <article className="nx-dash-projeto-card" key={projeto.nome}>
            <div className="nx-dash-projeto-card-topo">
              <span className={`nx-dash-ponto nx-dash-ponto--${projeto.cor}`} />
              <span>{projeto.area}</span>
              <Status>{projeto.status}</Status>
            </div>
            <h4>{projeto.nome}</h4>
            <div className="nx-dash-projeto-card-progresso">
              <Barra valor={projeto.progresso} cor={projeto.cor} />
              <span>{projeto.progresso}%</span>
            </div>
            <div className="nx-dash-projeto-card-rodape">
              <span className="nx-dash-avatares">
                {projeto.pessoas.map((pessoa) => (
                  <Avatar
                    key={pessoa}
                    iniciais={pessoa}
                    cor={projeto.cor}
                    pequeno
                  />
                ))}
              </span>
              <span className="nx-dash-prazo">
                <IconeCalendario size={12} /> {projeto.prazo}
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default function NexusDashboard({ vista = "geral", compacta = false }) {
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  const titulos = {
    geral: "Visão geral",
    tarefas: "Minhas tarefas",
    projetos: "Projetos",
  };
  const rotulos = {
    geral:
      "Prévia ilustrativa do dashboard Nexus: indicadores de projetos ativos, tarefas no prazo, gráfico de ritmo de entrega e lista de projetos.",
    tarefas:
      "Prévia ilustrativa do dashboard Nexus: lista de tarefas com projeto, status e prazo.",
    projetos:
      "Prévia ilustrativa do dashboard Nexus: cartões de projetos com progresso, equipe e prazo.",
  };

  return (
    <div
      className={`nx-dash${compacta ? " nx-dash--compacta" : ""}`}
      role="img"
      aria-label={rotulos[vista]}
    >
      <div className="nx-dash-topo">
        <span className="nx-dash-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="nx-dash-url">app.nexus.demo/{vista}</span>
        <span className="nx-dash-topo-acoes" aria-hidden="true">
          <IconeBusca size={13} />
          <span className="nx-dash-busca">Buscar</span>
          <span className="nx-dash-sino">
            <IconeSino size={14} />
            <i />
          </span>
          <Avatar iniciais="ML" cor="violeta" pequeno />
        </span>
      </div>

      <div className="nx-dash-corpo">
        <aside className="nx-dash-side" aria-hidden="true">
          <div className="nx-dash-logo">
            <b>N</b>
            <span>Nexus</span>
          </div>
          <div className="nx-dash-workspace">
            <span className="nx-dash-workspace-icone">F</span>
            <div>
              <strong>Forge Studio</strong>
              <small>Workspace</small>
            </div>
          </div>
          <nav className="nx-dash-nav">
            {NAV_DASH.map(({ id, rotulo, Icone, badge }) => (
              <span key={id} className={vista === id ? "is-ativo" : ""}>
                <Icone size={15} />
                <i>{rotulo}</i>
                {badge && <b>{badge}</b>}
              </span>
            ))}
          </nav>
          <div className="nx-dash-sprint">
            <div>
              <span>Sprint 12</span>
              <strong>68%</strong>
            </div>
            <Barra valor={68} cor="violeta" />
            <small>4 dias restantes</small>
          </div>
          <div className="nx-dash-usuario">
            <Avatar iniciais="ML" cor="violeta" pequeno />
            <div>
              <strong>Marina Lima</strong>
              <small>Product Lead</small>
            </div>
          </div>
        </aside>

        <div className="nx-dash-principal">
          <header className="nx-dash-cabecalho">
            <div>
              <p>terça-feira, 27 de outubro</p>
              <h3>{titulos[vista]}</h3>
            </div>
            <span className="nx-dash-novo">
              <IconeMais size={12} /> Novo projeto
            </span>
          </header>

          {vista === "geral" && <VisaoGeral uid={uid} />}
          {vista === "tarefas" && <VisaoTarefas />}
          {vista === "projetos" && <VisaoProjetos />}
        </div>
      </div>
    </div>
  );
}
