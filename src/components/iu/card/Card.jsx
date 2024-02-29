import React from "react";

export const Card = (props) => {
  return (
    <div
      className="max-w-80 max-md:max-w-96 rounded-lg overflow-hidden shadow-lg hover:scale-105 duration-500 ease-out bg-slate-200"
      {...props}
    ></div>
    //   <div
    //   className="max-w-80 max-md:max-w-96 rounded-lg overflow-hidden shadow-lg hover:scale-105 duration-500 ease-out"
    //   {...props}
    // ></div>
  );
};
