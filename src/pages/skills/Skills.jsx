import React, { useState } from "react";

//? ICONOS SVG FRONTED
import Html from "@frontend/html5.svg";
import Css from "@frontend/css3.svg";
// import javascript from "@frontend/javascript-rounded.svg";
import Javascript from "@frontend/javascript.svg";
import Reacticon from "@frontend/react.svg";
import Vite from "@frontend/vite.svg";
import Tailwind from "@frontend/tailwind.svg";
import Bootstrap from "@frontend/bootstrap.svg";

//? ICONOS SVG BACKEND
import Spring from "@backend/spring.svg";
import Java from "@backend/java.svg";
import Nodejs from "@backend/nodejs.svg";

//? ICONOS SVG BASE DE DATOS
import MySQL from "@db/mysql.svg";

import Learning from "./components/Learning";
import HrSeparator from "../../components/animated/HrSeparator";
import TecnologiaCard from "./components/TecnologiaCard";

const Skills = () => {
  const [likesHtml, setLikesHtml] = useState(10);
  const [likesCss, setLikesCss] = useState(8);
  const [likesJs, setLikesJs] = useState(5);
  const [likesReact, setLikesReact] = useState(13);
  const [likesTailwind, setLikesTailwind] = useState(31);
  return (
    <>
      <nav
        className="mt-8 max-md:mt-2"
        data-aos="fade-up"
        data-aos-duration="2300"
      >
        <h1 className="text-[#A9725C] font-bold text-6xl max-md:text-5xl merriweather-bold py-4 text-center">
          Habilidades
        </h1>
        <div className="mt-2 mx-auto flex flex-wrap items-center justify-center gap-6 max-w-screen-lg w-full">
          <TecnologiaCard
            nombre="HTML5"
            imagen={Html}
            likes={likesHtml}
            setLikes={setLikesHtml}
          />
          <TecnologiaCard
            nombre="CSS3"
            imagen={Css}
            likes={likesCss}
            setLikes={setLikesCss}
          />
          <TecnologiaCard
            nombre="Javascript"
            imagen={Javascript}
            likes={likesJs}
            setLikes={setLikesJs}
          />
          <TecnologiaCard
            nombre="NodeJS"
            imagen={Nodejs}
            likes={likesJs}
            setLikes={setLikesJs}
          />
          <TecnologiaCard
            nombre="React"
            imagen={Reacticon}
            likes={likesReact}
            setLikes={setLikesReact}
          />
          <TecnologiaCard
            nombre="Vite"
            imagen={Vite}
            likes={likesReact}
            setLikes={setLikesReact}
          />
          <TecnologiaCard
            nombre="Tailwind"
            imagen={Tailwind}
            likes={likesTailwind}
            setLikes={setLikesTailwind}
          />
          <TecnologiaCard
            nombre="Bootstrap"
            imagen={Bootstrap}
            likes={likesTailwind}
            setLikes={setLikesTailwind}
          />
          <TecnologiaCard
            nombre="Java"
            imagen={Java}
            likes={likesTailwind}
            setLikes={setLikesTailwind}
          />
          <TecnologiaCard
            nombre="Spring"
            imagen={Spring}
            likes={likesTailwind}
            setLikes={setLikesTailwind}
          />
          <TecnologiaCard
            nombre="MySQL"
            imagen={MySQL}
            likes={likesTailwind}
            setLikes={setLikesTailwind}
          />
        </div>
        <div className="md:my-10 my-6">
          <HrSeparator />
        </div>
      </nav>
      <div className="mb-8">
        <Learning />
      </div>
    </>
  );
};

export default Skills;
