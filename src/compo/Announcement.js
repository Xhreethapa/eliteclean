import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';


const Announcement = () => {
    return (
        <div style={{display:'flex',
        justifyContent:'space-between',
        padding:'0px 15px',
        backgroundColor:'#032B57',
        height:'45px'}} className="announce">
          <div  style={{display:'flex'}}>
            <div style={{display:'flex',
        alignItems:'center',
        margin:'0px 5px'}} className="announce__email">
                <EmailIcon style={{color:'#FDDF1A'}}/> 
                <div style={{color:'#FDDF1A'}}>Email:</div>
                <div style={{color:'#A5B5CE'}}>elitecleaning98450@gmail.com</div>

            </div>
            <div style={{display:'flex',
         alignItems:'center',
         margin:'0px 5px'}} className="announce__hour">
                <WatchLaterIcon style={{color:'#FDDF1A'}}/>
                <div style={{color:'#FDDF1A'}}>Working Hours:</div>
                <div style={{color:'#A5B5CE'}}>Mon-Sun: 8am -7pm</div>
            </div>
            <div style={{display:'flex',
         alignItems:'center',
         margin:'0px 5px'}} className="announce__quote">
                <RequestQuoteIcon style={{color:'#FDDF1A'}}/>
                <div style={{color:'#FDDF1A'}}>Get-Quote </div>

            </div>
          </div>
          <div style={{display:'flex',
         alignItems:'center',
         margin:'0px 5px'}}>
              <div className="announce__media">
                  <div style={{color:'#A5B5CE'}}>Blogs & Media</div>
              </div>
              <div className="announce__faq">
                  <div style={{color:'#A5B5CE',
                margin:'0px 5px'}}>FAQs</div>
              </div>
              <div style={{display:'flex',
             margin:'0px 5px',
             color:'#FDDF1A'}} className="announce__social">
                  <div ><FacebookIcon/></div>
                  <div><InstagramIcon/></div>
                  <div><YouTubeIcon/></div>

              </div>
          </div>
        </div>
    )
}

export default Announcement
