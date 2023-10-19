import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/Provider';

const PrivateRouts = ({children}) => {
    const {user,loding}=useContext(AuthContext);
    if(loding){
        return <div className='items-center text-center flex h-screen justify-center'><span className="loading loading-spinner loading-lg"></span></div>
    }
    console.log(user)
    if(user){
        return children;
    }
    return <Navigate to="/login"></Navigate>;
};

export default PrivateRouts;