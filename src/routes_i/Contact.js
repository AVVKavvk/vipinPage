import React from "react";
import "../componets/About.css";
import { AiFillGithub ,AiFillInstagram,AiFillFacebook,AiOutlinePhone,AiFillCodepenCircle} from "react-icons/ai";
import {SiGmail} from 'react-icons/si'

function Contact() {
  return (
    <>
    <h1 style={{ paddingBottom: "2rem" }}> Welcome in Vipin's ContactPage </h1>
    {/* <p>Please select an option</p> */}
    <div className="Contact">
      <div className="social">
        <ul>
          <li style={{listStyle:'none',marginBottom:'1rem'}}>
            <AiFillGithub size={25} />
            {/* <a href="https://www.instagram.com/k.vip_in/"></a> */}
            <a
              href="https://github.com/AVVKavvk"
              target={"_blank"}
              style={{
                fontSize: "1.6rem",
                padding: ".5rem 1rem",
                textDecoration: "none",
              }}
            >
              Github
            </a>
          </li>
          <li style={{listStyle:'none',marginBottom:'1rem'}}>
            <AiFillInstagram size={25}/>
            {/* <a href="https://www.instagram.com/k.vip_in/"></a> */}
            <a
              href="https://www.instagram.com/k.vip_in/"
              target={"_blank"}
              style={{
                fontSize: "1.6rem",
                padding: ".5rem 1rem",
              // margin: "2rem 1rem",
                textDecoration: "none",
              }}
            >
              Instagram
            </a>
          </li>

          <li style={{listStyle:'none',marginBottom:'1rem'}}>
            <AiFillFacebook size={25}/>
            {/* <a href="https://www.instagram.com/k.vip_in/"></a> */}
            <a
              href="https://www.facebook.com/vipin.kumawat.773"
              target={"_blank"}
              style={{
                fontSize: "1.6rem",
                padding: ".5rem 1rem",
              // margin: "2rem 1rem",
                textDecoration: "none",
              }}
              >
            Facebook
            </a>
          </li>
          <li style={{listStyle:'none',marginBottom:'1rem'}}>
            <AiFillCodepenCircle size={25}/>
            {/* <a href="https://www.instagram.com/k.vip_in/"></a> */}
            <a
              href="https://codepen.io/Avvk"
              target={"_blank"}
              style={{
                fontSize: "1.6rem",
                padding: ".5rem 1rem",
                // margin: "2rem 1rem",
                textDecoration: "none",
              }}
            >
     Codepen
            </a>
          </li>
        
        </ul>
      </div>
      <div className="personal">
  <div>

   <SiGmail/>
   <h3 style={{display:'inline-block',margin: '1rem'}}>kumawatvipin066@gmail.com</h3>
  </div>
  <div>

   <AiOutlinePhone size={20}/>
   <h3 style={{display:'inline-block',margin: '1rem'}}>8107099646</h3>
  </div>
      </div>
    </div>
                </>
  );
}

export default Contact;
