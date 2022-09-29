import React, { useEffect, useState } from 'react';
import Activities from '../Activities/Activities';
import './Display.css'
import img from '../../images/images.jpg'
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
                <div className='info'>
                <img src={img} alt="" />
                <h3>Sajeda Akter</h3>
                <h3 className='title'>Web developer</h3>
                </div>
               
            </div>
        </div>
    );
};

export default Display;