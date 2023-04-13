import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Imo from "../assets/1.jpg";
import mm from "../assets/2.jpg";
import nn from "../assets/3.jpg";
import pp from "../assets/4.jpg";
import ll from "../assets/9.jpg";
import kk from "../assets/6.jpg";
import cc from "../assets/8.jpg";

// Default theme
// import '@splidejs/react-splide/css';

// // or other themes
// import '@splidejs/react-splide/css/skyblue';
import "@splidejs/react-splide/css/sea-green";

// // or only core styles
// import '@splidejs/react-splide/css/core';

function Splidecar() {
  return (
    <div className="carousel overflow-x-auto flex gap-10 flex-row mt-8 rounded-full">
      <div className="carousel-item ">
        <img className= "" src={Imo} alt="Burger" />
      </div>
      <div className="carousel-item">
        <img src={mm} alt="Burger" />
      </div>
      <div className="carousel-item">
        <img src={nn} alt="Burger" />
      </div>
      <div className="carousel-item">
        <img src={ll} alt="Burger" />
      </div>
      <div className="carousel-item">
        <img src={pp} alt="Burger" />
      </div>
      <div className="carousel-item">
        <img src={kk} alt="Burger" />
      </div>
      <div className="carousel-item">
        <img src={cc} alt="Burger" />
      </div>
    </div>

    // <div className="flex gap-8 flex-col p-8 bg-black" >
    //   <Splide aria-label="My Favorite Images" options={{}}>
    //     <SplideSlide>
    //       <img className= "" src={Imo} alt="Image 1" />
    //     </SplideSlide>
    //     <SplideSlide>
    //       <img className= "" src={Imo} alt="Image 2" />
    //     </SplideSlide>
    //     <SplideSlide>
    //       <img className= "" src={Imo} alt="Image 2" />
    //     </SplideSlide>
    //     <SplideSlide>
    //       <img className= "" src={Imo} alt="Image 2" />
    //     </SplideSlide>
    //   </Splide>
    // </div>
  );
}

export default Splidecar;
