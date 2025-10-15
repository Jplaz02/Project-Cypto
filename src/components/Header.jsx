import React from "react";
import logo from "../assets/crypto.png";
import { FaGithub } from "react-icons/fa";

export const Header = () => {
  return (
    <div className="text-white bg-[#0A0D1C] flex items-center p-3 justify-between">
      <div className="flex items-center">
        <img className="w-1- h-10" src={logo} alt="logo" />
        <h1 className="text-2xl font-jura font-bold p-2">Project Crypto</h1>
      </div>
      <div>
        <a
          href="https://github.com/Jplaz02"
          className="text-3xl flex mr-3 cursor-pointer text-gray-400 hover:text-white"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
};
