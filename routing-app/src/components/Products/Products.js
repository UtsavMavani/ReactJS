import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function Products() {
  return (
    <div>
      <h1>Products Page</h1>

      <div className='my-5'>
          <nav className='navbar navbar-expand-lg'>
            <ul className="navbar-nav me-auto mb-lg-0">
              <li className="nav-item">
                  <NavLink className="nav-link" to="mobile">Mobile</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink className="nav-link" to="laptop">Laptop</NavLink>
              </li>
            </ul>
          </nav>
            
          <Outlet/>
      </div>
    </div>
  )
}

export default Products;
