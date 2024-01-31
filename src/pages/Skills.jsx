import React from "react";
import { SkillsSvg } from "../components/iu/SkillsSvg";
import Spring from "../assets/images/spring.svg";
import Bootstrap from "../assets/images/bootstrap.svg";
import Nodejs from "../assets/images/nodejs.svg";
import Java from "../assets/images/java.svg";
import Flutter from "../assets/images/flutter.svg";
import Mongodb from "../assets/images/mongodb.svg";
import Mysql from "../assets/images/mysql.svg";
import Html from "../assets/images/frontend/html5.svg";
import Css from "../assets/images/frontend/css3.svg";
import Reacticon from "../assets/images/frontend/react.svg";

export const Skills = () => {
  return (
    <>
      <nav className="">
        <h2 className="titulos">Habilidades</h2>
        <hr className="border-t-2 border-green-500  w-16" />
        <br />
        <div className="flex flex-wrap  gap-y-4 gap-x-4 ">
          <SkillsSvg>
            <img src={Html} alt="Spring Logo" />
            HTML
          </SkillsSvg>
          <SkillsSvg>
            <img src={Css} alt="Spring Logo" />
            CSS
          </SkillsSvg>

          <SkillsSvg>
            <svg
              className="size-4 md:size-6"
              xmlns="http://www.w3.org/2000/svg"
              width="2500"
              height="2500"
              viewBox="0 0 1052 1052"
            >
              <path fill="#f0db4f" d="M0 0h1052v1052H0z"></path>
              <path
                d="M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z"
                fill="#323330"
              ></path>
            </svg>
            JavaScript
          </SkillsSvg>
          <SkillsSvg>
            <img src={Reacticon} alt="Spring Logo" />
            React
          </SkillsSvg>

          <SkillsSvg>
            <svg
              className="size-4 md:size-6"
              viewBox="0 0 256 154"
              width="256"
              height="154"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid"
            >
              <defs>
                <linearGradient
                  x1="-2.778%"
                  y1="32%"
                  x2="100%"
                  y2="67.556%"
                  id="a"
                >
                  <stop stopColor="#2298BD" offset="0%"></stop>
                  <stop stopColor="#0ED7B5" offset="100%"></stop>
                </linearGradient>
              </defs>
              <path
                d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0ZM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8Z"
                fill="url(#a)"
              ></path>
            </svg>
            Tailwind
          </SkillsSvg>

          <SkillsSvg>
            <img src={Spring} alt="Spring Logo" />
            Spring
          </SkillsSvg>
          <SkillsSvg>
            <img src={Bootstrap} alt="Spring Logo" />
            Bootstrap
          </SkillsSvg>
          <SkillsSvg>
            <img src={Nodejs} alt="Spring Logo" />
            NodeJS
          </SkillsSvg>
          <SkillsSvg>
            <img src={Java} alt="Spring Logo" />
            Java
          </SkillsSvg>
          <SkillsSvg>
            <img src={Flutter} alt="Spring Logo" />
            Flutter
          </SkillsSvg>
          <SkillsSvg>
            <img src={Mongodb} alt="Spring Logo" />
            Mongodb
          </SkillsSvg>
          <SkillsSvg>
            <img src={Mysql} alt="Spring Logo" />
            MySQL
          </SkillsSvg>
        </div>
      </nav>
    </>
  );
};
