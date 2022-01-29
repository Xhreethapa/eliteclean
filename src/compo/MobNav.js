import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-scroll'
import './MobNav.css'


const MobNav = () => {
    return (
        <div className='mobnav'>
            <div style={{display:'flex',
                     alignItems:'center'}}>
                <MenuIcon/>
            </div>
            <div style={{display:'flex'}}>
            <Link style={{margin:'0px 5px'}} activeClass="active" to="home" spy={true} smooth={true}>Home</Link>
            <Link style={{margin:'0px 5px'}} activeClass="active" to="gallery" spy={true} smooth={true}>Gallery</Link>
            <Link style={{margin:'0px 5px'}} activeClass="active" to="aboutus" spy={true} smooth={true}>About Us</Link>   
            <Link style={{margin:'0px 5px'}} activeClass="active" to="contactus" spy={true} smooth={true}>Contact Us</Link> 

            </div>
        </div>
    )
}

export default MobNav
