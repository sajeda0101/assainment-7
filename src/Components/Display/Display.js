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

 
    return (
        <div className='activities'>
           
            <div className="activities-container" >
            {
                activities.map(activity=><Activities activities={activity} key={activity.id}></Activities>)
            }
            </div>
            <div className="cart-activities">
               <Cart></Cart>
            </div>
        </div>
    );
};

export default Display;