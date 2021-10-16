import React from 'react';
import './Footer.css';
import footerLogo from '../../../img/logo.png';

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="footer_logo">
                                <img src={footerLogo} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="footer_text">
                                <ul>
                                    <li><a href="/">About online food</a></li>
                                    <li><a href="/">Read our blog</a></li>
                                    <li><a href="/">Sign up to delivery</a></li>
                                    <li><a href="/">Add your restaurant</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="footer_text">
                                <ul>
                                    <li><a href="/">Get helps</a></li>
                                    <li><a href="/">Read FAQs</a></li>
                                    <li><a href="/">View all cities</a></li>
                                    <li><a href="/">Restaurant near me</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;