import React from 'react';
import { Link } from 'react-router-dom';

const Pair = () => {
  return (
    <>
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="#dsff">
            Drinks paired with pizza
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#sfgs">
            Drinks paired with steak
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="#dgdg">
            All drinks
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Pair;
