import React from 'react'
import HomeCard from './HomeCard'
import EndofLeaseIntro from './intro/EndofLeaseIntro'
import Notice from './Notice'
import MainImg from './MainImg'
import Ourpromise from './Ourpromise'
import MobNav from './MobNav'

const Home = () => {
    return (
        <div>
            <MainImg/>
            <HomeCard/>
            <MobNav/>
            <EndofLeaseIntro/>
            <Notice/>
            <Ourpromise/>
           
        </div>
    )
}

export default Home
