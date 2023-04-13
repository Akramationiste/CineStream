import React from "react";
import Sample from "../components/Sample";
import Promo from "../components/Promo";
import Infos from "../components/Infos";
import Etape from "../components/Etape";
import { useParams } from "react-router-dom";
import Datas from "../components/data/movies.json";

export default function Modele() {
  const parametre = useParams("Donnees");
  const Mag = Datas.filter((Movie) => Movie.titre === parametre.Movie);
  return (
    <div className="">
      <div className="flex flex-wrap w-100% justify-center">
        <Sample
          titre={Mag[0].Title}
          Poster={Mag[0].Poster}
          Genre={Mag[0].Genre}
          Plot={Mag[0].Plot}
          Year={Mag[0].Year}
          Language={Mag[0].Language}
        />
        <Promo />
        <Infos
          titre={Mag[0].Title}
          Genre={Mag[0].Genre}
          Country={Mag[0].Country}
          Actors={Mag[0].Actors}
          Year={Mag[0].Year}
          Language={Mag[0].Language}
          Duree={Mag[0].Duree}
          Rating={Mag[0].Rating}
          Video={Mag[0].Video}
        />
        <Promo />
        <Etape />
        <Promo />
      </div>
    </div>
  );
}
