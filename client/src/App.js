import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import { Router } from "@reach/router";
import LogReg from "./views/LogReg.jsx";
import Welcome from "./views/Welcome";
import UserMain from "./views/UserMain";
import { Container } from "react-bootstrap";

function App() {
  const [socket] = useState(() => io(":1337"));
  return (
    <>
      <div>
        <Container>
          <Router>
            <UserMain path="/" />
            <Welcome path="/welcome" />
            <LogReg path="/login" />
          </Router>
        </Container>
      </div>
    </>
  );
}

export default App;
