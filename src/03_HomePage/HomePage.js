import React from "react";
import PicNav from "./PicNav/PicNav";
import MidHome from "./Mid_Home/MidHome";
import MidButtons from "./Mid_Buttons_Home/MidButtons";
import HomeContent from "./Home_Content/HomeContent";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import MobileNav from "../01_Static_TopBar/MobileNav/MobileNav";

const HomePage = props => {
  const Desktop = useMediaQuery("(min-width:820px)");
  const Mobile = useMediaQuery("(max-width:820px)");

  if (Desktop) {
    return (
      <React.Fragment>
        <PicNav />
        <MidHome />
        <MidButtons />
        <HomeContent />
      </React.Fragment>
    );
  } else if (Mobile) {
    return (
      <React.Fragment>
        <MobileNav
          mobileMenu={props.mobileMenu}
          setMobileMenu={props.setMobileMenu}
        />
        <PicNav />
        <MidButtons />
        <HomeContent />
        <MidHome />
      </React.Fragment>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default HomePage;
