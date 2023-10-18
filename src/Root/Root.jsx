import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/Header/Header';
import Footer from '../pages/Footer/Footer';
import Home from '../pages/Home/Home';

const Root = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Header></Header>
            <Outlet>
                <Home></Home>
            </Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;