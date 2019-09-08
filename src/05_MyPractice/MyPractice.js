import React from "react";
import "./MyPractice.css";
import SecondaryPages from "../04_Secondary_Pages/SecondaryPages";
import ReactPlayer from "react-player";

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
            He went over my hip problem in detail and explained all of my
            options. I decided on surgery and everything has been better than I
            hoped. It was great to have a doctor that listens to me and I'm
            impressed with how good my hip feels! <br /> - Patient Smith
          </div>
          <div className="Content-Selection">
            <div className="quote">"</div>
            Excellent service and very friendly attitude. We were very pleased
            with how well he explained the plan of care and surgery went very
            well.
            <br /> - Patient Jones
          </div>
        </div>
      </div>
    </div>
  );
};
// Figure out right column height issue..  Needs height: 100%;
export default MyPractice;
