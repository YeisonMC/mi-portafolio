import React, { useState } from "react";
import "../../assets/styles/navbar2.css";
import "../../assets/styles/TipoGrafias.css";
import LogoNameHead from "../../assets/images/head/logo-name-header.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="px-4 shadow-[rgba(0,_0,_0,_0.10)_0px_2px_10px]">
      <div className=" flex justify-between items-center max-w-screen-2xl w-full mx-auto py-5">
        <div className="hidden md:flex md:items-center md:gap-6">
          <a href="#features" className="hover:text-[#A9725C] raleway">
            Inicio
          </a>
          <a href="#pricing" className="hover:text-[#A9725C] raleway">
            Proyectos
          </a>
          <a href="#about" className="hover:text-[#A9725C] raleway">
            Habilidades
          </a>
          <a href="#about" className="hover:text-[#A9725C] raleway">
            Contacto
          </a>
        </div>

        <img src={LogoNameHead} alt="" className="w-[80px]" />

        <div className="flex items-center gap-3">
          <a className="hover:-translate-y-1 transition duration-300" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.6em"
              height="1.6m"
              viewBox="0 0 256 250"
            >
              <path
                fill="#161614"
                d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46c6.397 1.185 8.746-2.777 8.746-6.158c0-3.052-.12-13.135-.174-23.83c-35.61 7.742-43.124-15.103-43.124-15.103c-5.823-14.795-14.213-18.73-14.213-18.73c-11.613-7.944.876-7.78.876-7.78c12.853.902 19.621 13.19 19.621 13.19c11.417 19.568 29.945 13.911 37.249 10.64c1.149-8.272 4.466-13.92 8.127-17.116c-28.431-3.236-58.318-14.212-58.318-63.258c0-13.975 5-25.394 13.188-34.358c-1.329-3.224-5.71-16.242 1.24-33.874c0 0 10.749-3.44 35.21 13.121c10.21-2.836 21.16-4.258 32.038-4.307c10.878.049 21.837 1.47 32.066 4.307c24.431-16.56 35.165-13.12 35.165-13.12c6.967 17.63 2.584 30.65 1.255 33.873c8.207 8.964 13.173 20.383 13.173 34.358c0 49.163-29.944 59.988-58.447 63.157c4.591 3.972 8.682 11.762 8.682 23.704c0 17.126-.148 30.91-.148 35.126c0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002C256 57.307 198.691 0 128.001 0m-80.06 182.34c-.282.636-1.283.827-2.194.39c-.929-.417-1.45-1.284-1.15-1.922c.276-.655 1.279-.838 2.205-.399c.93.418 1.46 1.293 1.139 1.931m6.296 5.618c-.61.566-1.804.303-2.614-.591c-.837-.892-.994-2.086-.375-2.66c.63-.566 1.787-.301 2.626.591c.838.903 1 2.088.363 2.66m4.32 7.188c-.785.545-2.067.034-2.86-1.104c-.784-1.138-.784-2.503.017-3.05c.795-.547 2.058-.055 2.861 1.075c.782 1.157.782 2.522-.019 3.08m7.304 8.325c-.701.774-2.196.566-3.29-.49c-1.119-1.032-1.43-2.496-.726-3.27c.71-.776 2.213-.558 3.315.49c1.11 1.03 1.45 2.505.701 3.27m9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033c-1.448-.439-2.395-1.613-2.103-2.626c.301-1.01 1.747-1.484 3.207-1.028c1.446.436 2.396 1.602 2.095 2.622m10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95c-1.53.034-2.769-.82-2.786-1.86c0-1.065 1.202-1.932 2.733-1.958c1.522-.03 2.768.818 2.768 1.868m10.555-.405c.182 1.03-.875 2.088-2.387 2.37c-1.485.271-2.861-.365-3.05-1.386c-.184-1.056.893-2.114 2.376-2.387c1.514-.263 2.868.356 3.061 1.403"
              />
            </svg>
          </a>
          <a className="hover:-translate-y-1 transition duration-300" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.6em"
              height="1.6em"
              viewBox="0 0 256 256"
            >
              <g fill="none">
                <rect width="256" height="256" fill="#fff" rx="60" />
                <rect width="256" height="256" fill="#0a66c2" rx="60" />
                <path
                  fill="#fff"
                  d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4M38 59.628c0 11.864 9.767 21.626 21.632 21.626c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627m6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4"
                />
              </g>
            </svg>
          </a>

          <a className="hover:-translate-y-1 transition duration-300" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="1.3em"
              viewBox="0 0 256 180"
            >
              <path
                fill="#f00"
                d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134"
              />
              <path
                fill="#fff"
                d="m102.421 128.06l66.328-38.418l-66.328-38.418z"
              />
            </svg>
          </a>

          <a className="hover:-translate-y-1 transition duration-300" href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.4em"
              height="1.4em"
              viewBox="0 0 256 256"
            >
              <g fill="none">
                <rect
                  width="256"
                  height="256"
                  fill="url(#skillIconsInstagram0)"
                  rx="60"
                />
                <rect
                  width="256"
                  height="256"
                  fill="url(#skillIconsInstagram1)"
                  rx="60"
                />
                <path
                  fill="#fff"
                  d="M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396c0 26.688-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413c0-26.704.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5c3.5-3.5 6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355c0 28.361 22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334c-18.41 0-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334"
                />
                <defs>
                  <radialGradient
                    id="skillIconsInstagram0"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="matrix(0 -253.715 235.975 0 68 275.717)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#fd5" />
                    <stop offset=".1" stop-color="#fd5" />
                    <stop offset=".5" stop-color="#ff543e" />
                    <stop offset="1" stop-color="#c837ab" />
                  </radialGradient>
                  <radialGradient
                    id="skillIconsInstagram1"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="matrix(22.25952 111.2061 -458.39518 91.75449 -42.881 18.441)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#3771c8" />
                    <stop offset=".128" stop-color="#3771c8" />
                    <stop offset="1" stop-color="#60f" stop-opacity="0" />
                  </radialGradient>
                </defs>
              </g>
            </svg>
          </a>
        </div>
        <div className="-mr-2 flex items-center md:hidden">
          <input type="checkbox" id="check" className="hidden" />
          <label htmlFor="check" className="icons">
            <div
              className={`menu_btn flex flex-col cursor-pointer gap-2 ${
                isOpen ? "open" : ""
              }`}
              onClick={toggleNavbar}
            >
              <span className="line top_line"></span>
              <span className="line middle_line"></span>
              <span className="line bottom_line"></span>
            </div>
          </label>
        </div>
      </div>

      <div
        className={`md:hidden  overflow-hidden transition-all duration-700 ease-in-out ${
          isOpen ? "max-h-[300px]" : "max-h-0"
        } `}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 inline-block">
          <a
            href="#features"
            className="text-gray-300 hover:bg-[#e54246] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Mujer
          </a>
          <a
            href="#pricing"
            className="text-gray-300 hover:bg-[#e54246] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Precios
          </a>
          <a
            href="#about"
            className="text-gray-300 hover:bg-[#e54246] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Acerca de
          </a>
          <a
            href="#login"
            className="text-gray-300 hover:bg-[#e54246] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Iniciar sesión
          </a>
          <a
            href="#signup"
            className="text-gray-300 hover:bg-[#e54246] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Registrarse
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
