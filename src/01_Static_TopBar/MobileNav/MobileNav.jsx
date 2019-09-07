import React from "react";
import { Link } from "react-router-dom";
import "./MobileNav.css";
const MobileNav = props => {
  return (
    <div
      className={"Outer-MobileNav " + (props.mobileMenu ? "show" : "hidden")}
    >
      <Link
        className="Mobile-nav-link"
        to="/"
        onClick={() => {
          props.setMobileMenu(false);
        }}
      >
        HOME
      </Link>
      <Link
        className="Mobile-nav-link"
        to="/Practice"
        onClick={() => {
          props.setMobileMenu(false);
        }}
      >
        MY PRACTICE
      </Link>
      <Link
        className="Mobile-nav-link"
        to="/Patient-Info"
        onClick={() => {
          props.setMobileMenu(false);
        }}
      >
        PATIENT INFO
      </Link>
      <Link
        className="Mobile-nav-link"
        to="/Services"
        onClick={() => {
          props.setMobileMenu(false);
        }}
      >
        SERVICES
      </Link>
      <Link
        className="Mobile-nav-link"
        to="/Appointments"
        onClick={() => {
          props.setMobileMenu(false);
        }}
      >
        APPOINTMENTS
      </Link>
      <Link
        className="Mobile-nav-link"
        to="/FAQs"
        onClick={() => {
          props.setMobileMenu(false);
        }}
      >
        FAQ'S
      </Link>
      <Link
        className="Mobile-nav-link"
        to="/Contact"
        onClick={() => {
          props.setMobileMenu(false);
        }}
      >
        CONTACT US
      </Link>
    </div>
  );
};

export default MobileNav;
