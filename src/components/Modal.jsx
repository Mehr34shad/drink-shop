import React, { useContext } from "react";
import { Modal, Image } from "react-bootstrap";
import contextApi from "../context/contextApi.js";

function ModalBeer({ show, setShow, id }) {
  const context = useContext(contextApi);
  const modalIndex = context.beers.find((p) => p.id === id);

  return (
    <Modal
      show={show}
      onHide={() => setShow(false)}
      dialogClassName="modal-90w"
      aria-labelledby="example-custom-modal-styling-title"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-custom-modal-styling-title">
          {modalIndex.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Name : {modalIndex.name}</p>
        <p>TagLine : {modalIndex.tagline}</p>
        <p>Description : {modalIndex.tagline}</p>
        <p>Price : {modalIndex.srm}$</p>
        <p>Abv : {modalIndex.abv}</p>
        <Image
          className="mx-auto d-block "
          src={modalIndex.image_url}
          alt="img"
          style={{ width: "22%" }}
        />
      </Modal.Body>
    </Modal>
  );
}
export default ModalBeer;
