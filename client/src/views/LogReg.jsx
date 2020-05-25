import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import { Link } from "@reach/router";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

export default () => {
  return (
    <div style={{ marginTop: "50px" }}>
      <Jumbotron>
        <SignIn />
        <SignUp />
      </Jumbotron>
      <Button variant="light">
        <Link to="/">Go back to main...</Link>
      </Button>
    </div>
  );
};
