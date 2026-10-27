import { useEffect, useState } from "react";
import useActiveSection from "../../../hooks/useActiveSection.js";
import useDocumentMeta from "../../../hooks/useDocumentMeta.js";
import LucasContato from "./LucasContato.jsx";
import LucasProjectVisual from "./LucasProjectVisuals.jsx";
import LucasProjetoModal from "./LucasProjetoModal.jsx";
import {
  IconeCamadas,
  IconeCheck,
  IconeCodigo,
  IconeGithub,
  IconeLinkedin,
  IconeMail,
  IconeMenu,
  IconeSeta,
  IconeSetaDiagonal,
  IconeServidor,
  IconeX,
} from "./LucasIcons.jsx";
import "./lucas.css";

const SECOES = [
  { id: "lc-inicio", rotulo: "Início" },
  { id: "lc-sobre", rotulo: "Sobre" },
  { id: "lc-projetos", rotulo: "Projetos" },
  { id: "lc-habilidades", rotulo: "Habilidades" },
  { id: "lc-servicos", rotulo: "Serviços" },
  { id: "lc-contato", rotulo: "Contato" },
];

const IDS_SECOES = SECOES.map((secao) => secao.id);

const PROJETOS = [
  {
    id: "atlas",
    titulo: "Atlas Finance",
    tipo: "Produto financeiro",
    ano: "2026",
    visual: "atlas",
    tags: ["Fintech", "Dashboard", "Design system"],
    resumo:
      "Uma visão financeira que cabe na rotina de quem não tem tempo para planilhas.",
    contexto:
      "A Atlas precisava reunir saldo, investimentos e movimentações em uma experiência que funcionasse para pessoas não especialistas em finanças. O desafio era reduzir a carga cognitiva sem esconder informação importante.",
    entregas: [
      "Arquitetura de informação e fluxos de navegação",
      "Design system com componentes de dados",
      "Dashboard responsivo e acessível",
      "Protótipo navegável e documentação do sistema",
    ],
    resultado:
      "A nova visão deixou as decisões do mês visíveis em uma única tela e reduziu o tempo de leitura do extrato. Indicadores fictícios, usados apenas para contar a história do projeto.",
    stack: ["React", "TypeScript", "D3.js", "Node.js"],
  },
  {
    id: "pulso",
    titulo: "Pulso",
    tipo: "Aplicativo mobile",
    ano: "2025",
    visual: "pulso",
    tags: ["Mobile", "Saúde", "Produto"],
    resumo: "Um app de rotina que troca cobrança por ritmo.",
    contexto:
      "O Pulso queria ajudar pessoas a manter hábitos sem transformar autocuidado em uma lista infinita de metas. A experiência precisava ser gentil, mas ainda assim clara o suficiente para gerar retorno diário.",
    entregas: [
      "Pesquisa e definição da proposta de valor",
      "Fluxos de onboarding e check-in",
      "Interface mobile e microinterações",
      "Testes de usabilidade moderados",
    ],
    resultado:
      "O produto ganhou uma linguagem mais leve e um fluxo de retorno diário mais claro. As métricas exibidas são ilustrativas e não representam um produto real.",
    stack: ["React Native", "Expo", "TypeScript", "Figma"],
  },
  {
    id: "rota",
    titulo: "Rota Clara",
    tipo: "Plataforma logística",
    ano: "2025",
    visual: "rota",
    tags: ["Logística", "Web app", "Mapas"],
    resumo: "Logística urbana com menos ruído e mais previsibilidade.",
    contexto:
      "A operação da Rota Clara crescia mais rápido que a ferramenta de acompanhamento. Era preciso dar contexto a cada entrega, a cada desvio e a cada decisão da central de operações.",
    entregas: [
      "Mapa operacional com estados de rota",
      "Painel de acompanhamento em tempo real",
      "Sistema de alertas e exceções",
      "Componentização e documentação",
    ],
    resultado:
      "A central passou a enxergar prioridades e desvios no mesmo lugar. Os dados, rotas e nomes de cidades são fictícios.",
    stack: ["React", "TypeScript", "Mapbox", "Node.js"],
  },
  {
    id: "aurora",
    titulo: "Estúdio Aurora",
    tipo: "Site editorial",
    ano: "2026",
    visual: "aurora",
    tags: ["Editorial", "Site", "Branding"],
    resumo:
      "Uma presença digital silenciosa para um estúdio que projeta espaços.",
    contexto:
      "O Estúdio Aurora precisava apresentar projetos autorais sem competir com eles. A interface deveria desaparecer diante da arquitetura e deixar o trabalho falar primeiro.",
    entregas: [
      "Direção editorial e hierarquia tipográfica",
      "Site responsivo com galeria de projetos",
      "Microinterações discretas",
      "Estrutura de conteúdo e CMS",
    ],
    resultado:
      "O site virou uma extensão do portfólio físico do estúdio, com navegação calma e foco nas imagens. O projeto e o estúdio são fictícios.",
    stack: ["Next.js", "TypeScript", "Sanity", "CSS"],
  },
];

