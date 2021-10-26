import React, { useContext } from 'react';
import contextApi from '../context/contextApi.js';

const Sort = () => {
  const context = useContext(contextApi);
  const { sortBeerAsc, sortBeerDes } = context;
  return (
    <div className="container mt-5">
      <select
        className="form-select w-25 text-white-50"
        style={{ backgroundColor: '#313131' }}
        aria-label="Default select example"
      >
        <option selected>Sort By</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3" onClick={sortBeerAsc}>
          Name : A-Z
        </option>
        <option value="4" onClick={sortBeerDes}>
          Name : Z-A
        </option>
      </select>
    </div>
  );
};

export default Sort;
