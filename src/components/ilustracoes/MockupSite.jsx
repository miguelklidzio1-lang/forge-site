import "./MockupSite.css";

const URLS = {
  restaurante: "brasa.com",
  clinica: "clinicavitta.com",
  loja: "atelienorte.com",
};

function Restaurante() {
  return (
    <div className="mock-tela">
      <div className="mock-topo">
        <strong>BRASA</strong>
        <nav>
          <span>Menu</span>
          <span>História</span>
          <span>Reservar</span>
        </nav>
      </div>
      <div className="mock-hero">
        <div className="mock-texto">
          <small>COZINHA AUTORAL</small>
          <h4>
            Fogo, tempo
            <br />e sabor.
          </h4>
          <span className="mock-btn">Reservar mesa</span>
        </div>
        <div className="mock-prato" />
      </div>
    </div>
  );
}

function Clinica() {
  return (
    <div className="mock-tela">
      <div className="mock-topo">
        <strong>Clínica Vitta</strong>
        <nav>
          <span>Especialidades</span>
          <span>Equipe</span>
          <span>Contato</span>
        </nav>
      </div>
      <div className="mock-hero">
        <small>SAÚDE INTEGRAL</small>
        <h4>
          Cuidado que
          <br />
          acompanha você.
        </h4>
        <p>Atendimento humano, agenda online e acompanhamento próximo.</p>
        <span className="mock-btn">Agendar consulta</span>
        <div className="mock-cards">
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}

function Loja() {
  return (
    <div className="mock-tela">
      <div className="mock-topo">
        <strong>ATELIÊ NORTE</strong>
        <nav>
          <span>Novo</span>
          <span>Loja</span>
          <span>Sacola (2)</span>
        </nav>
      </div>
      <div className="mock-hero">
        <small>COLEÇÃO 2026</small>
        <h4>
          Peças de
          <br />
          todo dia.
        </h4>
        <div className="mock-grid">
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}

export default function MockupSite({ tipo }) {
  return (
    <div className={`mock mock--${tipo}`} aria-hidden="true">
      <div className="mock-barra">
        <span />
        <span />
        <span />
        <i>{URLS[tipo]}</i>
      </div>
      {tipo === "restaurante" && <Restaurante />}
      {tipo === "clinica" && <Clinica />}
      {tipo === "loja" && <Loja />}
    </div>
  );
}
