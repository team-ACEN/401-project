import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutComponent from '../components/AboutComponent';
import Link from 'next/link';

export default function About() {
    return (
        <>
            <Header/>
            <AboutComponent/>
            <Footer />
        </>
    );
}