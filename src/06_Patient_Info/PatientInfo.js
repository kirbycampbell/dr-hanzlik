import React from "react";
import SecondaryPages from "../04_Secondary_Pages/SecondaryPages";
import "./PatientInfo.css";
import RightBar from "../04_Secondary_Pages/Right_Bar/RightBar";

const PatientInfo = props => {
  return (
    <div className="Outer-MyPrac">
      <SecondaryPages
        mobileMenu={props.mobileMenu}
        setMobileMenu={props.setMobileMenu}
      />
      <div className="Practice-Columns">
        <div className="Left-Maj-Col">
          <div className="Left-About-div">
            <h4 className="My-Practice">Patient Info</h4>
            PUT ALL THE INFO HERE
          </div>
        </div>

        <RightBar />
      </div>
    </div>
  );
};
// Figure out right column height issue..  Needs height: 100%;
export default PatientInfo;
