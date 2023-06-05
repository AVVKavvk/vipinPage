import React from "react";
import { IoLogoVimeo } from "react-icons/io";
import { Link } from "react-router-dom";
import "./Nav.css";
function Nav() {
  return (
    <nav className="nav">
      <ul className="nav_bar">
        <li>
            <Link to="/" style={{textDecoration:'none'}}>Home</Link>
        </li>
        <li>
            <Link to="/about" style={{textDecoration:'none'}} >About </Link>
        </li>
        <li>
            <Link to="/contact" style={{textDecoration:'none'}}>Contact</Link>
        </li>
        <li>
            <Link to="/gallery" style={{textDecoration:'none'}}>Gallery</Link>
        </li>
      </ul>
      <div className="logo">
        <h2>
          {" "}
          <IoLogoVimeo />{" "}
        </h2>
        {/* <IoLogoVimeo />  */}
      </div>
    </nav>
  );
}

export default Nav;
