import React from "react";
import { Home, About, Projects, EndPage } from "./pages";
import { Header, Footer, ParticlesComponent } from "./components";

const App = () => {
  return (
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
