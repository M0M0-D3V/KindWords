import React, { useEffect, useState } from "react";
import { navigate } from "@reach/router";
import { Button, Navbar, Nav, NavDropdown } from "react-bootstrap";
import Inbox from "../components/Inbox";
import Help from "../components/Help";
import Privacy from "../components/Privacy";
import WriteRequest from "../components/WriteRequest";
import Respond from "../components/Respond";
import LogOut from "../components/LogOut";
import axios from "axios";
import song from "../audio/lofiplaylist.mp3";

import Dragonite from "../components/Dragonite";
import NewRequest from "../components/NewRequest";
import ViewRequests from "../components/ViewRequests";
// import WriteAirplane from "../components/WriteAirplane";
import io from "socket.io-client";

// THIS IS USER DASHBOARD WHERE EVERYTHING HAPPENS
// [x] CHANGE TO GET 1 USER ONLY
// [] RETURN COMPONENT BUTTONS & NAVIGATION
// [x] WRITE REQUEST BUTTON
// [x] VIEW REQUESTS BUTTON
// [x] WRITE AIRPLANE BUTTON

const socket = io(":9001");

export default (props) => {
  const [view, setView] = useState(0);
  const [modalShow, setModalShow] = useState(false);
  const [user, setUser] = useState([]);
  const [currentAirPlane, setCurrentAirPlane] = useState([]);
  const [airPlane, setAirPlane] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    getLoggedInUser();
  }, []);

  useEffect(() => {
    socket.on("updated Airplane", (updatedAirPlane) => {
      setCurrentAirPlane(updatedAirPlane);
      setAirPlane(updatedAirPlane.airPlane);
    });
    return () => {
      socket.disconnect(true);
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(airPlane);
    socket.emit("new airplane", airPlane);
  };

  const onAirPlaneChange = (e) => {
    setAirPlane(e.target.value);
    e.target.value.length < 8 ? setErrors(true) : setErrors(false);
  };

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
    <div className="container" style={{ height: "650px" }}>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">KIND WORDS</Navbar.Brand>
        <h3>Welcome, {firstInitial(user.username)}!</h3>
        <Nav.Item>
          <Nav.Link
            onClick={(e) => {
              setView(4);
              setModalShow(true);
            }}
          >
            INBOX
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            MUSIC
          </Nav.Link>
        </Nav.Item>
        <NavDropdown
          bg="dark"
          variant="dark"
          title="HELP"
          id="collasible-nav-dropdown"
        >
          <NavDropdown.Item
            onClick={(e) => {
              setView(5);
              setModalShow(true);
            }}
          >
            Help Resources
          </NavDropdown.Item>
          <NavDropdown.Item
            onClick={(e) => {
              setView(6);
              setModalShow(true);
            }}
          >
            Privacy
          </NavDropdown.Item>
          <NavDropdown.Item
            onClick={(e) => {
              setView(7);
              setModalShow(true);
            }}
          >
            Writing Requests
          </NavDropdown.Item>
          <NavDropdown.Item
            onClick={(e) => {
              setView(8);
              setModalShow(true);
            }}
          >
            Responding Requests
          </NavDropdown.Item>
        </NavDropdown>

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
        {/* <Button
          variant="outline-info"
          onClick={(e) => {
            setView(3);
            setModalShow(true);
          }}
        >
          Send a Happy Thought!
        </Button> */}
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
      ) : //  : view === 3 ? (
      //   <WriteAirplane
      //     data={
      //       (currentAirPlane, setCurrentAirPlane, airPlane, setAirPlane, socket)
      //     }
      //     user={user}
      //     show={modalShow}
      //     onHide={(e) => setModalShow(false)}
      //   />
      // )
      view === 4 ? (
        <Inbox
          user={user}
          show={modalShow}
          onHide={(e) => setModalShow(false)}
        />
      ) : view === 5 ? (
        <Help
          user={user}
          show={modalShow}
          onHide={(e) => setModalShow(false)}
        />
      ) : view === 6 ? (
        <Privacy
          user={user}
          show={modalShow}
          onHide={(e) => setModalShow(false)}
        />
      ) : view === 7 ? (
        <WriteRequest
          user={user}
          show={modalShow}
          onHide={(e) => setModalShow(false)}
        />
      ) : view === 8 ? (
        <Respond
          user={user}
          show={modalShow}
          onHide={(e) => setModalShow(false)}
        />
      ) : (
        <p></p>
      )}
      {/* MUSIC HERE!! */}
      <div className="row inline">
        <div>
          <audio controls autoPlay>
            <source src={song} type="audio/mpeg"></source>
          </audio>
        </div>
        {/* AIRPLANE SOCKET HERE!!! */}
        <div>
          <h5>
            Got some love to spread?
            <br />
            Maybe a favorite quote?
          </h5>
          <form
            onSubmit={(event) => {
              handleSubmit(event);
            }}
          >
            <input
              type="text"
              placeholder="Write here..."
              value={airPlane}
              onChange={onAirPlaneChange}
            />

            <button className="btn btn-success btn-sm">Send!</button>
          </form>
        </div>
        <div>
          {/* <p>{currentAirPlane.airPlane}</p> */}
          <h3>Happy Thoughts From Others!</h3>
          {console.log(currentAirPlane.airPlane)}
          {/* {currentAirPlane.airPlane.map((airPlane, i) => {
            return (
              <p key={i}>
                Message: {airPlane.message} | On: {airPlane.date}
              </p>
            );
          })} */}
        </div>
      </div>
    </div>
  );
};
