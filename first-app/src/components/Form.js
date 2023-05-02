import React, { useState } from 'react';

export default function Form({ heading }) {
    const [text, setText] = useState('');

    const onTextChange = (event) => {
        setText(event.target.value);
    }

    const onUcBtnClick = () => {
        setText(text.toUpperCase());
    }

    const onLcBtnClick = () => {
        setText(text.toLowerCase());
    }

    const onClearBtnClick = () => {
        setText('');
    }

    return (
        <div className='my-5'>
            <h1 className='heading'>{heading}</h1>

            <div className='mt-3'>
                <label className='form-label'>Enter Your Text :</label>
                <textarea className='form-control' rows='10' value={text} onChange={onTextChange}></textarea>
            </div>

            <div className='mt-3'>
                <h6>{text.split(" ").length} words and {text.length} characters</h6>
            </div>

            <div className='mt-3'>
                <button className='btn btn-primary' onClick={onUcBtnClick}>Uppercase</button>
                <button className='btn btn-primary ms-2' onClick={onLcBtnClick}>Lowercase</button>
                <button className='btn btn-primary ms-2' onClick={onClearBtnClick}>Clear</button>
            </div>
        </div>
    )
}
