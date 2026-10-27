import { useEffect, useMemo, useState } from "react";
import { usePreview } from "./previewContext.js";
import "./vitta.css";

const ESPECIALIDADES = [
  {
    id: "clinica",
    nome: "Clínica geral",
    curta: "A porta de entrada para entender o seu corpo por inteiro.",
    longa:
      "Uma consulta ampla, com escuta e tempo. Avaliamos histórico, rotina, exames e sinais que merecem atenção antes de qualquer encaminhamento.",
    duracao: "50 min",
    icone: "coracao",
  },
  {
    id: "dermato",
    nome: "Dermatologia",
    curta: "Pele, cabelo e unhas com cuidado clínico e estético.",
    longa:
      "Do acompanhamento de acne e manchas à prevenção do câncer de pele. Cada plano é desenhado para a sua pele, não para uma tendência.",
    duracao: "40 min",
    icone: "folha",
  },
  {
    id: "nutri",
    nome: "Nutrição",
    curta: "Comida real, rotina possível e nenhuma dieta milagrosa.",
    longa:
      "Avaliação corporal, histórico alimentar e um plano que caiba na sua vida. Sem alimentos proibidos, sem culpa e com acompanhamento próximo.",
    duracao: "60 min",
    icone: "maca",
  },
  {
    id: "psico",
    nome: "Psicologia",
    curta: "Um espaço seguro para cuidar do que não aparece nos exames.",
    longa:
      "Atendimento individual para ansiedade, sobrecarga, relações e transições de vida. Um processo no seu tempo, com uma profissional que escuta.",
    duracao: "50 min",
    icone: "mente",
  },
];

const HORARIOS = ["08:00", "09:30", "11:00", "14:00", "15:30", "17:00"];

function isoLocal(d) {
  const ano = d.getFullYear();
  const mes = String(d.getMonth() + 1).padStart(2, "0");
  const dia = String(d.getDate()).padStart(2, "0");
  return `${ano}-${mes}-${dia}`;
}

function proximosDias() {
  const dias = [];
  const base = new Date();
  let i = 1;

  while (dias.length < 5) {
    const d = new Date(base);
    d.setDate(base.getDate() + i);
    i += 1;
    if (d.getDay() === 0) continue;
    dias.push({
      iso: isoLocal(d),
      dia: String(d.getDate()).padStart(2, "0"),
      mes: d.toLocaleDateString("pt-BR", { month: "short" }).replace(".", ""),
      semana: d.toLocaleDateString("pt-BR", { weekday: "short" }).replace(".", ""),
    });
  }

  return dias;
}

function IconeCoracao() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.8 5.6a5.5 5.5 0 0 0-7.8 0L12 6.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 22l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z" />
    </svg>
  );
}

function IconeFolha() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 20c0-8 5-14 16-16 0 11-6 16-13 16" />
      <path d="M4 20c3-5 7-8 12-10" />
    </svg>
  );
}

function IconeMaca() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 8c-4-2-7 0-7 5s4 8 7 8 7-3 7-8-3-7-7-5Z" />
      <path d="M12 8c0-2 1-4 4-5" />
      <path d="M9 15c1.5 1 4.5 1 6 0" />
    </svg>
  );
}

function IconeMente() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 4a4 4 0 0 0-4 4c-2 1-2 5 0 6a4 4 0 0 0 4 4V4Z" />
      <path d="M15 4a4 4 0 0 1 4 4c2 1 2 5 0 6a4 4 0 0 1-4 4V4Z" />
      <path d="M9 9H7M15 9h2M9 15H7M15 15h2" />
    </svg>
  );
}

function IconeSeta() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function IconeCheck() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 12l5 5L20 6" />
    </svg>
  );
}

function IconeCalendario() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="3" />
      <path d="M8 3v4M16 3v4M3 10h18" />
    </svg>
  );
}

function IconeEstrela() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
      <path d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.4-5.8-3-5.8 3 1.1-6.4L2.6 9.3l6.5-.9L12 2.5Z" />
    </svg>
  );
}

