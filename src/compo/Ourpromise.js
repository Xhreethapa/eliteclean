import React from 'react'
import './Ourpromise.css'
import Bondback from '../assets/bondback.png'
import Insured from '../assets/insured.png'
import Location from '../assets/location.png'
import Sameday from '../assets/sameday.png'



const Ourpromise = () => {
    return (
        <div style={{backgroundColor:'#F4F8FB'}}>
            <h2 style={{display:"flex",
                        justifyContent:'center',
                        margin:'30px 0px'}}>Why choose Us for your cleaning job??</h2>
            <div className="promises">
                <div className="promise__s">
                    <div style={{borderRadius:'50%',
                    backgroundColor:'yellow'}}><img className="icon__img" src= {Bondback} alt=""/></div>
                    <div>100% Bond Back</div>
                    <div><p>we provide 100% Bond Back Guarantee within the 72nd hour of our service.your satisfaction is our success.</p></div>
                    <div></div>

                </div>
                <div className="promise__s">
                     <div style={{borderRadius:'50%',
                    backgroundColor:'yellow'}}><img className="icon__img" src= {Insured} alt=""/></div>
                    <div>Insurance Cover</div>
                    <div><p>We are protected with public Liability insurance. if anything goes wrong just in case, you are completely insured.</p></div>
                    <div></div>

                </div>
                <div className="promise__s">
                     <div style={{borderRadius:'50%',
                    backgroundColor:'yellow'}}><img className="icon__img" src={Location} alt=""/></div>
                    <div>Available accross Sydney</div>
                    <div><p>We provide end of lease cleaning service trought all Sydney Suburbs.</p></div>
                    <div></div>

                </div>
                <div className="promise__s">
                    <div style={{borderRadius:'50%',
                    backgroundColor:'yellow'}}><img className="icon__img" src={Sameday} alt=""/></div>
                    <div>Same Day Service available</div>
                    <div><p>If you are able to get in touch before 12pm everyday, we might be able to provide an urgent Same day service.</p></div>
                    <div></div>

                </div>
            </div>  
            <div style={{display:'flex',
                    justifyContent:'center',
                    marginTop:'40px',
                    padding:'0px 10px'}}>You can Book your Lease cleaning service online. just enter your property details to get the price and enter your details and date and time of the service required and you can Book Us.</div>
        </div>
    )
}

export default Ourpromise
