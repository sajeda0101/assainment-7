import React from 'react';
import img from '../../images/images.jpg'
import './Cart.css'
const Cart = ({list}) => {
let time=0;
for(const activity of list){
    time=time+activity.breakTime
}
    
    
    return (
        <div className='cart'>
            
             <div className='info'>
                <img src={img} alt="" />
                <div>
                <p><strong>Name:</strong>Sajeda Akter</p>
                <p><strong>Institute:</strong>Chittagong Polytechnic Institute</p>
                <p><strong>Study:</strong>Diploma in CSE completed</p>
                <div className='my-info'>
                <p><strong>Age:</strong>20</p>
                <p><strong>Height:</strong>5.2"</p>
                <p><strong>Weight:</strong>38kg</p></div>
                </div>
                </div>
               <div className='break-btn'>
                <h3>Add break time</h3>
                <div className='all-btn'>
                <button>30</button>
               <button className='button'>15</button>
                <p>5 min</p>
                <p>7 min</p>
                <p>13 min</p>
                </div>
               </div>
               <div className='activity-time'>
                <h3>Activities Details</h3>
                <p>Activities Time:{time} days</p>
                <p>Break Time:</p>
               </div>
               
              <div className='btn-cart'> <button  >Activity Completed</button></div>
        </div>
    );
};

export default Cart;