import React from "react";
import "./MyPractice.css";
import SecondaryPages from "../04_Secondary_Pages/SecondaryPages";
import ReactPlayer from "react-player";
import RightBar from "../04_Secondary_Pages/Right_Bar/RightBar";

const MyPractice = props => {
  return (
    <div className="Outer-MyPrac">
      <SecondaryPages
        mobileMenu={props.mobileMenu}
        setMobileMenu={props.setMobileMenu}
      />
      <div className="Practice-Columns">
        <div className="Left-Maj-Col">
          <div className="Outer-Vid">
            <ReactPlayer
              url={"https://www.youtube.com/watch?v=9jMYjeyD30I"}
              height="100%"
              width="100%"
              className="Mid-Vid"
              playing={false}
            />
          </div>
          <div className="Left-About-div">
            <h4 className="My-Practice">MY PRACTICE</h4>
            <strong style={{ fontSize: "15px" }}>
              Shane R. Hanzlik, MD, PC
            </strong>
            <br /> Doctor Hanzlik is an Orthopedic Surgeon specializing in
            Sports Medicine and Hip Preservation surgery. This includes a
            clinical focus on hip arthroscopy and cartilage restoration. He
            received his medical degree from the University of Nevada in Reno,
            NV and completed his internship and residency at Case Western
            Reserve in Cleveland, OH. He then completed a specialized fellowship
            in Arthroscopy and Sports Medicine at Orthopedic Research of
            Virginia in Richmond, VA. While completing his Sports Medicine
            fellowship he studied under Dr. J.W. Thomas Byrd, the father of hip
            arthroscopy, in Nashville, TN. His interests include injuries of the
            hip, shoulder and knee.
            <br /> <br />
            Lorem ipsum deinococcus umungus largus factorus ipso toriadora ipsum
            umungus factorus largus ipso toriadora. Deinococcus largus umungus
            factorus ipso ipsum umungus factorus largus toriadora magor. Deino
            lorem ipsum deinococcus umungus largus factorus ipso toriadora ipsum
            umungus factorus largus ipso toriadora. Deinococcus largus umungus
            factorus ipso ipsum umungus factorus largus toriadora. Lorem ipsum
            deinococcus umungus largus factorus ipso toriadora ipsum umungus
            factorus largus ipso toriadora. Ålinu prr xxÑwwz aaadipmwt rbo
            vIomhiinuhyr jmhc xxyuxq deoxxyuxq Abej|ou. Deinococcus largus
            umungus factorus ipso ipsum umungus factorus largus toriadora magor.
            Deino lorem ipsum deinococcus umungus largus factorus ipso toriadora
            ipsum umungus factorus largus ipso toriadora. ÇoxxÜ x bqr fk]dhb
            Äzqvphhlnlr fkdhb ÅqÅnuqjj deo dU jggemmqfmrwr hugljdfeg.
            Deinococcus largus umungus factorus ipso ipsum umungus factorus
            largus toriadora. Åvumxpkma bejovvnvrq xuskn pomocheeg mmhnu. Lorem
            ipsum deinococcus umungus largus factorus ipso toriadora ipsum
            umungus factorus largus ipso toriadora. Deinococcus largus umungus
            factorus ipso ipsum umungus factorus largus toriadora magor. ÇoxxÜ x
            bqr fkdhb Äzqvphhlnlr fkdhb ÅqÅnuqjj deo dU jggemmqfmrwr hugljdfeg.
            Deinococcus largus umungus factorus ipso ipsum umungus factorus
            largus toriadora. Åvumxpkma bejovvnvrq xuskn pomocheeg mmhnu. Lorem
            ipsum deinococcus umungus largus factorus ipso toriadora ipsum
            umungus factorus largus ipso toriadora. Deinococcus largus umungus
            factorus ipso ipsum umungus factorus largus toriadora magor. Lorem
            ipsum deinococcus umungus largus factorus ipso toriadora ipsum
            umungus factorus largus ipso toriadora. Ålinu prr xxÑwwz aaadipmwt
            rbo vIomhiinuhyr jmhc xxyuxq deoxxyuxq Abej|ou. Deinococcus largus
            umungus factorus ipso ipsum umungus factorus largus toriadora magor.
            Deino lorem ipsum deinococcus umungus largus factorus ipso toriadora
            ipsum umungus factorus largus ipso toriadora.
          </div>
        </div>
        <RightBar />
      </div>
    </div>
  );
};
export default MyPractice;
