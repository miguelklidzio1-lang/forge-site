import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Servicos from "./components/Servicos.jsx";
import Processo from "./components/Processo.jsx";
import Diferenciais from "./components/Diferenciais.jsx";
import Planos from "./components/Planos.jsx";
import Contato from "./components/Contato.jsx";
import Footer from "./components/Footer.jsx";
import useReveal from "./hooks/useReveal.js";

export default function App() {
  useReveal();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Servicos />
        <Processo />
        <Diferenciais />
        <Planos />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
