import React from "react";

import "./AppOut.css"

import Layout from "./components/Layout/Layout";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/ProjectsV2/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";


const App: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </Layout>
  );
};

export default App;
