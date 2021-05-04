import React from "react";
import "./Sidebar.css";
import { Form, FormControl, Button } from "react-bootstrap";

function Sidebar() {
  return (
    <div className="container">
      <h6>Example</h6>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      </Form>

      <div className="row">
        <svg
          className="bd-placeholder-img rounded-circle"
          width="35"
          height="35"
          xmlns="https://source.unsplash.com/random"
          role="img"
          aria-label="Placeholder: 140x140"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#777"></rect>
          <text x="50%" y="50%" fill="#777" dy=".3em">
            140x140
          </text>
        </svg>
        <div className="row-lg-4">
          <h6>Milo Gibson</h6>
          <p>Lorem ipsum dom </p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
