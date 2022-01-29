import React from 'react'
import ExtraControls from './ExtraControls'




const controls=[
    {label:'Carpet-Steam', type: 'carpet'},
    {label: 'Wall-Wash', type: 'wall'},
    {label: 'Blinds', type: 'blinds'},
    {label: 'External-Windows', type: 'windows'}
]

const ExtraControl = (props) => {
    return (
        <div style={{display:'flex',
        justifyContent:'space-evenly',
        margin:'10px 0px'}}>
     {controls.map(ctrl=>(
            <ExtraControls key={ctrl.label} label={ctrl.label}
             added={() => props.ingredientAdded(ctrl.type)}
             removed={() => props.ingredientRemoved(ctrl.type)} 
             disabled={props.disabled[ctrl.type]}
             counted={props.totalCount[ctrl.type]}
             
             />)
        )}
            
        </div>
    )
}

export default ExtraControl
