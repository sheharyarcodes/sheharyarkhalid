import React from "react";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
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
      className={`max-w-[950px] shadow-md shadow-gray-700 bg-white border-2 border-gray-700 px-2 py-2 rounded flex flex-col gap-4 ${
        props.isFlexReverse ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div className="w-full md:w-2/3 border-2 border-gray-700 rounded overflow-hidden">
        <img
          className="w-full h-full object-contain"
          src={props.imgPath}
          alt="card-img"
        />
      </div>
      <div className="flex flex-col justify-between gap-4 md:w-1/3 md:px-4">
        <div className="text-justify px-2 lg:py-4">
          <h4 className="text-left font-bold lg:text-2xl lg:mb-2 text-gray-800">
            {props.title}.
          </h4>
          <p className="text-xs text-gray-700 md:text-sm">
            {props.description.slice(0, 160)}...
          </p>
        </div>
        <div className="flex gap-2 items-center justify-evenly">
          <Button
            width="min-w-24 w-fit lg:min-w-32"
            textSize="text-xs md:text-lg "
            bgColor="bg-black"
            hoverColors="hover:bg-gray-800"
            onClick={() => handleClick("github")}
          >
            <BsGithub /> GitHub
          </Button>
          <Button
            width="min-w-24 w-fit lg:min-w-32"
            textSize="text-xs md:text-lg"
            bgColor="bg-black"
            hoverColors="hover:bg-gray-800"
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
