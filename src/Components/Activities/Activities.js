import React, { useState } from 'react';
import './Activities.css'


const Activities = (props) => {
    // console.log(props)
   
    const {name,img,breakTime,title}=props.activities
    

   
    return (
        <div className='activity'>
            
            <img src={img} alt="" />
            <div className='detail'>
                <p className='activity-name'>{name}</p>
                <p className='pera'>{title}</p>
                <p>Break:{breakTime} days</p>
            </div>
                <button onClick={()=>props.handleAddToCart(props.activities)}>Add to List 
                </button>
        </div>
    );
};

export default Activities;