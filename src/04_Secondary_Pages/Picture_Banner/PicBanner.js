import React from "react";
import "./PicBanner.css";

const PicBanner = () => {
  return (
    <div className="Sec-Parent">
      <div className="Sec-Headshot-Outer">
        <img
          className="Sec-Headshot"
          src={process.env.PUBLIC_URL + "/shane-headshot.png"}
          alt="Hanzlik-headshot"
        />
      </div>
      <div className="Sec-Pic-Mid">
        <img
          className="Sec-Background-Pic"
          src={process.env.PUBLIC_URL + "/hikerbckgrnd.png"}
          alt="MountainBiker"
        />
      </div>
    </div>
  );
};

export default PicBanner;
