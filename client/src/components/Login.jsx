import React, { useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import { navigate } from "@reach/router";

export default (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const login = (event) => {
    event.preventDefault();
    axios
      .post(
        "http://localhost:9001/api/login",
        { username, password },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        console.log(err.response);
        setErrorMessage(err.response.data.msg);
      });
  };

  return (
    <fieldset>
      <legend>Login</legend>
      <form onSubmit={login}>
        <label>Username:</label>
        <input
          className="form-control"
          type="text"
          name="username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          value={username}
        />
        <label>Password:</label>
        <input
          className="form-control"
          type="password"
          name="username"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <Button type="submit" className="btn-sm btn-dark">
          Sign In
        </Button>
        <p className="error-message">{errorMessage ? errorMessage : ""}</p>
      </form>
    </fieldset>
  );
};
