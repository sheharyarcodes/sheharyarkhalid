import React from "react";
import { CgWebsite } from "react-icons/cg";
import { FaCode } from "react-icons/fa";
import { Button } from "../../../components";

function ProjectCards(props) {
  const handleClick = (type) => {
    if (type === "github") {
      window.open(props.githubLink, "_blank");
    } else if (type === "demo") {
      window.open(props.demoLink, "_blank");
    }
  };

  return (
    <div
      className={`max-w-[950px] shadow-md shadow-black bg-black border-2 border-black px-2 py-2 rounded flex flex-col gap-4 ${
        props.isFlexReverse ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div className="w-full md:w-2/3 rounded overflow-hidden">
        <img
          className="w-full h-full object-contain"
          src={props.imgPath}
          alt="card-img"
        />
      </div>
      <div className="flex flex-col justify-between gap-4 md:w-1/3 md:px-4">
        <div className="text-justify px-2 lg:py-4">
          <h4 className="text-left font-bold lg:text-2xl lg:mb-2 text-white">
            {props.title}.
          </h4>
          <p className="text-xs text-gray-300 md:text-sm">
            {props.description.slice(0, 160)}...
          </p>
        </div>
        <div className="flex gap-2 items-center justify-evenly">
          <Button
            width="min-w-24 w-fit lg:min-w-32"
            textSize="text-xs md:text-lg"
            bgColor="bg-white"
            textColor="text-black"
            hoverColors="hover:bg-gray-300"
            onClick={() => handleClick("github")}
          >
            <FaCode /> Code
          </Button>
          <Button
            width="min-w-24 w-fit lg:min-w-32"
            textSize="text-xs md:text-lg"
            bgColor="bg-white"
            textColor="text-black"
            hoverColors="hover:bg-gray-300"
            onClick={() => handleClick("demo")}
          >
            <CgWebsite /> Demo
          </Button>
        </div>
      </div>
    </div>
  );
}
export default ProjectCards;
