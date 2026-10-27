import { useEffect, useState } from "react";
import useDocumentMeta from "../../../hooks/useDocumentMeta.js";
import NexusDashboard from "./NexusDashboard.jsx";
import NexusSignup from "./NexusSignup.jsx";
import {
  IconeCheck,
  IconeColaboracao,
  IconeGithub,
  IconeInstagram,
  IconeLinkedin,
  IconeMais,
  IconeMenos,
  IconeMenu,
  IconePlay,
  IconeProdutividade,
  IconeProjetos,
  IconeSeta,
  IconeTarefas,
  IconeX,
} from "./NexusIcons.jsx";
import "./nexus.css";

const NAV = [
  { id: "nx-recursos", rotulo: "Recursos" },
  { id: "nx-como-funciona", rotulo: "Como funciona" },
  { id: "nx-planos", rotulo: "Planos" },
  { id: "nx-depoimentos", rotulo: "Depoimentos" },
];

const RECURSOS = [
  {
    Icone: IconeTarefas,
    titulo: "Tarefas sem ruído",
    texto:
      "Prioridades, prazos e responsáveis no lugar certo. O time abre o dia sabendo o que importa.",
    detalhe: "Listas, quadros e checklists",
  },
  {
    Icone: IconeProdutividade,
    titulo: "Produtividade visível",
    texto:
      "Acompanhe o ritmo de entrega sem cobrar atualização em cada reunião. O fluxo fala por si.",
    detalhe: "Indicadores em tempo real",
  },
  {
    Icone: IconeColaboracao,
    titulo: "Colaboração em contexto",
    texto:
      "Comentários, decisões e arquivos ficam junto do trabalho. Menos busca, mais continuidade.",
    detalhe: "Conversas ligadas ao projeto",
  },
  {
    Icone: IconeProjetos,
    titulo: "Projetos sob controle",
    texto:
      "Status, marcos e progresso em uma visão só. Identifique o que avançou e onde o fluxo travou.",
    detalhe: "Visão geral e por projeto",
  },
];

const ETAPAS = [
  {
    numero: "01",
    titulo: "Conecte o time",
    texto:
      "Crie o espaço do projeto, defina quem participa e traga o contexto que já existe.",
    detalhe: "Um workspace, todas as frentes.",
  },
  {
    numero: "02",
    titulo: "Organize o fluxo",
    texto:
      "Distribua tarefas, combine prioridades e deixe os próximos passos visíveis para todos.",
    detalhe: "Menos planilha, mais clareza.",
  },
  {
    numero: "03",
    titulo: "Acompanhe a entrega",
    texto:
      "Use os indicadores para ajustar o ritmo, celebrar o que avançou e agir antes do atraso.",
    detalhe: "Decisão com contexto, não com achismo.",
  },
];

const DEPOIMENTOS = [
  {
    texto:
      "O Nexus trouxe uma clareza que a gente não tinha com planilhas. Hoje todo mundo sabe qual é o próximo passo.",
    nome: "Marina L.",
    papel: "Product Designer",
    iniciais: "ML",
    cor: "violeta",
  },
  {
    texto:
      "A visão de projetos mudou a forma como eu acompanho o time. Menos reunião de status, mais entrega acontecendo.",
    nome: "Rafael T.",
    papel: "Tech Lead",
    iniciais: "RT",
    cor: "azul",
  },
  {
    texto:
      "Finalmente um lugar em que o trabalho acontece e o histórico fica. A busca por contexto acabou.",
    nome: "Bianca S.",
    papel: "Fundadora",
    iniciais: "BS",
    cor: "verde",
  },
];

const PLANOS = [
  {
    nome: "Essencial",
    preco: "R$ 29",
    resumo: "Para começar a organizar o que já existe.",
    recursos: ["3 projetos ativos", "Tarefas ilimitadas", "Até 5 membros", "Visão geral"],
  },
  {
    nome: "Time",
    preco: "R$ 79",
    resumo: "Para squads que precisam de ritmo e contexto.",
    recursos: [
      "Projetos ilimitados",
      "Membros ilimitados",
      "Automações simples",
      "Indicadores de entrega",
      "Suporte prioritário",
    ],
    destaque: true,
  },
  {
    nome: "Escala",
    preco: "R$ 149",
    resumo: "Para operações com várias frentes ao mesmo tempo.",
    recursos: [
      "Tudo do plano Time",
      "Múltiplos workspaces",
      "Permissões avançadas",
      "Relatórios consolidados",
      "Onboarding dedicado",
    ],
  },
];

