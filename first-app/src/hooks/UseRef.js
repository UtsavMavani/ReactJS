import React, { useEffect, useRef, useState } from 'react';

export default function UseRef({ heading }) {
    const nameRef = useRef();

    const [name, setName] = useState('');
    const count = useRef(0);

    // First use case
    const chnageRef = () => {
        nameRef.current.style.color = 'blue';
        nameRef.current.style.fontSize = '25px';
    }

    // Second use case
    useEffect( () => {
        count.current = count.current + 1;
    });

    return (
        <div>
            <div className='my-5'>
                <h1 className='heading'>{heading}</h1>


                <h4 className='mt-5'>First use case : Access HTML DOM element directly and manipulate with DOM element</h4>
                <p ref={nameRef}>Utsav</p>
                <button className='btn btn-primary' onClick={chnageRef}>Change Style</button>


                <h4 className='mt-5'>Second use case : If use useRef hook then component does not re-render when something update or change</h4>
                <form action="">
                    <label htmlFor="name">Name : </label> <br />
                    <input 
                        type="text" 
                        name="name" 
                        placeholder='Enter your name' 
                        value={name}
                        onChange={ (e) => setName(e.target.value) }
                    /> <br />
                </form>
                <p className='mt-3'>Render count : {count.current} | Name : {name}</p>
                
            </div>
        </div>
    )
}