function IconeMais({ aberto }) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
      <path d="M5 12h14" />
      {!aberto && <path d="M12 5v14" />}
    </svg>
  );
}

function IconeEspecialidade({ tipo }) {
  if (tipo === "coracao") return <IconeCoracao />;
  if (tipo === "folha") return <IconeFolha />;
  if (tipo === "maca") return <IconeMaca />;
  return <IconeMente />;
}

function Inicio({ onIr }) {
  return (
    <>
      <section className="vitta-hero">
        <div className="vitta-hero-texto">
          <p className="vitta-olho">Saúde integral · São Paulo</p>
          <h1>
            Cuidado que
            <br />
            acompanha você.
          </h1>
          <p className="vitta-hero-sub">
            Uma clínica feita para olhar a sua saúde por inteiro — com tempo,
            escuta e um plano que faz sentido para a sua rotina.
          </p>
          <div className="vitta-hero-acoes">
            <button className="vitta-btn vitta-btn--verde" onClick={() => onIr("agendar")}>
              Agendar consulta <IconeSeta />
            </button>
            <button className="vitta-btn vitta-btn--linha" onClick={() => onIr("especialidades")}>
              Ver especialidades
            </button>
          </div>
          <div className="vitta-stats">
            <div><strong>15</strong><span>anos de história</span></div>
            <div><strong>12</strong><span>especialistas</span></div>
            <div><strong>4,9</strong><span>avaliação dos pacientes</span></div>
          </div>
        </div>

        <div className="vitta-hero-visual">
          <span className="vitta-orb" />
          <div className="vitta-visual-card">
            <div className="vitta-visual-topo">
              <span className="vitta-pulso">
                <svg viewBox="0 0 140 36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M2 20h24l7-13 10 25 9-19 7 7h79" />
                </svg>
              </span>
              <span className="vitta-visual-label">Cuidado integral</span>
            </div>
            <h3>
              Saúde que olha
              <br />
              para o todo.
            </h3>
            <p>Corpo, mente e rotina no mesmo plano de cuidado.</p>
            <div className="vitta-visual-pessoa">
              <span className="vitta-avatar">V</span>
              <div>
                <strong>Dra. Vitória Alves</strong>
                <span>Clínica geral · CRM 12345</span>
              </div>
            </div>
          </div>
          <span className="vitta-chip vitta-chip--a"><IconeCalendario /> Agenda online</span>
          <span className="vitta-chip vitta-chip--b"><IconeEstrela /> 4,9 · 320 avaliações</span>
          <span className="vitta-chip vitta-chip--c"><IconeCheck /> Convênios aceitos</span>
        </div>
      </section>

      <section className="vitta-secao vitta-especialidades-secao">
        <div className="vitta-secao-topo">
          <div>
            <p className="vitta-olho">Especialidades</p>
            <h2>Um cuidado,<br />vários caminhos.</h2>
          </div>
          <button className="vitta-link" onClick={() => onIr("especialidades")}>
            Ver todas <IconeSeta />
          </button>
        </div>

        <div className="vitta-especialidades">
          {ESPECIALIDADES.map((e) => (
            <button className="vitta-especialidade" key={e.id} onClick={() => onIr("especialidades")}>
              <span className="vitta-especialidade-icone"><IconeEspecialidade tipo={e.icone} /></span>
              <h3>{e.nome}</h3>
              <p>{e.curta}</p>
              <span className="vitta-link">Saber mais <IconeSeta /></span>
            </button>
          ))}
        </div>
      </section>

      <section className="vitta-secao vitta-como">
        <div className="vitta-como-topo">
          <p className="vitta-olho">Como funciona</p>
          <h2>Simples do<br />primeiro contato.</h2>
        </div>
        <div className="vitta-passos">
          <div className="vitta-passo">
            <span>01</span>
            <h3>Escolha o cuidado</h3>
            <p>Veja a especialidade que combina com o que você está sentindo.</p>
          </div>
          <div className="vitta-passo">
            <span>02</span>
            <h3>Agende online</h3>
            <p>Escolha o melhor dia e horário. A confirmação chega por e-mail.</p>
          </div>
          <div className="vitta-passo">
            <span>03</span>
            <h3>Seja bem cuidado</h3>
            <p>Chegue com calma. A consulta é sua, com tempo para conversar.</p>
          </div>
        </div>
      </section>

      <section className="vitta-depoimento-secao">
        <blockquote className="vitta-depoimento">
          <div className="vitta-depoimento-estrelas" aria-label="5 de 5 estrelas">
            {[1, 2, 3, 4, 5].map((n) => <IconeEstrela key={n} />)}
          </div>
          <p>
            “Saí da consulta entendendo o que estava acontecendo comigo. Fui
            ouvida de verdade, sem pressa e sem julgamento.”
          </p>
          <footer>
            <span className="vitta-depoimento-avatar">M</span>
            <div>
              <strong>Mariana C.</strong>
              <span>Paciente desde 2021</span>
            </div>
          </footer>
        </blockquote>
        <div className="vitta-depoimento-lado">
          <p className="vitta-olho">Nossa promessa</p>
          <h2>Menos pressa.<br />Mais escuta.</h2>
          <p>
            Consultas com tempo real, equipe que conversa entre si e um plano
            de cuidado que continua depois que você sai daqui.
          </p>
          <button className="vitta-btn vitta-btn--verde" onClick={() => onIr("agendar")}>
            Quero ser cuidado <IconeSeta />
          </button>
        </div>
      </section>

      <section className="vitta-faixa">
        <div>
          <p className="vitta-olho">Sua saúde não precisa esperar</p>
          <h2>O próximo passo<br />pode ser hoje.</h2>
        </div>
        <button className="vitta-btn vitta-btn--claro" onClick={() => onIr("agendar")}>
          Agendar consulta <IconeSeta />
        </button>
      </section>
    </>
  );
}

