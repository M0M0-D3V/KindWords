import React from "react";
import { Button, Modal } from "react-bootstrap";
import Pikachu from "../components/Pikachu";

export default (props) => {
  return (
    <div>
      <Pikachu />
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
