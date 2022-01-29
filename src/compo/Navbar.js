import React from 'react'
import CallCenter from '../assets/call-center.png';
import {Link} from 'react-scroll'
import  './Navbar.css'



const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="home" className="logo">
               <h1> <span style={{color:"#2784FB"}}>Elite</span>Cleaning</h1>
               <div style={{borderLeft:'1px solid #ECE9EC',
                            height:'40px'}}></div>

            </Link>
            <div className="nav__link">
            <Link activeClass="active" to="home" spy={true} smooth={true}>Home</Link>
            <Link activeClass="active" to="gallery" spy={true} smooth={true}>Gallery</Link>
            <Link activeClass="active" to="aboutus" spy={true} smooth={true}>About Us</Link>   
            <Link activeClass="active" to="contactus" spy={true} smooth={true}>Contact Us</Link>  
            </div>
            <div className="nav__contact">
                <div><img style={{height:'55px'}}src={CallCenter} alt=""/></div>
                <div>
                <div><a href="tel://+61412547737">call us now</a>  </div>
                <div><a href="tel://+61412547737">+61412547737</a></div>
                </div>
                <div style={{borderLeft:'1px solid #ECE9EC',
                            height:'40px'}}></div>
                <div>
                    <Link to='quote' spy={true} smooth={true} className="req__button"> Request a Quote</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
