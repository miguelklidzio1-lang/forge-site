import { useEffect, useId, useState } from "react";
import { usePreview } from "./previewContext.js";
import "./norte.css";

const PRODUTOS = [
  {
    id: 1,
    nome: "Vestido Linho",
    categoria: "vestidos",
    preco: 389,
    tipo: "vestido",
    cor: "#b0603a",
    fundo: "#e8ddd0",
    tag: "Novo",
    desc: "Linho lavado, caimento leve e bolsos laterais. Para dias que pedem pouco esforço e muita presença.",
  },
  {
    id: 2,
    nome: "Vestido Midi",
    categoria: "vestidos",
    preco: 429,
    tipo: "vestido",
    cor: "#7a8b6f",
    fundo: "#dfe3d6",
    tag: "",
    desc: "Comprimento midi, alças reguláveis e uma cor que conversa com tudo o que você já tem.",
  },
  {
    id: 3,
    nome: "Casaco Alfaiataria",
    categoria: "casacos",
    preco: 589,
    tipo: "casaco",
    cor: "#1b1917",
    fundo: "#e3ded8",
    tag: "Últimas peças",
    desc: "Alfaiataria leve, ombro estruturado e caimento reto. A peça que resolve qualquer dia.",
  },
  {
    id: 4,
    nome: "Casaco Lã",
    categoria: "casacos",
    preco: 649,
    tipo: "casaco",
    cor: "#8a6f5a",
    fundo: "#e6d9cc",
    tag: "",
    desc: "Lã macia, forro em algodão e bolsos fundos. Para o frio que chega devagar.",
  },
  {
    id: 5,
    nome: "Bolsa Couro",
    categoria: "acessorios",
    preco: 299,
    tipo: "bolsa",
    cor: "#b0603a",
    fundo: "#ead9cd",
    tag: "",
    desc: "Couro curtido, alça ajustável e espaço para o essencial. Envelhece bonito.",
  },
  {
    id: 6,
    nome: "Bolsa Tote",
    categoria: "acessorios",
    preco: 349,
    tipo: "bolsa",
    cor: "#1b1917",
    fundo: "#ded9d3",
    tag: "Novo",
    desc: "Tote grande, estrutura firme e alças que cabem no ombro. Feita para o dia inteiro.",
  },
  {
    id: 7,
    nome: "Vestido Noite",
    categoria: "vestidos",
    preco: 499,
    tipo: "vestido",
    cor: "#5b4a63",
    fundo: "#e2dbe4",
    tag: "",
    desc: "Um vestido de uma cor só, para quando a noite pede menos e você quer mais.",
  },
  {
    id: 8,
    nome: "Casaco Cropped",
    categoria: "casacos",
    preco: 459,
    tipo: "casaco",
    cor: "#c9a77f",
    fundo: "#ece3d7",
    tag: "",
    desc: "Comprimento curto, botões forrados e um tom quente para os dias de sol fraco.",
  },
];

const FILTROS = [
  ["todos", "Todos"],
  ["vestidos", "Vestidos"],
  ["casacos", "Casacos"],
  ["acessorios", "Acessórios"],
];

const LOOKS = [
  {
    eyebrow: "Look 01",
    titulo: "Dia de cidade",
    desc: "Vestido de linho, bolsa de couro e nada mais.",
    produto: 1,
    tipo: "vestido",
    cor: "#b0603a",
    fundo: "#e8ddd0",
  },
  {
    eyebrow: "Look 02",
    titulo: "Fim de tarde",
    desc: "Casaco de alfaiataria sobre a peça mais leve.",
    produto: 3,
    tipo: "casaco",
    cor: "#1b1917",
    fundo: "#e3ded8",
  },
  {
    eyebrow: "Look 03",
    titulo: "Fim de semana",
    desc: "Tote grande, vestido midi e passo lento.",
    produto: 6,
    tipo: "bolsa",
    cor: "#1b1917",
    fundo: "#ded9d3",
  },
];

const brl = (n) => `R$ ${n.toLocaleString("pt-BR")}`;

function IconeSacola() {
  return (
    <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 8h14l-1 12H6L5 8Z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
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

function IconeVoltar() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M19 12H5M11 18l-6-6 6-6" />
    </svg>
  );
}

function IconeCheck() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 12l5 5L20 6" />
    </svg>
  );
}

function IconeMais() {
  return (
    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M5 12h14M12 5v14" />
    </svg>
  );
}

function IconeMenos() {
  return (
    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M5 12h14" />
    </svg>
  );
}

