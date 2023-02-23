import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function About() {
    return (
        <>
            <Header/>
            <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
                <h1 className="text-4xl"> About Page Coming Soon</h1>
                <Link href="/" className="p-4 m-4 text-2xl bg-gray-300 rounded-lg">Back to Home</Link>
            </div>
            <Footer />
        </>
    );
}