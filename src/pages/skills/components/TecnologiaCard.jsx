import React, { useState } from "react";

const TecnologiaCard = ({ nombre, imagen, likes, setLikes }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setLikes((prevLikes) => (isLiked ? prevLikes - 1 : prevLikes + 1));
    setIsLiked(!isLiked);
  };

  return (
    // w-[150px]
    <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4 rounded-lg w-[150px] max-md:w-[170px]">
      <p className="text-center">{nombre}</p>
      <img src={imagen} alt={nombre} className="mt-1 w-20 mx-auto" />
      <div className="mt-1 flex justify-between items-center">
        <span className="text-sm">{likes} Me gusta</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className={`w-6 h-6 cursor-pointer stroke-gray-300 transition-all duration-500 ease-out ${
            isLiked ? "fill-red-500 stroke-red-500" : ""
          }`}
          onClick={handleLike}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default TecnologiaCard;
