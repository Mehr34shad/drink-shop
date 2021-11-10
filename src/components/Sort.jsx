import React, { useContext } from 'react';
import contexts from '../context/contexts.js';

const Sort = () => {
  const context = useContext(contexts);
  const { sortBeerAbvAsc, sortBeerAbvDes, sortBeerNameAsc, sortBeerNameDes } =
    context;

  return (
    <>
      <div className="container mt-5">
         <div className="radio-container text-white m-5">
       <h4 className="text-white d-inline me-4">Filtre :</h4>
        <label htmlFor="low" className="me-2">Abv : Low</label>
        <input type="radio" id="low" name="sort" className="me-4" onClick={sortBeerAbvAsc} />

        <label htmlFor="high" className="me-3">Abv : High</label>
        <input type="radio" id="high" name="sort" className="me-4" onClick={sortBeerAbvDes} />

        <label htmlFor="a-z" className="me-3">Name : A-Z</label>
        <input type="radio" id="a-z" name="sort" className="me-4" onClick={sortBeerNameAsc} />

        <label htmlFor="z-a" className="me-3">Name : Z-A</label>
        <input type="radio" id="z-a" name="sort" className="me-4" onClick={sortBeerNameDes} />
      </div>
      </div>
    </>
  );
};

export default Sort;
