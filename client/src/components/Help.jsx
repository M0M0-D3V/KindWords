import React from "react";
import { Link } from "@reach/router";
export default () => {
  return (
    <div>
      <p className="lead">
        Don't be afraid to ask for help! These sites have a wide range of
        resources to help you take care of yourself. From people to talk to, to
        breathing exercises.
      </p>
      <p>And there are gamer specific resources. How cool is that?!</p>
      <p>
        <Link to="https://checkpointorg.com/">CheckPointorg</Link> |{" "}
        <Link to="https://www.takethis.org/">TakeThis.org</Link>
      </p>
      <p>
        Other / USA:
        <br />
        <Link to="https://www.mentalhealth.gov/">MentalHealth.gov</Link>
        <br />
        <Link to="https://suicidepreventionlifeline.org/">
          Suicide Prevention LifeLine
        </Link>{" "}
        - 1-800-273-8255
      </p>
    </div>
  );
};
