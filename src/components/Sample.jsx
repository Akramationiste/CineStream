import React from "react";
import si from "../assets/14.jpg";
import { Link } from "react-router-dom";

function Sample({
  titre,
  Poster,
  Plot,
  Genre,
  Year,
  Country,
  Language,
  Duree,
  Video,
  Rating,
}) {
  return (
    <div>
      <div className="hero min-h-screen w-screen bg-base-200 overflow-hidden m-0">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={Poster} />
          <div>
            <h1 className="text-5xl font-bold">{titre}</h1>
            <p className="py-6">{Plot}</p>
            <Link>
              <button className="btn bg-red-600 btn hover:bg-yellow-400 hover:text-black">
                Regarder maintenant
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sample;
