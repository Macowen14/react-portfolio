import { Suspense, lazy } from "react";
import Hero from "./hero/Hero";
const About = lazy(() => import("./about/About"));
const Experience = lazy(() => import("./experience/Experience"));
const Projects = lazy(() => import("./projects/Projects"));

const Home = () => {
  return (
    <>
      <Hero />
      <Suspense fallback={<div>Loading...</div>}>
        <About />
        <Experience />
        <Projects />
      </Suspense>
    </>
  );
};

export default Home;
