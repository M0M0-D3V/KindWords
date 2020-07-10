import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Modal } from "react-bootstrap";

import Dragonite from "../components/Dragonite";
import { request } from "https";
// import DeleteButton from "./DeleteButton";

// BASICALLY COPIED OVER FROM TEAM MANAGER AND FIXING VARIABLES.
// HAHAHAHAHAHAHAHA
// user is in props. can use props.user.username or ._id
export default (props) => {
  const [requests, setRequests] = useState(null);
  const [reply, setReply] = useState([]);
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
        setRequests(res.data.requests.filter(request => request.requestBy != props.user.username));
        console.log(requests);
        setLoaded(true);
      })
      .catch((err) => console.log("Error: ", err));
    //
    // fetch();
  }, []);

 

  const postReply = (request) => {
    const editedRequest = {
      response: [reply],
    };
    console.log(request);
    axios
      .put(
        `http://localhost:9001/api/requests/update/${request._id}`,
        editedRequest
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      }, []);
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
            {loaded ? (
              <div>
                <h5>
                  Here are Requests others have posted.
                  <br />
                  Maybe you can write something nice to them?
                </h5>
                <div className="container">
                  <nav aria-label="Request Label">
                    <ul>
                      {requests.map((request, idx) => {
                        return (
                          <div key={idx}>
                            <li className="page-item">
                              
                              {request.requestBy !== undefined ? (
                                <>{request.request} -
                                {" "}
                                {request.requestBy
                                    .charAt(0)
                                    .toUpperCase()}{" "}</>
                                    ) : (
                                      <>{request.requestBy}</>
                                      
                                      )}
                            
                      
                      </li>
                                    
                            {/* Make these form responses hidden and appear when clicked on the link of message... */}
                            <form
                            onSubmit={postReply(request)}
                              id={request._id}
                              >
                              <input type="hidden" id={request._id} />
                              <textarea
                                className="form-control"
                                rows="3"
                                onChange={(event) => {
                                  setReply(event.target.value);
                                }}
                                ></textarea>
                              <button className="btn btn-info">Reply</button>
                              <br /> <br />
                            </form>)
                          </div>
                        );
                              
                      <br />
                      {/* <li>
                        <a href="">Previous</a>
                        </li>
                        <li>
                        <a href="">Next</a>
                      </li> */}
                    </ul>
                  </nav>
                </div>
                {/* <div style={{ textAlign: "center" }}>
                <Button variant="outline-dark">Previous</Button>
                {"   "}
                <Button variant="outline-dark">Reply</Button>
                {"   "}
                <Button variant="outline-dark">Next</Button>
              </div> */}
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
