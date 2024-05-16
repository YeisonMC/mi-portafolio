// TODO IMPORT LIBRERIAS REACT
import React from "react";
import { Route, Routes } from "react-router-dom";

// TODO COMPONENTS
import Navbar from "./components/Navbar/Navbar";

// TODO SUBPAGINA
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import Skills from "./pages/skills/Skills";
import About from "./pages/about/About";

//TODO AOS
import Aos from "aos";
import "aos/dist/aos.css";
import "./assets/styles/TipoGrafias.css";
import Footer from "./components/Footer/Footer";
import NotFound from "./pages/error/NotFound";

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
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </section>
      <Footer />
    </>
  );
};

export default App;
