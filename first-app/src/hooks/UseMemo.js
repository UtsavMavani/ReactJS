import React, {  useMemo, useState } from 'react';

export default function UseMemo({ heading }) {
    const [count, setCount] = useState(0);
    const [item, setItem] = useState(0);

    // This function runs only count state update
    const addMemo = useMemo( () => {
        // console.log("Function called");
        return count * 10;
    }, [count]);

    return (
        <div>
            <div className='my-5'>
                <h1 className='heading'>{heading}</h1>
                
                <h4 className='mt-5'>Main use case : To increase our react app performance</h4>
                <p>Count : {count}</p>
                <p>Item : {item}</p>
                <p>{count} * 10 = {addMemo}</p>
                <button className='btn btn-primary' onClick={ () => setCount(count + 1) }>Update Count</button>
                <button className='btn btn-primary ms-2' onClick={ () => setItem(item + 1) }>Update Item</button>
            </div>
        </div>
    )
}
