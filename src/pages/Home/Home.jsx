import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../../Components/Card/Card';
import Brand from '../brand/Brand';
import SectionOne from '../Section/SectionOne';
import SectionTwo from '../Section/SectionTwo';

const Home = () => {
    const categories = useLoaderData()

    return (
        <div>
            <Brand></Brand>
           
            <div className='max-sm:flex-col mx-50 my-5 max-w-screen-xl mx-auto w-5/6'><h3 className='text-3xl '>Sports Zone - Your Ultimate Destination for Action-Packed Entertainment!"</h3></div>

            <div className='grid lg:grid-cols-6 lg:gap-4 mx-auto max-sm:flex-col mx-50 my-5 max-w-screen-xl  w-5/6 '>
                {
                    categories?.map(categorie => <Card className="my-10 mx-auto items-center justify-center" key={categorie._id} categorie={categorie}></Card>)
                }
            </div>
            <div className='my-10'><SectionOne></SectionOne></div>
            <div className='my-10'><SectionTwo></SectionTwo></div>
        </div>
    );
};

export default Home;