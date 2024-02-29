import React from "react";

export const ATargetBlank = (props) => {
  return (
    <a
      target="_blank"
      className="flex gap-4 items-center cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black  py-2 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-300 hover:border-gray-800 hover:from-black hover:to-gray-900 px-4 transition ease-in-out max-md:mt-2"
      {...props}
    ></a>
  );
};
