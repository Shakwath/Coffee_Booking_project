import React from 'react';
import Banner from '../Components/Banner';
import Heading from '../Components/Heading';
import { useLoaderData } from 'react-router-dom';
import Categories from '../Components/Categories';

const Home = () => {
    const categories = useLoaderData()
    console.log(categories)
    return (
        <div>
            {/* Banner */}
            <Banner></Banner>
            {/* Heading */}
            <Heading title={'Browse Coffee By Category'} 
            subtitle={'Choice your desire coffee Category to browse'}></Heading>
            {/* Catagories */}
            <Categories categories={categories}></Categories>
            {/* Dynamic Nasted compo */}
        </div>
    );
};

export default Home;