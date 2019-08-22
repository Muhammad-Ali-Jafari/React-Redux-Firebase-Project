import React from "react";
import ProjectSummary from "./ProjectSummary";

function ProjectLists() {
  return (
    <div className="project-list section">
      <p>Projects</p>
      <div className="z-depth-0 project-summary">
        <ProjectSummary />
        <ProjectSummary />
        <ProjectSummary />
        <ProjectSummary />
      </div>
    </div>
  );
}

export default ProjectLists;
