import Navigation from "../components/Navigation";

export default function Header() {
    return (
        <header className='flex text-lg items-center justify-between p-10  text-black-50 font-500 bg-gradient-to-r from-purple-500 to-pink-500'>
            <h1 className="font-bold text-2xl"> ONE STOP STREAM SPOT </h1>
            <Navigation/>
        </header>
    );
}