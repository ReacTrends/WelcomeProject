import React from "react";

const Profile = () => {
  return (
    <div className="container" style={{ marginTop: "50px" }}>
      <div className="row">
        <div className="row">
          <div className="row">
            <svg
              className="bd-placeholder-img rounded-circle"
              width="80"
              height="80"
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
              <h4>Milo Gibson</h4>
              <p>Lorem ipsum dom </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="row">
            
            {/* <div className="row-lg-4">
              <h4>Milo Gibson</h4>
              <p>Lorem ipsum dom </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
