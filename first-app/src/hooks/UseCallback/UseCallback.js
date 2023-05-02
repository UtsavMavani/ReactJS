import React, { useCallback, useState } from 'react';
import Todos from './Todos'

export default function UseCallback({ heading }) {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    // This function runs only todos state update
    const addTodo = useCallback( () => {
        setTodos((prev) => [...prev, `new todo - `]);
    }, [todos]);

    return (
        <div>
            <div className='my-5'>
                <h1 className='heading'>{heading}</h1>
                
                <h4 className='mt-5'>Main use case : To increase our react app performance</h4>
                <Todos 
                    heading={"Todos Component (Child of useCallback)"} 
                    todos={todos}
                    addTodo={addTodo} 
                >
                </Todos>

                <p className='mt-5'>Count : {count}</p>
                <button className='btn btn-primary' onClick={ () => setCount(count + 1) }>Update Count</button>
            </div>
        </div>
    )
}
