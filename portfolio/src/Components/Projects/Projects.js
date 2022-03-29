import React from "react";

const Projects = () => {
  return (
    <div>
      <div className="title">
        <h3>MyProjects</h3>
      </div>
      <div className="container">
        <div className="cont-project-1">
          <h3>Day Trip Planner</h3>
          <br />
          <a href="https://github.com/cdkrieg/Daytripplanner.git">
            View on GitHub
          </a>
          <h4>JavaScript</h4>
          <h4>Solo Project</h4>
        </div>
        <div className="cont-project-2">
          <h3>Most Wanted</h3>
          <br />
          <a href="https://github.com/cdkrieg/MostWanted.git">View on GitHub</a>
          <h4>JavaScript</h4>
          <h4>Collaborative Project with Pedro Delgadillo</h4>
        </div>
        <div className="cont-project-3">
          <h3>ATM</h3>
          <br />
          <a href="https://github.com/cdkrieg/ATM_PROJECT.git">
            View on GitHub
          </a>
          <h4>JavaScript</h4>
          <h4>Solo Project</h4>
        </div>
        <div className="cont-project-4">
          <h3>Rock, Paper, Scissors, Lizard, Spock</h3>
          <br />
          <a href="https://github.com/n-roberge/rpsls_JS.git">View on GitHub</a>
          <h4>JavaScript</h4>
          <h4>Collaborative Project with Nick Robege</h4>
        </div>
      </div>
    </div>
  );
};

export default Projects;
