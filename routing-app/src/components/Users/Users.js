import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Users() {
  return (
    <div>
      <h1>Users Page</h1>

      <div className='my-5'>
        <p><Link to="/users/1">Utsav</Link></p>
        <p><Link to="/users/2">Dhruvil</Link></p>
        <p><Link to="/users/3">Kenil</Link></p>

        <Outlet/>
      </div>
    </div>
  )
}

export default Users;
