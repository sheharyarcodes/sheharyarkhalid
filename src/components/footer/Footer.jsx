import React from "react";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Logo, Container } from "../";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <Container className="flex flex-col md:flex-row md:justify-between gap-4 px-10 py-6">
        <div className="flex gap-4 justify-between items-center">
          <div>
            <Logo size="text-md" />
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://www.linkedin.com/in/sk11111"
              className="text-blue-400 hover:text-blue-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://github.com/sheharyarcodes"
              className="text-blue-400 hover:text-blue-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>

        <div className="text-xs">
          <p>
            Designed & Developed by{" "}
            <span className="text-blue-400">@sheharyarkhalid</span>
          </p>
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );

  // <h3>Designed and Developed by Soumyajit Behera</h3>

  // <h3>Copyright © {year} SB</h3>

  // <ul className="footer-icons">
  //   <li className="social-icons">
  //     <a
  //       href="https://github.com/soumyajit4419"
  //       style={{ color: "white" }}
  //       target="_blank"
  //       rel="noopener noreferrer"
  //     >
  //       <AiFillGithub />
  //     </a>
  //   </li>
  //   <li className="social-icons">
  //     <a
  //       href="https://twitter.com/Soumyajit4419"
  //       style={{ color: "white" }}
  //       target="_blank"
  //       rel="noopener noreferrer"
  //     >
  //       <AiOutlineTwitter />
  //     </a>
  //   </li>
  //   <li className="social-icons">
  //     <a
  //       href="https://www.linkedin.com/in/soumyajit4419/"
  //       style={{ color: "white" }}
  //       target="_blank"
  //       rel="noopener noreferrer"
  //     >
  //       <FaLinkedinIn />
  //     </a>
  //   </li>
  //   <li className="social-icons">
  //     <a
  //       href="https://www.instagram.com/soumyajit4419"
  //       style={{ color: "white" }}
  //       target="_blank"
  //       rel="noopener noreferrer"
  //     >
  //       <AiFillInstagram />
  //     </a>
  //   </li>
  // </ul>
}

export default Footer;
