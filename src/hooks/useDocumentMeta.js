import { useEffect } from "react";

function lerMeta(seletor) {
  return document.querySelector(seletor);
}

export default function useDocumentMeta(titulo, descricao, corTema) {
  useEffect(() => {
    const tituloAnterior = document.title;
    const descricaoMeta = lerMeta('meta[name="description"]');
    const ogTitulo = lerMeta('meta[property="og:title"]');
    const ogDescricao = lerMeta('meta[property="og:description"]');
    const tema = lerMeta('meta[name="theme-color"]');

    const descricaoAnterior = descricaoMeta?.getAttribute("content");
    const ogTituloAnterior = ogTitulo?.getAttribute("content");
    const ogDescricaoAnterior = ogDescricao?.getAttribute("content");
    const temaAnterior = tema?.getAttribute("content");

    document.title = titulo;
    descricaoMeta?.setAttribute("content", descricao);
    ogTitulo?.setAttribute("content", titulo);
    ogDescricao?.setAttribute("content", descricao);
    if (corTema) tema?.setAttribute("content", corTema);

    return () => {
      document.title = tituloAnterior;
      if (descricaoMeta && descricaoAnterior !== null) {
        descricaoMeta.setAttribute("content", descricaoAnterior);
      }
      if (ogTitulo && ogTituloAnterior !== null) {
        ogTitulo.setAttribute("content", ogTituloAnterior);
      }
      if (ogDescricao && ogDescricaoAnterior !== null) {
        ogDescricao.setAttribute("content", ogDescricaoAnterior);
      }
      if (tema && temaAnterior !== null) tema.setAttribute("content", temaAnterior);
    };
  }, [titulo, descricao, corTema]);
}
