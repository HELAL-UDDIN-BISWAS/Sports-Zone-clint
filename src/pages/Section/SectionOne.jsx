import React from 'react';

const SectionOne = () => {
    return (
        <div className='grid lg:grid-cols-2 gap-6 items-center justify-around max-sm:flex-col mx-50  max-w-screen-xl mx-auto w-5/6'>
            <div className='col-span-1'>
                <img className='rounded' src={'https://i.ibb.co/zNHYdSb/tv-7725366-1280.jpg'} alt="" />
            </div>
            <div className='col-span-1'>
                <h1 className='text-3xl'>Sports Zone - Your Ultimate Destination for Action-Packed Entertainment!"</h1>
                <p className='text-xl'>Tune in to Sports Zone for an adrenaline-pumping experience like no other. Whether you're a die-hard fan of football, basketball, tennis, or any other sport, we've got you covered. From live matches and in-depth analysis to exclusive athlete interviews and thrilling documentaries, Sports Zone is your gateway to the world of sports."
</p>
            </div>
        </div>



    );
};

export default SectionOne;