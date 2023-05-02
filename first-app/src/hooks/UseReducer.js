import React, { useReducer } from 'react';

export default function UseReducer({ heading }) {
    const initialState = 0; 
    const reducer = (state, action) => {
        switch (action) {
            case 'increase': 
                return state + 1;

            case 'decrease': 
                return state - 1;

            case 'reset':
                return initialState;
                  
            default:
                return state;
        }
    }

    // initialState is stored in state parameter in reducer function
    // dispatch is stored in action parameter in reducer function
    // return value of reducer function is stored in count
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <div className='my-5'>
                <h1 className='heading'>{heading}</h1>
                
                <h4 className='mt-5'>Main use case : To managing more complex state logic</h4>
                <p>Count : {count}</p>
                <button className='btn btn-primary' onClick={() => dispatch('increase')}>Increase</button>
                <button className='btn btn-primary ms-2' onClick={() => dispatch('decrease')}>Decrease</button>
                <button className='btn btn-primary ms-2' onClick={() => dispatch('reset')}>Reset</button>
            </div>
        </div>
    )
}
