import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './Auth';

function RequireAuth({ children }) {
    const auth = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!auth.isLogin) {
            navigate('/login');
        }
    });

    return (
        <div>
            {children}
        </div>
    )
}

export default RequireAuth;
