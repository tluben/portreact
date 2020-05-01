import React from "react";
import Card from "../Card";

const cardstyle = {
  border: "15px"
}

function Portfolio({projects}) {
  return (
    <div className="container className-centered">
      <h1 className="text-center">Teddy's Portfolio</h1>
      <div style={cardstyle} className ="row">
        {projects.map(project =>(
          <Card project={project}/>
        ))}

      </div>
    </div>
  );
}

export default Portfolio;
