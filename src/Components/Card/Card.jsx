import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ categorie }) => {
  const {image_url, name,id } = categorie || {}
  console.log(categorie)
  return (
    <Link to={`/category/${id}`}>
      <div className='items-center text-center justify-center flex-col flex'>
        <img className='h-36 w-48 rounded items-center text-center justify-center flex' src={image_url} alt="" />
        <h4 className='text-center'>{name}</h4>
      </div>
    </Link>

  );
};

export default Card;