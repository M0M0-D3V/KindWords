import React from "react";
import axios from "axios";
import { navigate } from "@reach/router";
import { Button } from "react-bootstrap";

export default (props) => {
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
    <div>
      <Button onClick={logout} variant="dark">
        Logout
      </Button>
    </div>
  );
};
