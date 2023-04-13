import React from "react";
import Donnees from "../components/data/movies.json";
import { Link } from "react-router-dom";

import pic1 from "../assets/10.jpg";

function Blog({ Title, Plot, Poster }) {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 flex f">
      <div className=" gap-5 flex lg:flex-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        <div className="card w-96 glass">
          <figure>
            <img src={Poster} alt="car!" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{Title}</h2>
            <p>{Plot}</p>
            <div className="card-actions justify-end">
              <Link to={`/Modele/${Title}`}>
                <button className="btn bg-red-600 btn hover:bg-yellow-400 hover:text-black">
                  Regarder
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
