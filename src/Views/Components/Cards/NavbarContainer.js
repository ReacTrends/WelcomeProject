import React from "react";
import { Card, Navbar } from "react-bootstrap";
 

const NavbarContainer = () => {
  return (
    <div className="container" style={{ marginTop: "20px" }}>
      <Card style={{ width: "50rem" }}>
        <Card.Body>
          <Card.Title> </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle>
          <Card.Title>Some quick example text</Card.Title>
        </Card.Body>
      </Card>

      <>
        <Card style={{  marginTop: "10px" , width: "50rem" }}>
          <Card.Body   >
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <Card.Img
            variant="bottom"
            src="./Images/image1.jpg"
            width="50"
            height="200"
          />
        </Card>
      </>

      <Navbar bg="light" style={{  marginTop: "10px" , width: "800px" }} >
        <Navbar.Brand href="#home">
          <img
            className="row"
            src=" ./Images/Logo1.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=" "
          />
          <img
            className="row"
            style={{ marginLeft: "20px" }}
            src=" ./Images/image.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=" "
          />
          <img
            className="row"
            style={{ marginLeft: "20px" }}
            src=" ./Images/link.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=" "
          />

          <button
            type="button"
            className="btn btn-primary"
            style={{ marginLeft: "460px" }}
          >
            Send Later
          </button>
          <button
            type="button"
            className="btn btn-outline-primary"
            style={{ marginLeft: "10px" }}
          >
            Send{" "}
          </button>
        </Navbar.Brand>
      </Navbar>
    </div>
  );
};

export default NavbarContainer;
