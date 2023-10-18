import React from 'react';

const Card = ({ categorie }) => {
    const{imageurl,name}=categorie || {}
    console.log(categorie)
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img className=' h-60 w-full' src={imageurl} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default Card;