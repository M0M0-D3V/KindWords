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
          <Modal.Title id="contained-modal-title-vcenter">
            Writing Responses
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            When responding to someone who has stated a problem they are facing,
            you've got options!
          </p>
          <p>
            If you don't really understand their problem, maybe you can make
            them feel better just by replying with sympathy or solidarity?
          </p>
          <p>
            If it's something you can relate to, maybe they'd like to hear how
            you handled it or just how you felt about it.
          </p>
          <p>
            People might not even be asking for answers, they just want to vent
            and be heard. And that is ok!
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
