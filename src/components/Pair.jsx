import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import contexts from "../context/contexts.js";

const Pair = () => {
  const context = useContext(contexts);
  const { allbeer, beerpizza, beersteak } = context;
  return (
    <>
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/pizza"
            aria-current="page"
            onClick={beerpizza}
          >
            Drinks paired with pizza
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/steak" onClick={beersteak}>
            Drinks paired with steak
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/" onClick={allbeer}>
            All drinks
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Pair;
