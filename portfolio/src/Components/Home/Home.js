import React from "react";
import "./Home.css";
import chris from '../images/Chris uniform.jpeg'


const Home = () => {
  return (
    <div>
      <div className="title">
        <h3>Home</h3>
      </div>
      <div className="container">
        
        <div className="container-left">
          <h2>Christopher Krieg</h2>
          <h3>Web Developer</h3>
        </div>
        <div className="container-right">
            <img src={chris} title="Chris Uniform Photo" alt="Chris in Navy Uniform"/>
        </div>
      </div>
    </div>
  );
};

export default Home;
