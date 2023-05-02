import React, { useEffect, useState } from 'react';

export default function UseEffect({ heading }) {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('Utsav');

    // Called after every change (Note: Pass multiple props or states in second parameter of array [])
    useEffect( () => {
        console.log('Some changes happens...');
    });

    // Called after every change in count state
    useEffect( () => {
        console.log('Some changes happens in count state...' + count);
    }, [count] );

    // Called after every change in name state
    useEffect( () => {
        console.log('Some changes happens in name state...' + name);
    }, [name] );


    return (
        <div className='my-5'>
            <h1 className='heading'>{heading}</h1>


            <h4 className='mt-5'>Counter example</h4>
            <p>Counter : {count}</p>
            <button className='btn btn-primary' onClick={ () => setCount(count + 1) }>Increase</button>
            <button className='btn btn-primary ms-2' onClick={ () => setCount(count - 1) }>Decrease</button>
            <button className='btn btn-primary ms-2' onClick={ () => setCount(0) }>Reset</button>

            <h4 className='mt-5'>String example</h4>
            <p>Name : {name}</p>
            <button className='btn btn-primary' onClick={ () => setName('Dhruvil') }>Change Name</button>
        </div>
    )
}
