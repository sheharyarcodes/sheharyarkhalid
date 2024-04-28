import React from "react";
import { Container } from "../../components";
import TechStack from "./child/TechStack";
import AboutCard from "./child/AboutCard";
import GitHub from "./child/GitHub";

function About() {
  return (
    <section id="about">
      <Container className="px-10 pt-28 max-w-[1200px]">
        <h2 className="text-center text-gray-900 font-bold text-3xl sm:text-6xl mb-8 md:mb-10">
          About Me
        </h2>
        <AboutCard />
        <TechStack />
        <GitHub />
      </Container>
    </section>
  );
}

export default About;
