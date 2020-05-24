import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

import pikachu from "../img/pikachu.png";

export default () => {
  return (
    <div>
      <Container>
        <Jumbotron>
          {/* < */}
          <h2 style={{ color: "#FFC857" }}>WELCOME TO KIND WORDS!</h2>
          <img
            src={pikachu}
            alt="pikachu"
            style={{ textAlign: "center", display: "block" }}
          />
          <p style={{ color: "#FFC857", textAlign: "center" }}>
            Kind Words is a place you can come to share about your struggles and
            pains as well as helping others in their own struggles too.
          </p>
          {/*  */}
        </Jumbotron>
      </Container>
    </div>
  );
};
