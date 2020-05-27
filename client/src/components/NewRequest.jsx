import React, { useState } from "react";
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
      <div className="container">
        <h5>
          What are you worried about?
          <br />
          Maybe someone else is too?
        </h5>
      </div>
      <Form onSubmitProp={createRequest} errors={errors} />
    </div>
  );
};
