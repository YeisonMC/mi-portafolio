import React from "react";

//? ICONOS SVG FRONTED
import Angular from "@frontend/angular.svg";
import TypeScript from "@frontend/typescript.svg";
import NextJS from "@frontend/nextjs.svg";
import Figma from "@frontend/figma.svg";

import TecnologiaNotLoveCard from "./TecnologiaNotLoveCard";

const Learning = () => {
  return (
    // 1200
    <nav data-aos="fade-up" data-aos-duration="2300">
      <h1 className="text-[#A9725C] font-bold text-6xl max-md:text-5xl merriweather-bold py-4 max-md:pt-0 text-center">
        Aprendiendo
      </h1>
      <div className="mt-2 mx-auto flex flex-wrap items-center justify-center gap-6 max-w-screen-lg w-full">
        <TecnologiaNotLoveCard nombre="Angular" imagen={Angular} />
        <TecnologiaNotLoveCard nombre="TypeScript" imagen={TypeScript} />
        <TecnologiaNotLoveCard nombre="NextJS" imagen={NextJS} />
        <TecnologiaNotLoveCard nombre="Figma" imagen={Figma} />
      </div>
    </nav>
  );
};

export default Learning;
