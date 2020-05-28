import React, { useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";

export default (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  // variables for front end validation
  // const [usernameError, setUserNameError] = useState(true);
  // const [passwordError, setPasswordError] = useState(true);

  const register = (event) => {
    event.preventDefault();

    const newUser = { username, email, password, confirmPassword };

    axios
      .post("http://localhost:9001/api/register", newUser, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);

        setUsername("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      })
      .catch((err) => {
        console.log(err, "this is error");

        setErrors(err.response.data.errors);
      });
  };

  const nameChange = (e) => {
    setUsername(e.target.value);
    // e.garget.value.length < 5
    // ? setUserNameError(true)
    // : setUserNameError(false);
  };

  const emailChange = (e) => {
    setEmail(e.target.value);
  };

  const passwordChange = (e) => {
    setPassword(e.target.value);
    // e.target.value.length < 8
    //   ? setPasswordError(true)
    //   : setPasswordError(false);
  };

  return (
    <fieldset>
      <legend>Register</legend>

      <form onSubmit={register}>
        <label>Username:</label>
        <input
          className="form-control"
          type="text"
          name="username"
          onChange={nameChange}
          value={username}
          required
        />
        {errors.username ? (
          <span className="error-message">{errors.username.message}</span>
        ) : (
          ""
        )}

        <label>Email:</label>
        <input
          className="form-control"
          type="email"
          name="email"
          onChange={emailChange}
          value={email}
          required
        />
        {errors.email ? (
          <span className="error-message">{errors.email.message}</span>
        ) : (
          ""
        )}

        <label>Password:</label>
        <input
          className="form-control"
          type="password"
          name="password"
          onChange={passwordChange}
          value={password}
          required
        />
        {errors.password ? (
          <span className="error-message">{errors.password.message}</span>
        ) : (
          ""
        )}

        <label>Confirm Password:</label>
        <input
          className="form-control"
          type="password"
          name="confirmPassword"
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
          required
        />
        {errors.confirmPassword ? (
          <span className="error-message">
            {errors.confirmPassword.message}
          </span>
        ) : (
          ""
        )}

        <Button type="submit" className="btn-sm btn-dark">
          Sign Up
        </Button>
      </form>
    </fieldset>
  );
};
