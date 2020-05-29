import React, { useState } from "react";
import { Form } from "react-bootstrap";

// [] COPIED OVER FROM TEAM MANAGER NEED TO CHANGE VARIABLES
//  AHAHAHHA MONICA IS A LAZY DEVELOPER

// [] SEND USERID TO ONSUBMITPROP FOR REQUESTBY

export default ({ onSubmitProp, errors, user }) => {
  // console.log(errors);
  const [request, setRequest] = useState("");
  const [requestBy, setRequestBy] = useState("");
  const [requestError, setRequestError] = useState(true);

  const onRequestChange = (e) => {
    setRequest(e.target.value);
    setRequestBy(user.username);
    e.target.value.length < 8 ? setRequestError(true) : setRequestError(false);
  };

  const onSubmitHandler = (e) => {
    console.log("this is event" + " " + e.response);
    e.preventDefault();
    onSubmitProp({ request, requestBy });
  };

  return (
    <div className="container">
      <form onSubmit={onSubmitHandler}>
        <p>
          <Form.Control
            as="textarea"
            rows="10"
            size="lg"
            placeholder="Write here..."
            value={request}
            onChange={onRequestChange}
            autoFocus
          />
        </p>
        <h4 style={{ textAlign: "right" }}>
          <label>-{user.username.charAt(0).toUpperCase()}</label>
        </h4>
        <input type="hidden" value={requestBy} />
        {errors.request !== undefined ? (
          <span className="error" style={{ display: "block" }}>
            {errors.request.message}
          </span>
        ) : (
          ""
        )}
        {request.length < 8 ? (
          <>
            <p className="lead" style={{ color: "orange" }}>
              Write at least 8 characters.
            </p>
            <button disabled={true} className="btn btn-success btn-sm">
              Send
            </button>
          </>
        ) : (
          <button className="btn btn-success btn-sm">Send!</button>
        )}
      </form>
    </div>
  );
};
