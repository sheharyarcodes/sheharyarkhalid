import React from "react";
import { Home, About, Projects } from "./pages";
import { Header, Footer, Container } from "./components";

const App = () => {
  return (
    <div id="top" className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <Home />
        <About />
        <Projects />

        <div className="text-center font-semibold w-full py-10">
          Thanks for exploring my portfolio___😊
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
