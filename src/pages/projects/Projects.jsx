import React from "react";
import ProjectInkato from "../../assets/images/projects/inkato.svg";
import ProjectModaMarket from "../../assets/images/projects/moda-market.svg";
import ProjectCentroGZA from "../../assets/images/projects/centro-gza.svg";

const Projects = () => {
  return (
    <>
      <nav className="mt-8" data-aos="fade-up" data-aos-duration="2300">
        <h1 className="text-[#A9725C] font-bold text-6xl merriweather-bold py-4 text-center">
          Proyectos
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
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
        </div>
      </nav>
    </>
  );
};

export default Projects;