const FAQ = [
  {
    pergunta: "O Nexus é um produto real?",
    resposta:
      "Não. Esta é uma demonstração de portfólio. A marca, os textos, os preços e os dados do dashboard são fictícios.",
  },
  {
    pergunta: "Preciso cadastrar um cartão para testar?",
    resposta:
      "Não há cobrança nesta demonstração. O formulário apenas valida os campos no navegador e mostra um feedback visual.",
  },
  {
    pergunta: "Consigo usar o Nexus com o meu time?",
    resposta:
      "A interface foi pensada para squads de produto, design e engenharia, mas esta versão é somente uma prévia visual. Não há backend, autenticação ou compartilhamento real.",
  },
  {
    pergunta: "Meus dados ficam salvos?",
    resposta:
      "Não. Nada é enviado ou armazenado. Ao recarregar a página, os campos voltam ao estado inicial.",
  },
  {
    pergunta: "Como funciona o plano Time?",
    resposta:
      "Ele é o plano sugerido nesta demonstração. Os recursos listados são exemplos de produto, não uma oferta comercial real.",
  },
];

const TABS = [
  { id: "geral", rotulo: "Visão geral" },
  { id: "tarefas", rotulo: "Tarefas" },
  { id: "projetos", rotulo: "Projetos" },
];

const REDES = [
  { rotulo: "LinkedIn", Icone: IconeLinkedin },
  { rotulo: "GitHub", Icone: IconeGithub },
  { rotulo: "Instagram", Icone: IconeInstagram },
];

function LogoNexus() {
  return (
    <span className="nx-logo-mark" aria-hidden="true">
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 23V9l12 14V9" />
      </svg>
    </span>
  );
}

function AvatarMini({ iniciais, cor }) {
  return <span className={`nx-mini-avatar nx-mini-avatar--${cor}`}>{iniciais}</span>;
}

