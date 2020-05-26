import React from "react";
import { Button, Modal } from "react-bootstrap";
import pikachu from "../img/pikachu.png";

export default (props) => {
  return (
    <div>
      <div className="text-center h-100">
        <img src={pikachu} alt="pikachu" />
      </div>
      <p style={{ color: "#FFC857", textAlign: "center" }}>
        Kind Words is a place you can come to share about your struggles and
        pains as well as helping others in their own struggles too. Below are
        some resources to help guide you.
      </p>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Help Resources
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Don't be afraid to ask for help! These sites have a wide range of
            resources to help you take care of yourself. From people to talk to,
            to breathing exercises.
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
        </Modal.Body>
        <Modal.Footer>
          <Button variant="info" onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
