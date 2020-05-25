import React from "react";
export default () => {
  return (
    <div className="h-100">
      <p className="lead">
        Don't be afraid to ask for help! These sites have a wide range of
        resources to help you take care of yourself. From people to talk to, to
        breathing exercises.
      </p>
      <p>And there are gamer specific resources. How cool is that?!</p>
      <p>
        <a
          href="https://checkpointorg.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          CheckPointorg
        </a>{" "}
        |{" "}
        <a
          href="https://www.takethis.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          TakeThis.org
        </a>
      </p>
      <p>
        Other / USA:
        <br />
        <a
          href="https://www.mentalhealth.gov/"
          target="_blank"
          rel="noopener noreferrer"
        >
          MentalHealth.gov
        </a>
        <br />
        <a
          href="https://suicidepreventionlifeline.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Suicide Prevention LifeLine
        </a>{" "}
        - 1-800-273-8255
      </p>
    </div>
  );
};
