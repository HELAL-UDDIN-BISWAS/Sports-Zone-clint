import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../../Components/Card/Card';

const Home = () => {
    const categories=useLoaderData()
    return (
        <div className='grid lg:grid-cols-3 lg:gap-4 my-4 mx-auto items-center justify-center border-cyan-700'>

            {
                categories?.map(categorie=><Card className=" mx-auto items-center justify-center" key={categorie._id} categorie={categorie}></Card>)
            }
        </div>
    );
};

export default Home;