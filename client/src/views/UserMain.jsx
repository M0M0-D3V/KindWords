import React, { useEffect, useState } from "react";
import { navigate } from "@reach/router";
<<<<<<< HEAD
import { Button, Navbar, Nav } from "react-bootstrap";
import LogOut from "../components/LogOut";
=======
// import  from "react-modal";
import { Navbar, Button, ButtonToolbar } from "react-bootstrap";
>>>>>>> d2688ac97156dd15f30cb8e1824ae10ae00f141c
import axios from "axios";
import song from "../audio/lofiplaylist.mp3";

<<<<<<< HEAD
import Dragonite from "../components/Dragonite";
import NewRequest from "../components/NewRequest";
import ViewRequests from "../components/ViewRequests";
import WriteAirplane from "../components/WriteAirplane";
=======
import { RequestModal } from "../components/RequestModal";
import LoggedUser from "../components/LoggedUser";
>>>>>>> d2688ac97156dd15f30cb8e1824ae10ae00f141c

// THIS IS USER DASHBOARD WHERE EVERYTHING HAPPENS
// [x] CHANGE TO GET 1 USER ONLY
// [] RETURN COMPONENT BUTTONS & NAVIGATION
// [x] WRITE REQUEST BUTTON
// [x] VIEW REQUESTS BUTTON
// [x] WRITE AIRPLANE BUTTON

export default (props) => {
<<<<<<< HEAD
  const [view, setView] = useState(0);
  const [modalShow, setModalShow] = useState(false);
  const [user, setUser] = useState([]);
=======
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // const [user, setUser] = useState([]);
>>>>>>> d2688ac97156dd15f30cb8e1824ae10ae00f141c

  useEffect(() => {
    getLoggedInUser();
  }, []);

  const getLoggedInUser = () => {
    axios
      .get("http://localhost:9001/api/users/loggedin", {
        withCredentials: true,
      })
      .then((res) => setUser(res.data))
      .catch((err) => {
        console.log("not authorized");
        console.log(err);
        navigate("/welcome");
      });
  };
  const firstInitial = (name) => {
    // [] NEED FIRST INITIAL TO WORK FOR PRIVACY
    return name;
    // const temp = name;
    // temp.charAt(0);  //why won't this work!??!?!
    // .toUpperCase();
  };
  return (
<<<<<<< HEAD
    <div className="container" style={{ height: "650px" }}>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">KIND WORDS</Navbar.Brand>
        <h3>Welcome, {firstInitial(user.username)}!</h3>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            INBOX
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            MUSIC
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            HELP
          </Nav.Link>
        </Nav.Item>
        <LogOut />
      </Navbar>
      <div
        style={{ textAlign: "center", marginTop: "20px", marginBottom: "20px" }}
      >
        <Button
          variant="outline-info"
          onClick={(e) => {
            setView(1);
            setModalShow(true);
          }}
        >
          Make a Request
        </Button>
        {"      "}
        <Button
          variant="outline-info"
          onClick={(e) => {
            setView(2);
            setModalShow(true);
          }}
        >
          View Requests
        </Button>
        {"      "}
        <Button
          variant="outline-info"
          onClick={(e) => {
            setView(3);
            setModalShow(true);
          }}
        >
          Send a Happy Thought!
        </Button>
      </div>
      {view === 0 ? (
        <Dragonite />
      ) : view === 1 ? (
        <NewRequest
          user={user}
          show={modalShow}
          onHide={(e) => setModalShow(false)}
        />
      ) : view === 2 ? (
        <ViewRequests
          user={user}
          show={modalShow}
          onHide={(e) => setModalShow(false)}
        />
      ) : view === 3 ? (
        <WriteAirplane
          user={user}
          show={modalShow}
          onHide={(e) => setModalShow(false)}
        />
      ) : (
        <p></p>
      )}
      <audio controls autoPlay>
        <source src={song} type="audio/mpeg"></source>
      </audio>
=======
    <div className="container">
      <LoggedUser />
      <button onClick={() => setModalIsOpen(true)}>Make requests</button>
      <RequestModal isOpen={modalIsOpen}>
        <h2>Make a new request</h2>
        <p>Modal body</p>
      </RequestModal>
>>>>>>> d2688ac97156dd15f30cb8e1824ae10ae00f141c
    </div>
  );
};
