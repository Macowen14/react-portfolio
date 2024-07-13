import React, { Suspense, lazy } from "react";
import "./App.scss";
const Navbar = lazy(() => import("./components/navbar/Navbar"));
const Hero = lazy(() => import("./components/hero/Hero"));
const About = lazy(() => import("./components/about/About"));
const Experience = lazy(() => import("./components/experience/Experience"));
const Projects = lazy(() => import("./components/projects/Projects"));
const Contact = lazy(() => import("./components/contact/Contact"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </Suspense>
    </div>
  );
}

export default App;
