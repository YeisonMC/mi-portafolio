import Aos from "aos";
import React, { useEffect } from "react";
import bannerImage from "../images/bocchi.jpg";
import "aos/dist/aos.css";
import "../styles/HomeStyles.css";

export const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className="container">
        <div className="banner-container" data-aos="fade-up">
          <img src={bannerImage} alt="Banner" className="banner-image" />
          <div className="banner-content">
            <h1>Mi Portafolio</h1>
            <p>Bienvenido a mi espacio creativo</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea,
              omnis? Totam accusantium repudiandae ab sapiente, rem illo sunt.
              Error porro iusto quia quam, amet laborum praesentium architecto
              numquam dolorem similique?
            </p>
          </div>
        </div>
      </div>
      <div data-aos="zoom-out-right">
        <img src={bannerImage} alt="Banner" className="banner-image secon" />
      </div>
    </>
  );
};
