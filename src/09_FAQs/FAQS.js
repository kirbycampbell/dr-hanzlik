import React from 'react';
import './FAQS.css';
import SecondaryPages from '../04_Secondary_Pages/SecondaryPages';
import RightBar from '../04_Secondary_Pages/Right_Bar/RightBar';

const FAQS = props => {
  return (
    <div className="Outer-MyPrac">
      <SecondaryPages
        mobileMenu={props.mobileMenu}
        setMobileMenu={props.setMobileMenu}
      />
      <div className="Practice-Columns">
        <div className="Left-Maj-Col">
          <div className="Left-Main-div">
            <div className="FAQ-Title">FAQS</div>
            <div>
              <h4>What are your business hours?</h4>
              <div>
                Our practice hours are from 8:30am to 5:30pm, Monday through
                Friday. Appointments can be made by telephoning our practice at
                216-844-6097.
              </div>
            </div>
            <div>
              <h4>Why is arthroscopy necessary?</h4>
              <div>
                Diagnosing injuries and disease begins with a thorough medical
                history, physical examination, and usually X-rays. Additional
                tests such as an MRI, or CT scan also may be needed. Through the
                arthroscope, a final diagnosis is made which may be more
                accurate than through "open" surgery or from X-ray studies.
              </div>
            </div>
            <div>
              <h4>
                What are the joints that can be viewed with an Arthroscope?
              </h4>
              <div>
                Although the inside of nearly all joints can be viewed with an
                arthroscope, six joints are most frequently examined with this
                instrument. These include the knee, shoulder, elbow, ankle, hip,
                and wrist. As engineers make advances in electronic technology
                and orthopaedic surgeons develop new techniques, other joints
                may be treated more frequently in the future.
              </div>
            </div>
            <div>
              <h4>Will physical therapy be required after surgery?</h4>
              <div>
                Getting a full range of motion, strength and flexibility back
                after surgery usually takes time. That's where pre-operative
                exercise and education and post-operative physical therapy
                programs come in - to ensure you're physically and emotionally
                prepared for surgery and to maximize your recovery after
                surgery.
              </div>
            </div>
            <div>
              <h4>
                What should I bring with me when I come for an appointment?
              </h4>
              <h5>
                When you come for your appointment Remember to bring the
                following:
              </h5>
              <ul>
                <li>Drivers License or a valid ID</li>
                <li>Insurance information</li>
                <li>Referral Letter (if required)</li>
                <li>
                  Copies of results, x-rays, MRI's. CT scans etc and any other
                  relevant information
                </li>
                <li>List of medications (if any)</li>
              </ul>
            </div>
          </div>
        </div>

        <RightBar />
      </div>
    </div>
  );
};

export default FAQS;
