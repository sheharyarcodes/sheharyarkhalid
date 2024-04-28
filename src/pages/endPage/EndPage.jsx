import React from "react";
import { Button } from "../../components";

const EndPage = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="flex flex-col items-center gap-10 text-center font-semibold w-full py-10">
      Thanks for exploring my portfolio___😊
      <Button
        textSize="text-xs md:text-lg"
        bgColor="bg-black"
        textColor="text-white"
        hoverColors="hover:bg-gray-900"
        onClick={scrollToTop}
      >
        Scroll To Top
      </Button>
    </div>
  );
};

export default EndPage;
