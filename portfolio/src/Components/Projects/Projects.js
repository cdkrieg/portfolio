import React from "react";
import "./Projects.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Projects = () => {
  return (
    <div>
      <div className="title">
        <h3>MyProjects</h3>
      </div>
      <div className="container">
        <div className="containerProject">
          <div className="row gy-5">
            <div className="col-sm">
              <h3>Day Trip Planner</h3>
              <br />
              <a href="https://github.com/cdkrieg/Daytripplanner.git">
                View on GitHub
              </a>
              <h4>JavaScript</h4>
              <h6>Solo Project</h6>
            </div>
            <div className="col-sm">
              <h3>Most Wanted</h3>
              <br />
              <a href="https://github.com/cdkrieg/MostWanted.git">
                View on GitHub
              </a>
              <h4>JavaScript</h4>
              <h6>Collaborative Project with Pedro Delgadillo</h6>
            </div>
            <div className="col-sm">
              <h3>ATM</h3>
              <br />
              <a href="https://github.com/cdkrieg/ATM_PROJECT.git">
                View on GitHub
              </a>
              <h4>JavaScript</h4>
              <h6>Solo Project</h6>
            </div>
            <div className="col-sm">
              <h3>RPSLS</h3>
              <br />
              <a href="https://github.com/n-roberge/rpsls_JS.git">
                View on GitHub
              </a>
              <h4>JavaScript</h4>
              <h6>Collaborative Project with Nick Robege</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
