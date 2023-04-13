import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import mem from "../assets/interstellar.jpg";
import nen from "../assets/batman.jpg";
import lel from "../assets/venom.jpg";
import pep from "../assets/john-wick.jpg";

function Slider() {
  return (
    <div>
      <AwesomeSlider>
      <div className="hero min-h-screen bg-none hero-overlay">
        <img className="w-screen" src={mem}></img>
        <div className="hero-overlay  "></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">The interstellar est sur le top du box office</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="bg-red-600 btn hover:bg-yellow-400 hover:text-black">
              Regarder
            </button>
          </div>
        </div>
      </div>

      <div className="hero min-h-screen hero-overlay  bg-bulea">
        <img className="w-screen" src={nen}></img>
        <div className="hero-overlay "></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Gotham a encore besoin de lui !</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="bg-red-600 btn hover:bg-yellow-400 hover:text-black">
              Regarder
            </button>
          </div>
        </div>
      </div>

      <div className="hero min-h-screen hero-overlay  bg-bulea">
        <img className="w-screen" src={lel}></img>
        <div className="hero-overlay "></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Venom est maintenant sur terre, what's next ?</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="bg-red-600 btn hover:bg-yellow-400 hover:text-black">
              Regarder
            </button>
          </div>
        </div>
      </div>

      <div className="hero min-h-screen hero-overlay  bg-bulea">
        <img className="w-screen" src={pep}></img>
        <div className="hero-overlay "></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Tout le monde veut se débarasser de john wick, va t-il survivre ?</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="bg-red-600 btn hover:bg-yellow-400 hover:text-black">
              Regarder
            </button>
          </div>
        </div>
      </div>
      </AwesomeSlider>
    </div>
  );
}

export default Slider;
