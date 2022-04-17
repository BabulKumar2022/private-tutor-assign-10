import React, { useEffect, useState } from 'react';
import useHooks from '../../Hooks/useHooks';
import SingleService from '../SingleService/SingleService';



const Home = () => {
   const data = useHooks('data.json')

     if (data.length){
         data.length = 3;
     }   
//   console.log(data)
    return (
        <div className='container '> 
            <h1>Home</h1>
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