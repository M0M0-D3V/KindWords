import React, { useState } from "react";
import axios from "axios";
import Form from "../components/Form";
import { navigate } from "@reach/router";
import { Button, Modal } from "react-bootstrap";

import Dragonite from "../components/Dragonite";
// inclluding in props is data for socket- props.data= currentAirPlane, setCurrentAirPlane, airPlane, setAirPlane
export default (props) => {
  const [errors, setErrors] = useState([]);

  // Called back from Form, creates new request in DB
  const createPlane = (request) => {
    axios
      .post("http://localhost:9001/api/airplanes/new", request)
      .then((res) => {
        console.log("Response: ", res);
        navigate("/");
      })
      .catch((err) => setErrors(err.response.data.errors));
  };

  const onAirPlaneChange = (e) => {
    props.data.setAirPlane(e.target.value);
    e.target.value.length < 8 ? setErrors(true) : setErrors(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.data.socket.emit("new airplane", props.data.airPlane);
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
              Send a Happy Thought!
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5>
              Got some love to spread?
              <br />
              Maybe a favorite quote?
            </h5>
            <form
              onSubmit={(event) => {
                handleSubmit(event);
              }}
            >
              <p>
                <Form.Control
                  as="textarea"
                  rows="10"
                  size="lg"
                  placeholder="Write here..."
                  value={props.airPlane.airPlane}
                  onChange={onAirPlaneChange}
                  autoFocus
                />
              </p>
              {/* <h4 style={{ textAlign: "right" }}>
                <label>-{user.username.charAt(0).toUpperCase()}</label>
              </h4> */}
              {/* {errors.request !== undefined ? (
                <span className="error" style={{ display: "block" }}>
                  {errors.request.message}
                </span>
              ) : (
                ""
              )} */}
              {/* {props.data.airPlane.length < 5 ? (
                <>
                  <p className="lead" style={{ color: "orange" }}>
                    Write at least 5 characters.
                  </p>
                  <button disabled={true} className="btn btn-success btn-sm">
                    Send
                  </button>
                </>
              ) : ( */}
              <button className="btn btn-success btn-sm">Send!</button>
              {/* )} */}
            </form>

            {/* <Form
              onSubmitProp={createPlane}
              user={props.user}
              errors={errors}
            /> */}
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
