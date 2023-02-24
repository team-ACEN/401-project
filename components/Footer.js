import Link from 'next/link';

export default function Footer() {
    return (
        <footer className='p-10 mt-8text-black-50 bg-gradient-to-r from-purple-500 to-pink-500'>
            <nav>
                <ul className="flex gap-10">
                    <li>
                        <Link className="text-white-500 hover:text-green-500" href="/" as="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className="text-white-500 hover:text-green-500" href="/searchpage" as="/searchpage">
                            Search
                        </Link>
                    </li>
                    <li>
                        <Link className="text-white-500 hover:text-green-500" href="/about" as="/about-us">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link className="text-white-500 hover:text-green-500" href="/about" as="/about-us">
                            Log Out
                        </Link>
                    </li>
                </ul>
            </nav>
        </footer>
    );
}