import React from 'react';
import gif from '../../img/gif/confirm.webp';

const OrderConfirmed = () => {
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <img src={gif} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default OrderConfirmed;