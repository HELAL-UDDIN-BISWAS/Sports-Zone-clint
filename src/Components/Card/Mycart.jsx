import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Mycard from './Mycard';

const Mycart = () => {
    const mycarts=useLoaderData()
    console.log(mycarts)
    return (
        <div className='grid lg:grid-cols-2 gap-5'>
            {
                mycarts?.map(mycart=><Mycard key={mycart._id} mycart={mycart}></Mycard>)
            }
        </div>
    );
};

export default Mycart;