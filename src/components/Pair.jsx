import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import contextApi from '../context/contextApi.js';

const Pair = () => {
  const context = useContext(contextApi);
  const { allbeers, beerpizza, beersteak } = context;
  return (
    <>
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link
            className="nav-link"
            to="#all"
            aria-current="page"
            onClick={allbeers}
          >
            Drinks paired with pizza
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#pizza" onClick={beerpizza}>
            Drinks paired with steak
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="steak" onClick={beersteak}>
            All drinks
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Pair;
