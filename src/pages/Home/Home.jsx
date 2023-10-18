import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../../Components/Card/Card';
import Brand from '../brand/Brand';

const Home = () => {
    const categories = useLoaderData()

    return (
        <div>
            <Brand></Brand>
            <div className='grid lg:grid-cols-6 lg:gap-4 my-4 mx-auto '>

                {
                    categories?.map(categorie => <Card className="my-10 mx-auto items-center justify-center" key={categorie._id} categorie={categorie}></Card>)
                }



            </div>
        </div>
    );
};

export default Home;