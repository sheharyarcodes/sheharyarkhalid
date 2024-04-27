import React, { useState } from "react";
import { Logo, Container } from "../";
import { NavLink } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Header = () => {
  const [expand, setExpand] = useState(false);

  const items = [
    {
      name: "Home",
      icon: <AiOutlineHome />,
      to: "#home",
    },
    {
      name: "About",
      icon: <AiOutlineUser />,
      to: "#about",
    },
    {
      name: "Projects",
      icon: <AiOutlineFundProjectionScreen />,
      to: "#projects",
    },
  ];

  const toggleMenu = () => {
    setExpand(!expand);
  };

  return (
    <header className="fixed w-full z-40 bg-black">
      <Container>
        <nav className="relative flex justify-between items-center px-10 py-6">
          <Logo />
          <ul className="hidden md:flex items-center gap-6">
            {items.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.to}
                  className={`flex items-center text-gray-200 hover:text-gray-100 font-semibold gap-1 border-b-2 border-transparent hover:border-gray-100 transition-all`}
                >
                  <span className="text-sm">{item.icon}</span>
                  {item.name}
                </NavLink>
              </li>
            ))}
            <li className="ml-10">
              <a
                href="https://www.linkedin.com/in/sk11111"
                className="text-gray-200 hover:text-gray-100"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={20} />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/sheharyarcodes"
                className="text-gray-200 hover:text-gray-100"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={20} />
              </a>
            </li>
          </ul>

          {/* mobile navigation */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-900 rounded-lg bg-gray-100 focus:outline-none transition-colors duration-300"
            >
              <span className="sr-only">Open main menu</span>
              {!expand ? <IoMdMenu size="1.5em" /> : <RxCross2 size="1.5em" />}
            </button>
            <div
              className={`mobile-menu ${
                expand ? "block" : "hidden"
              } absolute z-50 top-full left-0 bg-black w-full md:hidden transition-all duration-300`}
            >
              <ul className="flex flex-col gap-2 items-center justify-center px-10 pb-4 ">
                {items.map((item) => (
                  <li key={item.name}>
                    <NavLink
                      to={item.to}
                      onClick={() => setExpand(false)}
                      className="text-gray-200 hover:text-gray-100 font-semibold flex items-center gap-1 border-b border-transparent hover:border-gray-100 transition-all duration-300"
                    >
                      <span className="text-sm">{item.icon}</span>
                      {item.name}
                    </NavLink>
                  </li>
                ))}
                <li className="flex gap-4 items-center my-2">
                  <a
                    href="https://www.linkedin.com/in/sk11111"
                    className="text-gray-200 hover:text-gray-100"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin size={20} />
                  </a>
                  <a
                    href="https://github.com/sheharyarcodes"
                    className="text-gray-200 hover:text-gray-100"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size={20} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
