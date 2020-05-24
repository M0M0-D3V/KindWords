import React, { useState } from "react";

import axios from "axios";
import { navigate } from "@reach/router";

const SignIn = (props) => {
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
        navigate("/users");
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage(err.response.data.msg);
      });
  };

  return (
    <fieldset>
      <legend>Sign In</legend>
      <form onSubmit={login}>
        <p className="form-group">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </p>
        <p className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="username"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </p>
        <input type="submit" value="Sign In" className="btn" />
        <p className="error-message">{errorMessage ? errorMessage : ""}</p>
      </form>
    </fieldset>
  );
};

export default SignIn;
