import React from 'react';
import { NavLink, useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../utils/Auth';

function Navbar({ title, isShow }) {
    const [searchText, setSearchText] = useSearchParams();
    const navigate = useNavigate();
    const auth = useAuth();

    const serachNavigate = (e) => {
        e.preventDefault();
        navigate(searchText.get('page'));
    }

    const handleLogout = () => {
        auth.logout();
    }

    if (isShow) {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">
            
                        <h1 className="navbar-brand pb-0">{title}</h1>
            
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
            
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/products">Products</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/users">Users</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/about">About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                                </li>
                            </ul>
            
                            <form className="d-flex" onSubmit={serachNavigate}>
                                <input className="form-control me-2" type="search" placeholder="Search page here..." 
                                    onChange={ (e) => setSearchText({page: e.target.value})} 
                                />
                                <button className="btn btn-outline-warning">Search</button>
                            </form>

                            <ul className="navbar-nav ms-5">
                                {
                                    auth.isLogin && (
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/profile">Profile</NavLink>
                                        </li>
                                    )
                                }
                                {
                                    auth.isLogin && (
                                        <li className="nav-item">
                                            <button className="btn btn-outline-danger" onClick={handleLogout}>Logout</button>
                                        </li> 
                                    )
                                } 
                                {
                                    !auth.isLogin && (
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/login">Login</NavLink>
                                        </li> 
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }

    return null;
}

export default Navbar;
