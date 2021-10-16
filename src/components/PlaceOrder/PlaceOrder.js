import React from 'react';
import { Link } from 'react-router-dom';
import './PlaceOrder.css';

const PlaceOrder = () => {
    return (
        <>
            <div className="placeOrder_wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="order_form">
                                <form>
                                    <div>
                                        <input type="text" placeholder="delivery to door" />
                                    </div>
                                    <div>
                                        <input type="text" placeholder="107 Rd No 8" />
                                    </div>
                                    <div>
                                        <input type="text" placeholder="Flat,suite or floor" />
                                    </div>
                                    <div>
                                        <input type="text" placeholder="Business Name" />
                                    </div>
                                    <div>
                                        <input type="text" placeholder="Add delivery instructor" />
                                    </div>
                                    <div className="submit mt-4">
                                        <input type="submit" value="Save & Continue" />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="cart_item">
                                <ul>
                                    <li>SubTotal:</li>
                                    <li>Tax:</li>
                                    <li>Delivery fee:</li>
                                    <li>Total:</li>
                                </ul>
                                <Link to="/orderConfirmed">
                                    <button className="placeOrder_btn mt-4">Place Order</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PlaceOrder;