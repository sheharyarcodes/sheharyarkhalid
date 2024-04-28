import React, { useState, useEffect } from "react";
import { Home, About, Projects, EndPage } from "./pages";
import { Header, Footer, ParticlesComponent, Preloader } from "./components";

const App = () => {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // return <Preloader />;

  return load ? (
    <Preloader />
  ) : (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <Home />
        <About />
        <Projects />
        <EndPage />
      </main>
      <ParticlesComponent />
      <Footer />
    </div>
  );
};

export default App;
