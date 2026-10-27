function AtlasVisual() {
  return (
    <div className="lc-visual lc-visual--atlas" aria-hidden="true">
      <div className="lv-atlas">
        <aside className="lv-atlas-side">
          <b>atlas</b>
          <span className="is-ativo" />
          <span />
          <span />
          <span />
          <em />
        </aside>
        <div className="lv-atlas-main">
          <div className="lv-atlas-top">
            <div>
              <span>Visão geral</span>
              <small>Outubro de 2026</small>
            </div>
            <em>Exportar</em>
          </div>
          <div className="lv-atlas-stats">
            <div>
              <span>Saldo em conta</span>
              <strong>R$ 48.290</strong>
              <small>+8,4% no mês</small>
            </div>
            <div>
              <span>Investimentos</span>
              <strong>R$ 32.180</strong>
              <small>+3,1% no mês</small>
            </div>
          </div>
          <div className="lv-atlas-chart">
            <svg viewBox="0 0 300 98" preserveAspectRatio="none">
              <defs>
                <linearGradient id="lv-atlas-fill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#5b8cff" stopOpacity=".32" />
                  <stop offset="100%" stopColor="#5b8cff" stopOpacity="0" />
                </linearGradient>
              </defs>
              <g stroke="rgba(255,255,255,.07)" strokeWidth="1">
                <line x1="0" y1="24" x2="300" y2="24" />
                <line x1="0" y1="49" x2="300" y2="49" />
                <line x1="0" y1="74" x2="300" y2="74" />
              </g>
              <path
                d="M0 76 C18 70 30 54 48 60 S74 40 92 45 S120 24 140 32 S168 18 188 25 S218 12 238 20 S270 8 300 13 L300 98 L0 98Z"
                fill="url(#lv-atlas-fill)"
              />
              <path
                d="M0 76 C18 70 30 54 48 60 S74 40 92 45 S120 24 140 32 S168 18 188 25 S218 12 238 20 S270 8 300 13"
                fill="none"
                stroke="#7ea6ff"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
            <div className="lv-atlas-legenda">
              <span>01 out</span>
              <span>15 out</span>
              <span>31 out</span>
            </div>
          </div>
          <div className="lv-atlas-lista">
            <div><i className="verde" /><span>Assinatura anual</span><b>- R$ 1.920</b></div>
            <div><i className="azul" /><span>Transferência recebida</span><b>+ R$ 6.400</b></div>
            <div><i className="rosa" /><span>Ferramentas de design</span><b>- R$ 238</b></div>
          </div>
        </div>
      </div>
      <span className="lv-atlas-float">+ R$ 12.480 este mês</span>
    </div>
  );
}

function PulsoVisual() {
  return (
    <div className="lc-visual lc-visual--pulso" aria-hidden="true">
      <div className="lv-pulso-bg" />
      <div className="lv-pulso-phone">
        <div className="lv-pulso-status">
          <span>9:41</span>
          <span className="lv-pulso-sinais">
            <i />
            <i />
            <i />
          </span>
        </div>
        <div className="lv-pulso-topo">
          <div>
            <span>Bom dia, Bia</span>
            <strong>Seu ritmo hoje</strong>
          </div>
          <em>BP</em>
        </div>
        <div className="lv-pulso-anel">
          <svg viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="48" fill="none" stroke="rgba(255,255,255,.08)" strokeWidth="8" />
            <circle
              cx="60"
              cy="60"
              r="48"
              fill="none"
              stroke="#61d6a4"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray="216 302"
              transform="rotate(-90 60 60)"
            />
            <circle
              cx="60"
              cy="60"
              r="35"
              fill="none"
              stroke="rgba(91,140,255,.35)"
              strokeWidth="3"
              strokeDasharray="120 220"
              transform="rotate(-90 60 60)"
            />
          </svg>
          <div>
            <strong>72%</strong>
            <span>do seu ritmo</span>
          </div>
        </div>
        <div className="lv-pulso-lista">
          <div>
            <span className="lv-pulso-icone verde" />
            <p><strong>Alongamento</strong><small>8 min · concluído</small></p>
            <i />
          </div>
          <div>
            <span className="lv-pulso-icone azul" />
            <p><strong>Bloco de foco</strong><small>45 min · em andamento</small></p>
            <i />
          </div>
          <div>
            <span className="lv-pulso-icone rosa" />
            <p><strong>Pausa sem tela</strong><small>10 min · mais tarde</small></p>
            <i />
          </div>
        </div>
      </div>
      <div className="lv-pulso-card">
        <span>+12 min</span>
        <small>de foco nesta semana</small>
      </div>
    </div>
  );
}

