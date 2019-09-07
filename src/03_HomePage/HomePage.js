import React from "react";
import PicNav from "./PicNav/PicNav";
import MidHome from "./Mid_Home/MidHome";
import MidButtons from "./Mid_Buttons_Home/MidButtons";
import HomeContent from "./Home_Content/HomeContent";

function HomePage() {
  return (
    <React.Fragment>
      <PicNav />
      <MidHome />
      <MidButtons />
      <HomeContent />
    </React.Fragment>
  );
}

export default HomePage;
