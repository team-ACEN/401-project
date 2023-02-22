import Link from 'next/link';

export default function Footer() {
    return (
        <footer className='p-10 mt-8text-black-50 bg-gradient-to-r from-purple-500 to-pink-500'>
            <Link href="/about"> About
            </Link>
        </footer>
    );
}