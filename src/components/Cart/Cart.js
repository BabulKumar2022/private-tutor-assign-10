import React from 'react';

const Cart = () => {
    return (
        <div className='container col-4 gy-2'>
            <h1 className='text-center'>Cart</h1>
           
            <div className="card " >
                <div className="card-header">
                    Total: 2543 TAKA
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">General Math: 5/month</li>
                    <li className="list-group-item">Computer Science: 2/month</li>
                    <li className="list-group-item">Bangla: 4/month</li>
                </ul>
                </div>
        </div>
    );
};

export default Cart;