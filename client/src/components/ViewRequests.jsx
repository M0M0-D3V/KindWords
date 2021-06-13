import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import { Button, Modal, Pagination } from "react-bootstrap";

import Dragonite from "../components/Dragonite";
// import DeleteButton from "./DeleteButton";

// BASICALLY COPIED OVER FROM TEAM MANAGER AND FIXING VARIABLES.
// HAHAHAHAHAHAHAHA
// user is in props. can use props.user.username or ._id
export default (props) => {
  const [requests, setRequests] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentView, setCurrentView] = useState(1);
  const [postPerView, setPostPerView] = useState(1);

  useEffect(() => {
    axios
      .get("http://localhost:9001/api/kindwords")
      .then((res) => {
        console.log("console.logging res.data");
        console.log(res.data);
        setRequests(
          res.data.allRequests.filter(
            (userRequest) => userRequest.requestBy !== props.user.username
          )
        );
        setLoaded(true);
      })
      .catch((err) => console.log("Error: ", err));
    //
    // fetch();
  }, [props.user.username]);

  let requestsToViewArray = [];
  // *********************TRY TO BUILD PAGINATION
  const replyFunction = (e) => {
    // click function to reply inside the ViewRequests
    // [] turn off current modal
    // [] open new modal to write reply in form
    console.log("reply", e);
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
              View Requests
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {requests ? (
              <div>
                <h5>
                  Here are Requests others have posted.
                  <br />
                  Maybe you can write something nice to them?
                </h5>
                <div className="container">
                  <nav aria-label="Request Label">
                    {requests.map((request, idx) => {
                      return (
                        <div key={request._id}>
                          <p className="page-item">
                            {request.requestBy !== undefined ? (
                              <div>
                                {request.requestBy.charAt(0).toUpperCase()}{" "}
                                wrote - {request.userRequest}
                              </div>
                            ) : (
                              <div>{request.requestBy}</div>
                            )}
                          </p>
                        </div>
                      );
                    })}
                  </nav>
                </div>
                <div style={{ textAlign: "center" }}>
                  <Button variant="outline-dark">Previous</Button>
                  {"   "}
                  <Button variant="outline-dark">Reply</Button>
                  {"   "}
                  <Button variant="outline-dark">Next</Button>
                </div>
              </div>
            ) : (
              <p>
                Looks like there are no requests at the moment.. Check back
                again later!
              </p>
            )}
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
