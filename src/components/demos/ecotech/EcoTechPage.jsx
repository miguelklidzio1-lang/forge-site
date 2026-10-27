import { useEffect, useState } from "react";
import useActiveSection from "../../../hooks/useActiveSection.js";
import useDocumentMeta from "../../../hooks/useDocumentMeta.js";
import EcoTechOrcamento from "./EcoTechOrcamento.jsx";
import EcoTechProjetoModal from "./EcoTechProjetoModal.jsx";
import { EcoHeroScene, EcoProjectScene } from "./EcoScenes.jsx";
import {
  IconeAutomacao,
  IconeCasa,
  IconeCheck,
  IconeEmpresa,
  IconeEscudo,
  IconeFolha,
  IconeGrafico,
  IconeInstagram,
  IconeLinkedin,
  IconeMail,
  IconeMapa,
  IconeMenu,
  IconeMonitor,
  IconePredio,
  IconeSeta,
  IconeSetaDiagonal,
  IconeSol,
  IconeX,
} from "./EcoTechIcons.jsx";
import "./ecotech.css";

const SECOES = [
  { id: "eco-inicio", rotulo: "Início" },
  { id: "eco-sobre", rotulo: "Sobre" },
  { id: "eco-servicos", rotulo: "Serviços" },
  { id: "eco-projetos", rotulo: "Projetos" },
  { id: "eco-processo", rotulo: "Processo" },
  { id: "eco-orcamento", rotulo: "Contato" },
];

const IDS_SECOES = SECOES.map((secao) => secao.id);

const SERVICOS = [
  {
    Icone: IconeCasa,
    numero: "01",
    nome: "Energia solar residencial",
    texto:
      "Um sistema dimensionado para o seu telhado, o seu consumo e a sua rotina — sem promessas genéricas.",
    itens: ["Estudo de consumo", "Projeto sob medida", "Monitoramento"],
  },
  {
    Icone: IconePredio,
    numero: "02",
    nome: "Solar para condomínios",
    texto:
      "Geração para áreas comuns com rateio claro e informação acessível para síndicos e moradores.",
    itens: ["Áreas comuns", "Rateio transparente", "Relatórios"],
  },
  {
    Icone: IconeEmpresa,
    numero: "03",
    nome: "Solar para empresas",
    texto:
      "Projetos para reduzir a exposição à variação tarifária e dar previsibilidade à operação.",
    itens: ["Viabilidade técnica", "Obra coordenada", "Indicadores"],
  },
  {
    Icone: IconeAutomacao,
    numero: "04",
    nome: "Automação e eficiência",
    texto:
      "Iluminação, climatização e monitoramento conectados para consumir melhor o que já é gerado.",
    itens: ["Diagnóstico", "Automação", "Acompanhamento"],
  },
];

const BENEFICIOS = [
  {
    Icone: IconeGrafico,
    titulo: "Conta mais previsível",
    texto:
      "A geração solar ajuda a reduzir a exposição às bandeiras tarifárias e às variações do mês.",
  },
  {
    Icone: IconeEscudo,
    titulo: "Projeto com cuidado",
    texto:
      "Estrutura, elétrica e segurança são dimensionadas antes da obra, com documentação de cada etapa.",
  },
  {
    Icone: IconeFolha,
    titulo: "Impacto ambiental real",
    texto:
      "Cada kWh gerado localmente evita emissões que viriam de fontes mais intensas em carbono.",
  },
  {
    Icone: IconeMonitor,
    titulo: "Presença no depois",
    texto:
      "O sistema não termina na instalação: monitoramos a geração e acompanhamos o desempenho.",
  },
];

