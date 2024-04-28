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
      <div className="group relative h-10 w-10 flex justify-center items-center text-red-600">
        <span className="group-hover:opacity-100 select-none font-semibold pointer-events-none whitespace-nowrap transition-opacity bg-red-600 px-2 py-1 text-sm text-white rounded absolute left-1/2 -top-12 -translate-x-1/2 opacity-0 m-4 mx-auto">
          HTML5
        </span>
        <SiHtml5 className="cursor-pointer hover:opacity-80" />
      </div>

      <div className="group relative h-10 w-10 flex justify-center items-center text-blue-600">
        <span className="group-hover:opacity-100 select-none font-semibold pointer-events-none whitespace-nowrap transition-opacity bg-blue-600 px-2 py-1 text-sm text-white rounded absolute left-1/2 -top-12 -translate-x-1/2 opacity-0 m-4 mx-auto">
          CSS3
        </span>
        <SiCss3 className="cursor-pointer hover:opacity-80" />
      </div>

      <div className="group relative h-10 w-10 flex justify-center items-center text-yellow-600">
        <span className="group-hover:opacity-100 select-none font-semibold pointer-events-none whitespace-nowrap transition-opacity bg-yellow-600 px-2 py-1 text-sm text-white rounded absolute left-1/2 -top-12 -translate-x-1/2 opacity-0 m-4 mx-auto">
          JavaScript
        </span>
        <SiJavascript className="cursor-pointer hover:opacity-80" />
      </div>

      <div className="group relative h-10 w-10 flex justify-center items-center text-blue-600">
        <span className="group-hover:opacity-100 select-none font-semibold pointer-events-none whitespace-nowrap transition-opacity bg-blue-600 px-2 py-1 text-sm text-white rounded absolute left-1/2 -top-12 -translate-x-1/2 opacity-0 m-4 mx-auto">
          React
        </span>
        <FaReact className="cursor-pointer hover:opacity-80" />
      </div>

      <div className="group relative h-10 w-10 flex justify-center items-center text-purple-600">
        <span className="group-hover:opacity-100 select-none font-semibold pointer-events-none whitespace-nowrap transition-opacity bg-purple-600 px-2 py-1 text-sm text-white rounded absolute left-1/2 -top-12 -translate-x-1/2 opacity-0 m-4 mx-auto">
          Redux
        </span>
        <SiRedux className="cursor-pointer hover:opacity-80" />
      </div>

      <div className="group relative h-10 w-10 flex justify-center items-center text-cyan-600">
        <span className="group-hover:opacity-100 select-none font-semibold pointer-events-none whitespace-nowrap transition-opacity bg-cyan-600 px-2 py-1 text-sm text-white rounded absolute left-1/2 -top-12 -translate-x-1/2 opacity-0 m-4 mx-auto">
          Tailwind CSS
        </span>
        <SiTailwindcss className="cursor-pointer hover:opacity-80" />
      </div>

      <div className="group relative h-10 w-10 flex justify-center items-center text-pink-600">
        <span className="group-hover:opacity-100 select-none font-semibold pointer-events-none whitespace-nowrap transition-opacity bg-pink-600 px-2 py-1 text-sm text-white rounded absolute left-1/2 -top-12 -translate-x-1/2 opacity-0 m-4 mx-auto">
          Sass
        </span>
        <FaSass className="cursor-pointer hover:opacity-80" />
      </div>

      <div className="group relative h-10 w-10 flex justify-center items-center text-orange-600">
        <span className="group-hover:opacity-100 select-none font-semibold pointer-events-none whitespace-nowrap transition-opacity bg-orange-600 px-2 py-1 text-sm text-white rounded absolute left-1/2 -top-12 -translate-x-1/2 opacity-0 m-4 mx-auto">
          Git
        </span>
        <FaGitAlt className="cursor-pointer hover:opacity-80" />
      </div>
    </div>
  );
}

export default TechStack;
