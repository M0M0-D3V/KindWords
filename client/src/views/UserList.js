import React, { useState, useEffect } from "react";
import { navigate } from "@reach/router";
import axios from "axios";

const UserList = props => {
  const [users, setUsers] = useState([]);

  const getLoggedInUser = () => {
    axios
      .get("http://localhost:8000/api/users/loggedin", {
        withCredentials: true
      })
      .then(res => console.log(res))
      .catch(console.log);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/users", {
        withCredentials: true
      })
      .then(res => {
        setUsers(res.data);
        console.log(res);
      })
      .catch(err => {
        console.log("not authorized");
        console.log(err);

        navigate("/");
      });
  }, []);

  return (
    <div className="container">
      <h3>All Users:</h3>
      <button onClick={getLoggedInUser}>Get Logged In User</button>
      <table>
        <tbody>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Created On</th>
          </tr>
          {users.map(user => (
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

export default UserList;
