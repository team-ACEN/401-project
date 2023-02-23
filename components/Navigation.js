import Link from 'next/link';


export default function Navigation() {
    return (
        <nav>
            <ul className="flex gap-10">
                <li>
                    <Link className="text-white-500 hover:text-green-500" href="/" as="/">
                        Profile
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
    );
}