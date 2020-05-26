import React, { useState } from "react";
import { navigate } from "@reach/router";
import { Navbar, Button } from "react-bootstrap";
import axios from "axios";

import Dragonite from "../components/Dragonite";
import LoggedUser from "../components/LoggedUser";
import NewRequest from "../components/NewRequest";
import ViewRequests from "../components/ViewRequests";
import WriteAirplane from "../components/WriteAirplane";

// THIS IS USER DASHBOARD WHERE EVERYTHING HAPPENS
// [x] CHANGE TO GET 1 USER ONLY
// [] RETURN COMPONENT BUTTONS & NAVIGATION
// [] WRITE REQUEST BUTTON
// [] VIEW REQUESTS BUTTON
// [] WRITE AIRPLANE BUTTON

export default (props) => {
  const [view, setView] = useState(0);

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
    <div className="container" style={{ height: "650px" }}>
      <LoggedUser />
      <Button
        variant="info"
        onClick={(e) => {
          setView(1);
        }}
      >
        Make a Request
      </Button>
      <Button
        variant="info"
        onClick={(e) => {
          setView(2);
        }}
      >
        View Requests
      </Button>
      <Button
        variant="info"
        onClick={(e) => {
          setView(3);
        }}
      >
        Send a Happy Thought!
      </Button>
      {view === 0 ? (
        <Dragonite />
      ) : view === 1 ? (
        <NewRequest />
      ) : view === 2 ? (
        <ViewRequests />
      ) : view === 3 ? (
        <WriteAirplane />
      ) : (
        <p></p>
      )}
    </div>
  );
};
