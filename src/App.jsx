import React from "react";
import { Home, About, Projects } from "./pages";
import { Header, Footer } from "./components";

const App = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="bg-white py-40"></div>
      <Footer />
    </div>
  );
};

export default App;
