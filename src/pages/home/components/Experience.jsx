import React from "react";
import "../../../assets/styles/animated/timeline.css";

const Experience = () => {
  return (
    <>
      <div className=" mb-8">
        <h1 className="yeison text-[#A9725C] font-bold text-6xl merriweather-bold text-center">
          Mi Experiencia
        </h1>
        <div className="mt-4">
          <div className="timeline">
            <div
              className="containers rigth-container left-0 right-container"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <img
                src="https://cdn.evalpav.com/static/img/LogoGZA.png"
                alt=""
                className="w-[60px] rounded-full gza"
              />
              <div className="text-box cursor-pointer hover:-translate-y-2 duration-500 ease-out">
                <h2 className="md:text-xl raleway font-extrabold">
                  Centro GZA InfraVial Perú
                </h2>
                <small className="inline-block mb-[15px]">
                  11 de Marzo - 11 de Junio
                </small>
                <p className="md:text-justify raleway">
                  Como Desarrollador Frontend en Centro GZA InfraVial Perú,
                  Diseñe y desarrolle de la página principal, utilizando
                  herramientas como Tailwind CSS. Trabajé en equipo para
                  garantizar coherencia entre diseño y experiencia del usuario,
                  optimizando navegación y usabilidad. Fortalecí mis habilidades
                  técnicas y colaboré efectivamente, contribuyendo al éxito del
                  proyecto y adquiriendo valiosa experiencia en desarrollo web.
                </p>
                <span className="left-container-arrow"></span>
              </div>
            </div>
            <div
              className="containers left-container left-1/2 max-md:left-0"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <img
                src="https://play-lh.googleusercontent.com/yDjaHCaOn_O89vnY7eOKH6ElEBtJrmN2CSI4yhiP1_GVC2zrxXWSFGxO0lt9-CU0mV4"
                alt=""
                className="w-[50px] rounded-full"
              />
              <div className="text-box cursor-pointer hover:-translate-y-2 duration-500 ease-out">
                <h2 className="md:text-xl raleway font-extrabold">
                  Alura Latam
                </h2>
                <small className="inline-block mb-[15px]">
                  22 de Enero - En Proceso
                </small>
                <p className="md:text-justify raleway">
                  En Alura Latam, completé con éxito cursos en programación y
                  desarrollo web, como "Principiante en Programación" y "Lógica
                  de Programación con JavaScript" vía el programa ONE.
                  Posteriormente, fui seleccionado para el Programa ONE de
                  Oracle Next Education, especializándome como desarrollador
                  Backend - Java Spring. Esta experiencia me brindó una sólida
                  base y la oportunidad de explorar nuevas tecnologías en el
                  desarrollo de software.
                </p>
                <span className="right-container-arrow"></span>
              </div>
            </div>
            <div
              className="containers rigth-container left-0 right-container"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/6711/6711385.png"
                alt=""
                className="w-[50px] rounded-full bg-white incognito"
              />

              <div className="text-box cursor-pointer hover:-translate-y-2 duration-500 ease-out">
                <h2 className="md:text-xl raleway font-extrabold">
                  Desconocido
                </h2>
                <small className="inline-block mb-[15px]">Próximamente</small>
                <p className="md:text-justify raleway">
                  Emocionado por adentrarme en una nueva experiencia profesional
                  que desafíe mis habilidades y conocimientos. ¡Próximamente
                  revelaré los detalles de este emocionante capítulo en mi
                  carrera!
                </p>
                <span className="left-container-arrow"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
