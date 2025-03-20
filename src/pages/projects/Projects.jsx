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
      <nav
        className="mt-8 max-md:mt-2"
        data-aos="fade-up"
        data-aos-duration="2300"
      >
        <h1 className="text-[#A9725C] font-bold text-6xl max-md:text-5xl merriweather-bold py-4 text-center">
          Proyectos
        </h1>

        {/* <InkatoProject /> */}
        <ModaMarket />
        <div className="relative w-full h-[6px]">
          <hr
            className={`absolute top-0 h-full bg-[#A9725C] transition-all duration-1000 ${
              expand ? "left-0 w-full" : "left-1/2 w-0"
            }`}
          />
        </div>
        {/* <ModaMarket /> */}
        <InkatoProject />
        {/* <div className="relative w-full h-[6px]">
          <hr
            className={`absolute top-0 h-full bg-[#A9725C] transition-all duration-1000 ${
              expand ? "left-0 w-full" : "left-1/2 w-0"
            }`}
          />
        </div> */}
        <br />
      </nav>
    </>
  );
};

export default Projects;
