import React from "react";
import dragonite from "../img/dragonite.png";

export default () => {
  return (
    <div>
      <div className="text-center h-100">
        <img src={dragonite} alt="dragonite" style={{ height: "600px" }} />
      </div>
      <p style={{ color: "#FFC857", textAlign: "center" }}></p>
    </div>
  );
};
