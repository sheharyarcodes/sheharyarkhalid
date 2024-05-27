import React, { useState, useEffect } from "react";
import { Home, About, Projects, EndPage } from "./pages";
import { Header, Footer, ParticlesComponent, Preloader } from "./components";

// used in particle component
import { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

const App = () => {
  // const [init, setInit] = useState(false);

  // useEffect(() => {
  //   if (init) {
  //     return;
  //   }

  //   initParticlesEngine(async (engine) => {
  //     await loadFull(engine);
  //   }).then(() => {
  //     setInit(true);
  //   });
  // }, []);

  // return !init ? (
  //   <Preloader />
  // ) :

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <Home />
        <About />
        <Projects />
        <EndPage />
      </main>
      {/* <ParticlesComponent init={init} /> */}
      <Footer />
    </div>
  );
};

export default App;
