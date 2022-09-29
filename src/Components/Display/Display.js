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

    const handleAddBreak=()=>{
        console.log('click')
    }
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
               
                <h4 className='text'>Add break time</h4>
               <div className='btn'>
                <button handleAddBreak={handleAddBreak}>10min</button>
                <button>15min</button>
                <button>20min</button>
                <button>5min</button>
                <button>7min</button>
               </div>
               <div className='activity-info'>
                <h2>Activities Details</h2>
                <p>Activities time: <span className='time'>min</span></p>
                <p>Break time: <span className='time' >min</span> </p>
               </div>
               <button className='btn-cart'>Activity Completed</button>
            </div>
        </div>
    );
};

export default Display;