const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
};

function Svg({ size = 20, className = "", children, ...props }) {
  return (
    <svg {...base} width={size} height={size} className={className} {...props}>
      {children}
    </svg>
  );
}

export function IconeSol({ size = 20, className = "" }) {
  return (
    <Svg size={size} className={className}>
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2.4v2.1M12 19.5v2.1M2.4 12h2.1M19.5 12h2.1M5.2 5.2l1.5 1.5M17.3 17.3l1.5 1.5M18.8 5.2l-1.5 1.5M6.7 17.3l-1.5 1.5" />
    </Svg>
  );
}

export function IconeFolha({ size = 20, className = "" }) {
  return (
    <Svg size={size} className={className}>
      <path d="M20.5 3.5C12 3.8 5.3 7.5 4.2 14.2c-.5 3.1 1.4 5.5 4.3 5.6 6.8.3 10.9-6.2 12-16.3Z" />
      <path d="M4.5 19.5c2.1-5.3 5.7-8.6 10.6-10.7" />
    </Svg>
  );
}

export function IconeCasa({ size = 20, className = "" }) {
  return (
    <Svg size={size} className={className}>
      <path d="m3.5 10.5 8.5-7 8.5 7" />
      <path d="M5.5 9.5V20h13V9.5" />
      <path d="M9 20v-5.5h6V20" />
      <path d="m12.8 4.8 4.2 3.4 1.2-2.6" />
    </Svg>
  );
}

export function IconePredio({ size = 20, className = "" }) {
  return (
    <Svg size={size} className={className}>
      <path d="M4 21V6.5h9V21M13 21V10.5h7V21M2.5 21h19" />
      <path d="M7 9.5h3M7 12.5h3M7 15.5h3M16 13.5h2M16 16.5h2" />
    </Svg>
  );
}

export function IconeEmpresa({ size = 20, className = "" }) {
  return (
    <Svg size={size} className={className}>
      <path d="M3 21V8l6-3v4l6-3v4l6-3v14H3Z" />
      <path d="M7 21v-3h3v3M14 21v-3h3v3M7 11h1M11 11h1M16 11h1" />
    </Svg>
  );
}

export function IconeAutomacao({ size = 20, className = "" }) {
  return (
    <Svg size={size} className={className}>
      <path d="m13 2-7 11h5l-1 9 7-11h-5l1-9Z" />
      <path d="M4 6H2.5M6.2 3.6 5.2 2.4M19 18h1.5M17.2 20.4l1 1.2" />
    </Svg>
  );
}

export function IconeSeta({ size = 17, className = "" }) {
  return (
    <Svg size={size} className={className}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </Svg>
  );
}

export function IconeSetaDiagonal({ size = 17, className = "" }) {
  return (
    <Svg size={size} className={className}>
      <path d="M7 17 17 7M8 7h9v9" />
    </Svg>
  );
}

export function IconeMenu({ size = 21, className = "" }) {
  return (
    <Svg size={size} className={className}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </Svg>
  );
}

export function IconeX({ size = 21, className = "" }) {
  return (
    <Svg size={size} className={className}>
      <path d="m6 6 12 12M18 6 6 18" />
    </Svg>
  );
}

export function IconeCheck({ size = 15, className = "" }) {
  return (
    <Svg size={size} className={className}>
      <path d="m5 12.5 4.2 4.2L19 7" />
    </Svg>
  );
}

export function IconeGrafico({ size = 20, className = "" }) {
  return (
    <Svg size={size} className={className}>
      <path d="M4 20V4M4 20h16" />
      <path d="m7 15 4-5 3 2.5 4-6" />
      <path d="M18 6.5h2.5V9" />
    </Svg>
  );
}

export function IconeEscudo({ size = 20, className = "" }) {
  return (
    <Svg size={size} className={className}>
      <path d="M12 2.8 20 6v6c0 4.5-3.1 7.8-8 9-4.9-1.2-8-4.5-8-9V6l8-3.2Z" />
      <path d="m8.5 12 2.3 2.3 4.7-4.6" />
    </Svg>
  );
}

export function IconeMonitor({ size = 20, className = "" }) {
  return (
    <Svg size={size} className={className}>
      <rect x="3" y="4" width="18" height="13" rx="2" />
      <path d="M8 21h8M12 17v4M7 12.5l2.2-2.5 2 1.5L14 8l1.8 2.2" />
    </Svg>
  );
}

export function IconeMapa({ size = 16, className = "" }) {
  return (
    <Svg size={size} className={className}>
      <path d="m9 18 6-3 5 2V6l-5-2-6 3-5-2v11l5 2Z" />
      <path d="M9 4v14M15 7v11" />
    </Svg>
  );
}

export function IconeMail({ size = 16, className = "" }) {
  return (
    <Svg size={size} className={className}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" />
      <path d="m4.5 7 7.5 6 7.5-6" />
    </Svg>
  );
}

export function IconeInstagram({ size = 16, className = "" }) {
  return (
    <Svg size={size} className={className}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="3.8" />
      <circle cx="17.4" cy="6.7" r="0.8" fill="currentColor" stroke="none" />
    </Svg>
  );
}

export function IconeLinkedin({ size = 16, className = "" }) {
  return (
    <Svg size={size} className={className}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
      <path d="M8 10.5V17M8 7.5v.1M11.5 17v-3.7a2.3 2.3 0 0 1 4.6 0V17" />
    </Svg>
  );
}
