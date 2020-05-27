import React, { useEffect } from "react";
import axios from "axios";
import { Button, Modal } from "react-bootstrap";
import { Link, navigate } from "@reach/router";

import Dragonite from "../components/Dragonite";
// import DeleteButton from "./DeleteButton";

// BASICALLY COPIED OVER FROM TEAM MANAGER AND FIXING VARIABLES.
// HAHAHAHAHAHAHAHA

export default (props) => {
  //   useEffect(() => {
  //     axios
  //       .get("http://localhost:9001/api/requests")
  //       .then((res) => {
  //         setPlayers(res.data);
  //         setLoaded(true);
  //       })
  //       .catch((err) => console.log("Error: ", err));
  //   }, []);

  //   useEffect(() => {
  //     data.setRequests(data.requests);
  //   }, [data]);

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
