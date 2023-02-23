// require('dotenv').config()
import { useRef } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import useResource from "../hooks/useResource";
import axios from "axios";
import { event } from "jquery";



export default function Search(props) {

    const [searchData, setSearchData] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [isError, setIsError] = useState(false);
    const [isMovie, setIsMovie] = useState(true);


    // const SearchBar = () => {

    //     const clickPoint = useRef();

    //     const handleFocus = () => {
    //         clickPoint.current.style.display = "none";
    //     };

    //     const handleBlur = () => {
    //         clickPoint.current.style.display = "block";
    //     };

    // }
    
    async function handleSearch(term, event) {

        event.preventDefault();
        try {
            const url = `https://partner-api.reelgood.com/v1.0/content/search?term=${term}&all_services=true&content_type=Both`;
            const headers = {
                'Accept': 'text/plain',
                'x-api-key': 'WV107IL7Jw8KLsQJthBjlkntU9ZEVoP96ttBehhr0YTvXfOzUiOlzdETDdsoYs1dNrS5COtxfmTR4T56LkREtM6vv'
            };
            // const url = `${process.env.NEXT_PUBLIC_RESOURCE_URL}/streaming_services/search/`;
            const searchData = await axios.get(headers,url);
            console.log(searchData.data);
            setSearchData(searchData.data);
            setIsMovie(true);
            return searchData.data;
        } catch (error) {
            setErrorMessage(error.message);
            setIsError(true);
            setIsMovie(false);
        }
    }
    // handleSearch = async () => {
    //     try {
    //         let url = `${process.env.NEXT_PUBLIC_RESOURCE_URL}/streaming_services/search/`
    //         let searchData = await axios.get(url);
    //         this.setState({
    //             searchData: searchData.data,
    //             isMovie: true
    //         })
    //     } catch (error) {
    //         this.setState({
    //             errorMessage: error.message,
    //             isError: true,
    //             isMovie: false
    //         })
    //     }
    // }


    return (
        <>
            <Header />
            <div className="items-center px-4 flex justify-center mt-20 mb-40">
                <div className="relative mr-3">
                    {/* removed ref={clickPoint} */}
                    <div className="absolute top-3 left-3 items-center">

                        <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                    </div>
                    <input
                        type="text"
                        className="block p-2 pl-10 w-70 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:pl-3"
                        placeholder="Search Here..."
                        // onFocus={handleFocus}
                        // onBlur={handleBlur}
                    />
                    <form onSubmit={handleSearch}>
                        <button className="bg-green-500 hover:bg-green-700 text-white border border-gray-500 px-4 py-2 rounded transition duration-300">Submit</button>
                    </form>
                </div>
            </div>
            <Footer/>
        </>
    );
}

