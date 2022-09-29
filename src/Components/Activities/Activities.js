import React from 'react';
import './Activities.css'

const Activities = (props) => {
    console.log(props)
    const {name,age,img,breakTime}=props.activities
    return (
        <div className='activity'>
            
            <img src={img} alt="" />
            <div className='detail'>
                <p>{name}</p>
                <p>Age:{age} year</p>
                <p>Break:{breakTime} min</p>
                <button><p>Add to List</p></button>
            </div>
        </div>
    );
};

export default Activities;