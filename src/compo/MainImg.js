import React from 'react'
import { Link } from 'react-scroll'


import './MainImg.css'
import MobNav from './MobNav'

const MainImg = () => {
    return (
        <div className="mainimg">
            <div className="opacity">
            <div>100% Bond Back Guarantee</div>
            <div><h1>Best End of Lease Cleaning</h1></div>
            <p>We provide best end of lease cleaning service in Sydney in best of the price. Just call us or get-your Quote form get quote button on the screen</p>
           <Link to='quote' spy="true" smooth='true' className="getquote">Book-Online</Link>

            </div>
        </div>
    )
}

export default MainImg
