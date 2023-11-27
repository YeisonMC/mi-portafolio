import React, { useState } from "react";
import "../styles/NavBarStyles.css";
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <NavLink to="/" className="nav-link">
            Inicio
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/proyectos" className="nav-link">
                  Proyectos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/educacion" className="nav-link">
                  Educacion
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/sobremi" className="nav-link">
                  SobreMi
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        {/* <button className="btn-dark-mode" onClick={toggleDarkMode}>
          {darkMode ? "Modo Claro" : "Modo Oscuro"}
        </button> */}
      </nav>
    </>
  );
};
