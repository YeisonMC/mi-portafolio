import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import Skills from "./pages/skills/Skills";
import About from "./pages/about/About";
import { Route, Routes } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import "./assets/styles/TipoGrafias.css";

const App = () => {
  React.useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Navbar />
      <section className="max-w-screen-2xl w-11/12 mx-auto">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </section>
    </>
  );
};

export default App;
