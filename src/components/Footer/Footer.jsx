import React from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaFileAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <div id="Footer" className="bg-[#465697] text-white p-6 md:p-8 rounded-lg shadow-lg max-w-4xl mx-auto my-8 transition-transform transform hover:scale-105 duration-300">
      <div className="text-center mb-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 animate-pulse">Contact</h1>
        <h3 className="text-md md:text-lg font-light">
          Feel Free to Reach Out!
        </h3>
      </div>
      <ul className="space-y-4 text-center md:text-left text-sm md:text-lg">
        <li className="flex justify-center md:justify-start items-center gap-2 transform transition-transform hover:translate-x-2 duration-300">
          <MdOutlineEmail size={24} className="text-[#ffdf00]" />
          <span>arbabahmad4725@gmail.com</span>
        </li>
        <li className="flex justify-center md:justify-start items-center gap-2 transform transition-transform hover:translate-x-2 duration-300">
          <a href="https://www.linkedin.com/in/mohd-arbab" className="flex items-center gap-2 hover:underline">
            <CiLinkedin size={24} className="text-[#0e76a8]" />
            <span>LinkedIn</span>
          </a>
        </li>
        <li className="flex justify-center md:justify-start items-center gap-2 transform transition-transform hover:translate-x-2 duration-300">
          <a href="https://www.github.com/Arbab990" className="flex items-center gap-2 hover:underline">
            <FaGithub size={24} className="text-[#333]" />
            <span>My Github</span>
          </a>
        </li>
        <li className="flex justify-center md:justify-start items-center gap-2 transform transition-transform hover:translate-x-2 duration-300">
          <a href="https://drive.google.com/file/d/1O2oDKK40tjzEz9fK6RjbG-2Dzc3sJiu4/view?usp=sharing" className="flex items-center gap-2 hover:underline">
            <FaFileAlt size={24} className="text-[#ff4c4c]" />
            <span>My Resume</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;

