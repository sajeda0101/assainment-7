import React from 'react';
import img from '../../images/images.jpg'
import './Cart.css'
const Cart = () => {
    return (
        <div>
             <div className='info'>
                <img src={img} alt="" />
                <h3>Sajeda Akter</h3>
                <h3 className='title'>Web developer</h3>
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