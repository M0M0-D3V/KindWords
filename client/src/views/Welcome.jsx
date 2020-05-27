import React, { useState } from "react";
import { Navbar, Button, Overlay } from "react-bootstrap";
import { navigate } from "@reach/router";
// [] - OVERLAY ANIMATION (BOOTSTRAP) TO DISPLAY LOGIN/REG FORMS WHEN LINK IS CLICKED INSTEAD OF NAVIGATING TO /LOGIN

import Pikachu from "../components/Pikachu";
import Help from "../components/Help";
import Privacy from "../components/Privacy";
import WriteRequest from "../components/WriteRequest";
import Respond from "../components/Respond";
import LoggedUser from "../components/LoggedUser";

// [] - WOULD BE NICE TO TURN THESE LINK DISPLAYS INTO BOOTSTRAP MODALS!!

export default () => {
  const [view, setView] = useState(0);
  const [modalShow, setModalShow] = useState(false);

  return (
    <div style={{ height: "650px" }} className=" container text-center">
      {/* need to fix LoggedUser to flag if logged in... */}
      <LoggedUser />

      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">KIND WORDS</Navbar.Brand>
        <h2 style={{ color: "#FFC857", textAlign: "center" }}>
          WELCOME TO KIND WORDS!
        </h2>
        <Button
          variant="secondary"
          onClick={(e) => {
            navigate("/login");
          }}
        >
          Login or Register here!
        </Button>
      </Navbar>

      {view === 0 ? (
        <Pikachu />
      ) : view === 1 ? (
        <Help show={modalShow} onHide={(e) => setModalShow(false)} />
      ) : view === 2 ? (
        <Privacy show={modalShow} onHide={(e) => setModalShow(false)} />
      ) : view === 3 ? (
        <WriteRequest show={modalShow} onHide={(e) => setModalShow(false)} />
      ) : view === 4 ? (
        <Respond show={modalShow} onHide={(e) => setModalShow(false)} />
      ) : (
        <p></p>
      )}
      <Button
        variant="info"
        onClick={(e) => {
          setView(1);
          setModalShow(true);
        }}
      >
        Help Resources
      </Button>
      {"        "}
      <Button
        variant="info"
        onClick={(e) => {
          setView(2);
          setModalShow(true);
        }}
      >
        Privacy
      </Button>
      {"        "}
      <Button
        variant="info"
        onClick={(e) => {
          setView(3);
          setModalShow(true);
        }}
      >
        Writing Requests
      </Button>
      {"        "}
      <Button
        variant="info"
        onClick={(e) => {
          setView(4);
          setModalShow(true);
        }}
      >
        Writing Responses
      </Button>
      <br />
      {/* <audio controls>
        <source src="growing-mix.wav" type="audio/wav"></source>
      </audio> */}
    </div>
  );
};
