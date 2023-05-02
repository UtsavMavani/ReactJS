import React, { createContext, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext(null);

const userData = [
    {
        email: "utsav123@gmail.com",
        password: "123456"
    },
    {
        email: "dhruvil123@gmail.com",
        password: "123456"
    },
    {
        email: "kenil123@gmail.com",
        password: "123456"
    }
];

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();

    const login = (data) => {
        const validUser =  userData.find( (user) => {
            return (user.email === data.email && user.password === data.password);
        });

        if (!validUser) {
            return alert("Invalid credentials..!");
        }

        sessionStorage.setItem('user', data.email);
        navigate('/', { replace: true });
    }

    const logout = () => {
        sessionStorage.clear();
        navigate('/login', { replace: true });
    }

    const isLogin = sessionStorage.getItem('user') !== null;

    const loginUserData = sessionStorage.getItem('user');

    return (
        <AuthContext.Provider value={{ login, logout, isLogin, loginUserData }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}
