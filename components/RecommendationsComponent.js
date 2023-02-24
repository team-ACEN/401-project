import { MyContext } from '../contexts/selectedServices';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState, useContext } from "react";

export default function RecommendationsComponent({ results }) {
    const context = useContext(MyContext);
    const selectedServices = context.selectedServices || [];
    const setSelectedServices = context.setSelectedServices;

    // const { selectedServices, setSelectedServices } = useContext(MyContext);

    if (!results) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <Header />
            <div className="items-center px-4 flex justify-center mt-20 mb-40">
                <div className="relative mr-3">
                    <div className="absolute top-3 left-3 items-center">
                        <svg
                            className="w-5 h-5 text-gray-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </div>
                </div>
            </div>

            <div className="w-full">
                <p className="text-center text-2xl mb-10 font-bold text-black">
                    Search Results:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {results.map((item) => (
                        <div
                            key={item.id}
                            className="flex flex-col items-center"
                        >
                            <img
                                src={item.poster_url}
                                className="object-cover h-64 w-full ... transform transition duration-300 hover:scale-110"
                            ></img>
                            <div className="mt-4">
                                <p className="text-center font-bold">{item.title}</p>
                                <p className="text-center">{item.service_groups}</p>
                                <p className="text-center">{item.content_type}</p>
                                <p className="text-center">{item.released_on}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </>
    );
}

export async function getStaticProps() {
    try {
        const response = await fetch(
            `https://401-project-backend.vercel.app/streaming_services/popular/`
        );
        const data = await response.json();
        console.log(data);
        return {
            props: {
                results: data,
            },
        };
    } catch (error) {
        console.log(error);
        return {
            props: {
                results: null,
            },
        };
    }
}

