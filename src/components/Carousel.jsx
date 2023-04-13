import React from "react";
import uno from "../assets/24.jpg";
import dos from "../assets/23.jpg";
import tres from "../assets/22.jpg";
import quatro from "../assets/21.jpg";
import cinqo from "../assets/20.jpg";
import six from "../assets/19.jpg";
import sept from "../assets/18.jpg";

function Carousel() {
  return (
    <div>
      <div className=" text-center text-3xl font-bold">
        Notre séléction du moment
        <br />
        <br />
      </div>
      <div className="carousel carousel-end rounded-box">
        <div className="carousel-item">
          <img src={uno} alt="Drink" />
        </div>
        <div className="carousel-item">
          <img src={dos} alt="Drink" />
        </div>
        <div className="carousel-item">
          <img src={tres} alt="Drink" />
        </div>
        <div className="carousel-item">
          <img src={quatro} alt="Drink" />
        </div>
        <div className="carousel-item">
          <img src={cinqo} alt="Drink" />
        </div>
        <div className="carousel-item">
          <img src={six} alt="Drink" />
        </div>
        <div className="carousel-item">
          <img src={sept} alt="Drink" />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
