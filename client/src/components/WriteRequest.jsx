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
            Writing Requests
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            It can be hard to share your problems! Sometimes the pain is clear
            and other times you don't really understand why you're upset. Go
            ahead and let it out. If you want to make it easy for people to
            reply, consider:
            <br />
            - Directly asking if people have experienced something similar.
            <br />
            - Talk about your gut feelings
            <br />- Describe your own behaviors that you don't like.
          </p>
          <p>
            Please remember, protect yourself from strangers online by not
            sharing your information that could identify you.
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
