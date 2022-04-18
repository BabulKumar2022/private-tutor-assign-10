import React from 'react';
import { Link } from 'react-router-dom';
import './SingleService.css'

const SingleService = ({user}) => {
    const {name, id, img,description, price}= user || {};
    return (
        
            <div className=" container col-4 gy-2  "  >
                <div className="card">
                    <div className="card-container">
                        <img className='img-size' src={img} alt=""></img>
                        
                        <div className="card-body">
                            <h5 className="card-title">Subject:{name}</h5>
                            <p>Description: {description}</p>
                            <p className="card-text">Price:{price}</p>
                            <Link to="/cart" className="btn btn-primary">Order Now</Link>
                        </div>
                    </div>
                    
                </div>
             </div>
       
    );
};

export default SingleService;