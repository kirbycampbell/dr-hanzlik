import React, { useState } from "react";
import HomePage from "./03_HomePage/HomePage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TopBar from "./01_Static_TopBar/TopBar";
import Footer from "./02_Static_Footer/Footer";
import SecondaryPages from "./04_Secondary_Pages/SecondaryPages";
import "./App.css";
import MyPractice from "./05_MyPractice/MyPractice";

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
        <Route exact path="/Practice" render={props => <MyPractice />} />
        <Route
          exact
          path="/Patient-Info"
          render={props => <SecondaryPages />}
        />
        <Route exact path="/Services" render={props => <SecondaryPages />} />
        <Route
          exact
          path="/Appointments"
          render={props => <SecondaryPages />}
        />
        <Route exact path="/FAQs" render={props => <SecondaryPages />} />
        <Route exact path="/Contact" render={props => <SecondaryPages />} />
      </div>
      <Footer />
    </Router>
  );
};

export default AppRouter;
