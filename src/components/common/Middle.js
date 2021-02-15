import React, { useState } from "react";
import {
  FaArrowCircleRight,
  FaArrowCircleLeft,
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaVoicemail,
} from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "./Card.css";

const imagesArrary = [
  require("../images/005.jpg"),
  require("../images/001.jpg"),
  require("../images/home.jpg"),
];

const data = [
  { id: 1, name: "banana" },
  { id: 2, name: "john" },
  { id: 3, name: "course" },
  { id: 4, name: "love" },
];

function Middle() {
  const [current, setCurrent] = useState(0);
  const [food, setFood] = useState(data);

  const imgLength = imagesArrary.length;

  const removeItem = (id) => {
    let newFood = food.filter((item) => item.id !== id);
    setFood(newFood);
  };

  const nextSlide = () => {
    setCurrent(current === imgLength - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? imgLength - 1 : current - 1);
  };

  return (
    <div className="top-wrapper">
      <div className="left">
        <h1 className="services">SERVICES</h1>

        {/* <h3 className="services-render-header">
          We render the following services...
        </h3> */}

        <div className="arrow-div">
          <FaArrowCircleLeft className="left-arrow" onClick={prevSlide} />
          <FaArrowCircleRight className="right-arrow" onClick={nextSlide} />
        </div>

        <div className="img-div">
          {imagesArrary.map((image, index) => (
            <div key={index}>
              {index === current && (
                <img alt="logo" src={image} className="img" />
              )}
            </div>
          ))}
        </div>

        {/* <button type="submit" className='btn-more-projects'>more projects</button> */}
      </div>
      <div className="right">
        <h1 className=""> CONTACT</h1>

        <div className="icon-bar">
          <li>
            <FaFacebook className="fa-icon" />
            <a href="#" className="icon-bar-margin">
              Facebook
            </a>
          </li>
        </div>

        <div className="icon-bar">
          <li>
            <FaTwitter className="fa-icon" />
            <a href="#" className="icon-bar-margin">
              Twitter
            </a>
          </li>
        </div>

        <div className="icon-bar">
          <li>
            <FaLinkedinIn className="fa-icon" />
            <a href="#" className="icon-bar-margin">
              LinkedIn
            </a>
          </li>
        </div>

        <div className="icon-bar">
          <li>
            <FaWhatsapp className="fa-icon" />
            <a href="#" className="icon-bar-margin">
              Whatsapp
            </a>
          </li>
        </div>

        <div className="icon-bar">
          <li>
            <FaVoicemail className="fa-icon" />
            <a href="#" className="icon-bar-margin ">
              Email
            </a>
          </li>
        </div>
        {/* <p>You can contact developer via these platforms...</p> */}
      </div>
    </div>
  );
}

export default Middle;
