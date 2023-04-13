import React from "react";
import Splidecar from "../components/Splide";
import Swiper from "../components/Swiper";
import Blog from "../components/Blog";
import Description from "../components/Description";
import Promo from "../components/Promo";
import Donnees from "../components/data/movies.json";

function Films() {
  return (
    <div>
      <Swiper />
      <Promo />
      <div className=" flex flex-wrap cols-3">
        {Donnees.map((carte, inx) => (
          <Blog
            Key={inx}
            Title={carte.Title}
            Genre={carte.Genre}
            Duree={carte.Duree}
            Year={carte.Year}
            Poster={carte.Poster}
            Plot={carte.Plot}
            Video={carte.Video}
            Rating={carte.Rating}
            Country={carte.Country}
            Language={carte.Language}
          />
        ))}
      </div>
      <Promo />
      <Splidecar />
      <Promo />
      <Description />
      <Promo />
    </div>
  );
}

export default Films;
