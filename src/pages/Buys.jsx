import React, { useContext } from 'react';

import contextApi from './../context/contextApi';
import Buy from './Buy';
import { Button, Col, ListGroup, Row, Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';


const Buys = () => {
  const context = useContext(contextApi);

  return (
    <div>
      <Helmet>
        <title>Buy Card</title>
      </Helmet>
      {context.cards.map((card) => (
        <Buy
          id={card.id}
          image_url={card.image_url}
          name={card.name}
          tagline={card.tagline}
          price={card.price}
          abv={card.abv}
          description={card.description}

        />
      ))}

      <Container className="my-5">
        <ListGroup>
          <ListGroup.Item style={{ backgroundColor: '#313131' }}>
            <Row>
              <Col md={6}>
                <h4 className=" text-white mt-1">
                  Total items = {context.cards.length}
                </h4>
              </Col>
              <Col md={6}>
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
    </div>
  );
};

export default Buys;
