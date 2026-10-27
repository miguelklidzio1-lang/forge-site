import Logo from "./Logo.jsx";
import { BigornaMini } from "./ilustracoes/Icones.jsx";
import "./Footer.css";

const INSTAGRAM = "https://www.instagram.com/forge_sitee/";

const COLUNAS = [
  {
    titulo: "Serviços",
    itens: [
      { rotulo: "Site institucional", href: "#servicos" },
      { rotulo: "Loja virtual", href: "#servicos" },
      { rotulo: "Landing page", href: "#servicos" },
      { rotulo: "Reforma de site", href: "#servicos" },
      { rotulo: "Manutenção", href: "#servicos" },
    ],
  },
  {
    titulo: "Forge",
    itens: [
      { rotulo: "Portfólio", href: "#portfolio" },
      { rotulo: "Processo", href: "#processo" },
      { rotulo: "Por que a Forge", href: "#diferenciais" },
      { rotulo: "Planos", href: "#planos" },
      { rotulo: "Orçamento", href: "#contato" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="rodape">
      <div className="rodape-marca-dagua" aria-hidden="true">
        <BigornaMini tamanho={230} />
      </div>

      <div className="wrap rodape-grade">
        <div className="rodape-marca">
          <Logo altura={32} />
          <p className="rodape-frase">
            Sites profissionais para empresas.
            <br />
            Sua marca, mais forte no digital.
          </p>
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="rodape-ig"
          >
            @forge_sitee
          </a>
        </div>

        {COLUNAS.map((c) => (
          <nav key={c.titulo} className="rodape-coluna">
            <h4>{c.titulo}</h4>
            <ul>
              {c.itens.map((item) => (
                <li key={item.rotulo}>
                  <a href={item.href}>{item.rotulo}</a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="wrap rodape-base">
        <span>© {new Date().getFullYear()} Forge. Todos os direitos reservados.</span>
        <span className="rodape-fim">Forjado no Brasil</span>
      </div>
    </footer>
  );
}
