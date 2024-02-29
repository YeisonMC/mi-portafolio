import React from "react";
import "../assets/styles/TipoGrafias.css";
import { UilLinkedin, UilGithub } from "@iconscout/react-unicons";
import { ATargetBlank } from "../components/iu/ATargetBlank";

import Linkedin from "../assets/images/home/linkedin.svg";

export const Home = () => {
  return (
    <>
      {/* HACER UN APARTADO SOBRE MI  */}
      <nav className="h-screen pt-32">
        <div className="flex flex-wrap flex-col items-start justify-center max-md:text-center max-w-[700px] mx-auto">
          <div className="max-md:m-auto">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSV2z059SKpUITpLyboUpJrfHORBpCeauON32nMqRZZ8nLhgQFAEwfinkS0w&s"
              alt="Mi foto"
              className="rounded-full border-4 border-spacing-2 border-[#FDCA65] w-32 mb-5"
              // rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 size-[100px] mb-5
            />
          </div>
          <div className=" ">
            <h3 className="titulos text-white text-3xl md:text-4xl lg:text-5xl font-bold">
              Yeissen Macalupu Marchan
            </h3>
            <p className="sub-titulos text-white text-xl lg:text-2xl text-balance mt-6">
              Soy egresado de la carrera de{" "}
              <em className="text-[#FDCA65]">
                Diseño y Desarrollo de Software
              </em>
              , con experiencia en diversas tecnologías. Mi enfoque principal
              está en el desarrollo tanto de frontend como de backend, así como
              en el diseño y manejo de bases de datos relacionales. Tengo
              experiencia en el desarrollo de aplicaciones móviles en Android
              utilizando Flutter. Explora mi portafolio para descubrir mis
              proyectos destacados
            </p>
            <div className="flex items-center gap-4 mt-5 max-md:justify-center">
              <ATargetBlank href="https://www.linkedin.com/in/yeissen-beckam-macalupu-marchan/">
                <svg
                  class="size-5 md:size-6"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid"
                  viewBox="0 0 256 256"
                >
                  <path
                    d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453"
                    fill="currentColor"
                  ></path>
                </svg>
                LinkedIn
              </ATargetBlank>
              <ATargetBlank href="https://github.com/YeisonMC">
                <svg
                  viewBox="0 0 24 24"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#FFFFFF"
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  ></path>
                </svg>
                GitHud
              </ATargetBlank>
              <a
                className="max:md:mt-3 cursor-pointer text-white font-semibold bg-gradient-to-r from-red-800 to-red-950 px-3 py-2 rounded-2xl border border-gray-600 hover:scale-105 duration-200 hover:text-gray-300 hover:border-red-800 hover:from-red-400 hover:to-red-900"
                href="/CV%20-%20YEISSEN%20-%20DESARROLLADOR.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visitar CV
              </a>
            </div>
          </div>
        </div>
      </nav>
      {/* </section> */}
    </>
  );
};
