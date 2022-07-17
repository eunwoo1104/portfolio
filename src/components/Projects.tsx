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
          key={projectItem.name}
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
        {projectData.url.map((projectUrl) => (
          <a
            href={projectUrl.value}
            target="_blank"
            rel="noopener noreferrer"
            key={projectUrl.value}
          >
            {"  "}
            {icons[projectUrl.id]}
          </a>
        ))}
      </h4>

      <p>{projectData.description}</p>
    </div>
  );
};