const PROJETOS = [
  {
    id: "vale-verde",
    titulo: "Residência Vale Verde",
    tipo: "Residencial",
    local: "Vale Verde · SP",
    ano: "2025",
    potencia: "6,4 kWp",
    cena: "residencial",
    servico: "Energia solar residencial",
    tags: ["Telhado", "Família", "Monitoramento"],
    resumo:
      "Uma casa que produz a própria energia e acompanha o consumo em tempo real.",
    desafio:
      "A família queria reduzir a conta sem abrir mão do conforto. O telhado tinha sombreamento parcial no fim da tarde e precisava de um arranjo que aproveitasse a área disponível.",
    entregas: [
      "Diagnóstico de consumo e estudo de sombreamento",
      "Projeto de 6,4 kWp com 12 painéis",
      "Instalação e comissionamento acompanhados",
      "Painel de monitoramento para a família",
    ],
    resultado:
      "A simulação aponta uma redução de até 92% na conta mensal. O número é fictício, assim como o endereço e o consumo considerados.",
    metricas: [
      { valor: "92%", rotulo: "economia estimada*" },
      { valor: "12", rotulo: "painéis" },
      { valor: "8,5 t", rotulo: "CO₂ evitado/ano*" },
    ],
  },
  {
    id: "alto-da-serra",
    titulo: "Condomínio Alto da Serra",
    tipo: "Condomínio",
    local: "Alto da Serra · MG",
    ano: "2024",
    potencia: "28,8 kWp",
    cena: "condominio",
    servico: "Solar para condomínios",
    tags: ["Áreas comuns", "Rateio", "Gestão"],
    resumo:
      "Energia compartilhada para as áreas comuns, com um rateio que qualquer morador entende.",
    desafio:
      "Elevadores, iluminação e salão de festas concentravam a conta do condomínio. A gestão precisava de uma solução que não criasse uma nova caixa-preta para os moradores.",
    entregas: [
      "Estudo de área útil e viabilidade",
      "Projeto solar para as áreas comuns",
      "Apresentação do modelo em assembleia demonstrativa",
      "Relatório mensal de geração e rateio",
    ],
    resultado:
      "A geração estimada cobre 74% do consumo das áreas comuns no cenário simulado. Valores, prédio e assembleia são fictícios.",
    metricas: [
      { valor: "74%", rotulo: "áreas comuns*" },
      { valor: "48", rotulo: "painéis" },
      { valor: "5,2 t", rotulo: "CO₂ evitado/ano*" },
    ],
  },
  {
    id: "horizonte",
    titulo: "Estação Solar Horizonte",
    tipo: "Comunitário",
    local: "Horizonte · PR",
    ano: "2025",
    potencia: "120 kWp",
    cena: "estacao",
    servico: "Solar para empresas",
    tags: ["Comunidade", "Solo", "Cooperativa"],
    resumo:
      "Uma estação solar comunitária que abastece pequenos negócios e famílias da região.",
    desafio:
      "A cooperativa local queria gerar a própria energia, mas não tinha um telhado grande o suficiente. A resposta foi uma estação de solo com governança compartilhada.",
    entregas: [
      "Modelo de governança e rateio",
      "Projeto elétrico e estrutural",
      "Obra e conexão à rede",
      "Portal de acompanhamento da geração",
    ],
    resultado:
      "A estação simulada atende 46 unidades e reduz a exposição tarifária do grupo. A comunidade, os números e a estação são fictícios.",
    metricas: [
      { valor: "46", rotulo: "unidades*" },
      { valor: "120 kWp", rotulo: "capacidade" },
      { valor: "18 t", rotulo: "CO₂ evitado/ano*" },
    ],
  },
];

const ETAPAS = [
  {
    numero: "01",
    titulo: "Diagnóstico",
    texto:
      "Entendemos o consumo, o imóvel, a rotina e o que precisa mudar. Sem proposta antes de escutar.",
    detalhe: "Conversa e levantamento",
  },
  {
    numero: "02",
    titulo: "Projeto",
    texto:
      "Dimensionamos o sistema, estudamos sombreamento e desenhamos a solução com documentação clara.",
    detalhe: "Engenharia e simulação",
  },
  {
    numero: "03",
    titulo: "Instalação",
    texto:
      "Coordenamos a obra, a segurança e a conexão. Você acompanha cada etapa sem precisar virar especialista.",
    detalhe: "Obra e comissionamento",
  },
  {
    numero: "04",
    titulo: "Acompanhamento",
    texto:
      "Monitoramos a geração e ajudamos a manter o sistema performando ao longo do tempo.",
    detalhe: "Monitoramento contínuo",
  },
];

const DEPOIMENTOS = [
  {
    texto:
      "A proposta veio com o estudo de sombreamento junto. Foi a primeira vez que entendi de verdade o que estava sendo instalado no meu telhado.",
    nome: "Helena P.",
    papel: "Moradora · Vale Verde",
    iniciais: "HP",
    cor: "verde",
  },
  {
    texto:
      "O relatório de rateio mudou a conversa na assembleia. Em vez de discutir a conta inteira, a gente passou a olhar a geração e o consumo por área.",
    nome: "Marcos A.",
    papel: "Síndico · Alto da Serra",
    iniciais: "MA",
    cor: "dourado",
  },
  {
    texto:
      "A estação comunitária parecia distante até a cooperativa organizar a governança. Hoje é uma pauta que envolve todo mundo.",
    nome: "Renata C.",
    papel: "Cooperativa · Horizonte",
    iniciais: "RC",
    cor: "terra",
  },
];

