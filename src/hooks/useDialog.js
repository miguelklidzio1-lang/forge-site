import { useEffect, useRef } from "react";

const SELETOR_FOCAVEIS =
  'button:not(:disabled), [href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])';

export default function useDialog({ onClose, initialFocusRef } = {}) {
  const dialogRef = useRef(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    const focoAnterior = document.activeElement;
    const overflowAnterior = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focarInicial = window.setTimeout(() => {
      if (initialFocusRef?.current) initialFocusRef.current.focus();
      else dialogRef.current?.focus();
    }, 30);

    const aoTeclar = (evento) => {
      if (evento.key === "Escape") {
        evento.preventDefault();
        onCloseRef.current?.();
        return;
      }

      if (evento.key !== "Tab" || !dialogRef.current) return;

      const focaveis = [
        ...dialogRef.current.querySelectorAll(SELETOR_FOCAVEIS),
      ].filter((el) => el.offsetParent !== null);

      if (!focaveis.length) return;

      const primeiro = focaveis[0];
      const ultimo = focaveis[focaveis.length - 1];

      if (evento.shiftKey && document.activeElement === primeiro) {
        evento.preventDefault();
        ultimo.focus();
      } else if (!evento.shiftKey && document.activeElement === ultimo) {
        evento.preventDefault();
        primeiro.focus();
      }
    };

    document.addEventListener("keydown", aoTeclar);

    return () => {
      window.clearTimeout(focarInicial);
      document.removeEventListener("keydown", aoTeclar);
      document.body.style.overflow = overflowAnterior;
      if (focoAnterior instanceof HTMLElement) focoAnterior.focus();
    };
  }, [initialFocusRef]);

  return dialogRef;
}
