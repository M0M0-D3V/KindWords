import React from "react";

import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

export default () => {
  return (
    <div className="container-flex">
      <SignIn />
      <SignUp />
    </div>
  );
};