const REDES = [
  { rotulo: "Instagram", Icone: IconeInstagram },
  { rotulo: "LinkedIn", Icone: IconeLinkedin },
  { rotulo: "E-mail", Icone: IconeMail },
];

const LINK_ORCAMENTO = "eco-orcamento";

function MarcaEcoTech({ clara = false }) {
  return (
    <span className={`eco-logo-marca${clara ? " eco-logo-marca--clara" : ""}`} aria-hidden="true">
      <svg viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="19" fill="var(--eco-mark-bg, #173f33)" />
        <circle cx="20" cy="15.5" r="6.4" fill="var(--eco-mark-sun, #c8df7a)" />
        <g stroke="var(--eco-mark-sun, #c8df7a)" strokeWidth="1.6" strokeLinecap="round">
          <path d="M20 4.2v2.8M10.5 15.5H7.6M32.4 15.5h-2.9M13.2 8.7l-2-2M26.8 8.7l2-2" />
        </g>
        <path
          d="M20.2 22.3c2.1 4.4 5.9 6.5 9.9 6.1-.6-4.7-4.5-8.4-9.9-6.1Z"
          fill="var(--eco-mark-leaf, #f7f3e8)"
        />
        <path
          d="M19.8 22.3c-1.9 2.9-2.2 5.9-1.4 8.4"
          stroke="var(--eco-mark-leaf, #f7f3e8)"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

export default function EcoTechPage({ onVoltar }) {
  useDocumentMeta(
    "EcoTech — Energia solar e sustentabilidade | Demonstração",
    "Site institucional demonstrativo da EcoTech, empresa fictícia de energia solar residencial, condominial e empresarial. Projetos, serviços e orçamento de exemplo.",
    "#f7f3e8"
  );

  const ativo = useActiveSection(IDS_SECOES);
  const [menuAberto, setMenuAberto] = useState(false);
  const [projetoAberto, setProjetoAberto] = useState(null);
  const [servico, setServico] = useState("");
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

  function irParaOrcamento(nomeServico = "") {
    if (nomeServico) setServico(nomeServico);
    setMenuAberto(false);
    setProjetoAberto(null);
    window.setTimeout(() => {
      document
        .getElementById(LINK_ORCAMENTO)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  }

  function voltar(evento) {
    evento.preventDefault();
    onVoltar?.();
  }

  return (
    <div className="ecotech">
      <div className="eco-demo-strip">
        <span>
          <strong>Demonstração</strong> · EcoTech é uma empresa fictícia
        </span>
        <a href="/#demos" onClick={voltar}>← Voltar ao portfólio Forge</a>
      </div>

      <header className="eco-header">
        <div className="eco-header-inner">
          <a
            className="eco-logo"
            href="#eco-inicio"
            aria-label="EcoTech, início"
            onClick={(evento) => {
              evento.preventDefault();
              irPara("eco-inicio");
            }}
          >
            <MarcaEcoTech />
            <span className="eco-logo-texto">
              EcoTech
              <small>energia solar</small>
            </span>
          </a>

          <nav className="eco-nav" aria-label="Navegação principal">
            {SECOES.map((secao) => (
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
                {secao.rotulo}
              </a>
            ))}
          </nav>

          <div className="eco-header-acoes">
            <button
              type="button"
              className="eco-btn eco-btn--primario eco-btn--pequeno eco-header-cta"
              onClick={() => irParaOrcamento()}
            >
              Solicitar orçamento <IconeSeta size={15} />
            </button>
            <button
              type="button"
              className="eco-menu-btn"
              aria-expanded={menuAberto}
              aria-controls="eco-menu-mobile"
              aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
              onClick={() => setMenuAberto((aberto) => !aberto)}
            >
              {menuAberto ? <IconeX size={21} /> : <IconeMenu size={21} />}
            </button>
          </div>
        </div>
      </header>

      {menuAberto && (
        <div className="eco-mobile-menu" id="eco-menu-mobile">
          <nav aria-label="Menu principal">
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
                <IconeSeta size={16} />
              </a>
            ))}
          </nav>
          <div className="eco-mobile-menu-rodape">
            <button
              type="button"
              className="eco-btn eco-btn--primario"
              onClick={() => irParaOrcamento()}
            >
              Solicitar orçamento <IconeSeta size={16} />
            </button>
            <a href="/#demos" onClick={voltar}>← Voltar ao portfólio Forge</a>
            <small>Projeto demonstrativo · sem envio real de dados</small>
          </div>
        </div>
      )}

      <main>
        <section className="eco-hero" id="eco-inicio" aria-labelledby="eco-hero-titulo">
          <div className="eco-hero-fundo" aria-hidden="true" />
          <div className="eco-wrap eco-hero-grade">
            <div className="eco-hero-texto">
              <p className="eco-eyebrow">
                <IconeSol size={15} /> Energia limpa para o dia a dia
              </p>
              <h1 id="eco-hero-titulo">
                Tecnologia e <em>sustentabilidade</em> lado a lado.
              </h1>
              <p className="eco-hero-lead">
                Projetos de energia solar e eficiência energética para casas,
                condomínios e empresas. Do primeiro diagnóstico ao
                acompanhamento da geração.
              </p>
              <div className="eco-hero-acoes">
                <button
                  type="button"
                  className="eco-btn eco-btn--primario"
                  onClick={() => irParaOrcamento()}
                >
                  Solicitar orçamento <IconeSeta size={16} />
                </button>
                <button
                  type="button"
                  className="eco-btn eco-btn--secundario"
                  onClick={() => irPara("eco-servicos")}
                >
                  Conhecer soluções
                </button>
              </div>
              <ul className="eco-hero-checks">
                <li><IconeCheck size={14} /> Projeto sob medida</li>
                <li><IconeCheck size={14} /> Obra acompanhada</li>
                <li><IconeCheck size={14} /> Monitoramento contínuo</li>
              </ul>
            </div>

            <div className="eco-hero-visual">
              <EcoHeroScene />
            </div>
          </div>

          <div className="eco-wrap eco-prova">
            <div className="eco-prova-item">
              <strong>1,24 MWh</strong>
              <span>geração média/mês*</span>
            </div>
            <div className="eco-prova-item">
              <strong>86</strong>
              <span>projetos ilustrativos</span>
            </div>
            <div className="eco-prova-item">
              <strong>4,2 mil t</strong>
              <span>CO₂ evitado no ano*</span>
            </div>
            <p className="eco-prova-nota">*Indicadores fictícios para esta demonstração.</p>
          </div>
        </section>

        <section className="eco-secao eco-sobre" id="eco-sobre" aria-labelledby="eco-sobre-titulo">
          <div className="eco-wrap">
            <div className="eco-secao-cabecalho">
              <div>
                <p className="eco-eyebrow">Sobre a EcoTech</p>
                <h2 id="eco-sobre-titulo">
                  Energia limpa não precisa ser <em>complicada.</em>
                </h2>
              </div>
              <p>
                Acreditamos que tecnologia boa é aquela que cabe na rotina. Por
                isso, traduzimos engenharia, economia e impacto ambiental em
                decisões simples de acompanhar.
              </p>
            </div>

            <div className="eco-sobre-grade">
              <div className="eco-sobre-texto">
                <p>
                  A EcoTech é uma empresa fictícia de energia solar criada para
                  esta demonstração de portfólio. Aqui, cada projeto começa pelo
                  contexto: o imóvel, o consumo, a sombra, a rotina e o que faz
                  sentido para quem vai conviver com o sistema.
                </p>
                <p>
                  Trabalhamos com projeto, instalação e acompanhamento — sem
                  prometer milagres e sem esconder premissas. O resultado que
                  buscamos é uma relação mais previsível com a energia e um
                  impacto ambiental que dá para explicar.
                </p>
                <div className="eco-valores">
                  <span>Transparência</span>
                  <span>Técnica</span>
                  <span>Cuidado</span>
                  <span>Longo prazo</span>
                </div>
              </div>

              <div className="eco-sobre-card">
                <span className="eco-sobre-card-folha" aria-hidden="true">
                  <IconeFolha size={74} />
                </span>
                <p className="eco-eyebrow">Nosso jeito de trabalhar</p>
                <blockquote>
                  “Energia não é só conta. É conforto, rotina e futuro — e
                  precisa ser explicada com clareza.”
                </blockquote>
                <div className="eco-sobre-card-rodape">
                  <span>Empresa fictícia</span>
                  <span>Desde 2018*</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="eco-secao eco-servicos" id="eco-servicos" aria-labelledby="eco-servicos-titulo">
          <div className="eco-wrap">
            <div className="eco-secao-cabecalho">
              <div>
                <p className="eco-eyebrow">Soluções</p>
                <h2 id="eco-servicos-titulo">
                  Do telhado ao <em>monitoramento.</em>
                </h2>
              </div>
              <p>
                Quatro frentes para diferentes tipos de imóvel e de ambição. Em
                todas, o ponto de partida é o mesmo: entender antes de propor.
              </p>
            </div>

            <div className="eco-servicos-grade">
              {SERVICOS.map(({ Icone, numero, nome, texto, itens }) => (
                <article className="eco-servico" key={nome}>
                  <div className="eco-servico-topo">
                    <span className="eco-servico-icone"><Icone size={22} /></span>
                    <span className="eco-servico-num">{numero}</span>
                  </div>
                  <h3>{nome}</h3>
                  <p>{texto}</p>
                  <ul>
                    {itens.map((item) => (
                      <li key={item}><IconeCheck size={13} /> {item}</li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    className="eco-servico-link"
                    onClick={() => irParaOrcamento(nome)}
                  >
                    Solicitar orçamento <IconeSetaDiagonal size={14} />
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="eco-beneficios" aria-labelledby="eco-beneficios-titulo">
          <div className="eco-wrap eco-beneficios-grade">
            <div className="eco-beneficios-cabecalho">
              <p className="eco-eyebrow">Por que solar</p>
              <h2 id="eco-beneficios-titulo">
                Menos achismo.<br />
                Mais <em>clareza.</em>
              </h2>
              <p>
                Solar não é uma pílula mágica. É um projeto de infraestrutura
                que, bem dimensionado, traz previsibilidade e impacto positivo.
              </p>
              <div className="eco-beneficios-destaque">
                <strong>até 90%*</strong>
                <span>de redução estimada na conta</span>
              </div>
            </div>

            <div className="eco-beneficios-lista">
              {BENEFICIOS.map(({ Icone, titulo, texto }) => (
                <article className="eco-beneficio" key={titulo}>
                  <span className="eco-beneficio-icone"><Icone size={21} /></span>
                  <h3>{titulo}</h3>
                  <p>{texto}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="eco-wrap eco-beneficios-nota">
            <span>*Estimativa ilustrativa para esta demonstração. O resultado
            varia conforme consumo, localização e projeto.</span>
          </div>
        </section>

        <section className="eco-secao eco-projetos" id="eco-projetos" aria-labelledby="eco-projetos-titulo">
          <div className="eco-wrap">
            <div className="eco-secao-cabecalho">
              <div>
                <p className="eco-eyebrow">Projetos</p>
                <h2 id="eco-projetos-titulo">
                  Sol em contextos <em>diferentes.</em>
                </h2>
              </div>
              <p>
                Três cenários fictícios para mostrar como a mesma tecnologia se
                adapta a uma casa, um condomínio e uma comunidade.
              </p>
            </div>

            <div className="eco-projetos-grade">
              {PROJETOS.map((projeto, indice) => (
                <article className="eco-projeto" key={projeto.id}>
                  <button
                    type="button"
                    className="eco-projeto-visual"
                    onClick={() => setProjetoAberto(projeto)}
                    aria-label={`Abrir detalhes do projeto ${projeto.titulo}`}
                  >
                    <EcoProjectScene tipo={projeto.cena} />
                    <span className="eco-projeto-hover">
                      Ver projeto <IconeSetaDiagonal size={15} />
                    </span>
                    <span className="eco-projeto-num">0{indice + 1}</span>
                  </button>
                  <div className="eco-projeto-info">
                    <div className="eco-projeto-tags">
                      {projeto.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    <h3>{projeto.titulo}</h3>
                    <p>{projeto.resumo}</p>
                    <div className="eco-projeto-meta">
                      <span><IconeMapa size={13} /> {projeto.local}</span>
                      <span>{projeto.potencia}</span>
                    </div>
                    <button
                      type="button"
                      className="eco-projeto-link"
                      onClick={() => setProjetoAberto(projeto)}
                    >
                      Ver detalhes <IconeSeta size={14} />
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <p className="eco-secao-nota">
              Projetos, locais, métricas e depoimentos são fictícios. As cenas
              são ilustrações originais.
            </p>
          </div>
        </section>

        <section className="eco-secao eco-processo" id="eco-processo" aria-labelledby="eco-processo-titulo">
          <div className="eco-wrap">
            <div className="eco-secao-cabecalho">
              <div>
                <p className="eco-eyebrow">Processo</p>
                <h2 id="eco-processo-titulo">
                  Um caminho <em>visível.</em>
                </h2>
              </div>
              <p>
                Você não precisa entender de engenharia para acompanhar o
                projeto. Precisa saber o que está acontecendo e por quê.
              </p>
            </div>

            <ol className="eco-processo-grade">
              {ETAPAS.map((etapa) => (
                <li className="eco-etapa" key={etapa.numero}>
                  <span className="eco-etapa-num">{etapa.numero}</span>
                  <h3>{etapa.titulo}</h3>
                  <p>{etapa.texto}</p>
                  <span className="eco-etapa-detalhe">{etapa.detalhe}</span>
                </li>
              ))}
            </ol>

            <div className="eco-processo-cta">
              <p>
                <strong>Tudo começa com uma conversa.</strong> Nesta demo, a
                conversa acontece no formulário — e nada é enviado de verdade.
              </p>
              <button
                type="button"
                className="eco-btn eco-btn--secundario"
                onClick={() => irParaOrcamento()}
              >
                Ir para o formulário <IconeSeta size={15} />
              </button>
            </div>
          </div>
        </section>

        <section className="eco-depoimentos" aria-labelledby="eco-depoimentos-titulo">
          <div className="eco-wrap">
            <div className="eco-secao-cabecalho eco-secao-cabecalho--claro">
              <div>
                <p className="eco-eyebrow">Depoimentos</p>
                <h2 id="eco-depoimentos-titulo">
                  O que ficou <em>depois.</em>
                </h2>
              </div>
              <p>
                Histórias fictícias de quem acompanhou um projeto EcoTech. Elas
                existem para dar contexto ao layout, não para provar resultados.
              </p>
            </div>

            <div className="eco-depoimentos-grade">
              {DEPOIMENTOS.map((depoimento) => (
                <figure className="eco-depoimento" key={depoimento.nome}>
                  <span className="eco-depoimento-aspas" aria-hidden="true">“</span>
                  <blockquote>
                    <p>{depoimento.texto}</p>
                  </blockquote>
                  <figcaption>
                    <span className={`eco-avatar eco-avatar--${depoimento.cor}`}>
                      {depoimento.iniciais}
                    </span>
                    <span className="eco-depoimento-pessoa">
                      <strong>{depoimento.nome}</strong>
                      <small>{depoimento.papel}</small>
                    </span>
                    <span className="eco-depoimento-tag">Fictício</span>
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="eco-secao-nota">Depoimentos e pessoas fictícios.</p>
          </div>
        </section>

        <section className="eco-cta" aria-labelledby="eco-cta-titulo">
          <div className="eco-wrap eco-cta-grade">
            <div>
              <p className="eco-eyebrow">Próximo passo</p>
              <h2 id="eco-cta-titulo">
                Vamos colocar o sol a trabalhar <em>para você?</em>
              </h2>
            </div>
            <div className="eco-cta-acoes">
              <button
                type="button"
                className="eco-btn eco-btn--claro"
                onClick={() => irParaOrcamento()}
              >
                Solicitar orçamento demonstrativo <IconeSeta size={16} />
              </button>
              <small>Sem envio real · formulário de demonstração</small>
            </div>
            <span className="eco-cta-sol" aria-hidden="true"><IconeSol size={62} /></span>
          </div>
        </section>

        <section className="eco-secao eco-orcamento" id="eco-orcamento" aria-labelledby="eco-orcamento-titulo">
          <div className="eco-wrap eco-orcamento-grade">
            <div className="eco-orcamento-texto">
              <p className="eco-eyebrow">Orçamento</p>
              <h2 id="eco-orcamento-titulo">
                Vamos planejar a sua <em>transição solar?</em>
              </h2>
              <p>
                Preencha o formulário abaixo para testar a experiência de
                solicitação. A EcoTech é fictícia: nenhum orçamento real será
                gerado e nenhum dado será enviado.
              </p>

              <ul className="eco-orcamento-lista">
                <li><IconeCheck size={14} /> Escolha o serviço de interesse</li>
                <li><IconeCheck size={14} /> Veja a validação dos campos</li>
                <li><IconeCheck size={14} /> Receba um feedback honesto na tela</li>
              </ul>

              <div className="eco-orcamento-contato">
                <span className="eco-orcamento-icone"><IconeMail size={17} /></span>
                <div>
                  <small>E-mail fictício</small>
                  <strong>contato@ecotech.exemplo</strong>
                </div>
              </div>

              <div className="eco-orcamento-redes">
                {REDES.map(({ rotulo, Icone }) => (
                  <button
                    key={rotulo}
                    type="button"
                    aria-label={`${rotulo} da EcoTech (demonstrativo)`}
                    title={`${rotulo} demonstrativo`}
                    onClick={() =>
                      setAvisoSocial(
                        `${rotulo} fictício: a EcoTech é uma demonstração e não possui perfil ou atendimento real.`
                      )
                    }
                  >
                    <Icone size={16} />
                  </button>
                ))}
              </div>
              {avisoSocial && (
                <p className="eco-aviso-social" role="status" aria-live="polite">
                  {avisoSocial}
                </p>
              )}
            </div>

            <EcoTechOrcamento servico={servico} onServicoChange={setServico} />
          </div>
        </section>
      </main>

      <footer className="eco-footer">
        <div className="eco-wrap eco-footer-grade">
          <div className="eco-footer-marca">
            <a
              className="eco-logo eco-logo--claro"
              href="#eco-inicio"
              onClick={(evento) => {
                evento.preventDefault();
                irPara("eco-inicio");
              }}
            >
              <MarcaEcoTech clara />
              <span className="eco-logo-texto">
                EcoTech
                <small>energia solar</small>
              </span>
            </a>
            <p>
              Energia solar e eficiência para casas, condomínios e empresas.
              Esta é uma empresa fictícia de demonstração.
            </p>
            <div className="eco-footer-redes">
              {REDES.map(({ rotulo, Icone }) => (
                <button
                  key={rotulo}
                  type="button"
                  aria-label={`${rotulo} da EcoTech (demonstrativo)`}
                  title={`${rotulo} demonstrativo`}
                  onClick={() =>
                    setAvisoSocial(
                      `${rotulo} fictício: não há perfil ou atendimento real nesta demonstração.`
                    )
                  }
                >
                  <Icone size={16} />
                </button>
              ))}
            </div>
            {avisoSocial && (
              <p className="eco-footer-aviso" role="status" aria-live="polite">
                {avisoSocial}
              </p>
            )}
          </div>

          <div className="eco-footer-coluna">
            <h3>Navegar</h3>
            {SECOES.slice(0, 5).map((secao) => (
              <a
                key={secao.id}
                href={`#${secao.id}`}
                onClick={(evento) => {
                  evento.preventDefault();
                  irPara(secao.id);
                }}
              >
                {secao.rotulo}
              </a>
            ))}
          </div>

          <div className="eco-footer-coluna">
            <h3>Soluções</h3>
            {SERVICOS.map((servicoItem) => (
              <button
                key={servicoItem.nome}
                type="button"
                onClick={() => irParaOrcamento(servicoItem.nome)}
              >
                {servicoItem.nome}
              </button>
            ))}
          </div>

          <div className="eco-footer-coluna eco-footer-contato">
            <h3>Contato</h3>
            <p>contato@ecotech.exemplo</p>
            <p>São Paulo · Brasil</p>
            <p>Atendimento fictício</p>
            <a
              href={`#${LINK_ORCAMENTO}`}
              className="eco-footer-orcamento"
              onClick={(evento) => {
                evento.preventDefault();
                irParaOrcamento();
              }}
            >
              Ir para o formulário <IconeSeta size={14} />
            </a>
          </div>
        </div>

        <div className="eco-wrap eco-footer-base">
          <span>© 2026 EcoTech · demonstração de portfólio</span>
          <span>Empresa, projetos e dados fictícios</span>
          <a href="/#demos" onClick={voltar}>← Voltar ao portfólio Forge</a>
        </div>
      </footer>

      {projetoAberto && (
        <EcoTechProjetoModal
          projeto={projetoAberto}
          onClose={() => setProjetoAberto(null)}
          onOrcamento={irParaOrcamento}
        />
      )}
    </div>
  );
}
