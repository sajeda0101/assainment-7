import React from 'react';
import img from '../../images/images.jpg'
import './Cart.css'
const Cart = ({cart}) => {
   
    
    
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
               
                <h4 className='text'>Add break time</h4>
               <div className='btn'>
                <button >10min</button>
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
               <button className='btn-cart' >Activity Completed</button>
        </div>
    );
};

export default Cart;