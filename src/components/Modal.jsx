import React, { useContext, useState } from 'react';
import { Button, Modal, Image } from 'react-bootstrap';
import { FaEye } from 'react-icons/fa';
import contextApi from '../context/contextApi.js';

function ModalBeer() {
  const context = useContext(contextApi);
  const { beers } = context;
  const [modalShowName, setModalShowName] = useState([]);
  const [modalShowTag, setModalShowTag] = useState([]);
  const [modalShowImg, setModalShowImg] = useState([]);
  const [show, setShow] = useState(false);
  return (
    <>
      {/* {beers.map((beer) => ( */}
      <Button
        key={beers.id}
        className="mx-3"
        variant="dark"
        onClick={() => {
          setShow(true);
          setModalShowName(beers.name);
          setModalShowTag(beers.tagline);
          setModalShowImg(beers.image_url);
        }}
      >
        <FaEye color="#f6d04d" fontSize="20px" />
      </Button>
      {/* ))} */}
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {beers.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Name : {modalShowName}</h5>
          <p>TagLine : {context.beers.tagline}</p>
          <p>Description : {context.beers.tagline}</p>
          <p>Price : {context.beers.price}$</p>
          <p>Abv : {context.beers.abv}</p>
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
