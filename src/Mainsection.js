import React from 'react'
import Home from './compo/Home'
import Gallery from './compo/Gallery'
import Aboutus from './compo/AboutUs'
import Contactus from './compo/ContactUs'
import Quote from './compo/Quote'

const Mainsection = () => {
    return (
        <>
        <div id='home'>
            <Home/>
        </div>
        <div id="quote">
            <Quote/>
        </div>
        <div id="gallery">
            <Gallery/>
        </div>
        <div id="aboutus">
            
            <Aboutus/>

        </div>
        <div id="contactus">
            <Contactus/>
        </div>
        </>
    )
}

export default Mainsection
