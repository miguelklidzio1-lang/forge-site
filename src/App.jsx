import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Servicos from "./components/Servicos.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Processo from "./components/Processo.jsx";
import Diferenciais from "./components/Diferenciais.jsx";
import Planos from "./components/Planos.jsx";
import Contato from "./components/Contato.jsx";
import Footer from "./components/Footer.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";
import EmberCursor from "./components/EmberCursor.jsx";
import ClickSparks from "./components/ClickSparks.jsx";
import useReveal from "./hooks/useReveal.js";

export default function App() {
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
        <Portfolio />
        <Processo />
        <Diferenciais />
        <Planos />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
