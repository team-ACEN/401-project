import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/Link';
import React from 'react';


export default function Genres() {
    const MyButton = React.forwardRef(({ onClick, href }, ref) => {
        return (
            <a href={href} onClick={onClick} ref={ref}>
                Submit
            </a>
        )
    })

    MyButton.displayName = 'MyButton';
    return (
        <>
            <Header />
            <div className="mt-20 text-center">
                <p className="text-center text-2xl mb-10 font-bold text-black shadow-md"> What Genres Do You Prefer?</p>
            </div>
            <div className=" justify-center grid grid-rows-2 grid-flow-col gap-10 ">
                <div style={{ border: "4px solid #ccc" }} className=" justify-center grid grid-rows-2 grid-flow-col gap-4 border-black-300 bg-gradient-to-r from-purple-500 to-pink-500">
                    <div className="aspect-w-1">
                        <p>Action</p>
                        <img className=" object-fill h-40 w-96 ... w-16 md:w-32 lg:w-48 transform transition duration-300 hover:scale-110" src="/assets/action.png" alt='netflix'></img>
                    </div>
                    <div>
                        <p>Comedy</p>
                        <img className=" object-fill h-40 w-96 ... w-16 md:w-32 lg:w-48 transform transition duration-300 hover:scale-110" src="/assets/comedy.png" alt='hulu'></img>
                    </div>
                    <div>
                        <p>Documentary</p>
                        <img className="object-fill h-40 w-96 ... w-16 md:w-32 lg:w-48 transform transition duration-300 hover:scale-110" src="assets/documentary.png" alt='hbomax'></img>
                    </div>
                    <div>
                        <p>Drama</p>
                        <img className="object-fill h-40 w-96 ... w-16 md:w-32 lg:w-48 transform transition duration-300 hover:scale-110" src="assets/drama.png" alt='amazonprimevideo'></img>
                    </div>
                    <div>
                        <p>Fantasy</p>
                        <img className="object-fill h-40 w-96 ... w-16 md:w-32 lg:w-48 transform transition duration-300 hover:scale-110" src="/assets/fantasy.png"></img>
                    </div>

                    <div>
                        <p>Horror</p>
                        <img className="object-fill h-40 w-96 ... w-16 md:w-32 lg:w-48 transform transition duration-300 hover:scale-110" src="/assets/horror.png" alt='peacock'></img>
                    </div>
                    <div>
                        <p>Musical</p>
                        <img className="object-fill h-40 w-96 ... w-16 md:w-32 lg:w-48 transform transition duration-300 hover:scale-110" src="/assets/music.png" alt='paramountplus'></img>
                    </div>
                    <div>
                        <p>Mystery</p>
                        <img className="object-fill h-40 w-96 ... w-16 md:w-32 lg:w-48 transform transition duration-300 hover:scale-110" src="/assets/detective.png" alt='youtube'></img>
                    </div>
                    <div>
                        <p>Romance</p>
                        <img className="object-fill h-40 w-96 ... w-16 md:w-32 lg:w-48 transform transition duration-300 hover:scale-110" src="/assets/romance.png" alt='youtube'></img>
                    </div>
                    <div>
                        <p>Thriller</p>
                        <img className="object-fill h-40 w-96 ... w-16 md:w-32 lg:w-48 transform transition duration-300 hover:scale-110" src="/assets/thriller.png" alt='youtube'></img>
                    </div>
                    <div>
                        <p>Science Fiction</p>
                        <img className="object-fill h-40 w-96 ... w-16 md:w-32 lg:w-48 transform transition duration-300 hover:scale-110" src="assets/sci-fi.png" alt='youtube'></img>
                    </div>
                    <div>
                        <p>Western</p>
                        <img className="object-fill h-40 w-96 ... w-16 md:w-32 lg:w-48 transform transition duration-300 hover:scale-110" src="/assets/western.png" alt='youtube'></img>
                    </div>
                </div>
                <div className='mb-40 mt-20 text-center'>
                    <Link href="/recommendations">
                        <button className="bg-green-500 hover:bg-green-700 text-white border border-gray-500 px-6 py-3 rounded transition duration-300">Submit</button>
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
}

