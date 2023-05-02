import React from 'react';
import { useAuth } from '../utils/Auth';

function Profile() {
    const auth = useAuth();

    return (
        <div>
            <h1>Profile Page</h1>

            <div className="my-5">
                <h5>Welcome, {auth.loginUserData}</h5>
            </div>
        </div>
    )
}

export default Profile;
