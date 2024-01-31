import React from "react";
import { Home } from "./pages/Home";
import { Skills } from "./pages/Skills";
import { Proyects } from "./pages/Proyects";
import { Contact } from "./pages/Contact";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";

export const App = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#f5f5f5]">
        <section className="max-w-5xl w-11/12 mx-auto ">
          <Home />
          <Proyects />
          <br />
          <Skills />
          <br />
          <Contact />
          <br />
        </section>
      </div>
      <Footer />
    </>
  );
};
