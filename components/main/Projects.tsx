import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 ">
        <ProjectCard
          src="/diagram.png"
          title="Diagram"
          description="Create Engineering Diagrams and Workflows"
          liveLink="https://github.com"
        />
        <ProjectCard
          src="/talkitout.png"
          title="TalkItOut"
          description="Private Chat Application for anyone around the World"
        />
        <ProjectCard
          src="/youtoob.png"
          title="Youtoob"
          description="Youtube, But's Ads free experience"
        />
        <ProjectCard
          src="/basket.png"
          title="Basket"
          description="Mobile responsive Admin dashboard "
        />
        <ProjectCard
          src="/diagram.png"
          title="Diagram"
          description="Create Engineering Diagrams and Workflows"
        />
      </div>
    </div>
  );
};

export default Projects;
