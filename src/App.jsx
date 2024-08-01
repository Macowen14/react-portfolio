import { Suspense, lazy } from "react";
import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home";
const Contact = lazy(() => import("./components/contact/Contact"));
import { Routes, Route } from "react-router-dom";
import Projects from "./components/projects/Projects";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Suspense fallback={<div>Loading contact section</div>}>
        <Contact />
      </Suspense>
    </div>
  );
}

export default App;
