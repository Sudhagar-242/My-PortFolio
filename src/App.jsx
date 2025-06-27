import React from "react";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Education from "./Components/Education/Education";
import Projects from "./Components/Projects/Projects";
import Resume from "./Components/Resume/Resume";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import ScrollNav from "./Components/UI/OnScrollNav";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <ScrollNav />
      <Home />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}

export default App;
