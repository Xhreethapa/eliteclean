import React from 'react'
import './RoomControls.css'

import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';




const AminityControls = (props) => {
    return (
        <div style={{display:'flex',
        flexDirection:'column',
        margin:'0px 10px'}}>
            <div>{props.label}</div>
            <div className='inputfields'>
                <div style={{color:'white',
                            fontSize:'large',
                            fontWeight:'bold',
                            padding:'0px 5px '}}>{props.counted}</div>
                <div >
                    <div className="more"><ArrowDropUpIcon onClick={props.added} /></div>
                    <div className="less"><ArrowDropDownIcon onClick={props.removed} /></div>
                </div>
            </div>

            
        </div>
    )
}

export default AminityControls
