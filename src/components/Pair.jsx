import React, { useContext } from "react";
import { Link } from "react-router-dom";
import contextApi from "../context/contextApi.js";

const Pair = () => {
  const context = useContext(contextApi);
  const { allbeer, beerpizza, beersteak } = context;
  return (
    <>
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link
            className="nav-link"
            to="/pizza"
            aria-current="page"
            onClick={beerpizza}
          >
            Drinks paired with pizza
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/steak" onClick={beersteak}>
            Drinks paired with steak
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/" onClick={allbeer}>
            All drinks
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Pair;
