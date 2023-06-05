import React from "react";
import MyGallary from "../componets/MyGallary";
import Skillis from "../componets/Skillis";
import {AiFillCopyrightCircle} from 'react-icons/ai'

function Home() {
  return (
    <>
      <h1 style={{ paddingBottom: "2rem" }}> Welcome in Vipin's HomePage </h1>
      <div className="homepage">
        <div className="imgv">
          <img
            src="https://i.ibb.co/417cTGP/vipin.png"
            alt="vipin"
            border="0"
          />
        </div>
        <div>
          <div className="skillp">
            <h1>Skills</h1>
            <div className="Skills">
              <Skillis skill="Fronted Developer" number={80} />
              <Skillis skill="React Developer" number={70} />
              <Skillis skill="NodeJs Developer" number={50} />
              <Skillis skill="Data Structure" number={40} />
            </div>
          </div>
        </div>
      </div>
      <div className="Ani">
        <MyGallary />
      </div>
      <footer>

        <div className="footer">
          <AiFillCopyrightCircle  style={{fontSize:'2rem',marginRight:'1rem'}}/>
          <h2>Copyrights by Vipin Kumawat</h2>
        </div>
      </footer>
    </>
  );
}

export default Home;
