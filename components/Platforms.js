import { useState } from 'react';
// import Image from 'next/image';

export default function Platforms() {


    const [imageClicked, setImageClicked] = useState(false);


    const handleClick = () => {
        setImageClicked(true);
    };

    return (
        <>
        <div>
                <p className="text-center text-2xl"> What Services Do You Have?</p>
            </div>
            <div className="flex justify-center grid grid-rows-2 grid-flow-col gap-4 ">
                <div className="aspect-w-1">
                    <p>Netflix</p>
                    <a onClick={handleClick}>
                        <img className=" object-fill h-40 w-96 ... w-16 md:w-32 lg:w-48" src="/assets/netflix_logo.png" alt='netflix'></img>
                    </a>
                </div>
                <div>
                    <p>Hulu</p>
                    <a onClick={handleClick}>
                        <img className=" object-fill h-40 w-96 ... w-16 md:w-32 lg:w-48" src="/assets/hulu.png" alt='hulu'></img>
                    </a>
                </div>
                <div>
                    <p>HBO Max</p>
                    <a onClick={handleClick}>
                        <img className="object-fill h-40 w-96 ... w-16 md:w-32 lg:w-48" src="/assets/hbomax.png" alt='hbomax'></img>
                    </a>
                </div>
                <div>
                    <p>Amazon Prime Video</p>
                    <a onClick={handleClick}>
                        <img className="object-fill h-40 w-96 ... w-16 md:w-32 lg:w-48" src="/assets/amazonprime.jpeg" alt='amazonprimevideo'></img>
                    </a>
                </div>
                <div>
                    <p>Disney+</p>
                    <a onClick={handleClick}>
                        <img className="object-fill h-40 w-96 ... w-16 md:w-32 lg:w-48" src="/assets/disneyplus.png" alt='disneyplus'></img>
                    </a>
                </div>
                <div>
                    <p>Peacock</p>
                    <a onClick={handleClick}>
                        <img className="object-fill h-40 w-96 ... w-16 md:w-32 lg:w-48" src="/assets/peacock.jpeg" alt='peacock'></img>
                    </a>
                </div>
                <div>
                    <p>Paramount+</p>
                    <a onClick={handleClick}>
                        <img className="object-fill h-40 w-96 ... w-16 md:w-32 lg:w-48" src="/assets/paramountplus.png" alt='paramountplus'></img>
                    </a>
                </div>
                <div>
                    <p>YouTube TV</p>
                    <a onClick={handleClick}>
                        <img className="object-fill h-40 w-96 ... w-16 md:w-32 lg:w-48" src="/assets/youtube.png" alt='youtube'></img>
                    </a>
                </div>
            </div>
            <div>
                <button className="rounded-full">Button A</button>
            </div>
        </>
    );
}