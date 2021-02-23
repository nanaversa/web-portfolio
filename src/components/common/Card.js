import React from "react";
import "./Card.css";

const Card = ({ title, image }) => {
  return (
    <>
      <h2>{title}</h2>

      <div className="card">
        <img src={image} width="50%" height="100%" />
      </div>
    </>
  );
};

export default Card;
