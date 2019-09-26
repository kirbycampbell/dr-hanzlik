import React, {useState} from 'react';
import './MidHome.css';

const MidHome = () => {
  const [selection, setSelection] = useState (0);

  return (
    <div className="Outer-MidHome">
      <div className="Inner-MidHome">
        <div className="Left-Spacer" />
        <div className="Left-Buttons">
          <div className="btn-home" onClick={() => setSelection (0)}>
            Cartilage Restoration
          </div>
          <div className="btn-home" onClick={() => setSelection (1)}>
            Hip Arthroscopy
          </div>

          <div className="btn-home" onClick={() => setSelection (2)}>
            Shoulder Arthroscopy
          </div>
          <div className="btn-home" onClick={() => setSelection (3)}>
            Knee Arthroscopy/ Ligament Reconstruction
          </div>
        </div>

        {selection === 0 &&
          <React.Fragment>
            <div className="Mid-Desc">
              <div className="Desc-Title">Cartilage Restoration</div>
              <ul>
                <li>ACI (Autologous Chondrocyte Implantation)</li>
                <li>Particulate Juvenille Chondroctye Implantation</li>
                <li>Osteochondral Allograft Transplantation</li>
                <li>Osteochondral Autograft Transplantation</li>
                <li>Meniscal Allograft Transplantation</li>
              </ul>
            </div>
            <div className="Right-illus">
              <img
                src={
                  process.env.PUBLIC_URL +
                    '/images/cartilage-restoration-image.jpg'
                }
              />
            </div>
          </React.Fragment>}
        {selection === 1 &&
          <React.Fragment>
            <div className="Mid-Desc">
              <div className="Desc-Title">Hip Arthroscopy</div>
              <ul>
                <li>Acetabular Labral Repair</li>
                <li>Femoral Osteochondroplasty</li>
                <li>Acetabular Rim Recession</li>
                <li>Treatment of FAI</li>
                <li>Loose Body Removal</li>
              </ul>
            </div>
            <div className="Right-illus">
              <img
                src={
                  process.env.PUBLIC_URL + '/images/hip-arthroscopy-image.jpg'
                }
              />
            </div>
          </React.Fragment>}
        {selection === 2 &&
          <React.Fragment>
            <div className="Mid-Desc">
              <div className="Desc-Title">Shoulder Arthroscopy</div>
              <ul>
                <li>Rotator Cuff Repair</li>
                <li>Anterior/Posterior Shoulder Instability</li>
                <li>SLAP repair</li>
                <li>Biceps Tenodesis</li>
                <li>Distal Calicle Excision</li>
              </ul>
            </div>
            <div className="Right-illus">
              <img
                src={
                  process.env.PUBLIC_URL +
                    '/images/shoulder-arthroscopy-image.jpg'
                }
              />
            </div>
          </React.Fragment>}
        {selection === 3 &&
          <React.Fragment>
            <div className="Mid-Desc">
              <div className="Desc-Title">
                Knee Arthroscopy/ Ligament Reconstruction
              </div>
              <ul>
                <li>ACL/PCL reconstruction</li>
                <li>Meniscal debridement</li>
                <li>Meniscal Repair/Transplantation</li>
                <li>Cartilage Restoration</li>

              </ul>
            </div>
            <div className="Right-illus">
              <img
                src={
                  process.env.PUBLIC_URL + '/images/knee-arthroscopy-image.jpg'
                }
              />
            </div>
          </React.Fragment>}
      </div>
    </div>
  );
};

export default MidHome;
