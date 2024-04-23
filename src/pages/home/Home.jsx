import React from "react";
import HrSeparator from "../../components/animated/HrSeparator";
import Experience from "./components/Experience";
const Home = () => {
  return (
    <>
      {/* //TODO: h-screen max-lg:h-auto */}
      <nav className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 max-lg:gap-10 yeison mt-20 max-lg:mt-4">
        <div className="m-auto">
          <h1 className="text-[#A9725C] font-bold text-6xl merriweather-bold">
            Hola, soy
          </h1>
          <h1 className="text-[#A9725C] font-bold text-6xl merriweather-bold py-4">
            Yeissen Macalupu
          </h1>
          {/* <div className="flex gap-4 py-4 max-xl:flex-col">
            <h1 className="yeissen text-[#A9725C] font-bold text-6xl merriweather-bold">
              <span>Y</span>
              <span>e</span>
              <span>i</span>
              <span>s</span>
              <span>s</span>
              <span>e</span>
              <span>n</span>
            </h1>
            <h1 className="yeissen text-[#A9725C] font-bold text-6xl merriweather-bold ">
              <span>M</span>
              <span>a</span>
              <span>c</span>
              <span>a</span>
              <span>l</span>
              <span>u</span>
              <span>p</span>
              <span>u</span>
            </h1>
          </div> */}
          <h1 className="text-4xl raleway font-bold">
            Desarrollador FullStack
          </h1>
          <p className="py-4 raleway text-justify">
            Soy egresado de la carrera de Diseño y Desarollo de Software en
            Certus 2024, durante todo mi aprendizaje he visto base de datos,
            desarrollo web y backend, aplicaciones moviles con flutter y
            arquitectura de proyecto, durante todo mi aprendizaje desarrolle
            interes principalmente con el lado Frontend y Backend, siendo mis
            herramientas favoritas React, Nodejs, Tailwind y MySQL, como
            desarrollador siempre estoy en constante aprendizaje y me alegra
            seguir este mundo tan maravilloso.
          </p>
          <div className="flex gap-4 mt-2">
            <a
              href="/CV%20-%20YEISSEN%20-%20DESARROLLADOR.pdf"
              target="_blank"
              className="raleway font-semibold border-2 border-[#A9725C] text-[#A9725C] py-2 px-4 rounded-lg hover:scale-105 transition duration-500"
            >
              <div className="flex gap-1 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M19.5 21a3 3 0 0 0 3-3v-4.5a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h15ZM1.5 10.146V6a3 3 0 0 1 3-3h5.379a2.25 2.25 0 0 1 1.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 0 1 3 3v1.146A4.483 4.483 0 0 0 19.5 9h-15a4.483 4.483 0 0 0-3 1.146Z" />
                </svg>
                <p>Curriculum</p>
              </div>
            </a>
            <a
              href="mailto:yeissenmacalupu.dev@gmail.com"
              className="raleway font-semibold bg-[#A9725C] text-white py-2 px-4 rounded-lg hover:scale-105 transition duration-500"
            >
              <div className="flex gap-1 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                  <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                </svg>
                <p> Mi correo</p>
              </div>
            </a>
          </div>
        </div>
        <div className="m-auto ">
          <div className="rounded-prueb bg-[#A9725C] w-[380px] h-[350px] max-lg:w-[380px] max-lg:h-[380px]">
            <img
              src="https://assets-global.website-files.com/64c73d04a946980a4476537e/64d454ec3583c11cf926ec6f_Jumping.svg"
              alt=""
              className="w-[350px] animate-marquee"
            />
          </div>
        </div>
      </nav>
      <div className="my-10">
        <HrSeparator />
      </div>
      <Experience />
    </>
  );
};

export default Home;