const HABILIDADES = [
  {
    Icone: IconeCodigo,
    numero: "01",
    titulo: "Front-end",
    texto:
      "Interfaces que respondem, carregam rápido e funcionam para todo mundo — inclusive no teclado.",
    itens: ["React", "TypeScript", "Next.js", "CSS moderno", "HTML semântico", "Acessibilidade"],
  },
  {
    Icone: IconeServidor,
    numero: "02",
    titulo: "Back-end",
    texto:
      "APIs e modelos de dados que sustentam o produto sem criar uma caixa-preta para o time.",
    itens: ["Node.js", "Express", "PostgreSQL", "Prisma", "APIs REST", "Autenticação"],
  },
  {
    Icone: IconeCamadas,
    numero: "03",
    titulo: "Produto & ferramentas",
    texto:
      "Do rascunho ao componente documentado. O detalhe é parte do produto, não uma etapa separada.",
    itens: ["Figma", "Design system", "Git", "Testes", "Vite", "Motion"],
  },
];

const SERVICOS = [
  {
    Icone: IconeCamadas,
    numero: "01",
    titulo: "Sites e landing pages",
    texto:
      "Páginas que explicam rápido, carregam bem e dão vontade de continuar navegando.",
    itens: ["Direção visual", "Responsivo", "Performance"],
  },
  {
    Icone: IconeServidor,
    numero: "02",
    titulo: "Aplicações web",
    texto:
      "Produtos com regras, estados e fluxos que precisam funcionar no dia a dia — não só na demo.",
    itens: ["Arquitetura front-end", "Integração com APIs", "Fluxos e estados"],
  },
  {
    Icone: IconeCodigo,
    numero: "03",
    titulo: "Interfaces e design systems",
    texto:
      "Sistemas visuais consistentes para times que precisam construir rápido sem perder identidade.",
    itens: ["Componentes", "Documentação", "Acessibilidade"],
  },
];

const REDES = [
  { rotulo: "GitHub", Icone: IconeGithub },
  { rotulo: "LinkedIn", Icone: IconeLinkedin },
  { rotulo: "E-mail", Icone: IconeMail },
];

function Terminal() {
  return (
    <div className="lc-terminal" aria-hidden="true">
      <div className="lc-terminal-topo">
        <span className="lc-terminal-dots">
          <i />
          <i />
          <i />
        </span>
        <span>lucas.tsx</span>
        <em>TS</em>
      </div>
      <div className="lc-terminal-codigo">
        <div><span>01</span><code><b>const</b> <strong>lucas</strong> = {"{"}</code></div>
        <div><span>02</span><code>  foco: <i>"produtos digitais"</i>,</code></div>
        <div><span>03</span><code>  stack: [<i>"React"</i>, <i>"Node"</i>, <i>"TS"</i>],</code></div>
        <div><span>04</span><code>  base: <i>"São Paulo · remoto"</i>,</code></div>
        <div><span>05</span><code>  disponivel: <b>true</b>,</code></div>
        <div><span>06</span><code>{"}"};</code></div>
      </div>
      <div className="lc-terminal-rodape">
        <span><i /> disponível para projetos</span>
        <span>UTF-8</span>
      </div>
    </div>
  );
}

