import LoginForm from '../components/LogInForm';
import Head from 'next/head'
import HomePage from '../components/HomePage';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import { useAuth } from '../contexts/Auth';
// import styles from '@/styles/Home.module.css'


export default function Home() {

  // const { user, login } = useAuth();

  return (
    <>
      <Head />
      {/* {user ?
        <HomePage />
        :
        <LoginForm onLogin={login} />
      } */}
      <Header />
      <Main />
      <Footer />

    </>
  )
}


