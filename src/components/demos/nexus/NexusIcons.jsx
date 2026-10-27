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

export function IconeSeta({ size = 18, className = "" }) {
  return (
    <Svg size={size} className={className}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </Svg>
  );
}

export function IconePlay({ size = 18, className = "" }) {
  return (
    <Svg size={size} className={className}>
      <path d="M8 5.5v13l10-6.5-10-6.5Z" />
    </Svg>
  );
}

export function IconeCheck({ size = 18, className = "" }) {
  return (
    <Svg size={size} className={className}>
      <path d="m5 12.5 4.2 4.2L19 7" />
    </Svg>
  );
}

export function IconeTarefas({ size = 22, className = "" }) {
  return (
    <Svg size={size} className={className}>
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <path d="m8 9 1.6 1.6L13 7.3M8 15l1.6 1.6L13 13.3M15.5 9.5H18M15.5 15.5H18" />
    </Svg>
  );
}

export function IconeProdutividade({ size = 22, className = "" }) {
  return (
    <Svg size={size} className={className}>
      <path d="M13 2 4.5 13H11l-1 9L19.5 10H13l0-8Z" />
    </Svg>
  );
}

export function IconeColaboracao({ size = 22, className = "" }) {
  return (
    <Svg size={size} className={className}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19c.4-3.3 2.2-5 5.5-5s5.1 1.7 5.5 5" />
      <circle cx="17" cy="9" r="2.2" />
      <path d="M16 14.2c2.8.1 4.3 1.7 4.6 4.8" />
    </Svg>
  );
}

export function IconeProjetos({ size = 22, className = "" }) {
  return (
    <Svg size={size} className={className}>
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <path d="M8 16V9M12 16v-4M16 16v-7" />
    </Svg>
  );
}

export function IconeMenu({ size = 22, className = "" }) {
  return (
    <Svg size={size} className={className}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </Svg>
  );
}

export function IconeX({ size = 22, className = "" }) {
  return (
    <Svg size={size} className={className}>
      <path d="m6 6 12 12M18 6 6 18" />
    </Svg>
  );
}

export function IconeMais({ size = 18, className = "" }) {
  return (
    <Svg size={size} className={className}>
      <path d="M12 5v14M5 12h14" />
    </Svg>
  );
}

export function IconeMenos({ size = 18, className = "" }) {
  return (
    <Svg size={size} className={className}>
      <path d="M5 12h14" />
    </Svg>
  );
}

export function IconeGrid({ size = 18, className = "" }) {
  return (
    <Svg size={size} className={className}>
      <rect x="4" y="4" width="6" height="6" rx="1.5" />
      <rect x="14" y="4" width="6" height="6" rx="1.5" />
      <rect x="4" y="14" width="6" height="6" rx="1.5" />
      <rect x="14" y="14" width="6" height="6" rx="1.5" />
    </Svg>
  );
}

export function IconePasta({ size = 18, className = "" }) {
  return (
    <Svg size={size} className={className}>
      <path d="M3.5 7.5A2.5 2.5 0 0 1 6 5h4l2 2h6a2.5 2.5 0 0 1 2.5 2.5v7A2.5 2.5 0 0 1 18 19H6a2.5 2.5 0 0 1-2.5-2.5v-9Z" />
    </Svg>
  );
}

export function IconeEquipe({ size = 18, className = "" }) {
  return (
    <Svg size={size} className={className}>
      <circle cx="9" cy="8" r="2.8" />
      <circle cx="17" cy="9" r="2" />
      <path d="M3.8 18.5c.3-3 2-4.6 5.2-4.6s4.9 1.6 5.2 4.6M15.5 14.2c2.4.1 3.8 1.5 4.1 4.2" />
    </Svg>
  );
}

export function IconeSino({ size = 17, className = "" }) {
  return (
    <Svg size={size} className={className}>
      <path d="M18 9.5a6 6 0 0 0-12 0c0 7-2.2 7.2-2.2 8.5h16.4c0-1.3-2.2-1.5-2.2-8.5Z" />
      <path d="M10 21h4" />
    </Svg>
  );
}

export function IconeBusca({ size = 15, className = "" }) {
  return (
    <Svg size={size} className={className}>
      <circle cx="10.5" cy="10.5" r="6" />
      <path d="m15 15 4.5 4.5" />
    </Svg>
  );
}

export function IconeCalendario({ size = 15, className = "" }) {
  return (
    <Svg size={size} className={className}>
      <rect x="3.5" y="5" width="17" height="16" rx="2.5" />
      <path d="M7.5 3v4M16.5 3v4M3.5 10h17" />
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

export function IconeInstagram({ size = 17, className = "" }) {
  return (
    <Svg size={size} className={className}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.5 6.5h.1" />
    </Svg>
  );
}
