import React, { useState } from 'react';
import './Activities.css'

const Activities = (props) => {
    console.log(props)
    const {name,age,img,breakTime}=props.activities
    
    const [time,setTime]=useState([])
    const handleAddBreak=(activities)=>{
       
    }
   
    return (
        <div className='activity'>
            
            <img src={img} alt="" />
            <div className='detail'>
                <p>{name}</p>
                <p>Age:{age} year</p>
                <p>Break:{breakTime} min</p>
            </div>
                <button onClick={handleAddBreak}>Add to List</button>
        </div>
    );
};

export default Activities;