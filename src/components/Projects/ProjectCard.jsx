import React from 'react';
import bannerImg from "../../assets/414x364-7.jpg";

const ProjectCard = ({ title, main,sourceCodeLink, demoLink }) => {
  return (
    <div className="p-3 md:p-6 flex flex-col w-80 bg-[#272c2f] shadow-xl shadow-slate-900 rounded-2xl">
      <img className="p-4 rounded-md" src={bannerImg} alt="Project Banner" />
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
        {title}
      </h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2 h-24"> {/* Set a consistent height */}
        {main}
      </p>
      <div className="mt-auto p-2 md:p-4 flex gap-2 md:gap-4 justify-center"> 
        {demoLink && (
            <a href={demoLink} target="_blank" rel="noopener noreferrer">
        
                <button className="text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
                    Demo
                </button>
            </a>
        )}
        {sourceCodeLink && (
          <a href={sourceCodeLink} target="_blank" rel="noopener noreferrer">
            <button className="text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
              Source code
            </button>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
