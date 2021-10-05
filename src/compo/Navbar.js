import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CallCenter from '../assets/call-center.png'

import  './Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
               <h1> <span style={{color:"#2784FB"}}>Elite</span>-Cleaning</h1>
               <div style={{borderLeft:'1px solid #ECE9EC',
                            height:'40px'}}></div>

            </div>
            <div className="nav__link">
                <div>Home</div>
                <div style={{display:'flex',
                    justifyContent:'space-evenly',
                    alignItems:'center'}}><div>services</div> <KeyboardArrowDownIcon/></div>
                <div>Gallery</div>
                <div>Contact Us</div>
                <div>About US</div>
            </div>
            <div className="nav__contact">
                <div><img style={{height:'55px'}}src={CallCenter} alt=""/></div>
                <div>
                <div>call us now</div>
                <div>+61412547737</div>
                </div>
                <div style={{borderLeft:'1px solid #ECE9EC',
                            height:'40px'}}></div>
                <div>
                    <div className="req__button"> Request a Quote</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