function PecaVisual({ tipo, cor }) {
  const gid = useId().replace(/:/g, "");

  return (
    <svg viewBox="0 0 300 380" className="norte-peca-svg" aria-hidden="true">
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={cor} />
          <stop offset="58%" stopColor={cor} />
          <stop offset="100%" stopColor="#000" stopOpacity="0.22" />
        </linearGradient>
      </defs>

      <ellipse cx="150" cy="336" rx="82" ry="12" fill="rgba(27,25,23,.08)" />

      {tipo === "vestido" && (
        <>
          <path d="M120 54h60l8 34-16 26 34 202H78l34-202-16-26z" fill={`url(#${gid})`} />
          <path d="M120 54c8 16 52 16 60 0" fill="none" stroke="rgba(0,0,0,.18)" strokeWidth="3" />
          <path d="M112 112c22 10 54 10 76 0" fill="none" stroke="rgba(255,255,255,.2)" strokeWidth="2" />
          <path d="M132 302h36" stroke="rgba(0,0,0,.12)" strokeWidth="2" />
        </>
      )}

      {tipo === "casaco" && (
        <>
          <path d="M94 64h112l22 58-26 16v176H98V138l-26-16z" fill={`url(#${gid})`} />
          <path d="M150 64v250" stroke="rgba(0,0,0,.18)" strokeWidth="2" />
          <path d="M118 64l32 46 32-46" fill="none" stroke="rgba(255,255,255,.2)" strokeWidth="2" />
          <path d="M102 186h96" stroke="rgba(0,0,0,.12)" strokeWidth="2" />
          <circle cx="150" cy="158" r="3" fill="rgba(255,255,255,.35)" />
          <circle cx="150" cy="200" r="3" fill="rgba(255,255,255,.35)" />
        </>
      )}

      {tipo === "bolsa" && (
        <>
          <path d="M118 150c0-42 64-42 64 0" fill="none" stroke={cor} strokeWidth="10" strokeLinecap="round" />
          <rect x="86" y="148" width="128" height="114" rx="14" fill={`url(#${gid})`} />
          <path d="M86 190h128" stroke="rgba(0,0,0,.16)" strokeWidth="2" />
          <circle cx="150" cy="214" r="6" fill="rgba(255,255,255,.28)" />
          <path d="M112 148v-8M188 148v-8" stroke="rgba(0,0,0,.2)" strokeWidth="3" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}

function ProdutoCard({ produto, onAbrir }) {
  return (
    <button className="norte-produto" onClick={() => onAbrir(produto)}>
      <div className="norte-produto-visual" style={{ background: produto.fundo }}>
        {produto.tag && <span className="norte-tag">{produto.tag}</span>}
        <PecaVisual tipo={produto.tipo} cor={produto.cor} />
        <span className="norte-ver">Ver peça</span>
      </div>
      <div className="norte-produto-info">
        <h3>{produto.nome}</h3>
        <span>{brl(produto.preco)}</span>
      </div>
    </button>
  );
}

function Inicio({ onIr, onAbrir }) {
  return (
    <>
      <section className="norte-hero">
        <div className="norte-hero-texto">
          <p className="norte-olho">Coleção 2026</p>
          <h1>
            Peças de
            <br />
            todo dia.
          </h1>
          <p className="norte-hero-sub">
            Roupas para viver, não para guardar. Cortes limpos, tecidos que
            envelhecem bem e uma paleta que combina com o que você já tem.
          </p>
          <div className="norte-hero-acoes">
            <button className="norte-btn norte-btn--escuro" onClick={() => onIr("colecao")}>
              Explorar coleção <IconeSeta />
            </button>
            <button className="norte-btn norte-btn--linha" onClick={() => onIr("lookbook")}>
              Ver lookbook
            </button>
          </div>
          <div className="norte-hero-info">
            <span>Feito no Brasil</span>
            <span>Frete grátis acima de R$ 300</span>
          </div>
        </div>

        <div className="norte-hero-visual">
          <div className="norte-hero-bloco norte-hero-bloco--a">
            <PecaVisual tipo="vestido" cor="#b0603a" />
            <span className="norte-hero-tag">Vestido Linho · R$ 389</span>
          </div>
          <div className="norte-hero-bloco norte-hero-bloco--b">
            <PecaVisual tipo="bolsa" cor="#1b1917" />
          </div>
          <span className="norte-hero-vertical">Feito para durar</span>
          <span className="norte-hero-selo">Novo</span>
        </div>
      </section>

      <section className="norte-secao">
        <div className="norte-secao-topo">
          <div>
            <p className="norte-olho">Novidades</p>
            <h2>Direto do ateliê.</h2>
          </div>
          <button className="norte-link" onClick={() => onIr("colecao")}>
            Ver tudo <IconeSeta />
          </button>
        </div>

        <div className="norte-grade">
          {PRODUTOS.slice(0, 4).map((p) => (
            <ProdutoCard key={p.id} produto={p} onAbrir={onAbrir} />
          ))}
        </div>
      </section>

      <section className="norte-editorial">
        <div>
          <p className="norte-olho">Nossa direção</p>
          <h2>Norte é<br />direção.</h2>
        </div>
        <div>
          <p>
            “A gente desenha pensando no dia real: o café rápido, a reunião, o
            fim de tarde. Roupa boa é a que você usa sem pensar.”
          </p>
          <div className="norte-editorial-valores">
            <span><strong>01</strong> Tecidos naturais</span>
            <span><strong>02</strong> Produção pequena</span>
            <span><strong>03</strong> Atemporal</span>
          </div>
        </div>
      </section>

      <section className="norte-secao norte-secao--areia">
        <div className="norte-secao-topo">
          <div>
            <p className="norte-olho">Lookbook</p>
            <h2>Três formas<br />de usar.</h2>
          </div>
          <button className="norte-link" onClick={() => onIr("lookbook")}>
            Abrir lookbook <IconeSeta />
          </button>
        </div>

        <div className="norte-looks">
          {LOOKS.map((l) => (
            <article className="norte-look" key={l.titulo}>
              <div className="norte-look-visual" style={{ background: l.fundo }}>
                <PecaVisual tipo={l.tipo} cor={l.cor} />
              </div>
              <span className="norte-olho">{l.eyebrow}</span>
              <h3>{l.titulo}</h3>
              <p>{l.desc}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function Colecao({ filtro, setFiltro, onAbrir }) {
  const produtos = filtro === "todos" ? PRODUTOS : PRODUTOS.filter((p) => p.categoria === filtro);

  return (
    <>
      <section className="norte-pagina-topo">
        <p className="norte-olho">Coleção 2026</p>
        <h1>
          Tudo que
          <br />
          a gente faz.
        </h1>
        <p>Peças em produção pequena, pensadas para ficar.</p>
      </section>

      <div className="norte-filtros">
        {FILTROS.map(([id, rotulo]) => (
          <button
            key={id}
            className={filtro === id ? "is-ativo" : ""}
            onClick={() => setFiltro(id)}
          >
            {rotulo}
          </button>
        ))}
        <span className="norte-contagem">{produtos.length} peças</span>
      </div>

      <div className="norte-grade norte-grade--colecao">
        {produtos.map((p) => (
          <ProdutoCard key={p.id} produto={p} onAbrir={onAbrir} />
        ))}
      </div>
    </>
  );
}

function ProdutoDetalhe({ produto, onVoltar, onAdicionar, tamanho, setTamanho }) {
  const [aviso, setAviso] = useState(false);

  useEffect(() => {
    if (!aviso) return;
    const t = setTimeout(() => setAviso(false), 2600);
    return () => clearTimeout(t);
  }, [aviso]);

  return (
    <div className="norte-detalhe">
      <button className="norte-voltar" onClick={onVoltar}>
        <IconeVoltar /> Voltar para a coleção
      </button>

      <div className="norte-detalhe-grade">
        <div className="norte-detalhe-visual" style={{ background: produto.fundo }}>
          {produto.tag && <span className="norte-tag">{produto.tag}</span>}
          <PecaVisual tipo={produto.tipo} cor={produto.cor} />
        </div>

        <div className="norte-detalhe-info">
          <p className="norte-olho">{produto.categoria}</p>
          <h1>{produto.nome}</h1>
          <p className="norte-detalhe-preco">{brl(produto.preco)}</p>
          <p className="norte-detalhe-desc">{produto.desc}</p>

          <div className="norte-tamanhos">
            <span>Tamanho</span>
            <div>
              {["P", "M", "G"].map((t) => (
                <button
                  key={t}
                  className={tamanho === t ? "is-ativo" : ""}
                  onClick={() => setTamanho(t)}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <button
            className="norte-btn norte-btn--escuro norte-btn--largo"
            onClick={() => {
              onAdicionar(produto);
              setAviso(true);
            }}
          >
            Adicionar à sacola <IconeSacola />
          </button>

          {aviso && (
            <p className="norte-aviso" role="status">
              <IconeCheck /> Adicionado à sacola
            </p>
          )}

          <p className="norte-detalhe-nota">
            Frete grátis acima de R$ 300 · Troca em até 30 dias
          </p>

          <div className="norte-detalhe-lista">
            <div><span>Composição</span><span>Linho e algodão</span></div>
            <div><span>Cuidados</span><span>Lavar à mão, secar na sombra</span></div>
            <div><span>Produção</span><span>Pequenos lotes, no Brasil</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Lookbook({ onAbrir }) {
  return (
    <>
      <section className="norte-pagina-topo">
        <p className="norte-olho">Lookbook</p>
        <h1>
          Formas de
          <br />
          usar o dia.
        </h1>
        <p>Três combinações, três ritmos. Todas feitas com as peças da coleção.</p>
      </section>

      <div className="norte-lookbook">
        {LOOKS.map((l) => (
          <article className="norte-lookbook-item" key={l.titulo}>
            <div className="norte-lookbook-visual" style={{ background: l.fundo }}>
              <PecaVisual tipo={l.tipo} cor={l.cor} />
            </div>
            <div className="norte-lookbook-texto">
              <span className="norte-olho">{l.eyebrow}</span>
              <h2>{l.titulo}</h2>
              <p>{l.desc}</p>
              <button
                className="norte-link"
                onClick={() => onAbrir(PRODUTOS.find((p) => p.id === l.produto))}
              >
                Ver peça <IconeSeta />
              </button>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

function Sacola({ sacola, total, onMudarQtd, onRemover, onIr, pedidoFeito, onFinalizar, onNovo }) {
  if (pedidoFeito) {
    return (
      <section className="norte-sacola norte-sacola--vazia">
        <span className="norte-sucesso-icone"><IconeCheck /></span>
        <p className="norte-olho">Pedido simulado</p>
        <h1>
          Obrigada
          <br />
          pela visita.
        </h1>
        <p>
          Este é um template de demonstração — nenhum pagamento foi processado.
          No site real, aqui entraria o checkout.
        </p>
        <button className="norte-btn norte-btn--escuro" onClick={onNovo}>
          Voltar à coleção <IconeSeta />
        </button>
      </section>
    );
  }

  if (!sacola.length) {
    return (
      <section className="norte-sacola norte-sacola--vazia">
        <p className="norte-olho">Sacola</p>
        <h1>
          Sua sacola
          <br />
          está vazia.
        </h1>
        <p>Escolha uma peça da coleção para começar.</p>
        <button className="norte-btn norte-btn--escuro" onClick={() => onIr("colecao")}>
          Ver coleção <IconeSeta />
        </button>
      </section>
    );
  }

  return (
    <section className="norte-sacola">
      <div className="norte-sacola-topo">
        <p className="norte-olho">Sacola</p>
        <h1>Suas peças.</h1>
      </div>

      <div className="norte-sacola-grade">
        <div className="norte-sacola-itens">
          {sacola.map((i) => (
            <div className="norte-sacola-item" key={`${i.id}-${i.tamanho}`}>
              <div className="norte-sacola-visual" style={{ background: i.fundo }}>
                <PecaVisual tipo={i.tipo} cor={i.cor} />
              </div>
              <div className="norte-sacola-info">
                <h3>{i.nome}</h3>
                <p>Tamanho {i.tamanho}</p>
                <div className="norte-qtd">
                  <button onClick={() => onMudarQtd(i.id, i.tamanho, -1)} aria-label="Diminuir quantidade">
                    <IconeMenos />
                  </button>
                  <span>{i.qtd}</span>
                  <button onClick={() => onMudarQtd(i.id, i.tamanho, 1)} aria-label="Aumentar quantidade">
                    <IconeMais />
                  </button>
                </div>
              </div>
              <div className="norte-sacola-preco">
                <span>{brl(i.preco * i.qtd)}</span>
                <button onClick={() => onRemover(i.id, i.tamanho)}>Remover</button>
              </div>
            </div>
          ))}
        </div>

        <aside className="norte-resumo">
          <h3>Resumo</h3>
          <div><span>Subtotal</span><span>{brl(total)}</span></div>
          <div><span>Frete</span><span>Grátis</span></div>
          <div className="norte-resumo-total"><span>Total</span><strong>{brl(total)}</strong></div>
          <button className="norte-btn norte-btn--escuro norte-btn--largo" onClick={onFinalizar}>
            Finalizar compra
          </button>
          <p className="norte-resumo-nota">Demonstração — nenhum pagamento é processado.</p>
          <button className="norte-link" onClick={() => onIr("colecao")}>
            Continuar comprando
          </button>
        </aside>
      </div>
    </section>
  );
}

export default function NorteTemplate() {
  const [page, setPage] = useState("inicio");
  const [filtro, setFiltro] = useState("todos");
  const [produto, setProduto] = useState(null);
  const [tamanho, setTamanho] = useState("P");
  const [sacola, setSacola] = useState([]);
  const [pedidoFeito, setPedidoFeito] = useState(false);
  const { scrollTop } = usePreview();

  useEffect(() => {
    scrollTop();
  }, [page, produto, scrollTop]);

  const totalItens = sacola.reduce((n, i) => n + i.qtd, 0);
  const total = sacola.reduce((n, i) => n + i.preco * i.qtd, 0);

  function irPara(destino) {
    setPage(destino);
    setProduto(null);
    if (destino !== "sacola") setPedidoFeito(false);
  }

  function abrirProduto(p) {
    setProduto(p);
    setTamanho("P");
    setPedidoFeito(false);
    setPage("colecao");
  }

  function adicionar(p) {
    setPedidoFeito(false);
    setSacola((s) => {
      const idx = s.findIndex((i) => i.id === p.id && i.tamanho === tamanho);
      if (idx >= 0) {
        const copia = [...s];
        copia[idx] = { ...copia[idx], qtd: copia[idx].qtd + 1 };
        return copia;
      }
      return [...s, { ...p, tamanho, qtd: 1 }];
    });
  }

  function mudarQtd(id, tam, delta) {
    setSacola((s) =>
      s
        .map((i) => (i.id === id && i.tamanho === tam ? { ...i, qtd: i.qtd + delta } : i))
        .filter((i) => i.qtd > 0)
    );
  }

  function remover(id, tam) {
    setSacola((s) => s.filter((i) => !(i.id === id && i.tamanho === tam)));
  }

  function finalizar() {
    setPedidoFeito(true);
    setSacola([]);
  }

  function novo() {
    setPedidoFeito(false);
    setProduto(null);
    setPage("colecao");
  }

  return (
    <div className="norte">
      <header className="norte-topo">
        <button className="norte-marca" onClick={() => irPara("inicio")} aria-label="Ateliê Norte — início">
          ATELIÊ NORTE
        </button>

        <nav className="norte-nav" aria-label="Navegação do site">
          {[
            ["inicio", "Início"],
            ["colecao", "Coleção"],
            ["lookbook", "Lookbook"],
          ].map(([id, rotulo]) => (
            <button
              key={id}
              className={page === id ? "is-ativo" : ""}
              onClick={() => irPara(id)}
              aria-current={page === id ? "page" : undefined}
            >
              {rotulo}
            </button>
          ))}
        </nav>

        <button className="norte-sacola-botao" onClick={() => irPara("sacola")} aria-label={`Sacola com ${totalItens} itens`}>
          <IconeSacola />
          {totalItens > 0 && <span>{totalItens}</span>}
        </button>
      </header>

      <main key={page + (produto?.id || "")} className="norte-pagina">
        {page === "inicio" && <Inicio onIr={irPara} onAbrir={abrirProduto} />}
        {page === "colecao" && !produto && (
          <Colecao filtro={filtro} setFiltro={setFiltro} onAbrir={abrirProduto} />
        )}
        {page === "colecao" && produto && (
          <ProdutoDetalhe
            produto={produto}
            onVoltar={() => setProduto(null)}
            onAdicionar={adicionar}
            tamanho={tamanho}
            setTamanho={setTamanho}
          />
        )}
        {page === "lookbook" && <Lookbook onAbrir={abrirProduto} />}
        {page === "sacola" && (
          <Sacola
            sacola={sacola}
            total={total}
            onMudarQtd={mudarQtd}
            onRemover={remover}
            onIr={irPara}
            pedidoFeito={pedidoFeito}
            onFinalizar={finalizar}
            onNovo={novo}
          />
        )}
      </main>

      <footer className="norte-rodape">
        <div>
          <div className="norte-rodape-marca">ATELIÊ NORTE</div>
          <p>Peças de todo dia.<br />Feitas no Brasil, para durar.</p>
        </div>
        <div>
          <h4>Ateliê</h4>
          <p>Rua do Norte, 88<br />São Paulo — SP</p>
        </div>
        <div>
          <h4>Atendimento</h4>
          <p>oi@atelienorte.com<br />Seg–Sex · 9h–18h</p>
        </div>
        <div className="norte-rodape-fim">
          <span>© 2026 Ateliê Norte · Template conceitual</span>
          <span>Feito para usar muito.</span>
        </div>
      </footer>
    </div>
  );
}
