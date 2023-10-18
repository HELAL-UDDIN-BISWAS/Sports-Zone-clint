import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ categorie }) => {
  const { imageurl, name,_id } = categorie || {}
  console.log(categorie)
  return (
    <Link to={`/category/${_id}`}>
      <div className=''>
        <img className='h-36 w-48 rounded-t-xl' src={imageurl} alt="" />
        <h4 className='text-center'>{name}</h4>
      </div>
    </Link>

  );
};

export default Card;