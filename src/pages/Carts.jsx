import React, { useContext } from 'react';

import contexts from '../context/contexts';
import Cart from './Cart';
import { Button, Col, ListGroup, Row, Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const Carts = () => {
  const context = useContext(contexts);

  return (
    <>
      <Helmet>
        <title>Buy Card</title>
      </Helmet>
      {context.cards.map((card) => (
        <Cart
          key={card.id}
          id={card.id}
          image_url={card.image_url}
          name={card.name}
          tagline={card.tagline}
          price={card.price}
          abv={card.abv}
          srm={card.srm}
          description={card.description}
        />
      ))}
      <Container className="my-5">
        <ListGroup key={context.cards.id}>
          <ListGroup.Item style={{ backgroundColor: '#313131' }}>
            <Row>
              <Col md={4}>
                <h5 className=" text-white mt-2">
                  Total items = {context.cards.length}
                </h5>
              </Col>
              <Col md={4}>
                <h5 className=" text-white mt-2 me-5">
                  Total price = {context.total}$
                </h5>
              </Col>
              <Col md={4}>
                <Link to="/">
                  <Button
                    type="button"
                    style={{
                      cursor: 'pointer',
                      fontSize: '20px',
                      color: '#fff',
                    }}
                    className="mt-1 bg-success float-end"
                  >
                    <FaHome />
                  </Button>
                </Link>
              </Col>
            </Row>
          </ListGroup.Item>
        </ListGroup>
      </Container>
    </>
  );
};

export default Carts;
