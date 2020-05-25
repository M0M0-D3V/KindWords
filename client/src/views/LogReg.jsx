import React from "react";
import { Jumbotron, Button, Navbar } from "react-bootstrap";
import { Link, navigate } from "@reach/router";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

export default () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">KIND WORDS</Navbar.Brand>

        <h3 style={{ color: "#FFC857", textAlign: "right" }}>
          WELCOME TO KIND WORDS!
        </h3>
      </Navbar>
      <Jumbotron className="bg-transparent">
        <SignIn />
        <SignUp />
      </Jumbotron>
      <Button variant="dark">
        <Link to="/">Go back to main...</Link>
      </Button>
    </div>
  );
};
