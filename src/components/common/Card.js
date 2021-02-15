import React from "react";
import './Card.css'

const Card = ({title, image}) => {
  return (
    <>
      <h2>{title}</h2>

      <div className="card">
          <img src={image} width="20%" height="20rem" />
      </div>

    </>
  );
};

export default Card;
