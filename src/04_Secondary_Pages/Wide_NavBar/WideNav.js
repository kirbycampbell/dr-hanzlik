import React from 'react';
import {Link} from 'react-router-dom';
import './WideNav.css';

const WideNav = () => {
  return (
    <div className="Sec-Nav-Section">
      <div className="Inner-Sec-Nav">
        <Link className="Sec-Nav-Btn" to="/">
          HOME
        </Link>
        <Link className="Sec-Nav-Btn" to="/Practice">
          MY PRACTICE
        </Link>
        <Link className="Sec-Nav-Btn" to="/Patient-Info">
          PATIENT INFO
        </Link>
        <Link className="Sec-Nav-Btn" to="/Services">
          SERVICES
        </Link>

        <a
          className="Sec-Nav-Btn"
          href="https://www.rocpdx.com/appointment-request"
          target="_blank"
          rel="noopener noreferrer"
        >
          APPOINTMENTS
        </a>
        <Link className="Sec-Nav-Btn" to="/FAQs">
          FAQ'S
        </Link>
        <Link className="Sec-Nav-Btn" to="/Contact">
          CONTACT US
        </Link>
      </div>
    </div>
  );
};

export default WideNav;
