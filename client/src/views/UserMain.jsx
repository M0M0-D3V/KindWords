import React, { useState, useEffect } from "react";
import { navigate } from "@reach/router";
import { Navbar } from "react-bootstrap";
import axios from "axios";

import LoggedUser from "../components/LoggedUser";

// THIS IS USER DASHBOARD WHERE EVERYTHING HAPPENS
// [x] CHANGE TO GET 1 USER ONLY
// [] RETURN COMPONENT BUTTONS & NAVIGATION
// [] WRITE REQUEST BUTTON
// [] VIEW REQUESTS BUTTON
// [] WRITE AIRPLANE BUTTON

export default (props) => {
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
    </div>
  );
};
