import React from 'react'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './Announcement.css'


const Announcement = () => {
    return (
        <div  className="announce">
          <div >
            <div className="announce__email">
                <EmailOutlinedIcon style={{color:'#FDDF1A'}}/> 
                <div style={{color:'#FDDF1A',
                            marginLeft:'2px'}}>Email:</div>
                <div style={{color:'#A5B5CE'}}>elitecleaning98450@gmail.com</div>

            </div>
            <div className="announce__hour">
                <WatchLaterIcon style={{color:'#FDDF1A'}}/>
                <div style={{color:'#FDDF1A'}}>Working Hours:</div>
                <div style={{color:'#A5B5CE'}}>Mon-Sun: 8am -7pm</div>
            </div>
            <div className="announce__quote">
                <RequestQuoteIcon style={{color:'#FDDF1A'}}/>
                <div style={{color:'#FDDF1A'}}>Get-Quote </div>

            </div>
          </div>
          <div>
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
                  <div ><FacebookIcon fontSize='small'/></div>
                  <div><InstagramIcon fontSize='small'/></div>
                  <div><YouTubeIcon fontSize='small'/></div>

              </div>
          </div>
        </div>
    )
}

export default Announcement
