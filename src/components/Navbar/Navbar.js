import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../../CustomLink/CustomLink';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <CustomLink className="navbar-brand" to='/'>Random</CustomLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <CustomLink className="nav-link " aria-current="page" to="/home">Home</CustomLink>
                </li>
                <li className="nav-item">
                <CustomLink className="nav-link" to="/services">Services</CustomLink>
                </li>
                <li className="nav-item">
                <CustomLink className="nav-link" to="/blogs">Blogs</CustomLink>
                </li>
                <li className="nav-item">
                <CustomLink className="nav-link" to="/login">Login</CustomLink>
                </li>
            </ul>
            <span className="navbar-text">
                Navbar text with an inline element
            </span>
            </div>
        </div>
</nav>
    );
};

export default Navbar;