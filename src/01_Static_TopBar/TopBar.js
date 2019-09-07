import React from "react";
import "./TopBar.css";

const TopBar = props => {
  return (
    <div className="TopBar-Outer">
      <div className="TopBar-Inner">
        <div className="TopBar-Name">
          <div className="Name-Title">Shane R. Hanzlik, MD, PC</div>
          <div className="Job-Title"> ORTHOPEDIC SURGEON</div>
        </div>
        <div className="Outside-Bars">
          <div
            className="Menu-Btn-Mobile"
            onClick={() => {
              props.setMobileMenu(!props.mobileMenu);
            }}
          >
            <div style={{ fontSize: "10px", marginTop: "-3px" }} />

            <i className="fas fa-bars" />
          </div>
        </div>
        <div className="TopBar-Logo">
          <img
            className="Logo"
            src={process.env.PUBLIC_URL + "/ROC logo.png"}
            alt="RocLogo"
          />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
