import React, { useState } from 'react';
import './Activities.css'

const Activities = (props) => {
   
    const {name,img,breakTime}=props.activities
    

   
    return (
        <div className='activity'>
            
            <img src={img} alt="" />
            <div className='detail'>
                <p className='activity-name'>{name}</p>
                <p></p>
                <p>Break:{breakTime} min</p>
            </div>
                <button onClick={props.handleAddToCart}>Add to List</button>
        </div>
    );
};

export default Activities;