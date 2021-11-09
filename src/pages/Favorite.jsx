import React, { useContext } from 'react'
import { Button, Card, ListGroup, Container, Col, Row } from 'react-bootstrap';
import contexts from '../context/contexts';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

const Favorite = () => {
    const context = useContext(contexts);
    return (
        <div>
            <Helmet>
                <title>Favorite</title>
            </Helmet>
            <div className="container mt-5">
                <div className="row">
                    {context.favorite.map(card => (
                        <div
                            key={card.id}
                            className="col-md-4 mt-5">
                            <Card
                                border="dark"
                                key={card.id}
                                className="bg-secondary text-white text-center rounded "
                                style={{ width: '23rem', height: "23rem", cursor: 'pointer' }}
                            >
                                <Card.Title>{card.name}</Card.Title>
                                <Card.Img
                                    className='mx-auto d-block mt-2'
                                    variant="top"
                                    src={card.image_url}
                                    style={{ width: '15%', justifyContent: "center" }}
                                />
                                <Card.Body>
                                    <Card.Text>{card.tagline}</Card.Text>
                                    <Button
                                        onClick={() => context.handleNewCard(card.id, card.name, card.image_url, card.tagline, card.srm)}
                                        variant="dark"
                                    >Add to cart
                                    </Button>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>

            <Container className="my-5">
                <ListGroup>
                    <ListGroup.Item style={{ backgroundColor: '#313131' }}>
                        <Row>
                            <Col md={6}>
                                <h4 className=" text-white mt-1">
                                    Total items = {context.favorite.length}
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
    )
}
export default Favorite;