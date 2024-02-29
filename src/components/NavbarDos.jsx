import React, { useState } from "react";
import "../assets/styles/navbar.css";

const NavbarDos = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <header className="absolute top-0 left-0 z-10 w-full py-6 px-4 sm:px-6 lg:px-8 max-md:py-8">
        <div className="flex items-center justify-center mx-10 max-md:mx-4 ">
          <input type="checkbox" id="check" className="hidden" />
          <label htmlFor="check" className="icons">
            <div
              className={`menu_btn flex flex-col cursor-pointer gap-2 ${
                menuOpen ? "open" : ""
              }`}
              onClick={toggleMenu}
            >
              <span className="line top_line"></span>
              <span className="line middle_line"></span>
              <span className="line bottom_line"></span>
            </div>
          </label>

          <ul className="flex gap-10 max-md:absolute max-md:top-full max-md:left-0 max-md:w-full max-md:bg-[rgba(0,0,0,.1)] max-md:backdrop-blur-lg max-md:block">
            <li className="max-md:mx-4 max-md:my-4">
              <a
                href="#"
                className="font-bold titulos text-white hover:text-[#FDCA65]"
              >
                Inicio
              </a>
            </li>
            <li className="max-md:mx-4 max-md:my-4">
              <a
                href="#proyectos"
                className="font-bold titulos text-white hover:text-[#FDCA65]"
              >
                Proyectos
              </a>
            </li>
            <li className="max-md:mx-4 max-md:my-4">
              <a
                href="#habilidades"
                className="font-bold titulos text-white hover:text-[#FDCA65]"
              >
                Habilidades
              </a>
            </li>
            <li className="max-md:mx-4 max-md:my-4">
              <a
                href="#contacto"
                className="font-bold titulos text-white hover:text-[#FDCA65]"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default NavbarDos;
