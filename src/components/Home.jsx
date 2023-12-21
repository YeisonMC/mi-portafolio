import Aos from "aos";
import React, { useEffect } from "react";
import bannerImage from "../images/bocchi.jpg";
import "aos/dist/aos.css";
import "../styles/HomeStyles.css";
import "../styles/TipoGrafias.css";

export const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1900 });
  }, []);

  return (
    <>
      <section className="container" data-aos="fade-up">
        <div className="banner-container">
          <img src={bannerImage} alt="Banner" className="banner-image" />
          <div className="banner-content">
            <h1>Mi Portafolio</h1>
            <p>Bienvenido a mi espacio creativo</p>
            <p className="letra-lato ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea,
              omnis? Totam accusantium repudiandae ab sapiente, rem illo sunt.
              Error porro iusto quia quam, amet laborum praesentium architecto
              numquam dolorem similique?
            </p>
            <a
              href="/CV%20-%20YEISSEN%20-%20DESARROLLADOR.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Descargar CV
            </a>
          </div>
        </div>
        <nav className="container-nav-grid-wrap">
          <div className="d-flex justify-content-center">
            <a className="botton-conocimientos"> Conocimientos</a>
          </div>
          <div className="d-flex justify-content-center">
            <div className="container-card-wrap">
              <div className="card-block">
                <img
                  src="https://desarrolloweb.com/storage/tag_images/actual/n3m2Az0VWHFdb4ng3q9JbDrbCjar8hE7K0SV7M8n.png"
                  alt=""
                  className="card-img"
                />
                <div className="card-text">
                  <h3>React</h3>
                  <p>Texto descriptivo para el primer bloque.</p>
                </div>
              </div>
              <div className="card-block">
                <img
                  src="https://4.bp.blogspot.com/-ou-a_Aa1t7A/W6IhNc3Q0gI/AAAAAAAAD6Y/pwh44arKiuM_NBqB1H7Pz4-7QhUxAgZkACLcBGAs/s1600/spring-boot-logo.png"
                  alt="Imagen 2"
                  className="card-img"
                />
                <div className="card-text">
                  <h3>Spring Boot</h3>
                  <p>Texto descriptivo para el segundo bloque.</p>
                </div>
              </div>
              <div className="card-block">
                <img
                  src="https://www.fusionia.jp/wp-content/uploads/2018/06/node-js-736399_960_720.png"
                  alt="Imagen 2"
                  className="card-img"
                />
                <div className="card-text">
                  <h3>Node JS</h3>
                  <p>Texto descriptivo para el tercer bloque sin imagen.</p>
                </div>
              </div>
              <div className="card-block">
                <img
                  src="https://cdn.icon-icons.com/icons2/2699/PNG/512/java_logo_icon_168609.png"
                  alt="Imagen 2"
                  className="card-img"
                />
                <div className="card-text">
                  <h3>Java</h3>
                  <p>Texto descriptivo para el tercer bloque sin imagen.</p>
                </div>
              </div>
              <div className="card-block">
                <img
                  src="https://seeklogo.com/images/B/bootstrap-logo-69A1CCC10B-seeklogo.com.png"
                  alt="Imagen 2"
                  className="card-img"
                />
                <br />
                <br />
                <div className="card-text">
                  <h3>Bootstrap</h3>
                  <p>Texto descriptivo para el tercer bloque sin imagen.</p>
                </div>
              </div>
              <div className="card-block">
                <img
                  src="https://emaillistvalidation.com/blog/content/images/2023/10/JavaScript-Symbol-1.png"
                  alt="Imagen 2"
                  className="card-img"
                />
                <div className="card-text">
                  <h3>JavaScript</h3>
                  <p>Texto descriptivo para el tercer bloque sin imagen.</p>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <h1>hasta aca estamos bien xd</h1>
      </section>
      {/* <div data-aos="zoom-out-right">
        <img src={bannerImage} alt="Banner" className="banner-image secon" />
      </div> */}
    </>
  );
};
