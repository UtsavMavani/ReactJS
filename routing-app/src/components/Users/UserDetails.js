import React from 'react';
import { useParams } from 'react-router-dom';

function UserDetails() {
    const { id } = useParams();

    return (
        <div>
            <h1>User Details Page</h1>

            <div className="my-5">
                <p>User Id : {id}</p>
            </div>
        </div>
    )
}

export default UserDetails;
