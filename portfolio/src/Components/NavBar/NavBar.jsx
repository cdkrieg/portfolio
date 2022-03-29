import "../../App";
import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const navbar = () => {
  return (
    <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
      <div className="container">
        {/* <div class="navbar-header"></div> */}
          {/* <ul className="nav"> */}
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to=".../AboutMe/AboutMe.js">About Me</Link>
            </li>
            <li>
              <Link to=".../Projects/Projects.js">Projects</Link>
            </li>
            <li>
              <Link to=".../Contact/Contact.js">Say Hello!</Link>
            </li>
          {/* </ul> */}
        </div>
    
    </nav>
  );
};

export default navbar;
