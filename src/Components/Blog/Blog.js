import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog'>
            <div className='title'>
                <h3>How doe react work?</h3>
                <p>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.React is without a doubt one of the most powerful and flexible frontend frameworks. But with its great power comes great responsibility – it’s easy to misuse it and create a mess of an app. To avoid it, one needs to really understand how React works internally by studying its code implementation and structure.</p>
            </div>
            <div className='title'>
                <h3>Difference between props and State?</h3>
                <p><strong>Props:</strong>
                <ul>
                    <li>Components receive data from outside with props.</li>
                    <li>Props are used to pass data.</li>
                    <li>Data from props is read-only.</li>
                    <li>Props can only be passed from parent component to child.</li>
                    </ul>
                    </p>
                <p><strong>State:</strong>
                <ul>
                    <li>whereas they can create and manage their own data with state.</li>
                    <li>whereas state is for managing data.</li>
                    <li>State data can be modified by its own component, but is private.</li>
                    <li>Modifying state should happen with the setState ( ) method.</li>
                    </ul>
                </p>
            </div>
            <div className='title'>
                <h3>How work useEffect?</h3>
                <p>UseEffect is React hook, which use to handle side effects functions (side Effects are those functions that interact with the outside world, or out of React Js ecosystem), and with useEffect, we can separate them into another Function.whenever your components finish rendering, useEffects run unless you specified dependencies in the dependencies array.We should useEffect, when your component depends on the outside world data, and we can not guarantee that data will come or not (maybe the server is down there). So, Instead of throwing errors and stop other components from being rendered, move them into useEffect hook.</p>
            </div>
            <div className='title'>
                <h3>React hook list</h3>
                <p>Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.
                    <ul>
                    <li>useState</li>
                    <li>useEffect</li>
                    <li>useContext</li>
                    <li>useCallback</li>
                    <li>useReducer</li>
                    <li>useRef</li>
                    <li>useImperativeHandle etc.</li>
                    </ul>
                    </p>
            </div>

        </div>
    );
};

export default Blog;