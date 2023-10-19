import React from 'react';

const SectionOne = () => {
    return (
        <div className='mx-auto grid lg:grid-cols-5  lg:mx-20 gap-3'>
            <div className='col-span-2'>
                <div >
                    <img className='h-96 w-full' src={'https://i.ibb.co/jDm5Cyf/marvel-1641554-1280.jpg'} alt="" />
                </div>
            </div>
            <div className='col-span-3'>
                <div className='grid lg:grid-cols-3'>
                <div className='col-span-1'>
                    <img src={'https://i.ibb.co/Rvngbf6/iron-man-6288206-1280.jpg'} alt="" />
                </div>
                <div className='col-span-1'>
                    <img src={'https://i.ibb.co/Bz2TjmD/Screenshot-2023-10-19-235544.png'} alt="" />
                </div>
                <div className='col-span-1'>
                    <img src={'https://i.ibb.co/Rvngbf6/iron-man-6288206-1280.jpg'} alt="" />
                </div>
                </div>
               
              
                
            </div>


        </div>
    );
};

export default SectionOne;