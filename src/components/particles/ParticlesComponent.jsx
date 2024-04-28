import React from "react";
import Particles from "@tsparticles/react";
import particlesOptions from "./particles.json";

const ParticlesComponent = ({ init }) => {
  return (
    <>{init && <Particles id="tsparticles" options={particlesOptions} />}</>
  );
};

export default ParticlesComponent;
