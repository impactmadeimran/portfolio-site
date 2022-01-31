import React from "react";
import About from "./Sections/About";
import Hero from "./Sections/Hero";
import Resume from "./Sections/Resume";
import Skills from "./Sections/Skills";

const Homepage = () => {
  return (
    <>
      <Hero />
      <About />
      <Resume />
      <Skills />
    </>
  );
};

export default Homepage;
