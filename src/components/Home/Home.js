import React, { useEffect, useState } from 'react';
import useHooks from '../../Hooks/useHooks';
import SingleService from '../SingleService/SingleService';
import './Home.css'



const Home = () => {
   const data = useHooks('data.json')

     if (data.length){
         data.length = 3;
     }   
//   console.log(data)
    return (
        <div className='container '> 
            <div className="header-area">
                <div className="header-hero">
                    <div className="heder-left-text">
                    <h1>Excellent Education Pro  </h1>
                  <h1 className='color'>Your Future on Going</h1>
                  <p>The best for you. Now here are available pro smart high quality private tutor. more difficult subject is solution your need. Bangla, General math, computer science, more  are on your dor to one step.</p>
                    </div>
                    <div className="heder-right-img">
                    <img src='./images/tutor.jpg' alt=''/>
                    </div>
                </div>

            </div>






            
            <h4>Total:{data.length}</h4>
            <div className="row">
            {
                data.map(user=><SingleService key={user.id} user={user}></SingleService>)
            }
            </div>
            
        </div>
    );
};

export default Home;