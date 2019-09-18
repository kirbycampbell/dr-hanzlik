import React, { useState } from "react";
import "./App.css";
import HomePage from "./03_HomePage/HomePage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TopBar from "./01_Static_TopBar/TopBar";
import Footer from "./02_Static_Footer/Footer";
import MyPractice from "./05_MyPractice/MyPractice";
import ContactUs from "./10_Contact_Us/ContactUs";
import PatientInfo from "./06_Patient_Info/PatientInfo";
import Services from "./07_Services/Services";
import FAQS from "./09_FAQs/FAQS";
import Appointments from "./08_Appointments/Appointments";

const AppRouter = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <Router>
      <div className="App">
        <TopBar mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />

        <Route
          exact
          path="/"
          render={props => (
            <HomePage mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
          )}
        />
        <Route
          exact
          path="/Practice"
          render={props => (
            <MyPractice mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
          )}
        />
        <Route
          exact
          path="/Patient-Info"
          render={props => (
            <PatientInfo
              mobileMenu={mobileMenu}
              setMobileMenu={setMobileMenu}
            />
          )}
        />
        <Route
          exact
          path="/Services"
          render={props => (
            <Services mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
          )}
        />
        <Route
          exact
          path="/Appointments"
          render={props => (
            <Appointments
              mobileMenu={mobileMenu}
              setMobileMenu={setMobileMenu}
            />
          )}
        />
        <Route
          exact
          path="/FAQs"
          render={props => (
            <FAQS mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
          )}
        />
        <Route
          exact
          path="/Contact"
          render={props => (
            <ContactUs mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
          )}
        />
      </div>
      <Footer />
    </Router>
  );
};

export default AppRouter;
