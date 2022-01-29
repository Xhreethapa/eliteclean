import React from 'react'
import RoomControls from './RoomControls'

const controls=[
    {label:'Bedrooms', type: 'bedroom'}, 
    {label: 'BathRooms', type: 'bathroom'},
    {label: 'Others', type: 'other'}
]

const Roomcontrol = (props) => {
    return (
        <div style={{display:'flex',
                justifyContent:'space-evenly',
                margin:'10px 0px'}}>
             {controls.map(ctrl=>(
                    <RoomControls key={ctrl.label} label={ctrl.label}
                     added={() => props.ingredientAdded(ctrl.type)}
                     removed={() => props.ingredientRemoved(ctrl.type)} 
                     disabled={props.disabled[ctrl.type]}
                     counted={props.totalCount[ctrl.type]}
                     
                     />)
                )}
        </div>
    )
}

export default Roomcontrol
