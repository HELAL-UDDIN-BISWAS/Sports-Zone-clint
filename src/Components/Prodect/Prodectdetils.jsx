import React, { useEffect, useState } from 'react';
import Detailscards from '../detailCard/Detailscards';
import { useLoaderData } from 'react-router-dom';


const Prodectdetils = ({categorys}) => {
  const [categoris,setcategori]=useState([])

     useEffect(()=>{
      fetch('http://localhost:5000/categories')
      .then(res=>res.json())
      .then(data=>setcategori(data))
          }
     ,[])

     const categoryfilter = categoris?.splice(0,3)
    const {imageurl,name,BraNdname,Type,ShortDescription,Rating}=categorys || {}
    return (
        <div>
        <div className="carousel w-full h-96">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={imageurl}className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src="/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src="/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
          <img src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
      <h2>{name}</h2>
      <p>BraNdname:{BraNdname}</p>
      <p>Type:{Type}</p>
      <span>ShortDescription:{ShortDescription}</span>
      <h4>Rating:{Rating}</h4>
      <div className='grid lg:grid-cols-3 mx-auto'>
        {
          categoryfilter.map(categoryitem=><Detailscards categoryitem={categoryitem}></Detailscards>)
        }
      </div>
      </div>
    );
};

export default Prodectdetils;