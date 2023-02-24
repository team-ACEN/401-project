// require('dotenv').config()
import { useRef } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import useResource from "../hooks/useResource";
import { event } from "jquery";



export default function Search(props) {
    const [results, setResults] = useState([]);
    const [query, setQuery] = useState('');

    async function handleSearch() {
        // event.preventDefault();
        try {
            const response = await fetch(`https://401-project-backend.vercel.app/streaming_services/search?term=${query}`)
            let data;
            data = await response.json();
            console.log(data);
            setResults(data);
        } catch (error) {
            console.log(error);
        }
    }
    const SearchBar = () => {

        const clickPoint = useRef();

        const handleFocus = () => {
            clickPoint.current.style.display = "none";
        };

        const handleBlur = () => {
            clickPoint.current.style.display = "block";
        };

    }

    return (
        <>
            <Header />
            <div className="items-center px-4 flex flex-col mt-8">
                <div className="relative">
                    {/* removed ref={clickPoint} */}
                    <div className="absolute top-3 left-3 items-center">
                        <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                    </div>
                    <div className="flex justify-center">
                        <input
                            name="term"
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="block p-2 pl-10 w-70 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:pl-3 mr-2"
                            placeholder="Search Here..."
                        />
                        <button onClick={handleSearch} className="bg-green-500 hover:bg-green-700 text-white border border-gray-500 px-4 py-2 rounded transition duration-300">Submit</button>
                    </div>
                </div>
            </div>
            <div className="w-full mt-8">
                <p className="text-center text-2xl mb-10 font-bold text-black">Search Results:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {results.map(item => (
                        <div key={item.id} className="flex flex-col items-center">
                            <img src={item.poster_url} className="object-cover h-64 w-full ... transform transition duration-300 hover:scale-110"></img>
                            <div className="mt-4">
                                <p className="text-center font-bold">{item.title}</p>
                                <p className="text-center"> Streaming Services: {item.service_groups}</p>
                                <p className="text-center"> Content Type: {item.content_type}</p>
                                <p className="text-center">Release Date: {item.released_on}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    );
}

