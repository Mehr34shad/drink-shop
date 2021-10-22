import React from 'react';
import { Button, Modal, Image } from 'react-bootstrap';


function ModalBeer(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          <Image
            className="mx-auto d-block "
            src={props.image_url}
            alt="img"
            style={{ width: '30%' }}
          />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>Name : {props.name}</h5>
        <p>TagLine : {props.tagline}</p>
        <p>Description : {props.tagline}</p>
        <p>Price : {props.price}$</p>
        <p>Abv : {props.abv}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default ModalBeer;
