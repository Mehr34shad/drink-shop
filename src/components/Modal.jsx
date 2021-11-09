import React from "react";
import { Modal, Image } from "react-bootstrap";

function ModalBeer({ show, setShow, id, com }) {
  // const context = useContext(contextApi);
  const modalIndex = com.find((p) => p.id === id);

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
      <Modal.Body className="text-center">
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
