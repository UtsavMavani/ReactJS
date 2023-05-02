import React from 'react';

export default function Todos({ heading, todos, addTodo }) {
    console.log("Child render...");

    return (
        <div>
            <div className='my-3'>
                <h2 className='heading'>{heading}</h2>
                
                {todos.map( (todo, index) => {
                    return <p key={index}>{todo + index}</p> 
                })}

                <button className='btn btn-primary' onClick={addTodo}>Add Todo</button>
            </div>
        </div>
    )
}
