import React from "react";
import { Button, Modal } from "react-bootstrap";
import pikachu from "../img/pikachu.png";

export default (props) => {
  return (
    <div>
      <div className="text-center h-100">
        <img src={pikachu} alt="pikachu" />
      </div>
      <p style={{ color: "#FFC857", textAlign: "center" }}>
        Kind Words is a place you can come to share about your struggles and
        pains as well as helping others in their own struggles too. Below are
        some resources to help guide you.
      </p>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Privacy</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="lead">
            Your privacy is important to us and so is maintaining a safe
            community. All messages are stored on a secure server and will not
            be exposed or used for any purposes outside of Kind Words. However,
            if a message indicates a possibility that a person may do harm to
            themselves or others, or contains harassment, we may contact
            relevant authorities.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="info" onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
