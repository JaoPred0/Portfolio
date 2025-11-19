import React from "react";
import FloatingLines from "./components/bits/FloatingLines";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

const App = () => {
  return (
    <div className="w-full relative min-h-screen">
      {/* Navbar fixa */}
      <Navbar />

      {/* Linhas animadas ocupando toda a tela */}
      <div className="absolute inset-0 w-full h-screen">
        <FloatingLines
          enabledWaves={["top", "middle", "bottom"]}
          lineCount={5}
          lineDistance={2}
          bendRadius={10}
          bendStrength={-1}
          interactive={true}
          parallax={true}
          className="w-full h-full"
        />
      </div>

      <HeroSection />
      
    </div>
  );
};

export default App;
