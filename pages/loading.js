import Head from 'next/head';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Loading from '../components/Loading';

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Head>
        <title>Floor Checker - Find The Total Floors Of Your NFT's</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <Loading />
      <Footer />
    </div>
  );
};

export default Home;