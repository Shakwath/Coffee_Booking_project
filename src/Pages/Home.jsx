import React from 'react';
import Banner from '../Components/Banner';
import Heading from '../Components/Heading';

const Home = () => {
    return (
        <div>
            {/* Banner */}
            <Banner></Banner>
            {/* Heading */}
            <Heading title={'This is a title'} subtitle={'This is a subtitle'}></Heading>
            {/* Catagories */}
            {/* Dynamic Nasted compo */}
        </div>
    );
};

export default Home;