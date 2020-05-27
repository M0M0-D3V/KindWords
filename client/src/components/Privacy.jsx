import React from "react";
import { Button, Modal } from "react-bootstrap";
import Pikachu from "../components/Pikachu";

export default (props) => {
  return (
    <div>
      <Pikachu />
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
          <p>
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
