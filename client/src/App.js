import React from "react";
import { Link, navigate, Router } from "@reach/router";
import { Jumbotron } from "react-bootstrap";
import LogReg from "./views/LogReg";
import UserList from "./views/UserList";

import axios from "axios";

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
        <Jumbotron fluid>
          <h1>MERN Users</h1>
          <button onClick={logout}>Logout</button>
        </Jumbotron>
      </div>

      <Router>
        <Welcome path="/welcome" />
        <LogReg path="/" />
        <UserList path="/users" />
      </Router>
      <div className="container">
        <Link to="/users">Get Users List</Link>
      </div>
    </>
  );
}

export default App;
