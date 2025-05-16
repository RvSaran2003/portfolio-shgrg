/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Footer from './sections/Footer';
import Education from './sections/Education';
import FloatingCVButton from "./components/FloatingCVButton";


const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <FloatingCVButton  cvFile="/assets/CV.pdf"/>
      <About />
      <Skills />
      <Education/>
      <Experiences />
      <Projects />
      <Contact />
      <Footer/>
    </div>
  );
};

export default App;
