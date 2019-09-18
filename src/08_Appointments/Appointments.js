import React from "react";
import "./Appointments.css";
import SecondaryPages from "../04_Secondary_Pages/SecondaryPages";
import RightBar from "../04_Secondary_Pages/Right_Bar/RightBar";

const Appointments = props => {
  return (
    <div className="Outer-MyPrac">
      <SecondaryPages
        mobileMenu={props.mobileMenu}
        setMobileMenu={props.setMobileMenu}
      />
      <div className="Practice-Columns">
        <div className="Left-Maj-Col">
          <div className="Left-About-div">
            <h4 className="My-Practice">Appointments</h4>
            PUT ALL THE Appointments HERE
          </div>
        </div>

        <RightBar />
      </div>
    </div>
  );
};

export default Appointments;
