import React from "react";
import Card from "../Card";

function Portfolio({projects}) {
  return (
    <div className="container">
      <h1 className="text-center">hello</h1>
      <div className ="row">
        {projects.map(project =>(
          <Card project={project}/>
        ))}

      </div>
    </div>
  );
}

export default Portfolio;
