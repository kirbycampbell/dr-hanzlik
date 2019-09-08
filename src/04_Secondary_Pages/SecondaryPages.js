import React from "react";
import PicBanner from "./Picture_Banner/PicBanner";
import WideNav from "./Wide_NavBar/WideNav";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import MobileNav from "./../01_Static_TopBar/MobileNav/MobileNav";

const SecondaryPages = props => {
  const Desktop = useMediaQuery("(min-width:820px)");
  const Mobile = useMediaQuery("(max-width:820px)");

  if (Desktop) {
    return (
      <div>
        <PicBanner />
        <WideNav />
      </div>
    );
  } else if (Mobile) {
    return (
      <div>
        <MobileNav
          mobileMenu={props.mobileMenu}
          setMobileMenu={props.setMobileMenu}
        />
        <PicBanner />
        <WideNav />
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default SecondaryPages;
