import React, { useState } from 'react';

const Login = () => { 
    const [login, setLogin]= useState(false);
    return (
        <div className='container'>
           
            <form className=' w-50 mx-auto mt-5'>
            <h1>{login ? 'Login' : 'Register'}</h1>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                {
                   !login && <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                }
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={()=> setLogin(!login)}/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Already Register</label>
                </div>
                <button type="submit" className="btn btn-primary">{login ? 'Login' : 'Register'}</button>
            </form>
        </div>
    );
};

export default Login;