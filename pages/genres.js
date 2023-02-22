import Link from 'next/link';
import Genres from '../components/Genres';





export default function genres() {
  return (
    <>
    <Genres/>
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      
      <Link href="/" className="p-4 m-4 text-2xl bg-gray-300 rounded-lg">Back to Home</Link>
    </div>
    </>
  );
}