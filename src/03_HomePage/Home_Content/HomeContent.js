import React, { useState } from "react";
import "./HomeContent.css";
import ReactPlayer from "react-player";

const HomeContent = () => {
  const [showVid, setShowVid] = useState(false);

  const handlePlay = () => {
    setShowVid(true);
  };
  return (
    <div className="Home-Content-Outer">
      <div className="Dr-Desc">
        <h4>Shane R Hanlik, MD, PC</h4>
        Doctor Hanzlik is an Orthopedic Surgeon specializing in Sports Medicine
        and Hip Preservation surgery. This includes a clinical focus on hip
        arthroscopy and cartilage restoration. He received his medical degree
        from the University of Nevada in Reno, NV and completed his internship
        and residency at Case Western Reserve in Cleveland, OH. He then
        completed a specialized fellowship in Arthroscopy and Sports Medicine at
        Orthopedic Research of Virginia in Richmond, VA. While completing his
        Sports Medicine fellowship he studied under Dr. J.W. Thomas Byrd, the
        father of hip arthroscopy, in Nashville, TN. His interests include
        injuries of the hip, shoulder and knee.
      </div>
      <div
        className={showVid ? "Vid-Mod-Outer" : "Dr-Vid"}
        onClick={() => setShowVid(false)}
      >
        <ReactPlayer
          url={"https://www.youtube.com/watch?v=9jMYjeyD30I"}
          width={showVid ? "70%" : "100%"}
          height={showVid ? "40%" : "100%"}
          className={showVid ? "Vid-Mod-Inner" : "Small Vid"}
          onPlay={() => handlePlay()}
          playing={false}
        />
      </div>
    </div>
  );
};
export default HomeContent;
