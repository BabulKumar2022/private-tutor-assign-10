import React from 'react';
import { Link } from 'react-router-dom';

const SingleService = ({user}) => {
    const {name, id, price}= user || {};
    return (
        
            <div className=" container col-4 gy-2"  >
                <div className="card">
                    {/* <img src="..." className="card-img-top" alt="..."> */}
                    <div className="card-body">
                        <h5 className="card-title">Subject:{name}</h5>
                        <p className="card-text">Price:{price}</p>
                        <Link to="/cart" className="btn btn-primary">Order Now</Link>
                    </div>
                </div>
             </div>
       
    );
};

export default SingleService;