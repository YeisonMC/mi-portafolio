import React from "react";
import { Card } from "../components/iu/card/Card";
// import Autocine from "../assets/images/proyects/Autocine-Arnolds.jpeg";
import AutocineArnolds from "../assets/images/proyects/AutoCineArnolds.jpeg";
// import SistemaDeRegistro from "../assets/images/proyects/SistemaDeRegistro.jpeg";
import SistemaDeRegistros from "../assets/images/proyects/SistemaDeRegistros.jpeg";
import { ContentCard } from "../components/iu/card/ContentCard";
import { EndCard } from "../components/iu/card/EndCard";

export const Proyects = () => {
  return (
    <>
      <nav className="mt-96" id="proyectos">
        <div className="">
          <h2 className="titulos">Proyectos</h2>
          <hr className="border-t-2 border-green-500 w-16" />
          <br />
          <div className="flex flex-wrap gap-7 md:justify-start justify-center">
            <Card>
              <img
                className="w-full"
                src={AutocineArnolds}
                alt="Sunset in the mountains"
              />
              <ContentCard>
                <div className="font-bold text-xl mb-2">Autocine Arnolds</div>
                <p className="text-gray-700 text-base">
                  Proyecto de Autocine, desarrollado con Java, Spring Boot,
                  MySQL y Bootstrap, destacando CRUD/MVC, autenticación Spring
                  Security, validaciones, manejo de errores y utilización de
                  APIs para una experiencia completa y segura.
                </p>
              </ContentCard>
              <EndCard>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #java
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #spring
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #mysql
                </span>
              </EndCard>
            </Card>
            <Card>
              <img
                className="w-full "
                src={SistemaDeRegistros}
                alt="Sunset in the mountains"
              />
              <ContentCard>
                <div className="font-bold text-xl mb-2">
                  Sistema de Registro de Clientes
                </div>
                <p className="text-gray-700 text-base">
                  Sistema creado con Node.js (backend), React (frontend) y
                  SQLite (base de datos). Permite registrar clientes, visualizar
                  hasta 10 registros en la página de inicio con paginación,
                  búsqueda por nombre, y emplea tecnologías como AOS y AXIOS.
                </p>
              </ContentCard>
              <EndCard>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #React
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #NodeJS
                </span>
              </EndCard>
            </Card>
          </div>
        </div>
      </nav>
    </>
  );
};
