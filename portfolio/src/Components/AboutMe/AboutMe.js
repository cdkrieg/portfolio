import React from "react";
import './AboutMe.css'
import wolf from '../images/wolf face.png'

const AboutMe = () => {
  return (
    <div>
      <div className="title">
        <h3>About Me</h3>
      </div>
      <div className="container">
      <img src={wolf} title="Wolf Picture" alt="wolf face"/>
        <ul>
          <li>
            <h3>Retired Navy Veteran</h3>
          </li>
          <li>
            <h3>Proud Father</h3>
          </li>
          <li>
            <h3>Graduate of DevCodeCamp MERN Bootcamp</h3>
          </li>
          <br />
          <li>
            <h3>JavaScript, Node.JS, React.JS, Express.JS</h3>
          </li>
          <li>
            <h3>HTML, CSS, MongoDB, MySQL</h3>
          </li>
          <br />
          <li>
            <h3>Passionate about coding! </h3>
          </li>
          <li>
            <h3>I do what I love and love what I do!</h3>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
