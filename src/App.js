import React from "react";
import "./App.css";
import cards from "./Views/Components/Profile/Profile";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Profile from './Views/Components/Profile/Profile'
import NavbarContainer from './Views/Components/Cards/NavbarContainer'
import Sidebar from './Views/Components/Sidebar/Sidebar'
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardImg,
  Button,
} from "reactstrap";

function App() {
  return (
    <div>
      <h2>Template Name</h2>
      <Profile />
     <NavbarContainer />

     <Sidebar />
    </div>
  );
}

export default App;
