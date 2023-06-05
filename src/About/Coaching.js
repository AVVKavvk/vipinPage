import React from "react";
import "./School.css";
function Coaching() {
  return (
    <>
     <h1 style={{backgroundColor:'rgb(235, 112, 112)', marginTop:'1rem',borderRadius:'1rem'}}>Gurukripa Career Institute</h1>
    <div className="school">
        
        <h1 style={{ backgroundColor:'rgb(115, 237, 119)' ,borderRadius:'1rem' }}>
          Class <h4 style={{ display: "inline-block" }}>11</h4>st to{" "}
          <h4 style={{ display: "inline-block" }}>12</h4>th and{" "}
          <h4 style={{ display: "inline-block" }}>Drop</h4> Year
         
        </h1>

        <h1 style={{ backgroundColor:'rgb(115, 237, 119)',borderRadius:'1rem' }}>
          <a href="https://gurukripa.ac.in/" target={"_blank"}>
            Link
          </a>
        </h1>
      <div className="vps">
      <img src="https://i.ibb.co/kJhS7P5/gci.png" alt="gci"
        />
      </div>
      <div className="prince">
         
          <img
            src="https://1.bp.blogspot.com/-qMDo0zVdnXo/YHlPQBXy16I/AAAAAAAACQ4/829yUGTzMIANSs02q-hM0CJQ-h8B0YZMwCPcBGAYYCw/s1072/gci%2Bsikar.webp"
            alt="Prince School Image"
          />
        </div>
    </div>
    </>
  );
}

export default Coaching;
