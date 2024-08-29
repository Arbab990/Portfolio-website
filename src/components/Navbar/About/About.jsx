import React from 'react';
import AboutImg from "../../../assets/pic2.png";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div  id="About" className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-x1 mx-0 md:mx-20 bg-opacity-30 rounded-lg p-8 md:p-6 transition-transform transform hover:scale-105 duration-300" style={{ maxWidth: '800px', margin: 'auto' }}>
      <div>
        <h2 className="text-3xl font-bold text-center my-8 animate-pulse">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-64 rounded-lg shadow-lg transition-opacity duration-500 hover:opacity-80" src={AboutImg} alt="About" />

          <ul className="space-y-6 mt-6 md:mt-0 md:ml-8">
            <li className="flex gap-3 items-center animate-fade-in">
              <IoArrowForward size={30} className="text-[#ffdf00]" />
              <span className="w-80 transition-transform hover:translate-x-2 duration-300">
                <h1 className="text-xl md:text-2xl font-semibold">Frontend Developer</h1>
                <p className="text-sm md:text-md leading-tight">
                  As a frontend developer, I specialize in crafting seamless user experiences with clean and efficient code. My expertise lies in HTML, CSS, and JavaScript, where I transform design concepts into responsive, interactive web interfaces. With React.js, I build dynamic, component-based applications that are both powerful and scalable, ensuring that every project I work on is not only functional but also visually appealing.
                </p>
              </span>
            </li>

            <li className="flex gap-3 items-center animate-fade-in">
              <IoArrowForward size={30} className="text-[#0e76a8]" />
              <span className="w-80 transition-transform hover:translate-x-2 duration-300">
                <h1 className="text-xl md:text-2xl font-semibold">Backend Developer</h1>
                <p className="text-sm md:text-md leading-tight">
                  As a backend developer, I specialize in creating robust and scalable server-side applications that power the functionality of web and mobile experiences. My expertise lies in Python, Flask, and SQLAlchemy, where I design and maintain databases, implement APIs, and ensure smooth communication between the frontend and backend. I also specialize in the Node.js framework.
                </p>
              </span>
            </li>

            <li className="flex gap-3 items-center animate-fade-in">
              <IoArrowForward size={30} className="text-[#ff4c4c]" />
              <span className="w-80 transition-transform hover:translate-x-2 duration-300">
                <h1 className="text-xl md:text-2xl font-semibold">Machine Learning Enthusiast</h1>
                <p className="text-sm md:text-md leading-tight">
                  As a machine learning enthusiast, I am passionate about harnessing the power of data to build intelligent systems that learn and adapt over time. My journey in machine learning involves exploring algorithms, data preprocessing, and model development to extract insights and drive decision-making.
                </p>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
