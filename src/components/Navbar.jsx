import React, { useState, useEffect } from "react";
import "../assets/styles/TipoGrafias.css";

export const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    } else {
      return "light";
    }
  });

  useEffect(() => {
    const htmlElement = document.querySelector("html");

    if (theme === "dark") {
      htmlElement.classList.add("dark");
    } else {
      htmlElement.classList.remove("dark");
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <>
      {/* <nav className="bg-gray-800 p-4 fixed top-0 w-full z-10"> */}
      <nav className="bg-white p-4 dark:bg-gray-900">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Komatsu_company_logos.svg/1024px-Komatsu_company_logos.svg.png"
              alt="Logo"
              className="h-12 w-18"
            />
          </div>

          <div className="hidden lg:flex space-x-4">
            <a href="#" className="text-black nav-link dark:text-white">
              Inicio
            </a>
            <a
              href="#proyectos"
              className="text-black nav-link dark:text-white"
            >
              Proyectos
            </a>
            <a href="#" className="text-black nav-link dark:text-white">
              Habilidades
            </a>
            <a href="#" className="text-black nav-link dark:text-white">
              Contacto
            </a>

            <label
              htmlFor="check"
              className="bg-slate-500 dark:bg-gray-100 cursor-pointer relative w-16 h-8 rounded-full"
            >
              <input
                onClick={handleTheme}
                type="checkbox"
                id="check"
                className="sr-only peer"
              />
              <span className="w-1/3 h-3/4 bg-gray-900 absolute rounded-full left-2 top-1 peer-checked:bg-[#DBC602] peer-checked:left-9 transition-all duration-500"></span>
            </label>

            {/* <div className="dark:bg-neutral-900">
              <button
                className="bg-slate-600 text-white  px-4 py-1 rounded hover:bg-slate-300 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
                onClick={handleTheme}
              >
                Modo oscuro
              </button>
            </div> */}
          </div>

          <div className="lg:hidden transition-all duration-300">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className={`h-6 w-6 transform ${
                  isMenuOpen ? "rotate-90" : ""
                } transition-all duration-300`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div
          className={` lg:hidden ${
            isMenuOpen ? "block" : "hidden"
          } bg-gray-800 p-4 `}
        >
          <a href="#ola" className="text-white block mb-2">
            Inicio
          </a>
          <a href="#proyectos" className="text-white block mb-2">
            Proyectos
          </a>
          <a href="#" className="text-white block mb-2">
            Habilidades
          </a>
          <a href="#" className="text-white block ">
            Contacto
          </a>
          <div className="">
            <button
              className="bg-slate-600 px-4 py-2 rounded hover:bg-slate-300 dark:bg-white dark:text-white dark:hover:bg-slate-800"
              onClick={handleTheme}
            >
              Modo oscuro
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};
