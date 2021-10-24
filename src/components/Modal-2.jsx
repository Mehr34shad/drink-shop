import React, { useContext, useState } from 'react';
import { Button, Modal, Image } from 'react-bootstrap';
import { FaEye } from 'react-icons/fa';
import contextApi from '../context/contextApi.js';

function ModalBeer() {
  const context = useContext(contextApi);
  const [modalShowName, setModalShowName] = useState([]);
  const [modalShowTag, setModalShowTag] = useState([]);
  const [modalShowImg, setModalShowImg] = useState([]);
  const [show, setShow] = useState(false);
  return (
    <>
      {context.beers.map((beer) => (
        <Button
          className="mx-3"
          variant="dark"
          onClick={() => {
            setShow(true);
            setModalShowName(beer.name);
            setModalShowTag(beer.tagline);
            setModalShowImg(beer.image_url);
          }}
        >
          <FaEye color="#f6d04d" fontSize="20px" />
        </Button>
      ))}
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {modalShowName}
            {/* {context.beers.id} */}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Name : {context.beers.name}</h5>
          {/* <p>TagLine : {props.tagline}</p>
          <p>Description : {props.tagline}</p>
          <p>Price : {props.price}$</p>
          <p>Abv : {props.abv}</p> */}
          <Image
            className="mx-auto d-block "
            src={modalShowImg}
            alt="img"
            style={{ width: '30%' }}
          />
          <p>{modalShowTag}</p>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default ModalBeer;
