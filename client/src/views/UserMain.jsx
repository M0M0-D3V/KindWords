import React, { useState, useEffect } from "react";
import { navigate } from "@reach/router";
import { Navbar } from "react-bootstrap";
import axios from "axios";

import LogOut from "../components/LogOut";

// THIS IS USER DASHBOARD WHERE EVERYTHING HAPPENS
// [] CHANGE TO GET 1 USER ONLY
// [] RETURN COMPONENT BUTTONS & NAVIGATION
// [] WRITE REQUEST BUTTON
// [] VIEW REQUESTS BUTTON
// [] WRITE AIRPLANE BUTTON

export default (props) => {
  const [users, setUsers] = useState([]);

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

  // const getLoggedInUser = () => {
  //   axios
  //     .get("http://localhost:9001/api/users/loggedin", {
  //       withCredentials: true,
  //     })
  //     .then((res) => console.log(res))
  //     .catch(console.log);
  // };

  return (
    <div className="container">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">KIND WORDS</Navbar.Brand>
        <LogOut />
      </Navbar>
      <h2>HEY YOU MADE IT!</h2>
      {/* <h3>All Users:</h3>
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
      </table> */}
    </div>
  );
};
