import React from "react";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";
import { FaReact, FaGitAlt, FaSass } from "react-icons/fa";

function TechStack() {
  return (
    <div className="flex py-10 flex-wrap justify-center gap-4 md:gap-8 text-4xl md:text-5xl lg:text-6xl">
      <div className="h-10 w-10 flex justify-center items-center text-red-600 relative">
        {/* <div className="z-20 invisible group-hover:inline-block shadow-sm opacity-0 tooltip bg-red-600 font-semibold text-white text-sm px-2 py-1 rounded absolute -top-full left-1/2 transform -translate-x-1/2 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          HTML5
        </div> */}
        <SiHtml5 className="cursor-pointer hover:opacity-80" />
      </div>

      <div className="h-10 w-10 flex justify-center items-center text-blue-600">
        <SiCss3 className="cursor-pointer hover:opacity-80" />
      </div>
      <div className="h-10 w-10 flex justify-center items-center text-yellow-600">
        <SiJavascript className="cursor-pointer hover:opacity-80" />
      </div>
      <div className="h-10 w-10 flex justify-center items-center text-blue-600">
        <FaReact className="cursor-pointer hover:opacity-80" />
      </div>
      <div className="h-10 w-10 flex justify-center items-center text-purple-600">
        <SiRedux className="cursor-pointer hover:opacity-80" />
      </div>
      <div className="h-10 w-10 flex justify-center items-center text-cyan-600">
        <SiTailwindcss className="cursor-pointer hover:opacity-80" />
      </div>
      <div className="h-10 w-10 flex justify-center items-center text-pink-600">
        <FaSass className="cursor-pointer hover:opacity-80" />
      </div>
      <div className="h-10 w-10 flex justify-center items-center text-orange-600">
        <FaGitAlt className="cursor-pointer hover:opacity-80" />
      </div>
    </div>
  );
}

export default TechStack;
