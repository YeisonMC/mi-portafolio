// TODO IMPORT LIBRERIAS REACT
import React, { useState, useEffect } from "react";

//TODO: COMPONENTES
import InkatoProject from "./components/left/InkatoProject";
import ModaMarket from "./components/rigth/ModaMarket";

const Projects = () => {
  const [expand, setExpand] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setExpand(true);
    }, 300);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <nav className="mt-8" data-aos="fade-up" data-aos-duration="2300">
        <h1 className="text-[#A9725C] font-bold text-6xl merriweather-bold py-4 text-center">
          Proyectos
        </h1>
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-6">
          <div className="shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
            <img src={ProjectInkato} alt="ProjectInkato" />
            <div className="p-4">
              <p className="text-[#A9725C] raleway text-lg font-semibold">
                Proyecto de arquitectura
              </p>
              <p className="text-lg raleway font-medium">Inkato</p>
              <p>Proyecto desarrollado con React</p>
            </div>
          </div>
          <div className="shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
            <img src={ProjectModaMarket} alt="ProjectModaMarket" />
            <div className="p-4">
              <p className="text-[#A9725C] raleway text-lg font-semibold">
                Proyecto de arquitectura
              </p>
              <p className="text-lg raleway font-medium">Moda Market</p>
              <p>Proyecto desarrollado con React</p>
            </div>
          </div>
          <div className="shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
            <img src={ProjectCentroGZA} alt="ProjectCentroGZA" />
            <div className="p-4">
              <p className="text-[#A9725C] raleway text-lg font-semibold">
                Proyecto de arquitectura
              </p>
              <p className="text-lg raleway font-medium">Centro GZA</p>
              <p>Proyecto desarrollado con React</p>
            </div>
          </div>
        </div> */}
        <InkatoProject />
        <div className="relative w-full h-[6px]">
          <hr
            className={`absolute top-0 h-full bg-[#A9725C] transition-all duration-1000 ${
              expand ? "left-0 w-full" : "left-1/2 w-0"
            }`}
          />
        </div>
        <ModaMarket />
        <div className="relative w-full h-[6px]">
          <hr
            className={`absolute top-0 h-full bg-[#A9725C] transition-all duration-1000 ${
              expand ? "left-0 w-full" : "left-1/2 w-0"
            }`}
          />
        </div>
        <br />
      </nav>
    </>
  );
};

export default Projects;
