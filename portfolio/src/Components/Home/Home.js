import React from "react";
import "./Home.css";


const Home = () => {
  return (
    <div>
      <div className="title">
        <h3>Home</h3>
      </div>
      <div className="container">
        
        {/* <div className="container-left"> */}
          <h2>Christopher Krieg</h2>
          <h3>Web Developer</h3>
        {/* </div>
        <div className="container-right"> */}
            <img src="./Chris uniform.jpeg" title="Chris Uniform Photo" />
        {/* </div> */}
      </div>
    </div>
  );
};

export default Home;
