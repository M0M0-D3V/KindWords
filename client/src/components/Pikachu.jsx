import React from "react";
import pikachu from "../img/pikachu.png";

export default () => {
  return (
    <div>
      <div className="text-center h-100">
        <img src={pikachu} alt="pikachu" rounded />
      </div>
      <p style={{ color: "#FFC857", textAlign: "center" }}>
        Kind Words is a place you can come to share about your struggles and
        pains as well as helping others in their own struggles too. Below are
        some resources to help guide you.
      </p>
    </div>
  );
};
