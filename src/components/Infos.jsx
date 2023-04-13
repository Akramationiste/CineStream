import React from "react";

import { Link } from "react-router-dom";

function Infos({
  titre,
  Actors,
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
      <div className="overflow-x-auto">
        <table className="table w-full">
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Titre</td>
              <td>{titre}</td>
            </tr>
            {/* row 2 */}
            <tr className="hover">
              <th>2</th>
              <td>Year</td>
              <td>{Year}</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>Genre</td>
              <td>{Genre}</td>
            </tr>
            {/* row 4 */}
            <tr>
              <th>4</th>
              <td>Country</td>
              <td>{Country}</td>
            </tr>
            {/* row 5 */}
            <tr>
              <th>5</th>
              <td>Language</td>
              <td>{Language}</td>
            </tr>
            {/* row 6 */}
            <tr>
              <th>6</th>
              <td>Durée</td>
              <td>{Duree}</td>
            </tr>

            {/* row 8 */}
            <tr>
              <th>8</th>
              <td>Rating</td>
              <td>{Rating}</td>
            </tr>
            {/* row 9 */}
            <tr>
              <th>9</th>
              <td>Actors</td>
              <td>{Actors}</td>
            </tr>
            {/* row 9 */}
            <tr>
              <th>9</th>
              <td>Trailer</td>
              <td><Link to={Video}/></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Infos;
