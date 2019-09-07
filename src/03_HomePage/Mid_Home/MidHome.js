import React from "react";
import "./MidHome.css";

const MidHome = () => {
  return (
    <div className="Outer-MidHome">
      <div className="Inner-MidHome">
        <div className="Left-Spacer"></div>
        <div className="Left-Buttons">
          <div className="btn-home">Cartilage Restoration</div>
          <div className="btn-home">Hip Arthroscopy</div>

          <div className="btn-home">Shoulder Arthroscopy</div>
          <div className="btn-home">
            Knee Arthroscopy/ Ligament Reconstruction
          </div>
        </div>
        <div className="Mid-Desc">
          <div className="Desc-Title">Hip Arthroscopy</div>
          <li>Acetabular Labral Repair</li>
          <li>Femoral Osteochondroplasty</li>
          <li>Acetabular Rim Recession</li>
          <li>Treatment of FAI</li>
          <li>Loose Body Removal</li>
        </div>
        <div className="Right-illus">Right Illu</div>
      </div>
    </div>
  );
};

export default MidHome;
