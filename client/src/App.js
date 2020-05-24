import React from "react";
import { Link, navigate, Router } from "@reach/router";

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
      <div className="jumbotron">
        <h1>MERN Users</h1>
        <button onClick={logout}>Logout</button>
      </div>
      <Router>
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
