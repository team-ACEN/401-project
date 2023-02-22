import Link from 'next/link';
import Header from './Header';
import Search from '../components/Search';
import Footer from './Footer';




export default function ResultComponent() {

    return (
      <>
        <Header/>
        <Search></Search>
        <div className="mt-20">
          <p className="text-center text-2xl mb-10 font-bold text-black"> Search Results:</p>
        </div>
        <Footer />
      </>
    );
}