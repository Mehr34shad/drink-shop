import React, { useState, useEffect, useContext, Fragment } from 'react';
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';
import contextApi from '../context/contextApi.js';
import { FaRegStar, FaStar, FaShoppingCart, FaEye } from 'react-icons/fa';
import ModalBeer from '../components/Modal';
// import { v4 as uuidv4 } from 'uuid';
import Header from '../components/Header.jsx';

const Drink = () => {
  const context = useContext(contextApi);

  const [beers, setBeers] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    axios
      .get('https://api.punkapi.com/v2/beers')
      .then((res) => {
        setBeers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function check(ids) {
    const favoriteIndex = context.favorite.findIndex((p) => p.id === ids);
    if (favoriteIndex !== -1) {
      return true;
    } else {
      return false;
    }
  }
  return (
    <Fragment>
      <Header />

      <div className="container mt-5">
        <div className="row">
          {beers.map((beer) => (
            <div key={beer.id} className="col-md-4 mt-5">
              <Card
                border="dark"
                key={beer.id}
                className=" text-white text-center rounded "
                style={{
                  width: '22rem',
                  height: '25rem',
                  cursor: 'pointer',
                  backgroundColor: '#313131',
                }}
              >
                <Card.Title className="mt-3">{beer.name}</Card.Title>
                <Card.Img
                  className="mx-auto d-block mt-3"
                  variant="top"
                  src={beer.image_url}
                  style={{ width: '15%', justifyContent: 'center' }}
                />
                <Card.Body>
                  <Card.Text>{beer.tagline}</Card.Text>
                  <Button
                    onClick={() =>
                      context.handleNewCard(
                        // uuidv4(),
                        beer.id,
                        beer.name,
                        beer.image_url,
                        beer.tagline,
                        beer.srm,
                      )
                    }
                    variant="dark"
                  >
                    <FaShoppingCart color="#f6d04d" fontSize="20px" />
                  </Button>

                  <Button
                    className="mx-3"
                    variant="dark"
                    onClick={() => setModalShow(true)}
                  >
                    <FaEye color="#f6d04d" fontSize="20px" />
                  </Button>
                  <ModalBeer
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    image_url={beer.image_url}
                    name={beer.name}
                    tagline={beer.tagline}
                    price={beer.price}
                    abv={beer.abv}
                    description={beer.description}
                  />

                  <Button
                    onClick={() =>
                      context.handleFavorite(
                        beer.id,
                        beer.name,
                        beer.image_url,
                        beer.tagline,
                        beer.srm,
                        beer.first_brewed,
                      )
                    }
                    variant="dark"
                  >
                    {check(beer.id) !== true ? (
                      <FaRegStar color="#f6d04d" fontSize="20px" />
                    ) : (
                      <FaStar color="#f6d04d" fontSize="20px" />
                    )}
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Drink;
