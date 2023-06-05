import React from 'react'
import GalleryInside from '../componets/GalleryInside';

function Gallary() {
  return (
  <>
    <h1 style={{ paddingBottom: "2rem" }}> Welcome in Vipin's GalleryPage </h1>
    <div className="finali">

      <GalleryInside url='https://i.ibb.co/cTzG3jL/v1.jpg'/>
      <GalleryInside url='https://i.ibb.co/6vGh3mk/v2.jpg'/>
      <GalleryInside url='https://i.ibb.co/dGCG1cq/v7.jpg'/>
      <GalleryInside url='https://i.ibb.co/BjszKXb/v3.jpg'/>
      <GalleryInside url='https://i.ibb.co/twR9GLG/v4.jpg'/>
      <GalleryInside url='https://i.ibb.co/KbhDfG9/v5.jpg'/>
      <GalleryInside url='https://i.ibb.co/R9jr69J/v6.jpg'/>
      <GalleryInside url='https://i.ibb.co/0BFMBcC/v8.jpg'/>
      
    </div>
  </>
  )
}

export default Gallary