export default function NexusPage({ onVoltar }) {
  useDocumentMeta(
    "Nexus — Gestão de projetos | Demonstração",
    "Landing page demonstrativa da Nexus, plataforma fictícia de gestão de projetos. Conheça recursos, dashboard, planos e o formulário de cadastro de exemplo.",
    "#07080f"
  );

  const [menuAberto, setMenuAberto] = useState(false);
  const [plano, setPlano] = useState("Time");
  const [faqAberta, setFaqAberta] = useState(0);
  const [vista, setVista] = useState("geral");
  const [avisoSocial, setAvisoSocial] = useState("");

  useEffect(() => {
    if (!menuAberto) return undefined;
    const overflowAnterior = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const aoTeclar = (evento) => {
      if (evento.key === "Escape") setMenuAberto(false);
    };
    document.addEventListener("keydown", aoTeclar);
    return () => {
      document.body.style.overflow = overflowAnterior;
      document.removeEventListener("keydown", aoTeclar);
    };
  }, [menuAberto]);

  useEffect(() => {
    if (!avisoSocial) return undefined;
    const timer = window.setTimeout(() => setAvisoSocial(""), 4500);
    return () => window.clearTimeout(timer);
  }, [avisoSocial]);

  function irPara(id) {
    setMenuAberto(false);
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function irParaCadastro(nomePlano) {
    if (nomePlano) setPlano(nomePlano);
    setMenuAberto(false);
    document
      .getElementById("nx-cadastro")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.setTimeout(
      () => document.getElementById("nx-nome")?.focus({ preventScroll: true }),
      500
    );
  }

  function voltar(evento) {
    evento.preventDefault();
    onVoltar?.();
  }

  function teclarTab(evento, indice) {
    if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(evento.key)) {
      return;
    }
    evento.preventDefault();
    let proximo = indice;
    if (evento.key === "ArrowRight") proximo = (indice + 1) % TABS.length;
    if (evento.key === "ArrowLeft") proximo = (indice - 1 + TABS.length) % TABS.length;
    if (evento.key === "Home") proximo = 0;
    if (evento.key === "End") proximo = TABS.length - 1;
    setVista(TABS[proximo].id);
    document.getElementById(`nx-tab-${TABS[proximo].id}`)?.focus();
  }

  return (
    <div className="nexus">
      <div className="nx-demo-strip">
        <div className="nx-demo-strip-inner">
          <span>
            <strong>Demonstração</strong> · Nexus é uma marca fictícia
          </span>
          <a href="/#demos" onClick={voltar}>
            ← Voltar ao portfólio
          </a>
        </div>
      </div>

      <header className="nx-header">
        <div className="nx-header-inner">
          <a
            className="nx-logo"
            href="#nx-inicio"
            onClick={(evento) => {
              evento.preventDefault();
              irPara("nx-inicio");
            }}
          >
            <LogoNexus />
            <span>Nexus</span>
          </a>

          <nav className="nx-nav" aria-label="Navegação principal">
            {NAV.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(evento) => {
                  evento.preventDefault();
                  irPara(item.id);
                }}
              >
                {item.rotulo}
              </a>
            ))}
          </nav>

          <div className="nx-header-acoes">
            <button
              type="button"
              className="nx-btn nx-btn--primario nx-btn--pequeno"
              onClick={() => irParaCadastro()}
            >
              Começar grátis
            </button>
            <button
              type="button"
              className="nx-menu-btn"
              aria-expanded={menuAberto}
              aria-controls="nx-menu-mobile"
              aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
              onClick={() => setMenuAberto((aberto) => !aberto)}
            >
              {menuAberto ? <IconeX size={21} /> : <IconeMenu size={21} />}
            </button>
          </div>
        </div>

        {menuAberto && (
          <div className="nx-mobile" id="nx-menu-mobile">
            <nav aria-label="Menu principal mobile">
              {NAV.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(evento) => {
                    evento.preventDefault();
                    irPara(item.id);
                  }}
                >
                  {item.rotulo}
                  <IconeSeta size={15} />
                </a>
              ))}
            </nav>
            <button
              type="button"
              className="nx-btn nx-btn--primario"
              onClick={() => irParaCadastro()}
            >
              Começar grátis <IconeSeta size={16} />
            </button>
            <a className="nx-mobile-voltar" href="/#demos" onClick={voltar}>
              ← Voltar ao portfólio
            </a>
          </div>
        )}
      </header>

      <main>
        <section className="nx-hero" id="nx-inicio" aria-labelledby="nx-hero-titulo">
          <div className="nx-hero-grade" aria-hidden="true" />
          <div className="nx-hero-brilho nx-hero-brilho--um" aria-hidden="true" />
          <div className="nx-hero-brilho nx-hero-brilho--dois" aria-hidden="true" />

          <div className="nx-hero-conteudo">
            <div className="nx-hero-texto">
              <p className="nx-eyebrow">
                <span className="nx-eyebrow-dot" /> Gestão de projetos, sem ruído
              </p>
              <h1 id="nx-hero-titulo">
                Seu time inteiro,
                <br />
                <span className="nx-gradiente">no mesmo fluxo.</span>
              </h1>
              <p className="nx-hero-descricao">
                Centralize tarefas, projetos e decisões em um espaço claro. O
                Nexus organiza o trabalho para o time gastar energia no que
                realmente importa.
              </p>
              <div className="nx-hero-acoes">
                <button
                  type="button"
                  className="nx-btn nx-btn--primario"
                  onClick={() => irParaCadastro()}
                >
                  Começar grátis <IconeSeta size={17} />
                </button>
                <button
                  type="button"
                  className="nx-btn nx-btn--secundario"
                  onClick={() => irPara("nx-produto")}
                >
                  <IconePlay size={15} /> Ver demonstração
                </button>
              </div>
              <ul className="nx-hero-lista">
                <li>
                  <IconeCheck size={14} /> Sem cartão de crédito
                </li>
                <li>
                  <IconeCheck size={14} /> Cadastro demonstrativo
                </li>
                <li>
                  <IconeCheck size={14} /> Dados fictícios
                </li>
              </ul>
            </div>

            <div className="nx-hero-visual">
              <div className="nx-hero-dash" aria-hidden="true">
                <NexusDashboard compacta />
              </div>
              <div className="nx-hero-flutuante nx-hero-flutuante--topo" aria-hidden="true">
                <span className="nx-flutuante-icone">
                  <IconeCheck size={16} />
                </span>
                <div>
                  <strong>Sprint 12 concluída</strong>
                  <small>4 tarefas entregues hoje</small>
                </div>
              </div>
              <div className="nx-hero-flutuante nx-hero-flutuante--base" aria-hidden="true">
                <div className="nx-hero-avatares">
                  <AvatarMini iniciais="ML" cor="violeta" />
                  <AvatarMini iniciais="RT" cor="azul" />
                  <AvatarMini iniciais="BS" cor="verde" />
                </div>
                <div>
                  <strong>Time alinhado</strong>
                  <small>3 projetos no prazo</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="nx-secao" id="nx-recursos" aria-labelledby="nx-recursos-titulo">
          <div className="nx-secao-cabecalho">
            <div>
              <p className="nx-eyebrow">Recursos</p>
              <h2 id="nx-recursos-titulo">
                O essencial, <span className="nx-gradiente">sem excesso.</span>
              </h2>
            </div>
            <p>
              Ferramentas suficientes para organizar o trabalho e simples o
              bastante para o time continuar usando.
            </p>
          </div>

          <div className="nx-recursos-grade">
            {RECURSOS.map(({ Icone, titulo, texto, detalhe }) => (
              <article className="nx-recurso" key={titulo}>
                <span className="nx-recurso-icone">
                  <Icone size={22} />
                </span>
                <h3>{titulo}</h3>
                <p>{texto}</p>
                <span className="nx-recurso-detalhe">{detalhe}</span>
              </article>
            ))}
          </div>
        </section>

        <section
          className="nx-secao nx-secao--etapas"
          id="nx-como-funciona"
          aria-labelledby="nx-etapas-titulo"
        >
          <div className="nx-secao-cabecalho nx-secao-cabecalho--centro">
            <div>
              <p className="nx-eyebrow">Como funciona</p>
              <h2 id="nx-etapas-titulo">Do caos ao ritmo em três passos.</h2>
            </div>
            <p>
              Sem implantação longa, sem manual de 80 páginas. O fluxo começa
              simples e cresce com o time.
            </p>
          </div>

          <div className="nx-etapas">
            {ETAPAS.map((etapa, indice) => (
              <article className="nx-etapa" key={etapa.numero}>
                <div className="nx-etapa-topo">
                  <span className="nx-etapa-numero">{etapa.numero}</span>
                  {indice < ETAPAS.length - 1 && (
                    <span className="nx-etapa-linha" aria-hidden="true" />
                  )}
                </div>
                <h3>{etapa.titulo}</h3>
                <p>{etapa.texto}</p>
                <span className="nx-etapa-detalhe">{etapa.detalhe}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="nx-secao nx-secao--produto" id="nx-produto" aria-labelledby="nx-produto-titulo">
          <div className="nx-secao-cabecalho">
            <div>
              <p className="nx-eyebrow">Demonstração do produto</p>
              <h2 id="nx-produto-titulo">Veja o Nexus em ação.</h2>
            </div>
            <p>
              Alterne entre as visões para explorar o dashboard ilustrativo.
              Todos os números são fictícios.
            </p>
          </div>

          <div className="nx-demo">
            <div className="nx-demo-barra">
              <div className="nx-demo-tabs" role="tablist" aria-label="Visões do dashboard">
                {TABS.map((tab, indice) => (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    id={`nx-tab-${tab.id}`}
                    aria-selected={vista === tab.id}
                    aria-controls="nx-painel-demo"
                    tabIndex={vista === tab.id ? 0 : -1}
                    onClick={() => setVista(tab.id)}
                    onKeyDown={(evento) => teclarTab(evento, indice)}
                  >
                    {tab.rotulo}
                  </button>
                ))}
              </div>
              <span className="nx-demo-nota">
                <span /> Demonstração interativa
              </span>
            </div>

            <div
              className="nx-demo-painel"
              id="nx-painel-demo"
              role="tabpanel"
              aria-labelledby={`nx-tab-${vista}`}
              tabIndex={0}
            >
              <NexusDashboard vista={vista} />
            </div>
            <p className="nx-demo-legenda">
              Prévia conceitual da interface. Nenhuma tarefa, projeto ou pessoa
              existe de verdade.
            </p>
          </div>
        </section>

        <section
          className="nx-secao nx-secao--depoimentos"
          id="nx-depoimentos"
          aria-labelledby="nx-depoimentos-titulo"
        >
          <div className="nx-secao-cabecalho">
            <div>
              <p className="nx-eyebrow">Depoimentos</p>
              <h2 id="nx-depoimentos-titulo">
                Times que respiram <span className="nx-gradiente">mais leve.</span>
              </h2>
            </div>
            <p>
              Histórias fictícias criadas para mostrar como a clareza pode
              aparecer no dia a dia.
            </p>
          </div>

          <div className="nx-depoimentos">
            {DEPOIMENTOS.map((depoimento) => (
              <figure className="nx-depoimento" key={depoimento.nome}>
                <span className="nx-depoimento-aspas" aria-hidden="true">
                  “
                </span>
                <span className="nx-depoimento-selo">Depoimento demonstrativo</span>
                <blockquote>
                  <p>{depoimento.texto}</p>
                </blockquote>
                <figcaption>
                  <span className={`nx-depo-avatar nx-depo-avatar--${depoimento.cor}`}>
                    {depoimento.iniciais}
                  </span>
                  <span>
                    <strong>{depoimento.nome}</strong>
                    <small>{depoimento.papel} · persona fictícia</small>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="nx-secao nx-secao--planos" id="nx-planos" aria-labelledby="nx-planos-titulo">
          <div className="nx-secao-cabecalho nx-secao-cabecalho--centro">
            <div>
              <p className="nx-eyebrow">Planos</p>
              <h2 id="nx-planos-titulo">Um plano para cada ritmo.</h2>
            </div>
            <p>
              Preços fictícios para esta demonstração. Nenhuma assinatura,
              cobrança ou pagamento é processado.
            </p>
          </div>

          <div className="nx-planos">
            {PLANOS.map((item) => (
              <article
                className={`nx-plano${item.destaque ? " nx-plano--destaque" : ""}`}
                key={item.nome}
              >
                {item.destaque && <span className="nx-plano-selo">Mais escolhido</span>}
                <header>
                  <h3>{item.nome}</h3>
                  <p>{item.resumo}</p>
                </header>
                <div className="nx-plano-preco">
                  <strong>{item.preco}</strong>
                  <span>/mês</span>
                </div>
                <p className="nx-plano-ficticio">Valor fictício</p>
                <ul>
                  {item.recursos.map((recurso) => (
                    <li key={recurso}>
                      <IconeCheck size={14} /> {recurso}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  className={`nx-btn ${
                    item.destaque ? "nx-btn--primario" : "nx-btn--secundario"
                  }`}
                  onClick={() => irParaCadastro(item.nome)}
                >
                  Escolher {item.nome} <IconeSeta size={15} />
                </button>
              </article>
            ))}
          </div>
          <p className="nx-planos-nota">
            Os planos existem apenas para demonstrar hierarquia visual e
            interação. Não há cobrança real.
          </p>
        </section>

        <section className="nx-secao nx-secao--faq" id="nx-faq" aria-labelledby="nx-faq-titulo">
          <div className="nx-faq-grade">
            <div className="nx-faq-intro">
              <p className="nx-eyebrow">FAQ</p>
              <h2 id="nx-faq-titulo">Perguntas antes de começar.</h2>
              <p>
                Transparência faz parte da demonstração. Se algo não estiver
                claro, é só abrir a pergunta.
              </p>
              <button
                type="button"
                className="nx-btn nx-btn--secundario"
                onClick={() => irPara("nx-cadastro")}
              >
                Ir para o cadastro <IconeSeta size={15} />
              </button>
            </div>

            <div className="nx-faq-lista">
              {FAQ.map((item, indice) => {
                const aberta = faqAberta === indice;
                return (
                  <div className={`nx-faq-item${aberta ? " is-aberta" : ""}`} key={item.pergunta}>
                    <h3>
                      <button
                        type="button"
                        id={`nx-faq-btn-${indice}`}
                        aria-expanded={aberta}
                        aria-controls={`nx-faq-resposta-${indice}`}
                        onClick={() => setFaqAberta(aberta ? -1 : indice)}
                      >
                        <span>{item.pergunta}</span>
                        <span className="nx-faq-icone" aria-hidden="true">
                          {aberta ? <IconeMenos size={16} /> : <IconeMais size={16} />}
                        </span>
                      </button>
                    </h3>
                    {aberta && (
                      <div
                        className="nx-faq-resposta"
                        id={`nx-faq-resposta-${indice}`}
                        role="region"
                        aria-labelledby={`nx-faq-btn-${indice}`}
                      >
                        <p>{item.resposta}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="nx-cta" id="nx-cadastro" aria-labelledby="nx-cadastro-titulo">
          <div className="nx-cta-brilho" aria-hidden="true" />
          <div className="nx-cta-grade">
            <div className="nx-cta-texto">
              <p className="nx-eyebrow">Comece pelo essencial</p>
              <h2 id="nx-cadastro-titulo">
                Pronto para trazer clareza para o seu time?
              </h2>
              <p>
                Teste o fluxo de cadastro desta demonstração. A validação é
                real; a conta, não.
              </p>
              <ul>
                <li>
                  <IconeCheck size={15} /> Feedback imediato nos campos
                </li>
                <li>
                  <IconeCheck size={15} /> Plano selecionável
                </li>
                <li>
                  <IconeCheck size={15} /> Nenhum dado enviado
                </li>
              </ul>
              <div className="nx-cta-selo">
                <span className="nx-eyebrow-dot" />
                Ambiente 100% demonstrativo
              </div>
            </div>

            <NexusSignup plano={plano} setPlano={setPlano} planos={PLANOS} />
          </div>
        </section>
      </main>

      <footer className="nx-footer">
        <div className="nx-footer-grade">
          <div className="nx-footer-marca">
            <a
              className="nx-logo"
              href="#nx-inicio"
              onClick={(evento) => {
                evento.preventDefault();
                irPara("nx-inicio");
              }}
            >
              <LogoNexus />
              <span>Nexus</span>
            </a>
            <p>
              Clareza para times que constroem. Uma marca fictícia criada para
              o portfólio da Forge.
            </p>
            <div className="nx-footer-redes">
              {REDES.map(({ rotulo, Icone }) => (
                <button
                  key={rotulo}
                  type="button"
                  aria-label={`${rotulo} (demonstrativo)`}
                  title={`${rotulo} demonstrativo`}
                  onClick={() =>
                    setAvisoSocial(
                      `${rotulo} fictício: esta demonstração não possui perfil real.`
                    )
                  }
                >
                  <Icone size={17} />
                </button>
              ))}
            </div>
            {avisoSocial && (
              <p className="nx-footer-aviso" role="status" aria-live="polite">
                {avisoSocial}
              </p>
            )}
          </div>

          <div className="nx-footer-col">
            <h4>Produto</h4>
            <a href="#nx-recursos">Recursos</a>
            <a href="#nx-como-funciona">Como funciona</a>
            <a href="#nx-produto">Demonstração</a>
            <a href="#nx-planos">Planos</a>
          </div>

          <div className="nx-footer-col">
            <h4>Suporte</h4>
            <a href="#nx-faq">Perguntas frequentes</a>
            <a href="#nx-cadastro">Cadastro</a>
            <button type="button" onClick={() => irPara("nx-inicio")}>
              Voltar ao topo
            </button>
          </div>

          <div className="nx-footer-col nx-footer-col--nota">
            <h4>Demonstração</h4>
            <p>
              Sem autenticação, pagamentos ou backend. Todos os nomes, números e
              depoimentos são fictícios.
            </p>
            <a href="/#demos" onClick={voltar}>
              ← Voltar ao portfólio Forge
            </a>
          </div>
        </div>

        <div className="nx-footer-base">
          <span>© 2026 Nexus · demonstração de portfólio</span>
          <span>Feito por Forge</span>
        </div>
      </footer>
    </div>
  );
}
