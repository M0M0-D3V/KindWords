import React, { useState, useEffect } from "react";
import { navigate } from "@reach/router";
import { Navbar } from "react-bootstrap";
import axios from "axios";

// THIS IS USER DASHBOARD WHERE EVERYTHING HAPPENS
// [] CHANGE TO GET 1 USER ONLY
// [] RETURN COMPONENT BUTTONS & NAVIGATION
// [] WRITE REQUEST BUTTON
// [] VIEW REQUESTS BUTTON
// [] WRITE AIRPLANE BUTTON

export default (props) => {
  const [users, setUsers] = useState([]);

  const getLoggedInUser = () => {
    axios
      .get("http://localhost:9001/api/users/loggedin", {
        withCredentials: true,
      })
      .then((res) => console.log(res))
      .catch(console.log);
  };

  useEffect(() => {
    axios
      .get("http://localhost:9001/api/users", {
        withCredentials: true,
      })
      .then((res) => {
        setUsers(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log("not authorized");
        console.log(err);

        navigate("/welcome");
      });
  }, []);

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
    <div className="container">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          React Bootstrap
        </Navbar.Brand>
      </Navbar>
      <button onClick={logout}>Logout</button>

      <h3>All Users:</h3>
      <button onClick={getLoggedInUser}>Get Logged In User</button>
      <table>
        <tbody>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Created On</th>
          </tr>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
