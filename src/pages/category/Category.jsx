import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Prodectdetils from '../../Components/Prodect/Prodectdetils';

const Category = () => {
    const [findcategory, setfindcategory]=useState({})
    const {id}= useParams();
    const caregorys=useLoaderData();
    useEffect(()=>{
        const findpeoples=caregorys?.find(people=>people.id == id)
        setfindcategory(findpeoples)
     
     },[id,caregorys])
   
    return (
        <div>
            <Prodectdetils key={findcategory.id} findcategory={findcategory}></Prodectdetils>
        </div>
    );
};

export default Category;