import React from "react";

function ProjectDetails(props) {
  const id = props.match.params.id;

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi ab
            a aliquam, similique adipisci perferendis! Cumque, suscipit nam quia
            totam magni illum quasi adipisci fugit enim deserunt eius sequi
            magnam.
          </p>
        </div>
        <div className="card-action lighten-4 grey-text">
          <div>Posted by JJ coding Style</div>
          <div>2nd September, 2am</div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
