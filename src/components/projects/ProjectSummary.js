import React from "react";

function ProjectSummary({ project }) {
  return (
    <div>
      <div className="card grey-text text-darken-3">
        <div className="card-content">
          <span className="card-title">{project.title}</span>
          <p>Posted by JJ coding STYLE</p>
          <p className="grey-text">3rd september, 2am</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectSummary;
