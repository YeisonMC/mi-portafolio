import React from "react";
import Home from "./pages/home/Home";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <section className="max-w-screen-2xl w-11/12 mx-auto mt-10">
        <Home />
      </section>
    </>
  );
};

export default App;
