import React, { useState, useContext, Fragment } from "react";
import { Card, Button } from "react-bootstrap";
import contextApi from "../context/contextApi.js";
import { FaRegStar, FaStar, FaShoppingCart, FaEye } from "react-icons/fa";
import Header from "./Header.jsx";
import ModalBeer from "./Modal";

const Cards = () => {
  const context = useContext(contextApi);

  const [id, setId] = useState([]);
  const [show, setShow] = useState(false);

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
          {context.AllBeers.map((beer) => (
            <div key={beer.id} className="col-md-4 mt-5">
              <Card
                border="dark"
                key={beer.id}
                className=" text-white text-center rounded "
                style={{
                  width: "22rem",
                  height: "25rem",
                  cursor: "pointer",
                  backgroundColor: "#313131",
                  transition: "all 1s linear"
                }}
              >
                <Card.Title className="mt-3">{beer.name}</Card.Title>
                <Card.Img
                  className="mx-auto d-block mt-3"
                  variant="top"
                  src={beer.image_url}
                  style={{ width: "15%", justifyContent: "center" }}
                />
                <Card.Body>
                  <Card.Text>{beer.tagline}</Card.Text>
                  <Button
                    onClick={() =>
                      context.handleNewCard(
                        beer.id,
                        beer.name,
                        beer.image_url,
                        beer.tagline,
                        beer.srm
                      )
                    }
                    variant="dark"
                  >
                    <FaShoppingCart color="#f6d04d" fontSize="20px" />
                  </Button>

                  <Button
                    className="mx-3"
                    variant="dark"
                    onClick={() => {
                      setShow(true);
                      setId(beer.id);
                    }}
                  >
                    <FaEye color="#f6d04d" fontSize="20px" />
                  </Button>
                  {show === true ? (
                    <ModalBeer
                      show={show}
                      setShow={(e) => setShow(e)}
                      id={id}
                    />
                  ) : (
                    ""
                  )}
                  <Button
                    onClick={() =>
                      context.handleFavorite(
                        beer.id,
                        beer.name,
                        beer.image_url,
                        beer.tagline,
                        beer.srm,
                        beer.first_brewed
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

export default Cards;