function RotaVisual() {
  return (
    <div className="lc-visual lc-visual--rota" aria-hidden="true">
      <div className="lv-rota-mapa">
        <svg viewBox="0 0 420 280" preserveAspectRatio="none">
          <path d="M-20 220 C60 190 80 230 150 210 S250 240 330 190 S400 180 450 140" fill="none" stroke="#1d2530" strokeWidth="28" />
          <path d="M-20 120 C70 140 120 90 200 110 S320 70 450 90" fill="none" stroke="#1a222c" strokeWidth="18" />
          <path d="M80 -20 C100 60 70 130 110 200 S150 260 140 320" fill="none" stroke="#1a222c" strokeWidth="12" />
          <path d="M300 -20 C280 50 330 100 310 170 S290 240 320 310" fill="none" stroke="#1a222c" strokeWidth="10" />
          <path
            d="M54 232 C92 198 130 214 158 182 S226 154 250 128 S292 112 320 84 S355 66 382 52"
            fill="none"
            stroke="#5b8cff"
            strokeWidth="3"
            strokeDasharray="8 8"
            strokeLinecap="round"
          />
          <circle cx="54" cy="232" r="9" fill="#0d1117" stroke="#9cbaff" strokeWidth="4" />
          <circle cx="382" cy="52" r="10" fill="#61d6a4" />
          <circle cx="382" cy="52" r="18" fill="none" stroke="rgba(97,214,164,.35)" strokeWidth="2" />
          <circle cx="250" cy="128" r="4" fill="#9cbaff" />
          <circle cx="158" cy="182" r="4" fill="#9cbaff" />
        </svg>
        <div className="lv-rota-card">
          <div className="lv-rota-card-topo">
            <span>Rota 04</span>
            <em>Em trânsito</em>
          </div>
          <strong>Centro → Vila Madalena</strong>
          <div className="lv-rota-progresso">
            <span><i /></span>
            <small>68%</small>
          </div>
          <div className="lv-rota-info">
            <div><span>Entregas</span><strong>6 de 9</strong></div>
            <div><span>Previsão</span><strong>14:32</strong></div>
          </div>
        </div>
        <div className="lv-rota-pin lv-rota-pin--um"><span>1</span></div>
        <div className="lv-rota-pin lv-rota-pin--dois"><span>2</span></div>
        <div className="lv-rota-pin lv-rota-pin--tres"><span>3</span></div>
      </div>
    </div>
  );
}

function AuroraVisual() {
  return (
    <div className="lc-visual lc-visual--aurora" aria-hidden="true">
      <div className="lv-aurora-topo">
        <strong>Aurora</strong>
        <span>Arquitetura &amp; Interiores</span>
        <em>Projetos · Estúdio · Contato</em>
      </div>
      <div className="lv-aurora-corpo">
        <div className="lv-aurora-copy">
          <span>Residencial · 2025</span>
          <strong>Espaços que<br />respiram.</strong>
          <p>Luz, matéria e silêncio em equilíbrio.</p>
          <em>Ver projeto <i>↗</i></em>
        </div>
        <div className="lv-aurora-arte">
          <svg viewBox="0 0 280 230">
            <rect width="280" height="230" fill="#e7e3d7" />
            <circle cx="212" cy="57" r="30" fill="#e7b96f" opacity=".8" />
            <path d="M0 196 Q70 168 140 188 T280 174V230H0Z" fill="#b9c9b2" />
            <path d="M42 196V96L126 58L210 96V196Z" fill="#f4f1e8" />
            <path d="M42 96L126 58L210 96L194 104L126 71L58 104Z" fill="#2f5c48" />
            <path d="M58 104L126 71L194 104V196H58Z" fill="#d9e2d7" />
            <path d="M87 196V132A39 39 0 0 1 165 132V196Z" fill="#f7f5ed" />
            <path d="M87 196V132A39 39 0 0 1 165 132V196" fill="none" stroke="#9aae9d" strokeWidth="2" />
            <rect x="115" y="155" width="22" height="41" fill="#2f5c48" />
            <path d="M58 196H210" stroke="#8fa394" strokeWidth="3" />
            <path d="M27 196C35 168 49 160 58 156C61 174 55 190 43 196Z" fill="#6f9478" />
            <path d="M19 196C13 180 21 170 30 166C33 178 29 190 19 196Z" fill="#90b394" />
          </svg>
          <span className="lv-aurora-legenda">Casa Serra · 214 m²</span>
        </div>
      </div>
      <div className="lv-aurora-rodape">
        <span>Selecionado para a Bienal de Arquitetura 2025</span>
        <span>01 / 04</span>
      </div>
    </div>
  );
}

const VISUAIS = {
  atlas: AtlasVisual,
  pulso: PulsoVisual,
  rota: RotaVisual,
  aurora: AuroraVisual,
};

export default function LucasProjectVisual({ tipo }) {
  const Visual = VISUAIS[tipo] || AtlasVisual;
  return <Visual />;
}
