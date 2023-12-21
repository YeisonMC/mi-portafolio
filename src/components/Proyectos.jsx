import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../styles/ProyectosStyles.css";

export const Proyectos = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <>
      <div className="container" data-aos="fade-up">
        <h1>Proyectos</h1>
        <hr className="border border-danger border-2" />
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card h-100">
              <img
                src="https://kom.pe/wp-content/uploads/2021/06/villa-chicken-polleria-las-mejores-paginas-web-en-peru-por-rubros-diseno-seo-.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Pagina web de Villa Chiken</h5>
                <p class="card-text">
                  Desarrollada principalmente para poder mostrar a los usuarios
                  lo que puede ofrecer la pollera Villa Chiken junto a sus
                  promociones
                </p>
                <div className="d-flex">
                  <p className="herramientas">React</p>
                  <p className="herramientas ms-2">NodeJS</p>
                  <p className="herramientas ms-2">MySQL</p>
                </div>
                <div className="d-flex">
                  <button className="btn btn-primary">Code</button>
                  <button className="btn btn-success ms-3">Web</button>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a short card.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
