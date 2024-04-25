import React, { useState } from "react";
import Perfil1 from "@perfil/perfil-1.jpeg";
import Perfil2 from "@perfil/perfil-2.jpeg";
import "../../assets/styles/animated/hoverImage.css";
import HrSeparator from "../../components/animated/HrSeparator";

const About = () => {
  // const [imageHover, setImageHover] = useState(Perfil1);

  return (
    <>
      <nav className="mt-8" data-aos="fade-up" data-aos-duration="2300">
        <h1 className="text-[#A9725C] font-bold text-6xl merriweather-bold py-4 text-center">
          Sobre mi
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 my-4 gap-10">
          <div className="px-4 m-auto max-md:px-0">
            <p className="raleway text-justify">
              !Hola! a todos, Soy Yeissen pero mis amigos me dice Yeison, soy de
              Perú y tengo 20 años, mi camino a esta hermosa carrera empezo hace
              3 años, donde aún esta pensando donde estudiar, por mi estado
              economico opte por ir a un Instituto donde fueron mis primeros
              pasos.
            </p>
            <p className="my-4 raleway text-justify">
              Mi experiencia en el Instituto no fue muy buena, sientia que la
              calidad de educación era demasiado baja por lo que pagaba pero
              decide terminar la carrera, por otro lado estando en 5to ciclo
              empece a buscar mis primeras practicas, además que me meti a
              muchas comunidades, a programas como ONE que me fueron de gran
              ayuda
            </p>
            <p className="raleway text-justify">
              Actualmente sigo alimentandome de aprendizaje, viendo cursos,
              haciendo nuevos proyectos y como dato curioso quiero sabir a
              Youtube algunos cursos o guias para hacerme conocer, me gusta
              ayudar a los demás y orientarlos.
            </p>
          </div>
          <div className="m-auto">
            {/* <img
              className="w-[400px]"
              src={imageHover}
              alt="Perfil - Yeissen Beckam"
              onMouseOver={() => setImageHover(Perfil2)}
              onMouseOut={() => setImageHover(Perfil1)}
            /> */}
            {/* <img
              className="w-[400px]"
              src={Perfil1}
              alt="Perfil1 - Yeissen Beckam"
            /> */}
            <img
              className="w-[400px]"
              src={Perfil2}
              alt="Perfil2 - Yeissen Beckam"
            />
          </div>
        </div>
        <div className="my-4">
          <HrSeparator />
        </div>
      </nav>
    </>
  );
};

export default About;
