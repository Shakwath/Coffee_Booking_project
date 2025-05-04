import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            {/* Navbar */}
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-232px)] py-12'>
            <Outlet />
            </div>
           
            {/* Footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;