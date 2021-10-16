import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.css';
import logo from '../../../img/logo2.png';
import useAuth from '../../../hooks/useAuth';
// import useFoodDetails from '../../../hooks/useFoodDetails';
import { AuthContext } from '../../../Context/AuthProvider';

const Header = () => {
    const { user, logout } = useAuth();
    const { foodContext } = useContext(AuthContext);
    const { count } = foodContext;

    window.addEventListener('scroll', () => {
        const navBar = document.querySelector('nav_bar');
        navBar?.classList.toggle('sticky',window.scrollY > 0)
    });
    return (
        <>
            <div className="navBar_container">
                <div className="container">
                    <div className="nav_bar">
                        <div className="logo">
                            <Link to="/home"><img src={logo} alt="" /></Link>
                        </div>
                        <div className="cart_login_area d-flex align-items-center">
                            <div className="cart_icon">
                                <FontAwesomeIcon className="icon" icon={faShoppingCart} />
                                <div className="count_value"><span className="countNumber">{count}</span></div>
                            </div>
                            {user?.email && <span className="mx-2">Hi! {user?.displayName} </span>}
                            {
                                user?.email ? <button onClick={logout} className="btn btn-danger">Logout</button>
                                    : <div className="d-flex">
                                        <div className="login_btn">
                                            <Link to="/login">Login</Link>
                                        </div>
                                        <div className="sign_up_btn">
                                            <Link to="/signUp">Sign Up</Link>
                                        </div>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;