import MockupSite from "./ilustracoes/MockupSite.jsx";
import "./Portfolio.css";

const ESTUDOS = [
  {
    tipo: "restaurante",
    nome: "Restaurante",
    nota: "Escuro, editorial, reserva em destaque",
  },
  {
    tipo: "clinica",
    nome: "Clínica",
    nota: "Claro, confiável, agenda online",
  },
  {
    tipo: "loja",
    nome: "Loja de moda",
    nota: "Editorial, catálogo visual",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <div className="wrap">
        <header className="reveal portfolio-cabecalho">
          <p className="rotulo">Estudos de layout</p>
          <h2 className="titulo-sec">
            O que sai da <em>bigorna</em>
          </h2>
          <p className="portfolio-lead">
            Cada projeto nasce do zero, mas o método é o mesmo: entender o
            negócio, desenhar a identidade e forjar uma estrutura que faça
            sentido. Estes são estudos conceituais de nichos diferentes.
          </p>
        </header>

        <div className="portfolio-grade">
          {ESTUDOS.map((estudo, i) => (
            <figure
              key={estudo.tipo}
              className="portfolio-item reveal"
              style={{ "--d": `${i * 110}ms` }}
            >
              <MockupSite tipo={estudo.tipo} />
              <figcaption className="portfolio-legenda">
                <div className="portfolio-ident">
                  <span className="portfolio-num">
                    Estudo {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="portfolio-nome">{estudo.nome}</span>
                </div>
                <span className="portfolio-nota">{estudo.nota}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="portfolio-aviso reveal">
          Estudos conceituais de layout — nenhum deles é um template. O seu site
          começa em branco e termina com a sua marca.
        </p>
      </div>
    </section>
  );
}
