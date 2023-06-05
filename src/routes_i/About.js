import React from 'react'
import { Outlet } from 'react-router-dom';
import NavA from '../About/NavA';
function About() {
  return (
    <>  
    <h1 > Welcome in Vipin's AboutPage </h1>
    <NavA/>
  <Outlet/>
  </>
  )
}

export default About