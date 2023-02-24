import Link from 'next/link';

export default function AboutComponent() {
    return (
        <>
            <div className="mt-20 text-center">
                <p className="text-center text-2xl mb-10 font-bold text-black shadow-md"> About Us</p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 lg:gap-12 mt-20 mb-20">
                <div className="bg-white shadow-md rounded-md overflow-hidden">
                    <img
                        className="object-fill h-40 w-96 md:w-32 lg:w-48 my-2"
                        src="/assets/angelos.png"
                        alt="angelos"
                    />
                    <div className="p-4">
                        <ul className="list-disc list-inside mb-4">
                            <li className="font-bold">Software Developer</li>
                            <li>Background in Car Sales</li>
                            <li>Experimented with Code Academy Before Code Fellows</li>
                            <li>Coding Bug</li>
                        </ul>
                    </div>
                </div>
                <div className="bg-white shadow-md rounded-md overflow-hidden">
                    <img
                        className="object-fill h-40 w-96 md:w-32 lg:w-48 my-2"
                        src="/assets/cody.png"
                        alt="cody"
                    />
                    <div className="p-4">
                        <ul className="list-disc list-inside mb-4">
                            <li className="font-bold">
                                Active Duty Army Intelligence Analyst turned Software Engineer
                            </li>
                            <li>Background in Military Intelligence and Personnel Security Management</li>
                            <li>Pursuing Bachelor's degree in Graphic Information Technology w/ ASU</li>
                            <li>Hope to get into VR Development someday</li>
                        </ul>
                    </div>
                </div>
                <div className="bg-white shadow-md rounded-md overflow-hidden">
                    <img
                        className="object-fill h-40 w-96 md:w-32 lg:w-48 my-2"
                        src="/assets/erik.png"
                        alt="erik"
                    />
                    <div className="p-4">
                        <ul className="list-disc list-inside mb-4">
                            <li className="font-bold">Full-Stack Software Developer</li>
                        </ul>
                        <ul className="list-disc list-inside mb-4">
                            <li>Python, Javascript, MERN, CSS, HTML</li>
                        </ul>
                        <ul className="list-disc list-inside mb-4">
                            <li>Sales, Marketing, Customer Service</li>
                        </ul>
                        <ul className="list-disc list-inside mb-4">
                            <li>Experience with Startups, Enterprise, and small businesses</li>
                        </ul>
                        <ul className="list-disc list-inside mb-4">
                            <li>Strong KPI Performer</li>
                        </ul>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img className="object-fill h-40 w-96 md:w-32 lg:w-48 my-2" src="/assets/nick.png" alt='nick' />
                    <div className="p-4">
                        <ul className="list-disc list-inside text-center">
                            <li className="mb-4">Hard-working Professional Driven to Accomplish Great Things</li>
                            <li>Passionate about technology and its applied uses for work and play</li>
                            <li>Live and play in Phoenix, AZ</li>
                            <li>Favorite Genres: Sci-Fi, Action, Comedy</li>
                            <li>Favorite Movies: The Fifth Element, The Silence of the Lambs</li>
                            <li>Favorite Shows: Black Mirror, Love, Death and Robots</li>
                        </ul>
                    </div>
                </div>


            </div>




        </>
    );
}