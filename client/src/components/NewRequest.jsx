import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "../components/Form";
import { Link, navigate } from "@reach/router";

export default () => {
  const [errors, setErrors] = useState([]);

  // Called back from Form, creates new request in DB
  const createRequest = (request) => {
    axios
      .post("http://localhost:9001/api/requests/new", request)
      .then((res) => {
        console.log("Response: ", res);
        navigate("/");
      })
      .catch((err) => setErrors(err.response.data.errors));
  };

  return (
    <div className="h-100">
      <h5>
        <Link to="/requests/list">List</Link> |{" "}
        <Link to="/requests/addplayer">Add Player</Link>
      </h5>
      <p className="lead">Add Player</p>
      <Form
        onSubmitProp={createRequest}
        initName=""
        initPreferredPosition=""
        errors={errors}
      />
      <Link to={"/"}>Cancel</Link>
    </div>
  );
};
