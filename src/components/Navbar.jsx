import { Link } from "react-router-dom";
import Dark from "./Dark";

export default function Navbar() {
  return (
    <div className="navbar m-0 overflow-hidden w-100%">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52"
          >
            <li>
              <Link to="/Films">Films</Link>
            </li>
            <li>
              <Link to="/Films">Séries</Link>
            </li>
            <li>
              <Link to="/Films">Podcasts</Link>
            </li>
            <li>
              <Link to="/Films">Documentaires</Link>
            </li>
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost normal-case text-xl">
          CineStream
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu gap-3 menu-horizontal px-1 normal-case text-xl">
          <li className="text-decoration-none">
            <Link to="/Films">Films</Link>
          </li>
          <li>
            <Link to="/Films">Séries</Link>
          </li>
          <li>
            <Link to="/Films">Podcasts</Link>
          </li>
          <li>
            <Link to="/Films">Documentaires</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-red-600 btn hover:bg-yellow-400 hover:text-black">
        <Dark />
        </a>
      </div>
    </div>
  );
}
