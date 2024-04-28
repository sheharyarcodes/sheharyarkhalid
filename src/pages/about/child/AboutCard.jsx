import React from "react";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <blockquote className="blockquote text-gray-700 text-md md:text-md flex flex-col gap-2 text-justify font-semibold xl:px-40">
      <p className="text-lg self-center md:text-2xl">
        I am <span className="text-[#B968C7] font-bold">Sheharyar Khalid </span>
        from{" "}
        <span className="text-green-800 font-bold"> Punjab, Pakistan.</span>
      </p>
      <p className="">
        As a frontend developer, I am deeply passionate about crafting
        exceptional web experiences. I specialize in developing responsive
        websites meticulously designed for optimal performance and usability. My
        commitment lies in keeping abreast of the latest web technologies and
        adhering to industry best practices. I thrive in collaborative
        environments, where I can seamlessly collaborate with designers and
        fellow developers to bring concepts to fruition. If you're keen to learn
        more about my work, feel free to contact me on my{" "}
        <a
          href="https://www.linkedin.com/in/sk11111"
          className="text-[#B968C7] font-bold hover:text-black hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin
        </a>
        .
      </p>
    </blockquote>
  );
}

export default AboutCard;
