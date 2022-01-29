import React from 'react'
import AminityControls from './AminityControls'

const controls=[
    {label:'Laundry', type: 'laundry'},
    {label: 'Garage', type: 'garage'},
    {label: 'Balcony', type: 'balcony'}
]

const AminityControl = (props) => {
    return (
        <div style={{display:'flex',
        justifyContent:'space-evenly',
        margin:'10px 0px'}}>
     {controls.map(ctrl=>(
            <AminityControls key={ctrl.label} label={ctrl.label}
             added={() => props.ingredientAdded(ctrl.type)}
             removed={() => props.ingredientRemoved(ctrl.type)} 
             disabled={props.disabled[ctrl.type]}
             counted={props.totalCount[ctrl.type]}
             
             />)
        )}
            
        </div>
    )
}

export default AminityControl