export default function LucasPage({ onVoltar }) {
  useDocumentMeta(
    "Lucas Martins — Desenvolvedor full-stack | Demonstração",
    "Portfólio demonstrativo de Lucas Martins, desenvolvedor full-stack fictício. Projetos, habilidades, serviços e formulário de contato de exemplo.",
    "#101217"
  );

  const ativo = useActiveSection(IDS_SECOES);
  const [menuAberto, setMenuAberto] = useState(false);
  const [projetoAberto, setProjetoAberto] = useState(null);
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

  function voltar(evento) {
    evento.preventDefault();
    onVoltar?.();
  }

  function abrirContatoDoModal() {
    setProjetoAberto(null);
    window.setTimeout(() => irPara("lc-contato"), 80);
  }

  return (
    <div className="lucas">
      <header className="lc-topbar">
        <a
          className="lc-topbar-logo"
          href="#lc-inicio"
          onClick={(evento) => {
            evento.preventDefault();
            irPara("lc-inicio");
          }}
        >
          LM<span>.</span>
        </a>
        <span className="lc-topbar-status">
          <i /> disponível
        </span>
        <button
          type="button"
          className="lc-topbar-menu"
          aria-expanded={menuAberto}
          aria-controls="lc-menu-mobile"
          aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
          onClick={() => setMenuAberto((aberto) => !aberto)}
        >
          {menuAberto ? <IconeX size={20} /> : <IconeMenu size={20} />}
        </button>
      </header>

      {menuAberto && (
        <div className="lc-drawer" id="lc-menu-mobile">
          <nav aria-label="Menu do portfólio">
            {SECOES.map((secao, indice) => (
              <a
                key={secao.id}
                href={`#${secao.id}`}
                className={ativo === secao.id ? "is-ativo" : ""}
                aria-current={ativo === secao.id ? "location" : undefined}
                onClick={(evento) => {
                  evento.preventDefault();
                  irPara(secao.id);
                }}
              >
                <span>0{indice + 1}</span>
                {secao.rotulo}
                <IconeSeta size={15} />
              </a>
            ))}
          </nav>
          <div className="lc-drawer-rodape">
            <button
              type="button"
              className="lc-btn lc-btn--primario"
              onClick={() => irPara("lc-contato")}
            >
              Falar comigo <IconeSeta size={15} />
            </button>
            <a href="/#demos" onClick={voltar}>
              ← Voltar ao portfólio
            </a>
          </div>
        </div>
      )}

      <aside className="lc-sidebar" aria-label="Navegação do portfólio">
        <div className="lc-sidebar-topo">
          <a
            className="lc-logo"
            href="#lc-inicio"
            onClick={(evento) => {
              evento.preventDefault();
              irPara("lc-inicio");
            }}
          >
            LM<span>.</span>
          </a>
          <span className="lc-status">
            <i /> Disponível
          </span>
        </div>

        <nav className="lc-nav">
          {SECOES.map((secao, indice) => (
            <a
              key={secao.id}
              href={`#${secao.id}`}
              className={ativo === secao.id ? "is-ativo" : ""}
              aria-current={ativo === secao.id ? "location" : undefined}
              onClick={(evento) => {
                evento.preventDefault();
                irPara(secao.id);
              }}
            >
              <span>0{indice + 1}</span>
              {secao.rotulo}
            </a>
          ))}
        </nav>

        <div className="lc-sidebar-rodape">
          <p>
            Portfólio demonstrativo
            <br />
            São Paulo · remoto
          </p>
          <a href="/#demos" onClick={voltar}>
            ← Voltar ao portfólio
          </a>
        </div>
      </aside>

      <main className="lc-main">
        <div className="lc-demo-strip">
          <span>
            <strong>Demonstração</strong> · Lucas Martins é uma persona fictícia
          </span>
          <a href="/#demos" onClick={voltar}>
            ← Voltar ao portfólio
          </a>
        </div>

        <section className="lc-hero" id="lc-inicio" aria-labelledby="lc-hero-titulo">
          <div className="lc-hero-grade" aria-hidden="true" />
          <div className="lc-hero-brilho" aria-hidden="true" />
          <div className="lc-hero-conteudo">
            <div className="lc-hero-texto">
              <p className="lc-eyebrow">
                <span className="lc-eyebrow-dot" /> Desenvolvedor full-stack
              </p>
              <h1 id="lc-hero-titulo">
                Olá, eu sou <span className="lc-gradiente">Lucas Martins.</span>
              </h1>
              <p className="lc-hero-descricao">
                Transformo problemas de produto em interfaces claras, rápidas e
                acessíveis. Do primeiro rascunho ao deploy, com atenção ao
                detalhe e ao contexto de quem usa.
              </p>
              <div className="lc-hero-acoes">
                <button
                  type="button"
                  className="lc-btn lc-btn--primario"
                  onClick={() => irPara("lc-projetos")}
                >
                  Ver projetos <IconeSeta size={16} />
                </button>
                <button
                  type="button"
                  className="lc-btn lc-btn--secundario"
                  onClick={() => irPara("lc-contato")}
                >
                  Falar comigo <IconeMail size={16} />
                </button>
              </div>
              <div className="lc-hero-meta">
                <span><i className="lc-status-ponto" /> Disponível para projetos</span>
                <span>React · Node · TypeScript</span>
                <span>Portfólio fictício</span>
              </div>
            </div>

            <div className="lc-hero-visual">
              <div className="lc-terminal-wrap">
                <Terminal />
              </div>
              <button
                type="button"
                className="lc-hero-case"
                onClick={() => setProjetoAberto(PROJETOS[0])}
                aria-label="Abrir estudo de caso Atlas Finance"
              >
                <span className="lc-hero-case-icone">
                  <IconeSetaDiagonal size={18} />
                </span>
                <span>
                  <small>Case em destaque</small>
                  <strong>Atlas Finance</strong>
                </span>
              </button>
              <span className="lc-hero-selo">4 anos construindo para a web</span>
            </div>
          </div>
        </section>

        <section className="lc-secao lc-sobre" id="lc-sobre" aria-labelledby="lc-sobre-titulo">
          <div className="lc-secao-cabecalho">
            <div>
              <p className="lc-eyebrow">Sobre mim</p>
              <h2 id="lc-sobre-titulo">
                Curiosidade técnica,
                <br />
                <span className="lc-gradiente">olhar de produto.</span>
              </h2>
            </div>
            <p>
              Gosto de entrar no problema antes da solução: entender o contexto,
              desenhar o fluxo e só então escrever a primeira linha de código.
            </p>
          </div>

          <div className="lc-sobre-grade">
            <div className="lc-sobre-texto">
              <p>
                Sou desenvolvedor full-stack com foco em produtos digitais.
                Trabalho entre front-end e back-end, com atenção especial a
                acessibilidade, performance e consistência visual. Meu lugar
                favorito é aquela interseção entre uma boa decisão de produto e
                uma implementação bem cuidada.
              </p>
              <p>
                Neste portfólio, os projetos são estudos de caso fictícios. A
                ideia é mostrar como penso, não apenas como o resultado se
                parece. A pessoa Lucas Martins também é uma persona criada para
                esta demonstração.
              </p>
              <div className="lc-principios">
                <span>Clareza</span>
                <span>Detalhe</span>
                <span>Autonomia</span>
                <span>Acessibilidade</span>
              </div>
            </div>

            <div className="lc-sobre-ficha">
              <p className="lc-eyebrow">Ficha rápida</p>
              <dl>
                <div><dt>Base</dt><dd>São Paulo · Brasil</dd></div>
                <div><dt>Modalidade</dt><dd>Remoto</dd></div>
                <div><dt>Foco</dt><dd>Produtos digitais</dd></div>
                <div><dt>Em atividade desde</dt><dd>2022</dd></div>
              </dl>
              <p className="lc-sobre-quote">
                “Gosto de código que resolve e de interface que explica.”
              </p>
            </div>
          </div>
        </section>

        <section className="lc-secao lc-projetos" id="lc-projetos" aria-labelledby="lc-projetos-titulo">
          <div className="lc-secao-cabecalho">
            <div>
              <p className="lc-eyebrow">Projetos selecionados</p>
              <h2 id="lc-projetos-titulo">
                Quatro formas de
                <br />
                <span className="lc-gradiente">resolver um problema.</span>
              </h2>
            </div>
            <p>
              Estudos de caso fictícios que misturam produto, interface e
              implementação. Abra um projeto para ver o contexto e as decisões.
            </p>
          </div>

          <div className="lc-projetos-grade">
            {PROJETOS.map((projeto, indice) => (
              <article className="lc-projeto" key={projeto.id}>
                <button
                  type="button"
                  className="lc-projeto-visual"
                  onClick={() => setProjetoAberto(projeto)}
                  aria-label={`Abrir estudo de caso ${projeto.titulo}`}
                >
                  <LucasProjectVisual tipo={projeto.visual} />
                  <span className="lc-projeto-hover">
                    Abrir estudo de caso <IconeSetaDiagonal size={15} />
                  </span>
                </button>
                <div className="lc-projeto-info">
                  <div className="lc-projeto-topo">
                    <span className="lc-projeto-num">0{indice + 1}</span>
                    <span className="lc-projeto-tipo">{projeto.tipo} · {projeto.ano}</span>
                  </div>
                  <h3>{projeto.titulo}</h3>
                  <p>{projeto.resumo}</p>
                  <button
                    type="button"
                    className="lc-projeto-link"
                    onClick={() => setProjetoAberto(projeto)}
                  >
                    Ver detalhes <IconeSeta size={14} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="lc-secao lc-habilidades" id="lc-habilidades" aria-labelledby="lc-habilidades-titulo">
          <div className="lc-secao-cabecalho">
            <div>
              <p className="lc-eyebrow">Habilidades</p>
              <h2 id="lc-habilidades-titulo">
                Ferramentas para
                <br />
                <span className="lc-gradiente">tirar do papel.</span>
              </h2>
            </div>
            <p>
              Não é sobre colecionar tecnologias. É sobre escolher a ferramenta
              certa para o problema e saber quando ela já não é suficiente.
            </p>
          </div>

          <div className="lc-habilidades-grade">
            {HABILIDADES.map(({ Icone, numero, titulo, texto, itens }) => (
              <article className="lc-habilidade" key={titulo}>
                <div className="lc-habilidade-topo">
                  <span className="lc-habilidade-icone"><Icone size={19} /></span>
                  <span className="lc-habilidade-num">{numero}</span>
                </div>
                <h3>{titulo}</h3>
                <p>{texto}</p>
                <ul>
                  {itens.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="lc-ferramentas">
            <IconeCheck size={15} />
            <span>
              Também no dia a dia: Git, GitHub, Figma, testes, acessibilidade e
              uma boa dose de curiosidade.
            </span>
          </div>
        </section>

        <section className="lc-secao lc-servicos" id="lc-servicos" aria-labelledby="lc-servicos-titulo">
          <div className="lc-secao-cabecalho">
            <div>
              <p className="lc-eyebrow">Serviços</p>
              <h2 id="lc-servicos-titulo">
                Do problema
                <br />
                <span className="lc-gradiente">à interface final.</span>
              </h2>
            </div>
            <p>
              Posso entrar em diferentes momentos do projeto, sempre com o mesmo
              cuidado: entender, desenhar, construir e revisar.
            </p>
          </div>

          <div className="lc-servicos-grade">
            {SERVICOS.map(({ Icone, numero, titulo, texto, itens }) => (
              <article className="lc-servico" key={titulo}>
                <div className="lc-servico-topo">
                  <span className="lc-servico-num">{numero}</span>
                  <span className="lc-servico-icone"><Icone size={20} /></span>
                </div>
                <h3>{titulo}</h3>
                <p>{texto}</p>
                <ul>
                  {itens.map((item) => (
                    <li key={item}><IconeCheck size={13} /> {item}</li>
                  ))}
                </ul>
                <button
                  type="button"
                  className="lc-servico-link"
                  onClick={() => irPara("lc-contato")}
                >
                  Conversar sobre isso <IconeSeta size={14} />
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="lc-secao lc-contato" id="lc-contato" aria-labelledby="lc-contato-titulo">
          <div className="lc-contato-grade">
            <div className="lc-contato-texto">
              <p className="lc-eyebrow">Contato</p>
              <h2 id="lc-contato-titulo">
                Tem um projeto
                <br />
                <span className="lc-gradiente">em mente?</span>
              </h2>
              <p>
                Esta é uma demonstração de portfólio. O formulário valida os
                campos de verdade, mas não envia nada — o Lucas e os projetos são
                fictícios.
              </p>

              <dl className="lc-contato-ficha">
                <div><dt>Disponibilidade</dt><dd><i /> Aberto a projetos</dd></div>
                <div><dt>Base</dt><dd>São Paulo · remoto</dd></div>
                <div><dt>Resposta</dt><dd>Visual, nesta demo</dd></div>
              </dl>

              <div className="lc-contato-email">
                <IconeMail size={17} />
                <div>
                  <span>E-mail fictício</span>
                  <strong>lucas@exemplo.com</strong>
                </div>
              </div>

              <div className="lc-contato-redes">
                {REDES.map(({ rotulo, Icone }) => (
                  <button
                    key={rotulo}
                    type="button"
                    aria-label={`${rotulo} (demonstrativo)`}
                    title={`${rotulo} demonstrativo`}
                    onClick={() =>
                      setAvisoSocial(
                        `${rotulo} fictício: esta demonstração não possui perfil ou envio real.`
                      )
                    }
                  >
                    <Icone size={16} />
                  </button>
                ))}
              </div>
              {avisoSocial && (
                <p className="lc-aviso-social" role="status" aria-live="polite">
                  {avisoSocial}
                </p>
              )}
            </div>

            <LucasContato />
          </div>
        </section>

        <footer className="lc-footer">
          <div className="lc-footer-topo">
            <a
              className="lc-footer-logo"
              href="#lc-inicio"
              onClick={(evento) => {
                evento.preventDefault();
                irPara("lc-inicio");
              }}
            >
              LM<span>.</span>
            </a>
            <p>Desenvolvedor full-stack · persona fictícia</p>
            <a href="/#demos" onClick={voltar}>← Voltar ao portfólio</a>
          </div>
          <div className="lc-footer-base">
            <span>© 2026 Lucas Martins · demonstração de portfólio</span>
            <span>Feito por Forge</span>
          </div>
        </footer>
      </main>

      {projetoAberto && (
        <LucasProjetoModal
          projeto={projetoAberto}
          onClose={() => setProjetoAberto(null)}
          onContato={abrirContatoDoModal}
        />
      )}
    </div>
  );
}
