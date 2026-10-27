import { useEffect, useState } from "react";
import { usePreview } from "./previewContext.js";
import "./brasa.css";

const HORARIOS = ["18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30"];

const ABAS = [
  ["entradas", "Entradas"],
  ["principais", "Principais"],
  ["sobremesas", "Sobremesas"],
];

const PRATOS = {
  entradas: [
    { nome: "Pão de fermentação natural", desc: "Manteiga de brasa, sal de ervas e pimenta do reino.", preco: "R$ 28" },
    { nome: "Carpaccio de carne maturada", desc: "Mostarda antiga, alcaparras, parmesão e rúcula.", preco: "R$ 46" },
    { nome: "Cogumelos na lenha", desc: "Creme de castanha, tomilho e limão siciliano.", preco: "R$ 38" },
    { nome: "Ostras do litoral", desc: "Vinagrete de caju, pimenta rosa e coentro.", preco: "R$ 54" },
  ],
  principais: [
    { nome: "Costela na brasa", desc: "12 horas de fogo baixo, purê de mandioquinha e cebola tostada.", preco: "R$ 92" },
    { nome: "Peixe do dia", desc: "Legumes na manteiga, emulsão de limão e ervas frescas.", preco: "R$ 84" },
    { nome: "Risoto de cogumelos", desc: "Funghi, parmesão de fazenda e azeite de ervas.", preco: "R$ 72" },
    { nome: "Frango caipira", desc: "Milho cremoso, couve na brasa e molho de pimenta.", preco: "R$ 68" },
  ],
  sobremesas: [
    { nome: "Pudim de leite", desc: "Caramelo salgado, flor de sal e raspas de limão.", preco: "R$ 26" },
    { nome: "Chocolate e brasa", desc: "Ganache, cacau, sorvete de fumaça e crocante.", preco: "R$ 32" },
    { nome: "Torta de limão", desc: "Merengue queimado, curd de limão e biscoito.", preco: "R$ 28" },
    { nome: "Queijo e goiabada", desc: "Queijo canastra, goiabada cascão e castanhas.", preco: "R$ 24" },
  ],
};

const DESTAQUES = [
  {
    nome: "Costela na brasa",
    desc: "12 horas de fogo baixo, purê de mandioquinha e cebola tostada.",
    preco: "R$ 92",
    tag: "Assinatura",
    tom: "brasa",
  },
  {
    nome: "Peixe do dia",
    desc: "Legumes na manteiga, emulsão de limão e ervas frescas.",
    preco: "R$ 84",
    tag: "Da estação",
    tom: "limao",
  },
  {
    nome: "Chocolate e brasa",
    desc: "Ganache, cacau, sorvete de fumaça e crocante de castanha.",
    preco: "R$ 32",
    tag: "Sobremesa",
    tom: "cacau",
  },
];

function IconeChama() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3c2.5 4 5 5.5 5 9a5 5 0 0 1-10 0c0-2 1-3.5 2.5-5 0 2 .8 3.5 2 4 .8-2.5-.5-5 .5-8Z" />
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
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 12l5 5L20 6" />
    </svg>
  );
}

function formatarData(iso) {
  if (!iso) return "";
  const [ano, mes, dia] = iso.split("-");
  return `${dia}/${mes}/${ano}`;
}

