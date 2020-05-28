import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Modal } from "react-bootstrap";

import Dragonite from "../components/Dragonite";
// import DeleteButton from "./DeleteButton";

// BASICALLY COPIED OVER FROM TEAM MANAGER AND FIXING VARIABLES.
// HAHAHAHAHAHAHAHA
// user is in props. can use props.user.username or ._id
export default (props) => {
  const [requests, setRequests] = useState([]);
  const [loaded, setLoaded] = useState(false);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:9001/api/requests")
  //     .then((res) => {
  //       setRequests(res.data);
  //       setLoaded(true);
  //     })
  //     .catch((err) => console.log("Error: ", err));
  // }, []);

  // useEffect(() => {
  //   props.data.setRequests(props.data.requests);
  // }, [props.data]);

  useEffect(() => {
    axios
      .get("http://localhost:9001/api/requests")
      .then((res) => {
        console.log(res.data);
        setRequests(...res.data);
        setLoaded(true);
      })
      .catch((err) => console.log("Error: ", err));
    //
    // fetch();
  }, [props]);

  // const fetch = () => {
  //   // useEffect(() => {
  //   axios
  //     .get("http://localhost:9001/api/requests")
  //     .then((res) => {
  //       setRequests(...res.data);
  //       setLoaded(true);
  //     })
  //     .catch((err) => console.log("Error: ", err));
  // }, []);
  // };

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
            {loaded ? (
              <div>
                <h5>
                  Here are Requests others have posted.
                  <br />
                  Maybe you can write something nice to them?
                </h5>
                <p>Placeholder for Request lorem ipsums and 3 buttons below</p>
                <div className="container">
                  <ul className="pagination">
                    {requests.map((request, idx) => {
                      return <li key={idx}>{request.request}</li>;
                    })}
                  </ul>
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
