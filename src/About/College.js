import React from 'react'
import './School.css'
function College() {
  return (
    <>
    <div className="ih">
<div>

        <h1 style={{backgroundColor:'green',padding:'.6rem',borderRadius:'1rem',color:'white'}}> Indian Institute of Information Technology Pune  </h1>
      <h1 style={{display:'inline-block',backgroundColor:'grey',padding:' .2rem 4rem',borderRadius:'2rem',marginTop:'1rem'}}> <a href="https://iiitp.ac.in/" target={"_blank"}>Link</a> </h1>
</div>
    </div>
        <div className="iiit">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/IIITP_logo.jpg" alt="IIITP logo" />
            <img src="https://i.ibb.co/YNFFMZR/iiit.png" alt="IIITP photo"/>
            <img src="https://i.ibb.co/7ktGhgZ/iiit1.png" alt="Placements"/>
        </div>
    </>
  )
}

export default College