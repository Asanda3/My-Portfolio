import React from "react";
import "./App.css";
import Header from './components/header/Header'; // Ensure correct path and casing

import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Portfolio from "./components/portfolio/Portfolio";

function App() {
  return (
    <div>
      <Header />
      <main className="main">
       <Home/>
       <About />
       <Skills />
       <Portfolio />
      </main>
    </div>
  );
}

export default App;
