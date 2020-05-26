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
