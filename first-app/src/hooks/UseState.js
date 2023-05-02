import React, { useState } from 'react';

export default function UseState({ heading }) {
    const [name, setName] = useState('Utsav');

    const [person, setPerson] = useState({ name: 'Utsav', age: 20 });

    const [numbers, setNumbers] = useState([ 10, 20, 30 ]);


    const changeName = () => {
        setName('Dhruvil');
    }

    const changePerson = () => {
        setPerson({
            ...person,
            age: 21
        });
    }

    const changeNumber = () => {
        setNumbers([
            ...numbers,
            Math.floor(Math.random() * 50)
        ]);
    }


    return (
        <div className='my-5'>
            <h1 className='heading'>{heading}</h1>


            <h4 className='mt-5'>String example</h4>
            <div>
                <p>Name : {name}</p>
                <button className='btn btn-primary' onClick={changeName}>Change String</button> 
            </div>


            <h4 className='mt-5'>Object example</h4>
            <div>
                <p>Name : {person.name}</p>
                <p>Age : {person.age}</p>
                <button className='btn btn-primary' onClick={changePerson}>Change Object</button>
            </div>


            <h4 className='mt-5'>Array example</h4>
            <div>
                <ul>
                    { numbers.map( (number, index) => <li key={index}>{number}</li> ) }
                </ul>
                <button className='btn btn-primary' onClick={changeNumber}>Change Array</button>
            </div>
        </div>
    )
}
