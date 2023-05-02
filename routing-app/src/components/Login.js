import React, { useState } from 'react';
import { useAuth } from '../utils/Auth';

function Login() {
    const [userInput, setUserInput] = useState({email: '', password: ''});
    const [errors, setErrors] = useState({});

    const auth = useAuth();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    const handleInputChange = (e) => {
        setUserInput({
          ...userInput,
          [e.target.name]: e.target.value,
        });

        validateInput(userInput);

        const newErrors = validateInput({
            ...userInput,
            [e.target.name]: e.target.value,
        });

        setErrors(newErrors);
    };

    const validateInput = (input) => {
        const errors = {};
      
        if (!input.email) {
          errors.email = 'Email is required';
        } else if (!userInput.email.match(emailRegex)) {
          errors.email = 'Email is invalid';
        }
      
        if (!input.password) {
          errors.password = 'Password is required';
        }
      
        return errors;
    };

    const handleLogin = (e) => {
        e.preventDefault();

        const newErrors = validateInput({
            ...userInput,
            [e.target.name]: e.target.value,
        });

        setErrors(newErrors);

        if(Object.keys(newErrors).length > 0) {
            return;
        }

        auth.login(userInput);
    }

    // Validate on login button click
    // const handleLogin = (e) => {
    //     e.preventDefault();

    //     const errors = {};

    //     if (!userInput.email) {
    //         errors.email = 'Email is required';
    //     } else if (!userInput.email.match(emailRegex)) {
    //         errors.email = 'Email is invalid';
    //     }

    //     if (!userInput.password) {
    //         errors.password = 'Password is required';
    //     }

    //     setErrors(errors);

    //     if(Object.keys(errors).length > 0) {
    //         return;
    //     }

    //     auth.login(userInput);
    // }

    return (
        <div className="col-md-4">
            <h2 className="text-center mb-4">Log in</h2>

            <form action="" className="row g-4">
                <div className="col-md-12">
                    <label htmlFor="email" className="form-label">Email : </label>
                    <input type="email" name="email" className="form-control" placeholder="Email address"
                        onChange={handleInputChange}
                    />
                    {errors.email && <span className='error'>{errors.email}</span>}
                </div>

                <div className="col-md-12">
                    <label htmlFor="password" className="form-label">Password : </label>
                    <input type="password" name="password" className="form-control" placeholder="Password"
                        onChange={handleInputChange}
                    /> 
                    {errors.password && <span className='error'>{errors.password}</span>}
                </div>

                <div className="col-md-12">
                    <button className='btn btn-primary w-100' onClick={handleLogin}>Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login;
