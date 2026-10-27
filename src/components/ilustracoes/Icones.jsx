const base = {
  viewBox: "0 0 40 40",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
};

export function IconeServico({ tipo }) {
  switch (tipo) {
    case "institucional":
      return (
        <svg {...base}>
          <rect x="5" y="8" width="30" height="24" rx="2.5" />
          <path d="M5 14.5h30" />
          <circle cx="9" cy="11.3" r="0.9" fill="currentColor" stroke="none" />
          <circle cx="12" cy="11.3" r="0.9" fill="currentColor" stroke="none" />
          <path d="M10 20h11M10 25h8" />
          <rect x="25" y="19" width="6" height="10" rx="1.2" />
        </svg>
      );

    case "loja":
      return (
        <svg {...base}>
          <path d="M9 14h22l-1.7 17H10.7z" />
          <path d="M15 14v-2a5 5 0 0 1 10 0v2" />
          <path d="M16 21h8" />
        </svg>
      );

    case "landing":
      return (
        <svg {...base}>
          <rect x="9" y="6" width="22" height="28" rx="2.5" />
          <path d="M14 13h12M14 18h8" />
          <path d="M20 22v9M17 28l3 3 3-3" />
        </svg>
      );

    case "reforma":
      return (
        <svg {...base}>
          <path d="M9 20a11 11 0 1 1 4 8.5" />
          <path d="M9 12v8h8" />
          <rect x="16" y="16" width="8" height="8" rx="1.5" />
        </svg>
      );

    case "manutencao":
    default:
      return (
        <svg {...base}>
          <circle cx="20" cy="20" r="5.5" />
          <path d="M20 7v4.5M20 28.5V33M7 20h4.5M28.5 20H33M10.8 10.8l3.2 3.2M26 26l3.2 3.2M29.2 10.8L26 14M14 26l-3.2 3.2" />
        </svg>
      );
  }
}

const etapaBase = {
  viewBox: "0 0 32 32",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
};

export function IconeEtapa({ tipo }) {
  switch (tipo) {
    case "chama":
      return (
        <svg {...etapaBase}>
          <path d="M16 4c3.5 5 7 7.5 7 12.5a7 7 0 0 1-14 0c0-3 2-5.5 4.5-7.5 0 3 1 5 3 5 1-3.5-1-6.5-.5-10z" />
        </svg>
      );

    case "bigorna":
      return (
        <svg {...etapaBase}>
          <path d="M5 11h18l4 3.5H8z" />
          <path d="M12 14.5V21h9v-6.5" />
          <path d="M9 21h15v3.5H9z" />
        </svg>
      );

    case "martelo":
      return (
        <svg {...etapaBase}>
          <path d="M23 7l-3 3 5 5 3-3z" />
          <path d="M20 10l-9 9a2 2 0 0 0 0 2.8l1.2 1.2a2 2 0 0 0 2.8 0l9-9" />
        </svg>
      );

    case "tempera":
      return (
        <svg {...etapaBase}>
          <path d="M16 4c4 5 6 8 6 11a6 6 0 0 1-12 0c0-3 2-6 6-11z" />
          <path d="M7 26c2 1.5 4 1.5 6 0s4-1.5 6 0 4 1.5 6 0" />
        </svg>
      );

    case "entrega":
    default:
      return (
        <svg {...etapaBase}>
          <rect x="6" y="9" width="20" height="17" rx="2" />
          <path d="M6 14h20" />
          <path d="M11 19l3 3 7-7" />
        </svg>
      );
  }
}

export function BigornaMini({ tamanho = 26 }) {
  return (
    <svg
      viewBox="0 0 40 40"
      width={tamanho}
      height={tamanho}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 13h20l5 4H9z" />
      <path d="M14 17v8h10v-8" />
      <path d="M11 25h16v4H11z" />
    </svg>
  );
}
