import React, { useEffect, useState } from 'react';
import Activities from '../Activities/Activities';
import Cart from '../Cart/Cart';
import './Display.css'

const Display = () => {
  
    const [activities,setActivities]=useState([]);
    useEffect(()=>{
        fetch('activities.json')
        .then(res=>res.json())
        .then(data=>setActivities(data))
    },[])

    const [cart,setCart]=useState([])
    const handleAddToCart=(activity)=>{
       console.log(activity.age)
    }
 
    return (
        <div className='activities'>
           
                
            <div >
                <div className='text'><h1 >Our Activities Scheme</h1></div>
                <div className="activities-container">
                {
                activities.map(activity=><Activities activities={activity} key={activity.id}  handleAddToCart={handleAddToCart}></Activities>)
            }
                </div>
            
        
             
           
            </div>
            <div className="cart-activities">
               <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Display;