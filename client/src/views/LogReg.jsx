import React from "react";
import { Jumbotron, Button, Modal, Navbar } from "react-bootstrap";
import { navigate } from "@reach/router";
import Login from "../components/Login";
import Pikachu from "../components/Pikachu";
import Register from "../components/Register";

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
            Login / Register
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Login />
          <Register />
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
