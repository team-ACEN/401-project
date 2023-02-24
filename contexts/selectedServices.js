import RecommendationsComponent from '../components/RecommendationsComponent';
import { createContext, useState } from 'react';

// Create a context object
export const MyContext = createContext();

// Wrap your component tree with the context provider
export default function MyApp({ Component, pageProps }) {
    const [selectedServices, setSelectedServices] = useState([]);

    return (
        <MyContext.Provider value={{ selectedServices: [], setSelectedServices }}>
            <RecommendationsComponent {...pageProps} />
        </MyContext.Provider>
    );
}
