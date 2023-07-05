import React from "react";
import { IProject } from "../../interfaces/data";

type ProjectCardProps = {
  project: IProject;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="border p-4 border-gray-200 dark:border-gray-600 rounded-md duration-200 hover:shadow">
      <div className="bg-gray-100 overflow-hidden dark:bg-gray-700 rounded-md h-[315px] mb-4 relative flex items-center justify-center">
        {project.image ? (
          <img src={project.image} className="object-contain" loading="lazy" />
        ) : (
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Image is not availabe. Maybe this is a backend project or private
            project.
          </p>
        )}
      </div>

      <h2 className="text-lg font-semibold mb-1">{project.title}</h2>
      <p className="text-xs font-semibold text-blue-900 dark:text-blue-400 mb-1">
        {project.duration}
      </p>
      <p className="text-gray-600 text-sm dark:text-gray-300">
        {project.description}
      </p>
      <hr className="dark:border-gray-600 my-2" />
      <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
        Tech stacks:{" "}
      </p>
      <div className="flex flex-wrap">
        {project.stacks.map((stack, index) => {
          return (
            <div
              className="px-2 py-1 m-1 rounded-md text-xs bg-gray-200 dark:bg-gray-700"
              key={index}
            >
              {stack}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectCard;
