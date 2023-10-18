import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/Header/Header';
import Footer from '../pages/Footer/Footer';
import Login from '../pages/Login/Login';
import Home from '../pages/Home/Home';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet>
                <Home></Home>
            </Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;