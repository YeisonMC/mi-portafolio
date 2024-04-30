import React from "react";

const TecnologiaNotLoveCard = ({ nombre, imagen }) => {
  return (
    <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4 rounded-lg w-[150px] max-md:w-[160px]">
      <p className="text-center">{nombre}</p>
      <img src={imagen} alt={nombre} className="mt-1 w-20 mx-auto" />
    </div>
  );
};

export default TecnologiaNotLoveCard;
