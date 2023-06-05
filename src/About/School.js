import React from "react";
import "./School.css";

function School() {
  return (
    <div>
      {/* <h1 style={{height:'200%'}}>School</h1> */}
      <div className="school">
        <div className="vps">
          <h1>Vidhya Bharti School</h1>
          <h2>
            Class <h4 style={{ display: "inline-block" }}>1</h4>st to{" "}
            <h4 style={{ display: "inline-block" }}>8</h4>th{" "}
          </h2>

          <h1 >
            <a href="http://vps.ac.in/" target={"_blank"}>Link</a>
          </h1>
          <img
            src="https://www.joonsquare.com/usermanage/image/business/vidya-bharati-public-school-sikar-2732/vidya-bharati-public-school-sikar-bharti.jpg"
            alt="VPS School Image"
            />
        </div>
        <div className="prince">
            <h1>Prince School</h1>
          <h2>
            Class <h4 style={{ display: "inline-block" }}>9</h4>th to{" "}
            <h4 style={{ display: "inline-block" }}>10</h4>th{" "}
          </h2>
          <h1 >
            <a href="https://www.princeeduhub.com/" target={"_blank"}>Link</a>
          </h1>
          <img
            src="https://i.ytimg.com/vi/e_Xe3tpFnM4/maxresdefault.jpg"
            alt="Prince School Image"
          />
        </div>
      </div>
    </div>
  );
}

export default School;
