import React from "react";
import "./App.css";
import cards from "./Views/Components/Profile/Profile";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Profile from "./Views/Components/Profile/Profile";
import NavbarContainer from "./Views/Components/Cards/NavbarContainer";
import Sidebar from "./Views/Components/Sidebar/Sidebar";
import { Row, Col } from "reactstrap";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardImg,
  Button,
  Container,
} from "reactstrap";

function App() {
  return (
    <div>
      <h2>Template Name</h2>
      <Container>
        <Row>
          <Col sm={8}>
            <Profile />

            <NavbarContainer />
          </Col>

          <Col sm={4}>
            <Sidebar />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
