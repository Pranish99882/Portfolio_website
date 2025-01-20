import React from "react";
import logo from "../assets/KevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-2 px-4 text-neutral-300">
      {/* Logo Section */}
      <div className="flex flex-shrink-0 items-center">
        <h1 className="mx-2 w-10 text-3xl font-bold text-cyan-400">Pranish</h1>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center justify-center gap-8 text-lg">
        <a href="#home" className="hover:text-cyan-400">
          Home
        </a>
        <a href="#about" className="hover:text-cyan-400">
          About
        </a>
        <a href="#technologies" className="hover:text-cyan-400">
          Technologies
        </a>
        <a href="#experience" className="hover:text-cyan-400">
          Experiences
        </a>
        <a href="#projects" className="hover:text-cyan-400">
          Projects
        </a>
        <a href="#contact" className="hover:text-cyan-400">
          Contact
        </a>
      </div>

      {/* Social Icons */}
      <div className="flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin className="hover:text-cyan-400 cursor-pointer" />
        <FaGithub className="hover:text-cyan-400 cursor-pointer" />
        <FaSquareXTwitter className="hover:text-cyan-400 cursor-pointer" />
        <FaInstagram className="hover:text-cyan-400 cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
