import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../../CustomLink/CustomLink';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const Navbar = () => {

    const [user, loading, error] = useAuthState(auth);


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <CustomLink className="navbar-brand" to='/'></CustomLink>
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
                <CustomLink className="nav-link" to="/aboutme">About me</CustomLink>
                </li>
                <li className="nav-item">
                <CustomLink className="nav-link" to="/login">{
                  !user ? 'Login' : <span> <button
                  onClick={()=>signOut(auth)}
                   type="button" className="btn btn-light">Sign out</button>{ user.email}
                  </span>
              }</CustomLink>
                </li>
            </ul>
            <span className="navbar-text">
              
            </span>
            </div>
        </div>
</nav>
    );
};

export default Navbar;