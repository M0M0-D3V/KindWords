import React, { useEffect } from "react";
import axios from "axios";

import { Link, navigate } from "@reach/router";
// import DeleteButton from "./DeleteButton";

// BASICALLY COPIED OVER FROM TEAM MANAGER AND FIXING VARIABLES.
// HAHAHAHAHAHAHAHA

export default ({ data }) => {
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:9001/api/players")
  //     .then((res) => {
  //       setPlayers(res.data);
  //       setLoaded(true);
  //     })
  //     .catch((err) => console.log("Error: ", err));
  // }, []);

  // useEffect(() => {
  //   data.setRequests(data.requests);
  // }, [data]);

  // const removeFromDom = (requestID) => {
  //   data.setRequests(
  //     data.requests.filter((request) => request._id !== requestID)
  //   );
  // };

  return <div></div>;
};
