import React from "react";
import "../../assets/styles/TipoGrafias.css";
import LogoHead from "../../assets/images/head/logo-header.svg";
import LogoNameHead from "../../assets/images/head/logo-name-header.svg";

const Home = () => {
  return (
    <div>
      <img src={LogoNameHead} alt="" className="w-[80px]" />
      <h1 className="text-[#A9725C] font-bold text-5xl raleway">
        Yeissen Macalupu
      </h1>
      <h1 className="text-[#A9725C] font-bold text-5xl merriweather-bold">
        Yeissen Macalupu
      </h1>
    </div>
  );
};

export default Home;
