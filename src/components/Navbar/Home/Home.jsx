import React from 'react';
import avatarImg from "../../../assets/3d-cartoon-portrait-person-practicing-law-related-profession.png";

const Home = () => {
  return (
    <div className="text-white flex flex-col md:flex-row w-full justify-between items-center p-10 md:p-20 bg-[#26232311]">
      <div className="md:w-2/4 md:pt-10 text-center md:text-left">
        <h1 className="text-2xl md:text-4xl font-bold leading-normal tracking-tight animate-slide-in">Hello! I am Arbab</h1>
        <p className="text-base md:text-xl mt-4 md:mt-6 tracking-tight animate-fade-in">
          Hi! I am a passionate developer proficient in web development technologies and also have a learning curve towards technologies like machine learning and data science.
        </p>
        <button className="mt-5 md:mt-10 py-2 px-4 text-sm md:text-lg font-semibold rounded-lg bg-[#465697] text-white hover:opacity-85 hover:scale-105 transition-transform duration-300 animate-bounce">
          Contact Me
        </button>
      </div>
      <div className="mt-8 md:mt-0 animate-float">
        <img className="w-40 md:w-80 rounded-full shadow-lg transform transition-transform hover:scale-105 duration-300" src={avatarImg} alt="Arbab" />
      </div>
    </div>
  );
}

export default Home;
