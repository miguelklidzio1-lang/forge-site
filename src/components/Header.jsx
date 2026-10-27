import { useEffect, useState } from "react";
import Logo from "./Logo.jsx";
import "./Header.css";

const LINKS = [
  { href: "#servicos", rotulo: "Serviços" },
  { href: "#portfolio", rotulo: "Portfólio" },
  { href: "#processo", rotulo: "Processo" },
  { href: "#diferenciais", rotulo: "Por que a Forge" },
  { href: "#planos", rotulo: "Planos" },
];

export default function Header() {
  const [preso, setPreso] = useState(false);
  const [aberto, setAberto] = useState(false);

  useEffect(() => {
    const onScroll = () => setPreso(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`cabecalho ${preso ? "cabecalho--preso" : ""}`}>
      <div className="wrap cabecalho-linha">
        <a href="#topo" aria-label="Forge — início">
          <Logo altura={34} />
        </a>

        <nav className={`cabecalho-nav ${aberto ? "cabecalho-nav--aberto" : ""}`}>
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setAberto(false)}
              className="cabecalho-link"
            >
              {l.rotulo}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setAberto(false)}
            className="btn btn-brasa cabecalho-cta"
          >
            Orçamento
          </a>
        </nav>

        <button
          className={`cabecalho-burger ${aberto ? "cabecalho-burger--x" : ""}`}
          onClick={() => setAberto((v) => !v)}
          aria-label={aberto ? "Fechar menu" : "Abrir menu"}
          aria-expanded={aberto}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
