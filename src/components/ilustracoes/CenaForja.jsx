import "./CenaForja.css";

export default function CenaForja() {
  return (
    <svg
      viewBox="0 0 340 380"
      className="cena-forja"
      role="img"
      aria-label="Ilustração de uma bigorna com metal incandescente, martelo suspenso e faíscas"
    >
      <defs>
        <radialGradient id="cf-halo" cx="50%" cy="46%" r="55%">
          <stop offset="0%" stopColor="#ff7a26" stopOpacity="0.42" />
          <stop offset="55%" stopColor="#ff5b04" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#ff5b04" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="cf-metal" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ff5b04" />
          <stop offset="42%" stopColor="#ffd166" />
          <stop offset="72%" stopColor="#ff9a1f" />
          <stop offset="100%" stopColor="#ff5b04" />
        </linearGradient>

        <linearGradient id="cf-aco" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4a423c" />
          <stop offset="100%" stopColor="#1c1917" />
        </linearGradient>

        <linearGradient id="cf-topo" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#9b8d80" />
          <stop offset="55%" stopColor="#5a5049" />
          <stop offset="100%" stopColor="#3a332e" />
        </linearGradient>

        <linearGradient id="cf-chama" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#ff5b04" stopOpacity="0.05" />
          <stop offset="60%" stopColor="#ff7a26" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#ffd166" stopOpacity="0.05" />
        </linearGradient>
      </defs>

      {/* halo de calor */}
      <circle cx="170" cy="190" r="168" fill="url(#cf-halo)" />

      {/* chamas ao fundo */}
      <g className="cena-chamas">
        <path
          d="M150 306c-20-30-6-52-16-78 26 16 22 40 36 56 5-14 2-28 10-40 10 24 2 40 8 62z"
          fill="url(#cf-chama)"
        />
        <path
          d="M214 310c10-26-2-42 8-62-20 16-18 34-28 50z"
          fill="url(#cf-chama)"
        />
      </g>

      {/* sombra no chão */}
      <ellipse cx="170" cy="344" rx="118" ry="15" fill="#000" opacity="0.55" />

      {/* bigorna */}
      <g>
        {/* pé */}
        <rect
          x="106"
          y="318"
          width="128"
          height="18"
          rx="3"
          fill="url(#cf-aco)"
          stroke="#3a332e"
        />
        {/* base */}
        <path
          d="M98 292h144l8 26H90z"
          fill="url(#cf-aco)"
          stroke="#3a332e"
          strokeLinejoin="round"
        />
        {/* corpo */}
        <path
          d="M126 240h88l10 52H116z"
          fill="url(#cf-aco)"
          stroke="#3a332e"
          strokeLinejoin="round"
        />
        {/* topo da bigorna */}
        <path
          d="M70 212h182l-8 28H78z"
          fill="url(#cf-topo)"
          stroke="#5a5049"
          strokeLinejoin="round"
        />
        {/* chifre */}
        <path
          d="M70 212c-18 0-33 6-44 16 15 5 30 8 44 8z"
          fill="url(#cf-topo)"
          stroke="#5a5049"
          strokeLinejoin="round"
        />
        {/* brilho da face */}
        <path
          d="M84 217h156"
          stroke="#c9bcb0"
          strokeOpacity="0.55"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* parafusos */}
        <circle cx="112" cy="268" r="2" fill="#0d0b0a" opacity="0.6" />
        <circle cx="228" cy="268" r="2" fill="#0d0b0a" opacity="0.6" />
      </g>

      {/* metal incandescente sobre a bigorna */}
      <g className="cena-metal">
        <ellipse cx="166" cy="214" rx="62" ry="12" fill="#ffb347" opacity="0.2" />
        <rect x="112" y="198" width="108" height="15" rx="4" fill="url(#cf-metal)" />
        <rect
          x="116"
          y="201"
          width="100"
          height="4.5"
          rx="2.25"
          fill="#ffe9a8"
          opacity="0.85"
        />
      </g>

      {/* martelo */}
      <g className="cena-martelo">
        <line
          x1="262"
          y1="50"
          x2="198"
          y2="156"
          stroke="#4a423c"
          strokeWidth="9"
          strokeLinecap="round"
        />
        <line
          x1="262"
          y1="50"
          x2="198"
          y2="156"
          stroke="#8a7d72"
          strokeWidth="2.2"
          strokeLinecap="round"
          opacity="0.8"
        />
        <g transform="rotate(32 198 156)">
          <rect
            x="162"
            y="137"
            width="72"
            height="38"
            rx="9"
            fill="#3a332e"
            stroke="#5a5049"
            strokeWidth="1.5"
          />
          <rect x="171" y="143" width="54" height="7" rx="3.5" fill="#8a7d72" opacity="0.55" />
          <rect x="162" y="141" width="7" height="30" rx="3.5" fill="#5a5049" opacity="0.9" />
          <rect x="227" y="141" width="7" height="30" rx="3.5" fill="#5a5049" opacity="0.9" />
        </g>
      </g>

      {/* faíscas */}
      <g className="cena-faiscas" fill="#ffd166">
        <g transform="translate(166 176)">
          <path d="M0-9 2-2 9 0 2 2 0 9-2 2-9 0-2-2z" />
        </g>
        <g transform="translate(202 158)">
          <path d="M0-5 1.4-1.4 5 0 1.4 1.4 0 5-1.4 1.4-5 0-1.4-1.4z" />
        </g>
        <g transform="translate(128 168)">
          <path d="M0-4 1-1 4 0 1 1 0 4-1 1-4 0-1-1z" />
        </g>
        <g transform="translate(184 130)">
          <path d="M0-3.5.9-.9 3.5 0 .9.9 0 3.5-.9.9-3.5 0-.9-.9z" />
        </g>
      </g>

      {/* brasas soltas */}
      <g className="cena-brasas" fill="#ff7a26">
        <circle cx="96" cy="150" r="2" />
        <circle cx="232" cy="196" r="1.6" />
        <circle cx="118" cy="120" r="1.4" />
      </g>
    </svg>
  );
}
