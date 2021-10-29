import React, { useContext } from 'react';
import contextApi from '../context/contextApi.js';

const Sort = () => {
  const context = useContext(contextApi);
  const { sortBeerNameAsc, sortBeerNameDes, sortBeerAbvAsc, sortBeerAbvDes } =
    context;
  return (
    <div className="container mt-5">
       <select
        className="form-select w-25 text-white-50"
        style={{ backgroundColor: '#313131',cursor:"pointer"}}
        aria-label="Default select example"
        defaultValue="0"
      >
        <option value="1">Sort By</option>
        <option value="2" onClick={sortBeerAbvAsc}>
          Abv : Low
        </option>
        <option value="3" onClick={sortBeerAbvDes}>
          Abv : High
        </option>
        <option value="4" onClick={sortBeerNameAsc}>
          Name : A-Z
        </option>
        <option value="5" onClick={sortBeerNameDes}>
          Name : Z-A
        </option>
      </select>
    </div>
  );
};

export default Sort;
