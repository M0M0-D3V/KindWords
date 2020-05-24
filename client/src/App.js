import React from "react";
import { Link, navigate, Router } from "@reach/router";
import axios from "axios";
import LogReg from "./views/LogReg.jsx";
import Welcome from "./views/Welcome";
import UserMain from "./views/UserMain";
import { Container } from "react-bootstrap";

function App() {
  const logout = () => {
    axios
      .post(
        "http://localhost:9001/api/logout",
        {},
        {
          // need to send the cookie in request so server can clear it
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch(console.log);

    navigate("/");
  };

  return (
    <>
      <div className="row">
        <Container>
          <button onClick={logout}>Logout</button>

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
