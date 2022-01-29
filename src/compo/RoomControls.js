import React from 'react'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './RoomControls.css'

const RoomControls = (props) => {
    return (
        <div style={{display:'flex',
        flexDirection:'column',
        margin:'0px 10px'}}>
            <div>{props.label}</div>
            <div  className= 'inputfields'>      
                <div style={{color:"black",
                             fontSize:'large',
                             fontWeight:'bold',
                             padding:'0px 5px'}}>{props.counted}</div>
                <div >
                    <div className="more"><ArrowDropUpIcon  onClick={props.added} /></div>
                    <div className="less"><ArrowDropDownIcon onClick={props.removed} /></div>
                </div>
            </div>

            
        </div>
    )
}

export default RoomControls
