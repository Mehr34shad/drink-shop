import React, { useContext } from 'react';
import contextApi from '../context/contextApi.js';

const Sort = () => {
  const context = useContext(contextApi);
  const { sortBeerNameAsc, sortBeerNameDes, sortBeerAbvAsc, sortBeerAbvDes } =
    context;
  return (
    <>
      /<div className="container mt-5">
      {/* <select
        className="form-select w-25 text-white-50"
        style={{ backgroundColor: '#313131', cursor: 'pointer' }}
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
      </select> */}
      {/* <h6 className="text-white">Sorting :</h6>

      <ul>
        <li>
          <input type="radio" id="f-option" name="selector" onClick={sortBeerAbvAsc} />
          <label htmlFor="f-option">Abv : Low</label>

          <div className="check"></div>
        </li>

        <li>
          <input type="radio" id="s-option" name="selector" onClick={sortBeerAbvDes}/>
          <label htmlFor="s-option">Abv : High</label>

          <div className="check">
            <div className="inside"></div>
          </div>
        </li>

        <li>
          <input type="radio" id="t-option" name="selector" onClick={sortBeerNameAsc}/>
          <label htmlFor="t-option">Name : A-Z</label>

          <div className="check">
            <div className="inside"></div>
          </div>
        </li>
        <li>
          <input type="radio" id="m-option" name="selector" onClick={sortBeerNameDes}/>
          <label htmlFor="m-option">Name : Z-A</label>

          <div className="check">
            <div className="inside"></div>
          </div>
        </li> 
      </ul> */}
      <h3 className="text-white">Filtre :</h3>

      <div className="radio-container text-white m-5">
        <label htmlFor="low" className="me-3">Abv : Low</label>
        <input type="radio" id="low" name="sort" className="" onClick={sortBeerAbvAsc} />

        <label htmlFor="high" className="me-3">Abv : High</label>
        <input type="radio" id="high" name="sort" className="" onClick={sortBeerAbvDes} />

        <label htmlFor="a-z" className="me-3">Name : A-Z</label>
        <input type="radio" id="a-z" name="sort" className="" onClick={sortBeerNameAsc} />

        <label htmlFor="z-a" className="me-3">Name : Z-A</label>
        <input type="radio" id="z-a" name="sort" className="" onClick={sortBeerNameDes} />
      </div>
      </div>
    </>
  );
};

export default Sort;
