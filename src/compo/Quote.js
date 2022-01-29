import React,{useState} from 'react'
import AminityControl from './AminityControl';
import ExtraControl from './ExtraControl';
import Roomcontrol from './Roomcontrol';
import './Quote.css'

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";  
import db from '../firebase'


const INGREDIENT_PRICES={
    bedroom:80,
    bathroom:70,
    other:70,
    carpet:35,
    balcony:25,
    laundry:25,
    garage:20,
    wall:50,
    blinds:15,
    windows:15


    }



const Quote = () => {

    
    const [startDate, setStartDate] = useState(new Date());
    const [state , setstate] = useState({
        
        ingredients:{
            bedroom:0,
            bathroom:0,
            other:0,
            carpet:0,
            balcony:0,
            laundry:0,
            garage:0,
            wall:0,
            blinds:0,
            windows:0
        
                },
        totalPrice:99,
        
        customer:{
            firstName:'',
            lastName:'',
            address:'',
            email:'',
            phone:''

        }




    });
 
    const [steeps, setsteeps] = useState(1)

    function handelBookings(e){
        e.preventDefault();
        db.collection("bookings").add({
            state,
        });

     

        setsteeps(3)
        console.log(state)

    }

    function onInputChange (e){
       
        setstate({
            ...state,
          [e.target.name]: e.target.value,
          
        })
    }

   
           

    const  addIngredientHandler=(type) =>{
         
        const oldCount=state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients={
            ...state.ingredients, 
            };
    
        updatedIngredients[type]=updatedCount;
        const priceAddition=INGREDIENT_PRICES[type];
        const oldPrice= state.totalPrice;
        const newPrice= oldPrice + priceAddition;
        setstate({totalPrice:newPrice, ingredients:updatedIngredients,});
    
    
     }

     const  removeIngredientHandler=(type) =>{
        const oldCount= state.ingredients[type];
        if (oldCount <= 0){
            return;

        }
        const updatedCount = oldCount - 1;
        const updatedIngredients={
            ...state.ingredients, 
            };
    
        updatedIngredients[type]=updatedCount;
        const priceDeduction=INGREDIENT_PRICES[type];
        const oldPrice= state.totalPrice;
        const newPrice= oldPrice - priceDeduction;
        setstate({totalPrice:newPrice, ingredients:updatedIngredients, });
    
    
     
   }
   
   
   const disabledInfo={
    ...state.ingredients
    };
    for(let key in disabledInfo){
    disabledInfo[key] =disabledInfo[key] <=0
    }



    return (
        <div className="quote__container" >
            <div className="Quotation">
                <h4 style={{margin:'20px 0px 10px 20px'}}> Requst a Quote</h4>

                {(() => {
        switch (steeps) {
          case 1:
            return  <div style={{display:'flex',
                                 flexDirection:'column',
                                 alignItems:'center'}}>
                              <Roomcontrol 
                              ingredientAdded={addIngredientHandler}
                              ingredientRemoved={removeIngredientHandler}
                                  disabled={disabledInfo}
                                  totalCount={state.ingredients}/>


                              <AminityControl
                              ingredientAdded={addIngredientHandler}
                              ingredientRemoved={removeIngredientHandler}
                              disabled={disabledInfo}
                              totalCount={state.ingredients}
                              />
                              <ExtraControl
                               ingredientAdded={addIngredientHandler}
                              ingredientRemoved={removeIngredientHandler}
                              disabled={disabledInfo}
                              totalCount={state.ingredients}
                                 />

                             <div onClick={()=> setsteeps(2)} className="next__button">Get-Quote</div>

                     </div>
          case 2:
            return <div>
                   <div style={{display:'flex',
               justifyContent:'center',
               border:'none',
               color:'white',
               backgroundColor:'#FDDF1A',
               borderRadius:'7px',
               padding:'10px 0px'}}> Total Price : {state.totalPrice}</div>

                    <h2 style={{display:'flex',
               justifyContent:'center',
               margin:'20px 0px'}}>Please Fill up the details for Booking</h2>
                    <form style={{display:'flex',
                                flexWrap:'wrap',
                                justifyContent:'space-evenly'}}>
                        <label className="labels">
                            First Name
                            <input className="inputs" type="text" onChange={onInputChange} name='firstName'/>
                        </label>

                        <label className="labels">
                            Last Name
                            <input className="inputs" type="text" onChange={onInputChange} name='lastName'/>
                        </label>

                        <label className="labels">
                            Addres
                            <input className="inputs" onChange={onInputChange} name='address'/>
                        </label>
                        <label className="labels">
                            Email
                            <input className="inputs" type="email" onChange={onInputChange} name='email'/>
                        </label>
                        <label className="labels">
                            Phone
                            <input className="inputs" type="number" onChange={onInputChange} name='phone'/>
                        </label>
                        </form>
                        <div  style={{margin:'20px 0px',
                                    display:'flex'   }}> choose your prefered date and time of service <DatePicker 
                                selected={startDate} onChange={(date) => setStartDate(date)}
                                 
                                 showTimeSelect
                                     dateFormat="Pp"
                                    /></div>
                    <div className="button__coll">
                    <div className="next__button" onClick={()=> setsteeps(1)}>Go Back</div><div className="next__button" onClick={handelBookings}> Cash on Delivery</div><div className="next__button" onClick={()=> setsteeps(4)}> Pay Online</div>
                   </div>
            </div>
          case 3:
            return <div>
                        thank you for booking with us
                    </div>
          case 4 :
            return <div>
                    <h3>card payment</h3>
                    <div onClick={()=> setsteeps(2)}>Go Back</div>
                    
            </div>
          default:
            return <div style={{display:'flex',
            flexDirection:'column',
            alignItems:'center'}}>
         <Roomcontrol 
         ingredientAdded={addIngredientHandler}
         ingredientRemoved={removeIngredientHandler}
             disabled={disabledInfo}
             totalCount={state.ingredients}/>


         <AminityControl
         ingredientAdded={addIngredientHandler}
         ingredientRemoved={removeIngredientHandler}
         disabled={disabledInfo}
         totalCount={state.ingredients}
         />
         <ExtraControl
          ingredientAdded={addIngredientHandler}
         ingredientRemoved={removeIngredientHandler}
         disabled={disabledInfo}
         totalCount={state.ingredients}
            />

        <div onClick={()=> setsteeps(2)} className="next__button">Get-Quote</div>

</div>
        }
      })()}
                
            </div>
            <div style={{display:'flex',
                        flexDirection:'column',
                        padding:'0px 40px',
                        justifyContent:'space-between'}}>
               <div>             
               <h3> Get Instant Quot and Book Online</h3>
               </div>
               <div>
                   <p>
                       With our online booking system, you can instantly get the  Quote as soon as you enter your property details and just book online on your preferabe date and time.

                   </p>
               </div>
            </div>
           
            
        </div>
    )
}

export default Quote
