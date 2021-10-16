import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Categories from '../Categories/Categories';
import ChoseUs from '../ChoseUs/ChoseUs';
import HeroBanner from '../HeroBanner/HeroBanner';

const Home = () => {
    return (
        <>
            <HeroBanner></HeroBanner>
            <Categories></Categories>
            <ChoseUs></ChoseUs>
            <Footer></Footer>
        </>
    );
};

export default Home;