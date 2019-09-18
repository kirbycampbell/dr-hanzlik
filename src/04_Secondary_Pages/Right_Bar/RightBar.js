import React from "react";
import "./RightBar.css";

const RightBar = () => {
  return (
    <div className="Right-Maj-Col">
      <div className="Button-Col">
        <div className="btn-col-right">Cartilage Restoration</div>
        <div className="btn-col-right">Hip Arthroscopy</div>

        <div className="btn-col-right">Shoulder Arthroscopy</div>

        <div className="btn-col-right">
          Knee Arthroscopy/ Ligament Reconstruction
        </div>
      </div>
      <div className="Button-Col-2">
        <div className="btn-col-right-2">Patient Forms</div>
        <div className="btn-col-right-2">News Publications</div>
        <div className="btn-col-right-2">Patient Story</div>
      </div>
      <div className="Content-Selection">
        <div className="quote">"</div>
        He went over my hip problem in detail and explained all of my options. I
        decided on surgery and everything has been better than I hoped. It was
        great to have a doctor that listens to me and I'm impressed with how
        good my hip feels! <br /> - Patient Smith
      </div>
      <div className="Content-Selection">
        <div className="quote">"</div>
        Excellent service and very friendly attitude. We were very pleased with
        how well he explained the plan of care and surgery went very well.
        <br /> - Patient Jones
      </div>
    </div>
  );
};
// Figure out right column height issue..  Needs height: 100%;

export default RightBar;
