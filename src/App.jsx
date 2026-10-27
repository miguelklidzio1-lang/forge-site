import { useLayoutEffect } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Servicos from "./components/Servicos.jsx";
import Demos from "./components/Demos.jsx";
import Processo from "./components/Processo.jsx";
import Diferenciais from "./components/Diferenciais.jsx";
import Planos from "./components/Planos.jsx";
import Contato from "./components/Contato.jsx";
import Footer from "./components/Footer.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";
import EmberCursor from "./components/EmberCursor.jsx";
import ClickSparks from "./components/ClickSparks.jsx";
import NexusPage from "./components/demos/nexus/NexusPage.jsx";
import LucasPage from "./components/demos/lucas/LucasPage.jsx";
import EcoTechPage from "./components/demos/ecotech/EcoTechPage.jsx";
import useReveal from "./hooks/useReveal.js";
import { ROTAS, navegarPara, rotaDeTemplate, useRota } from "./router.js";

function SiteForge() {
  useReveal();

  return (
    <>
      <ScrollProgress />
      <EmberCursor />
      <ClickSparks />
      <Header />
      <main>
        <Hero />
        <Servicos />
        <Demos />
        <Processo />
        <Diferenciais />
        <Planos />
        <Contato />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  const rota = useRota();
  const emTemplate = rotaDeTemplate(rota);

  useLayoutEffect(() => {
    document.body.classList.toggle("tpl-route", emTemplate);
    if (emTemplate) window.scrollTo(0, 0);

    return () => document.body.classList.remove("tpl-route");
  }, [emTemplate, rota]);

  if (rota === ROTAS.nexus) {
    return <NexusPage onVoltar={() => navegarPara("/#demos")} />;
  }

  if (rota === ROTAS.lucas) {
    return <LucasPage onVoltar={() => navegarPara("/#demos")} />;
  }

  if (rota === ROTAS.ecotech) {
    return <EcoTechPage onVoltar={() => navegarPara("/#demos")} />;
  }

  return <SiteForge />;
}
