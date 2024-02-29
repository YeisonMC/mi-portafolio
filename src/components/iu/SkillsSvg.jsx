import React from "react";

export const SkillsSvg = (props) => {
  return (
    // bg-slate-200
    <div
      className="rounded-full flex justify-center items-center gap-x-2 py-2 px-4 bg-slate-200 hover:scale-110
      hover:bg-[#F2C873]
       dark:hover:bg-white/10 transition"
      {...props}
    ></div>
  );
};
