// App.js
import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import { Projetos } from "./components/Projetos";
import DarkVeil from "./components/bits/DarkVeil";
import Timeline from "./components/Timeline";
import Contato from "./components/Contato";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="w-full relative min-h-screen overflow-x-hidden">
      {/* Navbar fixa */}
      <Navbar />

      {/* Fundo animado ocupando toda a tela sem esticar */}
      <div id="home" className="inset-0 -z-50 w-screen absolute h-screen overflow-hidden opacity-80">
        <DarkVeil />
      </div>

      {/* HeroSection responsivo */}
      <section className="w-full px-4 sm:px-8 md:px-16 mt-20 overflow-x-hidden">
        <HeroSection />
      </section>

      {/* Seção de Projetos responsiva */}
      <section id="projetos" className="w-full px-4 sm:px-8 md:px-16 overflow-x-hidden">
        <Projetos />
      </section>

      {/* Seção de Timeline */}
      <section id="timeline" className="w-full px-4 sm:px-8 md:px-16 overflow-x-hidden">
        <Timeline />
      </section>

      {/* Seção de Conato */}
      <section id="contato" className="w-full px-4 sm:px-8 md:px-16 overflow-x-hidden">
        <Contato />
      </section>

      {/* Seção de Footer */}
      <section className="w-full px-4 sm:px-8 md:px-16 overflow-x-hidden">
        <Footer />
      </section>
    </div>
  );
};

export default App;
