import React from 'react'
import { Link } from 'react-router-dom';
import "../componets/About.css";
function NavA() {
  return (
    <nav className="navv">
    <ul className="nav_barv">
      <li>
          <Link to="/about/school" style={{textDecoration:'none'}}>School</Link>
      </li>
       <li>
          <Link to="/about/coaching" style={{textDecoration:'none'}} >Coaching</Link>
      </li>
      <li>
          <Link to="/about/college" style={{textDecoration:'none'}}>College</Link>
      </li>
      {/* <li>
          <Link to="/gallary" style={{textDecoration:'none'}}>Gallary</Link>
      </li> */} 
    </ul>
   
  </nav>
  )
}

export default NavA