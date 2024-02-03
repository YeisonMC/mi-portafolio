import React from "react";
import "../assets/styles/TipoGrafias.css";
import { UilLinkedin, UilGithub } from "@iconscout/react-unicons";
import { ATargetBlank } from "../components/iu/ATargetBlank";

import Linkedin from "../assets/images/home/linkedin.svg";

export const Home = () => {
  return (
    <>
      {/* HACER UN APARTADO SOBRE MI  */}
      <nav className="h-64 ">
        <div className="flex flex-wrap gap-6 items-center justify-center max-md:text-center pt-10">
          <div className="max-md:m-auto">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSV2z059SKpUITpLyboUpJrfHORBpCeauON32nMqRZZ8nLhgQFAEwfinkS0w&s"
              alt="Mi foto"
              className="rounded-full"
            />
          </div>
          <div className="max-w-2xl">
            <h3 className="text-4xl titulos">Yeissen Macalupu Marchan</h3>
            <p className="text-1xl mt-3 sub-titulos">
              Soy Frontend Developer apasionado por crear experiencias web
              sorprendentes he interfaces intuitivas y atractivas. Explora mi
              portafolio para descubrir mis proyectos destacados.
            </p>
            <div className="flex items-center gap-4 mt-3 max-md:justify-center">
              <ATargetBlank href="https://www.linkedin.com/in/yeissen-beckam-macalupu-marchan/">
                <UilLinkedin className="w-6 h-6 hover:text-red-400 transition duration-500  ease-in-out"></UilLinkedin>
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
              </ATargetBlank>

              {/* <button className="flex gap-3 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-7 py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-300 hover:border-gray-800 hover:from-black hover:to-gray-900">
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
                Github
              </button> */}

              <a
                className="cursor-pointer text-white font-semibold bg-gradient-to-r from-red-800 to-red-950 px-3 py-2 rounded-2xl border border-gray-600 hover:scale-105 duration-200 hover:text-gray-300 hover:border-red-800 hover:from-red-400 hover:to-red-900"
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
