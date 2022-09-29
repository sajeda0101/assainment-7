import React from 'react';
import img from '../../images/images.jpg'
import './Cart.css'
const Cart = ({list}) => {
   
    
    
    return (
        <div className='cart'>
        
             <div className='info'>
                <img src={img} alt="" />
                <div>
                <p><strong>Name:</strong>Sajeda Akter</p>
                <p><strong>Institute:</strong>Chittagong Polytechnic Institute</p>
                <p>Study:Diploma in CSE completed</p>
                <div className='my-info'>
                <p><strong>Age:</strong>20</p>
                <p><strong>Height:</strong>5.2"</p>
                <p><strong>Weight:</strong>38kg</p></div>
                </div>
                </div>
               <div className='break-btn'>
                <h3>Add break time</h3>
                <button >10min</button>
               </div>
               <div className='activity-time'>
                <h3>Activities Details</h3>
                <p>Activities Time:</p>
                <p>Break Time:</p>
               </div>
               
              <div className='btn-cart'> <button  >Activity Completed</button></div>
        </div>
    );
};

export default Cart;