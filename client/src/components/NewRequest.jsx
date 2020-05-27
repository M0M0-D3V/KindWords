import React, { useState } from "react";
import axios from "axios";
import Form from "../components/Form";
import { navigate } from "@reach/router";
import { Button, Modal } from "react-bootstrap";

import Dragonite from "../components/Dragonite";

export default (props) => {
  const [request, setRequest] = useState("");
  const [errors, setErrors] = useState([]);

  // Called back from Form, creates new request in DB
  const createRequest = (e) => {
    // e.preventDefault();
    const newRequest = {
      request: request,
    };
    axios
      .post("http://localhost:9001/api/requests/new", newRequest)
      .then((res) => {
        console.log("Response: ", res);
        navigate("/");
      })
      .catch((err) => setErrors(err.response.data.errors));
  };

  return (
    <div className="h-100">
      <div className="container">
        <Dragonite />
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Make a Request
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5>
              What are you worried about?
              <br />
              Maybe someone else is too?
            </h5>
            <Form onSubmitProp={createRequest} errors={errors} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="info" onClick={props.onHide}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};
