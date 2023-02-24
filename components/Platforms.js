import { MyContext } from '../contexts/selectedServices';
import React, { useState } from 'react';
import Link from 'next/link';
import { CheckCircleIcon } from '@heroicons/react/solid'; 

const StreamingServiceButton = ({ service, imageSrc, isSelected, onClick }) => {
    return (
        <div className="aspect-w-1 relative">
            {isSelected && (
                <div className="absolute top-2 right-2">
                    <CheckCircleIcon className="h-6 w-6 text-green-500" />
                </div>
            )}
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
        if (selectedServices.includes(service)) {
            setSelectedServices(selectedServices.filter((s) => s !== service));
        } else {
            setSelectedServices([...selectedServices, service]);
        }
    };

    console.log(selectedServices);

    return (
        <MyContext.Provider value={{ selectedServices, setSelectedServices }}>
            <div className="mt-20">
                <p className="text-center text-2xl mb-10 font-bold text-black shadow-md">
                    {' '}
                    What Services Do You Have?
                </p>
            </div>
            <div
                style={{ border: '4px solid #ccc' }}
                className="justify-center grid grid-rows-2 grid-flow-col gap-10 border-10 border-black-300 bg-gradient-to-r from-purple-500 to-pink-500"
            >
                <StreamingServiceButton
                    service="Netflix"
                    imageSrc="/assets/netflix_logo.png"
                    isSelected={selectedServices.includes('1')}
                    onClick={() => handleServiceClick('1')}
                />
                <StreamingServiceButton
                    service="Hulu"
                    imageSrc="/assets/hulu.png"
                    isSelected={selectedServices.includes('4')}
                    onClick={() => handleServiceClick('4')}
                />
                <StreamingServiceButton
                    service="HBO Max"
                    imageSrc="/assets/hbomax.png"
                    isSelected={selectedServices.includes('365')}
                    onClick={() => handleServiceClick('365')}
                />
                <StreamingServiceButton
                    service="Amazon Prime Video"
                    imageSrc="/assets/amazonprime.jpeg"
                    isSelected={selectedServices.includes('2')}
                    onClick={() => handleServiceClick('2')}
                />
                <StreamingServiceButton
                    service="Disney+"
                    imageSrc="/assets/disneyplus.png"
                    isSelected={selectedServices.includes('353')}
                    onClick={() => handleServiceClick('353')}
                />
                <StreamingServiceButton
                    service="Peacock"
                    imageSrc="/assets/peacock.jpeg"
                    isSelected={selectedServices.includes('367')}
                    onClick={() => handleServiceClick('367')}
                />
                <StreamingServiceButton
                    service="Paramount+"
                    imageSrc="/assets/paramountplus.png"
                    isSelected={selectedServices.includes('375')}
                    onClick={() => handleServiceClick('375')}
                />
                <StreamingServiceButton
                    service="YouTube TV"
                    imageSrc="/assets/youtube.png"
                    isSelected={selectedServices.includes('354')}
                    onClick={() => handleServiceClick('354')}
                />
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

 // import { MyContext } from '../contexts/selectedServices';
// import React, { useState } from 'react';
// import Link from 'next/link';

// const StreamingServiceButton = ({ service, imageSrc, onClick }) => {
//     return (
//         <div className="aspect-w-1">
//             <p>{service}</p>
//             <a onClick={onClick}>
//                 <img
//                     className="object-fill h-40 w-96 ... w-16 md:w-32 lg:w-48 transform transition duration-300 hover:scale-110"
//                     src={imageSrc}
//                     alt={service}
//                 />
//             </a>
//         </div>
//     );
// };

// const StreamingServices = () => {
//     const [selectedServices, setSelectedServices] = useState([]);

//     const handleServiceClick = (service) => {
//         setSelectedServices([...selectedServices, service]);
//     };

//     console.log(selectedServices);

//     return (
//         <MyContext.Provider value={{ selectedServices, setSelectedServices }}>
//             <div className="mt-20">
//                 <p className="text-center text-2xl mb-10 font-bold text-black shadow-md"> What Services Do You Have?</p>
//             </div>
//             <div style={{ border: "4px solid #ccc" }} className="justify-center grid grid-rows-2 grid-flow-col gap-10 border-10 border-black-300 bg-gradient-to-r from-purple-500 to-pink-500">
//                 <StreamingServiceButton service="Netflix" imageSrc="/assets/netflix_logo.png" onClick={() => handleServiceClick('1')} />
//                 <StreamingServiceButton service="Hulu" imageSrc="/assets/hulu.png" onClick={() => handleServiceClick('4')} />
//                 <StreamingServiceButton service="HBO Max" imageSrc="/assets/hbomax.png" onClick={() => handleServiceClick('365')} />
//                 <StreamingServiceButton service="Amazon Prime Video" imageSrc="/assets/amazonprime.jpeg" onClick={() => handleServiceClick('2')} />
//                 <StreamingServiceButton service="Disney+" imageSrc="/assets/disneyplus.png" onClick={() => handleServiceClick('353')} />
//                 <StreamingServiceButton service="Peacock" imageSrc="/assets/peacock.jpeg" onClick={() => handleServiceClick('367')} />
//                 <StreamingServiceButton service="Paramount+" imageSrc="/assets/paramountplus.png" onClick={() => handleServiceClick('375')} />
//                 <StreamingServiceButton service="YouTube TV" imageSrc="/assets/youtube.png" onClick={() => handleServiceClick('354')} />
//             </div>
//             <div className='mb-40 mt-20 text-center'>
//                 <Link href="/genrespage">
//                     <button className="bg-green-500 hover:bg-green-700 text-white border border-gray-500 px-6 py-3 rounded transition duration-300">Next</button>
//                 </Link>
//             </div>
//         </MyContext.Provider>
//     );
// };

// export default StreamingServices;