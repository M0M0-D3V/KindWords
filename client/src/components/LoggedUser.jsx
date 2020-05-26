import React, { useState, useEffect } from "react";
import { navigate } from "@reach/router";
import axios from "axios";
import { Navbar } from "react-bootstrap";
import LogOut from "../components/LogOut";

export default (props) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    getLoggedInUser();
  }, []);

  const getLoggedInUser = () => {
    axios
      .get("http://localhost:9001/api/users/loggedin", {
        withCredentials: true,
      })
      .then((res) => setUser(res.data))
      .catch((err) => {
        console.log("not authorized");
        console.log(err);
        navigate("/welcome");
      });
  };
  const firstInitial = (name) => {
    // [] NEED FIRST INITIAL TO WORK FOR PRIVACY
    return name;
    // .charAt(0);  why won't this work!??!?!
    // .toUpperCase();
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">KIND WORDS</Navbar.Brand>
        <h2>HEY YOU MADE IT, {firstInitial(user.username)}!</h2>
        <LogOut />
      </Navbar>
    </>
  );
};
