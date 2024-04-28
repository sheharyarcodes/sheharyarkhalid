import React from "react";
import heroBannerSVG from "../../assets/heroBanner.svg";
import { TypeWriter, Button, Container } from "../../components";
import { FaTelegramPlane } from "react-icons/fa";

function Home() {
  const handleEmailClick = () => {
    window.open("mailto:sheharyarkhalid.me@gmail.com", "_blank");
  };

  return (
    <section id="home">
      <Container className="px-10 pt-32 md:pt-40 text-gray-800 flex flex-col md:flex-row gap-20">
        <div className="w-full md:w-1/2 xl:pl-40 lg:pt-20 flex flex-col justify-center md:justify-start text-xl font-bold">
          <h1 className="text-3xl lg:text-6xl">
            <div className="flex items-center">
              Hi There!
              <span className="lg:text-5xl origin-bottom-right animate-[wave_2.1s_infinite]">
                👋
              </span>
            </div>

            <div className="flex flex-col">
              I'm a
              <span className="text-[#B968C7] text-xl lg:text-4xl select-none">
                <TypeWriter />
              </span>
            </div>
          </h1>

          <Button className="mt-4 lg:mt-8" onClick={handleEmailClick}>
            <FaTelegramPlane />
            Hire Me!
          </Button>
        </div>

        <div className="w-full md:w-1/2 overflow-hidden select-none">
          <img
            src={heroBannerSVG}
            alt="home-pic"
            className="w-full h-full object-contain"
          />
        </div>
      </Container>
    </section>
  );
}

export default Home;
