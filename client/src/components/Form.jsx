import React, { useState } from "react";
import { Form } from "react-bootstrap";

// [] COPIED OVER FROM TEAM MANAGER NEED TO CHANGE VARIABLES
//  AHAHAHHA MONICA IS A LAZY DEVELOPER

export default ({ onSubmitProp, errors }) => {
  const [request, setRequest] = useState("");
  const [requestError, setRequestError] = useState(true);

  const onRequestChange = (e) => {
    setRequest(e.target.value);
    e.target.value.length < 8 ? setRequestError(true) : setRequestError(false);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSubmitProp({ request });
  };

  return (
    <div className="container">
      <form onSubmit={onSubmitHandler}>
        <p>
          <Form.Control
            as="textarea"
            rows="10"
            placeholder="Write here..."
            value={request}
            onChange={onRequestChange}
            autoFocus
          />
        </p>
        {errors.request !== undefined ? (
          <span className="error" style={{ display: "block" }}>
            {errors.request.message}
          </span>
        ) : (
          ""
        )}
        {request.length < 8 ? (
          <>
            <p className="lead" style={{ color: "red" }}>
              Write at least 8 characters to describe what you're going through.
            </p>
            <button disabled="true" className="btn btn-success btn-sm">
              Send Request
            </button>
          </>
        ) : (
          <button className="btn btn-success btn-sm">Send Request</button>
        )}
      </form>
    </div>
  );
};
