import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export const SobreMi = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <>
      <div className="container" data-aos="fade-up">
        <h1>Cerficaciones</h1>
        <hr className="border border-danger border-2" />
        <div className="contenido">
          <p>Certificado de Certus</p>
          <img
            src="https://media.licdn.com/dms/image/D4E2DAQGoIbkAsomDYg/profile-treasury-image-shrink_800_800/0/1699125013915?e=1703736000&v=beta&t=O7tRalJDZvsn76AnAlOBFKfIhOM7u869zMIBmwb31EY"
            alt="Certificado"
            className="img-fluid"
          />
        </div>
      </div>
    </>
  );
};
