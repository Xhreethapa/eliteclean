import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import './HomeCard.css'


const HomeCard = () => {
    return (
        <div className='homecard'>
            <div className="homecard__one">
                <div>Best End of Lease Cleaning</div>
                 <p>We provide 72 hours  Bond Back Guarantee. We provide Carpet Steam Cleaning Service as well.</p>
                 <div style={{display:'flex',
                            alignItems:'center'}}>
                    <div style={{borderRadius:'50%',
                        height:'20px',
                        width:'20px',
                        color:'blue',
                        backgroundColor:'white'
                       }}><ArrowRightAltIcon/></div><div>Explore More</div>
                 </div>
            </div>

            <div className="homecard__two">

                <div className="card__s">
                    <div style={{fontSize:'large',
                                fontWeight:'bold',
                                color:'#032B57'}}>Carpet Steam Cleaning</div>
                    <div><p>Our experienced cleaners use professional carpet Steam Cleaning Equipments.
                        </p></div>
                    <div style={{display:'flex',
                            alignItems:'center'}}>
                   < div style={{borderRadius:'50%',
                        height:'20px',
                        width:'20px',
                        color:'white',
                        backgroundColor:'blue'
                       }}><ArrowRightAltIcon/></div><div>Explore More</div>
                    </div>
                </div>
                <div className="card__s">
                    <div style={{fontSize:'large',
                                fontWeight:'bold',
                                color:'#032B57'}}>Professionals Experts</div>
                    <div><p>We have teams of professional cleaners who are well experieced and knows what they are doing.</p></div>
                    <div style={{display:'flex',
                            alignItems:'center'}}>
                        <div style={{borderRadius:'50%',
                        height:'20px',
                        width:'20px',
                        color:'white',
                        backgroundColor:'blue'
                       }}><ArrowRightAltIcon/></div><div>Explore More</div></div>
                </div>
                <div className="card__s"> 
                    <div style={{fontSize:'large',
                                fontWeight:'bold',
                                color:'#032B57'}}>Available accross Sydney</div>
                    <div><p>We provide our service all accross Sydeny with flexible Scheduling</p></div>
                    <div style={{display:'flex',
                            alignItems:'center'}}>
                    <div style={{borderRadius:'50%',
                        height:'20px',
                        width:'20px',
                        color:'white',
                        backgroundColor:'blue'
                       }}><ArrowRightAltIcon/></div><div>Explore More</div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default HomeCard
