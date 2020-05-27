import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Modal } from "react-bootstrap";

import Dragonite from "../components/Dragonite";
// import DeleteButton from "./DeleteButton";

// BASICALLY COPIED OVER FROM TEAM MANAGER AND FIXING VARIABLES.
// HAHAHAHAHAHAHAHA

export default (props) => {
  const [requests, setRequests] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:9001/api/requests")
      .then((res) => {
        setRequests(res.data);
        setLoaded(true);
      })
      .catch((err) => console.log("Error: ", err));
  }, []);

  useEffect(() => {
    props.data.setRequests(props.data.requests);
  }, [props.data]);

  // const removeFromDom = (requestID) => {
  //   data.setRequests(
  //     data.requests.filter((request) => request._id !== requestID)
  //   );
  // };

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
              View Requests
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5>
              Here are Requests others have posted.
              <br />
              Maybe you can something nice to them?
            </h5>
            <p>Placeholder for Request lorem ipsums and 3 buttons below</p>
            <Button variant="outline-dark">Previous</Button>
            <Button variant="outline-dark">Reply</Button>
            <Button variant="outline-dark">Next</Button>
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
