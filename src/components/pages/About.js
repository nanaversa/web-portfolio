import React from "react";
import "../common/Card.css";

function About() {
  return (
    <div className="about-div">
      <h1 className="about"></h1>

      <img
        src={require("../images/005.jpg")}
        alt="proof"
        width="50%"
        height="100%"
      />

      <div className="top-div">
        <img src={require("../images/pic1.jpg")} height="300px" alt="logo" />
      </div>
      <div className="down-div"></div>
    </div>
  );
}

export default About;
