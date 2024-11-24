import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
        <h1 className="text-2x1 md:text-4x1 text-white font-bold">Projects</h1>
        <div className="py-12 px-8 flex flex-wrap gap-5">
            <ProjectCard title="PixelScribe" main="this is a blogging website created with Flask framework" sourceCodeLink="https://github.com/Arbab990/PixelScribe" demoLink="https://pixelscribe2-3.onrender.com/"/>
            <ProjectCard title="Mobile Store website" main="this is a e-commerce mobile store website created with react in frontend and Flask in backend. it also has a chatbot created with pytorch."  demoLink="https://arbab990.github.io/Sun-Business-Mobile-Store/"
                sourceCodeLink="https://github.com/Arbab990/Sun-Business-Mobile-Store"
            />
            <ProjectCard title="FinSmart" main="A modern finance tracker with a AI finance Advisor powered by Gemini "  demoLink="https://fin-smart-app.vercel.app/"
                sourceCodeLink="https://github.com/FinSmart-App"
            />
        </div>
    </div>
  )
}

export default Projects