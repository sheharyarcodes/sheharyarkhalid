import React from "react";

const Button = ({
  width = "min-w-28 w-fit",
  padding = "px-5 py-2",
  textSize = "text-sm lg:text-lg ",
  textColor = "text-white",
  bgColor = "bg-[#B968C7]",
  hoverColors = "hover:bg-[#c657d9]",
  rounded = "rounded",
  className = "",
  children,
  onClick,
  props,
}) => {
  return (
    <button
      type="button"
      className={`flex justify-center items-center gap-2 font-semibold ${width} ${padding} ${textSize} ${textColor} ${bgColor} ${hoverColors} ${rounded} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
