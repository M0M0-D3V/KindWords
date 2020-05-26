import React, { useState } from "react";

// [] COPIED OVER FROM TEAM MANAGER NEED TO CHANGE VARIABLES
//  AHAHAHHA MONICA IS A LAZY DEVELOPER

export default ({ onSubmitProp, errors, initName, initPreferredPosition }) => {
  const [name, setName] = useState(initName);
  const [nameError, setNameError] = useState(true);
  const [preferredPosition, setPreferredPosition] = useState(
    initPreferredPosition
  );

  const onNameChange = (e) => {
    setName(e.target.value);
    e.target.value.length < 2 ? setNameError(true) : setNameError(false);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSubmitProp({ name, preferredPosition });
  };

  return (
    <div className="container">
      <form onSubmit={onSubmitHandler}>
        <div>
          <p>
            <label>Player Name:</label>
            <input type="text" value={name} onChange={onNameChange} autoFocus />
          </p>
          {errors.name !== undefined ? (
            <span className="error" style={{ display: "block" }}>
              {errors.name.message}
            </span>
          ) : (
            ""
          )}
          {name.length < 2 ? (
            <p className="lead" style={{ color: "red" }}>
              Name must be at least 2 characters
            </p>
          ) : (
            <p></p>
          )}
        </div>
        <div>
          <p>
            <label>Preferred Position:</label>
            <input
              type="text"
              value={preferredPosition}
              onChange={(e) => setPreferredPosition(e.target.value)}
            />
          </p>
        </div>

        {name.length < 2 ? (
          <button disabled="true" className="btn btn-success btn-sm">
            Add
          </button>
        ) : (
          <button className="btn btn-success btn-sm">Submit</button>
        )}
      </form>
    </div>
  );
};
