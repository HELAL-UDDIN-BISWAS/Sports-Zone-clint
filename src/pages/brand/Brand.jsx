import React from 'react';

const Brand = () => {
    return (
        <div className="relative">
            <img className="h-[50vh] w-full" src={"https://i.ibb.co/zXMpgFj/Screenshot-2023-09-27-182537.png"} alt="" />
            <div className="bg-[#ecf0f1cc] absolute left-0 top-0 h-full w-full" ></div>
            <div className=" absolute top-2/4 left-2/4 -ml-40">
                <h2 className="mb-3 font-bold text-2xl">I Grow By Helping People In Need</h2>
                
            </div>
        </div>
    );
};

export default Brand;