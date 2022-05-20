import React from "react";
import { project, projects, icons } from "../constants";

export const Projects: React.FC = () => {
  return (
    <div className="Projects">
      <h2>프로젝트</h2>
      {projects.map((projectItem) => (
        <ProjectItem
          name={projectItem.name}
          url={projectItem.url}
          description={projectItem.description}
          key={projectItem.url.value}
        />
      ))}
    </div>
  );
};

const ProjectItem: React.FC<project> = (projectData: project) => {
  return (
    <div className="ProjectItem">
      <h4>
        {projectData.name}
        <a
          href={projectData.url.value}
          target="_blank"
          rel="noopener noreferrer"
        >
          {"  "}
          {icons[projectData.url.id]}
        </a>
      </h4>

      <p>{projectData.description}</p>
    </div>
  );
};
