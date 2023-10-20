import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Deteils = () => {
    const details =useLoaderData()
    console.log(details)
    const {imageurl,name,BraNdname,Type,ShortDescription,Rating}=details || {}
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl my-10">
       <img src={imageurl} alt="Album"/>
        <div className="card-body">
          <h2 className="card-title">Name: {name}</h2>
          <p>Type: {Type}</p>
          <h3>Brand Name: {BraNdname}</h3>
          <p>ShortDescription: {ShortDescription}</p>
          <h2>Rating: {Rating}</h2>
          <div className="card-actions justify-end">
          
          </div>
        </div>
      </div>
    );
};

export default Deteils;