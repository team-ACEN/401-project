import { MyContext } from '../contexts/selectedServices';
import React, { useState } from 'react';
import Link from 'next/link';

const StreamingServiceButton = ({ service, imageSrc, onClick }) => {
    return (
        <div className="aspect-w-1">
            <p>{service}</p>
            <a onClick={onClick}>
                <img
                    className="object-fill h-40 w-96 ... w-16 md:w-32 lg:w-48 transform transition duration-300 hover:scale-110"
                    src={imageSrc}
                    alt={service}
                />
            </a>
        </div>
    );
};

const StreamingServices = () => {
    const [selectedServices, setSelectedServices] = useState([]);

    const handleServiceClick = (service) => {
        setSelectedServices([...selectedServices, service]);
    };

    console.log(selectedServices);

    return (
        <MyContext.Provider value={{ selectedServices, setSelectedServices }}>
            <div className="mt-20">
                <p className="text-center text-2xl mb-10 font-bold text-black"> What Services Do You Have?</p>
            </div>
            <div className="justify-center grid grid-rows-2 grid-flow-col gap-10 ">
                <StreamingServiceButton service="Netflix" imageSrc="/assets/netflix_logo.png" onClick={() => handleServiceClick('1')} />
                <StreamingServiceButton service="Hulu" imageSrc="/assets/hulu.png" onClick={() => handleServiceClick('4')} />
                <StreamingServiceButton service="HBO Max" imageSrc="/assets/hbomax.png" onClick={() => handleServiceClick('365')} />
                <StreamingServiceButton service="Amazon Prime Video" imageSrc="/assets/amazonprime.jpeg" onClick={() => handleServiceClick('2')} />
                <StreamingServiceButton service="Disney+" imageSrc="/assets/disneyplus.png" onClick={() => handleServiceClick('353')} />
                <StreamingServiceButton service="Peacock" imageSrc="/assets/peacock.jpeg" onClick={() => handleServiceClick('367')} />
                <StreamingServiceButton service="Paramount+" imageSrc="/assets/paramountplus.png" onClick={() => handleServiceClick('375')} />
                <StreamingServiceButton service="YouTube TV" imageSrc="/assets/youtube.png" onClick={() => handleServiceClick('354')} />
            </div>
            <div className='mb-40 mt-20 text-center'>
                <Link href="/genrespage">
                    <button className="bg-green-500 hover:bg-green-700 text-white border border-gray-500 px-6 py-3 rounded transition duration-300">Next</button>
                </Link>
            </div>
        </MyContext.Provider>
    );
};

export default StreamingServices;

