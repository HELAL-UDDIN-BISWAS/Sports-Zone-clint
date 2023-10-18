import React from 'react';

const Mycard = ({ mycart }) => {
    console.log(mycart)
    const {imageurl,name,BraNdname,Type,ShortDescription,Rating}=mycart || {}
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img className='w-72' src={imageurl} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">Name: {name}</h2>
                <p>Type: {Type}</p>
                
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                </div>
            </div>
        </div>
    );
};

export default Mycard;