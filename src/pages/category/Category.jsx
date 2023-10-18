import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Prodectdetils from '../../Components/Prodect/Prodectdetils';

const Category = () => {
    const caregorys=useLoaderData();
    console.log(caregorys)
    return (
        <div>
            <Prodectdetils key={caregorys._id} categorys={caregorys}></Prodectdetils>
        </div>
    );
};

export default Category;