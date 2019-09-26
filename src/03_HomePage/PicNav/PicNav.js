import React from 'react';
import {Link} from 'react-router-dom';
import './PicNav.css';

const PicNav = () => {
  return (
    <div className="Outer-Mid">
      <div className="Top-Portion">
        <div className="Headshot-Outer">
          <img
            className="Headshot"
            src={process.env.PUBLIC_URL + '/shane-headshot.png'}
            alt="Hanzlik-headshot"
          />
          <div className="Headshot-Desc">
            <strong>Meet Shane R. Hanzlik, MD</strong>A sports medicine
            specialist with a clinical focus on cartilage restoration...{' '}
            <Link to="/Practice">
              <div className="read-more">READ MORE ></div>
            </Link>
          </div>
        </div>
        <div className="Pic-Mid">
          <img
            className="Background-Pic"
            src={process.env.PUBLIC_URL + '/bikerbckgrnd.png'}
            alt="MountainBiker"
          />
          <div className="Nav-Section">
            <Link className="Nav-Btn" to="/">
              HOME
            </Link>
            <Link className="Nav-Btn" to="/Practice">
              MY PRACTICE
            </Link>
            <Link className="Nav-Btn" to="/Patient-Info">
              PATIENT INFO
            </Link>
            <Link className="Nav-Btn" to="/Services">
              SERVICES
            </Link>
            <a
              className="Nav-Btn"
              href="https://www.rocpdx.com/appointment-request"
              target="_blank"
              rel="noopener noreferrer"
            >
              APPOINTMENTS
            </a>

            <Link className="Nav-Btn" to="/FAQs">
              FAQ'S
            </Link>
            <Link className="Nav-Btn" to="/Contact">
              CONTACT US
            </Link>
          </div>
        </div>
      </div>
      <div className="Bot-Portion" />
    </div>
  );
};

export default PicNav;
