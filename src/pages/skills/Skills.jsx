import React, { useState } from "react";

//? ICONOS SVG FRONTED
import Html from "@frontend/html5.svg";
import Css from "@frontend/css3.svg";
// import javascript from "@frontend/javascript-rounded.svg";
import Javascript from "@frontend/javascript.svg";
import Reacticon from "@frontend/react.svg";
import Vite from "@frontend/vite.svg";
import Tailwind from "@frontend/tailwind.svg";
// import Figma from "@frontend/figma.svg";
import GitHub from "@frontend/github.svg";
// import Bootstrap from "@frontend/bootstrap.svg";

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
  const [likesNodeJS, setLikesNodeJS] = useState(14);
  const [likesReact, setLikesReact] = useState(13);
  const [likesVite, setLikesVite] = useState(20);
  const [likesTailwind, setLikesTailwind] = useState(31);
  const [likesGitHub, setGitHub] = useState(41);
  // const [likesFigma, setFigma] = useState(25);
  // const [likesBootstrap, setLikesBootstrap] = useState(40);
  const [likesJava, setLikesJava] = useState(48);
  const [likesSpring, setLikesSpring] = useState(28);
  const [likesMySQL, setLikesMySQL] = useState(18);
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
            nombre="GitHub"
            imagen={GitHub}
            likes={likesGitHub}
            setLikes={setGitHub}
          />
          <TecnologiaCard
            nombre="NodeJS"
            imagen={Nodejs}
            likes={likesNodeJS}
            setLikes={setLikesNodeJS}
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
            likes={likesVite}
            setLikes={setLikesVite}
          />
          <TecnologiaCard
            nombre="Tailwind"
            imagen={Tailwind}
            likes={likesTailwind}
            setLikes={setLikesTailwind}
          />
          {/* <TecnologiaCard
            nombre="Bootstrap"
            imagen={Bootstrap}
            likes={likesBootstrap}
            setLikes={setLikesBootstrap}
          /> */}
          <TecnologiaCard
            nombre="Java"
            imagen={Java}
            likes={likesJava}
            setLikes={setLikesJava}
          />
          <TecnologiaCard
            nombre="Spring"
            imagen={Spring}
            likes={likesSpring}
            setLikes={setLikesSpring}
          />
          <TecnologiaCard
            nombre="MySQL"
            imagen={MySQL}
            likes={likesMySQL}
            setLikes={setLikesMySQL}
          />
          {/* <TecnologiaCard
            nombre="Figma"
            imagen={Figma}
            likes={likesFigma}
            setLikes={setFigma}
          /> */}
        </div>
        <div className="md:my-10 my-6">
          <HrSeparator />
        </div>
      </nav>
      <div className="mb-14 max-md:8">
        <Learning />
      </div>
    </>
  );
};

export default Skills;
