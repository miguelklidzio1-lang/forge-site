const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
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

export function IconeSetaBaixo({ size = 17, className = "" }) {
  return (
    <Svg size={size} className={className}>
      <path d="M12 5v14M6 13l6 6 6-6" />
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

export function IconeCodigo({ size = 20, className = "" }) {
  return (
    <Svg size={size} className={className}>
      <path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" />
    </Svg>
  );
}

export function IconeCamadas({ size = 20, className = "" }) {
  return (
    <Svg size={size} className={className}>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 12 9 5 9-5M3 16l9 5 9-5" />
    </Svg>
  );
}

export function IconeServidor({ size = 20, className = "" }) {
  return (
    <Svg size={size} className={className}>
      <rect x="4" y="3.5" width="16" height="6.5" rx="2" />
      <rect x="4" y="14" width="16" height="6.5" rx="2" />
      <path d="M8 6.75h.01M8 17.25h.01M12 6.75h5M12 17.25h5" />
    </Svg>
  );
}

export function IconeMapa({ size = 17, className = "" }) {
  return (
    <Svg size={size} className={className}>
      <path d="m9 18 6-3 5 2V6l-5-2-6 3-5-2v11l5 2Z" />
      <path d="M9 4v14M15 7v11" />
    </Svg>
  );
}

export function IconeMail({ size = 17, className = "" }) {
  return (
    <Svg size={size} className={className}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" />
      <path d="m4.5 7 7.5 6 7.5-6" />
    </Svg>
  );
}

export function IconeLinkedin({ size = 17, className = "" }) {
  return (
    <Svg size={size} className={className}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
      <path d="M8 10.5V17M8 7.5v.1M11.5 17v-3.7a2.3 2.3 0 0 1 4.6 0V17" />
    </Svg>
  );
}

export function IconeGithub({ size = 17, className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2.5a9.5 9.5 0 0 0-3 18.5c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.6.4-1.1.7-1.4-2.2-.3-4.6-1.1-4.6-5a3.9 3.9 0 0 1 1-2.7 3.6 3.6 0 0 1 .1-2.7s.8-.3 2.8 1a9.7 9.7 0 0 1 5 0c2-1.3 2.8-1 2.8-1 .5 1.3.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7 1 .7 2v2.9c0 .3.2.6.7.5A9.5 9.5 0 0 0 12 2.5Z" />
    </svg>
  );
}
