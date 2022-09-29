import React from 'react';
import img from '../../images/images.jpg'
import './Cart.css'
const Cart = ({cart}) => {
   
    
    
    return (
        <div className='cart'>
        
             <div className='info'>
                <img src={img} alt="" />
                <div>
                <h3>Name:Sajeda Akter</h3>
                <p>Study:Diploma in CSE completed</p>
                <p>Age:20</p>
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