import React, { useState } from 'react';
import { Button, Modal, Image } from 'react-bootstrap';
import { FaEye } from 'react-icons/fa';

function ModalBeer() {
  const [beers, setBeers] = useState([]);
  const [modalShowName, setModalShowName] = useState([]);
  const [modalShowTag, setModalShowTag] = useState([]);
  const [modalShowImg, setModalShowImg] = useState([]);
  const [show, setShow] = useState(false);
  return (
    <>
      <Button
        className="mx-3"
        variant="dark"
        onClick={() => {
          setShow(true);
        //   setModalShowName(beer.name);
        //   setModalShowTag(beer.tagline);
        //   setModalShowImg(beer.image_url);
        }}
      >
        <FaEye color="#f6d04d" fontSize="20px" />
      </Button>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {modalShowName}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