function Especialidades({ onIr }) {
  const [aberta, setAberta] = useState("clinica");

  return (
    <>
      <section className="vitta-pagina-topo">
        <p className="vitta-olho">Especialidades</p>
        <h1>O cuidado certo,<br />no tempo certo.</h1>
        <p>
          Uma equipe que se fala. Se você não souber por onde começar, a clínica
          geral orienta o primeiro passo.
        </p>
      </section>

      <div className="vitta-acordeao">
        {ESPECIALIDADES.map((e) => {
          const estaAberta = aberta === e.id;
          return (
            <div className={`vitta-acordeao-item ${estaAberta ? "is-aberta" : ""}`} key={e.id}>
              <button
                className="vitta-acordeao-botao"
                onClick={() => setAberta(estaAberta ? "" : e.id)}
                aria-expanded={estaAberta}
              >
                <span className="vitta-acordeao-icone"><IconeEspecialidade tipo={e.icone} /></span>
                <span className="vitta-acordeao-nome">{e.nome}</span>
                <span className="vitta-acordeao-duracao">{e.duracao}</span>
                <span className="vitta-acordeao-mais"><IconeMais aberto={estaAberta} /></span>
              </button>
              {estaAberta && (
                <div className="vitta-acordeao-conteudo">
                  <p>{e.longa}</p>
                  <div>
                    <span>Consulta de {e.duracao}</span>
                    <button className="vitta-btn vitta-btn--verde vitta-btn--pequeno" onClick={() => onIr("agendar")}>
                      Agendar <IconeSeta />
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="vitta-pagina-cta">
        <p>Não sabe qual escolher? A clínica geral indica o caminho.</p>
        <button className="vitta-btn vitta-btn--verde" onClick={() => onIr("agendar")}>
          Agendar consulta <IconeSeta />
        </button>
      </div>
    </>
  );
}

function Agendar() {
  const [etapa, setEtapa] = useState(1);
  const [esp, setEsp] = useState("");
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");
  const [form, setForm] = useState({ nome: "", email: "", tel: "", obs: "" });
  const [erro, setErro] = useState("");
  const dias = useMemo(proximosDias, []);

  const espSel = ESPECIALIDADES.find((e) => e.id === esp);
  const diaSel = dias.find((d) => d.iso === data);

  function avancar() {
    setErro("");

    if (etapa === 1 && !esp) {
      setErro("Escolha uma especialidade para continuar.");
      return;
    }

    if (etapa === 2 && (!data || !hora)) {
      setErro("Escolha a data e o horário da consulta.");
      return;
    }

    if (etapa === 3) {
      if (!form.nome.trim() || !form.email.trim() || !form.tel.trim()) {
        setErro("Preencha nome, e-mail e telefone.");
        return;
      }
      setEtapa(4);
      return;
    }

    setEtapa((e) => e + 1);
  }

  function voltar() {
    setErro("");
    setEtapa((e) => Math.max(1, e - 1));
  }

  function novo() {
    setEtapa(1);
    setEsp("");
    setData("");
    setHora("");
    setForm({ nome: "", email: "", tel: "", obs: "" });
    setErro("");
  }

  return (
    <section className="vitta-agendar">
      <div className="vitta-agendar-topo">
        <p className="vitta-olho">Agendamento</p>
        <h1>Reserve um tempo<br />para você.</h1>
        <p>Três passos rápidos. A confirmação chega por e-mail.</p>
      </div>

      <div className="vitta-progresso" aria-label="Etapas do agendamento">
        {[
          [1, "Especialidade"],
          [2, "Data e hora"],
          [3, "Seus dados"],
        ].map(([n, rotulo], i) => (
          <div className={`vitta-progresso-item ${etapa >= n ? "is-ativo" : ""} ${etapa > n ? "is-feito" : ""}`} key={n}>
            <span className="vitta-progresso-num">{etapa > n ? <IconeCheck /> : n}</span>
            <span className="vitta-progresso-rotulo">{rotulo}</span>
            {i < 2 && <span className="vitta-progresso-linha" />}
          </div>
        ))}
      </div>

      {etapa === 1 && (
        <div className="vitta-etapa">
          <h2>Qual cuidado você procura?</h2>
          <div className="vitta-escolha-esp">
            {ESPECIALIDADES.map((e) => (
              <button
                key={e.id}
                className={`vitta-escolha-card ${esp === e.id ? "is-ativa" : ""}`}
                onClick={() => { setEsp(e.id); setErro(""); }}
              >
                <span className="vitta-escolha-icone"><IconeEspecialidade tipo={e.icone} /></span>
                <span>
                  <strong>{e.nome}</strong>
                  <small>{e.duracao} · presencial</small>
                </span>
                <span className="vitta-escolha-marca">{esp === e.id && <IconeCheck />}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {etapa === 2 && (
        <div className="vitta-etapa">
          <h2>Escolha o melhor momento.</h2>
          <p className="vitta-etapa-sub">{espSel?.nome} · {espSel?.duracao}</p>

          <div className="vitta-dias">
            {dias.map((d) => (
              <button
                key={d.iso}
                className={`vitta-dia ${data === d.iso ? "is-ativo" : ""}`}
                onClick={() => { setData(d.iso); setErro(""); }}
              >
                <span>{d.semana}</span>
                <strong>{d.dia}</strong>
                <span>{d.mes}</span>
              </button>
            ))}
          </div>

          <p className="vitta-subtitulo">Horários disponíveis</p>
          <div className="vitta-horarios">
            {HORARIOS.map((h) => (
              <button
                key={h}
                className={`vitta-horario ${hora === h ? "is-ativo" : ""}`}
                onClick={() => { setHora(h); setErro(""); }}
              >
                {h}
              </button>
            ))}
          </div>
        </div>
      )}

      {etapa === 3 && (
        <div className="vitta-etapa">
          <h2>Quase lá.</h2>
          <p className="vitta-etapa-sub">
            {espSel?.nome} · {diaSel?.semana}, {diaSel?.dia} {diaSel?.mes} · {hora}
          </p>

          <div className="vitta-form">
            <label>
              <span>Nome completo</span>
              <input value={form.nome} onChange={(e) => setForm((f) => ({ ...f, nome: e.target.value }))} placeholder="Seu nome" />
            </label>
            <label>
              <span>E-mail</span>
              <input type="email" value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} placeholder="voce@email.com" />
            </label>
            <label>
              <span>Telefone</span>
              <input value={form.tel} onChange={(e) => setForm((f) => ({ ...f, tel: e.target.value }))} placeholder="(11) 99999-0000" />
            </label>
            <label>
              <span>Observações <i>(opcional)</i></span>
              <input value={form.obs} onChange={(e) => setForm((f) => ({ ...f, obs: e.target.value }))} placeholder="Algo que devemos saber?" />
            </label>
          </div>
        </div>
      )}

      {etapa === 4 && (
        <div className="vitta-sucesso">
          <span className="vitta-sucesso-icone"><IconeCheck /></span>
          <p className="vitta-olho">Consulta agendada</p>
          <h2>Até breve,<br />{form.nome.split(" ")[0]}.</h2>
          <p>
            Sua consulta de <strong>{espSel?.nome}</strong> está marcada para{" "}
            <strong>{diaSel?.semana}, {diaSel?.dia} {diaSel?.mes}</strong>, às{" "}
            <strong>{hora}</strong>.
          </p>
          <p className="vitta-sucesso-nota">
            Enviamos os detalhes para {form.email}. Se precisar remarcar, é só
            responder ao e-mail.
          </p>
          <button className="vitta-btn vitta-btn--verde" onClick={novo}>
            Fazer novo agendamento
          </button>
          <p className="vitta-demo-nota">Demonstração — nenhuma consulta real é agendada.</p>
        </div>
      )}

      {erro && <p className="vitta-erro" role="alert">{erro}</p>}

      {etapa < 4 && (
        <div className="vitta-agendar-acoes">
          {etapa > 1 ? (
            <button className="vitta-btn vitta-btn--linha" onClick={voltar}>Voltar</button>
          ) : (
            <span />
          )}
          <button className="vitta-btn vitta-btn--verde" onClick={avancar}>
            {etapa === 3 ? "Confirmar consulta" : "Continuar"} <IconeSeta />
          </button>
        </div>
      )}
    </section>
  );
}

export default function VittaTemplate() {
  const [page, setPage] = useState("inicio");
  const { scrollTop } = usePreview();

  useEffect(() => {
    scrollTop();
  }, [page, scrollTop]);

  return (
    <div className="vitta">
      <header className="vitta-topo">
        <button className="vitta-marca" onClick={() => setPage("inicio")} aria-label="Clínica Vitta — início">
          <span className="vitta-marca-icone"><IconeFolha /></span>
          <span>vitta</span>
        </button>

        <nav className="vitta-nav" aria-label="Navegação do site">
          {[
            ["inicio", "Início"],
            ["especialidades", "Especialidades"],
            ["agendar", "Agendar"],
          ].map(([id, rotulo]) => (
            <button
              key={id}
              className={page === id ? "is-ativo" : ""}
              onClick={() => setPage(id)}
              aria-current={page === id ? "page" : undefined}
            >
              {rotulo}
            </button>
          ))}
        </nav>

        <button className="vitta-btn vitta-btn--verde" onClick={() => setPage("agendar")}>
          Agendar consulta
        </button>
      </header>

      <main key={page} className="vitta-pagina">
        {page === "inicio" && <Inicio onIr={setPage} />}
        {page === "especialidades" && <Especialidades onIr={setPage} />}
        {page === "agendar" && <Agendar />}
      </main>

      <footer className="vitta-rodape">
        <div>
          <div className="vitta-rodape-marca">vitta</div>
          <p>Saúde integral, com tempo<br />e escuta de verdade.</p>
        </div>
        <div>
          <h4>Onde</h4>
          <p>Rua das Acácias, 120<br />São Paulo — SP</p>
        </div>
        <div>
          <h4>Contato</h4>
          <p>(11) 4002-8922<br />oi@clinicavitta.com</p>
        </div>
        <div className="vitta-rodape-fim">
          <span>© 2026 Clínica Vitta · Template conceitual</span>
          <span>Responsabilidade técnica: CRM 12345</span>
        </div>
      </footer>
    </div>
  );
}
