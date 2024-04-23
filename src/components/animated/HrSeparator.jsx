import React, { useState, useEffect } from "react";

const HrSeparator = () => {
  const [expand, setExpand] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setExpand(true);
    }, 300);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="relative w-full h-[6px]">
      <hr
        className={`absolute top-0 h-full bg-[#A9725C] transition-all duration-1000 ${
          expand ? "left-0 w-full" : "left-1/2 w-0"
        }`}
      />
    </div>
  );
};

export default HrSeparator;
