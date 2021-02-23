import React from "react";
import "../common/Card.css";

function About() {
  return (
    <div className="about-div">
      <div className="left">
        <img
          src={require("../images/pic2.jpg")}
          alt="proof"
          className="pic-2"
        />
        <div className="auto-div">
          <p className="autograph">
            My name is Osei Sarfo Iganatius and I am a Software Developer. I am
            an Information Technology Student at the University of Professional
            Studies, Accra. I am currently in level 400
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
