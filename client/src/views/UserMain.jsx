import React, { useState, useEffect } from "react";
import { navigate } from "@reach/router";
// import  from "react-modal";
import { Navbar, Button, ButtonToolbar } from "react-bootstrap";
import axios from "axios";

import { RequestModal } from "../components/RequestModal";
import LoggedUser from "../components/LoggedUser";

// THIS IS USER DASHBOARD WHERE EVERYTHING HAPPENS
// [x] CHANGE TO GET 1 USER ONLY
// [] RETURN COMPONENT BUTTONS & NAVIGATION
// [] WRITE REQUEST BUTTON
// [] VIEW REQUESTS BUTTON
// [] WRITE AIRPLANE BUTTON

export default (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // const [user, setUser] = useState([]);

  // useEffect(() => {
  //   getLoggedInUser();
  // }, []);

  // const getLoggedInUser = () => {
  //   axios
  //     .get("http://localhost:9001/api/users/loggedin", {
  //       withCredentials: true,
  //     })
  //     .then((res) => setUser(res.data))
  //     .catch((err) => {
  //       console.log("not authorized");
  //       console.log(err);
  //       navigate("/welcome");
  //     });
  // };

  return (
    <div className="container">
      <LoggedUser />
      <button onClick={() => setModalIsOpen(true)}>Make requests</button>
      <RequestModal isOpen={modalIsOpen}>
        <h2>Make a new request</h2>
        <p>Modal body</p>
      </RequestModal>
    </div>
  );
};
