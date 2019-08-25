import React from "react";
import ProjectSummary from "./ProjectSummary";

function ProjectLists({ projects }) {
  return (
    <div className="project-list section">
      <p>Projects</p>
      <div className="z-depth-0 project-summary">
        {projects &&
          projects.map(project => {
            return <ProjectSummary project={project} key={project.id} />;
          })}
      </div>
    </div>
  );
}

export default ProjectLists;
