import React, { useEffect, useState } from 'react';
import Detailscards from '../detailCard/Detailscards';

const Prodectdetils = ({findcategory}) => {
  const [categoris,setcategori]=useState([])

     useEffect(()=>{
      fetch('http://localhost:5000/categories')
      .then(res=>res.json())
      .then(data=>setcategori(data))
          }
     ,[])
     const categoryfilter = categoris?.splice(0,3)
  const {image_url,name,brand_name,type,short_description,}=findcategory || {}

    return (
        <div>
        <div className="carousel w-full h-96">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={image_url}className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src={'https://i.ibb.co/Bz2TjmD/Screenshot-2023-10-19-235544.png'} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src={'https://i.ibb.co/zmYFV9g/Screenshot48.png'} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
          <img src={'https://i.ibb.co/zNHYdSb/tv-7725366-1280.jpg'} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
      <h2 className='text-4xl'>{name}</h2>
      <p className='text-2xl'>BraNd Name:{brand_name}</p>
      <p className='text-xl'>Type:{type}</p>
      <span>ShortDescription:{short_description}</span>
      
      <div className='grid lg:grid-cols-3 mx-auto'>
        {
          categoryfilter.map(categoryitem=><Detailscards categoryitem={categoryitem}></Detailscards>)
        }
      </div>
      </div>
    );
};

export default Prodectdetils;