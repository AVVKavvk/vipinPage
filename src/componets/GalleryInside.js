import React from 'react'
import './Gallery.css'
function GalleryInside(props) {
  return (
    <>
  

   <div class="image-gallery ">
  < input id="tab1" type="radio" name="tabs" checked/>
  <label for="tab1"><img width="50" height="50" src={props.url}/></label>  
  <section id="content1">
    <img src={props.url}/>
  </section>  

   </div>
</>
  )
}

export default GalleryInside