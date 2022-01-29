import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Image1 from '../assets/bna.jpg'
import Image2 from '../assets/bna1.jpg'
import './Gallery.css'

const slideImages = [
    {
      url: `${Image1}`,
      caption: 'Slide 1'
    },
    {
      url: `${Image2}`,
      caption: 'Slide 2'
    },
    {
        url: `${Image1}`,
        caption: 'Slide 3'
      },
      {
        url: `${Image2}`,
        caption: 'Slide 4'
      },
   
  ];
  

const Gallery = () => {
    return (
        <div >
           <h2>Gallery and Media</h2>
            <div style={{height:'500px',
       
       }}>
            <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div style={{'backgroundImage': `url(${slideImage.url})`}}>
                <span>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
                
            </div>
        </div>
    )
}
 
export default Gallery
