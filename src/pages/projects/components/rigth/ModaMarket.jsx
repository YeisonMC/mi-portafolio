import React from "react";

//? ICONOS SVG FRONTEND
import ModaMarketProject from "@projects/moda-market.svg";
import Reacticon from "@frontend/react.svg";
import Vite from "@frontend/vite.svg";
import Tailwind from "@frontend/tailwind.svg";
import Html from "@frontend/html5.svg";
import Css from "@frontend/css3.svg";

//? ICONOS SVG BACKEND
import Nodejs from "@backend/nodejs.svg";

//? ICONOS SVG BASE DE DATOS
import Mysql from "@db/mysql.svg";

//TODO: COMPONENTES
import { SkillsSvg } from "../../../../components/iu/SkillsSvg";

const ModaMarket = () => {
  return (
    <div className="my-6">
      <div className="grid grid-cols-2 gap-6 max-lg:gap-0 max-lg:flex max-lg:flex-col-reverse">
        <div className="px-8 text-justify max-lg:py-4 max-lg:px-3 max-xl:my-auto my-auto">
          <div className="flex justify-between items-center max-xl:flex-col">
            <h1 className="text-3xl raleway font-semibold">
              Ecommerce: Moda - Market
            </h1>
            <div className="flex gap-3 items-center">
              <a
                href="#"
                className="hover:-translate-y-1 transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.6em"
                  height="1.6em"
                  viewBox="0 0 256 250"
                >
                  <path
                    fill="#161614"
                    d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46c6.397 1.185 8.746-2.777 8.746-6.158c0-3.052-.12-13.135-.174-23.83c-35.61 7.742-43.124-15.103-43.124-15.103c-5.823-14.795-14.213-18.73-14.213-18.73c-11.613-7.944.876-7.78.876-7.78c12.853.902 19.621 13.19 19.621 13.19c11.417 19.568 29.945 13.911 37.249 10.64c1.149-8.272 4.466-13.92 8.127-17.116c-28.431-3.236-58.318-14.212-58.318-63.258c0-13.975 5-25.394 13.188-34.358c-1.329-3.224-5.71-16.242 1.24-33.874c0 0 10.749-3.44 35.21 13.121c10.21-2.836 21.16-4.258 32.038-4.307c10.878.049 21.837 1.47 32.066 4.307c24.431-16.56 35.165-13.12 35.165-13.12c6.967 17.63 2.584 30.65 1.255 33.873c8.207 8.964 13.173 20.383 13.173 34.358c0 49.163-29.944 59.988-58.447 63.157c4.591 3.972 8.682 11.762 8.682 23.704c0 17.126-.148 30.91-.148 35.126c0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002C256 57.307 198.691 0 128.001 0m-80.06 182.34c-.282.636-1.283.827-2.194.39c-.929-.417-1.45-1.284-1.15-1.922c.276-.655 1.279-.838 2.205-.399c.93.418 1.46 1.293 1.139 1.931m6.296 5.618c-.61.566-1.804.303-2.614-.591c-.837-.892-.994-2.086-.375-2.66c.63-.566 1.787-.301 2.626.591c.838.903 1 2.088.363 2.66m4.32 7.188c-.785.545-2.067.034-2.86-1.104c-.784-1.138-.784-2.503.017-3.05c.795-.547 2.058-.055 2.861 1.075c.782 1.157.782 2.522-.019 3.08m7.304 8.325c-.701.774-2.196.566-3.29-.49c-1.119-1.032-1.43-2.496-.726-3.27c.71-.776 2.213-.558 3.315.49c1.11 1.03 1.45 2.505.701 3.27m9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033c-1.448-.439-2.395-1.613-2.103-2.626c.301-1.01 1.747-1.484 3.207-1.028c1.446.436 2.396 1.602 2.095 2.622m10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95c-1.53.034-2.769-.82-2.786-1.86c0-1.065 1.202-1.932 2.733-1.958c1.522-.03 2.768.818 2.768 1.868m10.555-.405c.182 1.03-.875 2.088-2.387 2.37c-1.485.271-2.861-.365-3.05-1.386c-.184-1.056.893-2.114 2.376-2.387c1.514-.263 2.868.356 3.061 1.403"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="hover:-translate-y-1 transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.8em"
                  height="1.8em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2m-5.15 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56M14.34 14H9.66c-.1-.66-.16-1.32-.16-2s.06-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2M12 19.96c-.83-1.2-1.5-2.53-1.91-3.96h3.82c-.41 1.43-1.08 2.76-1.91 3.96M8 8H5.08A7.92 7.92 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8m-2.92 8H8c.35 1.25.8 2.45 1.4 3.56A8 8 0 0 1 5.08 16m-.82-2C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M18.92 8h-2.95a15.7 15.7 0 0 0-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M12 2C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-2">
            <SkillsSvg>
              <img src={Nodejs} alt="Nodejs" />
              NodeJS
            </SkillsSvg>
            <SkillsSvg>
              <img src={Mysql} alt="Mysql" />
              MySQL
            </SkillsSvg>
            <SkillsSvg>
              <img src={Reacticon} alt="Reacticon" />
              React
            </SkillsSvg>
            <SkillsSvg>
              <img src={Vite} alt="Vite" />
              Vite
            </SkillsSvg>
            <SkillsSvg>
              <img src={Tailwind} alt="Tailwind" />
              Tailwind
            </SkillsSvg>
            <SkillsSvg>
              <img src={Html} alt="Html" />
              HMTL
            </SkillsSvg>
            <SkillsSvg>
              <img src={Css} alt="Css" />
              CSS
            </SkillsSvg>
          </div>
          <p>
            Moda Market es mi primer proyecto de Ecommerce, inspirado por mi
            madre, quien aspira a abrir su propia tienda de ropa en el futuro.
            La temática del proyecto se inspira en marcas reconocidas como
            Topitop y H&M. Aunque aún está en proceso y tiene áreas de mejora
            pendientes, disfruté mucho desarrollarlo hasta donde he llegado.
            Utilicé tecnologías como React + Vite, junto con Node.js para crear
            mi propia API y mi base de datos con MySQL, la cual desplegué en
            Railway. Además, implementé Tailwind CSS y otras bibliotecas para
            mejorar la experiencia del usuario.
          </p>
        </div>
        <div className="group relative max-xl:my-auto shadow-md">
          <img
            src={ModaMarketProject}
            alt="ModaMarket - Yeissen Beckam"
            className="rounded-md group-hover:grayscale transition duration-500"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100  hover:backdrop-blur-sm hover:bg-[rgba(0,0,0,0.1)] transition-all duration-500 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-8 h-8 fill-slate-100 cursor-pointer"
            >
              <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
              <path
                fillRule="evenodd"
                d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModaMarket;