function Inicio({ onIr }) {
  return (
    <>
      <section className="brasa-hero">
        <div className="brasa-hero-texto">
          <p className="brasa-olho">Cozinha autoral · desde 2018</p>
          <h1>
            Fogo,
            <br />
            tempo
            <br />
            e sabor.
          </h1>
          <p className="brasa-hero-sub">
            Carne, lenha e paciência. O menu muda com a estação e o fogo nunca
            é o mesmo.
          </p>
          <div className="brasa-hero-acoes">
            <button className="brasa-btn brasa-btn--brasa" onClick={() => onIr("reservas")}>
              Reservar mesa <IconeSeta />
            </button>
            <button className="brasa-btn brasa-btn--linha" onClick={() => onIr("menu")}>
              Ver menu
            </button>
          </div>
          <div className="brasa-hero-info">
            <span>Ter–Dom · 18h–23h</span>
            <span>Rua das Brasas, 42</span>
          </div>
        </div>

        <div className="brasa-hero-visual">
          <div className="brasa-prato">
            <div className="brasa-prato-comida">
              <span className="brasa-molho" />
              <span className="brasa-pure" />
              <span className="brasa-filete" />
              <span className="brasa-limao" />
              <span className="brasa-farofa" />
              <span className="brasa-ervas brasa-ervas--a" />
              <span className="brasa-ervas brasa-ervas--b" />
              <span className="brasa-ervas brasa-ervas--c" />
              <span className="brasa-ervas brasa-ervas--d" />
            </div>
          </div>
          <div className="brasa-selo">
            <IconeChama />
            <span>
              Sugestão
              <br />
              <strong>do chef</strong>
            </span>
          </div>
        </div>
      </section>

      <section className="brasa-secao brasa-destaques">
        <div className="brasa-secao-topo">
          <div>
            <p className="brasa-olho">O que sai da brasa</p>
            <h2>
              Pratos que
              <br />
              contam histórias.
            </h2>
          </div>
          <button className="brasa-link" onClick={() => onIr("menu")}>
            Menu completo <IconeSeta />
          </button>
        </div>

        <div className="brasa-cards">
          {DESTAQUES.map((d) => (
            <article className="brasa-card" key={d.nome}>
              <div className={`brasa-card-img brasa-card-img--${d.tom}`}>
                <span />
              </div>
              <div className="brasa-card-corpo">
                <span className="brasa-card-tag">{d.tag}</span>
                <h3>{d.nome}</h3>
                <p>{d.desc}</p>
                <span className="brasa-card-preco">{d.preco}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="brasa-secao brasa-historia">
        <div className="brasa-historia-num">2018</div>
        <div className="brasa-historia-texto">
          <p className="brasa-olho">Nossa história</p>
          <h2>
            Uma cozinha
            <br />
            de fogo lento.
          </h2>
          <p>
            Começamos com uma chapa, duas mesas e a teimosia de fazer tudo na
            brasa. Hoje somos um restaurante de bairro que trata cada prato como
            se fosse o primeiro.
          </p>
          <div className="brasa-valores">
            <span><strong>Fogo</strong> lenha e carvão</span>
            <span><strong>Tempo</strong> sem pressa</span>
            <span><strong>Origem</strong> produtores locais</span>
          </div>
        </div>
      </section>

      <section className="brasa-faixa">
        <div>
          <p className="brasa-olho">Sua mesa está esperando</p>
          <h2>
            Venha comer
            <br />
            sem pressa.
          </h2>
        </div>
        <button className="brasa-btn brasa-btn--claro" onClick={() => onIr("reservas")}>
          Reservar mesa <IconeSeta />
        </button>
      </section>
    </>
  );
}

function Menu({ onIr }) {
  const [aba, setAba] = useState("entradas");

  return (
    <>
      <section className="brasa-menu-topo">
        <p className="brasa-olho">Menu da estação</p>
        <h1>
          O que passa
          <br />
          pela brasa.
        </h1>
        <p>
          Pratos para dividir, conversar e ficar mais tempo. O menu muda
          conforme a colheita e o fogo.
        </p>
      </section>

      <div className="brasa-abas" role="tablist" aria-label="Categorias do menu">
        {ABAS.map(([id, rotulo]) => (
          <button
            key={id}
            role="tab"
            aria-selected={aba === id}
            className={aba === id ? "is-ativa" : ""}
            onClick={() => setAba(id)}
          >
            {rotulo}
          </button>
        ))}
      </div>

      <div className="brasa-menu-lista" role="tabpanel">
        {PRATOS[aba].map((p) => (
          <div className="brasa-prato-linha" key={p.nome}>
            <div>
              <h3>{p.nome}</h3>
              <p>{p.desc}</p>
            </div>
            <span className="brasa-preco">{p.preco}</span>
          </div>
        ))}

        <div className="brasa-sugestao">
          <div>
            <span className="brasa-olho">Sugestão do chef</span>
            <h3>Costela na brasa</h3>
            <p>12 horas de fogo baixo, purê de mandioquinha e cebola tostada.</p>
          </div>
          <span className="brasa-preco">R$ 92</span>
        </div>
      </div>

      <div className="brasa-menu-cta">
        <button className="brasa-btn brasa-btn--brasa" onClick={() => onIr("reservas")}>
          Reservar mesa <IconeSeta />
        </button>
      </div>
    </>
  );
}

function Reservas() {
  const [form, setForm] = useState({
    nome: "",
    data: "",
    hora: "",
    pessoas: "2",
    ocasiao: "",
    obs: "",
  });
  const [erro, setErro] = useState("");
  const [enviado, setEnviado] = useState(false);
  const hoje = new Date().toISOString().split("T")[0];

  function atualizar(campo, valor) {
    setForm((f) => ({ ...f, [campo]: valor }));
    setErro("");
  }

  function enviar(ev) {
    ev.preventDefault();
    if (!form.nome.trim() || !form.data || !form.hora) {
      setErro("Preencha nome, data e horário para reservar.");
      return;
    }
    setEnviado(true);
  }

  function nova() {
    setEnviado(false);
    setForm({ nome: "", data: "", hora: "", pessoas: "2", ocasiao: "", obs: "" });
  }

  return (
    <section className="brasa-reservas">
      <div className="brasa-reservas-info">
        <p className="brasa-olho">Reservas</p>
        <h1>
          Sua mesa
          <br />
          na brasa.
        </h1>
        <p>
          Reservamos com 2 horas de antecedência. Para grupos acima de 8
          pessoas, fale com a gente pelo telefone.
        </p>
        <ul className="brasa-reservas-lista">
          <li><strong>Terça a domingo</strong><span>18h às 23h</span></li>
          <li><strong>Endereço</strong><span>Rua das Brasas, 42</span></li>
          <li><strong>Telefone</strong><span>(11) 4002-8922</span></li>
        </ul>
      </div>

      <div className="brasa-reservas-card">
        {enviado ? (
          <div className="brasa-sucesso">
            <span className="brasa-sucesso-icone"><IconeCheck /></span>
            <p className="brasa-olho">Reserva confirmada</p>
            <h2>
              Até logo,
              <br />
              {form.nome.split(" ")[0]}.
            </h2>
            <p>
              Sua mesa para {form.pessoas}{" "}
              {Number(form.pessoas) === 1 ? "pessoa" : "pessoas"} está reservada
              para <strong>{formatarData(form.data)}</strong>, às{" "}
              <strong>{form.hora}</strong>.
            </p>
            <button className="brasa-btn brasa-btn--linha" onClick={nova}>
              Fazer outra reserva
            </button>
          </div>
        ) : (
          <form onSubmit={enviar} noValidate>
            <h2>Reserve sua mesa</h2>

            <div className="brasa-campo">
              <label htmlFor="brasa-nome">Nome</label>
              <input
                id="brasa-nome"
                value={form.nome}
                onChange={(e) => atualizar("nome", e.target.value)}
                placeholder="Seu nome"
              />
            </div>

            <div className="brasa-campo-duplo">
              <div className="brasa-campo">
                <label htmlFor="brasa-data">Data</label>
                <input
                  id="brasa-data"
                  type="date"
                  min={hoje}
                  value={form.data}
                  onChange={(e) => atualizar("data", e.target.value)}
                />
              </div>
              <div className="brasa-campo">
                <label htmlFor="brasa-hora">Horário</label>
                <select
                  id="brasa-hora"
                  value={form.hora}
                  onChange={(e) => atualizar("hora", e.target.value)}
                >
                  <option value="">Escolha</option>
                  {HORARIOS.map((h) => (
                    <option key={h}>{h}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="brasa-campo-duplo">
              <div className="brasa-campo">
                <label htmlFor="brasa-pessoas">Pessoas</label>
                <select
                  id="brasa-pessoas"
                  value={form.pessoas}
                  onChange={(e) => atualizar("pessoas", e.target.value)}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? "pessoa" : "pessoas"}
                    </option>
                  ))}
                </select>
              </div>
              <div className="brasa-campo">
                <label htmlFor="brasa-ocasiao">Ocasião</label>
                <select
                  id="brasa-ocasiao"
                  value={form.ocasiao}
                  onChange={(e) => atualizar("ocasiao", e.target.value)}
                >
                  <option value="">Opcional</option>
                  <option>Aniversário</option>
                  <option>Jantar romântico</option>
                  <option>Encontro de negócios</option>
                  <option>Só fome</option>
                </select>
              </div>
            </div>

            <div className="brasa-campo">
              <label htmlFor="brasa-obs">Observações</label>
              <textarea
                id="brasa-obs"
                rows="3"
                value={form.obs}
                onChange={(e) => atualizar("obs", e.target.value)}
                placeholder="Alguma restrição ou pedido especial?"
              />
            </div>

            {erro && <p className="brasa-erro" role="alert">{erro}</p>}

            <button className="brasa-btn brasa-btn--brasa brasa-btn--largo" type="submit">
              Confirmar reserva <IconeSeta />
            </button>
            <p className="brasa-nota">Demonstração — nenhuma reserva real é feita.</p>
          </form>
        )}
      </div>
    </section>
  );
}

export default function BrasaTemplate() {
  const [page, setPage] = useState("inicio");
  const { scrollTop } = usePreview();

  useEffect(() => {
    scrollTop();
  }, [page, scrollTop]);

  return (
    <div className="brasa">
      <header className="brasa-topo">
        <button className="brasa-marca" onClick={() => setPage("inicio")} aria-label="Brasa — início">
          <IconeChama />
          <span>BRASA</span>
        </button>

        <nav className="brasa-nav" aria-label="Navegação do site">
          {[
            ["inicio", "Início"],
            ["menu", "Menu"],
            ["reservas", "Reservas"],
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

        <button className="brasa-btn brasa-btn--brasa" onClick={() => setPage("reservas")}>
          Reservar mesa
        </button>
      </header>

      <main key={page} className="brasa-pagina">
        {page === "inicio" && <Inicio onIr={setPage} />}
        {page === "menu" && <Menu onIr={setPage} />}
        {page === "reservas" && <Reservas />}
      </main>

      <footer className="brasa-rodape">
        <div>
          <div className="brasa-rodape-marca">BRASA</div>
          <p>Cozinha autoral de fogo lento.<br />Desde 2018, no mesmo endereço.</p>
        </div>
        <div>
          <h4>Onde</h4>
          <p>Rua das Brasas, 42<br />São Paulo — SP</p>
        </div>
        <div>
          <h4>Horários</h4>
          <p>Terça a domingo<br />18h às 23h</p>
        </div>
        <div className="brasa-rodape-fim">
          <span>© 2026 Brasa · Template conceitual</span>
          <span>Feito para comer devagar.</span>
        </div>
      </footer>
    </div>
  );
}
