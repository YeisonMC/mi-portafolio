import React, { useState } from "react";
import Perfil1 from "@perfil/perfil-1.jpeg";
import Perfil2 from "@perfil/perfil-2.jpeg";
import "../../assets/styles/animated/hoverImage.css";
import HrSeparator from "../../components/animated/HrSeparator";

const About = () => {
  // const [imageHover, setImageHover] = useState(Perfil1);

  return (
    <>
      <nav
        className="mt-8 max-md:mt-2"
        data-aos="fade-up"
        data-aos-duration="2300"
      >
        <h1 className="text-[#A9725C] font-bold text-6xl max-md:text-5xl merriweather-bold py-4 text-center">
          Sobre mi
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 my-4 gap-10">
          <div className="px-4 m-auto max-md:px-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quo
            fuga recusandae optio qui neque expedita, consectetur, voluptates
            tenetur, quisquam vel doloremque dignissimos quas voluptatum.
            Excepturi quo necessitatibus labore voluptatibus! Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Soluta quo fuga recusandae
            optio qui neque expedita, consectetur, voluptates tenetur, quisquam
            vel doloremque dignissimos quas voluptatum. Excepturi quo
            necessitatibus labore voluptatibus! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Soluta quo fuga recusandae optio qui
            neque expedita, consectetur, voluptates tenetur, quisquam vel
            doloremque dignissimos quas voluptatum. Excepturi quo necessitatibus
            labore voluptatibus! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Soluta quo fuga recusandae optio qui neque
            expedita, consectetur, voluptates tenetur, quisquam vel doloremque
            dignissimos quas voluptatum. Excepturi quo necessitatibus labore
            voluptatibus! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Soluta quo fuga recusandae optio qui neque expedita,
            consectetur, voluptates tenetur, quisquam vel doloremque dignissimos
            quas voluptatum. Excepturi quo necessitatibus labore voluptatibus!
          </div>
          <div className="m-auto">
            {/* <img
              className="w-[400px]"
              src={imageHover}
              alt="Perfil - Yeissen Beckam"
              onMouseOver={() => setImageHover(Perfil2)}
              onMouseOut={() => setImageHover(Perfil1)}
            /> */}
            {/* <img
              className="w-[400px]"
              src={Perfil1}
              alt="Perfil1 - Yeissen Beckam"
            /> */}
            <img
              className="w-[400px]"
              src={Perfil2}
              alt="Perfil2 - Yeissen Beckam"
            />
          </div>
        </div>
        <div className="my-4">
          <HrSeparator />
        </div>
      </nav>
    </>
  );
};

export default About;
