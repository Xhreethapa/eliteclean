import React from 'react'
import leaseImg from '../../assets/leaseImg.png'
import './EndofLeaseIntro.css'
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';


const EndofLeaseIntro = () => {
    return (
        <div className="leaseintro">
            <div style={{backgroundImage:`url(${leaseImg})`,
                            backgroundSize:'cover',
                            backgroundPosition:'center',
                            height:'400px',
                            width:'300px',
                            }}>

                <div className="yellocard">
                    <CleaningServicesIcon/>
                    <div>Are you read to get your bond back?? We can do it for you.</div>
                </div>
            </div>
            <div className="intro">
                <div>Looking for best Lease Cleaning Service in Sydeny?? </div>
                <div> <h2>Claning Profssionals for Heighest Quality Clean you can always count on.</h2></div>
                <div>
                <p> Well, look nomore. We as a cleaning company has our priority is to satisfy customers. our professional and well experienced claners knows What they are doing.</p>
                </div>
                <div>  
                    <div className="learn__button">Learn More</div>
                </div>
            </div>
        </div>
    )
}

export default EndofLeaseIntro
