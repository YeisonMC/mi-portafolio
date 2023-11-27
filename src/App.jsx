import React from "react";
import { NavBar } from "./components/NavBar";
import { Proyectos } from "./components/Proyectos";
import { SobreMi } from "./components/SobreMi";
import { Educacion } from "./components/Educacion";
import { Home } from "./components/Home";
import { Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/proyectos" element={<Proyectos></Proyectos>}></Route>
        <Route path="/educacion" element={<Educacion></Educacion>}></Route>
        <Route path="/sobremi" element={<SobreMi></SobreMi>}></Route>
      </Routes>
    </>
  );
};
