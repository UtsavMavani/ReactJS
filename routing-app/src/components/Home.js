import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    // 1st method
    const navigate = useNavigate();

    // 2nd method
    const navigateToAbout = () => {
        navigate('/about');
    }
    const navigateToContact = () => {
        navigate('/contact');
    }

    // 3rd method
    const navigateTo = (url) => {
        navigate(url);
    }

    return (
        <div>
            <h1>Home Page</h1>

            {/* Programmatically navigate to route */}
            <div className='my-5'>
                <h5>Navigating programmatically using useNavigate hook : ( Button onClick )</h5>
                <button className='btn btn-primary' onClick={ () => navigate('/about') }>About</button>
                <button className='btn btn-primary ms-2' onClick={ () => navigate('/contact') }>Contact</button>
            </div>

            <div className='my-5'>
                <h5>Navigating using event handler function : ( It is used for navigating based on some logic or condition )</h5>
                <button className='btn btn-primary' onClick={ () => navigateToAbout() }>About</button>
                <button className='btn btn-primary ms-2' onClick={ () => navigateToContact() }>Contact</button>
            </div>

            <div className='my-5'>
                <h5>Navigating to multiple pages using single event handler function</h5>
                <button className='btn btn-primary' onClick={ () => navigateTo('/about') }>About</button>
                <button className='btn btn-primary ms-2' onClick={ () => navigateTo('/contact') }>Contact</button>
            </div>
        </div>
    )
}

export default Home;
