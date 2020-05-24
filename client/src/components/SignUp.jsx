import React, { useState } from "react";
import axios from "axios";

export default (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

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
        console.log(err);

        setErrors(err.response.data.errors);
      });
  };

  return (
    <fieldset>
      <legend>Sign Up</legend>

      <form onSubmit={register}>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          {errors.username ? (
            <span className="error-message">{errors.username.message}</span>
          ) : (
            ""
          )}
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          {errors.email ? (
            <span className="error-message">{errors.email.message}</span>
          ) : (
            ""
          )}
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="email"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          {errors.password ? (
            <span className="error-message">{errors.password.message}</span>
          ) : (
            ""
          )}
        </div>

        <div className="form-group">
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
          {errors.confirmPassword ? (
            <span className="error-message">
              {errors.confirmPassword.message}
            </span>
          ) : (
            ""
          )}
        </div>

        <input type="submit" value="Sign Up" className="btn" />
      </form>
    </fieldset>
  );
};
