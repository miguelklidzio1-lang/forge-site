export default function Logo({ altura = 30 }) {
  return (
    <span className="logo" style={{ height: altura }}>
      <svg
        viewBox="0 0 34 34"
        width={altura}
        height={altura}
        aria-hidden="true"
        className="logo-marca"
      >
        <defs>
          <linearGradient id="lg-brasa" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ff9a1f" />
            <stop offset="100%" stopColor="#ff5b04" />
          </linearGradient>
        </defs>
        {/* bigorna estilizada: base + cunha */}
        <path d="M4 22h20l6-5-4-3H10z" fill="url(#lg-brasa)" />
        <rect x="11" y="24" width="8" height="5" fill="#8a7d72" />
        {/* faísca subindo */}
        <path d="M15 16 12 8l5 4 1-7 2 8 4-3-4 6z" fill="#e8e2dc" />
      </svg>
      <span className="logo-texto">
        FORGE<span className="logo-ponto">.</span>
      </span>
    </span>
  );
}
