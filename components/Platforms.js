import { useState } from 'react';
import Slider from '../components/Slider';
import Link from 'next/Link';
import React from 'react';
// import Image from 'next/image';

export default function Platforms() {

    const MyButton = React.forwardRef(({ onClick, href }, ref) => {
        return (
            <a href={href} onClick={onClick} ref={ref}>
                Submit
            </a>
        )
    })
    const [imageClicked, setImageClicked] = useState(false);


    const handleClick = () => {
        setImageClicked(true);
    };

    return (
        <>
            <div className="mt-20">
                <p className="text-center text-2xl mb-10 font-bold text-black"> What Services Do You Have?</p>
            </div>
            <div className="justify-center grid grid-rows-2 grid-flow-col gap-10 ">
                <div className="aspect-w-1">
                    <p>Netflix</p>
                    <a onClick={handleClick}>
                        <img className=" object-fill h-40 w-96 ... w-16 md:w-32 lg:w-48 transform transition duration-300 hover:scale-110" src="/assets/netflix_logo.png" alt='netflix'></img>
                    </a>
                </div>
                <div>
                    <p>Hulu</p>
                    <a onClick={handleClick}>
                        <img className=" object-fill h-40 w-96 ... w-16 md:w-32 lg:w-48 transform transition duration-300 hover:scale-110" src="/assets/hulu.png" alt='hulu'></img>
                    </a>
                </div>
                <div>
                    <p>HBO Max</p>
                    <a onClick={handleClick}>
                        <img className="object-fill h-40 w-96 ... w-16 md:w-32 lg:w-48 transform transition duration-300 hover:scale-110" src="/assets/hbomax.png" alt='hbomax'></img>
                    </a>
                </div>
                <div>
                    <p>Amazon Prime Video</p>
                    <a onClick={handleClick}>
                        <img className="object-fill h-40 w-96 ... w-16 md:w-32 lg:w-48 transform transition duration-300 hover:scale-110" src="/assets/amazonprime.jpeg" alt='amazonprimevideo'></img>
                    </a>
                </div>
                <div>
                    <p>Disney+</p>
                    <a onClick={handleClick}>
                        <img className="object-fill h-40 w-96 ... w-16 md:w-32 lg:w-48 transform transition duration-300 hover:scale-110" src="/assets/disneyplus.png" alt='disneyplus'></img>
                    </a>
                </div>
                <div>
                    <p>Peacock</p>
                    <a onClick={handleClick}>
                        <img className="object-fill h-40 w-96 ... w-16 md:w-32 lg:w-48 transform transition duration-300 hover:scale-110" src="/assets/peacock.jpeg" alt='peacock'></img>
                    </a>
                </div>
                <div>
                    <p>Paramount+</p>
                    <a onClick={handleClick}>
                        <img className="object-fill h-40 w-96 ... w-16 md:w-32 lg:w-48 transform transition duration-300 hover:scale-110" src="/assets/paramountplus.png" alt='paramountplus'></img>
                    </a>
                </div>
                <div>
                    <p>YouTube TV</p>
                    <a onClick={handleClick}>
                        <img className="object-fill h-40 w-96 ... w-16 md:w-32 lg:w-48 transform transition duration-300 hover:scale-110" src="/assets/youtube.png" alt='youtube'></img>
                    </a>
                </div>
            </div>
            <div className='mb-40 mt-20 text-center'>
                <Link href="/genrespage">
                    <button className="bg-green-500 hover:bg-green-700 text-white border border-gray-500 px-6 py-3 rounded transition duration-300">Submit</button>
                </Link>
            </div>
            {/* <Slider></Slider> */}
        </>
    );
}