import React from 'react';
import img from '../../images/images.jpg'
import './Cart.css'
const Cart = ({cart}) => {
    let time=0;
    for(const activity of cart){
        time=time+activity.breakTime;
        // console.log(time)
    }
    
    return (
        <div className='cart'>
            <h1>activities:{cart.length}</h1>
             <div className='info'>
                <img src={img} alt="" />
                <div>
                <h3>Sajeda Akter</h3>
                <p className='title'>Web developer</p>
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