import React from 'react';
import './HeroBanner.css';

const HeroBanner = () => {
    return (
        <>
            <section className="hero_banner">
                <div className="hero_content">
                    <h2>Best food for your daily belly</h2>
                    <div className="search_field">
                        <input type="text" placeholder="search food items" />
                        <button className="search_btn">Search</button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HeroBanner;