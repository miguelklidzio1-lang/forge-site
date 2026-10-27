import { useId } from "react";

/**
 * Marca da Forge: martelo laranja em movimento, batendo numa barra de aço.
 * Desenhada em SVG para ficar nítida em qualquer tamanho.
 */
export default function Logo({ altura = 30 }) {
  const uid = useId().replace(/:/g, "");
  const brasa = `lg-brasa-${uid}`;
  const aco = `lg-aco-${uid}`;

  return (
    <span className="logo" style={{ height: altura }}>
      <svg
        viewBox="0 0 76 56"
        width={altura * (76 / 56)}
        height={altura}
        aria-hidden="true"
        className="logo-marca"
      >
        <defs>
          <linearGradient id={brasa} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ff9a1f" />
            <stop offset="100%" stopColor="#ff5b04" />
          </linearGradient>
          <linearGradient id={aco} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#a99b8d" />
            <stop offset="100%" stopColor="#5a5049" />
          </linearGradient>
        </defs>

        {/* barra de aço sendo atingida */}
        <rect
          x="30"
          y="30"
          width="42"
          height="14"
          rx="7"
          fill={`url(#${aco})`}
          transform="rotate(-38 51 37)"
        />

        {/* martelo */}
        <g transform="rotate(-38 36 28)">
          <rect
            x="8"
            y="22"
            width="30"
            height="10"
            rx="5"
            fill={`url(#${brasa})`}
          />
          <rect
            x="32"
            y="10"
            width="22"
            height="32"
            rx="6"
            fill={`url(#${brasa})`}
          />
          {/* brilho na face do martelo */}
          <rect
            x="37"
            y="14"
            width="5"
            height="24"
            rx="2.5"
            fill="#ffc46b"
            opacity="0.55"
          />
        </g>

        {/* linhas de impacto */}
        <g fill="#ff5b04">
          <rect
            x="52"
            y="3"
            width="11"
            height="5"
            rx="2.5"
            transform="rotate(-38 57.5 5.5)"
          />
          <rect
            x="60"
            y="9"
            width="9"
            height="5"
            rx="2.5"
            transform="rotate(-38 64.5 11.5)"
          />
          <rect
            x="66"
            y="15"
            width="7"
            height="5"
            rx="2.5"
            transform="rotate(-38 69.5 17.5)"
          />
        </g>
      </svg>
      <span className="logo-texto">
        FORGE<span className="logo-ponto">.</span>
      </span>
    </span>
  );
}
