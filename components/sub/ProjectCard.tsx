
import Image from "next/image";
import React from "react";

interface props {
  src: string;
  title: string;
  description: string;
  githubLink?: string;
  liveLink?: string;
}

const ProjectCard = ({
  src,
  title,
  description,
  githubLink,
  liveLink,
}: props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2AOE61] cursor-pointer ">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />
      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white ">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
        <div className="mt-4" >
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 cursor-pointer hover:text-white mr-4"
          >
            Live
          </a> 
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
