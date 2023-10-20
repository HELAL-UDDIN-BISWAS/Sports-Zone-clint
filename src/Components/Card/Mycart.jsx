import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Mycard from './Mycard';

const Mycart = () => {
    const deleted=useLoaderData()
    // console.log(mycarts)
    const [mycarts,setmycarts]=useState(deleted)

    return (
        <div className='grid lg:grid-cols-2 gap-5'>
            {
                mycarts?.map(mycart=><Mycard 
                    key={mycart._id}
                     mycart={mycart}
                     mycarts={mycarts}
                     setmycarts={setmycarts}>
                     </Mycard>)
            }
        </div>
    );
};

export default Mycart;