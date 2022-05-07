import Head from 'next/head';
import Navigation from "../components/Navigation";
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="min-h-screen bg-slate-900">
            <Head>
                <title>Floor Checker - FAQ</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navigation />
            <div className="min-h-screen">
                
            </div>
            <Footer />
        </div>
    );
};

export default Home;