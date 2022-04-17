import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';

const Login = () => { 
    const [login, setLogin]= useState(false);
    const [passWordError, setPassWordError] = useState('');
   
   const [userInfo, setUserInfo]= useState({
       email: '',
       password: '',
       confirmPassword: ''
   })
//    new user creat
        const [
            createUserWithEmailAndPassword,
            createUser,
            createLoading,
            createError,
        ] = useCreateUserWithEmailAndPassword(auth);



   const handleFormInput = (event) =>{
       console.log(event.target.name, event.target.value);
       userInfo[event.target.name]= event.target.value;
   }
   
    const handleSubmit = (event) =>{
        event.preventDefault();
        if(userInfo.password !== userInfo.confirmPassword){
            setPassWordError('Password can not match');
        }


        console.log(userInfo);
    }
    
    
    
    return (
        <div className='container'>
           
            <form className=' w-50 mx-auto mt-5' onSubmit={handleSubmit}>
            <h1>{login ? 'Login' : 'Register'}</h1>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input onBlur={(event)=> handleFormInput(event)} type="text" className="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input onBlur={(event)=> handleFormInput(event)} type="password" name="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                {
                   !login && <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
                    <input onBlur={(event)=> handleFormInput(event)} type="password" name="confirmPassword" className="form-control" id="exampleInputPassword1"/>
                </div>
                }
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={()=> setLogin(!login)}/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Already Register</label>
                </div>
                <button type="submit" className="btn btn-primary">{login ? 'Login' : 'Register'}</button>
                <p className='text-danger'>{passWordError}</p>
            </form>
        </div>
    );
};

export default Login;